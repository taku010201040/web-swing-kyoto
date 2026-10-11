import * as THREE from 'three';
import { TilesRenderer } from '3d-tiles-renderer';
import { GLTFExtensionsPlugin } from '3d-tiles-renderer/plugins';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import { ORIGIN, GROUND, TILESETS, ROUTE } from './config.js';
import { makeFrame } from './geo.js';
import { createGround, fetchMvt } from './ground.js';
import { createTerrain } from './terrain.js';
import { TA, fmt, fmtDiff, ping, join, setSolo, recordLocal, submit, boardsHtml } from './timeattack.js';
import { OLD_YEAR, HOME_PENALTY, infoAt, isGone, breakBuilding, applyBroken, updateBreaks, restoreAll, brokenCount, createDust } from './breakable.js';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const V3 = THREE.Vector3;
const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

// ---------- 調整値 ----------
const R = 0.9;            // 忍者の当たり半径
const GRAV = 28;
const RUN = 13;
const JUMP = 20;            // 地上ジャンプの初速（約7m 跳ぶ＝2階建ての屋根に届く）
const AIR_JUMP = 17;        // 空中ジャンプの初速
const AIR_JUMPS = 2;        // 着地または鉤縄を掛けるまでに空中で跳べる回数
const RANGE = 140;        // 鉤縄の射程
const ZIP = 52;           // 巻き取り加速
const REEL = 14;          // 自動巻き取りの速さ
const MAX_SPEED = 75;
const CAM_DIST = 9;
const BREAK_SPEED = 16;   // 古い建物の壁にこの速さ以上で突っ込むと崩れる (m/s)
const WP_RADIUS = 55;     // 通過判定の水平半径

// ---------- 基本セットアップ ----------
const canvas = $('view');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3d4f86);
scene.fog = new THREE.FogExp2(0x44558a, 0.0012);
const camera = new THREE.PerspectiveCamera(70, 1, 0.3, 1500); // 霧で見えない距離のタイルは読み込まない

scene.add(new THREE.HemisphereLight(0xc4d2ff, 0x3a3644, 2.3));
const moon = new THREE.DirectionalLight(0xffd8b4, 1.7); // 西に沈んだ直後の残照
moon.position.set(-0.8, 0.55, 0.25);
scene.add(moon);

const frame = makeFrame(ORIGIN);
const terrain = createTerrain(GROUND);
const groundY = terrain.height;
const route = ROUTE.map((p) => {
  const v = frame.toLocal(p.lat, p.lon);
  return { ...p, x: v.x, z: v.z };
});

// ---------- 星空（演出） ----------
const sky = new THREE.Group();
{
  const n = 1400, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, e = Math.asin(Math.random() * 0.97 + 0.03);
    pos.set([Math.cos(a) * Math.cos(e) * 9000, Math.sin(e) * 9000, Math.sin(a) * Math.cos(e) * 9000], i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  sky.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xcfd8ff, size: 1.6, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.8 })));
  const m = new THREE.Mesh(new THREE.CircleGeometry(260, 32), new THREE.MeshBasicMaterial({ color: 0xfff4d6, fog: false }));
  m.position.set(-4500, 5200, 3200); m.lookAt(0, 0, 0);
  sky.add(m);
  scene.add(sky);
}

// ---------- PLATEAU 建物 ----------
// 形状も壁面・屋根の見た目も PLATEAU のまま（LOD2 のテクスチャ＝実際の建物の写真）。
// ゲーム側で足すのは夕暮れの色味だけ。テクスチャの無い建物（LOD1 のみ）は無地で表示する。
// PLATEAU の写真テクスチャは日陰が暗く写っているので持ち上げ、わずかに青く寄せる
const TEX_TINT = new THREE.Color().setRGB(1.6, 1.6, 1.72);
// 写真アトラスの上限解像度（元データは最大 8192px）。4096px だと 1 枚 約90MB になり、近くの建物を読み込む前に
// キャッシュ上限へ達してしまうので 2048px を標準にする。URL に ?hq を付けると 4096px（高性能 PC 向け）。
const HQ = new URLSearchParams(location.search).has('hq');
const TEX_MAX = HQ ? 4096 : 2048;
const plainMat = new THREE.MeshLambertMaterial({ color: 0x8d8f9c });
plainMat.dispose = () => {}; // タイル破棄時に共有マテリアルまで破棄されないように
const maxAniso = Math.min(4, renderer.capabilities.getMaxAnisotropy());
// 写真アトラスは 1 枚が大きく GPU メモリを圧迫するので、大きいものは縮小して持つ。
// GPU へ転送したあとは CPU 側の画像を解放する。
async function fitTexture(tex) {
  let im = tex.image;
  const w = im?.width || 0, h = im?.height || 0;
  tex.userData.size = [Math.min(w, TEX_MAX), Math.min(h, TEX_MAX)]; tex.userData.orig = [w, h];
  if (Math.max(w, h) > TEX_MAX) {
    const k = TEX_MAX / Math.max(w, h);
    const small = await createImageBitmap(im, { resizeWidth: Math.round(w * k), resizeHeight: Math.round(h * k), resizeQuality: 'high' });
    im.close?.();
    tex.image = im = small; tex.needsUpdate = true;
  }
  tex.anisotropy = maxAniso;
  tex.onUpdate = () => { tex.image?.close?.(); tex.onUpdate = null; };
  return tex;
}
// タイルの読み込み直後（メモリ見積りの前）に呼ばれるプラグイン。見た目の調整と当たり判定用 BVH の構築を行う。
const makeBuildingPlugin = () => ({
  name: 'KYOTO_BUILDING_STYLE',
  async processTileModel(scene) {
    applyBroken(scene);
    const meshes = [];
    scene.traverse((o) => o.isMesh && meshes.push(o));
    for (const mesh of meshes) {
      const src = mesh.material, map = src.map;
      // 写真には撮影時の陰影が写っているので、ライティングは掛けずに色味だけ夕方に寄せる
      mesh.material = map ? new THREE.MeshBasicMaterial({ map: await fitTexture(map), color: TEX_TINT }) : plainMat;
      src.dispose?.();
      if (!mesh.geometry.boundsTree) mesh.geometry.computeBoundsTree();
    }
  },
});

// 進行方向の少し先を上空から見る「先読み」カメラ。速く移動しても建物の読み込みが間に合うようにする
const scout = new THREE.PerspectiveCamera(80, 1, 1, 1200);
scout.rotation.x = -Math.PI / 2;
const draco = new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
const tilesets = TILESETS.map((t, i, all) => {
  const tiles = new TilesRenderer(t.url);
  tiles.registerPlugin(new GLTFExtensionsPlugin({ dracoLoader: draco }));
  tiles.lruCache.minBytesSize = HQ ? 4.5e9 : 1.6e9; tiles.lruCache.maxBytesSize = HQ ? 6e9 : 2.2e9;
  tiles.loadSiblings = false; // 表示に必要なタイルだけ読む（重いテクスチャ付きタイルの読み過ぎを防ぐ） // 縮小後の実サイズで計上される
  tiles.errorTarget = 110; // 遠くは粗いタイルで済ませる（末端タイルは1枚 1〜4MB と重い）
  if (i > 0) {
    tiles.lruCache = all[0].tiles.lruCache;
    tiles.downloadQueue = all[0].tiles.downloadQueue;
    tiles.parseQueue = all[0].tiles.parseQueue;
  }
  tiles.registerPlugin(makeBuildingPlugin());
  tiles.addEventListener('load-model', ({ scene: sc }) => terrain.addModel(sc, tiles.group.matrixWorld));
  tiles.addEventListener('dispose-model', ({ scene: s }) => {
    s.traverse((o) => o.isMesh && o.geometry.disposeBoundsTree?.());
  });
  tiles.addEventListener('load-error', (e) => console.warn('tile load error', e));
  frame.ecefToLocal.decompose(tiles.group.position, tiles.group.quaternion, tiles.group.scale);
  tiles.setCamera(camera);
  tiles.setCamera(scout); tiles.setResolution(scout, 3000, 3000); // 先読み範囲は必ず最詳細まで
  scene.add(tiles.group);
  t.tiles = tiles;
  return tiles;
});

const raycaster = new THREE.Raycaster();
raycaster.firstHitOnly = true;
const _n = new V3();
// レイは表示中の建物メッシュ（BVH 付き）に直接当てる。
// タイルの外接ボリューム経由（TilesRenderer の raycast）だと、ボリュームの下端が建物の足元より高いタイルがあり、
// 地面近くの水平なレイが建物をすり抜けてしまうため。
const cityMeshes = [], _hits = [];
function refreshCityMeshes() {
  cityMeshes.length = 0;
  for (const t of tilesets) for (const sc of t.group.children) if (sc.visible) sc.traverse((o) => { if (o.isMesh && o.visible) cityMeshes.push(o); });
}
// ゴールの京都タワー（1964年竣工）と中継点の五重塔は、古くても壊れないようにする
const LANDMARKS = [[route[route.length - 1], 70], [route.find((p) => p.name.includes('五重塔')), 45]];
const isProtected = (p) => LANDMARKS.some(([w, r]) => w && Math.hypot(p.x - w.x, p.z - w.z) < r);
const _co = new V3();
function castCity(origin, dir, far) {
  let best = null, skipped = 0;
  _co.copy(origin);
  for (let pass = 0; pass < 6; pass++) { // 崩れた（崩れている最中の）建物は素通りする
    raycaster.set(_co, dir);
    raycaster.near = 0; raycaster.far = far - skipped;
    best = null;
    for (const m of cityMeshes) {
      _hits.length = 0;
      m.raycast(raycaster, _hits);
      const h = _hits[0];
      if (h && (!best || h.distance < best.distance)) best = h;
    }
    if (!best || !isGone(best)) break;
    skipped += best.distance + 0.05;
    _co.copy(origin).addScaledVector(dir, skipped);
    best = null;
  }
  if (best) {
    best.distance += skipped;
    best.normal = best.face ? _n.copy(best.face.normal).transformDirection(best.object.matrixWorld).clone() : new V3(0, 1, 0);
    if (best.normal.dot(dir) > 0) best.normal.negate();
  }
  return best;
}
const DOWN = new V3(0, -1, 0);
function surfaceY(x, z) {
  const h = castCity(new V3(x, 600, z), DOWN, 900);
  return Math.max(groundY(x, z), h ? h.point.y : -1e9);
}

// ---------- 地面（PLATEAU 土地利用・道路モデル） ----------
{
  const far = new THREE.Mesh(new THREE.CircleGeometry(30000, 48), new THREE.MeshBasicMaterial({ color: 0x0b0f1d }));
  far.rotation.x = -Math.PI / 2; far.position.y = -40; // 地図の外側。地図の範囲内では地形の下に隠れる
  scene.add(far);
}
const ground = createGround({ scene, renderer, frame, groundY });
const GROUND_GAIN = 1.7; // 夕方の明るさに合わせて地面を持ち上げる
ground.mat.color.setScalar(GROUND_GAIN);
const isWater = (x, z) => ground.isWater(x, z);

// ---------- 忍者・縄・目印 ----------
const ninja = new THREE.Group();
{
  const dark = new THREE.MeshLambertMaterial({ color: 0x2b3558, emissive: 0x141a33 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.75, 4, 10), dark);
  body.position.y = 0.05;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), dark);
  head.position.y = 0.85;
  const band = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.09, 0.3), new THREE.MeshBasicMaterial({ color: 0xffe2b0 }));
  band.position.set(0, 0.88, -0.14);
  const scarf = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 1), new THREE.MeshBasicMaterial({ color: 0xff3b3b }));
  scarf.geometry.translate(0, 0, 0.5);
  scarf.position.set(0, 0.62, 0.2);
  ninja.add(body, head, band, scarf);
  ninja.userData.scarf = scarf;
  scene.add(ninja);
}
const dust = createDust(scene);
const ropeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1, 6), new THREE.MeshBasicMaterial({ color: 0xffe9a8, fog: false }));
ropeMesh.visible = false; scene.add(ropeMesh);
const anchorMesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffd060, fog: false }));
anchorMesh.visible = false; scene.add(anchorMesh);
const aimMesh = new THREE.Mesh(new THREE.RingGeometry(0.32, 0.45, 24), new THREE.MeshBasicMaterial({ color: 0x7dffb0, fog: false, depthTest: false, transparent: true, opacity: 0.9, side: THREE.DoubleSide }));
aimMesh.visible = false; aimMesh.renderOrder = 5; scene.add(aimMesh);
const pillar = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 900, 20, 1, true),
  new THREE.MeshBasicMaterial({ color: 0xffd98a, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
scene.add(pillar);
let trailMesh = null;

// ---------- 状態 ----------
const S = {
  mode: 'loading',          // loading | ready | play | goal
  pos: new V3(), vel: new V3(), grounded: false, inWater: false,
  yaw: Math.PI / 2, pitch: 0.12,
  rope: null,               // { anchor: V3, len }
  aim: null,                // 現在狙える固定先（V3）
  wi: 1, cp: 0,             // 次の目的地 / 直前の通過地点
  time: 0, started: false, swings: 0, maxSpeed: 0, dist: 0,
  towerTop: 131, towerMeasured: false,
  tut: 0, trail: [], trailT: 0, goalT: 0, camDist: CAM_DIST, fp: false, aimInfo: null, broken: 0, homesBroken: 0, usage: {}, airJumps: 0, countT: 0, splits: [],
  face: Math.PI / 2, stuckT: 0, blockT: 0, tip: '', tipT: 0,
};
const keys = {};
let fireHeld = false, jumpEdge = false, locked = false, noLock = false;
// ポインターロックが使えない環境（埋め込み表示など）では、ロックなしでマウス移動をそのまま視点に使う
function lockPointer() {
  try { const p = canvas.requestPointerLock?.(); p?.catch?.(() => { noLock = true; }); if (!canvas.requestPointerLock) noLock = true; } catch { noLock = true; }
}

function spawnAt(i) {
  const p = route[i];
  S.pos.set(p.x, surfaceY(p.x, p.z) + R + 0.2, p.z);
  S.vel.set(0, 0, 0);
  S.rope = null; S.grounded = false;
  const q = route[Math.min(i + 1, route.length - 1)];
  S.yaw = S.face = Math.atan2(-(q.x - p.x), -(q.z - p.z));
  S.pitch = 0.12;
}
function resetRun() {
  restoreAll(); S.broken = 0; S.homesBroken = 0; S.usage = {}; // 壊した建物を元に戻す
  Object.assign(S, { countT: 3, splits: [], wi: 1, cp: 0, time: 0, started: false, swings: 0, maxSpeed: 0, dist: 0, tut: 0, trail: [], goalT: 0, mode: 'play' });
  if (trailMesh) { scene.remove(trailMesh); trailMesh.geometry.dispose(); trailMesh = null; }
  $('goal').style.display = 'none';
  for (const k in keys) keys[k] = false;
  toast('3'); beep(440, 440, 0.12, 'square', 0.06);
  for (const el of document.querySelectorAll('.lm')) el.style.display = 'none';
  scene.fog.density = 0.0012; camera.far = 1500;
  if (ground.mat) ground.mat.color.setScalar(GROUND_GAIN);
  spawnAt(0);
}

// ---------- 音（簡易シンセ） ----------
let ac = null, windGain = null;
function initAudio() {
  if (ac) return;
  try {
    ac = new AudioContext();
    const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
    const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 500; bp.Q.value = 0.6;
    windGain = ac.createGain(); windGain.gain.value = 0;
    src.connect(bp).connect(windGain).connect(ac.destination); src.start();
  } catch { ac = null; }
}
function beep(f0, f1, dur, type = 'triangle', vol = 0.12) {
  if (!ac) return;
  const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(ac.destination); o.start(t); o.stop(t + dur);
}

// ---------- 入力 ----------
addEventListener('keydown', (e) => {
  if (e.target && e.target.tagName === 'INPUT') return; // 名前・合言葉の入力中
  if (e.repeat) return;
  if (e.code === 'Enter' && S.mode === 'play') { resetRun(); return; } // タイムを捨てて最初から
  keys[e.code] = true;
  if (e.code === 'Space') { jumpEdge = true; e.preventDefault(); }
  if (e.code === 'KeyV' && S.mode === 'play') { S.fp = !S.fp; toast(S.fp ? '一人称視点' : '三人称視点'); }
  if (e.code === 'KeyR' && (S.mode === 'play' || S.mode === 'goal')) {
    if (S.mode === 'goal') resetRun(); else { spawnAt(S.cp); toast('やり直し：' + route[S.cp].name); }
  }
  if (e.code.startsWith('Arrow')) e.preventDefault();
});
addEventListener('keyup', (e) => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; fireHeld = false; });
canvas.addEventListener('mousedown', (e) => {
  if (S.mode !== 'play' && S.mode !== 'goal') return;
  if (!locked && !noLock) { lockPointer(); return; }
  if (e.button === 0) fireHeld = true;
});
addEventListener('mouseup', (e) => { if (e.button === 0) fireHeld = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('pointerlockchange', () => { locked = document.pointerLockElement === canvas; if (!locked) fireHeld = false; });
addEventListener('mousemove', (e) => {
  if (!locked && !noLock) return;
  S.yaw -= e.movementX * 0.0024;
  S.pitch = clamp(S.pitch + e.movementY * -0.0024, -1.25, 1.35);
});
$('pname').value = TA.name; $('ppass').value = TA.pass;
const teamMsg = (t, bad) => { const el = $('teamstatus'); el.textContent = t; el.className = bad ? 'bad' : ''; };
ping().then((ok) => {
  if (!ok) { $('ppass').disabled = $('pteam').disabled = true; teamMsg('チーム機能は server.js で起動したときだけ使えます（npm run serve）。いまはソロで記録します。'); }
  else teamMsg('同じ合言葉を入れた人が同じチームになります。空欄ならソロ。');
});
$('go').addEventListener('click', async () => {
  initAudio();
  const name = $('pname').value.trim() || '名無しの忍者', pass = $('ppass').value.trim();
  if (pass && TA.online) {
    try {
      $('go').disabled = true;
      const r = await join(name, pass, $('pteam').value.trim());
      toastAfter = r.created ? `チーム「${r.team.name}」を作りました` : `チーム「${r.team.name}」に参加（${r.team.members.length}人）`;
    } catch (e) { teamMsg(e.message, true); $('go').disabled = false; return; }
    $('go').disabled = false;
  } else setSolo(name);
  $('start').style.display = 'none';
  resetRun();
  lockPointer();
});
let toastAfter = '';
$('again').addEventListener('click', () => { resetRun(); lockPointer(); });

// ---------- HUD ----------
let toastT = 0;
function toast(msg) { const el = $('toast'); el.textContent = msg; el.style.opacity = 1; toastT = 2.2; }
const TUT = [
  '<kbd>W</kbd> で前へ走る。マウスで見回す',
  '建物の<b>高いところ</b>を画面中央の円で狙い、<b>左クリック長押し</b>（または <kbd>F</kbd>）で鉤縄',
  '振り子のように振られる。<kbd>W</kbd> で加速、前に振れたら<b>クリックを離して</b>飛ぶ',
  '空中で次の建物を狙って<b>掛け替え</b>。<kbd>Space</kbd> で縄を巻き取ると一気に近づける',
  '',
];
const _p = new V3();
function project(x, y, z) {
  _p.set(x, y, z).project(camera);
  const behind = _p.z > 1;
  let sx = (_p.x * 0.5 + 0.5) * innerWidth, sy = (-_p.y * 0.5 + 0.5) * innerHeight;
  if (behind) { sx = innerWidth - sx; sy = innerHeight * 2; }
  return { sx, sy, behind };
}
function updateHud(dt) {
  const sp = S.vel.length();
  $('spd').textContent = Math.round(sp * 3.6);
  $('speedbar').firstElementChild.style.width = clamp(sp / 60, 0, 1) * 100 + '%';
  $('topright').innerHTML = `<b>${fmt(S.time)}</b><br>自己ベスト ${fmt(TA.best)}` + (TA.team ? `<br>チーム「${TA.team.name}」 ${fmt(TA.team.best)}` : '');
  const w = route[S.wi], hud = S.mode === 'play';
  for (const id of ['topleft', 'speed', 'reticle', 'aiminfo', 'wp', 'hint', 'topright']) $(id).style.visibility = hud ? 'visible' : 'hidden';
  if (!hud) return;
  const d = Math.hypot(w.x - S.pos.x, w.z - S.pos.z);
  $('topleft').innerHTML = `次の目的地 ${S.wi}/${route.length - 1}<br><b>${w.name}</b><br>あと ${Math.round(d)} m`;
  const pr = project(w.x, S.pos.y + 25 + d * 0.06, w.z);
  const el = $('wp');
  el.style.left = clamp(pr.sx, 70, innerWidth - 70) + 'px';
  el.style.top = clamp(pr.sy, 90, innerHeight - 120) + 'px';
  el.textContent = `${w.name}  ${Math.round(d)}m`;
  $('reticle').className = 'hud ' + (S.rope ? 'on' : S.aim ? 'ok' : '');
  const ai = !S.rope && S.aim ? S.aimInfo : null, aiEl = $('aiminfo');
  if (ai && ai.fragile && isProtected(S.aim)) ai.fragile = false;
  // 狙った建物の築年と用途（どちらも PLATEAU の属性）。住まいを崩すとタイムに罰が付くことも知らせる
  const aiParts = ai ? [ai.year ? `築${ai.year}年` : '', ai.usage || ''].filter(Boolean) : [];
  if (ai && ai.fragile) aiParts.push(ai.home ? `もろい（住まいなので崩すと+${HOME_PENALTY}秒）` : 'もろい（勢いよく突っ込むと崩れる）');
  const aiText = aiParts.join('・');
  if (aiEl.textContent !== aiText) { aiEl.textContent = aiText; aiEl.className = 'hud' + (ai && ai.fragile ? ' old' : ''); }
  let hint = TUT[S.tut];
  S.blockT = (keys.KeyW || keys.KeyA || keys.KeyS || keys.KeyD) && !S.rope && sp < 2 ? S.blockT + dt : 0;
  if (S.inWater) hint = '川の中は流れが重い。岸へ上がるか、建物に鉤縄を掛けて抜け出そう';
  else if (S.blockT > 1.2) hint = '行き止まり？ 壁の<b>上のほう</b>を狙って鉤縄を掛け、<kbd>Space</kbd> で巻き取って乗り越えよう（<kbd>R</kbd> で通過地点に戻る）';
  else if (w.goal && d < 260) hint = S.pos.y < S.towerTop ? '塔の<b>上のほう</b>に鉤縄を掛け、<kbd>Space</kbd> で巻き取って<b>頂点より高く</b>跳び上がれ！' : '';
  else if (S.tipT > 0 && S.tip) { hint = S.tip; S.tipT -= dt; }
  else if (!locked && !noLock && S.tut > 0) hint = '画面をクリックするとマウスで狙えます';
  if ($('hint').innerHTML !== hint) $('hint').innerHTML = hint;
  if (toastT > 0 && (toastT -= dt) <= 0) $('toast').style.opacity = 0;
}

// ---------- 鉤縄 ----------
const _dir = new V3(), _o = new V3(), _right = new V3(), _upv = new V3();
const AIM_OFFS = [];
for (const [deg, n] of [[2.2, 6], [4.5, 8], [7.5, 10]]) for (let i = 0; i < n; i++) {
  const a = (i / n) * Math.PI * 2; AIM_OFFS.push([Math.cos(a) * deg * Math.PI / 180, Math.sin(a) * deg * Math.PI / 180]);
}
function tryAim(dir) {
  const h = castCity(camera.position, dir, RANGE + S.camDist + 5);
  if (!h || h.distance < S.camDist * 0.6) return null;
  if (h.point.distanceTo(S.pos) > RANGE || h.point.distanceTo(S.pos) < 4) return null;
  aimHit = h;
  return h.point.clone();
}
let aimFrame = 0, aimHit = null;
function updateAim() {
  aimHit = null;
  camera.getWorldDirection(_dir);
  let a = tryAim(_dir);
  if (!a && (aimFrame++ % 2 === 0)) {
    _right.crossVectors(_dir, camera.up).normalize(); _upv.crossVectors(_right, _dir);
    for (const [dx, dy] of AIM_OFFS) {
      _o.copy(_dir).addScaledVector(_right, dx).addScaledVector(_upv, dy).normalize();
      if ((a = tryAim(_o))) break;
    }
  } else if (!a) a = S.aim; // 補助判定を飛ばしたフレームは前回値を維持
  if (aimHit) S.aimInfo = infoAt(aimHit); else if (!a) S.aimInfo = null;
  S.aim = a;
}
function attach() {
  if (!S.aim) {
    $('reticle').className = 'hud ng'; beep(160, 90, 0.12, 'square', 0.05);
    return false;
  }
  S.rope = { anchor: S.aim.clone(), len: S.aim.distanceTo(S.pos), minD: 1e9, gid: S.aimInfo?.id }; S.stuckT = 0;
  S.airJumps = 0;
  if (S.grounded) { S.vel.y = Math.max(S.vel.y, 9); S.grounded = false; }
  S.swings++;
  if (S.aimInfo && S.aimInfo.group) S.usage[S.aimInfo.group] = (S.usage[S.aimInfo.group] || 0) + 1; // どんな用途の建物を伝って来たか
  beep(900, 300, 0.12, 'sawtooth', 0.06); setTimeout(() => beep(220, 180, 0.08, 'square', 0.07), 90);
  if (S.tut === 1) S.tut = 2;
  if (S.tut === 3 && S.swings >= 4) S.tut = 4;
  return true;
}
function release(fling = true) {
  if (!S.rope) return;
  S.rope = null;
  if (fling && !S.grounded) {
    const hs = Math.hypot(S.vel.x, S.vel.z);
    if (hs > 4) { S.vel.x += S.vel.x / hs * 3; S.vel.z += S.vel.z / hs * 3; }
    if (S.vel.y > -6) S.vel.y += 10; // 離した瞬間に上へ跳ね上げる
  }
  beep(500, 900, 0.1, 'sine', 0.05);
  if (S.tut === 2) S.tut = 3;
}

// ---------- 物理 ----------
const _wish = new V3(), _fwd = new V3(), _move = new V3(), _to = new V3();
let wantFirePrev = false;
function step(dt) {
  const kx = (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0), kz = (keys.KeyW ? 1 : 0) - (keys.KeyS ? 1 : 0);
  _fwd.set(-Math.sin(S.yaw), 0, -Math.cos(S.yaw));
  _wish.set(_fwd.x * kz + Math.cos(S.yaw) * kx, 0, _fwd.z * kz - Math.sin(S.yaw) * kx);
  const hasWish = _wish.lengthSq() > 0;
  if (hasWish) { _wish.normalize(); if (!S.started) S.started = true; if (S.tut === 0) S.tut = 1; }

  const wantFire = fireHeld || !!keys.KeyF;
  if (wantFire && !wantFirePrev) attach();
  if (!wantFire && S.rope) release();
  wantFirePrev = wantFire;

  const v = S.vel;
  if (S.grounded) {
    const maxRun = S.inWater ? 6 : RUN;
    const hs = Math.hypot(v.x, v.z);
    if (hs > maxRun + 0.5) {            // 着地の勢いは少しずつ落とす
      const k = Math.max(0, 1 - (S.inWater ? 6 : 1.6) * dt); v.x *= k; v.z *= k;
      if (hasWish) { v.x += _wish.x * 20 * dt; v.z += _wish.z * 20 * dt; }
    } else if (hasWish) {
      const ax = _wish.x * maxRun - v.x, az = _wish.z * maxRun - v.z, al = Math.hypot(ax, az), s = Math.min(al, 80 * dt);
      if (al > 0) { v.x += ax / al * s; v.z += az / al * s; }
    } else { const k = Math.max(0, 1 - 10 * dt); v.x *= k; v.z *= k; }
    if (v.y < 0) v.y = 0;
    S.airJumps = 0;
    if (jumpEdge && !S.rope) { v.y = S.inWater ? JUMP * 0.6 : JUMP; S.grounded = false; beep(300, 520, 0.08, 'sine', 0.05); }
  } else {
    if (hasWish) { const a = S.rope ? 15 : 9; v.x += _wish.x * a * dt; v.z += _wish.z * a * dt; }
    v.y -= GRAV * dt;
    // 空中ジャンプ：落下中でも上向きに跳び直せる
    if (jumpEdge && !S.rope && S.airJumps < AIR_JUMPS) {
      S.airJumps++;
      v.y = Math.max(v.y + AIR_JUMP * 0.5, AIR_JUMP);
      dust.burst(S.pos, 14, 1.5);
      beep(420, 760, 0.1, 'sine', 0.05);
    }
  }
  jumpEdge = false;

  if (S.rope) {
    _to.subVectors(S.rope.anchor, S.pos);
    const d = _to.length(); _to.multiplyScalar(1 / d);
    if (keys.Space) {
      // 巻き取り：固定先へ一直線に引く。横方向の速度は抑えて、固定先の周りを回り続けないようにする
      const vr = v.dot(_to);
      v.addScaledVector(_to, -vr).multiplyScalar(Math.max(0, 1 - 5 * dt)).addScaledVector(_to, vr + ZIP * dt);
      v.y += GRAV * 0.5 * dt;
      S.rope.len = Math.min(S.rope.len, d);
      if (d < S.rope.minD - 0.02) { S.rope.minD = d; S.stuckT = 0; } else S.stuckT += dt;
      if (d < 4) { release(false); v.y = Math.max(v.y, 0) + 15; }   // 固定先を乗り越える
      else if (S.stuckT > 0.45) release(false);                     // 壁や屋根に引っかかって近づけないときは外す
    } else {
      // 地面を擦らない長さまで自動で巻き取る。巻き取り分は速度にも反映して、解除後の勢いにする
      const want = Math.max(6, S.rope.anchor.y - groundY(S.pos.x, S.pos.z) - 4);
      if (S.rope.len > want) {
        S.rope.len = Math.max(want, S.rope.len - REEL * dt);
        if (d >= S.rope.len) { const vr = v.dot(_to); if (vr < REEL) v.addScaledVector(_to, Math.min(REEL - vr, 60 * dt)); }
      }
      // 振りの勢いを少し足す（振り子が減衰せず、掛け替えで加速していけるように）
      const s = v.length();
      if (s > 3 && s < 42) v.multiplyScalar(1 + 5 * dt / s);
    }
  }
  const sp = v.length();
  if (sp > MAX_SPEED) v.multiplyScalar(MAX_SPEED / sp);

  // 移動と衝突（建物は PLATEAU のメッシュにレイを飛ばして判定）
  let onGround = false;
  _move.copy(v).multiplyScalar(dt);
  const L = _move.length();
  if (L > 1e-6) {
    _dir.copy(_move).multiplyScalar(1 / L);
    const h = castCity(S.pos, _dir, L + R);
    const hit = h && Math.abs(h.normal.y) < 0.5 && -v.dot(h.normal) >= BREAK_SPEED ? infoAt(h) : null;
    if (hit && hit.fragile && !isProtected(h.point) && breakBuilding(hit, tilesets)) {
      // 築年数の古い建物：壁を突き破って進む（勢いは少し落ちる）
      S.pos.add(_move); v.multiplyScalar(0.8);
      S.broken = brokenCount();
      dust.burst(h.point); dust.burst(_o.copy(h.point).addScaledVector(_dir, 6));
      if (hit.home) { S.homesBroken++; S.time += HOME_PENALTY; toast(`${hit.usage}（築${hit.year}年）を崩した　+${HOME_PENALTY}秒`); }
      else toast(`築${hit.year}年の${hit.usage || '建物'}が崩れた`);
      beep(110, 40, 0.5, 'sawtooth', 0.12); beep(70, 30, 0.7, 'square', 0.08);
      if (S.rope && S.rope.gid === hit.id) release(false);
    } else if (h) {
      S.pos.copy(h.point).addScaledVector(h.normal, R + 0.01);
      const vn = v.dot(h.normal);
      if (vn < 0) v.addScaledVector(h.normal, -vn);
      if (h.normal.y > 0.6) onGround = true;
      // 腰〜頭くらいの段差（屋上の縁、手すりなど）は自動で跳び越える
      else if (S.grounded && hasWish && !S.rope && Math.abs(h.normal.y) < 0.4
        && !castCity(_o.copy(S.pos).addScaledVector(UP, 1.9), _wish, 2.4)) v.y = 13;
    } else S.pos.add(_move);
  }
  if (S.rope) {
    _to.subVectors(S.rope.anchor, S.pos);
    const d = _to.length();
    if (d > S.rope.len) {
      _to.multiplyScalar(1 / d);
      S.pos.addScaledVector(_to, d - S.rope.len);
      const vr = v.dot(_to);
      if (vr < 0) v.addScaledVector(_to, -vr);
    }
  }
  const gy = groundY(S.pos.x, S.pos.z);
  let onPlane = false;
  if (S.pos.y <= gy + R) { S.pos.y = gy + R; if (v.y < 0) v.y = 0; onGround = onPlane = true; }
  else if (!onGround && v.y <= 0.5) {
    const h = castCity(S.pos, DOWN, R + 0.25);
    if (h && h.normal.y > 0.5) { S.pos.y = h.point.y + R; onGround = true; }
  }
  S.grounded = onGround;
  const wasWater = S.inWater;
  S.inWater = onPlane && isWater(S.pos.x, S.pos.z);
  if (S.inWater && !wasWater) { beep(700, 120, 0.3, 'sawtooth', 0.05); toast('ざぶん！ 川に落ちた'); }

  if (S.started) S.time += dt;
  S.maxSpeed = Math.max(S.maxSpeed, v.length());
  S.dist += L;

  // 通過地点とゴール
  const w = route[S.wi];
  const dw = Math.hypot(w.x - S.pos.x, w.z - S.pos.z);
  if (!w.goal && dw < WP_RADIUS) {
    S.cp = S.wi; S.wi++;
    S.splits.push(S.time);
    const bs = TA.bestSplits && TA.bestSplits[S.splits.length - 1];
    toast(`${w.name}  ${fmt(S.time)}` + (bs != null ? `（ベスト比 ${fmtDiff(S.time - bs)}）` : ''));
    S.tip = w.tip || ''; S.tipT = 9;
    beep(660, 660, 0.12, 'sine', 0.08); setTimeout(() => beep(990, 990, 0.2, 'sine', 0.08), 110);
  } else if (w.goal && dw < 90 && S.pos.y > S.towerTop + 0.3) finish();
}

function measureTower() {
  // PLATEAU の建物メッシュから塔の最高点を求める。上からレイを落として塔のメッシュを特定し、
  // 尖塔の先端は細くてレイが外れるので、そのメッシュの頂点を直接調べる。
  const t = route[route.length - 1], o = new V3(), v = new V3(), meshes = new Set();
  let top = -1e9;
  for (let i = -5; i <= 5; i++) for (let j = -5; j <= 5; j++) {
    const h = castCity(o.set(t.x + i * 5, 600, t.z + j * 5), DOWN, 900);
    if (h) { meshes.add(h.object); top = Math.max(top, h.point.y); }
  }
  for (const m of meshes) {
    const p = m.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld);
      if (v.y > top && Math.hypot(v.x - t.x, v.z - t.z) < 30) top = v.y;
    }
  }
  if (top > groundY(t.x, t.z) + 60) { S.towerTop = top; S.towerMeasured = true; }
}
function finish() {
  S.mode = 'goal'; S.goalT = 0; S.rope = null;
  document.exitPointerLock?.();
  [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, f, 0.35, 'triangle', 0.1), i * 130));
  const time = Math.round(S.time * 10) / 10, loc = recordLocal(time, S.splits);
  const pb = loc.improved ? (loc.prev == null ? '初記録！' : `自己ベスト更新！（${fmtDiff(time - loc.prev)}）`) : `自己ベスト ${fmt(TA.best)}（${fmtDiff(time - TA.best)}）`;
  $('boards').innerHTML = TA.pass && TA.online ? '<p>チームに記録を送信中…</p>' : '';
  submit({ time, broken: S.broken, swings: S.swings }).then((r) => { if (r) $('boards').innerHTML = boardsHtml(); })
    .catch((e) => { $('boards').innerHTML = `<p class="bad">チームへの送信に失敗：${e.message}</p>`; });
  $('result').innerHTML = `<tr><td>タイム</td><td><b class="big">${fmt(time)}</b><br>${pb}</td></tr><tr><td>駆け抜けた距離</td><td>${(S.dist / 1000).toFixed(2)} km</td></tr>` +
    `<tr><td>鉤縄の掛け替え</td><td>${S.swings} 回</td></tr><tr><td>崩した古い建物</td><td>${S.broken} 棟（${OLD_YEAR}年以前の築）${S.homesBroken ? `<br>うち住まい ${S.homesBroken} 棟（+${S.homesBroken * HOME_PENALTY}秒）` : ''}</td></tr><tr><td>伝ってきた建物の用途</td><td>${Object.entries(S.usage).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([k, n]) => `${k} ${n}`).join('、') || '—'}</td></tr><tr><td>最高速度</td><td>${Math.round(S.maxSpeed * 3.6)} km/h</td></tr>` +
    `<tr><td>京都タワーの高さ</td><td>地上 約${Math.round(S.towerTop - groundY(0, 0))} m（PLATEAU の建物データより）</td></tr>`;
  $('goal').style.display = 'block';
  // 通ってきた道
  const pts = S.trail.slice();
  if (!pts.length || pts[pts.length - 1].distanceTo(S.pos) > 0.5) pts.push(S.pos.clone());
  if (pts.length > 3) {
    const curve = new THREE.CatmullRomCurve3(pts);
    trailMesh = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.min(1500, pts.length * 3), 4, 6),
      new THREE.MeshBasicMaterial({ color: 0xff4b4b, fog: false, depthTest: false, transparent: true, opacity: 0.85 }));
    trailMesh.renderOrder = 8; scene.add(trailMesh);
  }
}

// ---------- 見た目の更新 ----------
const _tgt = new V3(), _cam = new V3(), _look = new V3(), _q = new THREE.Quaternion(), UP = new V3(0, 1, 0);
const routeCenter = new V3(
  (Math.min(...route.map((p) => p.x)) + Math.max(...route.map((p) => p.x))) / 2, 0,
  (Math.min(...route.map((p) => p.z)) + Math.max(...route.map((p) => p.z))) / 2);
const labelEls = route.map((p) => {
  const el = document.createElement('div'); el.className = 'hud lm'; el.textContent = p.name; $('labels').appendChild(el); return el;
});

function updateCamera(dt) {
  const cp = Math.cos(S.pitch);
  _dir.set(-Math.sin(S.yaw) * cp, Math.sin(S.pitch), -Math.cos(S.yaw) * cp);
  if (S.fp) {
    // 一人称：目の高さ（足元から約1.6m）にカメラを置く
    _tgt.copy(S.pos).addScaledVector(UP, 0.7);
    S.camDist = 0;
    _cam.copy(_tgt);
  } else {
    _tgt.copy(S.pos).addScaledVector(UP, 1.5).add(_right.set(Math.cos(S.yaw), 0, -Math.sin(S.yaw)).multiplyScalar(0.9));
    // 建物にめり込まないよう距離を詰める
    _o.copy(_dir).negate();
    const h = S.mode === 'loading' ? null : castCity(_tgt, _o, CAM_DIST + 0.5);
    const want = h ? Math.max(1.2, h.distance - 0.5) : CAM_DIST;
    S.camDist = want < S.camDist ? want : lerp(S.camDist, want, 1 - Math.exp(-6 * dt));
    _cam.copy(_tgt).addScaledVector(_dir, -S.camDist);
    _cam.y = Math.max(_cam.y, groundY(_cam.x, _cam.z) + 0.4);
  }

  if (S.mode === 'goal') {
    S.goalT += dt;
    const k = clamp(S.goalT / 6, 0, 1), e = k * k * (3 - 2 * k);
    const a = S.yaw + S.goalT * 0.04, top = S.towerTop;
    const rad = lerp(60, 1500, e), hgt = lerp(top + 25, top + 1150, e);
    _o.set(routeCenter.x * e - Math.sin(a) * -rad, hgt, routeCenter.z * e - Math.cos(a) * -rad);
    _look.set(routeCenter.x * e, lerp(top * 0.6, 0, e), routeCenter.z * e);
    const b = clamp(S.goalT / 1.5, 0, 1);
    camera.position.lerpVectors(_cam, _o, b);
    camera.lookAt(_tgt.lerp(_look, b));
    camera.fov = lerp(camera.fov, 55, 0.05); camera.far = 14000;
    scene.fog.density = lerp(0.0012, 0.00016, e);
    if (ground.mat) ground.mat.color.setScalar(GROUND_GAIN + e * 1.1);
    route.forEach((p, i) => {
      const pr = project(p.x, (i === route.length - 1 ? top : groundY(p.x, p.z) + 60), p.z), el = labelEls[i];
      el.style.display = !pr.behind && k > 0.3 ? 'block' : 'none';
      el.style.left = pr.sx + 'px'; el.style.top = pr.sy + 'px';
    });
  } else {
    camera.position.copy(_cam);
    camera.lookAt(_cam.add(_dir));
    camera.fov = lerp(camera.fov, 70 + clamp(S.vel.length() / 60, 0, 1) * 18, 1 - Math.exp(-4 * dt));
  }
  const dbg = window.__game.debugCam; // 検証用：任意視点
  if (dbg) { camera.position.set(dbg.x, dbg.y, dbg.z); camera.up.set(0, 0, -1); camera.lookAt(dbg.x, 0, dbg.z); camera.up.set(0, 1, 0); camera.far = 14000; }
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
  sky.position.copy(camera.position);
}

function updateVisuals(dt, t) {
  ninja.position.copy(S.pos).y -= R - 0.55;
  ninja.visible = !(S.fp && S.mode !== 'goal');
  const hs = Math.hypot(S.vel.x, S.vel.z);
  if (hs > 1.5) {
    const target = Math.atan2(-S.vel.x, -S.vel.z);
    let d = target - S.face; d = Math.atan2(Math.sin(d), Math.cos(d));
    S.face += d * (1 - Math.exp(-10 * dt));
  }
  ninja.rotation.set(0, S.face, 0);
  ninja.rotateX(S.grounded ? -clamp(hs / 40, 0, 0.35) : clamp(-S.vel.y / 60, -0.6, 0.6) - 0.25);
  const sc = ninja.userData.scarf;
  sc.scale.z = 0.5 + clamp(S.vel.length() / 18, 0, 2.6);
  sc.rotation.x = Math.sin(t * 14) * 0.12; sc.rotation.y = Math.sin(t * 9) * 0.15;

  if (S.rope) {
    _o.copy(S.pos).addScaledVector(UP, 0.5);
    if (S.fp) _o.addScaledVector(_right.set(Math.cos(S.yaw), 0, -Math.sin(S.yaw)), 0.35).addScaledVector(UP, -0.1); // 右手元から伸びて見えるように
    _to.subVectors(S.rope.anchor, _o);
    const len = _to.length();
    ropeMesh.position.copy(_o).addScaledVector(_to, 0.5);
    ropeMesh.quaternion.copy(_q.setFromUnitVectors(UP, _to.multiplyScalar(1 / len)));
    ropeMesh.scale.set(1, len, 1);
    anchorMesh.position.copy(S.rope.anchor);
    anchorMesh.scale.setScalar(1 + Math.sin(t * 12) * 0.15);
  }
  ropeMesh.visible = anchorMesh.visible = !!S.rope;
  aimMesh.visible = S.mode === 'play' && !S.rope && !!S.aim;
  if (aimMesh.visible) {
    aimMesh.position.copy(S.aim); aimMesh.quaternion.copy(camera.quaternion);
    aimMesh.scale.setScalar(clamp(S.aim.distanceTo(camera.position) / 18, 0.8, 8));
  }
  const w = route[S.wi];
  pillar.visible = S.mode === 'play';
  pillar.position.set(w.x, groundY(w.x, w.z) + 450, w.z);
  pillar.material.opacity = 0.22 + Math.sin(t * 3) * 0.06;
  if (windGain) windGain.gain.value = S.mode === 'play' ? clamp((S.vel.length() - 8) / 60, 0, 1) * 0.16 : 0;
}

// スタート地点の周りに、鉤縄を掛けられる建物が読み込まれているか
function nearbyBuildings() {
  let n = 0;
  const o = new V3(route[0].x, groundY(route[0].x, route[0].z) + 2, route[0].z), d = new V3();
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; if (castCity(o, d.set(Math.cos(a) * 0.95, 0.3, Math.sin(a) * 0.95).normalize(), 120)) n++; }
  return n;
}

function updateScout() {
  const w = route[S.mode === 'goal' ? route.length - 1 : S.wi], dx = w.x - S.pos.x, dz = w.z - S.pos.z, d = Math.hypot(dx, dz) || 1, a = Math.min(d, 320);
  scout.position.set(S.pos.x + dx / d * a, 330, S.pos.z + dz / d * a);
  scout.updateMatrixWorld();
}

// ---------- メインループ ----------
function resize() {
  if (!innerWidth || !innerHeight) return; // 非表示中（サイズ 0）は何もしない
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  for (const t of tilesets) t.setResolutionFromRenderer(camera, renderer);
}
addEventListener('resize', resize); resize();

const t0 = performance.now();
let terrainSeen = 0, terrainT = 0;
let last = t0, acc = 0, loadT = 0, idleT = 0, towerT = 0, rootsLoaded = 0;
for (const t of tilesets) t.addEventListener('load-root-tileset', function once() { rootsLoaded++; t.removeEventListener('load-root-tileset', once); });

function tick(now) { requestAnimationFrame(tick); runFrame(now); }
function runFrame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const t = now / 1000;

  if (S.mode === 'loading') {
    loadT = (now - t0) / 1000; // 実時間（タブが裏にあって描画が間引かれても進む）
    let pending = 0, loaded = 0;
    for (const x of tilesets) { pending += x.stats.downloading + x.stats.parsing + x.stats.queued; loaded += x.stats.loaded; }
    const rootsOk = rootsLoaded >= tilesets.length;
    const prog = rootsOk ? loaded / Math.max(1, loaded + pending) : 0;
    $('bar').firstElementChild.style.width = Math.round(prog * 100) + '%';
    idleT = rootsOk && pending === 0 ? idleT + dt : 0;
    const done = rootsOk ? idleT > 0.6 || (loadT > 12 && nearbyBuildings() >= 5) || loadT > 90 : loadT > 45;
    if (done) {
      S.mode = 'ready';
      spawnAt(0);
      $('go').disabled = false; $('go').textContent = '出発する';
      $('loadmsg').textContent = rootsLoaded >= tilesets.length && nearbyBuildings() >= 5 ? '準備完了。' : '建物データの読み込みが遅れています（通信環境を確認してください）。出発はできます。';
    }
  }
  if (S.mode === 'play') {
    const ak = (keys.ArrowLeft ? 1 : 0) - (keys.ArrowRight ? 1 : 0), ap = (keys.ArrowUp ? 1 : 0) - (keys.ArrowDown ? 1 : 0);
    S.yaw += ak * 2.2 * dt; S.pitch = clamp(S.pitch + ap * 1.6 * dt, -1.25, 1.35);
    if (S.countT > 0) {
      // スタート前のカウントダウン。GO までは動けず、タイムも進まない
      const c0 = Math.ceil(S.countT); S.countT -= dt; const c1 = Math.ceil(S.countT);
      if (c1 !== c0) {
        if (c1 > 0) { toast(String(c1)); beep(440, 440, 0.12, 'square', 0.06); }
        else { toast(toastAfter ? 'GO!  ' + toastAfter : 'GO!'); toastAfter = ''; beep(880, 880, 0.35, 'square', 0.07); S.started = true; acc = 0; }
      }
    } else {
      acc = Math.min(acc + dt, 0.1);
      while (acc >= 1 / 120) { step(1 / 120); acc -= 1 / 120; if (S.mode !== 'play') break; }
    }
    S.trailT += dt;
    // 立ち止まっている間は記録しない（同じ点が続くと軌跡のチューブが潰れて見えなくなる）
    const lastPt = S.trail[S.trail.length - 1];
    if (S.trailT > 0.25 && S.started && (!lastPt || lastPt.distanceTo(S.pos) > 3)) { S.trailT = 0; S.trail.push(S.pos.clone()); }
    if (route[S.wi].goal && (towerT += dt) > 1 && Math.hypot(S.pos.x, S.pos.z) < 700) { towerT = 0; measureTower(); }
  } else if (S.mode === 'goal') {
    S.vel.multiplyScalar(Math.max(0, 1 - 2 * dt)); S.pos.addScaledVector(S.vel, dt);
  }

  updateCamera(dt);
  updateScout();
  for (const ts of tilesets) ts.update();
  refreshCityMeshes();
  if (S.mode === 'play') updateAim(); else S.aim = null;
  updateBreaks(dt); dust.update(dt);
  if (terrain.version !== terrainSeen && now - terrainT > 700) { terrainSeen = terrain.version; terrainT = now; ground.refreshHeights(); }
  updateVisuals(dt, t);
  updateHud(dt);
  renderer.render(scene, camera);
}

// 読み込み中はスタート地点からコース方向を向いておく（周辺タイルを先に取得するため）
S.pos.set(route[0].x, groundY(route[0].x, route[0].z) + R, route[0].z);
S.yaw = S.face = Math.atan2(-(route[1].x - route[0].x), -(route[1].z - route[0].z));
requestAnimationFrame(tick);

// 検証用フック（ルートや高さの確認に使う）
window.__game = { terrain, fetchMvt, infoAt, breakBuilding, brokenCount, S, route, frame, castCity, surfaceY, groundY, isWater, tilesets, keys, camera, ground, measureTower, spawnAt,
  setFire: (v) => { fireHeld = v; }, step, runFrame };
