# Brief para redactar el contenido base de un AE

Vas a redactar **un** archivo `contenido/M<n>/M<n>-AE<k>.md` del curso «IA generativa para entornos laborales».

## Lee antes de escribir

1. `WORKFLOW.md` y `FORMATO-CONTENIDO-BASE.md`: reglas y formato. Son obligatorios.
2. `data/curso.json`: tu AE (texto, Bloom, códigos S/H/A/C, técnica, número de pantallas, descripción del quiz) y el módulo (competencia,
   recursos, casos e hito del proyecto).
3. `contenido/M1/M1-AE1.md`: la **muestra**. Imita su estructura, extensión (unas 180–260 palabras por pantalla), tono y recuadros.
4. `investigacion/M<n>.md`, `investigacion/HERRAMIENTAS-1.md` y `investigacion/HERRAMIENTAS-2.md`: las fuentes que puedes citar.
5. Los demás AE ya escritos de tu módulo, si existen, para no repetirte y para conectar con lo anterior.

## Reglas

- **Solo la planilla.**
  - Cada pantalla `cubre:` uno o más códigos de tu AE.
  - Todos los códigos quedan cubiertos.
  - Nada de temas que la planilla no nombra.
  - El texto del AE va igual en P01.
  - El número de pantallas es exactamente el que trae `pantallas`.
- **Todo con fuente.**
  - Las afirmaciones de hecho (definiciones técnicas, qué hace una herramienta y si es gratuita, qué dice una ley o un organismo) se
    apoyan en una fuente de `investigacion/`, citada en la línea `fuentes:` de la pantalla.
  - En la sección final «Fuentes» se listan todas las que citaste: `- F-M2-03 · Organismo (año). Título. URL`.
  - Si algo no tiene respaldo en `investigacion/`, no lo afirmes: plantéalo como recomendación del curso o déjalo fuera. Nunca inventes
    fuentes, cifras, artículos de ley ni funciones de herramientas.
- **No uses los casos de empresas reales** de la hoja «Casos y proyecto» (Morgan Stanley, Samsung, Klarna, etc.): tienen su propio
  recurso y aún no están verificados.
- **Herramientas.**
  - Usa el asistente principal recomendado en HERRAMIENTAS-1 y las alternativas gratuitas que ahí figuran.
  - Las prácticas tienen que poder hacerse gratis y desde el celular. Si una herramienta requiere pago para algo, dilo o propone la
    alternativa gratuita.
- **Audiencia:** personas cesantes o en búsqueda de empleo y personas que ya trabajan. Usa cargos y tareas comunes, sin suponer un
  empleo actual.
- **Personajes:** usa los mismos de la muestra, Camila (busca empleo como asistente administrativa) y Andrés (encargado de bodega). Si
  hace falta, agrega una tercera persona ficticia con un oficio común.
- **Tono:** español de Chile, tuteo, frases cortas. No digas «oficial», «textual», «literal» ni «plan formativo».
- **Técnica metodológica:** la de la planilla manda el tipo de pantallas. Por ejemplo, «laboratorio de prompts» pide actividades de
  antes/después y «resolución de problemas» pide ejercicios con datos de práctica.
- **Recuadros:** incluye al menos 3 `:::error` en el AE (alimentan los distractores del quiz), al menos 3 `:::comprueba` y
  `:::actividad` donde la técnica lo pida.
- **Cierre:** termina con:
  - «Ideas clave» (5–7);
  - «Glosario» (8–14 términos; no repitas los de AE anteriores del módulo salvo que el AE los redefina);
  - «Conexión con el proyecto» (el hito y el caso del módulo que trabajan tu AE, según curso.json);
  - «Fuentes».

## Al terminar

Corre `node scripts/validar-contenido.mjs M<n>-AE<k>` y corrige hasta que no queden errores, ni avisos de «sin fuentes» en pantallas
con afirmaciones. Responde en 5 líneas:
- palabras;
- fuentes usadas;
- qué quedó como recomendación sin fuente;
- dudas de diseño.
