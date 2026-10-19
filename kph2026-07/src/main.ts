import * as THREE from 'three';
import { LocalFrame } from './geo';
import { FRAME_LAT, FRAME_LON, PHYS, COURSE, PLATEAU_CREDIT } from './config';
import { City } from './city';
import { Street } from './street';
import { Course } from './course';
import { Ninja } from './ninja';
import { Player } from './player';
import { GameHud } from './hud';
import { GameAudio } from './audio';

type State = 'loading' | 'title' | 'playing' | 'result';

const BEST_KEY = 'kaginawa-kyoto-best-v1';

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.domElement.id = 'game-canvas';
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.5, 400000);

const frame = new LocalFrame(FRAME_LAT, FRAME_LON, 0);
const env = new THREE.Group();
frame.applyToObject(env);
scene.add(env);
camera.userData.canvas = renderer.domElement;

const hud = new GameHud();
const audio = new GameAudio();

function readBest(): number | null {
  const v = localStorage.getItem(BEST_KEY);
  const n = v ? Number(v) : NaN;
  return Number.isFinite(n) ? n : null;
}

function saveBest(t: number): boolean {
  const isRecord = state.best === null || t < state.best;
  if (isRecord) {
    state.best = t;
    localStorage.setItem(BEST_KEY, String(t));
  }
  return isRecord;
}

function formatTime(t: number): string {
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

const state = {
  phase: 'loading' as State,
  time: 0,
  score: 0,
  coins: 0,
  combo: 0,
  falls: 0,
  penalty: 0,
  best: readBest() as number | null,
  startAt: 0,
};

const city = new City(frame, camera, renderer, (s) => {
  if (state.phase === 'loading') {
    const pct = s.tilesetsLive === 0 && s.usingFallback ? 0.3 : Math.min(0.95, 0.2 + s.plateauBuildings / 90);
    hud.setLoading(pct, `PLATEAU 京都市LOD2 建物 ${s.plateauBuildings}件読込中…`);
  }
  if (s.tilesetsLive > 0) {
    hud.setStatus(`PLATEAU 京都市LOD2: 建物 ${s.plateauBuildings}件 ${PLATEAU_CREDIT}`);
  } else {
    hud.setStatus('PLATEAU応答待ち (フォールバック街でプレイできます)');
  }
}, scene);
env.add(city.group);

const street = new Street();
env.add(street.group);
street.setNight(true, scene);

const ninja = new Ninja();
env.add(ninja.group);

const course = new Course(frame);
env.add(course.group);

const gateCenters = COURSE.map((c) => frame.geo(c.lat, c.lon, c.h));

const puffGroup = new THREE.Group();
env.add(puffGroup);
const puffs: { m: THREE.Mesh; life: number }[] = [];

function spawnPuff(x: number, y: number, z: number): void {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(1, 10, 8),
    new THREE.MeshBasicMaterial({ color: 0xcfd6e4, transparent: true, opacity: 0.7, depthWrite: false }),
  );
  m.position.set(x, y - 1, z);
  m.scale.setScalar(1.5);
  puffGroup.add(m);
  puffs.push({ m, life: 0.6 });
}

function puffsUpdate(dt: number): void {
  for (let i = puffs.length - 1; i >= 0; i--) {
    const p = puffs[i];
    p.life -= dt;
    p.m.scale.multiplyScalar(1 + dt * 4);
    (p.m.material as THREE.MeshBasicMaterial).opacity = Math.max(0, p.life);
    if (p.life <= 0) {
      puffGroup.remove(p.m);
      p.m.geometry.dispose();
      (p.m.material as THREE.Material).dispose();
      puffs.splice(i, 1);
    }
  }
}

const player = new Player(frame, env, ninja, camera, () => city.raycasterTargets(), {
  onFall: () => {
    state.falls += 1;
    state.penalty += PHYS.fallPenalty;
    state.combo = 0;
    audio.fall();
    hud.banner('転倒! +3.00秒', 'danger');
  },
  onRestart: () => startRun(),
  onToggleDayNight: () => {
    const night = street.toggle(scene);
    hud.banner(night ? '夜 — 京都の光' : '昼 — 鴨川の朝', 'cyan');
  },
  onDash: (x, y, z) => {
    audio.dash();
    spawnPuff(x, y, z);
  },
  onAttach: (x, y, z) => {
    state.combo = Math.min(9, state.combo + 1);
    audio.attach();
    player.spawnImpact(x, y, z);
  },
});
player.reset();

let titleShown = false;

function showTitle(): void {
  if (titleShown) return;
  titleShown = true;
  state.phase = 'title';
  hud.hideLoading();
  hud.showTitle();
}

function startRun(): void {
  hud.hideResult();
  course.reset();
  state.phase = 'playing';
  state.time = 0;
  state.score = 0;
  state.coins = 0;
  state.combo = 0;
  state.falls = 0;
  state.penalty = 0;
  state.startAt = performance.now();
  player.reset();
  player.setPlaying(true);
  hud.showHud();
  hud.banner('任務開始! 四条烏丸 → 京都駅', 'gold');
  try {
    audio.init();
    audio.startMusic();
  } catch (e) {
    console.warn('audio unavailable', e);
  }
  try {
    const r = renderer.domElement.requestPointerLock?.() as unknown;
    if (r && typeof (r as Promise<void>).catch === 'function') {
      (r as Promise<void>).catch(() => undefined);
    }
  } catch (e) {
    console.warn('pointer lock unavailable', e);
  }
}

function finishRun(): void {
  if (state.phase !== 'playing') return;
  state.phase = 'result';
  player.setPlaying(false);
  const elapsed = state.time;
  const speedBonus = Math.max(0, Math.round(20000 - elapsed * 200));
  state.score += 2000 + speedBonus;
  const record = saveBest(elapsed);
  audio.goal();
  document.exitPointerLock?.();
  hud.showResult({
    time: elapsed,
    score: state.score,
    coins: state.coins,
    total: course.coinTotal,
    record,
    best: formatTime(state.best ?? elapsed),
  });
}

hud.bindStart(() => startRun());
hud.bindRetry(() => startRun());

async function boot(): Promise<void> {
  hud.setLoading(0.1, 'PLATEAU tileset を確認中…');
  await city.settle();
  city.createTiles();
  hud.setLoading(0.5, city.probeOk ? '京都市3D都市モデルをダウンロード中…' : 'PLATEAU未取得 → 予備の京都を生成しました');
  const deadline = performance.now() + 7000;
  while (state.phase === 'loading' && performance.now() < deadline) {
    if (city.firstContentLoaded) break;
    await new Promise((r) => window.setTimeout(r, 150));
  }
  hud.setLoading(1, city.firstContentLoaded ? '読込完了' : '予備の京都で出発');
  showTitle();
}

const clock = new THREE.Clock();
let elapsedAll = 0;
const tmpV = new THREE.Vector3();
const previewTarget = frame.geo(35.0, 135.7590, 90);

function loop(): void {
  requestAnimationFrame(loop);
  const dt = Math.min(clock.getDelta(), 0.05);
  elapsedAll += dt;

  city.update(dt);
  street.update(dt);
  puffsUpdate(dt);

  if (state.phase === 'playing') {
    state.time = (performance.now() - state.startAt) / 1000 + state.penalty;
    player.update(dt);
    const res = course.update(dt, elapsedAll, player.pos);
    if (res.coinCount > 0) {
      state.coins += res.coinCount;
      state.score += res.coinCount * 100;
      audio.coin();
    }
    if (res.hitGate !== null) {
      const g = course.gate(res.hitGate);
      player.setCheckpoint(gateCenters[res.hitGate]);
      state.score += 2000;
      audio.checkpoint();
      hud.banner(`⛩ ${g.label}${g.goal ? '到着!' : 'を制覇! +2000'}`, 'gold');
      if (g.goal) finishRun();
    }
    street.updateWind(dt, player.pos, player.vel, player.viewDir(tmpV), player.speed > 8);
    audio.setSpeed(player.speed);

    const nextGate = course.gate(course.nextGateIndex(player.pos, 0));
    hud.setStats({
      speed: player.speed,
      alt: player.pos.y,
      time: state.time,
      coins: state.coins,
      total: course.coinTotal,
      combo: state.combo,
      next: nextGate.label,
      nextDist: player.pos.distanceTo(nextGate.center),
      falls: state.falls,
      best: state.best !== null ? formatTime(state.best) : '--:--.--',
      dashReady: 1 - player.dashRatio,
    });
  } else if (state.phase === 'title' || state.phase === 'loading') {
    const t = elapsedAll * 0.08;
    const c = previewTarget;
    camera.position.set(c.x + Math.sin(t) * 620, c.y + 190 + Math.sin(t * 0.7) * 60, c.z + Math.cos(t) * 620);
    camera.up.set(0, 1, 0);
    camera.lookAt(c);
    camera.fov = 60;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}

addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

addEventListener('keydown', (e) => {
  if (e.code === 'Enter' && (state.phase === 'title' || state.phase === 'result')) {
    startRun();
  }
});

void boot();
loop();
