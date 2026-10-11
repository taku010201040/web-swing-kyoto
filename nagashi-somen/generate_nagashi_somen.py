"""流しそうめん 3Dモデル生成スクリプト
実寸大 (メートル, Y-up) / 出力: nagashi-somen.glb
構成: 竹の樋(半割パイプ4m) / 水面 / そうめん8束 / 竹の脚x3 / 上部バケツ / 下部ザル+つゆ椀+台 / 落水
"""
import numpy as np
import trimesh
from trimesh.visual.material import PBRMaterial
import os

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_GLB = os.path.join(OUT_DIR, "nagashi-somen.glb")

# ---------- 寸法 (m) ----------
L = 4.0          # 樋の長さ
R_OUT = 0.07     # 樋 外半径
THICK = 0.012    # 竹の厚み
R_IN = R_OUT - THICK
Y0 = 0.90        # 上端の中心高さ
SLOPE = 0.05     # 勾配 (5% -> 4mで20cm低下)
WATER_DROP = 0.015  # 縁からの水面下げ

def mat(color, roughness=0.8, metallic=0.0, alpha=1.0, double=False):
    m = PBRMaterial(baseColorFactor=[c / 255 for c in color] + [alpha],
                    metallicFactor=metallic, roughnessFactor=roughness,
                    doubleSided=double)
    if alpha < 1.0:
        m.alphaMode = "BLEND"
    return m

def M(vertices, faces, material):
    m = trimesh.Trimesh(np.asarray(vertices), np.asarray(faces), process=True)
    m.visual.material = material
    return m

MAT_BAMBOO_OUT = mat((200, 164, 106), 0.8)
MAT_BAMBOO_IN = mat((232, 216, 168), 0.9, double=True)
MAT_NODE = mat((168, 129, 60), 0.85)
MAT_LEG = mat((156, 122, 60), 0.85)
MAT_WATER = mat((79, 184, 214), 0.15, 0.0, 0.65, double=True)
MAT_SOMEN = mat((255, 255, 255), 0.35)
MAT_ZARU = mat((217, 179, 106), 0.9)
MAT_BOWL = mat((30, 58, 138), 0.4)
MAT_SOUP = mat((60, 35, 15), 0.3)
MAT_BUCKET = mat((139, 94, 46), 0.85)
MAT_STAND = mat((120, 84, 50), 0.9)

def yc(z):
    return Y0 - SLOPE * z

def half_pipe(R, nl=48, na=20):
    verts = []
    for i in range(nl + 1):
        z = L * i / nl
        y0 = yc(z)
        for j in range(na + 1):
            phi = np.pi + np.pi * j / na
            verts.append([R * np.cos(phi), y0 + R * np.sin(phi), z])
    verts = np.array(verts)
    faces = []
    for i in range(nl):
        for j in range(na):
            a = i * (na + 1) + j
            b = a + na + 1
            faces += [[a, b, a + 1], [a + 1, b, b + 1]]
    return verts, np.array(faces)

def strip(v_outer, v_inner):
    """2列の頂点列をつなぐ帯メッシュ"""
    n = len(v_outer)
    v = np.vstack([v_outer, v_inner])
    f = []
    for i in range(n - 1):
        f += [[i, n + i, i + 1], [i + 1, n + i, n + i + 1]]
    return v, np.array(f)

NL, NA = 48, 20
scene = trimesh.Scene()

# --- 樋: 外面 ---
vo, fo = half_pipe(R_OUT, NL, NA)
scene.add_geometry(M(vo, fo, MAT_BAMBOO_OUT), geom_name="trough_outer")
# --- 樋: 内面 (法線反転) ---
vi, fi = half_pipe(R_IN, NL, NA)
fi = fi[:, ::-1]
scene.add_geometry(M(vi, fi, MAT_BAMBOO_IN), geom_name="trough_inner")

# --- 縁 (左右のリム) ---
for edge in (0, NA):
    idx = np.arange(NL + 1) * (NA + 1) + edge
    vr, fr = strip(vo[idx], vi[idx])
    scene.add_geometry(M(vr, fr, MAT_NODE), geom_name=f"rim_{edge}")
# --- 端リング (上端・下端) ---
for end in (0, NL):
    ring = np.arange(NA + 1) + end * (NA + 1)
    vr, fr = strip(vo[ring], vi[ring])
    scene.add_geometry(M(vr, fr, MAT_NODE), geom_name=f"endring_{end}")

# --- 竹の節リング x6 ---
tilt = np.arctan(SLOPE)
Rx = trimesh.transformations.rotation_matrix(tilt, [1, 0, 0])
for k, zk in enumerate(np.linspace(0.3, 3.7, 6)):
    ring = trimesh.creation.torus(R_OUT + 0.001, 0.006)
    ring.apply_transform(Rx)
    ring.apply_translation([0, yc(zk), zk])
    ring.visual.material = MAT_NODE
    scene.add_geometry(ring, geom_name=f"node_{k}")

# --- 水面 (平面) ---
wv, wf = [], []
for i in range(NL + 1):
    z = L * i / NL
    yw = yc(z) - WATER_DROP
    dy = yw - yc(z)
    w = np.sqrt(max(R_IN ** 2 - dy ** 2, 1e-8))
    wv += [[-w, yw, z], [w, yw, z]]
wv = np.array(wv)
for i in range(NL):
    a = i * 2
    wf += [[a, a + 2, a + 1], [a + 1, a + 2, a + 3]]
scene.add_geometry(M(wv, np.array(wf), MAT_WATER), geom_name="water")

# --- そうめん 8束 (白カプセル、流れ方向に配置) ---
def align_longest_to_z(mesh):
    ax = int(np.argmax(mesh.extents))
    basis = np.zeros(3)
    basis[ax] = 1.0
    R = trimesh.geometry.align_vectors(basis, np.array([0, 0, 1.0]))
    R = np.asarray(R)
    if R.shape == (4, 4):
        mesh.apply_transform(R)
    else:
        T4 = np.eye(4)
        T4[:3, :3] = R
        mesh.apply_transform(T4)
    return mesh

rng = np.random.default_rng(7)
for k in range(8):
    zk = float(rng.uniform(0.4, 3.6))
    yw = yc(zk) - WATER_DROP
    wmax = np.sqrt(max(R_IN ** 2 - WATER_DROP ** 2, 1e-8)) - 0.015
    xk = float(rng.uniform(-wmax, wmax))
    cap = trimesh.creation.capsule(height=0.22, radius=0.009)
    align_longest_to_z(cap)
    yaw = float(rng.uniform(-0.12, 0.12))
    cap.apply_transform(trimesh.transformations.rotation_matrix(yaw, [0, 1, 0]))
    cap.apply_translation([xk, yw + 0.004, zk])
    cap.visual.material = MAT_SOMEN
    scene.add_geometry(cap, geom_name=f"somen_{k}")

# --- 2点間をつなぐ竹ポール ---
_probe = trimesh.creation.cylinder(radius=1.0, height=2.0)
_probe_ax = int(np.argmax(_probe.extents))
_probe_basis = np.zeros(3)
_probe_basis[_probe_ax] = 1.0

def pole(p1, p2, r, material, name):
    p1, p2 = np.array(p1, float), np.array(p2, float)
    d = p2 - p1
    h = float(np.linalg.norm(d))
    m = trimesh.creation.cylinder(radius=r, height=h, sections=12)
    R = np.asarray(trimesh.geometry.align_vectors(_probe_basis, d / h))
    T = np.eye(4)
    T[:3, :3] = R[:3, :3] if R.shape == (4, 4) else R
    T[:3, 3] = (p1 + p2) / 2
    m.apply_transform(T)
    m.visual.material = material
    scene.add_geometry(m, geom_name=name)

# --- 脚 x3 (X型 + 貫) ---
for k, zk in enumerate([0.5, 2.0, 3.5]):
    y = yc(zk)
    pole([-0.28, 0, zk - 0.03], [0.28, y + 0.02, zk + 0.03], 0.024, MAT_LEG, f"legA_{k}")
    pole([0.28, 0, zk + 0.03], [-0.28, y + 0.02, zk - 0.03], 0.024, MAT_LEG, f"legB_{k}")
    pole([-0.35, y - R_OUT - 0.02, zk], [0.35, y - R_OUT - 0.02, zk], 0.02, MAT_LEG, f"bar_{k}")

# --- 上部: 給水バケツ + 樋への注ぎ口 ---
# trimeshのcylinderは軸がZなので、縦置きにはX90°回転が必要
RX90 = trimesh.transformations.rotation_matrix(np.pi / 2, [1, 0, 0])
bucket = trimesh.creation.cylinder(radius=0.13, height=0.26, sections=20)
bucket.apply_transform(RX90)
bucket.apply_translation([0, Y0 + 0.28, -0.35])
bucket.visual.material = MAT_BUCKET
scene.add_geometry(bucket, geom_name="bucket")
bwater = trimesh.creation.cylinder(radius=0.115, height=0.01, sections=20)
bwater.apply_transform(RX90)
bwater.apply_translation([0, Y0 + 0.40, -0.35])
bwater.visual.material = MAT_WATER
scene.add_geometry(bwater, geom_name="bucket_water")
pole([0, Y0 + 0.18, -0.35], [0, yc(0) + 0.02, 0.0], 0.03, MAT_BAMBOO_OUT, "inlet")

# --- 下部: 台 + ザル + つゆ椀 + 落水 ---
stand = trimesh.creation.box([0.7, 0.38, 0.7])
stand.apply_translation([0, 0.19, 4.35])
stand.visual.material = MAT_STAND
scene.add_geometry(stand, geom_name="stand")

zaru = trimesh.creation.cylinder(radius=0.20, height=0.06, sections=24)
zaru.apply_transform(RX90)
zaru.apply_translation([0, 0.41, 4.35])
zaru.visual.material = MAT_ZARU
scene.add_geometry(zaru, geom_name="zaru")
zaru_rim = trimesh.creation.torus(0.20, 0.012)
zaru_rim.apply_transform(trimesh.transformations.rotation_matrix(np.pi / 2, [1, 0, 0]))
zaru_rim.apply_translation([0, 0.44, 4.35])
zaru_rim.visual.material = MAT_NODE
scene.add_geometry(zaru_rim, geom_name="zaru_rim")

bowl = trimesh.creation.cylinder(radius=0.055, height=0.07, sections=16)
bowl.apply_transform(RX90)
bowl.apply_translation([0.28, 0.415, 4.15])
bowl.visual.material = MAT_BOWL
scene.add_geometry(bowl, geom_name="bowl")
soup = trimesh.creation.cylinder(radius=0.047, height=0.008, sections=16)
soup.apply_transform(RX90)
soup.apply_translation([0.28, 0.45, 4.15])
soup.visual.material = MAT_SOUP
scene.add_geometry(soup, geom_name="soup")

# 落水 (樋の出口 -> ザル): poleヘルパーで2点間を結ぶ
ze = L
ye = yc(ze) - WATER_DROP
_p1 = np.array([0.0, ye, ze + 0.02])
_p2 = np.array([0.0, 0.47, 4.32])
_d = _p2 - _p1
fall = trimesh.creation.cylinder(radius=0.018, height=float(np.linalg.norm(_d)), sections=10)
_Rf = np.asarray(trimesh.geometry.align_vectors(_probe_basis, _d / np.linalg.norm(_d)))
_Tf = np.eye(4)
_Tf[:3, :3] = _Rf[:3, :3] if _Rf.shape == (4, 4) else _Rf
_Tf[:3, 3] = (_p1 + _p2) / 2
fall.apply_transform(_Tf)
fall.visual.material = MAT_WATER
scene.add_geometry(fall, geom_name="waterfall")

# --- 出力 ---
scene.export(OUT_GLB)
bounds = scene.bounds
print(f"OK -> {OUT_GLB}")
print(f"meshes: {len(scene.geometry)}, bounds(min): {bounds[0].round(3)}, max: {bounds[1].round(3)}")
print(f"size: {os.path.getsize(OUT_GLB) / 1024:.1f} KB")
