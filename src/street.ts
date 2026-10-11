import * as THREE from 'three';

export class Street {
  readonly group = new THREE.Group();
  private cars: { g: THREE.Group; speed: number; lane: number; dir: number }[] = [];
  private windGeo = new THREE.BufferGeometry();
  private windMat: THREE.PointsMaterial;
  private stars: THREE.Points;
  private moon: THREE.Mesh;
  private hemi: THREE.HemisphereLight;
  private sun: THREE.DirectionalLight;
  private neonMats: THREE.MeshBasicMaterial[] = [];
  private lampMats: THREE.MeshBasicMaterial[] = [];
  private groundMat: THREE.MeshStandardMaterial | null = null;
  private night = true;

  constructor() {
    this.hemi = new THREE.HemisphereLight(0x8fb0ff, 0x0a0c18, 0.55);
    this.group.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0x8fb0ff, 0.75);
    this.sun.position.set(300, 2600, -1800);
    this.sun.target.position.set(0, 0, 0);
    this.group.add(this.sun, this.sun.target);

    this.buildNeon();
    this.buildLamps();
    this.buildCars();
    this.stars = this.buildStars();
    this.moon = this.buildMoon();

    const WIND_N = 420;
    const arr = new Float32Array(WIND_N * 3);
    windGeoSet(arr, WIND_N);
    this.windGeo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    this.windMat = new THREE.PointsMaterial({
      color: 0xcfe6ff,
      size: 0.7,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const wind = new THREE.Points(this.windGeo, this.windMat);
    wind.frustumCulled = false;
    this.group.add(wind);
  }

  private buildNeon(): void {
    const texts: [string, string][] = [
      ['KYOTO', '#ff2fb3'], ['忍者', '#22e6ff'], ['ラーメン', '#ffb02e'],
      ['HOTEL', '#ff4040'], ['カラオケ', '#7cff4f'], ['京都', '#ff2fb3'],
      ['KAGINAWA', '#22e6ff'], ['ネオン', '#ffb02e'], ['宇治', '#7cff4f'],
    ];
    texts.forEach((e, i) => {
      const side = i % 2 ? 1 : -1;
      const along = -1000 + i * 250;
      const tex = neonTex(e[0], e[1]);
      const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, toneMapped: false });
      this.neonMats.push(mat);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(9, 18), mat);
      m.position.set(side * 24, 20, along);
      m.lookAt(m.position.x - side, 20, along);
      this.group.add(m);
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.3, 20, 6),
        new THREE.MeshStandardMaterial({ color: 0x14161c, roughness: 0.8 }),
      );
      pole.position.set(side * 24, 10, along);
      this.group.add(pole);
    });
  }

  private buildLamps(): void {
    const poleM = new THREE.MeshStandardMaterial({ color: 0x14161c, roughness: 0.8 });
    const headM = new THREE.MeshBasicMaterial({ color: 0xffd9a0, toneMapped: false });
    this.lampMats.push(headM);
    for (let a = -1080; a <= 1080; a += 120) {
      for (const s of [-1, 1]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 8, 6), poleM);
        pole.position.set(s * 12, 4, a);
        this.group.add(pole);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), headM);
        head.position.set(s * 12, 8.4, a);
        this.group.add(head);
      }
    }
  }

  private buildCars(): void {
    const cols = [0x18202c, 0x3a3f4a, 0x5a0f16, 0x0f3a5a, 0xdedede];
    const hl = new THREE.MeshBasicMaterial({ color: 0xf4fbff, toneMapped: false });
    const tl = new THREE.MeshBasicMaterial({ color: 0xff2a2a, toneMapped: false });
    for (let i = 0; i < 14; i++) {
      const g = new THREE.Group();
      const dir = i % 2 ? 1 : -1;
      const lane = dir * (5 + (i % 3) * 4.5);
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(2, 1.3, 4.6),
        new THREE.MeshStandardMaterial({ color: cols[i % cols.length], roughness: 0.4, metalness: 0.4 }),
      );
      body.position.y = 0.85;
      g.add(body);
      for (const s of [-0.6, 0.6]) {
        const h = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.3), hl);
        h.position.set(s, 0.85, 2.32);
        g.add(h);
        const t = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.3), tl);
        t.position.set(s, 0.85, -2.32);
        t.rotation.y = Math.PI;
        g.add(t);
      }
      g.position.set(lane, 0, -1080 + Math.random() * 2160);
      g.lookAt(g.position.x, 0, g.position.z + 1);
      this.group.add(g);
      this.cars.push({ g, speed: 9 + Math.random() * 9, lane, dir });
    }
  }

  private buildStars(): THREE.Points {
    const n = 800;
    const arr = new Float32Array(n * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      v.randomDirection().multiplyScalar(60000);
      arr[i * 3] = v.x;
      arr[i * 3 + 1] = Math.abs(v.y) * 0.9 + 2000;
      arr[i * 3 + 2] = v.z;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    const stars = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0xbcd0ff, size: 2.2, sizeAttenuation: false, fog: false }),
    );
    stars.frustumCulled = false;
    this.group.add(stars);
    return stars;
  }

  private buildMoon(): THREE.Mesh {
    const moon = new THREE.Mesh(
      new THREE.CircleGeometry(1600, 32),
      new THREE.MeshBasicMaterial({ color: 0xdfe8ff, fog: false }),
    );
    moon.position.set(28000, 24000, -26000);
    moon.lookAt(0, 0, 0);
    this.group.add(moon);
    return moon;
  }

  setGround(mat: THREE.MeshStandardMaterial): void {
    this.groundMat = mat;
  }

  get isNight(): boolean {
    return this.night;
  }

  setNight(night: boolean, scene: THREE.Scene): void {
    this.night = night;
    scene.background = new THREE.Color(night ? 0x060a18 : 0x9cc8e8);
    scene.fog = new THREE.Fog(night ? 0x060a18 : 0x9cc8e8, 600, 4600);
    this.hemi.intensity = night ? 0.55 : 1.25;
    this.sun.intensity = night ? 0.75 : 1.7;
    this.sun.color.set(night ? 0x8fb0ff : 0xffffff);
    this.stars.visible = night;
    this.moon.visible = night;
    for (const m of this.neonMats) m.color.setScalar(night ? 1 : 0.25);
    for (const m of this.lampMats) m.color.set(night ? 0xffd9a0 : 0x8899aa);
    if (this.groundMat) this.groundMat.color.set(night ? 0x14171e : 0x2f3336);
  }

  toggle(scene: THREE.Scene): boolean {
    this.setNight(!this.night, scene);
    return this.night;
  }

  private windTmp = new THREE.Vector3();

  updateWind(dt: number, playerPos: THREE.Vector3, velocity: THREE.Vector3, fwd: THREE.Vector3, active: boolean): void {
    const wm = this.windMat;
    if (!active) {
      wm.opacity = Math.max(0, wm.opacity - dt * 2);
      return;
    }
    wm.opacity = Math.min(0.75, (velocity.length() - 8) / 55);
    const arr = this.windGeo.attributes.position.array as Float32Array;
    const n = arr.length / 3;
    this.windTmp.copy(velocity).multiplyScalar(dt * 0.85);
    for (let i = 0; i < n; i++) {
      const j = i * 3;
      arr[j] -= this.windTmp.x;
      arr[j + 1] -= this.windTmp.y;
      arr[j + 2] -= this.windTmp.z;
      const dx = arr[j] - playerPos.x;
      const dy = arr[j + 1] - playerPos.y;
      const dz = arr[j + 2] - playerPos.z;
      if (dx * dx + dy * dy + dz * dz > 46 * 46) {
        const r = 14 + Math.random() * 26;
        arr[j] = playerPos.x + fwd.x * r + (Math.random() - 0.5) * 30;
        arr[j + 1] = playerPos.y + fwd.y * r + (Math.random() - 0.5) * 30;
        arr[j + 2] = playerPos.z + fwd.z * r + (Math.random() - 0.5) * 30;
      }
    }
    this.windGeo.attributes.position.needsUpdate = true;
  }

  update(dt: number): void {
    for (const c of this.cars) {
      c.g.position.z += c.dir * c.speed * dt;
      if (c.g.position.z > 1100) c.g.position.z = -1100;
      if (c.g.position.z < -1100) c.g.position.z = 1100;
    }
  }
}

function windGeoSet(arr: Float32Array, n: number): void {
  for (let i = 0; i < n; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 90;
    arr[i * 3 + 1] = 130 + (Math.random() - 0.5) * 90;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 90;
  }
}

function neonTex(text: string, color: string): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 512;
  const x = c.getContext('2d');
  if (!x) return new THREE.CanvasTexture(c);
  x.fillStyle = '#07070f';
  x.fillRect(0, 0, 256, 512);
  x.strokeStyle = color;
  x.lineWidth = 6;
  x.shadowColor = color;
  x.shadowBlur = 25;
  x.strokeRect(14, 14, 228, 484);
  x.fillStyle = '#fff';
  x.font = 'bold 92px "Hiragino Sans", "Yu Gothic", sans-serif';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  const chs = [...text];
  chs.forEach((ch, i) => x.fillText(ch, 128, chs.length > 1 ? 70 + 380 * i / (chs.length - 1) : 256));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
