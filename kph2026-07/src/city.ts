import * as THREE from 'three';
import { TilesRenderer } from '3d-tiles-renderer';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PLATEAU_TILESETS } from './config';
import type { LocalFrame } from './geo';

export interface CityStatus {
  plateauBuildings: number;
  tilesetsLive: number;
  usingFallback: boolean;
}

export class City {
  readonly group = new THREE.Group();
  readonly tilesGroups: THREE.Group[] = [];
  private renderers: TilesRenderer[] = [];
  private fallback = new THREE.Group();
  private facadeMats: THREE.MeshStandardMaterial[] = [];
  private probeFailed = new Set<string>();
  private liveTilesets = new Set<string>();
  private buildingsLoaded = 0;
  private fallbackHidden = false;
  private probe: Promise<void> = Promise.resolve();
  private statusCb: (s: CityStatus) => void;

  constructor(
    private frame: LocalFrame,
    private camera: THREE.PerspectiveCamera,
    private renderer: THREE.WebGLRenderer,
    statusCb: (s: CityStatus) => void,
    private scene: THREE.Scene,
  ) {
    this.statusCb = statusCb;
    this.group.add(this.fallback);
    this.buildGround();
    this.buildFallbackCity();
    this.probe = this.probeTilesets();
  }

  async settle(): Promise<void> {
    await this.probe;
  }

  private emit(): void {
    this.statusCb({
      plateauBuildings: this.buildingsLoaded,
      tilesetsLive: this.liveTilesets.size,
      usingFallback: !this.fallbackHidden,
    });
  }

  private buildGround(): void {
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(5200, 48),
      new THREE.MeshStandardMaterial({ color: 0x23262c, roughness: 0.95, metalness: 0 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    this.group.add(ground);
  }

  private facadeMaterial(tint: number): THREE.MeshStandardMaterial {
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 256;
    const x = c.getContext('2d');
    if (!x) return new THREE.MeshStandardMaterial({ color: 0x22262e });
    x.fillStyle = '#22262e';
    x.fillRect(0, 0, 128, 256);
    for (let iy = 0; iy < 15; iy++) {
      for (let ix = 0; ix < 6; ix++) {
        const lit = Math.random() < 0.4;
        x.fillStyle = lit ? (Math.random() < 0.7 ? '#ffd27a' : '#bfe3ff') : '#12151b';
        x.fillRect(6 + ix * 20, 10 + iy * 16, 12, 9);
      }
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      emissiveMap: tex,
      emissive: 0xffc98a,
      emissiveIntensity: 0.55,
      roughness: 0.85,
      metalness: 0.05,
    });
    if (tint !== 0xffffff) {
      mat.color.setHex(tint);
    }
    this.facadeMats.push(mat);
    return mat;
  }

  private addBox(w: number, h: number, d: number, x: number, z: number, tint: number): void {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.facadeMaterial(tint));
    m.position.set(x, h / 2, z);
    this.fallback.add(m);
  }

  private buildFallbackCity(): void {
    let seed = 7;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    const tints = [0xffffff, 0xf2ede4, 0xe8e2d8, 0xdfe3ea, 0xf0d9c8];
    for (let gz = -11; gz <= 11; gz++) {
      for (let gx = -6; gx <= 6; gx++) {
        const bx = gx * 92 + (rnd() - 0.5) * 12;
        const bz = gz * 96 + (rnd() - 0.5) * 12;
        const n = 1 + Math.floor(rnd() * 2);
        for (let i = 0; i < n; i++) {
          const w = 18 + rnd() * 26;
          const d = 18 + rnd() * 26;
          const corridorBoost = 1 - Math.min(1, Math.abs(bx) / 600);
          const northBoost = 1 - Math.min(1, Math.max(0, -bz) / 1200);
          let h = 14 + rnd() * 46 + corridorBoost * 16 + northBoost * 26;
          if (rnd() < 0.07) h *= 1.9;
          this.addBox(w, h, d, bx + (i - 0.5) * (w + 14), bz + (i % 2) * 8, tints[Math.floor(rnd() * tints.length)]);
        }
      }
    }
    this.buildKyotoStationTower();
    this.emit();
  }

  private buildKyotoStationTower(): void {
    const p = this.frame.geo(34.9858, 135.7588, 0);
    const towerH = 132;
    const mat = new THREE.MeshStandardMaterial({ color: 0x3a3f46, roughness: 0.6, metalness: 0.25 });
    const tower = new THREE.Mesh(new THREE.BoxGeometry(58, towerH, 34), mat);
    tower.position.set(p.x, towerH / 2, p.z);
    this.fallback.add(tower);
    const crown = new THREE.Mesh(new THREE.BoxGeometry(34, 26, 26), mat);
    crown.position.set(p.x, towerH + 13, p.z);
    this.fallback.add(crown);
    const podium = new THREE.Mesh(new THREE.BoxGeometry(150, 26, 90), new THREE.MeshStandardMaterial({ color: 0x555b63, roughness: 0.7 }));
    podium.position.set(p.x, 13, p.z + 30);
    this.fallback.add(podium);
    const arch = new THREE.Mesh(
      new THREE.BoxGeometry(120, 30, 14),
      new THREE.MeshStandardMaterial({ color: 0x6a7078, roughness: 0.7 }),
    );
    arch.position.set(p.x, 15, p.z - 55);
    arch.rotation.x = 0.35;
    this.fallback.add(arch);
  }

  private async probeTilesets(): Promise<void> {
    await Promise.all(
      PLATEAU_TILESETS.map(async (url) => {
        try {
          const ctrl = new AbortController();
          const t = window.setTimeout(() => ctrl.abort(), 9000);
          const res = await fetch(url, { signal: ctrl.signal });
          window.clearTimeout(t);
          if (!res.ok) throw new Error(String(res.status));
          this.liveTilesets.add(url);
        } catch {
          this.probeFailed.add(url);
        }
        this.emit();
      }),
    );
    if (this.liveTilesets.size === 0) {
      this.emit();
    }
  }

  createTiles(): void {
    const draco = new DRACOLoader();
    draco.setDecoderPath('draco/');
    const gltf = new GLTFLoader();
    gltf.setDRACOLoader(draco);

    for (const url of PLATEAU_TILESETS) {
      if (this.probeFailed.has(url)) continue;
      const t = new TilesRenderer(url);
      const manager = (t as unknown as { manager: THREE.LoadingManager }).manager;
      manager.addHandler(/\.gltf$/, gltf);
      t.setCamera(this.camera);
      t.setResolutionFromRenderer(this.camera, this.renderer);
      this.scene.add(t.group);
      this.tilesGroups.push(t.group);
      this.renderers.push(t);
      t.addEventListener('load-tile-set', () => {
        this.liveTilesets.add(url);
        this.emit();
      });
      t.addEventListener('load-model', () => {
        this.buildingsLoaded++;
        if (!this.fallbackHidden) {
          this.fallbackHidden = true;
          this.fallback.visible = false;
        }
        if (this.buildingsLoaded % 25 === 0) this.emit();
      });
    }
  }

  get probeFinished(): boolean {
    return this.liveTilesets.size + this.probeFailed.size >= PLATEAU_TILESETS.length;
  }

  get probeOk(): boolean {
    return this.liveTilesets.size > 0;
  }

  get firstContentLoaded(): boolean {
    return this.buildingsLoaded > 0;
  }

  get isFallbackActive(): boolean {
    return !this.fallbackHidden;
  }

  update(dt: number): void {
    for (const t of this.renderers) {
      t.setCamera(this.camera);
      t.setResolutionFromRenderer(this.camera, this.renderer);
      this.camera.updateMatrixWorld();
      t.update();
    }
    void dt;
  }

  raycasterTargets(): THREE.Object3D[] {
    const targets: THREE.Object3D[] = [...this.tilesGroups];
    if (!this.fallbackHidden) targets.push(this.fallback);
    return targets;
  }

  dispose(): void {
    for (const t of this.renderers) t.dispose();
    for (const m of this.facadeMats) m.map?.dispose();
  }
}
