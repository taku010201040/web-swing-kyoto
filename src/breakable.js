import * as THREE from 'three';

// 築年数の古い建物を「壊れる建物」にする。
// 建築年は PLATEAU の建物属性 bldg:yearOfConstruction（3D Tiles のバッチテーブル）をそのまま使う。
// 1980年以前＝1981年の新耐震基準より前に建った建物を対象にする。値が 1 などの建物は「不明」として壊れない。
export const OLD_YEAR = 1980;
const YEAR_KEY = 'bldg:yearOfConstruction', ID_KEY = 'gml_id';

const broken = new Map();   // gml_id → 建築年
const records = [];         // 潰した頂点の記録（やり直し時に元へ戻す）
const falling = [];         // 崩れている最中のもの
const propCache = new WeakMap();
const _inv = new THREE.Matrix4(), _up = new THREE.Vector3(), _v = new THREE.Vector3();

function prop(bt, key) {
  let c = propCache.get(bt);
  if (!c) propCache.set(bt, c = {});
  if (!(key in c)) { try { c[key] = bt.getPropertyArray(key) || null; } catch { c[key] = null; } }
  return c[key];
}
function tableOf(mesh) {
  let o = mesh;
  while (o && !o.batchTable) o = o.parent;
  return o ? o.batchTable : null;
}

// レイの当たった建物の情報（建築年・壊れるかどうか）
export function infoAt(hit) {
  const mesh = hit.object, attr = mesh.geometry.attributes._batchid, bt = tableOf(mesh);
  if (!attr || !bt || !hit.face) return null;
  const bid = attr.getX(hit.face.a);
  const y = prop(bt, YEAR_KEY)?.[bid], id = prop(bt, ID_KEY)?.[bid];
  const year = y >= 1000 ? y : null;
  return { mesh, bid, id, year, fragile: year !== null && year <= OLD_YEAR, gone: !!mesh.userData.gone?.has(bid) };
}
export const isGone = (hit) => {
  const g = hit.object.userData.gone, a = hit.object.geometry.attributes._batchid;
  return !!(g && a && hit.face && g.has(a.getX(hit.face.a)));
};

// 1棟ぶんの頂点を集めて、下へ押し潰す準備をする
function collapse(mesh, bid, instant) {
  const geo = mesh.geometry, attr = geo.attributes._batchid, pos = geo.attributes.position;
  if (!attr || (mesh.userData.gone ||= new Set()).has(bid)) return;
  const list = [];
  for (let i = 0; i < attr.count; i++) if (attr.getX(i) === bid) list.push(i);
  if (!list.length) return;
  mesh.userData.gone.add(bid);
  mesh.updateWorldMatrix(true, false);
  _up.set(0, 1, 0).transformDirection(_inv.copy(mesh.matrixWorld).invert()); // メッシュ座標系での「上」
  const idx = Uint32Array.from(list), orig = new Float32Array(idx.length * 3), h = new Float32Array(idx.length);
  let lo = Infinity;
  for (let k = 0; k < idx.length; k++) {
    _v.fromBufferAttribute(pos, idx[k]);
    orig.set([_v.x, _v.y, _v.z], k * 3);
    h[k] = _v.dot(_up); lo = Math.min(lo, h[k]);
  }
  for (let k = 0; k < h.length; k++) h[k] -= lo;
  const rec = { mesh, idx, orig, h, up: _up.clone(), t: 0, dur: 1.1 };
  records.push(rec);
  if (instant) finalize(rec); else falling.push(rec);
}
function squash(rec, k) {
  const pos = rec.mesh.geometry.attributes.position, { idx, orig, h, up } = rec;
  for (let j = 0; j < idx.length; j++) {
    const d = h[j] * k + (k >= 1 ? 3 : 0); // 最後は地面の下へ沈めて見えなくする
    pos.setXYZ(idx[j], orig[j * 3] - up.x * d, orig[j * 3 + 1] - up.y * d, orig[j * 3 + 2] - up.z * d);
  }
  pos.needsUpdate = true;
}
function finalize(rec) {
  squash(rec, 1);
  rec.mesh.geometry.boundsTree?.refit(); // 当たり判定からも消す
}

// 建物を壊す。同じ建物が別の詳細度のタイルにも入っているので、読み込み済みのものはまとめて潰す。
export function breakBuilding(info, tilesets) {
  if (!info || !info.id || broken.has(info.id)) return false;
  broken.set(info.id, info.year);
  collapse(info.mesh, info.bid, false);
  for (const t of tilesets) t.forEachLoadedModel((scene) => {
    const ids = scene.batchTable && prop(scene.batchTable, ID_KEY);
    const i = ids ? ids.indexOf(info.id) : -1;
    if (i >= 0) scene.traverse((m) => m.isMesh && m !== info.mesh && collapse(m, i, true));
  });
  return true;
}
// タイルが読み込まれたとき（BVH を作る前）に、すでに壊した建物を反映する
export function applyBroken(scene) {
  if (!broken.size || !scene.batchTable) return;
  const ids = prop(scene.batchTable, ID_KEY);
  if (!ids) return;
  for (let i = 0; i < ids.length; i++) if (broken.has(ids[i])) scene.traverse((m) => m.isMesh && collapse(m, i, true));
}
export function updateBreaks(dt) {
  for (let i = falling.length - 1; i >= 0; i--) {
    const rec = falling[i];
    rec.t += dt;
    const k = Math.min(1, rec.t / rec.dur);
    if (k >= 1) { finalize(rec); falling.splice(i, 1); } else squash(rec, k * k);
  }
}
export function restoreAll() {
  for (const rec of records) {
    const geo = rec.mesh.geometry, pos = geo.attributes.position;
    if (!pos) continue;
    for (let j = 0; j < rec.idx.length; j++) pos.setXYZ(rec.idx[j], rec.orig[j * 3], rec.orig[j * 3 + 1], rec.orig[j * 3 + 2]);
    pos.needsUpdate = true;
    rec.mesh.userData.gone?.clear();
    geo.boundsTree?.refit();
  }
  records.length = falling.length = 0;
  broken.clear();
}
export const brokenCount = () => broken.size;

// 崩れるときの土ぼこり
export function createDust(scene, max = 900) {
  const pos = new Float32Array(max * 3), vel = new Float32Array(max * 3), life = new Float32Array(max);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xcfc4ae, size: 0.4, transparent: true, opacity: 0.55, depthWrite: false }));
  pts.frustumCulled = false;
  scene.add(pts);
  let next = 0;
  for (let i = 0; i < max; i++) pos[i * 3 + 1] = -9999;
  return {
    burst(p, n = 140, spread = 7) {
      for (let k = 0; k < n; k++) {
        const i = next = (next + 1) % max;
        pos.set([p.x + (Math.random() - 0.5) * spread, p.y + (Math.random() - 0.3) * spread, p.z + (Math.random() - 0.5) * spread], i * 3);
        vel.set([(Math.random() - 0.5) * 14, Math.random() * 9, (Math.random() - 0.5) * 14], i * 3);
        life[i] = 1.2 + Math.random() * 1.2;
      }
    },
    update(dt) {
      for (let i = 0; i < max; i++) {
        if (life[i] <= 0) continue;
        life[i] -= dt;
        if (life[i] <= 0) { pos[i * 3 + 1] = -9999; continue; }
        vel[i * 3 + 1] -= 9 * dt;
        for (let a = 0; a < 3; a++) { vel[i * 3 + a] *= 1 - 1.2 * dt; pos[i * 3 + a] += vel[i * 3 + a] * dt; }
      }
      geo.attributes.position.needsUpdate = true;
    },
  };
}
