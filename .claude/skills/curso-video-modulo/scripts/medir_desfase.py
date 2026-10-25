"""Mide el desfase entre el audio del video de HeyGen y el MP3 que se subió.

Uso:  python medir_desfase.py video_heygen.mp4 audio_subido.mp3

Resultado positivo = el video HeyGen va atrasado ese número de segundos.
Ese valor va en config.json -> avatar.offset (en el M1 fue +0.023 s).
"""
import subprocess, sys, numpy as np

def pcm(path):
    raw = subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-i', path, '-vn', '-ac', '1',
                          '-ar', '16000', '-f', 'f32le', '-'], capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32)

a, b = pcm(sys.argv[1]), pcm(sys.argv[2])
seg = slice(16000, 16000 * 9)
xs = a[seg]
best, bestc = 0, -1
for L in range(-8000, 8001, 8):
    ys = b[seg.start + L: seg.stop + L]
    if len(ys) < len(xs):
        continue
    c = float(np.dot(xs, ys) / (np.linalg.norm(xs) * np.linalg.norm(ys) + 1e-9))
    if c > bestc:
        best, bestc = L, c
print(f'offset = {-best / 16000:+.3f} s   (correlación {bestc:.3f})')
