using UnityEngine;

namespace WebSwingKyoto
{
    public class Bootstrap : MonoBehaviour
    {
        [SerializeField] private Transform cityRoot;
        [SerializeField] private WebSwingController player;
        [SerializeField] private int buildingCount = 600;
        [Range(0f, 1f)] [SerializeField] private float density = 0.5f;

        private static Material _facadeMaterial;

        private void Awake()
        {
            if (cityRoot == null)
            {
                var root = new GameObject("City");
                cityRoot = root.transform;
            }

            BuildCity();
        }

        private void BuildCity()
        {
            var shader = Shader.Find("Standard");
            if (_facadeMaterial == null)
            {
                var tex = FacadeTexture();
                _facadeMaterial = new Material(shader);
                _facadeMaterial.mainTexture = tex;
                _facadeMaterial.SetTexture("_EmissionMap", tex);
                _facadeMaterial.SetColor("_EmissionColor", new Color(1f, 0.78f, 0.48f));
                _facadeMaterial.EnableKeyword("_EMISSION");
                _facadeMaterial.globalIlluminationFlags = MaterialGlobalIlluminationFlags.None;
            }

            var rng = new System.Random(81704);
            var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
            var cubeMesh = cube.GetComponent<MeshFilter>().sharedMesh;
            DestroyImmediate(cube);

            int spawned = 0;
            int attempts = 0;

            while (spawned < buildingCount && attempts < buildingCount * 8)
            {
                attempts++;

                float east = Mathf.Lerp(
                    WebSwingCity.KyotoStationEast,
                    WebSwingCity.KyotoShijoKarasumaEast,
                    attempts / (float)(buildingCount * 8));
                float north = WebSwingCity.KyotoShijoKarasumaNorth + rng.Next(-1800, 1801);
                float distFromShijo = Mathf.Abs(north - WebSwingCity.KyotoShijoKarasumaNorth);

                if (distFromShijo > 1400f)
                {
                    continue;
                }

                float localDensity = 1f - distFromShijo / 1400f;
                if (rng.NextDouble() > localDensity * density)
                {
                    continue;
                }

                float w = rng.Next(18, 51);
                float d = rng.Next(18, 51);
                float h = rng.Next(12, 121);
                float offsetEast = rng.Next(-80, 81);
                float offsetNorth = rng.Next(-80, 81);

                var go = new GameObject(
                    $"bldg_{spawned:D4}_{w}x{d}x{h}");
                go.transform.SetParent(cityRoot, false);
                go.transform.position = new Vector3(east, h / 2f, north);
                go.transform.localScale = new Vector3(w, h, d);
                go.layer = 0;

                var mf = go.AddComponent<MeshFilter>();
                mf.sharedMesh = cubeMesh;
                var mr = go.AddComponent<MeshRenderer>();
                mr.sharedMaterial = _facadeMaterial;
                var col = go.AddComponent<BoxCollider>();
                col.size = Vector3.one;
                go.AddComponent<Building>();

                // 空タイル: 夜に窓明かりを灯す
                spawned++;
            }

            Debug.Log($"Building specs spawned: {spawned}");
        }

        private static Texture2D FacadeTexture()
        {
            var tex = new Texture2D(128, 256, TextureFormat.RGBA32, true);

            var basePixels = new Color32[128 * 256];
            for (int y = 0; y < 256; y++)
            {
                for (int x = 0; x < 128; x++)
                {
                    float band = Mathf.Sin(y * 0.9f) * 0.5f + 0.5f;
                    float v = 0.12f + band * 0.1f;
                    var c = new Color(v, v * 1.05f, v * 1.1f);
                    basePixels[y * 128 + x] = c;
                }
            }
            tex.SetPixels32(basePixels);
            tex.Apply();

            var emissivePixels = new Color32[128 * 256];
            var rng = new System.Random(9137);

            for (int y = 0; y < 256; y++)
            {
                for (int x = 0; x < 128; x++)
                {
                    int fx = (x - 6) / 20;
                    int fy = (y - 8) / 17;
                    bool insideWindow = fx >= 0 && fx < 6 && fy >= 0 && fy < 14 &&
                        x >= 6 + fx * 20 && x < 18 + fx * 20 &&
                        y >= 8 + fy * 17 && y < 18 + fy * 17;

                    if (insideWindow && rng.NextDouble() < 0.45)
                    {
                        if (rng.NextDouble() < 0.7f)
                        {
                            emissivePixels[y * 128 + x] = new Color32(255, 210, 122, 255);
                        }
                        else
                        {
                            emissivePixels[y * 128 + x] = new Color32(191, 227, 255, 255);
                        }
                    }
                    else
                    {
                        emissivePixels[y * 128 + x] = new Color32(0, 0, 0, 255);
                    }
                }
            }

            var emissive = new Texture2D(128, 256, TextureFormat.RGBA32, true);
            emissive.SetPixels32(emissivePixels);
            emissive.Apply();
            emissive.wrapMode = TextureWrapMode.Clamp;

            _facadeEmission = emissive;
            return tex;
        }

        private static Texture2D _facadeEmission;

        private void Start()
        {
            if (_facadeMaterial != null && _facadeEmission != null)
            {
                _facadeMaterial.SetTexture("_EmissionMap", _facadeEmission);
            }
        }
    }
}
