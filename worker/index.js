// Cloudflare Workers 版のサーバー。
// ゲーム本体（public/ の index.html と dist/game.js）は Workers の静的アセットとして配り、
// /api/* だけをこの Worker が受ける。チームの記録は Durable Object（TeamStore）1つにまとめて保存する。
// API の仕様は server.js（Node.js 版）と同じ。

const MAX_MEMBERS = 8, MAX_TEAMS = 2000, MIN_TIME = 20, MAX_TIME = 3600;
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});
const clean = (v, max) => String(v ?? '').normalize('NFKC').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, max);

// 合言葉そのものは保存せず、ハッシュをチームの鍵にする
async function teamId(pass) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('kyoto-ninja:' + pass));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 20);
}
function teamBest(t) {
  let best = null, by = null;
  for (const [name, m] of Object.entries(t.members)) if (m.best != null && (best == null || m.best < best)) { best = m.best; by = name; }
  return { best, by };
}
function teamView(t) {
  const members = Object.entries(t.members).map(([name, m]) => ({ name, best: m.best, runs: m.runs, broken: m.broken ?? null }))
    .sort((a, b) => (a.best ?? 1e9) - (b.best ?? 1e9));
  return { name: t.name, members, ...teamBest(t) };
}

export class TeamStore {
  constructor(state) {
    this.s = state.storage;
    this.hits = new Map(); // 連打対策（アクセス元ごとの 1 分あたり回数）
  }
  limited(ip, kind, max) {
    const k = kind + ip, now = Date.now(), h = this.hits.get(k);
    if (this.hits.size > 5000) this.hits.clear();
    if (!h || now - h.t > 60000) { this.hits.set(k, { t: now, n: 1 }); return false; }
    return ++h.n > max;
  }
  async ranking(myId) {
    const all = await this.s.list({ prefix: 'team:' });
    const out = [];
    for (const [key, t] of all) { const b = teamBest(t); if (b.best != null) out.push({ name: t.name, size: Object.keys(t.members).length, mine: key === 'team:' + myId, ...b }); }
    return out.sort((a, b) => a.best - b.best).slice(0, 20);
  }
  async fetch(req) {
    const { op, ip, body: b = {} } = await req.json();
    try {
      if (this.limited(ip, 'api', 60) || (op === 'join' && this.limited(ip, 'join', 12))) return json({ error: 'アクセスが多すぎます。少し待ってからもう一度どうぞ' }, 429);
      if (op === 'ping') return json({ ok: true });
      if (op === 'health') return json({ ok: true, teams: (await this.s.list({ prefix: 'team:' })).size });
      if (op === 'ranking') return json({ ranking: await this.ranking(null) });

      const pass = clean(b.pass, 40), name = clean(b.name, 16);
      const id = await teamId(pass), key = 'team:' + id;
      let t = await this.s.get(key);

      if (op === 'join') {
        if (pass.length < 2) throw new Error('合言葉は2文字以上で入力してください');
        if (!name) throw new Error('名前を入力してください');
        let created = false;
        if (!t) {
          if ((await this.s.list({ prefix: 'team:', limit: MAX_TEAMS + 1 })).size >= MAX_TEAMS) throw new Error('チーム数が上限です');
          t = { name: clean(b.teamName, 20) || 'チーム' + id.slice(0, 4), created: new Date().toISOString(), members: {} };
          created = true;
        }
        if (!t.members[name]) {
          if (Object.keys(t.members).length >= MAX_MEMBERS) throw new Error(`このチームは満員です（${MAX_MEMBERS}人まで）`);
          t.members[name] = { best: null, runs: 0 };
        }
        await this.s.put(key, t);
        return json({ created, team: teamView(t), ranking: await this.ranking(id) });
      }
      if (op === 'result') {
        const time = Number(b.time), m = t && t.members[name];
        if (!m) throw new Error('チームに参加していません');
        if (!(time >= MIN_TIME && time <= MAX_TIME)) throw new Error('タイムが範囲外です');
        const improved = m.best == null || time < m.best;
        m.runs++;
        if (improved) { m.best = Math.round(time * 10) / 10; m.broken = Number(b.broken) | 0; m.swings = Number(b.swings) | 0; m.at = new Date().toISOString(); }
        await this.s.put(key, t);
        return json({ improved, team: teamView(t), ranking: await this.ranking(id) });
      }
      return json({ error: 'not found' }, 404);
    } catch (e) {
      return json({ error: e.message }, 400);
    }
  }
}

const OPS = new Set(['ping', 'health', 'ranking', 'join', 'result']);
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(req);
    const op = url.pathname.slice(5);
    if (!OPS.has(op)) return json({ error: 'not found' }, 404);
    let body = {};
    if (req.method === 'POST') {
      const raw = await req.text();
      if (raw.length > 4096) return json({ error: 'too large' }, 413);
      try { body = raw ? JSON.parse(raw) : {}; } catch { return json({ error: 'bad json' }, 400); }
    }
    const ip = req.headers.get('CF-Connecting-IP') || '?';
    const store = env.TEAMS.get(env.TEAMS.idFromName('all'));
    return store.fetch('https://store/', { method: 'POST', body: JSON.stringify({ op, ip, body }) });
  },
};
