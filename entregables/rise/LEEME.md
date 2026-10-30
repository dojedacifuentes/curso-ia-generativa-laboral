# Rise del curso (29-10)

M1-AE1 y M1-AE2 son duplicados corregidos de los Rise de Natalia; desde M1-AE3 se generan desde el contenido base.
En Rise 360 (cuenta de Natalia, equipo Universidad Carlos Tercero). Son duplicados de los Rise que armó Natalia, que quedan
intactos. Están como borrador, sin publicar ni compartir.

| AE | Curso (título que ve el estudiante) | Editor |
|---|---|---|
| M1-AE1 | Fundamentos de IA generativa | https://rise.eu.articulate.com/authoring/P9GpNxk2sfvKnwyJIZ4QlejNK_Bbitvq |
| M1-AE2 | Prompts efectivos | https://rise.eu.articulate.com/authoring/OMzllulso49uQ8q6ARWMjTTv_rJty8xz |
| M1-AE3 | Parámetros de generación (generado) | https://rise.eu.articulate.com/authoring/bKbPkTP7XqxlNM4J0tuG5Xhu2rwruSzf |

## Reglas (pedidos del usuario del 29-10)

- El Rise lleva **solo el contenido**. El quiz interactivo, las actividades de aplicación, la infografía y el glosario son
  recursos aparte y no van dentro.
- Sin códigos a la vista del estudiante (M1-AE1, M1-T2, P01…): la franquicia es comercial. El título es el tema del AE.
- Portada y primera lección: «Competencia del módulo: …» y «Aprendizaje esperado: …», textuales de la planilla.
- Citas APA 7 en el texto y lección final «Referencias bibliográficas», como en el Doc del AE.
- Sin «Conexión con el proyecto».
- El texto sale del contenido base. Si el Rise de origen trae pasos reescritos con IA, se vuelve al texto del contenido base
  (en M1-AE2 pasó en «Iterar» y en «Laboratorio de prompts»).

## Cómo se genera un Rise nuevo (desde M1-AE3)

1. `node scripts/rise-generar.mjs M1-AE4 M2-AE1 …` → `entregables/rise/<AE>/rise-curso.json` (avisa si queda algún código
   a la vista). Commit y push.
2. En la biblioteca de Rise, duplicar la plantilla «Fundamentos de IA generativa» (P9GpNxk2…, la corregida, con la marca)
   y ponerle el nombre del tema.
3. En el editor del duplicado, cargar `scripts/lib/rise-armar.js` desde raw.githubusercontent y correr
   `riseArmar(courseId, datos)`: borra las lecciones de la plantilla y crea las del AE (unos segundos).
4. Revisar en la vista previa.

Qué hace el generador: P01 con la competencia y el AE textuales; lecciones de 3 pantallas (la primera con P01 y la última con
el cierre y las ideas clave), con el nombre de su primera pantalla; cada pantalla con su título, el texto con citas APA, las
tablas como tabla, los recuadros (ejemplo, error frecuente, idea clave, actividad) y los prompts de ejemplo como nota, las
preguntas «comprueba» como pregunta de opción múltiple y las listas numeradas como proceso cuando la pantalla lo pide. Las
remisiones «pantalla 14» o «P09» pasan al nombre de la sección. Al final, la lección «Referencias bibliográficas».

## Cómo se corrigió un Rise existente (M1-AE1 y M1-AE2)

1. `node scripts/rise-preparar.mjs M1-AE2` → `entregables/rise/M1-AE2/rise-datos.json`; commit y push.
2. Duplicar el Rise de origen en la biblioteca (menú ⋯ › Duplicate).
3. En el editor, cargar `scripts/lib/rise-aplicar.js` desde raw.githubusercontent y correr
   `riseAplicar(courseId, datos, { probar: true })`. Si todas las citas se ubican, correrlo sin `probar`.
4. Revisar en la vista previa y comparar frase por frase con el contenido base.

Los zips `M1-AE1/M1-AE1-Quiz-Rise.zip` y `M1-AE1/M1-Infografia-Rise.zip` (index.html en la raíz) sirven si algún día se quiere
un bloque Código › Upload project, pero por ahora el quiz y la infografía van fuera del Rise.
