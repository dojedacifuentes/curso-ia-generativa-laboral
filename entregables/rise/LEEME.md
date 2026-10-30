# Rise corregidos (29-10)

En Rise 360 (cuenta de Natalia, equipo Universidad Carlos Tercero). Son duplicados de los Rise que armó Natalia, que quedan
intactos. Están como borrador, sin publicar ni compartir.

| AE | Curso (título que ve el estudiante) | Editor |
|---|---|---|
| M1-AE1 | Fundamentos de IA generativa | https://rise.eu.articulate.com/authoring/P9GpNxk2sfvKnwyJIZ4QlejNK_Bbitvq |
| M1-AE2 | Prompts efectivos | https://rise.eu.articulate.com/authoring/OMzllulso49uQ8q6ARWMjTTv_rJty8xz |

## Reglas (pedidos del usuario del 29-10)

- El Rise lleva **solo el contenido**. El quiz interactivo, las actividades de aplicación, la infografía y el glosario son
  recursos aparte y no van dentro.
- Sin códigos a la vista del estudiante (M1-AE1, M1-T2, P01…): la franquicia es comercial. El título es el tema del AE.
- Portada y primera lección: «Competencia del módulo: …» y «Aprendizaje esperado: …», textuales de la planilla.
- Citas APA 7 en el texto y lección final «Referencias bibliográficas», como en el Doc del AE.
- Sin «Conexión con el proyecto».
- El texto sale del contenido base. Si el Rise de origen trae pasos reescritos con IA, se vuelve al texto del contenido base
  (en M1-AE2 pasó en «Iterar» y en «Laboratorio de prompts»).

## Cómo se hace

1. `node scripts/rise-preparar.mjs M1-AE2` → `entregables/rise/M1-AE2/rise-datos.json`; commit y push.
2. Duplicar el Rise de origen en la biblioteca (menú ⋯ › Duplicate).
3. En el editor, cargar `scripts/lib/rise-aplicar.js` desde raw.githubusercontent y correr
   `riseAplicar(courseId, datos, { probar: true })`. Si todas las citas se ubican, correrlo sin `probar`.
4. Revisar en la vista previa y comparar frase por frase con el contenido base.

Los zips `M1-AE1/M1-AE1-Quiz-Rise.zip` y `M1-AE1/M1-Infografia-Rise.zip` (index.html en la raíz) sirven si algún día se quiere
un bloque Código › Upload project, pero por ahora el quiz y la infografía van fuera del Rise.
