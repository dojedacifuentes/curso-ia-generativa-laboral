"""Arma un clip 16:9 a partir de capturas de pantalla reales (p. ej. Gemini escribiendo y respondiendo).

Uso:  python screencast.py salida.mp4 --recorte x0,y0,x1,y1 captura1.jpg:0.45 captura2.jpg:0.45 ... [--zoom 1.06]

- Cada captura se muestra el tiempo indicado (segundos); el cambio entre una y otra es un corte, como al escribir.
- --recorte deja fuera lo que no debe verse (barra lateral con el nombre del usuario, historial, cursor).
  Se ajusta a 16:9 desde la esquina superior izquierda del recorte.
- --zoom acerca la imagen lentamente durante todo el clip (Ken Burns).
"""
import sys, subprocess, tempfile, pathlib
from PIL import Image

args = sys.argv[1:]
out = args.pop(0)
x0, y0, x1, y1 = map(int, args[args.index('--recorte') + 1].split(','))
zoom = float(args[args.index('--zoom') + 1]) if '--zoom' in args else 1.0
items = [a for a in args if ':' in a and not a.startswith('--') and a != args[args.index('--recorte') + 1]]
W, H, FPS = 1280, 720, 30
w = x1 - x0; h = round(w * 9 / 16)
if h > y1 - y0:
    h = y1 - y0; w = round(h * 16 / 9)
tmp = pathlib.Path(tempfile.mkdtemp())
frames, n = [], 0
for it in items:
    ruta, dur = it.rsplit(':', 1)
    im = Image.open(ruta).convert('RGB')
    sx, sy = im.width / 1536, im.height / 695           # capturas a escala reducida se llevan al marco 1536×695
    im = im.crop((round(x0 * sx), round(y0 * sy), round((x0 + w) * sx), round((y0 + h) * sy))).resize((W, H), Image.LANCZOS)
    for _ in range(max(1, round(float(dur) * FPS))):
        frames.append(im)
total = len(frames)
for i, im in enumerate(frames):
    z = 1 + (zoom - 1) * i / max(1, total - 1)
    if z > 1:
        cw, ch = W / z, H / z
        im = im.crop(((W - cw) / 2, (H - ch) / 2, (W + cw) / 2, (H + ch) / 2)).resize((W, H), Image.LANCZOS)
    im.save(tmp / f'{i:05d}.png')
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-framerate', str(FPS), '-i', str(tmp / '%05d.png'), '-c:v', 'libx264',
                '-crf', '16', '-pix_fmt', 'yuv420p', out], check=True)
print(f'{len(items)} capturas, {total / FPS:.2f} s -> {out}')
