# Rise M1-AE1 corregido (29-10)

Curso en Rise 360 (cuenta de Natalia, equipo Universidad Carlos Tercero): «M1-AE1 · Fundamentos de IA generativa»,
https://rise.eu.articulate.com/authoring/P9GpNxk2sfvKnwyJIZ4QlejNK_Bbitvq (borrador, sin publicar ni compartir).
Es un duplicado del Rise que armó Natalia («Fundamentos de IA generativa», que queda intacto) con los criterios del 28-10 y 29-10:

- Portada y primera lección con la competencia del módulo y el aprendizaje esperado textuales de la planilla.
- 31 citas APA 7 en el texto (y 4 en las actividades), con las letras del documento (OpenAI 2026a/b/c, Google s. f.-a/b).
- Sin «Conexión con el proyecto» ni glosario interno: en su lugar, enlace al documento Glosario de Drive.
- Lecciones nuevas: «Actividades de aplicación práctica» (las 2 del AE), «Pon a prueba lo que aprendiste» (quiz juego de
  M1-AE1 en un bloque de código) y «Referencias bibliográficas» (12 fuentes con enlace).
- Se quitó un párrafo repetido en «Tipos de modelos».

Cómo se hizo: `node scripts/rise-preparar.mjs M1-AE1` genera `rise-datos.json`; en el editor de Rise se carga
`scripts/lib/rise-aplicar.js` (desde raw.githubusercontent) y se corre `riseAplicar(courseId, datos)`. El quiz va en un bloque
Código › Upload project con `M1-AE1-Quiz-Rise.zip` (index.html en la raíz). `M1-Infografia-Rise.zip` queda para el Rise de
M1-AE2: la infografía del módulo 1 trata de la anatomía del prompt (R017 de la planilla).
