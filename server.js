// ゲームの配信と、タイムアタックのチーム記録を受け持つ小さなサーバー（依存パッケージなし）。
//   node server.js   →  http://localhost:8123
// インターネットに公開するときの環境変数：
//   PORT         待ち受けポート（ホスティング側が指定する）
//   DATA_DIR     記録の保存先。再起動しても消えないディスクを指定する（既定は ./data）
//   TRUST_PROXY  1 にすると、アクセス元の判定に X-Forwarded-For を使う（リバースプロキシの後ろで動かすとき）
// 同じ合言葉を入れた人が同じチームになる。記録は data/teams.json に保存する。
// タイムは各プレイヤーのブラウザからの自己申告で、不正対策はしていない（試遊会向け）。
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');

const PORT = Number(process.env.PORT) || 8123;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(ROOT, 'data');
const TRUST_PROXY = process.env.TRUST_PROXY === '1' || process.argv.includes('--trust-proxy');
const DATA_FILE = path.join(DATA_DIR, 'teams.json');
const MAX_MEMBERS = 8, MIN_TIME = 20, MAX_TIME = 3600;
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.md': 'text/plain; charset=utf-8' };

let db = { teams: {} };
try { db = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch { /* 初回は空 */ }
let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DATA_FILE + '.tmp', JSON.stringify(db, null, 1));
    fs.renameSync(DATA_FILE + '.tmp', DATA_FILE);
  }, 200);
}

const clean = (v, max) => String(v ?? '').normalize('NFKC').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, max);
// 合言葉そのものは保存せず、ハッシュをチームの鍵にする
const teamId = (pass) => crypto.createHash('sha256').update('kyoto-ninja:' + pass).digest('hex').slice(0, 20);

function teamBest(t) {
  let best = null, by = null;
  for (const [name, m] of Object.entries(t.members)) if (m.best != null && (best == null || m.best < best)) { best = m.best; by = name; }
  return { best, by };
}
function teamView(id) {
  const t = db.teams[id];
  const members = Object.entries(t.members).map(([name, m]) => ({ name, best: m.best, runs: m.runs, broken: m.broken ?? null }))
    .sort((a, b) => (a.best ?? 1e9) - (b.best ?? 1e9));
  return { name: t.name, members, ...teamBest(t) };
}
function ranking(myId) {
  return Object.entries(db.teams).map(([id, t]) => ({ name: t.name, size: Object.keys(t.members).length, mine: id === myId, ...teamBest(t) }))
    .filter((t) => t.best != null).sort((a, b) => a.best - b.best).slice(0, 20);
}

// 1つのアクセス元からの連打を抑える（1分あたり：API 全体 60 回、チーム参加 12 回）
const hits = new Map();
function limited(ip, kind, max) {
  const k = kind + ip, now = Date.now(), h = hits.get(k);
  if (!h || now - h.t > 60000) { hits.set(k, { t: now, n: 1 }); return false; }
  return ++h.n > max;
}
setInterval(() => { const now = Date.now(); for (const [k, h] of hits) if (now - h.t > 60000) hits.delete(k); }, 60000).unref();
const clientIp = (req) => (TRUST_PROXY && String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()) || req.socket.remoteAddress || '?';

const api = {
  ping: () => ({ ok: true }),
  health: () => ({ ok: true, teams: Object.keys(db.teams).length }),
  ranking: () => ({ ranking: ranking(null) }),
  join(b) {
    const pass = clean(b.pass, 40), name = clean(b.name, 16);
    if (pass.length < 2) throw new Error('合言葉は2文字以上で入力してください');
    if (!name) throw new Error('名前を入力してください');
    const id = teamId(pass);
    let created = false, t = db.teams[id];
    if (!t) {
      if (Object.keys(db.teams).length >= 2000) throw new Error('チーム数が上限です');
      t = db.teams[id] = { name: clean(b.teamName, 20) || 'チーム' + id.slice(0, 4), created: new Date().toISOString(), members: {} };
      created = true;
    }
    if (!t.members[name]) {
      if (Object.keys(t.members).length >= MAX_MEMBERS) throw new Error(`このチームは満員です（${MAX_MEMBERS}人まで）`);
      t.members[name] = { best: null, runs: 0 };
    }
    save();
    return { created, team: teamView(id), ranking: ranking(id) };
  },
  result(b) {
    const pass = clean(b.pass, 40), name = clean(b.name, 16), time = Number(b.time);
    const id = teamId(pass), t = db.teams[id], m = t && t.members[name];
    if (!m) throw new Error('チームに参加していません');
    if (!(time >= MIN_TIME && time <= MAX_TIME)) throw new Error('タイムが範囲外です');
    const improved = m.best == null || time < m.best;
    m.runs++;
    if (improved) { m.best = Math.round(time * 10) / 10; m.broken = Number(b.broken) | 0; m.swings = Number(b.swings) | 0; m.at = new Date().toISOString(); }
    save();
    return { improved, team: teamView(id), ranking: ranking(id) };
  },
};

function send(res, code, body, type = 'application/json; charset=utf-8', extra = {}) {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', ...extra });
  res.end(body);
}
// 配るのはゲーム本体だけ（index.html と dist/）。ソースや記録ファイルは外に出さない
const PUBLIC = /^(index\.html|dist[\\/][\w.-]+\.js)$/;
const gzCache = new Map(); // path → { mtime, buf }

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname.startsWith('/api/')) {
    const name = url.pathname.slice(5), fn = Object.hasOwn(api, name) ? api[name] : null;
    if (!fn) return send(res, 404, '{"error":"not found"}');
    const ip = clientIp(req);
    if (limited(ip, 'api', 60) || (name === 'join' && limited(ip, 'join', 12))) return send(res, 429, '{"error":"アクセスが多すぎます。少し待ってからもう一度どうぞ"}');
    let raw = '';
    req.on('data', (c) => { raw += c; if (raw.length > 4096) req.destroy(); });
    req.on('end', () => {
      try { send(res, 200, JSON.stringify(fn(raw ? JSON.parse(raw) : {}))); }
      catch (e) { send(res, 400, JSON.stringify({ error: e.message })); }
    });
    return;
  }
  // 静的ファイル
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, 'method not allowed', 'text/plain');
  let rel;
  try { rel = path.normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, '') || 'index.html'; } catch { return send(res, 400, 'bad request', 'text/plain'); }
  if (!PUBLIC.test(rel)) return send(res, 404, 'not found', 'text/plain');
  const file = path.join(ROOT, rel), type = MIME[path.extname(file)] || 'application/octet-stream';
  fs.stat(file, (err, st) => {
    if (err) return send(res, 404, 'not found', 'text/plain');
    const gz = /\bgzip\b/.test(req.headers['accept-encoding'] || '');
    const hit = gzCache.get(file);
    if (gz && hit && hit.mtime === st.mtimeMs) return send(res, 200, hit.buf, type, { 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' });
    fs.readFile(file, (e2, buf) => {
      if (e2) return send(res, 404, 'not found', 'text/plain');
      if (!gz) return send(res, 200, buf, type);
      zlib.gzip(buf, (e3, out) => {
        if (e3) return send(res, 200, buf, type);
        gzCache.set(file, { mtime: st.mtimeMs, buf: out });
        send(res, 200, out, type, { 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' });
      });
    });
  });
}).listen(PORT, '0.0.0.0', () => console.log(`京都を駆け抜けろ: http://localhost:${PORT}  (記録の保存先: ${DATA_FILE})`));
