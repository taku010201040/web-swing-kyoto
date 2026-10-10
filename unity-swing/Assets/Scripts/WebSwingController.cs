using UnityEngine;

namespace WebSwingKyoto
{
    [RequireComponent(typeof(CharacterController))]
    public class WebSwingController : MonoBehaviour
    {
        [Header("Physics")]
        [SerializeField] private float gravity = 26f;
        [SerializeField] private float maxRopeLength = 260f;
        [SerializeField] private float minHeight = 2f;
        [SerializeField] private float airDrag = 0.04f;
        [SerializeField] private float pumpForce = 22f;
        [SerializeField] private float delailBoost = 1.6f;
        [SerializeField] private float delailLift = 12f;

        [Header("Control")]
        [SerializeField] private float accelForward = 60f;
        [SerializeField] private float accelSide = 40f;
        [SerializeField] private float diveBoost = 90f;
        [SerializeField] private float reelSpeed = 30f;

        [Header("Camera")]
        [SerializeField] private Camera targetCamera;
        [SerializeField] private float backDistance = 7f;
        [SerializeField] private float upOffset = 3f;
        [SerializeField] private float fovBase = 62f;
        [SerializeField] private float fovMax = 100f;

        [Header("Web Render")]
        [SerializeField] private LineRenderer ropeLine;
        [SerializeField] private Transform ropeAttachPoint;
        [SerializeField] private Material ropeHitMaterial;

        private CharacterController _controller;
        private Vector3 _velocity;
        private Vector3 _anchor;
        private float _ropeLength;
        private bool _holding;
        private bool _attached;
        private float _yaw;
        private float _pitch = -0.15f;
        private bool _autoMode = true;
        private float _autoTimer;

        private GameObject _hitMarker;

        public Vector3 Velocity => _velocity;
        public bool Attached => _attached;
        public float RopeLength => _ropeLength;
        public float SpeedKmh => _velocity.magnitude * 3.6f;

        private void Awake()
        {
            _controller = GetComponent<CharacterController>();
            if (targetCamera == null)
            {
                targetCamera = Camera.main;
            }
        }

        private void OnEnable()
        {
            transform.position = new Vector3(
                WebSwingCity.KyotoShijoKarasumaEast,
                130f,
                WebSwingCity.KyotoShijoKarasumaNorth);
            _velocity = Vector3.zero;
            _attached = false;
            _holding = false;
            _ropeLength = 0f;
            Cursor.lockState = CursorLockMode.Locked;
        }

        private void Update()
        {
            HandleLook();
            HandleInput();
            StepPhysics(Time.deltaTime);
            UpdateCamera(Time.deltaTime);
            UpdateWebRender();
        }

        private void HandleLook()
        {
            if (Input.GetMouseButtonDown(0))
            {
                Cursor.lockState = CursorLockMode.Locked;
            }

            if (Cursor.lockState == CursorLockMode.Locked)
            {
                _yaw += Input.GetAxis("Mouse X") * 2.2f;
                _pitch -= Input.GetAxis("Mouse Y") * 2.2f;
                _pitch = Mathf.Clamp(_pitch, -70f, 70f);
            }
        }

        private void HandleInput()
        {
            _holding = Input.GetMouseButton(0) || Input.GetKey(KeyCode.Space);

            if (Input.GetKeyDown(KeyCode.R))
            {
                Respawn();
            }

            if (Input.GetKeyDown(KeyCode.N))
            {
                RenderSettings.ambientIntensity = 4f - RenderSettings.ambientIntensity;
            }

            if (Input.GetKeyDown(KeyCode.M))
            {
                _autoMode = !_autoMode;
            }
        }

        private void StepPhysics(float dt)
        {
            Vector3 forward = Quaternion.Euler(_pitch, _yaw, 0f) * Vector3.forward;
            Vector3 right = Vector3.Cross(Vector3.up, forward).normalized * -1f;

            _velocity += Vector3.down * gravity * dt;
            _velocity -= _velocity * airDrag * dt;

            if (_attached)
            {
                if (Input.GetKey(KeyCode.W))
                {
                    _ropeLength = Mathf.Max(10f, _ropeLength - reelSpeed * dt);
                }

                if (Input.GetKey(KeyCode.S))
                {
                    _ropeLength = Mathf.Min(maxRopeLength, _ropeLength + reelSpeed * dt);
                }
            }
            else
            {
                if (Input.GetKey(KeyCode.W))
                {
                    _velocity += forward * accelForward * dt;
                }

                if (Input.GetKey(KeyCode.S))
                {
                    _velocity -= forward * accelForward * 0.2f * dt;
                }
            }

            if (Input.GetKey(KeyCode.A))
            {
                _velocity += right * accelSide * dt;
            }

            if (Input.GetKey(KeyCode.D))
            {
                _velocity -= right * accelSide * dt;
            }

            bool diving = !_attached && forward.y < -0.25f;
            if (diving)
            {
                float boost = Input.GetKey(KeyCode.W) ? diveBoost : 20f;
                _velocity += forward * boost * dt;
            }

            _controller.Move(_velocity * dt);

            Vector3 toAnchor = transform.position - _anchor;
            float dist = toAnchor.magnitude;

            if (_attached && dist > _ropeLength)
            {
                Vector3 radial = toAnchor / (dist > 0.0001f ? dist : 0.0001f);
                Vector3 correction = radial * _ropeLength;
                transform.position = _anchor + correction;
                float outward = Vector3.Dot(_velocity, radial);
                if (outward > 0f)
                {
                    _velocity -= radial * outward;
                }
                _velocity += forward * pumpForce * dt;
            }

            if (_attached && dist > maxRopeLength * 1.2f)
            {
                Detach();
            }

            Vector3 pos = transform.position;
            if (pos.y < minHeight)
            {
                pos.y = minHeight;
                transform.position = pos;
                if (_velocity.y < 0f)
                {
                    _velocity = new Vector3(_velocity.x, Mathf.Max(0f, _velocity.y * -1.6f), _velocity.z);
                }
                _velocity *= 0.96f;
            }

            if (_holding)
            {
                if (!_attached)
                {
                    _attached = TryAttach();
                }
            }
            else if (_attached)
            {
                Detach();
            }

            _autoTimer -= dt;
            if (_autoMode && !_attached && !_holding && pos.y > 8f && _velocity.magnitude > 4f && _autoTimer <= 0f)
            {
                _autoTimer = 0.4f;
                _attached = TryAttach();
            }
        }

        private bool TryAttach()
        {
            Vector3 origin = transform.position + Vector3.up * 1.15f;
            Vector3 forward = Quaternion.Euler(_pitch, _yaw, 0f) * Vector3.forward;
            Vector3 aim = (_holding ? forward : (forward + Vector3.up * 0.5f)).normalized;

            if (!Physics.Raycast(origin, aim, out RaycastHit hit, maxRopeLength, ~0, QueryTriggerInteraction.Ignore))
            {
                return false;
            }

            if (hit.point.y - origin.y < 3f)
            {
                return false;
            }

            _anchor = hit.point;
            _ropeLength = Mathf.Min(hit.distance, maxRopeLength);
            SpawnHitMarker(origin);
            return true;
        }

        private void Detach()
        {
            _attached = false;
            _velocity = _velocity * delailBoost + Vector3.up * delailLift;
            if (_hitMarker != null)
            {
                Destroy(_hitMarker);
                _hitMarker = null;
            }
        }

        private void Respawn()
        {
            transform.position = new Vector3(
                WebSwingCity.KyotoShijoKarasumaEast,
                130f,
                WebSwingCity.KyotoShijoKarasumaNorth);
            _velocity = Vector3.zero;
            _attached = false;
            _holding = false;
            Detach();
        }

        private void UpdateCamera(float dt)
        {
            Vector3 forward = Quaternion.Euler(_pitch, _yaw, 0f) * Vector3.forward;
            Vector3 want = transform.position - forward * backDistance + Vector3.up * upOffset;
            targetCamera.transform.position = Vector3.Lerp(
                targetCamera.transform.position, want, 1f - Mathf.Pow(0.0005f, dt));
            targetCamera.transform.LookAt(transform.position + forward * 14f + _velocity * 0.2f);

            float targetFov = Mathf.Clamp(fovBase + _velocity.magnitude * 0.7f, fovBase, fovMax);
            targetCamera.fieldOfView = Mathf.Lerp(targetCamera.fieldOfView, targetFov, Mathf.Min(1f, dt * 4f));
        }

        private void UpdateWebRender()
        {
            if (ropeLine == null)
            {
                return;
            }

            ropeLine.enabled = _attached;
            if (_attached)
            {
                Vector3 attach = ropeAttachPoint != null ? ropeAttachPoint.position : transform.position;
                ropeLine.positionCount = 2;
                ropeLine.SetPosition(0, attach);
                ropeLine.SetPosition(1, _anchor);
            }
        }

        private void SpawnHitMarker(Vector3 origin)
        {
            if (_hitMarker == null)
            {
                _hitMarker = GameObject.CreatePrimitive(PrimitiveType.Sphere);
                _hitMarker.name = "RopeHitMarker";
                _hitMarker.transform.localScale = Vector3.one * 1.8f;
                var col = _hitMarker.GetComponent<Collider>();
                if (col != null) Destroy(col);
                _hitMarker.GetComponent<Renderer>().sharedMaterial =
                    ropeHitMaterial != null ? ropeHitMaterial : new Material(Shader.Find("Standard"));
            }

            _hitMarker.transform.position = _anchor;
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.red;
            Gizmos.DrawWireSphere(_anchor, 1.5f);
        }
    }
}
