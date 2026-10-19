export class GameAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private windGain: GainNode | null = null;
  private windFilter: BiquadFilterNode | null = null;
  private musicWet: GainNode | null = null;
  private musicOn = false;
  private nextNote = 0;
  private step = 0;

  private scale = [293.66, 349.23, 392.0, 440.0, 523.25, 587.33, 698.46, 783.99];

  init(): void {
    if (this.ctx) {
      void this.ctx.resume();
      return;
    }
    const AC: typeof AudioContext =
      window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AC();
    this.ctx = ctx;
    const master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(ctx.destination);
    this.master = master;

    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    const windSrc = ctx.createBufferSource();
    windSrc.buffer = noiseBuf;
    windSrc.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 420;
    const windGain = ctx.createGain();
    windGain.gain.value = 0;
    windSrc.connect(windFilter).connect(windGain).connect(master);
    windSrc.start();
    this.windFilter = windFilter;
    this.windGain = windGain;

    const delay = ctx.createDelay(1);
    delay.delayTime.value = 0.28;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.32;
    const wet = ctx.createGain();
    wet.gain.value = 0.5;
    delay.connect(feedback).connect(delay);
    delay.connect(wet).connect(master);
    this.musicWet = wet;
  }

  setSpeed(sp: number): void {
    if (!this.ctx || !this.windGain || !this.windFilter) return;
    const t = this.ctx.currentTime;
    const target = clamp01((sp - 8) / 62) * 0.4;
    this.windGain.gain.setTargetAtTime(target, t, 0.15);
    this.windFilter.frequency.setTargetAtTime(320 + Math.min(sp, 90) * 16, t, 0.2);
  }

  startMusic(): void {
    if (!this.ctx || this.musicOn) return;
    this.musicOn = true;
    this.nextNote = this.ctx.currentTime + 0.1;
    this.step = 0;
    const tick = () => {
      if (!this.ctx || !this.musicOn) return;
      const now = this.ctx.currentTime;
      while (this.nextNote < now + 0.25) {
        this.scheduleStep(this.nextNote, this.step);
        this.nextNote += 0.25;
        this.step = (this.step + 1) % 32;
      }
      window.setTimeout(tick, 90);
    };
    tick();
  }

  stopMusic(): void {
    this.musicOn = false;
  }

  private scheduleStep(time: number, step: number): void {
    if (step % 4 === 0) this.drum(time);
    if (step % 2 === 0 && Math.random() < 0.72) {
      this.pluck(this.randNote(), time, 0.5);
    }
    if (step % 8 === 4 && Math.random() < 0.6) {
      this.pluck(this.randNote(), time + 0.12, 0.3);
    }
  }

  private randNote(): number {
    return this.scale[Math.floor(Math.random() * this.scale.length)];
  }

  private drum(time: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(52, time + 0.16);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.5, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.28);
    osc.connect(g).connect(this.master);
    osc.start(time);
    osc.stop(time + 0.3);
  }

  private pluck(freq: number, time: number, vol: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.musicWet || !this.master) return;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol * 0.4, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.9);
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    osc.connect(g);
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = freq * 2.01;
    osc2.connect(g);
    g.connect(this.musicWet);
    g.connect(this.master);
    osc.start(time);
    osc2.start(time);
    osc.stop(time + 1);
    osc2.stop(time + 1);
  }

  attach(): void {
    this.noise(0.14, 'bandpass', 900, 300, 0.5);
    this.blip(190, 0.12, 'sine', 0.35, 90);
  }

  whoosh(): void {
    this.noise(0.4, 'bandpass', 380, 2400, 0.42);
  }

  coin(): void {
    this.blip(1046.5, 0.09, 'sine', 0.3);
    window.setTimeout(() => this.blip(1568, 0.16, 'sine', 0.26), 70);
  }

  checkpoint(): void {
    this.blip(587.33, 0.2, 'triangle', 0.3);
    window.setTimeout(() => this.blip(880, 0.3, 'triangle', 0.28), 110);
    window.setTimeout(() => this.blip(1174.66, 0.4, 'triangle', 0.24), 220);
  }

  goal(): void {
    const notes = [440, 523.25, 659.25, 880, 1046.5];
    notes.forEach((n, i) => window.setTimeout(() => this.blip(n, 0.35, 'triangle', 0.3), i * 110));
    if (this.ctx) this.drum(this.ctx.currentTime + 0.45);
  }

  fall(): void {
    this.noise(0.4, 'lowpass', 900, 150, 0.5);
    this.blip(320, 0.4, 'sawtooth', 0.22, 70);
  }

  dash(): void {
    this.noise(0.3, 'bandpass', 500, 1800, 0.5);
    this.blip(660, 0.25, 'square', 0.1, 990);
  }

  private blip(freq: number, dur: number, type: OscillatorType, vol: number, slideTo?: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  private noise(dur: number, type: BiquadFilterType, f0: number, f1: number, vol: number): void {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const t = ctx.currentTime;
    const len = Math.ceil(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(40, f1), t + dur);
    const g = ctx.createGain();
    g.gain.value = vol;
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
  }
}

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
