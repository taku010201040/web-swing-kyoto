using UnityEditor;
using UnityEngine;

namespace WebSwingKyoto.EditorTools
{
    // メニュー "WebSwingKyoto/Create Scene" から実行すると
    // プレイヤー・街・カメラ・ロープ・夜まで設定済みのシーンを作成する。
    public static class CreateSceneMenu
    {
        [MenuItem("WebSwingKyoto/Create Scene")]
        public static void CreateScene()
        {
            var scene = UnityEditor.SceneManagement.EditorSceneManager.NewScene(
                UnityEditor.SceneManagement.NewSceneSetup.EmptyScene,
                UnityEditor.SceneManagement.NewSceneMode.Single);

            var cityRoot = new GameObject("City").transform;

            var playerGo = new GameObject("Player");
            playerGo.transform.position = new Vector3(
                WebSwingCity.KyotoShijoKarasumaEast,
                130f,
                WebSwingCity.KyotoShijoKarasumaNorth);
            var controller = playerGo.AddComponent<WebSwingController>();
            var rb = playerGo.AddComponent<Rigidbody>();
            rb.useGravity = false;
            rb.isKinematic = true;
            rb.interpolation = RigidbodyInterpolation.Interpolate;

            var camGo = new GameObject("Main Camera");
            camGo.tag = "MainCamera";
            var cam = camGo.AddComponent<Camera>();
            camGo.AddComponent<AudioListener>();
            controller.targetCamera = cam;

            var lightGo = new GameObject("Sun");
            var light = lightGo.AddComponent<Light>();
            light.type = LightType.Directional;
            light.intensity = 0.6f;
            light.color = new Color(0.7f, 0.8f, 1f);
            RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Trilight;
            RenderSettings.ambientSkyColor = new Color(0.2f, 0.3f, 0.5f);
            RenderSettings.ambientEquatorColor = new Color(0.2f, 0.3f, 0.5f);
            RenderSettings.ambientGroundColor = new Color(0.05f, 0.05f, 0.08f);
            RenderSettings.fog = true;
            RenderSettings.fogColor = new Color(0.06f, 0.08f, 0.15f);
            RenderSettings.fogMode = FogMode.Linear;
            RenderSettings.fogStartDistance = 400f;
            RenderSettings.fogEndDistance = 4000f;
            RenderSettings.ambientIntensity = 1.2f;

            var ropeGo = new GameObject("Rope");
            var rope = ropeGo.AddComponent<LineRenderer>();
            rope.material = new Material(Shader.Find("Sprites/Default"));
            rope.startWidth = 0.08f;
            rope.endWidth = 0.08f;
            rope.widthMultiplier = 1f;
            rope.startColor = Color.white;
            rope.endColor = Color.white;
            rope.positionCount = 2;
            controller.ropeLine = rope;

            var hitGo = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            hitGo.name = "RopeHitMarker";
            var hitCollider = hitGo.GetComponent<Collider>();
            if (hitCollider != null) DestroyImmediate(hitCollider);
            var hitRenderer = hitGo.GetComponent<MeshRenderer>();
            if (hitRenderer != null) hitRenderer.enabled = false;

            var bootGo = new GameObject("Bootstrap");
            var boot = bootGo.AddComponent<Bootstrap>();
            boot.cityRoot = cityRoot;
            boot.player = controller;

            camGo.transform.position = playerGo.transform.position + new Vector3(0f, 3f, -7f);
            camGo.transform.LookAt(playerGo.transform);

            EnsureFolder("Assets", "Scenes");
            UnityEditor.SceneManagement.EditorSceneManager.SaveScene(scene, "Assets/Scenes/WebSwing.unity");
            Debug.Log("シーンを保存しました: Assets/Scenes/WebSwing.unity");
        }

        [MenuItem("WebSwingKyoto/Enable Night")]
        public static void EnableNight()
        {
            RenderSettings.ambientIntensity = 0.4f;
            RenderSettings.ambientSkyColor = new Color(0.1f, 0.2f, 0.4f);
            RenderSettings.ambientEquatorColor = new Color(0.05f, 0.1f, 0.2f);
            RenderSettings.ambientGroundColor = new Color(0.02f, 0.02f, 0.04f);
            DynamicGI.UpdateEnvironment();
        }

        [MenuItem("WebSwingKyoto/Enable Day")]
        public static void EnableDay()
        {
            RenderSettings.ambientIntensity = 1.2f;
            RenderSettings.ambientSkyColor = new Color(0.6f, 0.7f, 0.9f);
            RenderSettings.ambientEquatorColor = new Color(0.5f, 0.6f, 0.8f);
            RenderSettings.ambientGroundColor = new Color(0.3f, 0.3f, 0.3f);
            DynamicGI.UpdateEnvironment();
        }

        private static void EnsureFolder(string parent, string folder)
        {
            var path = parent + "/" + folder;
            if (!AssetDatabase.IsValidFolder(path))
            {
                AssetDatabase.CreateFolder(parent, folder);
            }
        }
    }
}
