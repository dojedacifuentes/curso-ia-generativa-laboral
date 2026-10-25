---
name: curso-casos-reales
description: Verifica en fuente primaria y redacta los casos de aplicación con empresas reales del curso «IA generativa para entornos laborales» (hoja «Casos y proyecto», 11 casos), con ficha de verificación, actividad para el estudiante y conexión con los AE. Úsala cuando el usuario pida investigar, verificar, actualizar, descartar o reemplazar un caso, revisar un caso «en evolución» o citar una empresa real en un AE.
---

# Casos de aplicación con empresas reales

Formato completo: `docs/FORMATO-CASO.md`. Regla de la planilla: **no se inventan empresas, citas ni resultados.**

## 1. Ficha de verificación: `investigacion/casos/<id>.md`

- **Encabezado:** `Consultado: AAAA-MM-DD` y `Estado: Verificado | Verificado con ajustes | Descartado`.
- **Fuentes:** `### F-M1C2-01 · Organismo (fecha) — Título`, con URL, `Tipo: primaria | secundaria` y qué respalda.
- **Secciones:** `## Hechos verificados` (cada hecho con su fecha y `[F-…]`), `## Lo que NO se puede afirmar` y
  `## Ajustes respecto de la planilla`.

Cómo investigar:
- **Primarias primero:** sentencia o resolución, documento de la empresa (comunicado, registros ante la SEC, informe anual), carta
  oficial o actas del parlamento. La prensa solo complementa, con fecha y atribuida («según AP…»).
- **Ábrela y léela.** Si responde 403, busca la copia en web.archive.org y cítala como tal; si tampoco está, no es fuente.
- **Cifras:** cada una con su fecha y diciendo quién la informa («según la empresa…»).
- **Casos en evolución** (juicios, cambios de estrategia): da el estado a la fecha de consulta y anótalo en «Revisar antes de publicar».
- **No atribuyas causas que la fuente no afirma.** Por ejemplo, «la IA creó las referencias» en Deloitte: se dice que el trabajo
  usó IA y que tenía referencias erróneas, no que una cosa causó la otra.
- **Personas naturales** por su rol, no por su nombre. Las figuras públicas y las empresas pueden nombrarse sin calificarlas.
- **Descarte:** si no hay fuente primaria, pon `Estado: Descartado` y propón un reemplazo verificable que trabaje el mismo AE
  (así se cambió Samsung por la Municipalidad de Eindhoven).

La investigación se puede repartir en subagentes (uno por caso o dos por agente), con la ficha como entregable. Revisa tú las
fichas: que cada hecho tenga fuente y que no se afirme nada de «Lo que NO se puede afirmar».

## 2. Caso para el estudiante: `casos/<id>.md`

- **Encabezado:** «Aprendizajes esperados que trabaja» y «Hito del proyecto», según `data/curso.json`.
- **Secciones:**
  1. Contexto
  2. Qué pasó
  3. Análisis guiado (5 o 6 preguntas, con `cubre: M1-AE4:C1, …` y remisión a pantallas)
  4. Aplicación a tu proyecto
  5. Autocorrección
  6. Para el foro
  7. Fuentes
- **Hechos** solo de «Hechos verificados», con `fuentes:` por sección. Las opiniones van como preguntas para la persona.
- **Extensión** de 900 a 2.200 palabras. Español de Chile, sin sensacionalismo.

## 3. Conectar el caso con los AE

En el AE que trabaja el caso, agrega un recuadro `:::ejemplo Caso real: <título breve> (<Empresa>, <año>)`:
- de 4 a 6 frases, solo con hechos de la ficha;
- cita en `fuentes:` de esa pantalla los ids de la ficha (`F-M5C1-05`…);
- agrega esos ids a la sección «Fuentes» del AE.

Fuera del recuadro no se nombra la empresa. Si el título del caso cambió, actualiza también la «Conexión con el proyecto».

## Control y salida

```bash
node scripts/validar-casos.mjs                     # 11 ✓
node scripts/validar-contenido.mjs                 # si tocaste AE
node scripts/compilar-contenidos.mjs --solo-casos  # entregables/casos/{html,docs,pdf}
```

- **Drive:** carpeta «5 Casos de aplicación» (subcarpetas `Docs` y `PDF`) y el Doc «00 · Resumen de verificación», con el estado
  de cada caso y lo que hay que revisar antes de publicar (`curso-drive`).
- **Planilla:** si un título cambió, avisa al usuario. La planilla es de Natalia y Claude no la edita sin permiso.
