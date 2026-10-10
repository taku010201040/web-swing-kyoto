using UnityEngine;

namespace WebSwingKyoto
{
    // スイング用の静的ビル。Raycast でアンカー判定するため BoxCollider を持つ。
    [RequireComponent(typeof(BoxCollider))]
    public sealed class Building : MonoBehaviour
    {
        [SerializeField] private int seed;

        private void OnValidate()
        {
            var col = GetComponent<BoxCollider>();
            if (col != null) col.size = Vector3.one;
        }
    }
}
