# Prompts y textos reutilizables

## 1. Guion (lo escribe Claude a partir del contenido del módulo)

### Bienvenida (máximo 3:00, ≈ 2.300 caracteres)

| Bloque | Qué dice | Visual | Largo aprox. |
|---|---|---|---|
| 1. Intro | Bienvenida, nombre del curso y del módulo, «sin programar ni licencia» si aplica | **Avatar** + título | 15–20 s (~270 caracteres) |
| 2. Qué vas a aprender | Un párrafo por aprendizaje esperado (AE) con 2–3 conceptos clave de cada uno; personajes del curso; herramienta principal | Riel de temas + diagrama por tema | 60–70 s |
| 3. Cómo vas a avanzar | **En genérico:** al cerrar cada tema pones a prueba lo aprendido y sabes qué repasar; vas a analizar casos reales (sin nombrarlos) | Íconos genéricos (practicar, repasar, caso real) + clip Flow genérico | 15–20 s |
| 4. Tu proyecto | **En genérico:** llevar lo aprendido a una tarea real de tu trabajo, módulo a módulo (sin hito, entregable ni pasos concretos) | Diagrama genérico tarea → prompts → mejora + clip Flow | 15–20 s |
| 5. Cierre | Qué tener a mano para empezar + una idea clave del módulo + despedida | **Avatar** + checklist + cita | 15–17 s |

### Resumen (máximo 3:00)

Mismo armado, con otro contenido: intro con avatar → una idea clave por AE (sección «Ideas clave» del contenido base) → qué
puedes aplicar ya en tu trabajo (en genérico, sin nombrar el hito ni el entregable) → conexión con el módulo siguiente →
cierre con avatar.

### Reglas del guion

- **Margen de adaptación: pendiente.** Se consultó (25-10) si el guion puede ser «fiel en el fondo, libre en la forma» o debe
  seguir el texto del material. Mientras no haya respuesta, se escribe como el del M1: los términos del material. Cuando
  respondan, actualizar esta regla.
- Cada afirmación del guion debe estar en un documento del módulo. Al final del guion va una tabla «Lo que dice el guion → dónde
  está en el material».
- **Sin casos ni evaluaciones concretas (decisión del usuario, 25-10).** El video tiene que seguir sirviendo aunque cambien
  los casos o las evaluaciones. No se nombran casos de aplicación (empresas, instituciones, juicios, códigos M<n>-C<n>) ni
  evaluaciones específicas (quiz, cantidad de preguntas, puntajes, tareas, foros, hitos, entregables, plantillas pedidas).
  Se habla en genérico: «vas a analizar casos reales», «al cerrar cada tema pondrás a prueba lo que aprendiste», «lo vas a
  llevar a una tarea real de tu trabajo». Vale para la voz, las slides, los subtítulos, los clips y la idea del cierre
  (la idea fuerza sale del contenido de los AE, no de un caso). Los personajes del contenido (`docs/PERSONAJES.md`) sí
  pueden aparecer.
- **Audiencia (28-10):** solo personas que trabajan, en tareas administrativas y de productividad. Se les habla de su trabajo
  actual; nunca de buscar empleo ni del trabajo al que aspiran. Máximo 2 fuentes por guion. Ver `docs/CRITERIOS-28-10.md`.
- Escribe para el oído: frases cortas, números en palabras («Módulo uno», «de cero a cien»), sin siglas difíciles o explicadas.
  Ninguna frase que se pueda entender de dos maneras.
- **Español neutro con «tú»**, como habla la voz de EVA. Nunca voseo («revisá», «pagás»).
- Separa párrafos con línea en blanco en el guion. En el texto que va a la voz, entre párrafos va `<break time="0.8s"/>`: esa
  pausa larga es la que después sirve para sincronizar.
- Nada de datos personales ni afirmaciones no verificadas.
- **Sin avisos de «hecho con IA»** (ni de presentadora, ni de voz, ni de personajes): decisión del usuario, 25-10.

## 2. Voz de EVA (HeyGen, con el conector)

La misma voz de EVA de la skill `eva-voz-y-avatar`. No se cambia ni se sustituye.

```
create_speech_without_player(
  voiceId  = "6ce26db0cb6f4e7881b85452619f7f19",      # «Camila Vega», la versión base
  engine   = "elevenlabs",
  settings = { "model_id": "eleven_v4" },
  language = "es",
  speed    = 1.0,
  text     = "<solo lo hablado, párrafos unidos con <break time=\"0.8s\"/>>"
)
```

- Una llamada con el texto completo (máximo 5.000 caracteres). Devuelve **una** toma: no hay dos para elegir.
- Si falla, **no reintentar solo**: preguntar. Si responde 400/403 o «no disponible en tu plan», no usar otra voz: avisar.
- Pronunciación: si un nombre en inglés suena mal (ChatGPT, Copilot, Morgan Stanley), escribirlo como se dice solo en el texto
  para la voz; el guion y los subtítulos conservan la ortografía real.
- Si el total pasa de 3:00, se acorta el texto. No se acelera la toma entera.

## 3. Clips en Google Flow (flow.google.com)

Interfaz al 25-10: no hace falta el agente. Abajo, el botón del modelo («Nano Banana… x1») abre el panel: **Video**,
**16:9**, modelo **Veo 3.1 - Fast** (20 puntos por clip de 8 s, 720p) y **x1**. Un pedido por clip: se pega la
descripción en el cuadro y se pulsa la flecha. Se pueden encolar varios seguidos.

- Si quedan pocos puntos, el botón de enviar se pone naranjo («Advertencia de puntos insuficientes»). **Veo 3.1 - Lite**
  cuesta 10 y se ve un poco menos fino. No se compran puntos: se avisa al usuario.
- Descargar: el ícono de descarga de cada fila baja el MP4 de 720p directo a `Descargas`, con un nombre en inglés
  («Woman_reading_job_listing_….mp4»).
- Proyecto del M1: «oct 25 - 02:57» (5 clips).

Fórmula de descripción de video (en inglés funciona mejor):
`<plano> of a Latin American <persona/edad/ropa>, <lugar>, <acción concreta de 8 s>. <luz>, realistic documentary style, 35mm lens, shallow depth of field, <movimiento de cámara lento>. <pantalla de laptop/celular no visible o desenfocada>. No on-screen text, no logos, no dialogue.`

Ejemplos usados en el M1:
- camila: Medium shot of a Latin American woman in her late twenties with shoulder-length dark hair and a simple light blue blouse, sitting at a tidy home desk with a laptop and an open notebook. She reads a job listing on the laptop and writes short notes by hand, focused and calm. Soft natural window light, realistic documentary style, 35mm lens, shallow depth of field, slow subtle push-in. The laptop screen faces away from the camera. No on-screen text, no logos, no dialogue.
- andres: Medium shot of a Latin American man in his late thirties wearing a high-visibility safety vest over a navy polo shirt, standing in an aisle of an organized distribution warehouse with metal shelves full of cardboard boxes. He checks stock on a tablet, then looks up at the shelves and nods. Soft even industrial lighting, realistic documentary style, 35mm lens, slow lateral tracking shot. The tablet screen is not visible. No readable text on boxes, no logos, no dialogue.
- aviso: Close-up over-the-shoulder shot of a person at a wooden desk holding a smartphone, scrolling and tapping to save a job listing, then writing a short checklist in a notebook with a pen. Warm natural morning light, realistic, shallow depth of field. The phone screen is softly out of focus and unreadable. No on-screen text, no logos, no dialogue.
- quiz: Close-up of a Latin American woman in her thirties sitting at a kitchen table, holding a smartphone with both hands and tapping answers in a quiz game, then smiling with a small satisfied fist pump when she gets one right. Warm natural morning light, realistic documentary style, 35mm lens, shallow depth of field, slow subtle push-in. The phone screen faces away from the camera or is softly out of focus and unreadable. No on-screen text, no logos, no dialogue.
- plantillas (Camila, Veo Lite): Medium shot of a Latin American woman in her late twenties with shoulder-length dark hair and a simple light blue blouse, sitting at a tidy home desk with a laptop and an open notebook. She types a short text on the laptop, reads the result, crosses out a line in her notebook and writes a better version, then nods with a small smile. Soft natural window light, realistic documentary style, 35mm lens, shallow depth of field, slow lateral camera move. The laptop screen faces away from the camera. No on-screen text, no logos, no dialogue.
- imagen bodega (prompt que aparece en el propio curso): Ilustración simple de una bodega ordenada, estilo plano, colores azul y gris, sin texto.

### Alternativa: HeyGen Video 1 (conector de HeyGen, créditos premium)

Cuando Flow no tiene puntos. `text_to_video(prompt, duration=5, aspectRatio="16:9", resolution="768p",
promptEnhancement="disabled")` → `get_model_video` cada ~30 s hasta `completed` → descargar `video_url` (1344×768, 24 fps).
Costo medido el 25-10: **2 créditos por clip de 5 s**. Calidad comparable a Veo.

Trampa: si la persona «escribe un mensaje» o «usa un chat», el modelo **dibuja una interfaz flotante** (burbujas, teclado)
aunque el prompt lo prohíba. Pedir acciones sin pantalla visible («scrolls with his thumb, then looks up and smiles») y
cerrar con «Pure live-action camera footage. Absolutely no interface graphics, no keyboard, no chat bubbles, no overlays,
no on-screen text». Revisar 3 cuadros de cada clip antes de usarlo.

Clip usado en el M1 (intro, «incluso desde el celular»): Medium shot of a Latin American man in his early forties wearing a simple grey jacket, sitting by the window of a city bus. He holds a smartphone at chest height with the screen facing him, scrolls with his thumb, then looks up through the window and smiles, satisfied. Soft natural daylight, realistic documentary style, 35mm lens, shallow depth of field, slow subtle push-in. Pure live-action camera footage. Absolutely no interface graphics, no keyboard, no chat bubbles, no overlays, no on-screen text, no logos, no subtitles, no dialogue.

Dónde van los clips: donde la voz **presenta** algo y todavía no hay contenido en pantalla. Patrón que funcionó: el clip
ocupa grande la mitad derecha (800×450) mientras la voz introduce el tema, y al salir entra el contenido (mock del quiz,
tarjetas de plantillas). Nunca encima de un diagrama ni en recuadros chicos que tapen texto.

Los personajes deben calzar con `docs/PERSONAJES.md` (Camila, Andrés, Rosa, Paula).

Criterios: clips solo para personajes ficticios o acciones genéricas del curso. **No** generar escenas que simulen hechos
reales (juicios, empresas) ni que muestren una evaluación concreta: los casos y las evaluaciones no se nombran en el video
(§1, reglas del guion).

## 4. Avatar de EVA (HeyGen, con el conector)

Un solo render con la intro y el cierre unidos (`cortar_audio_avatar.py`), lip-sync con el audio ya generado.

1. Subir el MP3 (y la imagen, si se usa la opción B): `create_asset_upload_batch` (`filename`, `content_type`
   `audio/mpeg` o `image/jpeg`, `size_bytes` exacto) → `curl -X PUT` de cada archivo a su `upload_url` con los encabezados
   que devuelve → `complete_asset_batch` → `get_asset_batch` hasta que esté listo.
2. **Opción A (la del M1, preferida para que todos los módulos se vean iguales):** el avatar «EVA» con su look de fondo azul y
   camisa azul marino. Buscar el id con `list_avatar_looks` y anotarlo en la tabla de abajo la primera vez.
   ```
   create_video_from_avatar(avatarId = <look EVA fondo azul>, audioAssetId = <mp3>,
     aspectRatio = "4:5", resolution = "1080p", title = "M<n> <tipo> · EVA intro + cierre")
   ```
   Sin «Movimiento» personalizado (cuesta más). Motor por defecto (Avatar IV).
3. **Opción B (si el look no está en la cuenta):** el retrato de EVA (`eva-voz-y-avatar`: `eva-retrato.webp`, pasado a JPG):
   ```
   create_video_from_image(image = {"type": "asset_id", "asset_id": <retrato>}, audioAssetId = <mp3>,
     aspectRatio = "4:5", fit = "cover", resolution = "1080p", expressiveness = "medium",
     motionPrompt = "Calm, confident presenter. Subtle natural head movement. Looks straight at the camera.")
   ```
   Nunca con `script` + otra voz.
4. `get_video` hasta `completed` y descargar `video_url` con `curl -L -o`.
5. Costo de referencia (M1, 36 s): 12 créditos. Revisar `get_current_user` antes y después e informarlo.

| Dato | Valor |
|---|---|
| Look de EVA para los videos del curso | `360c41ac5b6d49278664c96507da6762` (grupo «EVA», fondo azul, blusa azul marino, 1254×1254) |
| Llamada | `create_video_from_avatar(avatarId=…, audioAssetId=…, aspectRatio="4:5", fit="cover", resolution="1080p")` → 1080×1350 |
| Fondo | `python <skill>/scripts/fondo_eva.py heygen/avatar.mp4 heygen/avatar_fondo_claro.mp4` lo cambia por el claro del curso (sin créditos). Probar antes con `--cuadro 16 prueba.png` |
| Costo real M1 (35 s) | 20 créditos premium (532 → 512) |

El otro grupo «EVA» (`be416c9a…`) es la versión de laboratorio futurista: no va en el curso.
