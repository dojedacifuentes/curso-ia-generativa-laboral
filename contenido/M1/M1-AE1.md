# M1-AE1 · Fundamentos de IA generativa

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-02
bloque: Texto + lista con viñetas

En este tema vas a conocer la herramienta con la que trabajarás todo el curso. Antes de pedirle algo a una inteligencia artificial,
conviene saber qué es, cómo produce sus respuestas, qué tipos existen y dónde se equivoca. Con eso podrás decidir con criterio cuándo
te ayuda y cuándo no.

**Aprendizaje esperado:** Explicar el funcionamiento general, los tipos y los límites de la IA generativa, ejemplificando sus usos
en tareas laborales cotidianas.

Al terminar, deberías poder:
- describir con tus palabras cómo funciona la IA generativa y qué tipos existen;
- dar al menos tres ejemplos de usos y dos de límites en tareas de trabajo.

Te acompañan dos personas que aparecen en los ejemplos del curso. **Camila** busca trabajo como asistente administrativa y quiere
preparar mejor sus postulaciones. **Andrés** es encargado de bodega en una distribuidora y quiere ordenar los reportes que entrega
cada semana. Las dos son ficticias, pero sus tareas son de cualquier oficina, tienda o bodega.

:::clave
No necesitas saber programar ni tener una licencia pagada. Todo lo que verás se puede probar con asistentes gratuitos, también
desde el celular.
:::

## P02 · Qué es la IA generativa
cubre: S1, C1
fuentes: F-M1-02, F-M1-01
bloque: Texto + tabla comparativa

La **inteligencia artificial generativa** es un tipo de IA que **produce contenido nuevo**: textos, imágenes, audio, y también
código o video. No entrega un resultado que estaba guardado en alguna parte: crea uno a partir de lo que le pides.

Para entender qué la hace distinta, compárala con otras herramientas que ya usas:

| Herramienta | Qué hace | Ejemplo |
|---|---|---|
| Buscador | Encuentra páginas que ya existen | Buscar «requisitos para ser asistente administrativa» |
| Programa con reglas | Aplica condiciones escritas por personas | Una planilla que marca en rojo el stock bajo 10 unidades |
| IA generativa | Produce un contenido nuevo según tu instrucción | «Escribe un correo breve para pedir una reunión con mi jefatura» |

A la instrucción que le das se le llama **prompt**. Puede ser una pregunta, una orden o un texto con indicaciones. Lo trabajarás a
fondo en el tema siguiente; por ahora basta saber que la calidad de lo que recibes depende mucho de lo que pides.

:::ejemplo El mismo pedido, tres herramientas
Andrés necesita avisar a su equipo que el inventario se hará el viernes. Un buscador le muestra modelos de avisos escritos por otras
personas. Una planilla con reglas no le sirve para eso. Un asistente de IA generativa le escribe un aviso nuevo, con la fecha y el
tono que él indique, en segundos.
:::

## P03 · Cómo produce sus respuestas
cubre: S1, C1
fuentes: F-M1-02, F-M1-03, F-M1-09, F-M1-13
bloque: Proceso (process block) en 3 pasos

Un modelo generativo de texto aprendió a partir de enormes cantidades de ejemplos escritos. De ese entrenamiento aprendió sobre todo
**patrones**: qué palabras suelen ir con otras, cómo se ordena una carta, cómo se responde una pregunta.

Cuando le escribes, el modelo genera la respuesta **pieza por pieza**: estima qué continuaciones son probables según todo lo que va
de la conversación, elige una, la agrega y vuelve a calcular. Esa elección tiene algo de azar, y por eso el mismo pedido puede darte
respuestas distintas. Lo hace muy rápido, y por eso parece que «escribe» frente a ti.

1. **Lee** tu mensaje y lo que va de la conversación.
2. **Predice** continuaciones probables y elige una, un fragmento a la vez.
3. **Entrega** el texto completo cuando termina.

:::clave
El modelo no «sabe» ni «entiende» como una persona: predice texto plausible. Casi siempre eso coincide con algo correcto y útil,
pero no siempre. Esa diferencia explica los límites que verás más adelante.
:::

:::error «Si lo dice con seguridad, es verdad»
El tono seguro es parte del estilo que aprendió el modelo, no una prueba de que el contenido sea correcto. Una respuesta puede sonar
impecable y estar equivocada.
:::

## P04 · Modelos de lenguaje
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-12
bloque: Texto + pestañas (tabs) con usos

Los **modelos de lenguaje** generan texto. Son la base de los asistentes conversacionales más conocidos, a los que les escribes como
si fuera un chat. Sirven para redactar, resumir, reescribir con otro tono, traducir, ordenar ideas, explicar un concepto o proponer
alternativas.

Usos laborales frecuentes:
- **Redactar borradores:** correos, avisos, cartas de presentación, minutas.
- **Resumir:** un documento largo, un reglamento interno, un aviso de empleo.
- **Reescribir:** pasar un texto informal a uno formal, o acortarlo.
- **Ordenar información:** convertir notas sueltas en una lista o en una tabla.
- **Explicar:** pedir que aclare un término técnico con un ejemplo simple.

:::ejemplo Camila y su carta de presentación
Camila tiene apuntes sueltos sobre su experiencia en atención de público. Le pide a un asistente que los ordene en una carta de
presentación de diez líneas para un aviso de asistente administrativa. Recibe un borrador en segundos. Lo revisa, corrige un dato y
cambia una frase que no suena a ella.
:::

:::comprueba
¿Cuál de estas tareas es propia de un modelo de lenguaje?
- a) Crear una fotografía de un producto
- **b) Resumir un reglamento interno en cinco puntos**
- c) Generar la voz para un video
Retroalimentación: Los modelos de lenguaje trabajan con texto. La fotografía y la voz las generan modelos de imagen y de audio.
:::

## P05 · Modelos de imagen
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-05
bloque: Texto + galería o imagen con descripción

Los **modelos de imagen** generan imágenes a partir de una descripción escrita. También pueden modificar una imagen existente:
cambiar el fondo, quitar un objeto o crear variaciones.

Usos laborales frecuentes:
- **Ilustrar** una presentación, un afiche o una publicación en redes.
- **Crear bocetos** para mostrar una idea antes de encargar un diseño.
- **Producir variantes** de una imagen para probar cuál comunica mejor.

Para pedir una imagen se describe lo que se quiere ver: objeto, estilo, colores, encuadre. Por ejemplo: «Ilustración simple de una
bodega ordenada, estilo plano, colores azul y gris, sin texto».

:::ejemplo Andrés y el aviso de seguridad
Andrés quiere un afiche que recuerde usar calzado de seguridad en la bodega. Pide una ilustración simple con una persona usando
zapatos de seguridad. Antes de imprimirla revisa los detalles: a los modelos de imagen todavía les cuesta escribir texto nítido
dentro de la imagen y ubicar cada elemento justo donde se pidió.
:::

:::error Usar cualquier imagen generada sin revisar
Las imágenes generadas pueden traer errores visibles (texto ilegible, elementos mal ubicados) o parecerse a una marca o a una
persona real. Revisa siempre antes de publicar. Licencias y derechos se ven en detalle en el módulo 4.
:::

## P06 · Modelos de audio
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-04
bloque: Texto + audio de ejemplo (opcional)

Los **modelos de audio** generan sonido: **voz sintética** a partir de un texto, música o efectos. Algunas herramientas además hacen
lo contrario, convertir una grabación en texto, lo que es útil para tomar notas de una reunión.

Usos laborales frecuentes:
- **Locutar** un video de capacitación o un mensaje informativo.
- **Leer en voz alta** un texto para revisarlo o para quien lo prefiera escuchar.
- **Crear una pista musical** de fondo para un video breve.

:::ejemplo Un mensaje para la central telefónica
Una tienda necesita un mensaje grabado con su horario de atención. En vez de grabarlo, alguien escribe el texto y un modelo de audio
lo convierte en una voz clara. Antes de usarlo, conviene escucharlo completo y fijarse en cómo suenan las siglas, los nombres y los
números.
:::

:::clave
Imitar la voz de una persona real sin su permiso es un problema ético y legal. El consentimiento y los derechos de voz se trabajan en
el módulo 4.
:::

## P07 · Qué tipo de modelo usar para cada tarea
cubre: S2, C1
fuentes: F-M1-04
bloque: Ordenar o clasificar (sorting activity)

Muchas herramientas actuales son **multimodales**: reciben o entregan más de un tipo de contenido. Puedes, por ejemplo, subir la foto
de una boleta y pedir que te la transcriba en una tabla. Aun así, cada tarea tiene un tipo de salida, y ese tipo te indica qué buscar.

| Si necesitas… | Tipo de modelo |
|---|---|
| Un correo, un resumen, una lista | Lenguaje (texto) |
| Una ilustración, un afiche, un boceto | Imagen |
| Una locución, una pista musical | Audio |
| Leer una imagen y convertirla en texto | Multimodal |

:::actividad Clasifica estas tareas
Arrastra cada tarea al tipo de modelo que corresponde:
1. Redactar la respuesta a un reclamo de un cliente. → Lenguaje
2. Crear la imagen para un aviso de oferta. → Imagen
3. Generar la voz de un video de bienvenida. → Audio
4. Convertir la foto de una guía de despacho en una tabla. → Multimodal
5. Resumir el acta de una reunión. → Lenguaje
6. Producir música de fondo para un video corto. → Audio
:::

## P08 · Tokens: cómo «lee» el modelo
cubre: S3, C1
fuentes: F-M1-06, F-M1-03
bloque: Texto + imagen de un texto dividido en fragmentos

Los modelos no leen palabras completas como tú: dividen el texto en fragmentos llamados **tokens**. Un token puede ser una palabra
corta, parte de una palabra larga, un carácter o un signo de puntuación; los espacios y las mayúsculas también cambian cómo se divide.
Una palabra como «inventario» puede quedar dividida en más de un token, y la cantidad de tokens de un mismo texto cambia según el
idioma y el modelo.

¿Por qué te importa? Porque los tokens son la unidad con que el modelo mide su trabajo:
- **Lo que puede leer y escribir de una vez** tiene un máximo, contado en tokens.
- **Los planes gratuitos** suelen limitar el uso; si pegas un documento muy largo, puede que el asistente no lo procese completo o te
  pida que esperes.
- **Una respuesta larga** también gasta tokens: pedir algo breve y preciso suele funcionar mejor.

:::actividad Mira los tokens
Algunas herramientas muestran cómo se divide un texto en tokens. Si tienes acceso, pega una frase de un aviso de empleo y observa
cuántos fragmentos aparecen. Fíjate en qué pasa con las palabras largas y con los signos.
:::

:::error «El modelo lee el documento completo, siempre»
Si el texto supera lo que el modelo puede procesar, una parte puede quedar fuera sin que te avise con claridad. En documentos largos,
pide trabajar por partes o pregunta qué secciones consideró.
:::

## P09 · Contexto: lo que el modelo tiene a la vista
cubre: S3, C1
fuentes: F-M1-07, F-M1-08, F-M1-06
bloque: Texto + escenario o conversación de ejemplo

El **contexto** es todo lo que el modelo tiene a la vista para responder: tus instrucciones, los mensajes anteriores de la
conversación y los archivos o textos que le entregaste. A su capacidad máxima se le llama **ventana de contexto**, y se mide en tokens.

Tres consecuencias prácticas:
1. **Lo que no está en el contexto, el modelo no lo conoce.** No sabe a qué empresa postulas ni cómo se llama tu jefatura, salvo que
   se lo digas.
2. **En una conversación muy larga, lo del inicio puede perder peso** o quedar fuera de la ventana. Si cambias de tarea, a veces
   conviene empezar una conversación nueva.
3. **Una conversación nueva parte, en general, sin lo anterior.** Algunas herramientas ofrecen funciones de memoria; revisa cómo
   funciona la tuya antes de suponer que «se acuerda».

:::ejemplo La misma pregunta, con y sin contexto
Camila pregunta: «¿Mi carta está bien?». El asistente responde con generalidades. Luego pega el aviso de empleo y su carta, y pregunta:
«¿Mi carta responde a los requisitos de este aviso?». Ahora recibe observaciones concretas, porque el modelo tiene a la vista lo que
necesita.
:::

:::comprueba
Andrés pide «resume el reporte de esta semana», pero no pega el reporte. ¿Qué es lo más probable?
- a) El asistente busca el reporte en los archivos de la empresa
- **b) El asistente pide el texto o inventa un resumen genérico**
- c) El asistente recuerda el reporte de la semana pasada
Retroalimentación: El modelo solo trabaja con lo que está en su contexto. Si falta el reporte, puede pedirlo o, peor, inventar uno.
:::

## P10 · Primer límite: la alucinación
cubre: S4, C1, C2
fuentes: F-M1-01, F-M1-09, F-M1-10, F-M1-15
bloque: Texto + recuadro destacado

Como el modelo predice texto plausible, a veces produce información **falsa que suena verdadera**: datos, fechas, nombres, citas o
referencias que no existen. A esto se le llama **alucinación** (también se habla de «confabulación»).

Es más probable cuando:
- le pides **datos muy específicos** (cifras, artículos de una ley, nombres de personas);
- le pides **fuentes o citas**: puede inventar títulos de documentos o enlaces;
- haces una **pregunta abierta que pide una respuesta larga**, o el tema exige conocimiento experto;
- el tema es **poco conocido** o muy reciente.

:::ejemplo Un dato que no estaba
Camila pide un resumen de los requisitos de un aviso y el asistente agrega «disponibilidad para viajar», que el aviso no menciona.
Si no compara con el original, podría preparar su entrevista sobre un requisito que no existe.
:::

:::clave
Una alucinación no avisa. La defensa principal es **verificar** lo importante en una fuente confiable. También ayuda entregarle el
texto con que debe trabajar y pedirle que diga «no lo sé» cuando no tenga la información. Cómo verificar con método lo trabajarás en
el tema 4 de este módulo.
:::

## P11 · Segundo límite: el sesgo
cubre: S4, C1, C2
fuentes: F-M1-01, F-M1-11
bloque: Texto + imagen comparativa

Los modelos aprenden de lo que la gente ha escrito y publicado. Si en esos datos hay estereotipos o miradas parciales, el modelo puede
**repetirlos**. A esto se le llama **sesgo**.

El sesgo aparece, por ejemplo, cuando:
- al pedir la imagen de «una persona gerente», el modelo tiende a mostrar el mismo tipo de persona y deja fuera a mujeres y a otros
  grupos;
- al pedir historias o ejemplos de oficios, asocia ciertos trabajos a hombres y otros a mujeres;
- responde mejor en algunos idiomas o formas de hablar que en otras.

:::error Usar la IA para decidir sobre personas
Pedirle a un asistente que elija «al mejor candidato» o que califique a una persona traslada sus sesgos a una decisión que afecta a
alguien. Las decisiones sobre personas las toman personas, con criterios explícitos.
:::

:::actividad Detecta el sesgo
Pide a un asistente «tres ejemplos de personas que trabajan en una bodega» y luego «tres ejemplos de personas que trabajan en
recepción». Compara las respuestas: ¿qué supuestos aparecen sobre quién hace cada trabajo?
:::

## P12 · Tercer límite: la fecha de corte
cubre: S4, C1, C2
fuentes: F-M1-09
bloque: Texto + línea de tiempo

Un modelo se entrena con información reunida **hasta cierta fecha**: su **fecha de corte**. Lo que pasó después no está en su
entrenamiento. Por eso puede dar como vigentes un valor, una norma o un precio que ya cambiaron.

Algunos asistentes pueden **buscar en internet** antes de responder y mostrar enlaces. Eso ayuda con lo reciente, pero no elimina el
problema: la búsqueda puede traer páginas poco confiables o el modelo puede resumirlas mal.

:::ejemplo Un valor desactualizado
Andrés pregunta por un valor que cambia cada año, como un monto o un porcentaje fijado por una norma. El asistente le da una cifra
de hace dos años, con total seguridad. Andrés la revisa en la página oficial del organismo y encuentra el valor vigente.
:::

:::comprueba
Verdadero o falso: «Si el asistente puede buscar en internet, ya no es necesario revisar sus respuestas».
- a) Verdadero
- **b) Falso**
Retroalimentación: Buscar en internet ayuda con lo reciente, pero las fuentes pueden ser poco confiables y el resumen puede tener
errores. Lo importante se verifica igual.
:::

## P13 · ¿Delegar o no delegar?
cubre: H1, C2
fuentes: F-M1-01, F-M1-09
bloque: Escenario o clasificación por semáforo

Conocer cómo funciona la IA generativa y dónde se equivoca te permite decidir **qué tareas conviene delegarle**. Un criterio
práctico es el semáforo:

| | Tipo de tarea | Ejemplos |
|---|---|---|
| Verde: conviene | Borradores, ideas, reformular, resumir textos que tú entregas | Primer borrador de un correo; ordenar notas; resumir un aviso |
| Amarillo: con revisión | Datos, cálculos, hechos, información reciente | Explicar una fórmula; dar una fecha; listar requisitos legales |
| Rojo: no conviene | Decisiones sobre personas, datos personales o confidenciales, lo que firmarías sin leer | Elegir a quién contratar; pegar el RUT y la dirección de un cliente |

La pregunta clave: **si la respuesta está mal, ¿quién se da cuenta y cuánto cuesta el error?** Si el error es fácil de detectar y
barato, delega. Si es difícil de detectar o grave, revisa a fondo o no delegues.

:::actividad Semáforo de tareas
Clasifica cada tarea en verde, amarillo o rojo:
1. Redactar un borrador de aviso para el diario mural. → Verde
2. Calcular las horas extra de un trabajador para su liquidación. → Amarillo
3. Decidir qué postulante pasa a entrevista. → Rojo
4. Resumir un manual de procedimientos que tú pegas. → Verde
5. Confirmar el horario vigente de atención de un servicio público. → Amarillo
6. Pegar la base de datos de clientes con sus teléfonos para que la ordene. → Rojo
:::

## P14 · Práctica guiada: prueba un asistente
cubre: H2, A1
fuentes: F-M1-02, F-M1-12
bloque: Proceso paso a paso + actividad

Ahora te toca probar. Vas a usar un asistente de IA generativa con una tarea simple y a observar qué hace bien y qué no.

1. **Abre un asistente con plan gratuito**, en el computador o en la aplicación del celular. Usa el que tengas a mano.
2. **Busca un aviso de empleo real** de un cargo que ejerces o al que aspiras y copia su texto. No incluyas datos personales tuyos ni
   de otras personas.
3. **Escribe este pedido:** «Resume este aviso de empleo en tres viñetas: funciones principales, requisitos y lo que ofrece la
   empresa. No agregues nada que no esté en el texto». Luego pega el aviso.
4. **Compara** el resumen con el aviso original, línea por línea.
5. **Anota** en tu bitácora: ¿qué resumió bien?, ¿omitió algo importante?, ¿agregó algo que no estaba?

:::clave
Guarda este aviso: lo usarás en el Hito 1 del proyecto, cuando definas tu desafío laboral real.
:::

:::error Pegar tu CV completo para «probar»
Para practicar no necesitas tus datos personales. Usa textos públicos, como un aviso, o datos ficticios. Qué datos no compartir se
profundiza en el módulo 3.
:::

## P15 · Curiosidad crítica y uso responsable
cubre: A1, A2
fuentes: F-M1-02, F-M1-12, F-M1-01
bloque: Texto + lista de verificación (checklist)

Para aprovechar la IA generativa sirven dos actitudes que se complementan.

La **curiosidad crítica** es probar sin miedo y, al mismo tiempo, preguntarse por qué el resultado salió así. Quien la practica no
descarta la herramienta al primer error ni le cree a ciegas: prueba otra forma de pedir, compara y saca conclusiones.

La **apertura a un uso responsable** es estar dispuesto a usar la tecnología haciéndose cargo de lo que produce. Algunas prácticas
básicas:
- [ ] Reviso lo que el asistente me entrega antes de usarlo o compartirlo.
- [ ] No ingreso datos personales ni información confidencial de otras personas o de una empresa.
- [ ] Cuando un texto o una imagen fue hecho con IA y eso importa para quien lo recibe, lo digo.
- [ ] La decisión final y la firma son mías, no de la herramienta.

:::ejemplo Andrés y su reporte semanal
Andrés usa un asistente para ordenar sus notas en un reporte. Antes de enviarlo, comprueba que las cifras sean las de su planilla y
quita el nombre de un proveedor que no correspondía incluir. El asistente le ahorró tiempo; la responsabilidad del reporte sigue
siendo suya.
:::

## P16 · Cierre: tres usos y dos límites
cubre: C1, C2, H1, A2
fuentes: F-M1-02, F-M1-09
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que la IA generativa **produce contenido nuevo** a partir de patrones aprendidos, que genera sus respuestas
**fragmento a fragmento** y que trabaja solo con lo que tiene en su **contexto**. Conociste los modelos de **lenguaje, imagen y audio**,
y tres límites que conviene tener siempre presentes: **alucinación, sesgo y fecha de corte**.

:::actividad Tus usos y tus límites
Piensa en el cargo del aviso que guardaste y escribe:
1. **Tres usos** de la IA generativa que te servirían en ese cargo. Por ejemplo: «redactar respuestas a consultas de clientes».
2. **Dos límites** que tendrías que cuidar en ese cargo, y cómo. Por ejemplo: «puede inventar plazos de despacho: los confirmo en el
   sistema».

Guarda tu respuesta. En el próximo tema aprenderás a escribir prompts efectivos para esos mismos usos.
:::

## Ideas clave

1. La IA generativa produce contenido nuevo (texto, imagen, audio) a partir de patrones aprendidos de grandes cantidades de datos.
2. Genera sus respuestas fragmento a fragmento, eligiendo entre continuaciones probables: no «sabe», predice texto plausible, y por
   eso el mismo pedido puede dar respuestas distintas.
3. Hay modelos de lenguaje, de imagen y de audio, y herramientas multimodales que combinan tipos; la tarea define cuál usar.
4. Los modelos leen en tokens y responden solo con lo que tienen en su contexto: lo que no le das, no lo conoce.
5. Tres límites para tener siempre presentes: alucinación, sesgo y fecha de corte.
6. Conviene delegar lo que es fácil de revisar y barato si falla; lo grave o difícil de detectar se revisa a fondo o no se delega.

## Glosario

- **IA generativa**: tipo de inteligencia artificial que produce contenido nuevo, como texto, imágenes o audio, a partir de una
  instrucción.
- **Prompt**: instrucción, pregunta o texto que se le entrega a un modelo de IA generativa para obtener una respuesta.
- **Modelo de lenguaje**: modelo de IA generativa que produce y transforma texto.
- **Modelo de imagen**: modelo que genera o modifica imágenes a partir de una descripción.
- **Modelo de audio**: modelo que genera voz, música o efectos de sonido.
- **Multimodal**: herramienta o modelo que recibe o entrega más de un tipo de contenido, por ejemplo imagen y texto.
- **Token**: fragmento de texto (palabra, parte de palabra o signo) con el que el modelo lee y escribe.
- **Contexto**: información que el modelo tiene a la vista para responder: instrucciones, conversación y archivos entregados.
- **Ventana de contexto**: cantidad máxima de tokens que el modelo puede considerar de una vez.
- **Alucinación**: información falsa o inventada que el modelo presenta como si fuera verdadera.
- **Sesgo**: tendencia a repetir estereotipos o miradas parciales presentes en los datos de entrenamiento.
- **Fecha de corte**: fecha hasta la cual llega la información con que se entrenó un modelo.

## Conexión con el proyecto

El aviso de empleo de la práctica guiada (P14) y tus tres usos y dos límites (P16) son el punto de partida del **Hito 1 del proyecto
aplicado: problema u oportunidad real + biblioteca de prompts v1**. Allí elegirás una tarea de ese cargo como tu desafío laboral real.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md` (consultadas el 24-10-2026).

- F-M1-01 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://doi.org/10.6028/NIST.AI.600-1
- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-M1-03 · Google for Developers (2026). Introducción a los modelos de lenguaje grandes. https://developers.google.com/machine-learning/crash-course/llm?hl=es-419
- F-M1-04 · Google Cloud (s. f.). ¿Qué es la IA multimodal? https://cloud.google.com/use-cases/multimodal-ai?hl=es
- F-M1-05 · OpenAI (2026). Image generation: limitations. https://developers.openai.com/api/docs/guides/image-generation
- F-M1-06 · OpenAI Help Center (2026). Entender y contar tokens. https://help.openai.com/es-es/articles/4936856-understanding-and-counting-tokens
- F-M1-07 · Anthropic (2026). Context windows. https://platform.claude.com/docs/en/build-with-claude/context-windows
- F-M1-08 · OpenAI Help Center (2026). Memoria en ChatGPT. https://help.openai.com/es-es/articles/8590148-memory-in-chatgpt
- F-M1-09 · OpenAI Help Center (2026). ¿Dice ChatGPT la verdad? https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- F-M1-10 · OpenAI; Kalai y otros (2025). Por qué alucinan los modelos de lenguaje. https://openai.com/es-419/index/why-language-models-hallucinate/
- F-M1-11 · Noticias ONU (2024). La inteligencia artificial ya reproduce estereotipos de género. https://news.un.org/es/story/2024/03/1528182
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-13 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Copilot. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419

Pendiente de probar a mano: el tokenizador de OpenAI (https://platform.openai.com/tokenizer) para la actividad de P08 (si pide cuenta y
si funciona en el celular).
