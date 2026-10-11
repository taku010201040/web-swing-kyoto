# 流しそうめん 3Dモデル

`nagashi-somen.glb` : 実寸大の流しそうめん装置 (glTF 2.0 / GLB)。

## 内容
- 竹の樋: 長さ 4.0m、外径 14cm の半割パイプ、勾配 5% (上端高さ 0.9m → 下端 0.7m)
- 竹の節リング ×6、水面 (半透明) 、そうめん 8束
- 竹の脚 (X型) ×3、上部の給水バケツ、下部の台・ザル・つゆ椀・落水

## 仕様
- 単位: メートル、Y-up (PLATEAU / Cesium 配置用)
- 全体サイズ: 約 0.7 (幅) × 1.3 (高) × 5.2 (奥行) m、39メッシュ、約 456KB
- 原点: 樋の上端直下の地面。樋は +Z 方向に伸びる

## 再生成
```bash
python generate_nagashi_somen.py
```

## プレビュー
`index.html` をブラウザで開く (要インターネット: model-viewer を CDN から読む)。

## PLATEAU への配置例 (CesiumJS)
```js
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(135.7681, 35.0116, 0),
  orientation: Cesium.Transforms.headingPitchRollQuaternion(
    position, new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), 0, 0)),
  model: { uri: "./nagashi-somen.glb", scale: 1.0 }
});
```
