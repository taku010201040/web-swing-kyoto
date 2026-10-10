using UnityEngine;

namespace WebSwingKyoto
{
    // Cesium for Unity + PLATEAU 京都市LOD2 を読み込み、背景として配置する。
    // Pキーで「PLATEAU実データ」と「手続き生成の街」を切り替えできる。
    public class CesiumCity : MonoBehaviour
    {
        [SerializeField] private Transform cityRoot;
        [SerializeField] private WebSwingController player;
        [SerializeField] private bool usePlateauData = true;

        private GameObject _georeference;
        private Transform _plateauRoot;
        private bool _plateauReady;

        public bool UsePlateauData
        {
            get => usePlateauData;
            set => usePlateauData = value;
        }

        private void Awake()
        {
            // ジオリファレンスのローカル座標系に街とプレイヤーを置く
            var geo = GetComponent<CesiumForUnity.CesiumGeoreference>();
            if (geo != null)
            {
                double lat = geo.latitude;
                double lon = geo.longitude;
                geo.height = 0.0;
            }

            BuildPlateau();

            if (usePlateauData)
            {
                ShowPlateau();
            }
            else
            {
                ShowProcedural();
            }
        }

        private void BuildPlateau()
        {
            _plateauRoot = new GameObject("PlateauTilesets").transform;
            _plateauRoot.SetParent(transform, false);

            string[] urls =
            {
                WebSwingCity.ShijoKarasumaTilesetUrl(),
                WebSwingCity.KyotoStationTilesetUrl()
            };

            for (int i = 0; i < urls.Length; i++)
            {
                var go = new GameObject($"PlateauTileset_{i}");
                go.transform.SetParent(_plateauRoot, false);
                var tileset = go.AddComponent<CesiumForUnity.Cesium3DTileset>();
                tileset.tilesetSource = CesiumForUnity.CesiumDataSource.FromUrl;
                tileset.url = urls[i];
                tileset.createPhysicsMeshes = true;
                tileset.enableFrustumCulling = true;
                tileset.enableFogCulling = true;
                tileset.preloadAncestors = true;
                tileset.preloadSiblings = false;
                tileset.suspendUpdate = false;
            }
        }

        private void Update()
        {
            if (Input.GetKeyDown(KeyCode.P))
            {
                usePlateauData = !usePlateauData;

                if (usePlateauData)
                {
                    ShowPlateau();
                }
                else
                {
                    ShowProcedural();
                }
            }
        }

        private void ShowPlateau()
        {
            if (_plateauRoot != null)
            {
                _plateauRoot.gameObject.SetActive(true);
            }
            if (cityRoot != null)
            {
                cityRoot.gameObject.SetActive(false);
            }
        }

        private void ShowProcedural()
        {
            if (_plateauRoot != null)
            {
                _plateauRoot.gameObject.SetActive(false);
            }
            if (cityRoot != null)
            {
                cityRoot.gameObject.SetActive(true);
            }
        }
    }
}
