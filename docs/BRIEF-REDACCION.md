# Brief para redactar el contenido base de un AE

Vas a redactar **un** archivo `contenido/M<n>/M<n>-AE<k>.md` del curso «IA generativa para entornos laborales».

## Lee antes de escribir

1. `WORKFLOW.md` y `FORMATO-CONTENIDO-BASE.md`: reglas y formato. Son obligatorios.
2. `data/curso.json`: tu AE (texto, Bloom, códigos S/H/A/C, técnica, número de pantallas, descripción del quiz) y el módulo (competencia,
   recursos, casos e hito del proyecto).
3. `contenido/M1/M1-AE1.md`: la **muestra**. Imita su extensión (unas 180–260 palabras por pantalla) y tono; el estilo y los recuadros siguen
   `docs/CRITERIOS-28-10.md` §5.
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
- **No nombres los casos de empresas reales** de la hoja «Casos y proyecto»: tienen su propio recurso (`casos/`).
- **Herramientas.**
  - Usa el asistente principal recomendado en HERRAMIENTAS-1 y las alternativas gratuitas que ahí figuran.
  - Las prácticas tienen que poder hacerse gratis y desde el celular. Si una herramienta requiere pago para algo, dilo o propone la
    alternativa gratuita.
- **Audiencia (28-10):** solo personas que están trabajando, en tareas administrativas y de productividad. Lee y aplica
  `docs/CRITERIOS-28-10.md` (audiencia, personajes, casos, máximo 2 fuentes y 1 recuadro por pantalla, estilo).
- **Personajes:** usa los mismos de la muestra, Camila (asistente administrativa en una constructora) y Andrés (encargado de bodega). Si
  hace falta, agrega una tercera persona ficticia con un oficio común.
- **Tono:** español de Chile, tuteo, frases cortas. No digas «oficial», «textual», «literal» ni «plan formativo».
- **Técnica metodológica:** la de la planilla manda el tipo de pantallas. Por ejemplo, «laboratorio de prompts» pide actividades de
  antes/después y «resolución de problemas» pide ejercicios con datos de práctica.
- **Recuadros (28-10):** máximo 1 por pantalla. Al menos 2 `:::comprueba` en el AE y las `:::actividad` que pida la técnica.
  Los errores frecuentes pueden ir en el texto («Un error común es…»).
- **Cierre:** termina con:
  - «Ideas clave» (5–7);
  - «Glosario» (8–14 términos; no repitas los de AE anteriores del módulo salvo que el AE los redefina);
  - «Conexión con el proyecto» (el hito del módulo que trabaja tu AE, según curso.json; sin nombrar casos);
  - «Fuentes».

## Al terminar

Corre `node scripts/validar-contenido.mjs M<n>-AE<k>` y corrige hasta que no queden errores, ni avisos de «sin fuentes» en pantallas
con afirmaciones. Responde en 5 líneas:
- palabras;
- fuentes usadas;
- qué quedó como recomendación sin fuente;
- dudas de diseño.
