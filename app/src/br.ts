import * as Cesium from "cesium";

/* ============================================================
 * KYOTO BATTLEGROUNDS - Phase1: MAP・降下・収縮ゾーン
 * main.ts から createBrGame(viewer, hooks) で生成して使う。
 * main.ts への依存は hooks 経由のみ（循環importなし）。
 * ========================================================== */

export interface BrHooks {
  hideables: Cesium.Entity[];
  setCoursesVisible(v: boolean): void;
}

interface Place {
  name: string;
  lon: number;
  lat: number;
}

// PUBG風の京都地名（読みはダテじゃない）
const PLACES: Place[] = [
  { name: "錦市場", lon: 135.7638, lat: 34.9933 },
  { name: "京都駅", lon: 135.7585, lat: 34.9875 },
  { name: "金閣寺", lon: 135.7292, lat: 35.0394 },
  { name: "伏見稲荷", lon: 135.7727, lat: 34.9671 },
  { name: "嵐山", lon: 135.6788, lat: 35.0094 },
  { name: "東寺", lon: 135.732, lat: 34.981 },
  { name: "鴨川デルタ", lon: 135.7681, lat: 35.0116 },
  { name: "清水寺", lon: 135.7852, lat: 34.9949 },
  { name: "二条城", lon: 135.7482, lat: 35.0142 },
  { name: "梅小路", lon: 135.742, lat: 34.987 },
];

const BOUNDS = { lon0: 135.7, lon1: 135.8, lat0: 34.965, lat1: 35.02 };

interface Phase {
  wait: number;
  shrink: number;
  r: number;
  dps: number;
}
const PHASES: Phase[] = [
  { wait: 15, shrink: 20, r: 2600, dps: 2 },
  { wait: 12, shrink: 18, r: 1300, dps: 4 },
  { wait: 10, shrink: 15, r: 600, dps: 8 },
  { wait: 8, shrink: 12, r: 250, dps: 14 },
  { wait: 8, shrink: 12, r: 60, dps: 22 },
];

const MOVE_SPEED = 90; // m/s（アーケード速度）
const DIVE_SECONDS = 4.5;

function circleLonLat(
  clon: number,
  clat: number,
  rMeters: number,
  n = 128,
): number[] {
  const pts: number[] = [];
  const kx = 1 / (111320 * Math.cos(Cesium.Math.toRadians(clat)));
  const ky = 1 / 110540;
  for (let i = 0; i <= n; i++) {
    const a = (2 * Math.PI * i) / n;
    pts.push(clon + rMeters * Math.cos(a) * kx, clat + rMeters * Math.sin(a) * ky);
  }
  return pts;
}

function distM(aLon: number, aLat: number, bLon: number, bLat: number): number {
  const dx = (aLon - bLon) * 111320 * Math.cos(Cesium.Math.toRadians(aLat));
  const dy = (aLat - bLat) * 110540;
  return Math.hypot(dx, dy);
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

export interface BrGame {
  enter(): void;
  exit(): void;
  isActive(): boolean;
}

export function createBrGame(viewer: Cesium.Viewer, hooks: BrHooks): BrGame {
  let active = false;
  let mode: "choose" | "diving" | "playing" | "over" = "choose";

  // ---- エンティティ（BRモード中のみ表示） ----
  const brEntities: Cesium.Entity[] = [];
  function add(e: Cesium.Entity): Cesium.Entity {
    e.show = false;
    brEntities.push(e);
    return viewer.entities.add(e);
  }
  for (const p of PLACES) {
    add(
      new Cesium.Entity({
        position: Cesium.Cartesian3.fromDegrees(p.lon, p.lat, 60),
        label: {
          text: `📍 ${p.name}`,
          font: "bold 15px sans-serif",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          showBackground: true,
          backgroundColor: Cesium.Color.fromCssColorString("#7a4a00").withAlpha(0.8),
        },
      }),
    );
  }
  const zoneOutline = add(
    new Cesium.Entity({
      polyline: {
        positions: [],
        width: 4,
        material: Cesium.Color.WHITE,
      },
    }),
  );
  const zoneFill = add(
    new Cesium.Entity({
      polygon: {
        hierarchy: [],
        height: 2,
        material: Cesium.Color.WHITE.withAlpha(0.06),
      },
    }),
  );
  const zoneWall = add(
    new Cesium.Entity({
      position: Cesium.Cartesian3.fromDegrees(135.75, 34.99, 450),
      cylinder: {
        length: 900,
        topRadius: 1000,
        bottomRadius: 1000,
        material: Cesium.Color.DEEPSKYBLUE.withAlpha(0.12),
      },
    }),
  );
  const playerEnt = add(
    new Cesium.Entity({
      position: Cesium.Cartesian3.fromDegrees(135.7585, 34.9875, 5),
      point: {
        pixelSize: 14,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 3,
      },
      label: {
        text: "YOU",
        font: "bold 13px sans-serif",
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        pixelOffset: new Cesium.Cartesian2(0, -22),
      },
    }),
  );

  // ---- ゲーム状態 ----
  let player = { lon: 135.7585, lat: 34.9875 };
  let moveTarget: { lon: number; lat: number } | null = null;
  let hp = 100;
  let alive = 20;
  let aliveT = 0;
  let phaseIdx = 0;
  let phaseState: "wait" | "shrink" = "wait";
  let phaseT = 0;
  let cur = { lon: 135.75, lat: 34.99, r: 3200 };
  let prev = { ...cur };
  let next = { ...cur };
  let dive: { lon: number; lat: number; groundH: number; t: number } | null = null;
  let hudT = 0;

  const $ = (id: string): HTMLElement | null => document.querySelector(id);

  function setHudVisible(v: boolean) {
    for (const id of ["#br-hud", "#br-minimap-wrap", "#br-hint"]) {
      const el = $(id);
      if (el) el.style.display = v ? "" : "none";
    }
    if (!v) {
      const vg = $("#br-vignette");
      if (vg) vg.style.opacity = "0";
      const rs = $("#br-result");
      if (rs) rs.style.display = "none";
    }
  }

  function pickNextCenter(): { lon: number; lat: number } {
    const maxOff = prev.r * 0.45;
    for (let k = 0; k < 20; k++) {
      void k;
      const d = Math.random() * maxOff;
      const ang = Math.random() * Math.PI * 2;
      const lon = prev.lon + (d * Math.cos(ang)) / (111320 * Math.cos(Cesium.Math.toRadians(prev.lat)));
      const lat = prev.lat + (d * Math.sin(ang)) / 110540;
      if (
        lon > BOUNDS.lon0 + 0.005 &&
        lon < BOUNDS.lon1 - 0.005 &&
        lat > BOUNDS.lat0 + 0.005 &&
        lat < BOUNDS.lat1 - 0.005
      ) {
        return { lon, lat };
      }
    }
    return { lon: prev.lon, lat: prev.lat };
  }

  function updateZoneVisual() {
    const flat = circleLonLat(cur.lon, cur.lat, cur.r);
    const cart = Cesium.Cartesian3.fromDegreesArray(flat);
    const poly = zoneOutline.polyline;
    if (poly) poly.positions = new Cesium.ConstantProperty(cart);
    const pg = zoneFill.polygon;
    if (pg) pg.hierarchy = new Cesium.ConstantProperty(new Cesium.PolygonHierarchy(cart));
    zoneWall.position = Cesium.Cartesian3.fromDegrees(cur.lon, cur.lat, 450) as unknown as Cesium.PositionProperty;
    const cyl = zoneWall.cylinder;
    if (cyl) {
      cyl.topRadius = new Cesium.ConstantProperty(cur.r);
      cyl.bottomRadius = new Cesium.ConstantProperty(cur.r);
    }
  }

  function showResult(title: string, sub: string) {
    mode = "over";
    moveTarget = null;
    const rs = $("#br-result");
    if (rs) {
      rs.style.display = "";
      const t = rs.querySelector("#br-result-title");
      if (t) t.textContent = title;
      const s = rs.querySelector("#br-result-sub");
      if (s) s.textContent = sub;
    }
  }

  function updateHud(timerText: string) {
    const hud = $("#br-hud");
    if (hud) {
      hud.innerHTML =
        `<div><b>フェーズ ${Math.min(phaseIdx + 1, PHASES.length)} / ${PHASES.length}</b>　${timerText}</div>` +
        `<div>生存 ${alive}　HP <b>${Math.max(0, Math.ceil(hp))}</b></div>` +
        `<div id="br-hpbar"><div id="br-hpfill" style="width:${clamp(hp, 0, 100)}%"></div></div>`;
    }
  }

  // ---- ミニマップ ----
  function drawMinimap() {
    const cv = document.querySelector("#br-minimap") as HTMLCanvasElement | null;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const W = cv.width;
    const H = cv.height;
    const X = (lon: number): number => ((lon - BOUNDS.lon0) / (BOUNDS.lon1 - BOUNDS.lon0)) * W;
    const Y = (lat: number): number => (1 - (lat - BOUNDS.lat0) / (BOUNDS.lat1 - BOUNDS.lat0)) * H;
    ctx.fillStyle = "#0b1526";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#8fa3c7";
    ctx.font = "9px sans-serif";
    for (const p of PLACES) {
      ctx.beginPath();
      ctx.arc(X(p.lon), Y(p.lat), 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText(p.name, X(p.lon) + 4, Y(p.lat) + 3);
    }
    const mPerPx = ((BOUNDS.lon1 - BOUNDS.lon0) * 111320 * Math.cos(Cesium.Math.toRadians(35))) / W;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(X(cur.lon), Y(cur.lat), cur.r / mPerPx, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#ff4444";
    ctx.beginPath();
    ctx.arc(X(player.lon), Y(player.lat), 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // ---- クリック：降下地点 / 移動 ----
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  handler.setInputAction((click: { position: Cesium.Cartesian2 }) => {
    if (!active) return;
    if (mode === "choose") {
      const picked = viewer.scene.pickPosition(click.position);
      if (!picked) return;
      const carto = Cesium.Cartographic.fromCartesian(picked);
      const lon = Cesium.Math.toDegrees(carto.longitude);
      const lat = Cesium.Math.toDegrees(carto.latitude);
      if (lon < BOUNDS.lon0 || lon > BOUNDS.lon1 || lat < BOUNDS.lat0 || lat > BOUNDS.lat1) return;
      void Cesium.sampleTerrainMostDetailed(viewer.terrainProvider, [carto])
        .then((res) => {
          const h = res.length > 0 && Number.isFinite(res[0].height) ? res[0].height : 0;
          dive = { lon, lat, groundH: Math.max(0, h), t: 0 };
          mode = "diving";
          const hint = $("#br-hint");
          if (hint) hint.textContent = "🪂 降下中…";
        })
        .catch(() => {
          dive = { lon, lat, groundH: 0, t: 0 };
          mode = "diving";
        });
    } else if (mode === "playing") {
      const picked = viewer.scene.pickPosition(click.position);
      if (!picked) return;
      const carto = Cesium.Cartographic.fromCartesian(picked);
      const lon = Cesium.Math.toDegrees(carto.longitude);
      const lat = Cesium.Math.toDegrees(carto.latitude);
      if (lon < BOUNDS.lon0 || lon > BOUNDS.lon1 || lat < BOUNDS.lat0 || lat > BOUNDS.lat1) return;
      moveTarget = { lon, lat };
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

  // ---- メインループ ----
  let lastMs = performance.now();
  viewer.clock.onTick.addEventListener(() => {
    if (!active) return;
    // requestRenderMode用：動きがある時だけ描画要求
    if (mode === "diving" || moveTarget !== null || (mode === "playing" && phaseState === "shrink")) {
      viewer.scene.requestRender();
    }
    const now = performance.now();
    const dt = Math.min((now - lastMs) / 1000, 0.1);
    lastMs = now;

    if (mode === "diving" && dive) {
      dive.t += dt / DIVE_SECONDS;
      const t = Math.min(dive.t, 1);
      const alt = 1200 * (1 - t) * (1 - t) + 30;
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(dive.lon, dive.lat, dive.groundH + alt),
        orientation: { heading: 0, pitch: Cesium.Math.toRadians(-80), roll: 0 },
      });
      if (t >= 1) {
        player = { lon: dive.lon, lat: dive.lat };
        dive = null;
        mode = "playing";
        playerEnt.show = true;
        phaseIdx = 0;
        phaseState = "wait";
        phaseT = 0;
        prev = { ...cur };
        next = { lon: cur.lon, lat: cur.lat, r: PHASES[0].r };
        const nc = pickNextCenter();
        next.lon = nc.lon;
        next.lat = nc.lat;
        hp = 100;
        alive = 20;
        aliveT = 0;
        updateZoneVisual();
        const hint = $("#br-hint");
        if (hint) hint.textContent = "🖱️ クリックで移動　⚪ 白円の内側へ！";
      }
      return;
    }

    if (mode === "playing") {
      // 移動
      if (moveTarget) {
        const d = distM(player.lon, player.lat, moveTarget.lon, moveTarget.lat);
        const step = MOVE_SPEED * dt;
        if (d <= step) {
          player = { ...moveTarget };
          moveTarget = null;
        } else {
          const f = step / d;
          player = {
            lon: player.lon + (moveTarget.lon - player.lon) * f,
            lat: player.lat + (moveTarget.lat - player.lat) * f,
          };
        }
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(player.lon, player.lat - 0.0022, 170),
          orientation: { heading: 0, pitch: Cesium.Math.toRadians(-60), roll: 0 },
        });
      }
      playerEnt.position = Cesium.Cartesian3.fromDegrees(
        player.lon,
        player.lat,
        5,
      ) as unknown as Cesium.PositionProperty;

      // フェーズ進行
      const ph = PHASES[Math.min(phaseIdx, PHASES.length - 1)];
      phaseT += dt;
      if (phaseState === "wait" && phaseT >= ph.wait) {
        phaseState = "shrink";
        phaseT = 0;
        prev = { ...cur };
      } else if (phaseState === "shrink") {
        const f = Math.min(phaseT / ph.shrink, 1);
        cur = {
          lon: prev.lon + (next.lon - prev.lon) * f,
          lat: prev.lat + (next.lat - prev.lat) * f,
          r: prev.r + (next.r - prev.r) * f,
        };
        updateZoneVisual();
        if (f >= 1) {
          phaseIdx += 1;
          phaseT = 0;
          if (phaseIdx >= PHASES.length) {
            alive = 1;
            showResult("🏆 ドン勝！！", "京都盆地を制覇したぞ");
            updateHud("終了");
            drawMinimap();
            return;
          }
          phaseState = "wait";
          prev = { ...cur };
          const nc = pickNextCenter();
          next = { lon: nc.lon, lat: nc.lat, r: PHASES[phaseIdx].r };
        }
      }

      // ダメージ
      const outside = distM(player.lon, player.lat, cur.lon, cur.lat) > cur.r;
      if (outside) {
        hp -= ph.dps * dt;
        if (hp <= 0) {
          hp = 0;
          showResult("💀 ドン勝ならず", `フェーズ${phaseIdx + 1}で電磁パルスに呑まれた`);
          updateHud("終了");
          drawMinimap();
          return;
        }
      }
      const vg = $("#br-vignette");
      if (vg) vg.style.opacity = outside ? "0.55" : "0";

      // ダミー生存者
      aliveT += dt;
      if (aliveT > 6) {
        aliveT = 0;
        if (alive > 2) alive -= 1 + Math.floor(Math.random() * 2);
        if (alive < 2) alive = 2;
      }

      // HUD（約4Hz）
      hudT += dt;
      if (hudT > 0.25) {
        hudT = 0;
        const txt =
          phaseState === "wait"
            ? `次収縮まで ${Math.ceil(ph.wait - phaseT)}s`
            : `収縮中！ ${Math.ceil(ph.shrink - phaseT)}s`;
        updateHud(txt);
        drawMinimap();
      }
    }
  });

  function enter() {
    active = true;
    mode = "choose";
    hooks.setCoursesVisible(false);
    for (const e of hooks.hideables) e.show = false;
    for (const e of brEntities) e.show = true;
    zoneOutline.show = true;
    zoneFill.show = true;
    zoneWall.show = true;
    playerEnt.show = false; // 着地まで非表示
    cur = { lon: 135.75, lat: 34.99, r: 3200 };
    prev = { ...cur };
    next = { ...cur };
    updateZoneVisual();
    setHudVisible(true);
    updateHud("降下地点をクリック");
    drawMinimap();
    const hint = $("#br-hint");
    if (hint) hint.textContent = "🖱️ マップをクリックして降下地点を選択";
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(135.75, 34.992, 9500),
      orientation: { heading: 0, pitch: Cesium.Math.toRadians(-90), roll: 0 },
      duration: 1.6,
    });
  }

  function exit() {
    active = false;
    mode = "choose";
    for (const e of brEntities) e.show = false;
    for (const e of hooks.hideables) e.show = true;
    hooks.setCoursesVisible(true);
    setHudVisible(false);
  }

  return {
    enter,
    exit,
    isActive: () => active,
  };
}
