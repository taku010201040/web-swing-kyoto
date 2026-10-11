import * as THREE from 'three';

// 地面の高さ。京都市の PLATEAU には地形モデルが無いので、読み込んだ建物の「足元の高さ」から地面を推定する。
// 50m マスごとに建物の足元高さを集め、その代表値をなめらかにつないで地面とする。
// データがまだ無いマスは、あらかじめ当てはめた傾斜平面（config の GROUND）を使う。
const CELL = 50, MAX_SAMPLES = 240, PCT = 0.65; // 代表値はやや高め：建物が浮くより、少し埋まるほうを選ぶ

export function createTerrain(plane) {
  const cells = new Map();
  const base = (x, z) => plane.c + plane.a * x + plane.b * z;
  const key = (i, j) => (i + 5000) * 10000 + (j + 5000);
  const terrain = { version: 0, cell: CELL };

  function cellHeight(i, j) {
    const c = cells.get(key(i, j));
    if (!c || c.s.length < 3) return base((i + 0.5) * CELL, (j + 0.5) * CELL);
    if (c.dirty) { const s = c.s.slice().sort((a, b) => a - b); c.h = s[Math.floor(s.length * PCT)]; c.dirty = false; }
    return c.h;
  }
  terrain.height = (x, z) => {
    const fx = x / CELL - 0.5, fz = z / CELL - 0.5, i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
    const a = cellHeight(i, j), b = cellHeight(i + 1, j), c = cellHeight(i, j + 1), d = cellHeight(i + 1, j + 1);
    return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
  };

  // 読み込まれたタイルから、建物 1 棟ごとの足元の高さと位置を取り出して登録する
  const _v = new THREE.Vector3(), _m = new THREE.Matrix4();
  terrain.addModel = (scene, groupMatrixWorld) => {
    scene.traverse((mesh) => {
      if (!mesh.isMesh) return;
      const pos = mesh.geometry.attributes.position, bid = mesh.geometry.attributes._batchid;
      if (!pos || !bid || !pos.count) return;
      mesh.updateWorldMatrix(true, false);
      _m.copy(mesh.matrixWorld);
      // まだシーンに付いていないタイルは、タイル群全体の変換（地球座標→ゲーム座標）が掛かっていない
      if (Math.abs(_v.fromBufferAttribute(pos, 0).applyMatrix4(_m).x) > 1e5) _m.premultiply(groupMatrixWorld);
      const lo = new Map();
      for (let i = 0; i < pos.count; i++) {
        _v.fromBufferAttribute(pos, i).applyMatrix4(_m);
        const b = bid.getX(i), r = lo.get(b);
        if (!r) lo.set(b, { y: _v.y, x: _v.x, z: _v.z, n: 1 });
        else { if (_v.y < r.y) r.y = _v.y; r.x += _v.x; r.z += _v.z; r.n++; }
      }
      for (const r of lo.values()) {
        const x = r.x / r.n, z = r.z / r.n;
        if (!(Math.abs(x) < 20000 && Math.abs(z) < 20000 && Math.abs(r.y) < 2000)) continue;
        const k = key(Math.floor(x / CELL), Math.floor(z / CELL));
        let c = cells.get(k);
        if (!c) cells.set(k, c = { s: [], h: 0, dirty: true });
        if (c.s.length < MAX_SAMPLES) { c.s.push(r.y); c.dirty = true; terrain.version++; }
      }
    });
  };
  return terrain;
}
