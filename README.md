# sub/webswing — Drive「1010 Hackathon」フォルダの写し

Google Drive の共有フォルダ「1010　Hackathon」の中身を、2026-10-11 時点でそのまま置いたブランチ。
メインの作品（`main` ブランチの「京都を駆け抜けろ」）とは別の、試作・資料置き場。

## 入っているもの

| パス | 内容 |
| --- | --- |
| `webswing-kyoto.html`、`serve.py`、`libs/` | ブラウザ版の試作（three.js などを `libs/` に同梱） |
| `unity-swing/` | Unity 版の試作（`Assets`、`ProjectSettings`、`Packages/manifest.json`） |
| `3d.json`、`3d 5s.json`、`kph2026-07.json` | AI コーディングツール（opencode）のセッション記録 |
| `.opencode/skill/`、`skills/` | 開発に使ったスキル定義（PLATEAU API の参照資料など） |
| `export_1791611198247.mov` | 画面録画 |
| `アイデアワークシート_2026.pptx` | チームのアイデアシート |
| `KYOTO PLATEAU HACK 2026 Day1 資料（参加者共有用）.pptx`、`PLATEAU 京都ハッカソン 2026 インプット.pptx` | 運営から配布された資料 |

## 入れていないもの

| Drive 上のパス | 理由 |
| --- | --- |
| `unity-swing/Packages/` の Cesium for Unity 本体（約 1.34GB） | 1 ファイル 100MB を超えるものがあり GitHub に上げられない。`Packages/manifest.json` があるので、Unity で開けば取得し直される |
| `ecc/`（約 3,000 ファイル） | 外部のリポジトリを丸ごと取得したもの |
| `kph2026-07/` | このリポジトリ自身の写し |
| `node_modules/`、`__pycache__/`、各 `.git/` | 自動生成物 |

## 注意

- セッション記録（JSON 3 つ）には、開発中のやり取りと作業フォルダのパスがそのまま入っている。公開リポジトリには置かないこと。
- `kph2026-07.json` に含まれる Cesium ion のトークンは、Project PLATEAU の公開チュートリアル（plateau-streaming-tutorial）に載っているサンプルで、チームのものではない。
