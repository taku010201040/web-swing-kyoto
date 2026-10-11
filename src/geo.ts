import * as THREE from 'three';

const A = 6378137;
const E2 = 6.69437999014e-3;

export function lonLatToEcef(latD: number, lonD: number, h = 0): THREE.Vector3 {
  const lat = THREE.MathUtils.degToRad(latD);
  const lon = THREE.MathUtils.degToRad(lonD);
  const s = Math.sin(lat);
  const N = A / Math.sqrt(1 - E2 * s * s);
  return new THREE.Vector3(
    (N + h) * Math.cos(lat) * Math.cos(lon),
    (N + h) * Math.cos(lat) * Math.sin(lon),
    (N * (1 - E2) + h) * s,
  );
}

export class LocalFrame {
  readonly origin: THREE.Vector3;
  readonly east: THREE.Vector3;
  readonly north: THREE.Vector3;
  readonly up: THREE.Vector3;

  constructor(lat: number, lon: number, h = 0) {
    this.origin = lonLatToEcef(lat, lon, h);
    this.up = this.origin.clone().normalize();
    this.east = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 0, 1), this.up).normalize();
    this.north = new THREE.Vector3().crossVectors(this.up, this.east).normalize();
  }

  applyToObject(obj: THREE.Object3D): void {
    obj.matrixAutoUpdate = false;
    obj.matrix.makeBasis(this.east, this.up, this.north.clone().negate());
    obj.position.copy(this.origin);
  }

  toWorld(p: THREE.Vector3, out = new THREE.Vector3()): THREE.Vector3 {
    return out
      .copy(this.origin)
      .addScaledVector(this.east, p.x)
      .addScaledVector(this.up, p.y)
      .addScaledVector(this.north, -p.z);
  }

  geo(lat: number, lon: number, h: number, out = new THREE.Vector3()): THREE.Vector3 {
    const w = lonLatToEcef(lat, lon, h);
    const d = w.sub(this.origin);
    return out.set(d.dot(this.east), d.dot(this.up), -d.dot(this.north));
  }
}

export function horizonDistance(a: THREE.Vector3, b: THREE.Vector3): number {
  return Math.hypot(a.x - b.x, a.z - b.z);
}
