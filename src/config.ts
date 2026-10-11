export const PLATEAU_TILESETS: string[] = [
  'https://assets.cms.plateau.reearth.io/assets/f0/2ed501-5480-4ccb-8293-9469a3856f9a/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26106_shimogyo-ku_lod2/tileset.json',
  'https://assets.cms.plateau.reearth.io/assets/04/eaac56-936e-49e2-a91b-0db31a6ed192/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26104_nakagyo-ku_lod2/tileset.json',
];

export const PLATEAU_CREDIT = '3D都市モデル: 国土交通省 PROJECT PLATEAU 京都市 2025 LOD2';

export const FRAME_LAT = 34.9945;
export const FRAME_LON = 135.7585;

export interface Checkpoint {
  lat: number;
  lon: number;
  h: number;
  label: string;
  goal?: boolean;
}

export const COURSE: Checkpoint[] = [
  { lat: 35.00330, lon: 135.75980, h: 150, label: '四条烏丸' },
  { lat: 34.99550, lon: 135.75920, h: 140, label: '五条烏丸' },
  { lat: 34.99090, lon: 135.75870, h: 125, label: '七条烏丸' },
  { lat: 34.98850, lon: 135.75850, h: 120, label: '八条烏丸' },
  { lat: 34.98580, lon: 135.75880, h: 175, label: '京都駅', goal: true },
];

export const SPAWN = {
  lat: 35.00330,
  lon: 135.75980,
  h: 172,
};

export const PHYS = {
  gravity: 24,
  linearDamping: 0.045,
  maxRope: 290,
  minRope: 10,
  reelSpeed: 34,
  ropeRangeSpeed: 16,
  pumpAccel: 26,
  strafeAccel: 46,
  airStrafeAccel: 30,
  releaseBoost: 1.35,
  releaseUp: 9,
  diveBoost: 22,
  groundY: 26,
  dashSpeed: 34,
  dashCooldown: 2.0,
  fallPenalty: 3,
};

export const CAM = {
  fovBase: 62,
  fovMax: 102,
  fovSpeedRef: 60,
  fovLerp: 4,
  back: 7.5,
  height: 3.2,
  lookAhead: 15,
};
