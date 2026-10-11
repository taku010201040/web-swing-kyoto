import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";
import { ION_TOKEN } from "./ionToken";
import { createBrGame } from "./br";

/* ============================================================
 * 天空流しそうめんスライダー (kph2026-07)
 * - 背景: PLATEAU 3D都市モデル (Cesium ion Japan 3D Buildings)
 * - 樋: 割り竹のU字断面 × スキー場式3コース（青竹/枯竹/煤竹）
 *   竹は曲げない。真っ直ぐな区間を柱の上で荒縄で継ぐ本物の作り。
 * - そうめん装置: チーム製 nagashi-somen.glb を3か所に配置
 * - 火災デモ: 木造密集イメージの火災楕円 + 樋から放水
 * - 実測: CityGML 8メッシュ・26464棟の木造/旧耐震ドット＋集計
 * ========================================================== */

// ---- 0. Cesium ion トークン (src/ionToken.ts に貼る) ----
const JAPAN_BUILDINGS_ASSET = 2602291;

const tokenStatus = document.querySelector("#token-status");
function setStatus(msg: string) {
  if (tokenStatus) tokenStatus.textContent = msg;
}

// ---- 1. Viewer ----
let viewer: Cesium.Viewer;
if (ION_TOKEN) {
  Cesium.Ion.defaultAccessToken = ION_TOKEN;
  viewer = new Cesium.Viewer("cesium", {
    terrain: Cesium.Terrain.fromWorldTerrain(),
    baseLayerPicker: false,
    geocoder: false,
    timeline: false,
    animation: false,
    navigationInstructionsInitiallyVisible: false,
    requestRenderMode: true,
    maximumRenderTimeChange: Infinity,
    msaaSamples: 2,
  });
  setStatus("base: ion imagery + terrain");
} else {
  viewer = new Cesium.Viewer("cesium", {
    baseLayer: false,
    geocoder: false,
    timeline: false,
    animation: false,
    navigationInstructionsInitiallyVisible: false,
    requestRenderMode: true,
    maximumRenderTimeChange: Infinity,
    msaaSamples: 2,
  });
  viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      maximumLevel: 19,
      credit: "© OpenStreetMap contributors",
    }),
  );
  setStatus("base: OSM（ion未設定のため建物は簡易表示）");
}
viewer.scene.globe.depthTestAgainstTerrain = true;
// 軽量化：CSSピクセル等倍レンダリング＋シャドウ無効（高DPI機で大幅に軽くなる）
viewer.resolutionScale = Math.min(1, 1 / (window.devicePixelRatio || 1));
viewer.shadows = false;
viewer.scene.debugShowFramesPerSecond = true; // FPS表示

// ---- 2. 京都の3D建物 ----
// 主経路: PLATEAU配信の複合tileset（トークン不要・審査的にも純正）
// 予備: ion Japan 3D Buildings（トークンがある時のみ）
const KYOTO_TILESET_URL =
  "/tileset-demo.json";
let demoTileset: Cesium.Cesium3DTileset | undefined;
async function loadBuildings() {
  try {
    const tileset = await Cesium.Cesium3DTileset.fromUrl(KYOTO_TILESET_URL, {
      maximumScreenSpaceError: 32, // デモ用に軽量化
      skipLevelOfDetail: true,
      dynamicScreenSpaceError: true,
    });
    viewer.scene.primitives.add(tileset);
    demoTileset = tileset;
    setStatus("base: PLATEAU直配信 + 京都bldg表示中");
    return;
  } catch (e) {
    console.warn("plateau direct failed", e);
  }
  if (ION_TOKEN) {
    try {
      const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(JAPAN_BUILDINGS_ASSET, {
        maximumScreenSpaceError: 32,
        skipLevelOfDetail: true,
        dynamicScreenSpaceError: true,
      });
      viewer.scene.primitives.add(tileset);
      demoTileset = tileset;
      setStatus("base: ion + Japan 3D Buildings 表示中");
      return;
    } catch (e) {
      console.warn("buildings failed", e);
    }
  }
  setStatus("base: 建物なし（配信・ionとも失敗）");
}
void loadBuildings();

// ---- 3. カメラ初期位置: 京都駅 ----
const STATION = { lon: 135.7585, lat: 34.9875 };
function flyToStation() {
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(STATION.lon, STATION.lat, 1400),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-55),
      roll: 0,
    },
    duration: 1.6,
  });
}
flyToStation();

// ---- 4. スキー場式3ルート (ゲレンデマップ) ----
// [lon, lat, height(m)]: 建物高さを避けた高さ。区間は直線、方向転換は柱の上だけ。
type CourseId = "green" | "red" | "black";
interface Course {
  id: CourseId;
  name: string;
  stars: string;
  desc: string;
  speed: number; // m/s
  tubeColor: Cesium.Color;
  glowColor: Cesium.Color;
  route: Array<[number, number, number]>;
  startLabel: string;
  goalLabel: string;
}
const COURSES: Course[] = [
  {
    id: "green",
    name: "🟢 かもがわファミリー",
    stars: "★☆☆☆☆ やさしい",
    desc: "七条通まっすぐ1.4km・落差105m。青竹の割り樋のファミリー向け。",
    speed: 26,
    tubeColor: Cesium.Color.fromCssColorString("#86A34C"),
    glowColor: Cesium.Color.LIME,
    route: [
      [135.758, 34.987, 150],
      [135.762, 34.986, 120],
      [135.766, 34.985, 95],
      [135.77, 34.984, 70],
      [135.773, 34.9835, 45],
    ],
    startLabel: "START 京都駅上空 150m",
    goalLabel: "GOAL 鴨川プラザ（避難広場となり）",
  },
  {
    id: "red",
    name: "🔴 ほんがんじスラローム",
    stars: "★★★☆☆ ふつう",
    desc: "東本願寺→渉成園のS字1.9km・落差92m。枯竹の割り樋で碁盤の目と木造密集を体感。",
    speed: 32,
    tubeColor: Cesium.Color.fromCssColorString("#C9A06A"),
    glowColor: Cesium.Color.RED,
    route: [
      [135.7585, 34.9885, 130],
      [135.7625, 34.9905, 95],
      [135.767, 34.9875, 65],
      [135.771, 34.9855, 50],
      [135.7745, 34.9835, 38],
    ],
    startLabel: "START 京都タワー上空 130m",
    goalLabel: "GOAL 鴨川プラザ（スラローム完走）",
  },
  {
    id: "black",
    name: "⚫ とうじブラックダイブ",
    stars: "★★★★★ エキスパート",
    desc: "東寺上空250m→梅小路→京都駅南の3.9km・落差212m。煤竹の割り樋の防災ミッション。",
    speed: 45,
    tubeColor: Cesium.Color.fromCssColorString("#4A382A"),
    glowColor: Cesium.Color.HOTPINK,
    route: [
      [135.732, 34.981, 250],
      [135.742, 34.987, 150],
      [135.753, 34.984, 110],
      [135.762, 34.985, 80],
      [135.768, 34.9845, 60],
      [135.7745, 34.9835, 38],
    ],
    startLabel: "START 東寺上空 250m",
    goalLabel: "GOAL 鴨川プラザ（ダイブ完走）",
  },
];
let activeCourseId: CourseId = "green";
function activeCourse(): Course {
  return COURSES.find((c) => c.id === activeCourseId) ?? COURSES[0];
}
// 断面: 割り竹のU字（外弧→内弧の閉ループ。上が開いた樋になる）
function troughShape(radius: number, wall = 0.6, segs = 10): Cesium.Cartesian2[] {
  const pts: Cesium.Cartesian2[] = [];
  const a0 = Cesium.Math.toRadians(200);
  const a1 = Cesium.Math.toRadians(340);
  const inner = radius - wall;
  for (let i = 0; i <= segs; i++) {
    const a = a0 + ((a1 - a0) * i) / segs;
    pts.push(new Cesium.Cartesian2(radius * Math.cos(a), radius * Math.sin(a)));
  }
  for (let i = segs; i >= 0; i--) {
    const a = a0 + ((a1 - a0) * i) / segs;
    pts.push(new Cesium.Cartesian2(inner * Math.cos(a), inner * Math.sin(a)));
  }
  return pts;
}
// 断面: 平たい楕円（樋の中の水）
function ellipseShape(rx: number, ry: number, cy = 0, segs = 12): Cesium.Cartesian2[] {
  const pts: Cesium.Cartesian2[] = [];
  for (let i = 0; i < segs; i++) {
    const a = (2 * Math.PI * i) / segs;
    pts.push(new Cesium.Cartesian2(rx * Math.cos(a), ry * Math.sin(a) + cy));
  }
  return pts;
}

// コースごとの表示エンティティ（切替でshow on/off）
const courseEntities = new Map<CourseId, Cesium.Entity[]>();
// BRモード中はコース表示を全面非表示にする
let coursesHidden = false;
function trackEntity(id: CourseId, e: Cesium.Entity): Cesium.Entity {
  const arr = courseEntities.get(id) ?? [];
  arr.push(e);
  courseEntities.set(id, arr);
  return e;
}
for (const c of COURSES) {
  const routeCart = c.route.map(([lo, la, h]) =>
    Cesium.Cartesian3.fromDegrees(lo, la, h),
  );
  const outerR = c.id === "black" ? 3.4 : 3.0;
  trackEntity(
    c.id,
    viewer.entities.add({
      name: `slider-tube-${c.id}`,
      polylineVolume: {
        positions: routeCart,
        shape: troughShape(outerR, 0.6),
        // 竹は曲げない。区間は直線、角は柱の継ぎ目で折る
        cornerType: Cesium.CornerType.MITERED,
        material: c.tubeColor,
      },
    }),
  );
  trackEntity(
    c.id,
    viewer.entities.add({
      name: `slider-water-${c.id}`,
      polylineVolume: {
        positions: c.route.map(([lo, la, h]) =>
          Cesium.Cartesian3.fromDegrees(lo, la, h),
        ),
        shape: ellipseShape(1.1, 0.4, -1.7),
        cornerType: Cesium.CornerType.MITERED,
        material: Cesium.Color.DEEPSKYBLUE.withAlpha(0.9),
      },
    }),
  );
  // 遠景でも見えるルート強調線（スクリーン幅一定）
  trackEntity(
    c.id,
    viewer.entities.add({
      name: `slider-highlight-${c.id}`,
      polyline: {
        positions: c.route.map(([lo, la, h]) =>
          Cesium.Cartesian3.fromDegrees(lo, la, h + 3.5),
        ),
        width: 8,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.35,
          color: c.glowColor,
        }),
      },
    }),
  );
  for (let i = 1; i < c.route.length; i++) {
    const [lo, la, h] = c.route[i];
    const [plo, pla] = c.route[i - 1];
    // 柱
    trackEntity(
      c.id,
      viewer.entities.add({
        cylinder: {
          length: h - 3,
          topRadius: 0.7,
          bottomRadius: 1.0,
          material: Cesium.Color.fromCssColorString("#6E5136"),
        },
        position: Cesium.Cartesian3.fromDegrees(lo, la, (h - 3) / 2),
      }),
    );
    // 樋を受ける桟（経路に直交する梁）
    const pathHeading = Math.atan2(
      (lo - plo) * Math.cos(Cesium.Math.toRadians(la)),
      la - pla,
    );
    const beamPos = Cesium.Cartesian3.fromDegrees(lo, la, h - 3.2);
    trackEntity(
      c.id,
      viewer.entities.add({
        position: beamPos,
        orientation: Cesium.Transforms.headingPitchRollQuaternion(
          beamPos,
          new Cesium.HeadingPitchRoll(pathHeading + Math.PI / 2, 0, 0),
        ),
        box: {
          dimensions: new Cesium.Cartesian3(c.id === "black" ? 8.0 : 7.0, 0.6, 0.6),
          material: Cesium.Color.fromCssColorString("#7A5A38"),
        },
      }),
    );
    // 継ぎ手の荒縄：方向が変わるのは柱の上だけ。真竹を曲げず縄で継ぐ
    trackEntity(
      c.id,
      viewer.entities.add({
        name: `bamboo-lashing-${c.id}-${i}`,
        position: Cesium.Cartesian3.fromDegrees(lo, la, h),
        ellipsoid: {
          radii: new Cesium.Cartesian3(outerR + 0.5, outerR + 0.5, outerR + 0.5),
          material: Cesium.Color.fromCssColorString("#B89A5A"),
        },
      }),
    );
  }
  const [slo, sla, sh] = c.route[0];
  const [glo, gla, gh] = c.route[c.route.length - 1];
  trackEntity(
    c.id,
    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(slo, sla, sh + 12),
      label: {
        text: `${c.name} ${c.startLabel}`,
        font: "bold 16px sans-serif",
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        showBackground: true,
        backgroundColor:
          c.id === "green"
            ? Cesium.Color.DARKGREEN.withAlpha(0.75)
            : c.id === "red"
              ? Cesium.Color.DARKRED.withAlpha(0.75)
              : Cesium.Color.BLACK.withAlpha(0.8),
      },
    }),
  );
  trackEntity(
    c.id,
    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(glo, gla, gh + 12),
      label: {
        text: `${c.name} ${c.goalLabel}`,
        font: "bold 16px sans-serif",
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        showBackground: true,
        backgroundColor: Cesium.Color.DARKGREEN.withAlpha(0.7),
      },
    }),
  );
}
function applyCourseVisibility() {
  for (const c of COURSES) {
    const show = c.id === activeCourseId && !coursesHidden;
    for (const e of courseEntities.get(c.id) ?? []) e.show = show;
  }
}
applyCourseVisibility();

// ---- 5. そうめん流し: アクティブコース内を流れる白い束 ----
const SAMPLES = 600;
interface CourseSamples {
  pos: Cesium.Cartesian3[];
  lonLat: Array<[number, number]>;
}
const samplesByCourse = new Map<CourseId, CourseSamples>();
for (const c of COURSES) {
  const cart = c.route.map(([lo, la, h]) =>
    Cesium.Cartesian3.fromDegrees(lo, la, h),
  );
  const segLens: number[] = [];
  let total = 0;
  for (let i = 0; i < cart.length - 1; i++) {
    const d = Cesium.Cartesian3.distance(cart[i], cart[i + 1]);
    segLens.push(d);
    total += d;
  }
  const pos: Cesium.Cartesian3[] = [];
  const lonLat: Array<[number, number]> = [];
  for (let s = 0; s < SAMPLES; s++) {
    const target = (total * s) / (SAMPLES - 1);
    let acc = 0;
    for (let i = 0; i < segLens.length; i++) {
      if (target <= acc + segLens[i] || i === segLens.length - 1) {
        const f = segLens[i] === 0 ? 0 : (target - acc) / segLens[i];
        const p = new Cesium.Cartesian3();
        Cesium.Cartesian3.lerp(cart[i], cart[i + 1], f, p);
        pos.push(p);
        const [lo0, la0] = c.route[i];
        const [lo1, la1] = c.route[i + 1];
        lonLat.push([lo0 + (lo1 - lo0) * f, la0 + (la1 - la0) * f]);
        break;
      }
      acc += segLens[i];
    }
  }
  samplesByCourse.set(c.id, { pos, lonLat });
}
function sampleAt(t: number): { pos: Cesium.Cartesian3; lon: number; lat: number } {
  const data = samplesByCourse.get(activeCourseId) ?? samplesByCourse.get("green")!;
  const tt = ((t % 1) + 1) % 1;
  const idx = Math.min(Math.floor(tt * SAMPLES), SAMPLES - 1);
  return { pos: data.pos[idx], lon: data.lonLat[idx][0], lat: data.lonLat[idx][1] };
}
function sampleAhead(t: number, dt = 0.012) {
  return sampleAt(t + dt);
}

// ---- 5b. 竹の節リング: 一定間隔で少し太い短い樋を被せる ----
// 経路に沿った短区間のPolylineVolumeなので向き合わせ不要
const JOINT_COLORS: Record<CourseId, Cesium.Color> = {
  green: Cesium.Color.fromCssColorString("#5F7A35"),
  red: Cesium.Color.fromCssColorString("#6B4A2B"),
  black: Cesium.Color.fromCssColorString("#241A12"),
};
for (const c of COURSES) {
  const data = samplesByCourse.get(c.id);
  if (!data) continue;
  const outerR = c.id === "black" ? 3.4 : 3.0;
  const step = Math.max(12, Math.floor(SAMPLES / 22)); // 全長に約22節
  for (let i = step; i < SAMPLES - 2; i += step) {
    const seg = [data.pos[i - 2], data.pos[i + 2]];
    trackEntity(
      c.id,
      viewer.entities.add({
        name: `bamboo-joint-${c.id}-${i}`,
        polylineVolume: {
          positions: seg,
          shape: troughShape(outerR + 0.3, 0.7, 10),
          cornerType: Cesium.CornerType.MITERED,
          material: JOINT_COLORS[c.id],
        },
      }),
    );
  }
}
applyCourseVisibility();

const PELLETS = 10;
const pelletEntities: Cesium.Entity[] = [];
for (let k = 0; k < PELLETS; k++) {
  const phase = k / PELLETS;
  pelletEntities.push(
    viewer.entities.add({
      position: new Cesium.CallbackPositionProperty(() => {
        // 樋の中の水面（中心より1.5m下）に浮かべる
        const s = sampleAt(simT + phase).pos;
        const up = new Cesium.Cartesian3();
        Cesium.Cartesian3.normalize(s, up);
        const out = new Cesium.Cartesian3();
        Cesium.Cartesian3.multiplyByScalar(up, -1.5, out);
        Cesium.Cartesian3.add(s, out, out);
        return out;
      }, false),
      box: {
        dimensions: new Cesium.Cartesian3(0.9, 0.9, 2.4),
        material: Cesium.Color.WHITE,
      },
    }),
  );
}

// ---- 6. そうめん装置モデル (チーム製 glb) ----
const SOMEN_SPOTS: Array<{ lon: number; lat: number; heading: number; label: string }> = [
  { lon: 135.7681, lat: 35.0116, heading: 90, label: "鴨川デルタ会場" },
  { lon: 135.7735, lat: 34.983, heading: 45, label: "GOALプラザ会場" },
  { lon: 135.7575, lat: 34.9865, heading: 180, label: "京都駅前会場" },
];
const somenEntities: Cesium.Entity[] = [];
for (const s of SOMEN_SPOTS) {
  const pos = Cesium.Cartesian3.fromDegrees(s.lon, s.lat, 0);
  somenEntities.push(
    viewer.entities.add({
      position: pos,
      orientation: Cesium.Transforms.headingPitchRollQuaternion(
        pos,
        new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(s.heading), 0, 0),
      ),
      model: { uri: "/nagashi-somen.glb", scale: 1.0, minimumPixelSize: 24 },
    }),
  );
  somenEntities.push(
    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(s.lon, s.lat, 8),
      label: {
        text: `🎋 ${s.label}`,
        font: "13px sans-serif",
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      },
    }),
  );
}

// ---- 7. 火災デモ (木造密集イメージ) + 放水 ----
// デモ用火点3つ: ルート北側の町家密集想定エリア
const FIRES: Array<{ lon: number; lat: number; r: number }> = [
  { lon: 135.7665, lat: 34.9895, r: 55 },
  { lon: 135.7695, lat: 34.9905, r: 40 },
  { lon: 135.7645, lat: 34.9915, r: 30 },
];
let waterStartMs: number | null = null;
const fireEntities: Cesium.Entity[] = [];
for (const f of FIRES) {
  const ent = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(f.lon, f.lat, 30),
    ellipse: {
      semiMajorAxis: f.r,
      semiMinorAxis: f.r * 0.8,
      height: 30,
      material: new Cesium.ColorMaterialProperty(
        new Cesium.CallbackProperty((time?: Cesium.JulianDate) => {
          const now = time ? Cesium.JulianDate.toDate(time).getTime() : performance.now();
          let alpha = 0.55 + 0.2 * Math.sin(now / 280);
          if (waterStartMs !== null) {
            const el = (now - waterStartMs) / 1000;
            alpha *= Math.max(0.08, 1 - el / 9);
          }
          return Cesium.Color.RED.withAlpha(Math.max(0.05, Math.min(0.8, alpha)));
        }, false),
      ),
    },
    show: false,
  });
  fireEntities.push(ent);
}
const fireLabel = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(135.768, 34.9935, 60),
  label: {
    text: "🔥 木造密集・延焼リスク高（試算デモ）",
    font: "bold 14px sans-serif",
    fillColor: Cesium.Color.YELLOW,
    outlineColor: Cesium.Color.BLACK,
    outlineWidth: 2,
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    show: false,
  },
  show: false,
});

// ---- 7b. 木造・旧耐震ドット (CityGML実測・約2.1万点) ----
const woodenCloud = new Cesium.PointPrimitiveCollection();
woodenCloud.show = false;
viewer.scene.primitives.add(woodenCloud);
async function loadWooden() {
  try {
    const res = await fetch("/wooden.json");
    const pts = (await res.json()) as Array<{ lon: number; lat: number; w: number }>;
    for (let i = 0; i < pts.length; i += 2500) {
      const chunk = pts.slice(i, i + 2500);
      for (const p of chunk) {
        woodenCloud.add({
          position: Cesium.Cartesian3.fromDegrees(p.lon, p.lat, 4),
          color: p.w === 1 ? Cesium.Color.RED.withAlpha(0.85) : Cesium.Color.ORANGE.withAlpha(0.85),
          pixelSize: 5,
        });
      }
      // 主スレッドを譲る
      await new Promise((r) => window.setTimeout(r, 0));
    }
    console.log(`wooden dots: ${pts.length}`);
  } catch (e) {
    console.warn("wooden failed", e);
  }
}
void loadWooden();

// 放水ライン: アクティブコース中間点から火点へ（コース切替で更新）
const waterLine = viewer.entities.add({
  polyline: {
    positions: new Cesium.CallbackProperty(() => {
      const c = activeCourse();
      const mid = c.route[Math.floor(c.route.length / 2)];
      return [
        Cesium.Cartesian3.fromDegrees(mid[0], mid[1], mid[2]),
        Cesium.Cartesian3.fromDegrees(135.768, 34.9905, 0),
      ];
    }, false),
    width: 9,
    material: Cesium.Color.DEEPSKYBLUE.withAlpha(0.85),
  },
  show: false,
});

// ---- 8. 避難広場 (GOAL横・想定) ----
viewer.entities.add({
  polygon: {
    hierarchy: Cesium.Cartesian3.fromDegreesArray([
      135.7735, 34.982, 135.7755, 34.982, 135.7755, 34.984, 135.7735, 34.984,
    ]),
    height: 1,
    material: Cesium.Color.LIMEGREEN.withAlpha(0.5),
  },
});
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(135.7745, 34.983, 15),
  label: {
    text: "🟩 避難広場（想定・防火用水槽あり）",
    font: "13px sans-serif",
    fillColor: Cesium.Color.WHITE,
    outlineColor: Cesium.Color.BLACK,
    outlineWidth: 2,
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
  },
});

// ---- 9. ライドモード（コース別速度） ----
let simT = 0;
let riding = false;
let lastMs = performance.now();
let idleRenderT = 0;
function courseLength(id: CourseId): number {
  const c = COURSES.find((x) => x.id === id) ?? COURSES[0];
  let total = 1450;
  try {
    const cart = c.route.map(([lo, la, h]) =>
      Cesium.Cartesian3.fromDegrees(lo, la, h),
    );
    total = 0;
    for (let i = 0; i < cart.length - 1; i++) {
      total += Cesium.Cartesian3.distance(cart[i], cart[i + 1]);
    }
  } catch { /* noop */ }
  return Math.max(total, 1);
}
// ライド平滑化用スクラッチ（毎フレームの確保を避ける）
const _up = new Cesium.Cartesian3();
const _dest = new Cesium.Cartesian3();
let _smoothPos: Cesium.Cartesian3 | null = null;
let _smoothHeading = 0;
viewer.clock.onTick.addEventListener(() => {
  const now = performance.now();
  const dt = Math.min((now - lastMs) / 1000, 0.1);
  lastMs = now;
  const c = activeCourse();
  simT += (dt * c.speed) / courseLength(c.id);
  if (!riding) {
    _smoothPos = null;
    return;
  }
  const cur = sampleAt(simT);
  const ahead = sampleAhead(simT, 0.03);
  // チューブの上を滑る視点（チューブ内に入らない）
  Cesium.Cartesian3.normalize(cur.pos, _up);
  Cesium.Cartesian3.multiplyByScalar(_up, 16, _dest);
  Cesium.Cartesian3.add(cur.pos, _dest, _dest);
  const dLon = ahead.lon - cur.lon;
  const dLat = ahead.lat - cur.lat;
  const heading = Math.atan2(
    dLon * Math.cos(Cesium.Math.toRadians(cur.lat)),
    dLat,
  );
  // 指数平滑（フレーム落ちでも滑らかに追従）
  const k = 1 - Math.exp(-6 * dt);
  if (!_smoothPos) {
    _smoothPos = _dest.clone();
    _smoothHeading = heading;
  }
  Cesium.Cartesian3.lerp(_smoothPos, _dest, k, _smoothPos);
  let dh = heading - _smoothHeading;
  while (dh > Math.PI) dh -= 2 * Math.PI;
  while (dh < -Math.PI) dh += 2 * Math.PI;
  _smoothHeading += dh * k;
  viewer.camera.setView({
    destination: _smoothPos,
    orientation: { heading: _smoothHeading, pitch: Cesium.Math.toRadians(-24), roll: 0 },
  });
  // requestRenderMode用の描画要求：動いている時だけ毎フレーム、待機中は約8fps
  const animating = riding || brActive || fireOn || waterLine.show;
  if (animating) {
    viewer.scene.requestRender();
  } else {
    idleRenderT += dt;
    if (idleRenderT > 0.12) {
      idleRenderT = 0;
      viewer.scene.requestRender();
    }
  }
});

// ---- 10. スコア表示 (CityGML 8メッシュ・26464棟の実測) ----
async function loadStats() {
  try {
    const res = await fetch("/stats.json");
    const d = (await res.json()) as {
      counts: { count: number; wooden: number; old: number; flood: number };
      footRatio: number;
    };
    const c = d.counts;
    const pct = (n: number) => `${Math.round((n / c.count) * 100)}%`;
    document.querySelector("#v-density")!.textContent =
      `${Math.round(d.footRatio * 100)}%（建物面積/地域面積）`;
    document.querySelector("#v-risk")!.textContent =
      `木造${pct(c.wooden)}・旧耐震${pct(c.old)}（${c.count.toLocaleString()}棟実測）`;
    document.querySelector("#v-shelter")!.textContent =
      `浸水想定内${pct(c.flood)}・GOAL東120m（想定）`;
  } catch (e) {
    console.warn("stats failed", e);
  }
}
void loadStats();

// ---- 11. ボタン + コース切替 ----
function toggleActive(id: string, on: boolean) {
  document.querySelector(id)?.classList.toggle("active", on);
}
function flyToCourse(id: CourseId) {
  const c = COURSES.find((x) => x.id === id) ?? COURSES[0];
  const [lo, la] = c.route[0];
  const dist = id === "black" ? 6000 : 1400;
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(lo, la, dist),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-55),
      roll: 0,
    },
    duration: 1.6,
  });
}
function updateCourseCard() {
  const c = activeCourse();
  document.querySelector("#course-name")!.textContent = `${c.name} ${c.stars}`;
  document.querySelector("#course-desc")!.textContent = c.desc;
  for (const id of ["green", "red", "black"] as CourseId[]) {
    toggleActive(`#btn-course-${id}`, id === activeCourseId);
  }
}
function setCourse(id: CourseId, fly = true) {
  if (brActive) setBrMode(false);
  activeCourseId = id;
  riding = false;
  toggleActive("#btn-ride", false);
  simT = 0;
  applyCourseVisibility();
  updateCourseCard();
  if (fly) flyToCourse(id);
}
for (const id of ["green", "red", "black"] as CourseId[]) {
  document.querySelector(`#btn-course-${id}`)?.addEventListener("click", () => {
    setCourse(id);
  });
}
updateCourseCard();
document.querySelector("#btn-station")?.addEventListener("click", () => {
  if (brActive) setBrMode(false);
  riding = false;
  toggleActive("#btn-ride", false);
  flyToStation();
});
document.querySelector("#btn-ride")?.addEventListener("click", () => {
  riding = !riding;
  toggleActive("#btn-ride", riding);
});
let fireOn = false;
document.querySelector("#btn-fire")?.addEventListener("click", () => {
  fireOn = !fireOn;
  for (const e of fireEntities) e.show = fireOn;
  fireLabel.show = fireOn;
  woodenCloud.show = fireOn;
  toggleActive("#btn-fire", fireOn);
  if (fireOn) {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(135.7675, 34.99, 700),
      orientation: { heading: 0, pitch: Cesium.Math.toRadians(-50), roll: 0 },
      duration: 1.4,
    });
  }
});
document.querySelector("#btn-water")?.addEventListener("click", () => {
  waterLine.show = true;
  waterStartMs = Date.now();
  toggleActive("#btn-water", true);
  window.setTimeout(() => toggleActive("#btn-water", false), 9500);
});
document.querySelector("#btn-reset")?.addEventListener("click", () => {
  if (brActive) setBrMode(false);
  riding = false;
  toggleActive("#btn-ride", false);
  fireOn = false;
  for (const e of fireEntities) e.show = false;
  fireLabel.show = false;
  woodenCloud.show = false;
  toggleActive("#btn-fire", false);
  waterLine.show = false;
  waterStartMs = null;
  flyToCourse(activeCourseId);
});

// ---- 12. 周辺施設ピン (OpenPOI API 焼き付けデータ) ----
const poiEntities: Cesium.Entity[] = [];
function poiColor(q: string): Cesium.Color {
  if (q === "駅") return Cesium.Color.RED;
  if (q === "コンビニ") return Cesium.Color.LIMEGREEN;
  return Cesium.Color.ORANGE;
}
async function loadPois() {
  try {
    const res = await fetch("/pois.json");
    const pois = (await res.json()) as Array<{
      name: string; lat: number; lng: number; query: string; category: string;
    }>;
    for (const p of pois) {
      if (typeof p.lat !== "number" || typeof p.lng !== "number") continue;
      poiEntities.push(
        viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(p.lng, p.lat, 5),
          point: {
            pixelSize: 9,
            color: poiColor(p.query),
            outlineColor: Cesium.Color.WHITE,
            outlineWidth: 2,
          },
          label: {
            text: p.name,
            font: "11px sans-serif",
            fillColor: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            showBackground: true,
            backgroundColor: Cesium.Color.BLACK.withAlpha(0.55),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 1600),
          },
        }),
      );
    }
    console.log(`pois: ${poiEntities.length}`);
  } catch (e) {
    console.warn("pois failed", e);
  }
}
void loadPois();
let poiOn = true;
document.querySelector("#btn-poi")?.addEventListener("click", () => {
  poiOn = !poiOn;
  for (const e of poiEntities) e.show = poiOn;
  toggleActive("#btn-poi", poiOn);
});

// ---- 13. KYOTO BATTLEGROUNDS ----
let brGame: ReturnType<typeof createBrGame> | null = null;
let brActive = false;
function setBrMode(on: boolean) {
  if (on && !brGame) {
    brGame = createBrGame(viewer, {
      hideables: [...pelletEntities, ...somenEntities],
      setCoursesVisible: (v: boolean) => {
        coursesHidden = !v;
        applyCourseVisibility();
      },
    });
  }
  brActive = on;
  toggleActive("#btn-br", on);
  if (on) {
    riding = false;
    toggleActive("#btn-ride", false);
    brGame?.enter();
  } else {
    brGame?.exit();
    coursesHidden = false;
    applyCourseVisibility();
    flyToCourse(activeCourseId);
  }
}
document.querySelector("#btn-br")?.addEventListener("click", () => {
  setBrMode(!brActive);
});

// ---- 13. 初回一括プリロード v2 ----
// ライドと同じ視点を全コースでなぞり、走行中の読み込みを消す。
// tilesLoaded が立たない環境でもタイムアウトで進む。スキップ可。
let preloadSkip = false;
document.querySelector("#loader-skip")?.addEventListener("click", () => {
  preloadSkip = true;
});
function setLoader(pct: number, text: string) {
  const t = document.querySelector("#loader-text");
  const f = document.querySelector<HTMLElement>("#loader-fill");
  if (t) t.textContent = text;
  if (f) f.style.width = `${Math.round(pct * 100)}%`;
}
function sleep(ms: number) {
  return new Promise((r) => window.setTimeout(r, ms));
}
async function waitTilesQuiet(timeoutMs: number) {
  const t0 = performance.now();
  while (performance.now() - t0 < timeoutMs) {
    if (preloadSkip) return;
    const tl = demoTileset as unknown as { tilesLoaded?: boolean } | undefined;
    if (!tl || tl.tilesLoaded) {
      await sleep(250);
      const tl2 = demoTileset as unknown as { tilesLoaded?: boolean } | undefined;
      if (!tl2 || tl2.tilesLoaded) return;
    }
    await sleep(200);
  }
}
async function preloadDemo() {
  const t0 = performance.now();
  const BUDGET_MS = 75000; // 上限75秒で切り上げ
  const over = () => preloadSkip || performance.now() - t0 > BUDGET_MS;
  try {
    for (let i = 0; i < 40 && !demoTileset; i++) await sleep(500);
    // 概要7地点
    const overviews: Array<[number, number, number, string]> = [
      [135.7585, 34.9875, 1400, "京都駅上空"],
      [135.7675, 34.99, 700, "火災デモ"],
      [135.7681, 35.0116, 600, "鴨川デルタ会場"],
      [135.7735, 34.983, 500, "GOALプラザ"],
    ];
    let done = 0;
    const total =
      overviews.length +
      (["green", "red", "black"] as CourseId[]).reduce(
        (n, id) => n + Math.ceil((samplesByCourse.get(id)?.pos.length ?? 0) / 20),
        0,
      );
    for (const [lo, la, h, label] of overviews) {
      if (over()) break;
      setLoader(done / total, `データを読み込み中… ${label}`);
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(lo, la, h),
        orientation: { heading: 0, pitch: Cesium.Math.toRadians(-55), roll: 0 },
      });
      await waitTilesQuiet(2000);
      done++;
    }
    // 各コースのライド視点をなぞる
    for (const id of ["green", "red", "black"] as CourseId[]) {
      const data = samplesByCourse.get(id);
      if (!data) continue;
      for (let k = 0; k < data.pos.length; k += 25) {
        if (over()) break;
        const cur = data.pos[k];
        const [ clon, clat ] = data.lonLat[k];
        const [ nlon, nlat ] = data.lonLat[Math.min(k + 18, data.lonLat.length - 1)];
        const up = new Cesium.Cartesian3();
        Cesium.Cartesian3.normalize(cur, up);
        const dest = new Cesium.Cartesian3();
        Cesium.Cartesian3.multiplyByScalar(up, 16, dest);
        Cesium.Cartesian3.add(cur, dest, dest);
        viewer.camera.setView({
          destination: dest,
          orientation: {
            heading: Math.atan2(
              (nlon - clon) * Math.cos(Cesium.Math.toRadians(clat)),
              nlat - clat,
            ),
            pitch: Cesium.Math.toRadians(-24),
            roll: 0,
          },
        });
        setLoader(done / total, `データを読み込み中… ${id}コース走行先読み`);
        await waitTilesQuiet(2000);
        done++;
      }
      if (over()) break;
    }
  } finally {
    setLoader(1, "準備OK！");
    await sleep(400);
    const loader = document.querySelector<HTMLElement>("#loader");
    if (loader) loader.style.display = "none";
    flyToStation();
  }
}
void preloadDemo();
