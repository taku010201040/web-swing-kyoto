export class GameHud {
  private el = {
    loading: document.getElementById('ui-loading'),
    loadBar: document.getElementById('load-fill'),
    loadText: document.getElementById('load-text'),
    title: document.getElementById('ui-title'),
    startBtn: document.getElementById('btn-start'),
    speed: document.getElementById('hud-speed'),
    alt: document.getElementById('hud-alt'),
    time: document.getElementById('hud-time'),
    coins: document.getElementById('hud-coins'),
    combo: document.getElementById('hud-combo'),
    best: document.getElementById('hud-best'),
    next: document.getElementById('hud-next'),
    nextDist: document.getElementById('hud-next-dist'),
    dash: document.getElementById('dash-cd'),
    banner: document.getElementById('banner'),
    result: document.getElementById('ui-result'),
    resultTime: document.getElementById('result-time'),
    resultScore: document.getElementById('result-score'),
    resultCoins: document.getElementById('result-coins'),
    resultRecord: document.getElementById('result-record'),
    retryBtn: document.getElementById('btn-retry'),
    plateau: document.getElementById('plateau-status'),
    hud: document.getElementById('hud'),
    speedFx: document.getElementById('speed-fx'),
    falls: document.getElementById('hud-falls'),
  };

  setLoading(pct: number, text: string): void {
    if (this.el.loadBar) this.el.loadBar.style.width = `${Math.round(pct * 100)}%`;
    if (this.el.loadText) this.el.loadText.textContent = text;
  }

  hideLoading(): void {
    this.el.loading?.classList.add('hidden');
  }

  showTitle(): void {
    this.el.title?.classList.remove('hidden');
  }

  hideTitle(): void {
    this.el.title?.classList.add('hidden');
  }

  showHud(): void {
    this.el.hud?.classList.remove('hidden');
  }

  setStatus(s: string): void {
    if (this.el.plateau) this.el.plateau.textContent = s;
  }

  setStats(s: { speed: number; alt: number; time: number; coins: number; total: number; combo: number; next: string; nextDist: number; falls: number; best: string; dashReady: number }): void {
    const { el } = this;
    if (el.speed) el.speed.textContent = String(Math.round(s.speed * 3.6));
    if (el.alt) el.alt.textContent = String(Math.max(0, Math.round(s.alt)));
    if (el.time) el.time.textContent = formatTime(s.time);
    if (el.coins) el.coins.textContent = `${s.coins} / ${s.total}`;
    if (el.combo) el.combo.textContent = s.combo > 0 ? `×${s.combo}` : '—';
    if (el.next) el.next.textContent = s.next;
    if (el.nextDist) el.nextDist.textContent = s.nextDist > 1000 ? `${(s.nextDist / 1000).toFixed(2)} km` : `${Math.round(s.nextDist)} m`;
    if (el.falls) el.falls.textContent = String(s.falls);
    if (el.best) el.best.textContent = s.best;
    if (el.speedFx) el.speedFx.style.opacity = String(clamp01((s.speed - 14) / 48) * 0.9);
    if (el.dash) {
      el.dash.style.width = `${Math.round(clamp01(s.dashReady) * 100)}%`;
    }
  }

  banner(text: string, cls = ''): void {
    if (!this.el.banner) return;
    this.el.banner.textContent = text;
    this.el.banner.className = `show ${cls}`;
    window.setTimeout(() => {
      if (this.el.banner) this.el.banner.className = 'hidden';
    }, 2200);
  }

  showResult(r: { time: number; score: number; coins: number; total: number; record: boolean; best: string }): void {
    if (this.el.resultTime) this.el.resultTime.textContent = formatTime(r.time);
    if (this.el.resultScore) this.el.resultScore.textContent = r.score.toLocaleString('ja-JP');
    if (this.el.resultCoins) this.el.resultCoins.textContent = `${r.coins} / ${r.total}`;
    if (this.el.resultRecord) {
      this.el.resultRecord.textContent = r.record ? `★ 自己ベスト更新! (旧 ${r.best})` : `ベスト: ${r.best}`;
      this.el.resultRecord.className = r.record ? 'record' : '';
    }
    this.el.result?.classList.remove('hidden');
  }

  hideResult(): void {
    this.el.result?.classList.add('hidden');
  }

  bindStart(cb: () => void): void {
    this.el.startBtn?.addEventListener('click', cb);
  }

  bindRetry(cb: () => void): void {
    this.el.retryBtn?.addEventListener('click', cb);
  }
}

function formatTime(t: number): string {
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
