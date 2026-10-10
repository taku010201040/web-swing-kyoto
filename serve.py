"""Static server + PLATEAU proxy for webswing-kyoto.html (run: python serve.py)."""
import http.server
import urllib.parse
import urllib.request

CMS = 'https://assets.cms.plateau.reearth.io'


class H(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'text/javascript',
        '.mjs': 'text/javascript',
        '.wasm': 'application/wasm',
        '.json': 'application/json',
        '.b3dm': 'application/octet-stream',
        '.cmpt': 'application/octet-stream',
        '.pnts': 'application/octet-stream',
        '.i3dm': 'application/octet-stream',
    }

    def log_message(self, *a):
        pass

    def do_GET(self):
        u = urllib.parse.urlparse(self.path)
        if u.path == '/cms' or u.path.startswith('/cms/'):
            self.handle_proxy(u.path[len('/cms'):])
        else:
            super().do_GET()

    def handle_proxy(self, rest):
        # /cms/<path> -> CMS host (relative tile URLs keep working)
        if '..' in rest:
            self.send_error(403, 'forbidden')
            return
        target = CMS + (rest if rest.startswith('/') else '/' + rest)
        try:
            req = urllib.request.Request(
                target, headers={'User-Agent': 'webswing-proxy', 'Accept-Encoding': 'identity'})
            with urllib.request.urlopen(req, timeout=60) as resp:
                data = resp.read()
                ctype = resp.headers.get('Content-Type', 'application/octet-stream')
            if rest.endswith('.json'):
                ctype = 'application/json'
            self.send_response(200)
            self.send_header('Content-Type', ctype)
            self.send_header('Content-Length', str(len(data)))
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(data)
        except Exception as e:  # noqa: BLE001
            self.send_error(502, 'proxy failed: %s' % e)


if __name__ == '__main__':
    print('serving on http://127.0.0.1:3000  (with /proxy for PLATEAU)')
    http.server.ThreadingHTTPServer(('127.0.0.1', 3000), H).serve_forever()
