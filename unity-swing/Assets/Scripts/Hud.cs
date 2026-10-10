using UnityEngine;

namespace WebSwingKyoto
{
    public class Hud : MonoBehaviour
    {
        [SerializeField] private WebSwingController player;
        [SerializeField] private CesiumCity city;

        private void OnGUI()
        {
            var style = new GUIStyle(GUI.skin.label);
            style.fontSize = 16;
            style.richText = true;
            style.padding = new RectOffset(8, 8, 6, 6);

            if (player == null)
            {
                return;
            }

            string mode = city != null && city.UsePlateauData ? "PLATEAU実データ" : "手続き生成の街";

            string text =
                "<b>WebSwing Kyoto</b>  " + mode + "\n" +
                $"速度 {player.SpeedKmh:0} km/h   高度 {player.transform.position.y:0} m\n" +
                $"{(player.Attached ? $"ロープ {player.RopeLength:0} m" : "ビルを狙ってクリック(長押し)で糸＋加速、離すとジャンプ")}\n" +
                "マウス=視点  A/D=左右  W=加速巻取り  S=繰出し  R=リセット  N=昼夜  M=オート  P=データ切替";

            var rect = new Rect(10, 10, 520, 110);
            GUI.Box(rect, GUIContent.none);
            GUI.Label(rect, text, style);
        }
    }
}
