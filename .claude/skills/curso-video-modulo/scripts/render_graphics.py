"""Renderiza la capa gráfica (slides + diagramas + subtítulos) de video.html a graphics.mp4.

Uso:  python render_graphics.py ruta/video.html DURACION_SEGUNDOS [--partes 4]

- Recorre el video a 30 fps llamando renderAt(t) del HTML.
- Solo toma captura cuando cambia el estado visual. Como la cámara se mueve en cada cuadro, casi todos cambian.
- --partes N (30-10): parte el video en N tramos, cada uno con su navegador en paralelo, y los une sin recodificar.
  Con 4 tramos en el PC 1 (12 hilos, 7 GB) baja de ~21 a ~6 min para 2:20. No pasar de 4 por la memoria.
- Las capturas usan PNG rápido (Page.captureScreenshot con optimizeForSpeed).
- Guarda slots.json (posición y tiempos de los recuadros donde irán avatar y clips).
"""
import base64, json, pathlib, subprocess, sys, time
from playwright.sync_api import sync_playwright

HTML = pathlib.Path(sys.argv[1]).resolve()
DUR = float(sys.argv[2])
ROOT = HTML.parent
FPS = 30
N = int(round(DUR * FPS))
arg = lambda k, d: sys.argv[sys.argv.index(k) + 1] if k in sys.argv else d
PARTES = int(arg('--partes', '1'))
TRAMO = int(arg('--tramo', '-1'))


def render(i0, i1, out, guardar_slots):
    ff = subprocess.Popen(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y',
        '-f', 'image2pipe', '-framerate', str(FPS), '-c:v', 'png', '-i', '-',
        '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '8', '-pix_fmt', 'yuv420p',
        '-r', str(FPS), str(out)], stdin=subprocess.PIPE)
    t0, shots = time.time(), 0
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={'width': 1920, 'height': 1080})
        pg.goto(HTML.as_uri())
        pg.evaluate('document.fonts.ready')
        pg.wait_for_function('[...document.images].every(i => i.complete)')
        pg.wait_for_timeout(400)
        if guardar_slots:
            (ROOT / 'slots.json').write_text(json.dumps(pg.evaluate('slotInfo()'), indent=1), encoding='utf-8')
        cdp = pg.context.new_cdp_session(pg)
        last_sig, last_png = None, None
        for i in range(i0, i1):
            sig = pg.evaluate(f'renderAt({i / FPS:.5f})')
            if sig != last_sig:
                last_png = base64.b64decode(cdp.send('Page.captureScreenshot', {'format': 'png', 'optimizeForSpeed': True})['data'])
                last_sig = sig; shots += 1
            ff.stdin.write(last_png)
            if (i - i0) % 600 == 0:
                print(f'[{i0}-{i1}] frame {i}/{N} capturas={shots} {time.time()-t0:.0f}s', flush=True)
        b.close()
    ff.stdin.close(); ff.wait()
    return shots, time.time() - t0


OUT = ROOT / 'graphics.mp4'
if TRAMO >= 0:  # un tramo, lanzado por el proceso principal
    i0, i1 = N * TRAMO // PARTES, N * (TRAMO + 1) // PARTES
    s, dt = render(i0, i1, ROOT / f'_graphics_{TRAMO}.mp4', TRAMO == 0)
    print(f'tramo {TRAMO}: {i1 - i0} cuadros, {s} capturas, {dt:.0f}s')
elif PARTES <= 1:
    s, dt = render(0, N, OUT, True)
    print(f'listo: {N} cuadros, {s} capturas, {dt:.0f}s -> {OUT}')
else:
    t0 = time.time()
    procs = [subprocess.Popen([sys.executable, __file__, str(HTML), str(DUR), '--partes', str(PARTES), '--tramo', str(k)])
             for k in range(PARTES)]
    if any(p.wait() for p in procs):
        sys.exit('falló un tramo')
    lista = ROOT / '_graphics_lista.txt'
    lista.write_text(''.join(f"file '_graphics_{k}.mp4'\n" for k in range(PARTES)), encoding='utf-8')
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', str(lista),
                    '-c', 'copy', str(OUT)], check=True)
    for k in range(PARTES):
        (ROOT / f'_graphics_{k}.mp4').unlink()
    lista.unlink()
    print(f'listo: {N} cuadros en {PARTES} tramos, {time.time()-t0:.0f}s -> {OUT}')
