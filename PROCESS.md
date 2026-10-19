# PROCESS.md — 京都ハッカソン 全経緯アーカイブ記録

このリポジトリは KYOTO PLATEAU HACK 2026（2026-10-10/11、キャンパスプラザ京都）
に参与した全ての記録・成果物・経緯を一箇所に保全したものです。

## 1. 成果物マップ

| パス / ブランチ | 内容 |
|---|---|
| `webswing-kyoto.html`, `src/`, `libs/`, `serve.py` | **WebSwing Kyoto**（ブラウザ版スパイダーマン風3Dスイング、Three.js + 3d-tiles-renderer + PLATEAU 京都市LOD2） |
| `unity-swing/`（構成のみ・Cesium for Unityパッケージは同梱せず） | **Unity 版**プロジェクト（2022.3 LTS） |
| `kph2026-07/` | **kph2026-07 チーム（天空流しそうめんスライダー + KYOTO BATTLEGROUNDS） cinnamon CesiumJS アプリ** |
| `.opencode/skill/`, `skills/`, `ecc/` | 開発に使ったエージェントスキールドキュメント一式 |
| `*.pptx`, `IMG_1158.jpg` | ハッカソン公式資料（Day1・インプット・アイデアシート）と参加記録画像 |
| ブランチ `kph2026-07-history-app` | チームリポジトリ kph2026-07 の全コミット履歴（天空流しそうめんスライダー完成版 = kph2026-07 チームの最終提出状態） |
| ブランチ `kph2026-07-history-team` | チームリモート main の最新履歴（README整理・**デモ動画 demo/clips/** を含む） |
| ブランチ `kph2026-07-sub-somen-slider` | サブエントリ「sky somen slider」履歴 |
| ブランチ `kph2026-07-sub-webswing` | サブエントリ「webswing」履歴 |

## 2. 進行と判断の経緯（時系列）

### 10/10（Day1）
1. **最初の案**：京都駅上空 150m から鴨川プラザへ天空流しそうめんスライダー
   - PolylineVolume で七条通上空にトンネル（後の樋）
   - 木造・旧耐震を CityGML 実測（約 2.1 万棟/8 メッシュ）でドット可視化
   - 火災デモ→樋から放水で消火、の流れ
2. **スキー場式 3 コース化**：審査員に一度に見せるためのゲレンデマップ構成
   - 🟢 かもがわファミリー（七条通直進 1.4km）
   - 🔴 ほんがんじスラローム（東本願寺→渉成園 S 字 1.9km）
   - ⚫ とうじブラックダイブ（東寺 250m からダイブ 3.9km）
   - コース切替 UI、速度・色・描写を別管理（`kph2026-07/app/src/br.ts`へは後述）
3. **「土管がシュール」→ 樋をリアル化**：
   - 半円土管 → **割り竹 U 字断面**
   - 「竹は曲がらない」→ 直線区間の継ぎ合わせ（MITERED）+ 節リング + **継ぎ手に荒縄**
   - 🟢 青竹 / 🔴 枯竹 / ⚫ 煤竹（難易度で竹色が変わる発想）

### 10/11（Day2・提出日）
4. 14:00 提出締切 → チームリポジトリ `plateau-hack/kph2026-07` に提出状態_push
   - その履歴を本リポジトリの kph2026-07 ブランチ系で保全
   - チームメンバーが README 整理・デモ動画（9 クリップ）を main に追加済み
5. 発表スライド・審査 → アーカイブ终了

### 10/19（アーカイブ日）
6. リポジトリ統合：発表専用 kph2026-07 を master に取り込み（`.git` は `.git_archived` で退避してスキップ、別ブランチとして履歴保全）
7. **KYOTO BATTLEGROUNDS**（PUBG風マップ京都）を Cesium アプリに追加（`br.ts`）
   - 10 地名ラベル、クリック降下、収縮ゾーン 5 フェーズ、HP/ダメージ、ミニマップ、結果モーダル
8. ブラウザで軽く遊べる最適化：`requestRenderMode`、CSS 等倍描画、MSAA/建物タイル負荷削減

## 3. 動かし方（再現手順）

### WebSwing Kyoto（ブラウザ版）
```powershell
START-WEBSWING.bat
# または
python serve.py
# http://127.0.0.1:3000/webswing-kyoto.html
```

### 天空流しそうめん / KYOTO BATTLEGROUNDS
```powershell
cd kph2026-07/app
npm install
npm run dev
# 🪂 BR ボタン → マップクリックで降下 → 白円へクリック移動
```

### 履歴ツール方（別ブランチ閲覧）
```bash
git checkout kph2026-07-history-team -- demo/clips
```

## 4. 注意事項

- Cesium ion トークンは `kph2026-07/app/src/ionToken.ts` に記載（公開リポジトリのため再発行推奨）
- ネストしたリポジトリ（ecc/・skills/）は `**/.git/` により内容のみ追跡（本家履歴は GitHub 上の各 OSS リポジトリ参照）
