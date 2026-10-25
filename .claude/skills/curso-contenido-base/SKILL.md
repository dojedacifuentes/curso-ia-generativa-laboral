---
name: curso-contenido-base
description: Investiga con fuentes abiertas y leídas y redacta o corrige el contenido base por aprendizaje esperado (contenido/M<n>/M<n>-AE<k>.md) del curso «IA generativa para entornos laborales», del que salen el Rise, el quiz, la infografía y los videos. Úsala cuando el usuario pida investigar un módulo, escribir o corregir un AE o una pantalla, agregar una fuente, o cuando un validador falle en contenido/.
---

# Investigación y contenido base por AE

Formato: `FORMATO-CONTENIDO-BASE.md`. Brief para redactar: `docs/BRIEF-REDACCION.md`. Muestra: `contenido/M1/M1-AE1.md`.
Flujo y reglas de investigación: `WORKFLOW.md`.

## 1. Investigación (por módulo, antes de escribir)

- Archivo: `investigacion/M<n>.md`. Las herramientas, transversales, van en `investigacion/HERRAMIENTAS-1.md` y `-2.md` (ids `F-H-nn`).
- Cada fuente va con su encabezado `### F-M<n>-nn · Organismo (fecha) — Título` y estas líneas: URL, tipo, fecha de publicación,
  fecha de consulta, qué respalda (en paráfrasis) y para qué códigos sirve.
- **Abre y lee cada fuente.** Si no abre (por ejemplo, error 403), no es fuente: va a «Alertas».
- Orden de preferencia: normativa y organismos (BCN, NIST, UNESCO, OCDE), luego documentación oficial del proveedor, luego
  académicas, y la prensa reconocida solo para hechos con fecha.
- No copies textos: como máximo una cita de menos de 15 palabras.
- Herramientas: registra el plan gratuito, si se usa desde el celular, si exige cuenta, el límite de edad y la fecha de consulta.

## 2. Redacción del AE

- El número de pantallas sale de `data/curso.json` (`pantallas`). Cada `## Pnn · Título` lleva `cubre:`, `fuentes:` y `bloque:`.
- Usa los recuadros `:::ejemplo`, `:::error`, `:::clave`, `:::actividad` y `:::comprueba`. Los `:::error` alimentan los
  distractores del quiz.
- Cierra con las secciones `## Ideas clave`, `## Glosario` (al menos 5 términos), `## Conexión con el proyecto` y `## Fuentes`.
- Cada pantalla tiene entre 120 y 420 palabras. Si la redacción la hacen subagentes en paralelo, usa el brief: un AE por agente.
- **Empresas reales:** solo dentro de un recuadro `:::ejemplo Caso real: … (Empresa, año)`, con hechos de la ficha del caso y
  citando sus fuentes (`F-M1C2-01`…). Fuera del recuadro se habla de «el caso de P06» o «las dos empresas», sin nombrarlas.
  La auditoría avisa si una empresa aparece fuera.

## 3. Control

```bash
node scripts/validar-contenido.mjs            # todos
node scripts/validar-contenido.mjs M3-AE4     # uno
```

El validador revisa:
- el título y el texto del AE, iguales a la planilla;
- el número de pantallas;
- que cada código exista y que todos queden cubiertos;
- que cada fuente citada exista en `investigacion/` o en `investigacion/casos/`, y que esté en la sección «Fuentes»;
- las palabras prohibidas para el estudiante y el largo de cada pantalla.

Después revisa con la planilla en la mano, con las 6 preguntas de `docs/CORRESPONDENCIA-FONDO.md` (códigos, Bloom, técnica,
criterios, alcance, quiz), y anota ahí lo que corregiste.

## 4. Después de cambiar un AE

1. `node scripts/compilar-contenidos.mjs`, que regenera los Docs, el HTML y el PDF del AE y `Contenidos-completos`.
2. Si cambiaste títulos o el orden de las pantallas, revisa las remisiones `Pnn` del quiz (`curso-quiz-infografias`) y el campo «ver»
   de la infografía.
3. Reemplaza en Drive el Doc y el PDF del AE, y también `Contenidos-completos.pdf` (`curso-drive`).
4. Corre `node scripts/auditar.mjs`.
