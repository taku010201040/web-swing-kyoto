# WebSwing Kyoto — PLATEAU 京都 LOD2 ウェブスイングゲーム

ブラウザで動く「スパイダーマン風3Dウェブスイング」です。国土交通省 PLATEAU の
京都市建築物LOD2（四条烏丸〜京都駅）を Three.js + 3d-tiles-renderer で読み込み、
振り子物理で高層ビルの間を滑空します。

## すぐ遊ぶ（ブラウザ版）

```
START-WEBSWING.bat をダブルクリック
```
または

```powershell
cd "C:\Users\81704\Downloads\1010　Hackathon"
python serve.py
# ブラウザで http://127.0.0.1:3000/webswing-kyoto.html
```

| URL | 内容 |
|---|---|
| `/webswing-kyoto.html` | 標準（四条烏丸＋京都駅エリア） |
| `/webswing-kyoto.html?ward` | 軽量（京都駅・下京区のみ） |
| `/webswing-kyoto.html?hq=1` | 高品質 |

### 操作

| 入力 | 動作 |
|---|---|
| 長押し（クリック / スペース / タップ） | 糸発射＋巻取り加速 |
| 離す | 糸を外してジャンプ |
| マウス | 視点 |
| A / D | 左右 |
| R | リスポーン |
| N | 昼夜切替 |
| M | オート発射のON/OFF |

## Windows スタンドアロン版（Unity）

`unity-swing/` に Unity 2022.3 LTS プロジェクトを用意してあります。
Cesium for Unity v1.26.0（568MB）を `unity-swing/Packages/Cesium/` に同梱済み。

### ビルド手順

1. Unity Hub を起動 → サインイン → **Personal ライセンスを有効化**
   （未認証だと `No valid Unity Editor license found` で失敗します）
2. `unity-swing\build-windows.bat` をダブルクリック
3. 完成: `unity-swing\Builds\Windows\WebSwingKyoto.exe`

または Unity で `unity-swing` フォルダを開き、メニュー
**WebSwingKyoto → Build Windows** を実行。

### Unity版の仕様

- PLATEAU 実データは Cesium3DTileset で 2区（下京区・中京区）をストリーミング読み込み
- 建物に collider を生成（`createPhysicsMeshes`）→ 糸のアンカーとして Raycast
- `P` キーで「PLATEAU実データ」↔「手続き生成の街」を切替
- 同じスイング物理（重力＋振り子拘束＋巻取り＋ダイブ）
- 夜景・フォグ・HUD・速度連動FOV

## ファイル構成

```
webswing-kyoto.html   … ブラウザ版ゲーム本体（単一HTML）
serve.py              … ローカルサーバー + PLATEAU中継プロキシ(/cms)
libs/                 … three, 3d-tiles-renderer, Draco デコーダ（完全同梱）
unity-swing/          … Unity 2022.3 プロジェクト（Cesium for Unity 同梱）
START-WEBSWING.bat    … ワンクリック起動（ブラウザ版）
unity-swing\build-windows.bat … ワンクリックビルド（Unity版）
```

## 全記録・アーカイブ

開発経緯・タイムライン・技術メモ・チームリポジトリでのやり取りの全記録は
**`records/project-log.md`** を参照。

- 会場写真: `records/IMG_1158.jpg`
- チームリポジトリ(非公開) `plateau-hack/kph2026-07` の自分の作品コピー:
  - `kph2026-07/app/` 流しそうめんスライダー（そうめん, sub/somen-slider ブランチ由来）
  - `kph2026-07/nagashi-somen/` 独立版そうめん一式
- 参考に取り込んだ外部素材: `ecc/`（OSS "ECC" by affaan-m）、`skills/`（PLATEAU公式Agent Skills）

> 注: `kph2026-07/app/` 内の Cesium ion トークンは公開リポジトリのため空文字化してある
> （実値は非公開チームリポジトリ参照）。

## PLATEAU データURL

```
https://api.plateauview.mlit.go.jp/datacatalog/3dtiles/26100-bldg-maxlod2-latest/tileset.json  # 京都市全体
https://assets.cms.plateau.reearth.io/assets/f0/2ed501-.../26106_shimogyo-ku_lod2/tileset.json    # 下京区(京都駅)
https://assets.cms.plateau.reearth.io/assets/04/eaac56-.../26104_nakagyo-ku_lod2/tileset.json     # 中京区(四条烏丸)
```

2025年度データは Draco 圧縮 + CESIUM_RTC 座標のため、デコーダと
RTC エクステンションが必須です（両方対応済み）。
