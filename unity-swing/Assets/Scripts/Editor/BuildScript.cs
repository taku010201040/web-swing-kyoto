using System.IO;
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace WebSwingKyoto.EditorTools
{
    // シーンを自動生成して Windows スタンドアロン向けにビルドする。
    // 使い方: Unity のメニュー「WebSwingKyoto/Build Windows」または
    //         batchmode: Unity.exe -batchmode -quit -projectPath <path> -executeMethod WebSwingKyoto.EditorTools.BuildScript.BuildWindows
    public static class BuildScript
    {
        private const string ScenePath = "Assets/Scenes/WebSwing.unity";
        private const string BuildDir = "Builds/Windows";
        private const string ExePath = BuildDir + "/WebSwingKyoto.exe";
        private const string StatusPath = "Builds/build_status.txt";

        [MenuItem("WebSwingKyoto/Build Windows")]
        public static void BuildWindows()
        {
            bool ok = Build(out string message);
            Debug.Log(message);

            File.WriteAllText(StatusPath, message);
            EditorApplication.Exit(ok ? 0 : 1);
        }

        private static bool Build(out string message)
        {
            CreateScene();

            if (!Directory.Exists("Builds"))
            {
                Directory.CreateDirectory("Builds");
            }

            if (!Directory.Exists(BuildDir))
            {
                Directory.CreateDirectory(BuildDir);
            }

            EditorBuildSettings.scenes =
                new[] { new UnityEditor.Build.EditorBuildSettingsScene(ScenePath, true) };

            var options = new BuildPlayerOptions
            {
                scenes = new[] { ScenePath },
                locationPathName = ExePath,
                target = BuildTarget.StandaloneWindows64,
                targetGroup = BuildTargetGroup.Standalone,
                options = BuildOptions.None
            };

            PlayerSettings.productName = "WebSwing Kyoto";
            PlayerSettings.companyName = "Hackathon";
            PlayerSettings.fullScreenMode = FullScreenMode.Windowed;
            PlayerSettings.defaultScreenWidth = 1600;
            PlayerSettings.defaultScreenHeight = 900;
            PlayerSettings.resizableWindow = true;
            PlayerSettings.runInBackground = true;
            PlayerSettings.SetScriptingBackend(BuildTargetGroup.Standalone, ScriptingImplementation.Mono2x);

            BuildReport report = BuildPipeline.BuildPlayer(options);
            BuildSummary summary = report.summary;

            if (summary.result == BuildResult.Succeeded)
            {
                message =
                    $"BUILD SUCCEEDED\npath={summary.outputPath}\nsizeMB={summary.totalSize / 1048576.0:0.0}\ntime={summary.totalTime}";
                return true;
            }

            message =
                $"BUILD FAILED result={summary.result} errors={summary.totalErrors} warnings={summary.totalWarnings} time={summary.totalTime}";
            return false;
        }

        private static void CreateScene()
        {
            var scene = EditorSceneManager.NewScene(
                NewSceneSetup.EmptyScene, NewSceneMode.Single);

            // ルート: ジオ参照 (PLATEAUタイルはここの子に置く)
            var geoGo = new GameObject("Georeference");
            var geo = geoGo.AddComponent<CesiumForUnity.CesiumGeoreference>();
            geo.latitude = 34.9941;
            geo.longitude = 135.7581;
            geo.height = 0;
            geoGo.transform.position = Vector3.zero;

            // 街 (手続き生成・フォールバック)
            var cityRoot = new GameObject("City").transform;
            cityRoot.SetParent(geoGo.transform, false);

            // プレイヤー
            var playerGo = new GameObject("Player");
            playerGo.transform.SetParent(geoGo.transform, false);
            playerGo.transform.localPosition = new Vector3(
                WebSwingCity.KyotoShijoKarasumaEast, 130f, WebSwingCity.KyotoShijoKarasumaNorth);
            var controller = playerGo.AddComponent<WebSwingController>();

            // カメラ (ジオリファレンス配下に置く)
            var camGo = new GameObject("Main Camera");
            camGo.tag = "MainCamera";
            camGo.transform.SetParent(playerGo.transform, false);
            camGo.transform.localPosition = new Vector3(0f, 3f, -7f);
            camGo.transform.localRotation = Quaternion.identity;
            var cam = camGo.AddComponent<Camera>();
            cam.nearClipPlane = 0.5f;
            cam.farClipPlane = 20000f;
            cam.fieldOfView = 65f;
            camGo.AddComponent<AudioListener>();
            controller.targetCamera = cam;

            // ロープ
            var ropeGo = new GameObject("Rope");
            ropeGo.transform.SetParent(playerGo.transform, false);
            var rope = ropeGo.AddComponent<LineRenderer>();
            rope.material = new Material(Shader.Find("Sprites/Default"));
            rope.startWidth = 0.08f;
            rope.endWidth = 0.08f;
            rope.positionCount = 2;
            rope.useWorldSpace = true;
            controller.ropeLine = rope;
            var attach = new GameObject("RopeAttach");
            attach.transform.SetParent(playerGo.transform, false);
            attach.transform.localPosition = new Vector3(0f, 1.15f, 0f);
            controller.ropeAttachPoint = attach.transform;

            var hitMarker = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            hitMarker.name = "RopeHitMarker";
            Object.DestroyImmediate(hitMarker.GetComponent<Collider>());
            hitMarker.transform.localScale = Vector3.one * 1.8f;
            hitMarker.transform.SetParent(geoGo.transform, false);
            hitMarker.GetComponent<MeshRenderer>().enabled = false;
            controller.ropeHitMaterial = hitMarker.GetComponent<MeshRenderer>().sharedMaterial;
            Object.DestroyImmediate(hitMarker);

            // ライティング・フォグ (夜)
            var lightGo = new GameObject("Sun");
            lightGo.transform.SetParent(geoGo.transform, false);
            var light = lightGo.AddComponent<Light>();
            light.type = LightType.Directional;
            light.intensity = 0.5f;
            light.color = new Color(0.65f, 0.75f, 1f);
            SetNight(true);

            // 起動・HUD
            var bootGo = new GameObject("Bootstrap");
            bootGo.transform.SetParent(geoGo.transform, false);
            var boot = bootGo.AddComponent<Bootstrap>();
            boot.cityRoot = cityRoot;
            boot.player = controller;

            var cesiumCity = bootGo.AddComponent<CesiumCity>();
            cesiumCity.cityRoot = cityRoot;
            cesiumCity.player = controller;

            var hud = bootGo.AddComponent<Hud>();
            hud.player = controller;
            hud.city = cesiumCity;

            if (!Directory.Exists("Assets/Scenes"))
            {
                AssetDatabase.CreateAssetFolder("Assets", "Scenes");
            }

            EditorSceneManager.SaveScene(scene, ScenePath);
            AssetDatabase.SaveAssets();
        }

        private static void SetNight(bool night)
        {
            if (night)
            {
                RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Trilight;
                RenderSettings.ambientIntensity = 0.6f;
                RenderSettings.ambientSkyColor = new Color(0.10f, 0.16f, 0.30f);
                RenderSettings.ambientEquatorColor = new Color(0.07f, 0.12f, 0.24f);
                RenderSettings.ambientGroundColor = new Color(0.02f, 0.02f, 0.05f);
                RenderSettings.fog = true;
                RenderSettings.fogColor = new Color(0.03f, 0.04f, 0.09f);
                RenderSettings.fogMode = FogMode.Linear;
                RenderSettings.fogStartDistance = 400f;
                RenderSettings.fogEndDistance = 4000f;
            }
            else
            {
                RenderSettings.ambientMode = UnityEngine.Rendering.AmbientMode.Trilight;
                RenderSettings.ambientIntensity = 1.2f;
                RenderSettings.ambientSkyColor = new Color(0.6f, 0.72f, 0.9f);
                RenderSettings.ambientEquatorColor = new Color(0.5f, 0.6f, 0.8f);
                RenderSettings.ambientGroundColor = new Color(0.3f, 0.3f, 0.3f);
                RenderSettings.fog = true;
                RenderSettings.fogColor = new Color(0.65f, 0.78f, 0.95f);
                RenderSettings.fogMode = FogMode.Linear;
                RenderSettings.fogStartDistance = 600f;
                RenderSettings.fogEndDistance = 6000f;
            }
        }

        [MenuItem("WebSwingKyoto/Set Night")]
        public static void SetNightMenu() => SetNight(true);

        [MenuItem("WebSwingKyoto/Set Day")]
        public static void SetDayMenu() => SetNight(false);
    }
}
