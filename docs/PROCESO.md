# Proceso de producción del curso «IA generativa para entornos laborales»

Cómo se produjeron, revisaron y publicaron en Google Drive los recursos del curso, desde la planilla
«Estructura_inicial_contenido_IA_generativa». Fecha: 24-10-2026. Lo hizo Claude (Claude Code) en el PC 1, con Natalia a cargo
de los Rise.

## 1. Qué se produjo

| Recurso | Cantidad | Dónde está en Drive |
|---|---|---|
| Fuentes investigadas, abiertas y leídas | 212 para el contenido + 72 para los casos | 6 Investigación y fuentes |
| Contenido base por aprendizaje esperado (AE) | 22 AE, 338 pantallas | 1 Contenidos base · Google Docs y 2 Contenidos base · PDF |
| Quiz formativo tipo juego | 22 quiz, 176 preguntas, cada uno en SCORM 1.2, HTML y GIFT | 3 Quiz juego SCORM |
| Infografías por módulo | 6, en HTML y PNG | 4 Infografías |
| Casos de aplicación con empresas reales | 11 verificados en fuente primaria, con un resumen de verificación | 5 Casos de aplicación |
| Documentos de proceso y control de calidad | Este documento, el playbook, los formatos, la correspondencia y la auditoría | 7 Proceso y control de calidad |
| Skills de Claude | 6 | 8 Skills de Claude |
| Proyecto fuente (Markdown y scripts, sin la planilla de origen) | 1 zip | 9 Proyecto fuente |

Natalia arma los Rise a partir del contenido base: Claude no los monta. Los videos, las evaluaciones sumativas, los hitos y el aula
Moodle todavía no se producen.

## 2. Principio: una sola fuente de verdad

```
Planilla en Drive
  └─ xlsx2tsv ─► data/planilla/*.tsv ─ importar-planilla ─► data/curso.json
                                                                 │
investigacion/ (fuentes F-…) ──────────────────────────────►  contenido/M<n>/M<n>-AE<k>.md  (fuente única de cada AE)
                                                                 │
                 ┌───────────────┬───────────────┬───────────────┼────────────────────────┐
                 ▼               ▼               ▼               ▼                        ▼
             quiz/*.md     infografias/*.json  casos/*.md   compilar-contenidos      Rise (Natalia)
                 │               │               │               │
                 ▼               ▼               ▼               ▼
            SCORM/HTML/GIFT  HTML/PNG        Docs/PDF        Docs/PDF
                 └───────────────┴───────────────┴───────────────┴──► Google Drive ──► auditoría
```

- La planilla manda: lo que no está en ella no entra al curso.
- Cada derivado (Doc, PDF, quiz, infografía) se **genera** desde su fuente con un script. Si tiene un error, se corrige la fuente
  y se vuelve a generar; nunca se edita el derivado a mano.

## 3. Etapas, una por una

### Etapa 0 · Planilla a datos

- **Entrada:** la planilla, con las hojas Estructura, Matriz coherencia, Recursos (101), Casos y proyecto, Evaluación, Cumplimiento
  RE 2484 y Pendientes.
- **Qué se hace:** se descarga como .xlsx y `scripts/xlsx2tsv.mjs` la convierte en un TSV por hoja (`data/planilla/`).
  `node scripts/importar-planilla.mjs` arma `data/curso.json`: módulos → AE → códigos S (saber), H (saber hacer), A (saber ser),
  C (criterios), pantallas, quiz, recursos, casos e hitos.
- **Control:** el importador se detiene si falta un código o una columna.

### Etapa 1 · Investigación con fuentes abiertas y leídas

- **Qué se hace:**
  1. Por módulo se buscan fuentes en orden de preferencia: normativa y organismos públicos (BCN, NIST, UNESCO, OCDE), documentación
     oficial de los proveedores, fuentes académicas y, solo para hechos con fecha, prensa reconocida.
  2. Cada fuente **se abre y se lee** antes de registrarla.
  3. Se registra con id (`F-M3-14`) y, en una paráfrasis breve, qué respalda y para qué códigos del AE sirve.
  4. Las herramientas tienen su propio inventario (`F-H-nn`): plan gratuito, uso en el celular, cuenta, límite de edad y fecha
     de consulta.
- **Salida:** `investigacion/M1.md` a `M6.md`, `HERRAMIENTAS-1.md` y `HERRAMIENTAS-2.md`.
- **Control:** lo que no se pudo abrir o verificar va a «Alertas» y nunca al contenido. No se copian textos: como máximo una cita
  de menos de 15 palabras.

### Etapa 2 · Contenido base por AE

- **Qué se hace:** se redacta un archivo por AE con el formato de `FORMATO-CONTENIDO-BASE.md`.
  - Pantallas `## Pnn`, cada una con `cubre:` (los códigos que trabaja), `fuentes:` (los ids que respaldan lo que afirma) y `bloque:`
    (el bloque de Rise que se sugiere a Natalia).
  - Recuadros de ejemplo, error frecuente, idea clave, actividad y comprueba.
  - Al final: ideas clave, glosario, conexión con el proyecto y fuentes.
- **Muestra y brief:** primero se escribió M1-AE1 como muestra. Los demás se redactaron con `docs/BRIEF-REDACCION.md`, un AE por
  subagente.
- **Audiencia:** personas cesantes o en búsqueda de empleo, y trabajadores. Herramientas gratuitas y que funcionen en el celular.
  Personajes ficticios recurrentes, descritos en `docs/PERSONAJES.md`.
- **Control:** `node scripts/validar-contenido.mjs` revisa:
  - el título y el texto del AE, iguales a la planilla;
  - el número exacto de pantallas;
  - que estén cubiertos el 100 % de los códigos y que no haya códigos inventados;
  - que cada fuente citada exista y esté en la lista final;
  - el largo de cada pantalla y las palabras prohibidas.

### Etapa 3 · Quiz formativo tipo juego

- **Qué se hace:** un archivo por AE (`quiz/M<n>-AE<k>.md`, formato en `docs/FORMATO-QUIZ.md`), con 8 preguntas.
  - Cada pregunta indica sus códigos y la **pantalla a la que remite** quien falla («Repasa: pantalla P05»), que es la acción
    remedial que pide la planilla.
  - Los distractores salen de los errores frecuentes del propio contenido.
  - Cada criterio C del AE aparece al menos una vez.
- **Salida:** `node scripts/quiz-juego.mjs` genera tres archivos por AE: el juego en SCORM 1.2 para Moodle (nota de 0 a 100 y
  finalización), el juego en HTML para usarlo sin LMS y un GIFT para el banco de preguntas. La plantilla del juego viene de la
  licitación TD 2026, adaptada a 8 niveles.
- **Control:** `--solo-validar`. El script se detiene si falta un campo o si una pregunta no tiene exactamente una correcta.

### Etapa 4 · Infografías

- **Qué se hace:** un JSON por módulo (`infografias/M<n>.json`, formato en `docs/FORMATO-INFOGRAFIA.md`), con un tipo (anatomía,
  pasos, matriz, mapa o ciclo), bloques con ícono, texto y remisión a pantallas («ver: M1-AE2 P04»), y una idea clave.
- **Salida:** `node scripts/infografias.mjs` genera el HTML y un PNG de 1080 px con Edge en modo headless. Usa la tipografía IBM
  Plex Sans (licencia OFL), íconos Lucide (licencia ISC) y una paleta neutra con contraste AA.

### Etapa 5 · Casos de aplicación con empresas reales

La planilla trae 11 casos con empresas reales, todos marcados «Por verificar» y con la regla de no inventar.

- **Qué se hace:**
  1. **Ficha de verificación** por caso (`investigacion/casos/<id>.md`): fuentes leídas (primero las primarias: sentencias,
     resoluciones, documentos de la empresa ante la SEC, cartas oficiales, actas del parlamento), hechos verificados con fecha,
     **lo que NO se puede afirmar** y los ajustes respecto de la planilla.
  2. **Caso para el estudiante** (`casos/<id>.md`): contexto, qué pasó, análisis guiado de 5 o 6 preguntas, aplicación al proyecto,
     autocorrección y pregunta para el foro.
  3. **Conexión con los AE:** los AE cuya técnica pide «casos reales» resumen el caso en un recuadro «Caso real», con las
     fuentes de la ficha. Son M1-AE4, M3-AE4, M4-AE3 y M5-AE3.
- **Resultado de la verificación:**

  | Estado | Casos |
  |---|---|
  | Verificado | 1 |
  | Verificado con ajustes | 9 |
  | Descartado | 1: Samsung 2023, que solo tenía respaldo de prensa |

  Samsung se reemplazó por la Municipalidad de Eindhoven (2025), que trabaja el mismo AE. Getty Images v. Stability AI sigue en
  evolución.
- **Control:** `node scripts/validar-casos.mjs` revisa:
  - que el estado esté declarado y que haya al menos una fuente primaria;
  - que estén las secciones de la ficha y del caso;
  - que cada fuente citada esté en la ficha;
  - que los códigos que cubre el caso sean de sus AE;
  - el número de preguntas y la extensión.

### Etapa 6 · Documentos (Docs y PDF)

- **Qué se hace:** `node scripts/compilar-contenidos.mjs` genera, para cada AE, caso y documento de proceso:
  - un HTML para leer en pantalla;
  - un HTML «modo Docs», con todo el estilo en línea porque Google Docs ignora las clases;
  - un PDF impreso con Edge en modo headless, con índice de marcadores.

  También genera `Contenidos-completos` (los 22 AE en un solo documento, con índice).
- **Variantes:**
  - `--solo-casos`: solo los casos;
  - `--solo-documentos`: proceso, investigación y LEEME;
  - `--sin-pdf`: sin PDF.

### Etapa 7 · Subida y orden en Google Drive

- **Google Docs:** se crean con el conector de Drive (`create_file`, contenido `text/html`), que convierte el HTML en Doc.
  - Como cada HTML pesa entre 20 y 60 KB, la subida se reparte entre subagentes.
  - Después **se compara cada Doc palabra por palabra con su HTML** dentro de Chrome. El script `comparar-doc.js` lee la versión
    `mobilebasic` del Doc y calcula la diferencia mínima; tiene que dar 0 diferencias.
- **PDF, zip, PNG y HTML:** se suben tal cual desde el disco con Claude in Chrome, sin pasar por el chat.
  1. Un input de archivos inyectado en la carpeta (`subir-archivos.js`) recibe los archivos con `file_upload`.
  2. El input dispara un «soltar archivos» sobre la carpeta.
  3. Se comprueba que el tamaño de cada archivo sea igual al local.
- **Nunca se borra:** lo reemplazado se mueve a la carpeta «Versiones anteriores (24-10)» de cada sección.
- **Registro:** los ids quedan en `data/drive.json`. Una «foto» de toda la carpeta (`data/drive-inventario.json`) permite que la
  auditoría compare Drive con lo local.
- **Acceso:** la carpeta raíz quedó con acceso «Cualquier persona que tenga el vínculo» como **lector**. Las subcarpetas lo
  heredan, y nadie fuera del equipo puede editar.

### Etapa 8 · Control de calidad y auditoría

| Control | Herramienta | Resultado al 24-10-2026 |
|---|---|---|
| Correspondencia estructural | `node scripts/correspondencia.mjs` → `CORRESPONDENCIA.md` | Cada código, pantalla y recurso tiene su pieza |
| Correspondencia de fondo | Revisión a mano, 6 preguntas por AE → `CORRESPONDENCIA-FONDO.md` | 22 AE en Sí. Los 4 Parcial de técnica se cerraron con los casos reales |
| Auditoría | `node scripts/auditar.mjs` → `AUDITORIA.md` y su versión interactiva | 10 capas y 83 chequeos, 0 errores |
| Pendientes de verificación | `PENDIENTES-VERIFICACION.md` | Herramientas que hay que probar a mano y normas que cambian |

Las 10 capas de la auditoría son:
- C0: planilla;
- C1: investigación;
- C2: contenido;
- C3: quiz;
- C4: infografías;
- C5: casos;
- C6: documentos compilados;
- C7: correspondencia;
- C8: Drive;
- C9: avance frente a los 101 recursos.

Además de comprobar que cada pieza exista y calce con la planilla, avisa cuando un derivado es anterior a su fuente y cuando una
empresa real aparece fuera de su recuadro.

## 4. Reglas que valieron en todo el proceso

1. **Solo la planilla:** todo código cubierto y nada fuera de ella.
2. **Nada sin fuente:** las fuentes se abren y se leen antes de citarlas. Las cifras van con fecha y diciendo quién las informa.
3. **Casos reales solo con fuente primaria.** No se atribuyen causas que la fuente no afirma. Las personas naturales se nombran
   por su rol.
4. **Lo legal** se presenta como orientación general, no como asesoría.
5. **Español de Chile**, tuteo y frases cortas. Sin sensacionalismo.
6. **Se genera, no se edita a mano:** cada derivado sale de su fuente con un script.
7. **No se borra:** las versiones viejas se mueven.
8. **Se verifica lo que se sube:** cada Doc comparado con su original y cada archivo con su tamaño.
9. **Privacidad:** sin datos personales ni credenciales en el material. La planilla de origen no se comparte.

## 5. Skills creadas

Las skills son manuales que Claude carga cuando la tarea lo pide: pasos, trampas conocidas, límites y cómo verificar. Están en
`.claude/skills/` del proyecto y en la carpeta «8 Skills de Claude» de Drive.

| Skill | Para qué sirve |
|---|---|
| `curso-produccion` | Mapa general: fuente única, orden de producción, comandos, reglas, y cómo reutilizar el método en otro curso |
| `curso-contenido-base` | Investigar un módulo y redactar o corregir un AE, con sus validadores |
| `curso-quiz-infografias` | Generar y validar los quiz juego (SCORM, HTML, GIFT) y las infografías |
| `curso-casos-reales` | Verificar casos en fuente primaria, redactarlos, descartarlos o reemplazarlos, y conectarlos con los AE |
| `curso-drive` | Subir, reemplazar y verificar en Drive, mover versiones, dar acceso público de lectura y tomar la foto |
| `curso-auditoria` | Correr la auditoría y la correspondencia, cerrar los Parcial y republicar el artifact |

## 6. Cómo reutilizar el método en otro curso

1. Descarga el zip de «9 Proyecto fuente» y descomprímelo en una carpeta nueva.
2. Pon tu planilla: el zip no trae la de origen (`data/planilla/` ni `data/curso.json`), porque es de otra persona. Conviértela
   con `xlsx2tsv.mjs` y corre `importar-planilla.mjs`. Ajusta el importador si cambian las columnas.
3. Borra `contenido/`, `quiz/`, `infografias/`, `casos/`, `investigacion/` y `entregables/`.
4. Ajusta la audiencia, los personajes y las herramientas en los formatos.
5. Sigue las etapas 1 a 8 con las skills. Cambia en `data/drive.json` los ids de la carpeta nueva.

## 7. Pendiente antes de publicar a estudiantes

- **Títulos de la planilla:** actualizar los de M1-C2 (sugerido), M3-C1 y M3-C2, y quitar la marca «Por verificar».
- **Casos en evolución:**
  - M4-C3: la apelación en el Reino Unido y el juicio en EE. UU.;
  - M3-C1: qué corrigió el gobierno australiano el 03-02-2026;
  - M3-C2: las dos páginas de Eindhoven que hoy se citan desde web.archive.org.
- **Normas:** la vigencia de la Ley 21.719 y el boletín 18623-07.
- **Herramientas:** las funciones que hay que probar a mano están listadas en `PENDIENTES-VERIFICACION.md`.
- **Marca:** aplicar la del cliente, porque hoy se usa la paleta neutra.
- **Por producir:** videos, evaluaciones sumativas, hitos, foros y el montaje del aula Moodle.
