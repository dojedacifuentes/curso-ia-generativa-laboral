# Workflow · investigación → contenido, módulo por módulo

Orden del proyecto: **1. contenidos (22 AE) → 2. quiz → 3. infografías**. Natalia arma los Rise a partir de los contenidos.

## Por cada módulo

| Paso | Qué se hace | Sale | Control |
|---|---|---|---|
| 0. Datos | `node scripts/importar-planilla.mjs` (solo si cambió la planilla) | `data/curso.json` | — |
| 1. Investigación | Buscar y **abrir** cada fuente; registrar qué respalda y para qué códigos del AE (S/H/A/C) | `investigacion/M<n>.md` | Solo entra una fuente que se abrió y leyó |
| 2. Contenido | Redactar cada AE con el formato de `FORMATO-CONTENIDO-BASE.md`, citando `fuentes: F-…` en cada pantalla con afirmaciones | `contenido/M<n>/M<n>-AE<k>.md` | `node scripts/validar-contenido.mjs` |
| 3. Revisión | Leer contra la planilla y la investigación: exactitud, tono, audiencia, nada fuera de la planilla | Correcciones en la fuente | Validador en verde |

El inventario de herramientas es transversal y va primero: `investigacion/HERRAMIENTAS.md` (ids `F-H-nn`).

## Reglas de investigación

- **Prioridad de fuentes:**
  1. normativa y organismos públicos (BCN/LeyChile, SENCE, NIST, UNESCO, OCDE);
  2. documentación oficial del proveedor (centro de ayuda, páginas de planes);
  3. académicas;
  4. prensa reconocida, solo para hechos y con fecha.
- **Cada fuente lleva:** id `F-M<n>-nn`, autor u organismo, título, fecha de publicación, URL, fecha de consulta, tipo y **qué respalda**,
  en paráfrasis breve. No se copian textos: como máximo una cita de menos de 15 palabras.
- **Herramientas:** plan gratuito, uso en celular (app o navegador), función que importa para el AE y si exige cuenta o tiene límite
  de edad. Fecha de consulta siempre, porque los planes cambian.
- **Lo que no se pudo verificar** va en «Alertas», nunca en el contenido.
- **Los 11 casos con empresas reales** no se investigan en esta etapa: tienen su propio recurso. El contenido los nombra solo en general,
  salvo dentro de un recuadro `:::ejemplo Caso real: …` (resumen breve con fuentes de la ficha del caso); `auditar.mjs` avisa si una
  empresa aparece fuera de ese recuadro.

## Reglas de contenido (resumen)

- Solo los códigos de la planilla; todos cubiertos; ninguna pantalla sin código.
- Las afirmaciones de hecho (qué hace una herramienta, qué dice una ley, una definición técnica) citan su fuente `F-…`.
- **Audiencia:** cesantes o en búsqueda de empleo, y personas que ya trabajan. Herramientas gratuitas, celular, sin licencias corporativas.
- **Tono:** español de Chile, tuteo, frases cortas. Personajes ficticios recurrentes: Camila (busca empleo como asistente
  administrativa) y Andrés (encargado de bodega).
- **Muestra de referencia:** `contenido/M1/M1-AE1.md`.

## Auditoría de todo lo producido

`node scripts/auditar.mjs` revisa en 10 capas (C0 planilla → C9 avance frente a los 101 recursos) que cada pieza exista, calce con la
planilla y no sea anterior a su fuente. Escribe `docs/AUDITORIA.md`, `entregables/auditoria/auditoria.json` y `AUDITORIA.html`
(plantilla `scripts/lib/auditoria.html`). Solo lee. Drive se audita desde `data/drive-inventario.json`, una foto de la carpeta
tomada con el conector de Drive: volver a tomarla después de cada subida. `--consola` muestra solo el resumen.

## Panel del curso

`npm run panel` (script `panel/build.mjs`) arma en `panel/dist` un sitio estático con la metodología, la matriz, la
trazabilidad código → pantalla → fuente → pregunta, los recursos, los casos, las fuentes, los pendientes, la auditoría y estos
documentos. Lee todo del repo, así que no se edita a mano: se cambia la fuente y se regenera. Vercel lo publica en cada push a
`main` (`vercel.json`). La auditoría no se corre en Vercel: se corre aquí (`node scripts/auditar.mjs`) y se sube su
`auditoria.json`, porque en un checkout nuevo las fechas de los archivos no sirven para medir atrasos.
