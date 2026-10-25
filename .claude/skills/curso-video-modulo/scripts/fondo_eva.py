"""Cambia el fondo azul del avatar de EVA (look 360c41ac…, 4:5, 1080×1350) por un fondo claro del curso (sin créditos).
Matte por «azulidad» (B - max(R,G)), con la cara protegida y sin derrame azul en los bordes.
Uso: python fondo_eva.py entrada.mp4 salida.mp4 [--cuadro t salida.png]"""
import sys, subprocess, numpy as np
from PIL import Image
W, H = 1080, 1350
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
# fondo: degradado suave del curso (wash teal arriba a la izquierda -> casi blanco)
c1, c2 = np.array([214, 233, 238], np.float32), np.array([246, 249, 250], np.float32)
g = np.clip((xx / W * 0.45 + yy / H * 0.55), 0, 1)[..., None]
FONDO = c1 * (1 - g) + c2 * g
# zona protegida: la cara (los ojos de EVA son azules)
cara = (((xx - 540) / 175) ** 2 + ((yy - 610) / 235) ** 2) <= 1

def procesar(f):
    f = f.astype(np.float32)
    r, gch, b = f[..., 0], f[..., 1], f[..., 2]
    azul = b - np.maximum(r, gch)
    a = np.clip((azul - 22) / (55 - 22), 0, 1)          # 1 = fondo
    # arriba (sobre los hombros) el azul es más oscuro: se mide por proporción y no por diferencia
    prop = b / (np.maximum(r, gch) + 1)
    a_arriba = np.clip((prop - 1.3) / 0.3, 0, 1) * (b > 40)
    a = np.where(yy < 450, np.maximum(a, a_arriba), a)
    a[cara] = 0
    a = a[..., None]
    # quitar el derrame azul en bordes: el azul no puede pasar mucho del máximo de R y G
    sin = f.copy(); sin[..., 2] = np.minimum(b, np.maximum(r, gch) + 18)
    borde = (a > 0.02) & (a < 0.98)
    fg = np.where(borde | (a[..., 0:1] > 0), sin, f)
    return (fg * (1 - a) + FONDO * a).clip(0, 255).astype(np.uint8)

src, out = sys.argv[1], sys.argv[2]
if '--cuadro' in sys.argv:
    t = sys.argv[sys.argv.index('--cuadro') + 1]
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-ss', t, '-i', src, '-frames:v', '1', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], capture_output=True).stdout
    Image.fromarray(procesar(np.frombuffer(raw, np.uint8).reshape(H, W, 3))).save(out); sys.exit()
dec = subprocess.Popen(['ffmpeg', '-v', 'error', '-i', src, '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], stdout=subprocess.PIPE)
enc = subprocess.Popen(['ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', '25', '-i', '-',
                        '-i', src, '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-crf', '16', '-preset', 'medium', '-pix_fmt', 'yuv420p',
                        '-c:a', 'copy', out], stdin=subprocess.PIPE)
n = 0
while True:
    buf = dec.stdout.read(W * H * 3)
    if len(buf) < W * H * 3: break
    enc.stdin.write(procesar(np.frombuffer(buf, np.uint8).reshape(H, W, 3)).tobytes()); n += 1
enc.stdin.close(); enc.wait(); print(n, 'cuadros ->', out)
