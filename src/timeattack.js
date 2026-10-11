// タイムアタックの記録まわり：自己ベスト・区間タイム（ブラウザに保存）と、合言葉チーム（server.js の API）。
const LS = { name: 'kn_name', pass: 'kn_pass', best: 'kn_best', splits: 'kn_splits' };
const get = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const set = (k, v) => { try { localStorage.setItem(k, v); } catch { /* 保存できない環境では記録なしで続行 */ } };

export const TA = {
  online: false,            // server.js で動いているか（python の簡易サーバーや file:// ではチーム機能なし）
  name: get(LS.name) || '', pass: get(LS.pass) || '',
  team: null, ranking: [],
  best: Number(get(LS.best)) || null,
  bestSplits: JSON.parse(get(LS.splits) || 'null'),
};

export function fmt(t) {
  if (t == null) return '--:--.-';
  const m = Math.floor(t / 60);
  return `${m}:${(t % 60).toFixed(1).padStart(4, '0')}`;
}
export const fmtDiff = (d) => (d >= 0 ? '+' : '−') + Math.abs(d).toFixed(1);

async function call(name, body) {
  const r = await fetch('/api/' + name, { method: body ? 'POST' : 'GET', headers: { 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const j = await r.json().catch(() => ({ error: 'サーバーの応答が読めません' }));
  if (!r.ok) throw new Error(j.error || 'サーバーエラー');
  return j;
}
export async function ping() {
  try { TA.online = !!(await call('ping')).ok; } catch { TA.online = false; }
  return TA.online;
}
export async function join(name, pass, teamName) {
  const r = await call('join', { name, pass, teamName });
  TA.name = name; TA.pass = pass; TA.team = r.team; TA.ranking = r.ranking;
  set(LS.name, name); set(LS.pass, pass);
  return r;
}
export function setSolo(name) { TA.name = name; TA.pass = ''; TA.team = null; set(LS.name, name); set(LS.pass, ''); }

// ゴール時：自己ベストを更新し、チームに参加していれば記録を送る
export function recordLocal(time, splits) {
  const improved = TA.best == null || time < TA.best;
  const prev = TA.best;
  if (improved) { TA.best = time; TA.bestSplits = splits.slice(); set(LS.best, String(time)); set(LS.splits, JSON.stringify(splits)); }
  return { improved, prev };
}
export async function submit(result) {
  if (!TA.online || !TA.pass) return null;
  const r = await call('result', { name: TA.name, pass: TA.pass, ...result });
  TA.team = r.team; TA.ranking = r.ranking;
  return r;
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export function boardsHtml() {
  if (!TA.team) return '';
  const rows = TA.team.members.map((m, i) =>
    `<tr class="${m.name === TA.name ? 'me' : ''}"><td>${i + 1}</td><td>${esc(m.name)}</td><td>${fmt(m.best)}</td></tr>`).join('');
  const rank = TA.ranking.map((t, i) =>
    `<tr class="${t.mine ? 'me' : ''}"><td>${i + 1}</td><td>${esc(t.name)}（${t.size}人）</td><td>${fmt(t.best)}</td></tr>`).join('');
  return `<h3>チーム「${esc(TA.team.name)}」</h3><table class="board">${rows}</table>` +
    `<h3>チームランキング（チーム内の最速タイム）</h3><table class="board">${rank || '<tr><td colspan="3">まだ記録がありません</td></tr>'}</table>`;
}
