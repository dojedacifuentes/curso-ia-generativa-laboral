"""Exporta los subtítulos a .srt y arma el PDF de slides desde el video final.

Uso:
  python exportar_srt_y_slides.py srt   ruta/video.html  salida.srt
  python exportar_srt_y_slides.py pdf   video_final.mp4  salida.pdf  T1 T2 T3 ...

Para el PDF elige tiempos SIN subtítulo en pantalla (en las pausas entre cues) y con
cada escena completa (justo antes de su cambio de escena).
"""
import re, subprocess, sys, pathlib, tempfile
from PIL import Image

mode = sys.argv[1]
if mode == 'srt':
    html = pathlib.Path(sys.argv[2]).read_text(encoding="utf-8")
    blk = html[html.index('const SUBS = ['):html.index('];', html.index('const SUBS = ['))]
    items = re.findall(r'\[([\d.]+),([\d.]+),"(.*?)"\]', blk)
    def ts(x):
        ms = int(round(float(x) * 1000)); h, ms = divmod(ms, 3600000); m, ms = divmod(ms, 60000); s, ms = divmod(ms, 1000)
        return f'{h:02d}:{m:02d}:{s:02d},{ms:03d}'
    out = [f"{i}\n{ts(a)} --> {ts(b)}\n{t.replace('<br>', chr(10))}\n" for i, (a, b, t) in enumerate(items, 1)]
    pathlib.Path(sys.argv[3]).write_text('\n'.join(out), encoding='utf-8')
    print(len(items), 'subtítulos ->', sys.argv[3])
elif mode == 'pdf':
    video, pdf, times = sys.argv[2], sys.argv[3], sys.argv[4:]
    tmp = pathlib.Path(tempfile.mkdtemp())
    ims = []
    for k, t in enumerate(times):
        f = tmp / f'{k:02d}.png'
        subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-ss', t, '-i', video, '-frames:v', '1', str(f)], check=True)
        if f.exists():
            ims.append(Image.open(f).convert('RGB'))
    ims[0].save(pdf, save_all=True, append_images=ims[1:], resolution=144, quality=92)
    print(len(ims), 'slides ->', pdf)
