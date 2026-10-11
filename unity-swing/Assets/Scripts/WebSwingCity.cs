using UnityEngine;

namespace WebSwingKyoto
{
    public struct BuildingSpec
    {
        public string name;
        public Vector3 center;
        public float width;
        public float depth;
        public float height;

        public BuildingSpec(string n, Vector3 c, float w, float d, float h)
        {
            name = n;
            center = c;
            width = w;
            depth = d;
            height = h;
        }
    }

    // プロキシ版と同じ「新京都市LOD2」データを Unity の Unity-座標系で生成する。
    // PLATEAU から直接 3D Tiles を読み込みたい場合は WebSwingCity.PlateauTilesetUrl() を
    // Cesium3DTileset.url に設定してください。
    public static class WebSwingCity
    {
        public const float KyotoShijoKarasumaEast = 13541.9f;
        public const float KyotoShijoKarasumaNorth = -50708.0f;
        public const float KyotoStationEast = 12484.0f;
        public const float KyotoStationNorth = -48947.0f;

        public const float KyotoCenterLat = 35.0116f;
        public const float KyotoCenterLon = 135.7681f;
        public const float OriginHeight = 0f;

        public static Vector3 LatLonToUnity(float lat, float lon, float height = 0f)
        {
            const float a = 6378137.0f;
            const float e2 = 0.00669437999014f;
            float latRad = lat * Mathf.Deg2Rad;
            float lonRad = lon * Mathf.Deg2Rad;
            float N = a / Mathf.Sqrt(1.0f - e2 * Mathf.Sin(latRad) * Mathf.Sin(latRad));
            return new Vector3(
                (N + height) * Mathf.Cos(latRad) * Mathf.Cos(lonRad),
                (N + height) * Mathf.Sin(latRad),
                (N + height) * Mathf.Cos(latRad) * Mathf.Sin(lonRad));
        }

        public static string KyotoStationTilesetUrl()
        {
            return "https://assets.cms.plateau.reearth.io/assets/f0/2ed501-5480-4ccb-8293-9469a3856f9a/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26106_shimogyo-ku_lod2/tileset.json";
        }

        public static string ShijoKarasumaTilesetUrl()
        {
            return "https://assets.cms.plateau.reearth.io/assets/04/eaac56-936e-49e2-a91b-0db31a6ed192/26100_kyoto-shi_city_2025_citygml_1_op_bldg_3dtiles_26104_nakagyo-ku_lod2/tileset.json";
        }
    }
}
