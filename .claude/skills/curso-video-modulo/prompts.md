# Prompts y textos reutilizables

## 1. Guion (lo escribe Claude a partir del contenido del módulo)

### Bienvenida (máximo 3:00, ≈ 2.300 caracteres)

| Bloque | Qué dice | Visual | Largo aprox. |
|---|---|---|---|
| 1. Intro | Bienvenida, nombre del curso y del módulo, «sin programar ni licencia» si aplica | **Avatar** + título | 15–20 s (~270 caracteres) |
| 2. Qué vas a aprender | Un párrafo por aprendizaje esperado (AE) con 2–3 conceptos clave de cada uno; personajes del curso; herramienta principal | Riel de temas + diagrama por tema | 60–70 s |
| 3. Cómo se evalúa | Quiz juego, puntaje, retroalimentación; casos del módulo | Mock de quiz + tarjetas de casos | 30–35 s |
| 4. Hito del proyecto | Nombre del hito y sus pasos | Pasos numerados + clip Flow | 20–25 s |
| 5. Cierre | Qué tener a mano para empezar + una idea clave del módulo + despedida | **Avatar** + checklist + cita | 15–17 s |

### Resumen (máximo 3:00)

Mismo armado, con otro contenido: intro con avatar → una idea clave por AE (sección «Ideas clave» del contenido base) → qué
quedó listo del hito → conexión con el módulo siguiente → cierre con avatar.

### Reglas del guion

- **Margen de adaptación: pendiente.** Se consultó (25-10) si el guion puede ser «fiel en el fondo, libre en la forma» o debe
  seguir el texto del material. Mientras no haya respuesta, se escribe como el del M1: los términos del material. Cuando
  respondan, actualizar esta regla.
- Cada afirmación del guion debe estar en un documento del módulo. Al final del guion va una tabla «Lo que dice el guion → dónde
  está en el material».
- **Los hechos de los casos, exactos:** quién hizo qué. Ej.: en Mata v. Avianca fueron los abogados quienes presentaron fallos
  inventados por ChatGPT sin revisarlos; no «la IA inventó fallos en un juicio».
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

## 3. Clips e imágenes en Google Flow (agente de Flow)

Configuración del agente (ícono de ajustes junto al cuadro de texto): video 16:9, **x1**, **Veo 3.1 - Rápido** (20 créditos por clip de 8 s); imagen 16:9, x1, Nano Banana. «Confirmar antes de generar: Siempre».

Plantilla de pedido (pegarla en UNA sola línea; cada salto de línea envía el mensaje):

```
Genera estos N recursos para un video de capacitación. Videos: 16:9, Veo 3.1 Rápido, 1 salida cada uno, sin texto en pantalla, sin logos y sin diálogo. Imagen: 16:9, 1 salida. 1) Video "nombre": <descripción en inglés> 2) ...
```

Fórmula de descripción de video (en inglés funciona mejor):
`<plano> of a Latin American <persona/edad/ropa>, <lugar>, <acción concreta de 8 s>. <luz>, realistic documentary style, 35mm lens, shallow depth of field, <movimiento de cámara lento>. <pantalla de laptop/celular no visible o desenfocada>. No on-screen text, no logos, no dialogue.`

Ejemplos usados en el M1:
- camila: Medium shot of a Latin American woman in her late twenties with shoulder-length dark hair and a simple light blue blouse, sitting at a tidy home desk with a laptop and an open notebook. She reads a job listing on the laptop and writes short notes by hand, focused and calm. Soft natural window light, realistic documentary style, 35mm lens, shallow depth of field, slow subtle push-in. The laptop screen faces away from the camera. No on-screen text, no logos, no dialogue.
- andres: Medium shot of a Latin American man in his late thirties wearing a high-visibility safety vest over a navy polo shirt, standing in an aisle of an organized distribution warehouse with metal shelves full of cardboard boxes. He checks stock on a tablet, then looks up at the shelves and nods. Soft even industrial lighting, realistic documentary style, 35mm lens, slow lateral tracking shot. The tablet screen is not visible. No readable text on boxes, no logos, no dialogue.
- aviso: Close-up over-the-shoulder shot of a person at a wooden desk holding a smartphone, scrolling and tapping to save a job listing, then writing a short checklist in a notebook with a pen. Warm natural morning light, realistic, shallow depth of field. The phone screen is softly out of focus and unreadable. No on-screen text, no logos, no dialogue.
- imagen bodega (prompt que aparece en el propio curso): Ilustración simple de una bodega ordenada, estilo plano, colores azul y gris, sin texto.

Los personajes deben calzar con `docs/PERSONAJES.md` (Camila, Andrés, Rosa, Paula).

Criterios: clips solo para personajes ficticios o acciones genéricas del curso. **No** generar escenas que simulen hechos reales (juicios, empresas reales de los casos): esos van como tarjetas de texto.

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
| Look de EVA para los videos del curso | _(anotar el id la primera vez)_ |
