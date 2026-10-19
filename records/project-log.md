# 全記録 — プロジェクト経緯ログ（2026-10-19 時点）

PLATEAU京都ハッカソン2026で作成した全成果物・全経緯のアーカイブ。
本ドキュメントは自分用の完全な記録。

---

## 1. 何を作ったか

PLATEAU 京都市の建物 LOD2（四条烏丸〜京都駅周辺）の 3D 都市モデルの上を、
スパイダーマン風に「糸を撃って振り子でスイングする」ゲーム。3本柱で制作：

| # | 作品 | 状態 | 置き場所 |
|---|---|---|---|
| 1 | **ブラウザ版ウェブスイング**（Three.js + 3d-tiles-renderer） | ✅ 完成済・動作確認済 | 本リポジトリ `webswing-kyoto.html` |
| 2 | **Unity デスクトップ版**（Cesium for Unity） | ✅ コード完成 / ⛔ ビルドはライセンス未認証で未実施 | 本リポジトリ `unity-swing/` |
| 3 | **流しそうめんスライダー**（副作品・不採用候補#2, CesiumJS） | ✅ 動作済 | チームリポ `kph2026-07` `sub/somen-slider` ブランチ（本リポにもコピー `kph2026-07/`） |
| - | 忍者鉤縄タイムアタック（チームメイトの本体作品） | チームメイト所属 | チームリポ `kph2026-07` `main`（非公開） |

---

## 2. 実行方法

### ブラウザ版（本リポジトリ）
```
START-WEBSWING.bat ダブルクリック
→ python serve.py → http://127.0.0.1:3000/webswing-kyoto.html
```
URLパラメータ: `?ward` 下京区のみ軽量 / `?hq=1` 高品質

操作：
| 入力 | 動作 |
|---|---|
| クリック / Space 長押し | 糸発射＋巻取り加速 |
| 離す | 糸を外してジャンプ |
| A / D | 左右移動 |
| マウス | 視点 |
| R | リスポーン |
| N | 昼夜切替 |
| M | オート発射 ON/OFF |

速度は x3 に強化済み。夜景モード・ヒーローモデル・軽量モード(LITE)搭載。

### Unity 版
```
1. Unity Hub 起動 → サインイン → Personal ライセンス認証
2. unity-swing\build-windows.bat
3. unity-swing\Builds\Windows\WebSwingKyoto.exe
```
特徴: PLATEAU実データを Cesium3DTileset で下京区・中京区ストリーミング、
`createPhysicsMeshes` で建物 collider 生成 → Raycast で糸アンカー、
`P` キーで PLATEAU実データ ↔ 手続き生成の街を切替。

### そうめんスライダー（副作品）
```
cd kph2026-07/app  (または kph2026-07 の sub/somen-slider ブランチ)
npm install ; npm run dev
```

---

## 3. リポジトリ体系と変遷タイムライン

### 公開リポジトリ: taku010201040/web-swing-kyoto（本リポ, master）
- `f62c616` PLATEAU京都LOD2ウェブスイングゲーム (Three.js + Unity) — 初回一式
- `15099eb` chore: 発表専用の別リポジトリ(kph2026-07)は本リポ対象外に（誤入の nested gitlink 除去）
- 本コミット: 経緯・成果物の完全アーカイブ（records/, kph2026-07/, ecc/, skills/, .opencode/skill/, 会場写真）

### チームリポジトリ（非公開）: plateau-hack/kph2026-07（main / sub）
| コミット | 誰 | 内容 |
|---|---|---|
| `946993a` | crafts? | CraftStadium submission template |
| `fb068cf` | チームメイト | 忍者鉤縄タイムアタック追加（本体作品。demo/kyoto-ninja-demo.mp4 約86.9MB） |
| `c886f79` | 私 | `sub/somen-slider`: そうめんスライダーを副エントリとしてpush（app/ + nagashi-somen/ = 25ファイル） |
| `593b38a` | 私 | そうめん一式を **main** ヘ `app/` `nagashi-somen/` として、「追加以外の変更なし」で fast-forward push（temp worktree手法。rebase不要の競合回避） |
| `1546b03` | チームメイト | Cloudflare Workers デプロイ + README 公開URL記載 |
| `4cde6f5` | チームメイト | Merge remote-tracking branch 'origin/main'（593b38aを意図的に取り込み） |
| `5798e43` | 私 | ユーザー指示「sub であげて」により、main から app//nagashi-somen/ を revert で除外（本体系ファイルは無変更）。そうめんの正式置き場は `sub/somen-slider` |

経緯メモ:
- 私のローカル main は別内容の先行コミット2件（root CesiumJS アプリ等）で分岐していたため、
  `git pull --rebase` による解消はせず、worktree分離＋コンフリクトしないパスのみ追加する方式を採った。
- revert push の1回目は相手側の先行進行で non-fast-forward 拒否 → 新 tip に載せ替えて push 成功。
- チームメイトへの通知は GitHub commit comment で実施:
  - https://github.com/plateau-hack/kph2026-07/commit/fb068cf#commitcomment-204408481
  - https://github.com/plateau-hack/kph2026-07/commit/5798e43#commitcomment-204411047
- `gh api` の commit comments は SHA **40文字**必須（短縮SHAだと422）。

---

## 4. 技術メモ（デバッグで判明した要点）

### PLATEAU 2025年度 LOD2 3D Tiles（B3DM → GLTF）
- ビルの GLTF が **KHR_draco_mesh_compression + CESIUM_RTC** 両対応なので対策必須:
  - `DRACOLoader` → `setDecoderPath('./libs/draco/')`（完全同梱。`.wasm` は MIME `application/wasm` 必須）
  - `GLTFCesiumRTCExtension` を手で import して登録:
    `t.manager.addHandler(/\.gltf$/, ldr); ldr.register(() => new GLTFCesiumRTCExtension());`
- 3d-tiles-renderer **0.3.34** の正しいイベント名は `load-model` / `load-tile-set`
  （`load-content` は古い書籍/コード例の誤り）
- `jsdelivr`/`unpkg` がブラウザで DNS 阻害 → 各ライブラリを `libs/` に完全同梱して importmap で ./libs/* 参照
- `serve.py`: 127.0.0.1:3000 で `/cms/...` を assets.cms.plateau.reearth.io に中継（path プロキシ）
- TilesRenderer 調整: `errorTarget` LITE時 26 / 通常6, `errorThreshold`, `loadSiblings=false`

### Unity
- Cesium for Unity **1.26.0**（OpenUPM・Packages/manifest.json）
- ローカルに vendored `Packages/Cesium/`（568MB）も置いてある（.gitignore 済）
- batchmode ビルドは **"No valid Unity Editor license found. Please activate your license."** で失敗
  （Unity Hub 未インストール → ライセンス未認証）。コードは完成、認証すれば通る見込み

---

## 5. セキュリティ配慮（公開リポジトリ化にあたって）

- **kph2026-07/app/src/ionToken.ts**: Cesium ion の JWT 実値がローカルに存在するが、
  `app/.gitignore` が `src/ionToken.ts` を by-design 無視する設計のため、
  **非公開リポジトリ・公開アーカイブのどちらにも一切コミットされていない**
  （確認済み: `origin/sub/somen-slider` の `app/src` に ionToken.ts は存在しない）。
  実値はローカルに留まるため rotate 不要。`main.ts` は空文字トークンでも動く。
- `ecc/`・`skills/`・`.opencode/` 全ファイルを自動スキャン →
  検出された `sk-abc123...` 等は**すべてドキュメント用プレースホルダ**で実害なし。
- その他の config / .env.example / mcp 設定はプレースホルダのみで実トークンなし。

---

## 6. 本アーカイブ構成（records/ ほか）

| パス | 内容 |
|---|---|
| `records/project-log.md` | この文書 |
| `records/IMG_1158.jpg` | ハッカソン会場の記録写真 |
| `kph2026-07/` | チームリポ私の作品（files only: app/ そうめん・nagashi-somen/・root vite残骸）。`.git`/`node_modules`/`dist` 除外 |
| `ecc/` | 外部OSSプロジェクト **ECC**（by affaan-m, "agent harness operating system"）のローカルコピー。`.git_archived`（31.7MB pack）は除外 |
| `skills/` | PLATEAU公式 **Agent Skills**（plateauview）のコピー |
| `.opencode/skill/` | 本作業で使用した AI エージェント設定 |
| `3d.json` / `3d 5s.json` / `kph2026-07.json` / `export_*.mov` | 開発中に取得した PLATEAU データ/録画 |
| Day1 資料.pptx / インプット.pptx / アイデアワークシート.pptx | ハッカソン配布資料 |

---

## 7. 未解決事項 / TODO

1. **Unity ライセンス認証** → `build-windows.bat` の実行検証
2. ローカル `kph2026-07` の `main` は私の先行コミット2件のまま未同期（本体系ファイルと競合するため放置を推奨。必要なら `git switch sub/somen-slider` で作業）
3. チーム本リポの `demo/kyoto-ninja-demo.mp4`（約86.9MB）が main に残っている。clone が重くなる（100MB 制限内）ので slim 化要検討
4. ion トークン: 未流出確認済み（rotate 不必要。将来的に共有方法を変えるなら再考）
