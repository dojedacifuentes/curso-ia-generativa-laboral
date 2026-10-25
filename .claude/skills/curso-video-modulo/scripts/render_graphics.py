"""Renderiza la capa gráfica (slides + diagramas + subtítulos) de video.html a graphics.mp4.

Uso:  python render_graphics.py ruta/video.html DURACION_SEGUNDOS

- Recorre el video a 30 fps llamando renderAt(t) del HTML.
- Solo toma captura cuando cambia el estado visual (rápido: ~2,5 min para 2:40).
- Guarda slots.json (posición y tiempos de los recuadros donde irán avatar y clips).
"""
import json, pathlib, subprocess, sys, time
from playwright.sync_api import sync_playwright

HTML = pathlib.Path(sys.argv[1]).resolve()
DUR = float(sys.argv[2])
ROOT = HTML.parent
FPS = 30
N = int(round(DUR * FPS))
OUT = ROOT / 'graphics.mp4'

ff = subprocess.Popen(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
    '-f', 'image2pipe', '-framerate', str(FPS), '-c:v', 'png', '-i', '-',
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '8', '-pix_fmt', 'yuv420p',
    '-r', str(FPS), str(OUT)], stdin=subprocess.PIPE)

t0, shots = time.time(), 0
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1920, 'height': 1080})
    pg.goto(HTML.as_uri())
    pg.evaluate('document.fonts.ready')
    pg.wait_for_function('[...document.images].every(i => i.complete)')
    pg.wait_for_timeout(400)
    (ROOT / 'slots.json').write_text(json.dumps(pg.evaluate('slotInfo()'), indent=1), encoding='utf-8')
    last_sig, last_png = None, None
    for i in range(N):
        sig = pg.evaluate(f'renderAt({i / FPS:.5f})')
        if sig != last_sig:
            last_png = pg.screenshot(type='png'); last_sig = sig; shots += 1
        ff.stdin.write(last_png)
        if i % 600 == 0:
            print(f'frame {i}/{N} capturas={shots} {time.time()-t0:.0f}s', flush=True)
    b.close()
ff.stdin.close(); ff.wait()
print(f'listo: {N} cuadros, {shots} capturas, {time.time()-t0:.0f}s -> {OUT}')
