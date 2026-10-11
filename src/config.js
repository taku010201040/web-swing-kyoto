// 実データ・実地理に関わる設定。数値を変えるときは出典と確認方法を README に残すこと。

// 原点＝京都タワー。h は楕円体高（PLATEAU 3D Tiles の高さ基準）で、タワー足元の地面がほぼ y=0 になる値。
export const ORIGIN = { lat: 34.98753, lon: 135.75926, h: 65 };

// 地面の傾き（y = c + a*x + b*z）。PLATEAU に地形は含めていないので、建物の足元高さから当てはめた平面。
export const GROUND = { a: 0.0030, b: -0.0045, c: 0.2 };

// PLATEAU 京都市 2025年度 建築物モデル（テクスチャ付き＝壁面・屋根が実際の建物の写真）3D Tiles。下京区は LOD3、東山区・南区は LOD2（南区に LOD3 は無い）。データカタログ API で取得した配信 URL。
const CMS = 'https://assets.cms.plateau.reearth.io/assets/';
export const TILESETS = [
  { ward: '下京区', url: CMS + 'd3/4c620c-1c8b-44fa-9168-b50ed86f27f1/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26106_shimogyo-ku_lod3/tileset.json' }, // 京都駅・京都タワー周辺は LOD3
  { ward: '東山区', url: CMS + '25/dd4c50-5342-4a0b-ac51-05ffb138b8b5/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26105_higashiyama-ku_lod2/tileset.json' },
  { ward: '南区', url: CMS + '1c/596e87-af58-4394-a4e7-ef429ba5732c/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26107_minami-ku_lod2/tileset.json' },
];

// コース。緯度経度は実在地点。地点間は実距離のまま（直線合計 約3.6km）。
export const ROUTE = [
  { name: '七条通・スタート', lat: 34.98925, lon: 135.77060 },
  { name: '鴨川・七条大橋 東詰', lat: 34.98935, lon: 135.76790, tip: 'この先は<b>鴨川</b>。七条大橋をまっすぐ走って渡ろう（川に落ちると流れが重い）' },
  { name: '七条大橋 西詰', lat: 34.98935, lon: 135.76640, tip: '川を越えた。ここから南西へ。建物の高さを使って加速しよう' },
  { name: '河原町塩小路', lat: 34.98570, lon: 135.76400 },
  { name: '京都駅 八条口', lat: 34.98380, lon: 135.75850 },
  { name: '東寺 五重塔', lat: 34.97990, lon: 135.74872, tip: '五重塔を通過。北東に見える<b>京都タワー</b>へ！' },
  { name: '京都タワー', lat: 34.98753, lon: 135.75926, goal: true },
];

// 地面に描く PLATEAU 京都市 2025年度 土地利用モデル・道路モデル（LOD1）の MVT。範囲は原点からの m。
export const MAP = { zoom: 16, west: -1700, east: 1750, south: -1400, north: 800,
  luse: (z, x, y) => `${CMS}70/f8f889-8540-48df-a15c-2946ce0afc16/26100_kyoto-shi_city_2025_citygml_1_op_luse_mvt/${z}/${x}/${y}.mvt`,
  tran: (z, x, y) => `${CMS}89/762da6-8d40-490a-b9a9-20decdab2486/26100_kyoto-shi_city_2025_citygml_1_op_tran_mvt_lod1/${z}/${x}/${y}.mvt` };
