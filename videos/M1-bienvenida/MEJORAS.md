# Video de bienvenida M1 · registro de versiones y mejoras

Video: `M1_bienvenida.mp4` (2:37, 1080p, -16 LUFS), `subtitulos.srt`, `M1_bienvenida_slides.pdf`. El audio, los clips y
el video no van al repo: están en esta carpeta, en el PC 1.

## Versiones (25-10-2026)

| Versión | Qué cambió |
|---|---|
| v1 (otra sesión) | Voz Catalina (ElevenLabs), avatar EVA fondo azul, 3 clips de Flow, IBM Plex, avisos de IA |
| v2 | Voz de EVA (HeyGen, Camila Vega, eleven_v4), slides reajustadas con los tiempos de cada palabra, sin avisos de IA, EVA con fondo claro, 2 clips más (quiz y plantillas) |
| v3 | Letra Schibsted Grotesk; diagramas de 3 pasos en los casos; cámara (acercamiento por escena, entrada con zoom, zoom de foco), fondo vivo, barra de progreso, Ken Burns en clips; clip del celular (HeyGen Video 1) |
| v4 | Las 6 mejoras de calidad (abajo) |

## Las 6 mejoras de la v4

| # | Mejora | Cómo quedó en el M1 |
|---|---|---|
| 1 | Música y efectos | `audio/musica.wav` (La m–Fa–Do–Sol, pad + bajo + arpegio, -30 LUFS) y `audio/sfx.wav` (6 escenas, 4 paneles, 8 clips, pops y checks), generados con `audio_fondo.py`. Ducking bajo la voz |
| 2 | Captura real de Gemini | 79,95–84,8 s («Practicarás con Gemini…»). Prompt de Camila de M1-AE2 P03 + su experiencia de `docs/PERSONAJES.md`. 9 capturas en `capturas-gemini/` → `media/gemini.mp4`. Recorte sin la barra lateral (nombre del usuario e historial). La conversación quedó en el historial de Gemini del usuario |
| 3 | Palabras clave y karaoke | «8 · preguntas por tema» (89,5 s) y «0–100 · tu mejor puntaje» (93,2 s). Subtítulos con la palabra que se dice en celeste (`palabras.json`, 382 palabras) |
| 4 | Mapa del curso | «Módulo 1 de 6» con 6 segmentos en la intro (1,95 s) |
| 5 | EVA en un momento clave | Recuadro a la derecha mientras dice «Todo esto alimenta el Hito uno de tu proyecto aplicado» (118,45–121,7 s), fondo claro |
| 6 | Pronunciación y resolución | Whisper oyó distinto: «IA» como «EA» (104,9 s y 106,8 s) y «Avianca» como «Bianca» (109,8 s). **Pendiente: escucharlo**; si suena mal, escribirlo fonético en `voz.txt` y regenerar la voz. Los clips de Flow quedan en 720p (se ven bien al tamaño en que aparecen) |

## Créditos usados en el M1

- HeyGen: avatar intro + cierre 20; clip del celular 6 (3 intentos de 2); EVA en el Hito 2. Total 28 (532 → 504).
- Google Flow: 90 puntos (4 Veo 3.1 Fast + 1 Lite). La cuenta quedó sin puntos hasta la renovación mensual.
- La voz usa la cuota de voz de HeyGen, no créditos premium.

## Pendientes

- Escuchar «IA» y «Avianca» en el tramo de los casos (mejora 6).
- Margen de adaptación del guion: consulta abierta (el texto sigue el del material, incluido «la IA inventó fallos»).
