import * as THREE from 'three';
import { VectorTile } from '@mapbox/vector-tile';
import { PbfReader } from 'pbf';
import { ORIGIN, ROUTE, MAP } from './config.js';
import { tileX, tileY, tileLon, tileLat } from './geo.js';

// 地面は PLATEAU の土地利用モデル（水面・河川敷・用途別の敷地）と道路モデル（道路・橋梁）を描いたもの。
// 水面は「川」として当たり判定にも使い、橋梁区間の道路は水面の上に重ねて渡れるようにする。
const LUSE_COLORS = [
  ['水面', '#124e78'], ['その他自然地', '#16262a'], ['公共空地', '#12281f'], ['田', '#14261c'], ['畑', '#14261c'], ['山林', '#10221a'],
  ['道路用地', '#2c344e'], ['商業用地', '#222440'], ['住宅用地', '#181d30'], ['公益施設用地', '#1e2438'], ['工業用地', '#1c1e2c'], ['交通施設用地', '#1e2030'],
];
const ROAD = '#3a4464', BRIDGE = '#8a7c58';
const T = 512, M = 256; // 1タイルあたりの描画解像度 / 水面マスクの解像度

export const fetchMvt = async (url) => {
  const r = await fetch(url);
  return r.ok ? new VectorTile(new PbfReader(new Uint8Array(await r.arrayBuffer()))) : null;
};

function trace(c, f, k) {
  c.beginPath();
  for (const ring of f.loadGeometry()) {
    for (let i = 0; i < ring.length; i++) i ? c.lineTo(ring[i].x * k, ring[i].y * k) : c.moveTo(ring[i].x * k, ring[i].y * k);
    c.closePath();
  }
}

export function createGround({ scene, renderer, frame, groundY }) {
  const z = MAP.zoom, dLat = 1 / 110940, dLon = 1 / 91290;
  const tx0 = tileX(ORIGIN.lon + MAP.west * dLon, z), tx1 = tileX(ORIGIN.lon + MAP.east * dLon, z);
  const ty0 = tileY(ORIGIN.lat + MAP.north * dLat, z), ty1 = tileY(ORIGIN.lat + MAP.south * dLat, z);
  const nx = tx1 - tx0 + 1, ny = ty1 - ty0 + 1;

  const cv = document.createElement('canvas'); cv.width = nx * T; cv.height = ny * T;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#10152a'; ctx.fillRect(0, 0, cv.width, cv.height);
  const mcv = document.createElement('canvas'); mcv.width = M; mcv.height = M;
  const mctx = mcv.getContext('2d', { willReadFrequently: true });

  const nw = frame.toLocal(tileLat(ty0, z), tileLon(tx0, z)), se = frame.toLocal(tileLat(ty1 + 1, z), tileLon(tx1 + 1, z));
  const w = nx * M, h = ny * M, mask = new Uint8Array(w * h);
  // 地面は 50m 間隔の格子。高さは建物の足元から推定した地形（terrain.js）に合わせて更新する
  const STEP = 50, gx = Math.ceil((se.x - nw.x) / STEP), gz = Math.ceil((se.z - nw.z) / STEP);
  const P = [], UV = [], IDX = [];
  for (let j = 0; j <= gz; j++) for (let i = 0; i <= gx; i++) {
    const u = i / gx, v = j / gz;
    P.push(nw.x + (se.x - nw.x) * u, 0, nw.z + (se.z - nw.z) * v); UV.push(u, 1 - v);
  }
  for (let j = 0; j < gz; j++) for (let i = 0; i < gx; i++) {
    const a = j * (gx + 1) + i, b = a + 1, c = a + gx + 1, d = c + 1;
    IDX.push(a, c, b, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2));
  geo.setIndex(IDX);
  const refreshHeights = () => {
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, groundY(p.getX(i), p.getZ(i)) - 0.05);
    p.needsUpdate = true; geo.computeBoundingSphere();
  };
  refreshHeights();
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const mat = new THREE.MeshBasicMaterial({ map: tex });
  scene.add(new THREE.Mesh(geo, mat));

  const ground = { mat, refreshHeights, ready: false, tilesDone: 0, tilesTotal: nx * ny,
    isWater(x, zz) {
      const u = (x - nw.x) / (se.x - nw.x), v = (zz - nw.z) / (se.z - nw.z);
      if (u < 0 || u >= 1 || v < 0 || v >= 1) return false;
      return mask[Math.floor(v * h) * w + Math.floor(u * w)] === 1;
    } };

  async function drawTile(tx, ty) {
    const [luse, tran] = await Promise.all([MAP.luse(z, tx, ty), MAP.tran(z, tx, ty)].map((u) => fetchMvt(u).catch(() => null)));
    const ox = (tx - tx0) * T, oy = (ty - ty0) * T;
    ctx.save(); ctx.beginPath(); ctx.rect(ox, oy, T, T); ctx.clip(); ctx.translate(ox, oy);
    mctx.fillStyle = '#000'; mctx.fillRect(0, 0, M, M);
    const L = luse?.layers.luse;
    for (let i = 0; L && i < L.length; i++) {
      const f = L.feature(i); if (f.type !== 3) continue;
      const cls = f.properties.luse_class || '', hit = LUSE_COLORS.find(([k]) => cls.startsWith(k));
      if (!hit) continue;
      trace(ctx, f, T / L.extent); ctx.fillStyle = hit[1]; ctx.fill('evenodd');
      if (hit[0] === '水面') { trace(mctx, f, M / L.extent); mctx.fillStyle = '#fff'; mctx.fill('evenodd'); }
    }
    const Rd = tran?.layers.Road;
    for (let pass = 0; pass < 2; pass++) for (let i = 0; Rd && i < Rd.length; i++) { // 橋梁は最後に重ねる
      const f = Rd.feature(i); if (f.type !== 3) continue;
      const bridge = (f.properties.uro_RoadStructureAttribute_uro_sectionType || '').includes('橋梁');
      if (bridge !== (pass === 1)) continue;
      trace(ctx, f, T / Rd.extent); ctx.fillStyle = bridge ? BRIDGE : ROAD; ctx.fill('evenodd');
      trace(mctx, f, M / Rd.extent); mctx.fillStyle = '#000'; mctx.fill('evenodd');
    }
    ctx.restore();
    const d = mctx.getImageData(0, 0, M, M).data, mx = (tx - tx0) * M, my = (ty - ty0) * M;
    for (let r = 0; r < M; r++) for (let c = 0; c < M; c++) mask[(my + r) * w + mx + c] = d[(r * M + c) * 4] > 127 ? 1 : 0;
    tex.needsUpdate = true;
    ground.tilesDone++;
  }

  // スタート地点に近いタイルから順に読み込む
  const jobs = [], sx = tileX(ROUTE[0].lon, z), sy = tileY(ROUTE[0].lat, z);
  for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) jobs.push([tx, ty]);
  jobs.sort((a, b) => Math.hypot(a[0] - sx, a[1] - sy) - Math.hypot(b[0] - sx, b[1] - sy));
  let next = 0;
  const worker = async () => {
    while (next < jobs.length) { const j = jobs[next++]; await drawTile(j[0], j[1]).catch((e) => console.warn('ground tile failed', j, e)); }
  };
  Promise.all(Array.from({ length: 4 }, worker)).then(() => { ground.ready = true; });
  return ground;
}
