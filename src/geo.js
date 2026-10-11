import * as THREE from 'three';

// WGS84 → ゲーム内座標（x: 東, y: 上, z: 南 ＝ 北が -z）。原点は ORIGIN の緯度経度・楕円体高。
const A = 6378137, F = 1 / 298.257223563, E2 = F * (2 - F);
const D2R = Math.PI / 180;

export function llaToEcef(lat, lon, h, out = new THREE.Vector3()) {
  const p = lat * D2R, l = lon * D2R;
  const n = A / Math.sqrt(1 - E2 * Math.sin(p) ** 2);
  return out.set((n + h) * Math.cos(p) * Math.cos(l), (n + h) * Math.cos(p) * Math.sin(l), (n * (1 - E2) + h) * Math.sin(p));
}

export function makeFrame(origin) {
  const p = origin.lat * D2R, l = origin.lon * D2R;
  const o = llaToEcef(origin.lat, origin.lon, origin.h);
  const east = new THREE.Vector3(-Math.sin(l), Math.cos(l), 0);
  const north = new THREE.Vector3(-Math.sin(p) * Math.cos(l), -Math.sin(p) * Math.sin(l), Math.cos(p));
  const up = new THREE.Vector3(Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p));
  const rot = new THREE.Matrix4().set(
    east.x, east.y, east.z, 0,
    up.x, up.y, up.z, 0,
    -north.x, -north.y, -north.z, 0,
    0, 0, 0, 1);
  const ecefToLocal = rot.clone().multiply(new THREE.Matrix4().makeTranslation(-o.x, -o.y, -o.z));
  const tmp = new THREE.Vector3();
  return {
    ecefToLocal,
    toLocal(lat, lon, h = origin.h, out = new THREE.Vector3()) {
      return out.copy(llaToEcef(lat, lon, h, tmp)).applyMatrix4(ecefToLocal);
    },
  };
}

export const tileX = (lon, z) => Math.floor((lon + 180) / 360 * 2 ** z);
export const tileY = (lat, z) => Math.floor((1 - Math.asinh(Math.tan(lat * D2R)) / Math.PI) / 2 * 2 ** z);
export const tileLon = (x, z) => x / 2 ** z * 360 - 180;
export const tileLat = (y, z) => Math.atan(Math.sinh(Math.PI * (1 - 2 * y / 2 ** z))) / D2R;
