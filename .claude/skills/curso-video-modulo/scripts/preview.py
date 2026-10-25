"""Captura cuadros de prueba de video.html en tiempos dados (modo preview: muestra
etiquetas en los recuadros de video vacíos).

Uso:  python preview.py ruta/video.html 16.5 38.8 51.3
Salida: ruta/preview/tNNNN.NN.png  -> revisar con Read antes de renderizar.
"""
import sys, pathlib
from playwright.sync_api import sync_playwright

html = pathlib.Path(sys.argv[1]).resolve()
times = [float(x) for x in sys.argv[2:]] or [9.0]
out_dir = html.parent / 'preview'; out_dir.mkdir(exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1920, 'height': 1080})
    pg.goto(html.as_uri() + '?preview=1')
    pg.evaluate('document.fonts.ready')
    pg.wait_for_timeout(300)
    for t in times:
        pg.evaluate(f'renderAt({t})')
        out = out_dir / f't{t:07.2f}.png'
        pg.screenshot(path=str(out))
        print(out)
    b.close()
