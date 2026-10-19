import * as THREE from 'three';
import { COURSE } from './config';
import type { LocalFrame } from './geo';

interface Gate {
  index: number;
  center: THREE.Vector3;
  axis: THREE.Vector3;
  radius: number;
  label: string;
  goal: boolean;
  group: THREE.Group;
  glow: THREE.Mesh;
  labelSprite: THREE.Sprite;
  passed: boolean;
  prevSide: number;
}

interface Coin {
  mesh: THREE.Group;
  pos: THREE.Vector3;
  taken: boolean;
}

export class Course {
  readonly group = new THREE.Group();
  private gates: Gate[] = [];
  private coins: Coin[] = [];
  private frame: LocalFrame;

  constructor(frame: LocalFrame) {
    this.frame = frame;
    for (let i = 0; i < COURSE.length; i++) {
      const c = COURSE[i];
      const center = frame.geo(c.lat, c.lon, c.h);
      const next = COURSE[Math.min(i + 1, COURSE.length - 1)];
      const prev = COURSE[Math.max(i - 1, 0)];
      const dirNext = i === COURSE.length - 1 ? center.clone().sub(frame.geo(prev.lat, prev.lon, prev.h)).normalize()
        : frame.geo(next.lat, next.lon, next.h).sub(center).normalize();
      const axis = dirNext.clone().normalize();
      const radius = c.goal ? 26 : 16;
      const group = new THREE.Group();
      group.position.copy(center);
      group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);

      const pillarGeo = new THREE.CylinderGeometry(0.55, 0.7, 14, 10);
      const pillarMat = new THREE.MeshStandardMaterial({
        color: c.goal ? 0xb81f2d : 0xc22630,
        roughness: 0.5,
        emissive: 0x53060c,
        emissiveIntensity: 0.4,
      });
      const beamMat = new THREE.MeshStandardMaterial({ color: 0xd23a42, roughness: 0.5 });
      for (const s of [-1, 1]) {
        const p = new THREE.Mesh(pillarGeo, pillarMat);
        p.position.set(s * radius, 7, 0);
        group.add(p);
      }
      const beam = new THREE.Mesh(new THREE.BoxGeometry(radius * 2 + 2.4, 0.7, 1.2), beamMat);
      beam.position.y = 14.2;
      group.add(beam);
      const beam2 = new THREE.Mesh(new THREE.BoxGeometry(radius * 2 - 1, 0.5, 0.9), beamMat);
      beam2.position.y = 11.6;
      group.add(beam2);

      const glow = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.35, 10, 48),
        new THREE.MeshBasicMaterial({
          color: c.goal ? 0xffd24a : 0x53f2ff,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      glow.position.y = radius * 0.55;
      group.add(glow);

      const labelSprite = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: labelTexture(c.label), transparent: true, depthWrite: false }),
      );
      labelSprite.scale.set(30, 15, 1);
      labelSprite.position.y = radius + 9;
      group.add(labelSprite);

      this.group.add(group);
      this.gates.push({
        index: i,
        center: center.clone(),
        axis,
        radius,
        label: c.label,
        goal: !!c.goal,
        group,
        glow,
        labelSprite,
        passed: false,
        prevSide: 1,
      });
    }
    this.buildCoins();
  }

  private buildCoins(): void {
    const gold = new THREE.MeshStandardMaterial({
      color: 0xffc93c,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x6b4a00,
      emissiveIntensity: 0.6,
    });
    for (let i = 0; i < COURSE.length - 1; i++) {
      const a = this.frame.geo(COURSE[i].lat, COURSE[i].lon, COURSE[i].h);
      const b = this.frame.geo(COURSE[i + 1].lat, COURSE[i + 1].lon, COURSE[i + 1].h);
      const n = 12;
      for (let j = 1; j <= n; j++) {
        const t = j / (n + 1);
        const p = a.clone().lerp(b, t);
        const arc = Math.sin(t * Math.PI);
        p.y += 18 + arc * 42 + (j % 3) * 7;
        p.x += Math.sin(t * Math.PI * 2) * 26 * (j % 2 ? 1 : -1);
        const g = new THREE.Group();
        const coin = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.32, 12), gold);
        coin.rotation.x = Math.PI / 2;
        g.add(coin);
        const spark = new THREE.Sprite(
          new THREE.SpriteMaterial({
            color: 0xffe9a0,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }),
        );
        spark.scale.set(6, 6, 1);
        g.add(spark);
        g.position.copy(p);
        this.group.add(g);
        this.coins.push({ mesh: g, pos: p.clone(), taken: false });
      }
    }
  }

  get gateCount(): number {
    return this.gates.length;
  }

  get coinTotal(): number {
    return this.coins.length;
  }

  gate(i: number): Gate {
    return this.gates[i];
  }

  nextGateIndex(fromPlayer: THREE.Vector3, current: number): number {
    let best = current;
    let bestD = Infinity;
    for (const g of this.gates) {
      if (g.passed && !g.goal) continue;
      const d = g.center.distanceTo(fromPlayer);
      if (d < bestD) {
        bestD = d;
        best = g.index;
      }
    }
    return best;
  }

  update(dt: number, elapsed: number, playerPos: THREE.Vector3): { hitGate: number | null; coinCount: number } {
    let hitGate: number | null = null;
    let coins = 0;
    const spin = dt * 6;
    for (const c of this.coins) {
      if (c.taken) continue;
      c.mesh.rotation.y += spin;
      c.mesh.position.y = c.pos.y + Math.sin(elapsed * 2.4 + c.pos.x * 0.05) * 1.2;
      if (c.mesh.position.distanceTo(playerPos) < 6.5) {
        c.taken = true;
        c.mesh.visible = false;
        coins++;
      }
    }
    for (const g of this.gates) {
      const pulse = g.passed ? 0.35 : 0.75 + Math.sin(elapsed * 4) * 0.3;
      (g.glow.material as THREE.MeshBasicMaterial).opacity = pulse;
      if (g.passed) continue;
      const d = playerPos.clone().sub(g.center);
      const along = d.dot(g.axis);
      const side = Math.sign(along) || 1;
      const lateral = Math.hypot(
        d.x - g.axis.x * along,
        d.y - g.axis.y * along,
        d.z - g.axis.z * along,
      );
      if (lateral < g.radius * 0.92 && side !== g.prevSide) {
        g.passed = true;
        hitGate = g.index;
      }
      g.prevSide = side;
    }
    return { hitGate, coinCount: coins };
  }

  reset(): void {
    for (const g of this.gates) {
      g.passed = false;
      g.prevSide = 1;
    }
    for (const c of this.coins) {
      c.taken = false;
      c.mesh.visible = true;
    }
  }
}

function labelTexture(text: string): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const x = c.getContext('2d');
  if (!x) return new THREE.CanvasTexture(c);
  x.clearRect(0, 0, 512, 256);
  x.fillStyle = 'rgba(8,10,18,0.72)';
  if (typeof x.roundRect === 'function') {
    x.beginPath();
    x.roundRect(10, 60, 492, 140, 70);
    x.fill();
  } else {
    x.fillRect(10, 60, 492, 140);
  }
  x.strokeStyle = '#ffd24a';
  x.lineWidth = 5;
  x.stroke();
  x.fillStyle = '#fff';
  x.font = 'bold 84px "Hiragino Sans", "Yu Gothic", sans-serif';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText(text, 256, 132);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
