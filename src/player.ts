import * as THREE from 'three';
import { PHYS, CAM, SPAWN } from './config';
import type { Ninja } from './ninja';
import type { LocalFrame } from './geo';

export interface PlayerEvents {
  onFall(): void;
  onRestart(): void;
  onToggleDayNight(): void;
  onDash(x: number, y: number, z: number): void;
  onAttach(x: number, y: number, z: number): void;
}

export class Player {
  pos = new THREE.Vector3();
  vel = new THREE.Vector3();
  attached = false;
  anchor = new THREE.Vector3();
  ropeLen = 0;
  yaw = 0;
  pitch = -0.05;

  private frame: LocalFrame;
  private env: THREE.Object3D;
  private ninja: Ninja;
  private camera: THREE.PerspectiveCamera;
  private targetsProvider: () => THREE.Object3D[];
  private ev: PlayerEvents;
  private ray = new THREE.Raycaster();
  private held = false;
  private holdTimer = 0;
  private autoTimer = 0;
  private dashCd = 0;
  private lastCheckpoint = 0;
  private rope: THREE.Line;
  private claw: THREE.Group;
  private impacts: { mesh: THREE.Mesh; life: number }[] = [];
  private fwd = new THREE.Vector3();
  private right = new THREE.Vector3();
  private tmp = new THREE.Vector3();
  private tmp2 = new THREE.Vector3();
  private keys: Record<string, boolean> = {};
  private playing = false;
  private reticleEl: HTMLElement | null = null;
  private respawnPoint = new THREE.Vector3();

  constructor(
    frame: LocalFrame,
    env: THREE.Object3D,
    ninja: Ninja,
    camera: THREE.PerspectiveCamera,
    targetsProvider: () => THREE.Object3D[],
    ev: PlayerEvents,
  ) {
    this.frame = frame;
    this.env = env;
    this.ninja = ninja;
    this.camera = camera;
    this.targetsProvider = targetsProvider;
    this.ev = ev;
    this.respawnPoint.copy(frame.geo(SPAWN.lat, SPAWN.lon, SPAWN.h));

    const ropeGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    this.rope = new THREE.Line(ropeGeo, new THREE.LineBasicMaterial({ color: 0xf5f0e6 }));
    this.rope.visible = false;
    this.rope.frustumCulled = false;
    env.add(this.rope);

    this.claw = buildClaw();
    this.claw.visible = false;
    env.add(this.claw);
    this.bindInput();
  }

  get speed(): number {
    return this.vel.length();
  }

  get dashRatio(): number {
    return this.dashCd / PHYS.dashCooldown;
  }

  get isAttached(): boolean {
    return this.attached;
  }

  objects(): THREE.Object3D[] {
    return [this.rope, this.claw, ...this.impacts.map((i) => i.mesh)];
  }

  reset(): void {
    this.pos.copy(this.respawnPoint);
    this.vel.set(0, 0, 30);
    this.attached = false;
    this.dashCd = 0;
    this.rope.visible = false;
    this.claw.visible = false;
    this.ninja.pose('cruise');
    this.snapCamera();
  }

  private snapCamera(): void {
    this.viewDir(this.fwd);
    this.camera.position.copy(this.pos).addScaledVector(this.fwd, -9).addScaledVector(new THREE.Vector3(0, 1, 0), 4);
    this.camera.lookAt(this.pos);
  }

  private bindInput(): void {
    const canvas = this.camera.userData.canvas as HTMLCanvasElement | undefined;

    addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space') {
        e.preventDefault();
        if (!e.repeat && this.playing) {
          this.held = true;
          this.holdTimer = 0;
          this.shootAtCenter();
        }
      }
      if (e.code === 'KeyR' && this.playing) this.ev.onRestart();
      if (e.code === 'KeyN' && this.playing) this.ev.onToggleDayNight();
      if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && this.playing) this.tryDash();
    });
    addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'Space') {
        this.held = false;
        this.detach();
      }
    });
    addEventListener('contextmenu', (e) => e.preventDefault());

    addEventListener('pointerdown', (e) => {
      if (!this.playing) return;
      const el = e.target as HTMLElement;
      if (el.closest('.ui-panel')) return;
      if (e.button === 2) {
        this.detach();
      } else if (e.button === 0) {
        this.held = true;
        this.holdTimer = 0;
        this.shootAtCenter();
      }
    });
    addEventListener('pointerup', (e) => {
      if (e.button === 0) {
        this.held = false;
        this.detach();
      }
    });

    addEventListener('mousemove', (e) => {
      if (!document.pointerLockElement) return;
      this.yaw -= e.movementX * 0.0022;
      this.pitch -= e.movementY * 0.0022;
      this.pitch = Math.max(-1.25, Math.min(1.25, this.pitch));
    });

    let lastTX = 0;
    let lastTY = 0;
    addEventListener('touchstart', (e) => {
      if (!this.playing) return;
      this.held = true;
      this.holdTimer = 0;
      this.shootAtCenter();
      lastTX = e.touches[0].clientX;
      lastTY = e.touches[0].clientY;
    }, { passive: true });
    addEventListener('touchmove', (e) => {
      if (!this.playing) return;
      const t = e.touches[0];
      this.yaw -= (t.clientX - lastTX) * 0.005;
      this.pitch -= (t.clientY - lastTY) * 0.004;
      this.pitch = Math.max(-1.25, Math.min(1.25, this.pitch));
      lastTX = t.clientX;
      lastTY = t.clientY;
    }, { passive: true });
    addEventListener('touchend', () => {
      this.held = false;
      this.detach();
    });

    if (canvas) {
      canvas.addEventListener('click', () => {
        if (this.playing && !document.pointerLockElement) {
          void canvas.requestPointerLock?.();
        }
      });
    }
    this.reticleEl = document.getElementById('reticle');
  }

  setPlaying(p: boolean): void {
    this.playing = p;
    if (!p) {
      this.held = false;
      this.keys = {};
    }
  }

  viewDir(out: THREE.Vector3): THREE.Vector3 {
    const cp = Math.cos(this.pitch);
    return out.set(Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp).normalize();
  }

  private shootAtCenter(): void {
    this.viewDir(this.tmp);
    this.ray.set(this.camera.position, this.tmp);
    this.ray.far = PHYS.maxRope;
    const hits = this.ray.intersectObjects(this.targetsProvider(), true);
    for (const h of hits) {
      const upDist = h.point.y - this.pos.y;
      if (upDist > 2.5) {
        this.tryAttach(h.point, h.distance);
        return;
      }
    }
  }

  private autoShoot(): void {
    const candidates = [0.35, -0.35, 0.75, -0.75, 1.1, -1.1];
    this.viewDir(this.tmp);
    for (const yawOff of candidates) {
      const yaw = this.yaw + yawOff;
      const pitch = Math.max(this.pitch, 0.12);
      const cp = Math.cos(pitch);
      this.tmp2.set(Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp).normalize();
      this.ray.set(this.pos, this.tmp2);
      this.ray.far = PHYS.maxRope;
      const hits = this.ray.intersectObjects(this.targetsProvider(), true);
      for (const h of hits) {
        if (h.point.y - this.pos.y > 6 && h.distance > 30) {
          this.tryAttach(h.point, h.distance);
          return;
        }
      }
    }
  }

  private tryAttach(point: THREE.Vector3, distance: number): void {
    if (distance > PHYS.maxRope) return;
    this.attached = true;
    this.anchor.copy(point);
    this.ropeLen = Math.min(distance, PHYS.maxRope);
    this.ev.onAttach(point.x, point.y, point.z);
    this.claw.visible = true;
    this.rope.visible = true;
  }

  detach(boost = true): void {
    if (!this.attached) return;
    this.attached = false;
    this.claw.visible = false;
    this.rope.visible = false;
    if (boost) {
      this.vel.multiplyScalar(PHYS.releaseBoost);
      this.vel.y += PHYS.releaseUp;
    }
  }

  tryDash(): void {
    if (!this.playing || this.dashCd > 0) return;
    this.dashCd = PHYS.dashCooldown;
    this.viewDir(this.tmp);
    this.vel.addScaledVector(this.tmp, PHYS.dashSpeed);
    this.ev.onDash(this.pos.x, this.pos.y, this.pos.z);
  }

  setCheckpoint(vec: THREE.Vector3): void {
    this.respawnPoint.copy(vec);
    this.respawnPoint.y += 8;
    this.lastCheckpoint = 1;
  }

  respawnAtCheckpoint(): void {
    this.pos.copy(this.respawnPoint);
    this.vel.set(0, 0, 12);
    this.attached = false;
    this.rope.visible = false;
    this.claw.visible = false;
  }

  update(dt: number): void {
    this.dashCd = Math.max(0, this.dashCd - dt);
    const fwd = this.viewDir(this.fwd);
    this.right.crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();

    this.vel.y -= PHYS.gravity * dt;
    this.vel.multiplyScalar(Math.max(0, 1 - PHYS.linearDamping * dt));

    if (this.keys['KeyA']) this.vel.addScaledVector(this.right, -PHYS.strafeAccel * dt);
    if (this.keys['KeyD']) this.vel.addScaledVector(this.right, PHYS.strafeAccel * dt);
    if (!this.attached) {
      if (this.keys['KeyW']) this.vel.addScaledVector(fwd, 14 * dt);
      if (fwd.y < -0.2) this.vel.addScaledVector(fwd, PHYS.diveBoost * dt * (-fwd.y));
    } else {
      if (this.keys['KeyW']) this.ropeLen = Math.max(PHYS.minRope, this.ropeLen - PHYS.ropeRangeSpeed * dt);
      if (this.keys['KeyS']) this.ropeLen = Math.min(PHYS.maxRope, this.ropeLen + PHYS.ropeRangeSpeed * dt);
    }

    this.pos.addScaledVector(this.vel, dt);

    if (this.held) {
      if (this.attached) {
        this.ropeLen = Math.max(PHYS.minRope, this.ropeLen - PHYS.reelSpeed * dt);
      } else {
        this.holdTimer -= dt;
        if (this.holdTimer <= 0) {
          this.holdTimer = 0.18;
          this.shootAtCenter();
        }
      }
    }

    this.autoTimer -= dt;
    if (!this.attached && !this.held && this.playing && this.vel.y < 2 && this.autoTimer <= 0) {
      this.autoTimer = 0.45;
      this.autoShoot();
    }

    if (this.attached) {
      this.tmp.copy(this.pos).sub(this.anchor);
      const dist = this.tmp.length();
      if (dist > this.ropeLen) {
        this.tmp.divideScalar(dist || 1);
        this.pos.copy(this.anchor).addScaledVector(this.tmp, this.ropeLen);
        const vOut = this.vel.dot(this.tmp);
        if (vOut > 0) this.vel.addScaledVector(this.tmp, -vOut);
        this.vel.addScaledVector(fwd, PHYS.pumpAccel * dt);
      }
      if (dist > PHYS.maxRope * 1.25) this.detach(false);
    }

    if (this.pos.y < PHYS.groundY) {
      this.pos.y = PHYS.groundY;
      if (this.vel.y < 0) this.vel.y = 0;
      this.vel.multiplyScalar(0.94);
      if (this.playing && this.vel.length() < 12) {
        this.ev.onFall();
        this.respawnAtCheckpoint();
      }
    }
    if (Math.abs(this.pos.x) > 4000 || Math.abs(this.pos.z) > 4000) {
      this.ev.onFall();
      this.respawnAtCheckpoint();
    }

    this.ninja.group.position.copy(this.pos);
    if (this.speed > 2) {
      this.tmp.copy(this.pos).add(this.vel);
      this.ninja.group.lookAt(this.tmp);
    }
    this.ninja.pose(this.attached ? 'swing' : this.vel.y < -18 ? 'dive' : this.playing ? 'cruise' : 'fall');
    this.ninja.updateScarf(dt, this.vel);

    if (this.attached) {
      this.tmp.copy(this.pos).add(this.tmp2.set(0, 1.15, 0));
      const arr = (this.rope.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array;
      arr[0] = this.tmp.x; arr[1] = this.tmp.y; arr[2] = this.tmp.z;
      arr[3] = this.anchor.x; arr[4] = this.anchor.y; arr[5] = this.anchor.z;
      (this.rope.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
      this.claw.position.copy(this.anchor);
    }

    for (let i = this.impacts.length - 1; i >= 0; i--) {
      const im = this.impacts[i];
      im.life -= dt;
      const s = 1 + (1 - im.life) * 9;
      im.mesh.scale.setScalar(s);
      (im.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, im.life * 0.8);
      if (im.life <= 0) {
        this.groupRemove(im.mesh);
        this.impacts.splice(i, 1);
      }
    }

    const sp = this.speed;
    this.tmp.copy(this.pos).addScaledVector(fwd, -CAM.back).add(this.tmp2.set(0, CAM.height, 0));
    this.camera.position.lerp(this.tmp, 1 - Math.pow(0.0009, dt));
    this.tmp2.copy(this.pos).addScaledVector(fwd, CAM.lookAhead).addScaledVector(this.vel, 0.18);
    if (sp > 30) {
      const shk = Math.min(1, (sp - 30) / 45) * 0.5;
      this.tmp2.x += (Math.random() - 0.5) * shk;
      this.tmp2.y += (Math.random() - 0.5) * shk;
      this.tmp2.z += (Math.random() - 0.5) * shk;
    }
    this.camera.lookAt(this.tmp2);
    const wantFov = CAM.fovBase + Math.min(sp, 80) * (CAM.fovMax - CAM.fovBase) / 80;
    this.camera.fov += (wantFov - this.camera.fov) * Math.min(1, dt * CAM.fovLerp);
    this.camera.updateProjectionMatrix();

    if (this.reticleEl) {
      this.reticleEl.classList.toggle('ready', this.canAttachAhead());
    }
  }

  private groupRemove(mesh: THREE.Mesh): void {
    mesh.parent?.remove(mesh);
    mesh.geometry.dispose();
    (mesh.material as THREE.Material).dispose();
  }

  canAttachAhead(): boolean {
    this.viewDir(this.tmp);
    this.ray.set(this.camera.position, this.tmp);
    this.ray.far = PHYS.maxRope;
    const hits = this.ray.intersectObjects(this.targetsProvider(), true);
    for (const h of hits) {
      if (h.point.y - this.pos.y > 2.5) return true;
    }
    return false;
  }

  spawnImpact(x: number, y: number, z: number): void {
    const m = new THREE.Mesh(
      new THREE.RingGeometry(0.6, 1.2, 24),
      new THREE.MeshBasicMaterial({
        color: 0xffe9a8,
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    m.position.set(x, y, z);
    this.env.add(m);
    this.impacts.push({ mesh: m, life: 0.5 });
  }
}

function buildClaw(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a2d33, metalness: 0.7, roughness: 0.35 });
  const center = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), mat);
  g.add(center);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const hook = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.1, 6), mat);
    hook.position.set(Math.cos(a) * 0.42, 0.55, Math.sin(a) * 0.42);
    hook.rotation.set(Math.cos(a) * 0.7, 0, -Math.sin(a) * 0.7);
    g.add(hook);
  }
  return g;
}
