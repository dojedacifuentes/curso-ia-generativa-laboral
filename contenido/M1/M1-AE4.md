# M1-AE4 · Validación de resultados

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-09, F-M1-01
bloque: Texto + lista con viñetas

En el primer tema conociste tres límites de la IA generativa: alucinación, sesgo y fecha de corte. En el tema anterior viste que el
mismo pedido puede dar respuestas distintas. Las dos cosas llevan a la misma conclusión: una respuesta bien escrita no está, por eso,
verificada. Ahora vas a aprender a **validar** con método antes de usar o compartir lo que genera la IA.

**Aprendizaje esperado:** Validar resultados generados por IA, contrastándolos con fuentes confiables, para detectar alucinaciones,
errores y sesgos.

Al terminar, deberías poder:
- identificar errores o sesgos en una respuesta generada;
- contrastar lo importante con al menos dos fuentes confiables y corregir o descartar lo que no puedas verificar.

Este tema se basa en **casos**. Los errores que verás son de tipos documentados por organismos y proveedores, como NIST y OpenAI.
Los ejemplos con Camila, Andrés y Rosa son ficticios, pero muestran cómo aparecen esos errores en tareas comunes. Hay además casos
reales, documentados por tribunales, en que alguien usó una respuesta sin verificar y tuvo consecuencias: verás dos en P02 y P16, y
los analizarás a fondo en el caso M1-C2.

:::clave
Validar no es desconfiar de todo. Es saber **qué** revisar, **dónde** y **cuándo** una respuesta está lista para usarse.
:::

## P02 · Por qué hay que validar
cubre: S1
fuentes: F-M1-01, F-M1-10, F-M1-09, F-M1C2-01
bloque: Texto + recuadro destacado

Un modelo de lenguaje no consulta una base de datos de verdades. Produce texto plausible a partir de patrones. NIST explica que inventar
contenido es un resultado natural de ese diseño, y OpenAI agrega que los hechos poco frecuentes, como una fecha puntual, no se deducen
de patrones.

Hay otra razón. Según OpenAI, los modelos siguen inventando en parte porque las evaluaciones con que se miden premian más adivinar que
reconocer que no saben. El resultado es una respuesta que **suena segura aunque no lo esté**.

La ayuda de ChatGPT lo dice de forma directa: el asistente puede dar respuestas incorrectas o engañosas con aparente seguridad, y la
seguridad con que responde no garantiza que sea fiable. Por eso recomienda usarlo como **primer borrador** y no como fuente final.

:::ejemplo Un dato que sonaba bien
Andrés pide «el peso máximo que una persona puede levantar sola en una bodega». El asistente responde con una cifra exacta, con
decimales y en tono seguro. Andrés no sabe de dónde sale. Antes de ponerla en el diario mural, decide buscarla en la norma y en el
organismo que corresponde.
:::

:::ejemplo Caso real: las sentencias que no existían (Mata v. Avianca, 2023)
En un juicio contra la aerolínea Avianca en Nueva York, un escrito citó seis decisiones judiciales que no existían. El abogado que
investigó había usado ChatGPT como única fuente, y el que firmó no leyó ninguna de las decisiones citadas. El 22-06-2023 el tribunal
impuso una multa de 5.000 dólares a los abogados y a su estudio, y les ordenó escribir al cliente y a los jueces que aparecían como
autores de esos fallos falsos.
:::

:::error «Si la respuesta es detallada, debe ser cierta»
El detalle y la seguridad son parte del estilo del modelo. Una cifra con decimales o una cita con número de artículo pueden ser
inventadas.
:::

## P03 · Error 1: alucinación
cubre: S1, C1
fuentes: F-M1-01, F-M1-09, F-M1-10
bloque: Texto + pestañas (tabs) con tipos de alucinación

La **alucinación**, que NIST llama **confabulación**, es contenido falso o erróneo presentado con seguridad. Aparece de varias formas:

- **Datos inventados:** cifras, fechas, nombres de personas o de empresas que no existen o no corresponden.
- **Citas y fuentes inventadas:** títulos de estudios, artículos de una ley, enlaces que no llevan a ninguna parte o que dicen otra
  cosa. La ayuda de ChatGPT advierte que puede inventar citas o estudios.
- **Razonamientos que justifican algo falso:** NIST señala que el modelo puede entregar pasos «lógicos» que hacen parecer correcta una
  respuesta equivocada.

Es más probable con hechos muy específicos o poco frecuentes, en respuestas largas a preguntas abiertas y en temas que exigen
conocimiento experto.

:::ejemplo La cita que no existía
Camila pide al asistente «un dato con fuente sobre cuánto valoran las empresas la puntualidad». Recibe un porcentaje atribuido a
un estudio con nombre y año. Al buscarlo, no encuentra ese estudio en ninguna parte. El dato no puede ir en su carta.
:::

:::error «Si trae el nombre del estudio, es real»
Un nombre de estudio, un año y un número de artículo dan apariencia de rigor, pero el modelo también los puede inventar. Toda cita se
busca en su origen.
:::

:::comprueba
¿Cuál de estas respuestas tiene más riesgo de alucinación?
- a) Un resumen de un texto que tú pegaste
- **b) Una lista de cinco estudios con autor, año y título sobre un tema poco conocido**
- c) Un correo reescrito en tono formal
Retroalimentación: Pedir fuentes, citas y datos específicos de un tema poco conocido es la situación en que más inventa. Trabajar
sobre tu propio texto reduce el riesgo.
:::

## P04 · Error 2: sesgo
cubre: S1, C1
fuentes: F-M1-01, F-M1-11, F-M1-09
bloque: Texto + imagen comparativa

El **sesgo** aparece cuando la respuesta repite estereotipos o presenta una sola mirada como si fuera la única. Es más difícil de ver
que una cifra inventada, porque el texto puede ser correcto en los datos y aun así ser parcial.

Formas documentadas:
- **Estereotipos de género y origen.** Un estudio de la UNESCO encontró que, al pedir historias, los modelos asignaban a los hombres
  trabajos más variados y de más prestigio, y a las mujeres roles domésticos o desvalorizados.
- **Subrepresentación.** NIST describe modelos de imagen que, al pedir un gerente, un médico o un juez, dejan fuera a mujeres, a
  minorías y a personas con discapacidad.
- **Una sola perspectiva.** La ayuda de ChatGPT advierte que puede simplificar o presentar una sola mirada como la verdad.
- **Respuestas demasiado uniformes.** NIST llama «homogeneización» a salidas que se parecen demasiado entre sí.

:::ejemplo El perfil que nadie pidió
Rosa pide un texto para un aviso de «técnico en mantención» para el centro médico. El borrador dice «buscamos un hombre con
experiencia». Rosa no pidió eso. Corrige el texto para que hable del cargo y de los requisitos, no del género de quien postula.
:::

:::clave
Para detectar el sesgo, pregúntate: **¿a quién deja fuera esta respuesta?, ¿qué supone sin que yo se lo haya dicho?**
:::

## P05 · Error 3: desactualización
cubre: S1, C1
fuentes: F-M1-09, F-H-07, F-H-16
bloque: Texto + línea de tiempo

La **desactualización** ocurre cuando la respuesta da como vigente algo que ya cambió. Se debe a la **fecha de corte**: el modelo no
conoce lo que pasó después de su entrenamiento, salvo que use herramientas como la búsqueda web.

Es más probable con:
- valores que cambian cada año: montos, porcentajes, tarifas;
- normas, trámites y requisitos que se modifican;
- horarios, direcciones y contactos de servicios;
- nombres de cargos y autoridades.

Gemini y ChatGPT pueden buscar en internet y mostrar fuentes con enlaces. Eso ayuda, pero no resuelve todo: la página que encontró
puede ser antigua o poco confiable, y el resumen puede tener errores.

:::ejemplo El horario que cambió
Camila pregunta el horario de atención de una oficina de un servicio público para hacer un trámite. El asistente le da un horario
con total seguridad. Camila entra al sitio del servicio y ve que el horario cambió hace unos meses.
:::

:::error «Si la respuesta trae fecha reciente, está al día»
Una respuesta puede mencionar el año actual y aun así usar un dato antiguo. Lo que importa es la fecha de la fuente, no la del texto
generado.
:::

## P06 · Otros errores: no seguir el texto y contradecirse
cubre: S1, C1
fuentes: F-M1-01, F-M1-09
bloque: Texto + knowledge check

Además de los tres errores principales, NIST documenta salidas que **no siguen el texto entregado** o que **se contradicen**. Son
frecuentes cuando le pides resumir o transformar un documento:

- **Agrega** algo que el texto no dice. Lo viste en el primer tema, cuando el resumen de un aviso incluyó un requisito que no estaba.
- **Omite** algo importante, como una fecha límite o una excepción.
- **Cambia** un dato al copiarlo: un número, un nombre, una cantidad.
- **Se contradice:** en un párrafo dice una cosa y en otro, lo contrario.

Estos errores se detectan **comparando con el original**, línea por línea. No necesitas otra fuente: el texto que entregaste es tu
referencia.

:::comprueba
Andrés pide resumir el reporte de stock. El reporte dice 120 cajas de guantes y el resumen dice 210. ¿Qué tipo de error es?
- a) Sesgo
- b) Desactualización
- **c) Salida que no sigue el texto entregado: cambió un dato**
Retroalimentación: El dato correcto estaba en el reporte. El resumen lo cambió al transformarlo. Se detecta comparando con el original.
:::

:::comprueba
Rosa recibe un borrador que en el primer párrafo dice «atendemos de lunes a viernes» y en el último «también los sábados». ¿Qué hace?
- a) Lo envía: seguramente las dos cosas son ciertas
- **b) Lo marca como contradicción y confirma el horario en la fuente del centro**
- c) Pide al asistente que elija una de las dos
Retroalimentación: Una contradicción indica que al menos una afirmación es falsa. Se resuelve con la fuente, no con el modelo.
:::

## P07 · Caso de práctica: encuentra los errores
cubre: C1, S1
fuentes: F-M1-01, F-M1-09, F-M1-11
bloque: Escenario o actividad de marcar (hotspot)

Camila pidió a un asistente: «Explícame qué hace una asistente administrativa y qué debo saber para postular en Chile». Lee la
respuesta que recibió:

> «La asistente administrativa es la secretaria que apoya al gerente. Sus funciones son atender el teléfono, archivar documentos y
> manejar la agenda. Según el estudio "Perfiles Administrativos 2019", el 87 % de las empresas pide Excel avanzado. Para postular, el sueldo mínimo vigente es de $350.000, y el trámite de certificado de antecedentes cuesta $5.000.
> Las mujeres suelen destacar en este cargo por su paciencia y orden.»

:::actividad Marca los errores
Identifica en la respuesta:
1. Un **posible dato inventado** con fuente difícil de comprobar. → El estudio con nombre, año y porcentaje.
2. Un **dato que puede estar desactualizado**. → El monto del sueldo mínimo y el costo del certificado.
3. Un **sesgo**. → Suponer que el cargo lo ejercen mujeres «por su paciencia», y que la asistente es «la secretaria del gerente».
4. Algo que **no responde a lo pedido**. → Habla del sueldo mínimo como requisito para postular, lo que no tiene sentido.

Para cada uno, escribe qué harías: verificar, corregir o descartar.
:::

:::clave
Los datos de este caso son ficticios a propósito: no los uses como información real. El objetivo es entrenar el ojo.
:::

## P08 · Criterios de confiabilidad de una fuente
cubre: S2
fuentes: F-M1-19, F-M1-20
bloque: Texto + tabla

Para contrastar necesitas **fuentes confiables**. Pero ¿cómo sabes si una fuente lo es? El investigador Mike Caulfield propone
preguntarse quién está detrás, con qué experiencia y con qué intereses. A partir de eso, usa estos criterios:

| Criterio | Pregunta | Señal de confianza |
|---|---|---|
| **Autoría** | ¿Quién publica? | Un organismo, una institución o una persona identificable con experiencia en el tema |
| **Experiencia** | ¿Sabe de esto? | Es su área de trabajo o de estudio |
| **Interés** | ¿Gana algo con que le creas? | No vende el producto del que habla, o lo dice con claridad |
| **Origen** | ¿Es la fuente original? | Es el documento, la norma o el sitio del organismo, no un comentario sobre él |
| **Fecha** | ¿Está vigente? | Tiene fecha y es reciente para un dato que cambia |
| **Independencia** | ¿Lo confirman otras? | Otras fuentes sin relación entre sí dicen lo mismo |

Un estudio de Stanford encontró que incluso personas expertas en otros temas se dejaban engañar por **logos y dominios de apariencia
seria**. El aspecto de un sitio no prueba que sea confiable.

:::error «Si el sitio se ve profesional, es confiable»
Un buen diseño, un logo o un dominio que parece institucional se pueden imitar. Lo que importa es quién está detrás, y eso se averigua
fuera del sitio.
:::

## P09 · Lectura lateral: salir del sitio para evaluarlo
cubre: S2, C2
fuentes: F-M1-20, F-M1-19
bloque: Texto + proceso en 3 pasos

Los investigadores Sam Wineburg y Sarah McGrew compararon cómo evalúan un sitio web historiadores, estudiantes y
verificadores profesionales de información. Historiadores y estudiantes leyeron el sitio de arriba abajo, sin salir de él: a eso le
llamaron **lectura vertical**. Los verificadores hicieron otra cosa: tras un vistazo rápido, **salieron del sitio** y abrieron otras
pestañas para ver qué decían otras fuentes de él. A eso le llamaron **lectura lateral**. Llegaron a mejores conclusiones en menos
tiempo.

Cómo hacer lectura lateral desde el celular:
1. **No te quedes leyendo** la página que te dio el asistente.
2. **Abre una pestaña nueva** y busca el nombre de la fuente: quién es, qué dicen otros de ella.
3. **Vuelve** solo si lo que encontraste te da confianza.

:::ejemplo Andrés revisa un sitio
El asistente le da a Andrés un enlace a un sitio con recomendaciones de seguridad para bodegas. El sitio se ve serio. Andrés busca el
nombre del sitio en otra pestaña y descubre que es de una empresa que vende fajas lumbares. No lo descarta del todo, pero busca la
información en el organismo público que corresponde.
:::

:::comprueba
¿Qué es la lectura lateral?
- a) Leer con cuidado toda la página antes de opinar
- **b) Salir del sitio y buscar qué dicen otras fuentes sobre él**
- c) Leer solo los títulos y las conclusiones
Retroalimentación: Los verificadores profesionales salen del sitio y averiguan quién está detrás. Leer más a fondo la misma página no
les dice si es confiable.
:::

## P10 · El método SIFT
cubre: S2, S3
fuentes: F-M1-19
bloque: Proceso (process block) en 4 pasos o flashcards

Mike Caulfield resumió la evaluación de información en cuatro movimientos, conocidos por su sigla en inglés: **SIFT**.

1. **Detente** (*Stop*). Antes de usar o compartir, pregúntate: ¿conozco esta fuente?, ¿sé si es confiable?
2. **Investiga la fuente** (*Investigate the source*). Averigua quién está detrás, qué experiencia tiene y qué intereses. Aquí usas la
   lectura lateral.
3. **Busca una cobertura mejor** (*Find better coverage*). Cuando importa más la afirmación que la página, busca otras fuentes
   confiables que hablen de lo mismo y mira si coinciden.
4. **Rastrea hasta el original** (*Trace claims to the original context*). Sigue la cita, el dato o la imagen hasta su origen, para
   ver si fue recortado o sacado de contexto.

SIFT se pensó para evaluar lo que circula en internet, pero sirve igual para una respuesta de IA: cada dato que el asistente te da es
una afirmación que puedes detener, investigar, contrastar y rastrear.

:::ejemplo SIFT con una respuesta de IA
Rosa recibe del asistente un requisito para un examen médico. **Se detiene**: no sabe de dónde salió. **Investiga**: el asistente
citó un blog sin autor. **Busca una cobertura mejor**: encuentra la indicación en el sitio del laboratorio y en el del centro donde
trabaja. **Rastrea**: la indicación del blog estaba recortada y omitía una excepción.
:::

## P11 · Las fuentes que muestra el asistente
cubre: S2, H1
fuentes: F-H-16, F-H-07, F-H-19, F-M1-09
bloque: Texto + imagen de una respuesta con fuentes

Varios asistentes muestran de dónde sacaron la información. A veces **Gemini** muestra un botón «Fuentes» con enlaces a sitios web o a
archivos. **ChatGPT**, con la búsqueda, puede traer citas que abren la fuente y un panel de fuentes. **Copilot** está diseñado para
incluir citas que permitan comprobar de dónde viene la información.

Es una gran ayuda, pero **una fuente citada no es una fuente verificada**. La ayuda de ChatGPT recomienda revisar las citas y abrir los
enlaces. Al hacerlo, comprueba tres cosas:
1. **¿El enlace existe y abre?**
2. **¿Dice lo que el asistente afirma?** A veces la página habla del tema, pero no dice ese dato.
3. **¿Es confiable?** Aplica los criterios y la lectura lateral.

:::error «Si trae enlace, ya está verificado»
El enlace puede no abrir, llevar a una página que no dice eso o ser poco confiable. Hasta que lo abres y lo lees, es solo una pista.
:::

:::ejemplo Camila abre los enlaces
Gemini le da a Camila tres requisitos para un curso de capacitación, con dos fuentes. La primera es el sitio del organismo y dice lo
mismo. La segunda es un foro de hace cuatro años. Camila se queda con la primera y busca otra fuente confiable para completar.
:::

## P12 · Tu checklist de validación
cubre: S3
fuentes: F-M1-19, F-M1-09, F-M1-01
bloque: Lista de verificación (checklist) descargable

Ahora juntas todo en un **checklist de validación**: una lista de pasos que aplicas a cualquier respuesta antes de usarla.

1. [ ] **Me detengo.** No copio ni envío todavía.
2. [ ] **Marco las afirmaciones verificables:** datos, cifras, fechas, nombres, citas, referencias y enlaces.
3. [ ] **Comparo con mi texto original**, si le entregué uno: ¿agregó, omitió o cambió algo?
4. [ ] **Abro las fuentes que citó** y reviso que existan y digan eso.
5. [ ] **Contrasto lo importante con al menos dos fuentes confiables**, independientes entre sí.
6. [ ] **Rastreo hasta el original:** la norma, el documento o el sitio del organismo.
7. [ ] **Reviso sesgo y vigencia:** ¿a quién deja fuera?, ¿el dato sigue vigente?
8. [ ] **Decido:** mantengo, corrijo o descarto cada afirmación.

Los pasos 1, 4, 5 y 6 vienen de SIFT y de las recomendaciones de los proveedores. **El mínimo de dos fuentes es un criterio de este
curso**: te asegura que no dependes de una sola página.

:::clave
No todo exige el checklist completo. Un correo de saludo no lo necesita. Una cifra que irá en un informe, un requisito legal o un dato
que afecta a otra persona, sí.
:::

## P13 · Corregir o descartar lo que no se puede verificar
cubre: H1, C2
fuentes: F-M1-09, F-M1-19, F-M1C2-01
bloque: Tabla de decisión + escenario

Después de contrastar, cada afirmación cae en una de estas situaciones:

| Lo que encontraste | Qué haces |
|---|---|
| Dos fuentes confiables confirman el dato | **Lo mantienes** y, si corresponde, citas la fuente |
| Las fuentes dicen otra cosa | **Lo corriges** con el dato de la fuente original |
| Las fuentes no coinciden entre sí | Buscas la fuente original o **lo dejas fuera** hasta aclararlo |
| No encuentras ninguna fuente | **Lo descartas**, o lo marcas como «no verificado» si es indispensable mencionarlo |

Fíjate en la última fila. Lo que no puedes verificar no se usa como si fuera cierto. Descartar no es perder trabajo: es evitar que un
error salga con tu nombre.

:::error Pedirle al mismo asistente que confirme su respuesta
Preguntar «¿estás seguro?» no es verificar. El asistente puede repetir el error o cambiarlo por otro con la misma seguridad. La
verificación se hace con fuentes externas. En el caso real de P02, el abogado le preguntó a ChatGPT si los casos eran reales y el
chatbot respondió que sí.
:::

:::ejemplo Andrés decide
Andrés tenía tres datos en un borrador de procedimiento. El primero lo confirmó en dos fuentes y lo mantuvo. El segundo estaba
desactualizado y lo corrigió con la norma vigente. El tercero, un porcentaje sin origen, no apareció en ninguna parte: lo borró.
:::

## P14 · Prevenir desde el prompt
cubre: S3, H1
fuentes: F-M1-15, F-M1-10
bloque: Texto + comparación antes/después

Validar es la defensa principal, pero también puedes **bajar el riesgo de error desde el prompt**. Los proveedores documentan dos
medidas:

1. **Entregar el texto y pedir que use solo ese contexto.** La guía de Google propone limitar al modelo a la información que le
   entregas. Así el asistente trabaja sobre tu documento y no rellena con datos de otra parte.
2. **Permitir que diga «no lo sé».** OpenAI explica que un modelo puede abstenerse en vez de inventar. Si se lo pides de forma
   explícita, le das una salida honesta.

**Antes:** «¿Cuáles son los requisitos para el cargo de asistente administrativa en la clínica?»
**Después:** «Usa solo el aviso que te pego. Lista los requisitos del cargo. Si un requisito no aparece en el aviso, no lo agregues. Si
no puedes responder con el aviso, dime "el aviso no lo indica". Aviso: "…"»

Estas medidas se conectan con lo que viste en el tema 2: son **restricciones**. Y se conectan con el tema 3: una instrucción de
precisión deja menos espacio para la variación.

:::clave
Un buen prompt reduce los errores, pero no los elimina. La respuesta igual se revisa con el checklist.
:::

## P15 · Práctica guiada: valida una respuesta
cubre: H1, C1, C2
fuentes: F-M1-19, F-M1-09, F-H-16
bloque: Proceso paso a paso + actividad

Ahora aplicas el checklist a una respuesta real.

1. **Abre Gemini** (o la alternativa que uses).
2. **Pide información verificable** sobre un tema del cargo de tu aviso. Por ejemplo: «¿Qué elementos de protección personal se usan
   en una bodega?» o «¿Qué debe tener una boleta electrónica?». No incluyas datos personales.
3. **Marca tres afirmaciones verificables** de la respuesta.
4. **Revisa si muestra fuentes** y ábrelas.
5. **Busca dos fuentes confiables** por cada afirmación, con lectura lateral.
6. **Decide** qué haces con cada una.

:::actividad Tu tabla de validación
| Afirmación | Fuente 1 | Fuente 2 | ¿Coinciden? | Decisión (mantener, corregir, descartar) |
|---|---|---|---|---|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |

Al final, escribe la versión corregida de la respuesta, solo con lo que pudiste verificar.
:::

:::clave
Si una afirmación no se puede verificar en dos fuentes confiables, no la uses en tu versión final. Anota por qué la descartaste.
:::

## P16 · Responsabilidad profesional
cubre: A1
fuentes: F-M1-12, F-M1-01, F-H-03, F-M1C2-03
bloque: Texto + escenario

Cuando firmas un informe, envías un correo o publicas un aviso, **quien responde eres tú**, no la herramienta. La guía de Google para
Gemini lo dice: hay que revisar todo resultado antes de usarlo, porque la persona es responsable del resultado final. Los términos de
uso de OpenAI advierten que los resultados pueden no ser precisos y que no conviene tomarlos como única fuente.

NIST describe un riesgo que conviene conocer: el **sesgo de automatización**, la tendencia a confiar de más en lo que entrega una
máquina. Mientras más cómodo y rápido es el asistente, más fácil es dejar de revisar.

**Responsabilidad profesional** significa:
- revisar con más cuidado mientras más grave sería el error;
- no firmar ni enviar lo que no entiendes o no revisaste;
- avisar cuando no pudiste verificar algo, en vez de presentarlo como seguro;
- corregir rápido si descubres un error después de compartirlo.

:::ejemplo Caso real: «el chatbot lo dijo» no sirve de excusa (Moffatt v. Air Canada, 2024)
El chatbot del sitio de Air Canada le dijo a un cliente que podía pedir una tarifa con descuento después de viajar. La página de la
política decía lo contrario. Ante el tribunal, la aerolínea sostuvo que no respondía por lo que dijera el chatbot. El 14-02-2024 el
tribunal de Columbia Británica lo rechazó: la empresa responde por toda la información de su sitio, y la condenó a pagar 812,02
dólares canadienses. No se sabe qué tecnología usaba el chatbot: lo que muestra el caso es que la empresa respondió por lo que publicó.
:::

:::ejemplo Andrés firma su reporte
La jefatura de Andrés le pide un reporte con el stock del mes. Andrés usa un asistente para ordenarlo, pero antes de firmarlo compara
cada cifra con su planilla. Encuentra una diferencia, la corrige y anota al final: «Cifras revisadas contra el sistema de inventario».
:::

:::comprueba
Un compañero dice: «Si el informe tiene un error, es culpa de la IA». ¿Qué responderías?
- a) Tiene razón: la herramienta generó el texto
- **b) No: quien firma o comparte el informe responde por su contenido**
- c) Depende de qué asistente haya usado
Retroalimentación: La herramienta ayuda a producir el texto, pero la responsabilidad sobre lo que se firma o comparte es de la persona.
:::

## P17 · Honestidad intelectual y cierre
cubre: A2, C1, C2
fuentes: F-M1-02, F-M1-09
bloque: Texto + lista de verificación + actividad de cierre

La **honestidad intelectual** es no presentar como propio, ni como seguro, algo que no lo es. En el uso de IA generativa significa:
- **No hacer pasar como tuyo un texto generado** cuando eso importa: la UNESCO lo describe como una forma nueva de plagio.
- **Decir que usaste IA** cuando a quien lo recibe le importa saberlo.
- **Separar lo verificado de lo que no.** Si algo no lo pudiste confirmar, dilo.
- **No confiar en «detectores» de texto hecho con IA.** La ayuda de ChatGPT advierte que no puede determinar si un texto fue escrito
  por IA.

En este tema viste los tipos de error (**alucinación, sesgo, desactualización** y salidas que no siguen el texto), los **criterios de
confiabilidad** de una fuente, la **lectura lateral**, el método **SIFT** y tu **checklist de validación**. También practicaste
contrastar con al menos dos fuentes y decidir qué mantener, corregir o descartar.

:::actividad Tu compromiso de validación
Escribe en tu bitácora:
1. Las tres situaciones de tu cargo en que siempre aplicarás el checklist completo.
2. Qué harás cuando no puedas verificar un dato que te piden.
3. Cómo dirás que usaste IA, si corresponde.
:::

## Ideas clave

1. Una respuesta segura y detallada no es una respuesta verificada: el modelo puede inventar con el mismo tono con que acierta.
2. Los errores que buscas son alucinación (datos, citas y fuentes inventadas), sesgo, desactualización y salidas que no siguen el texto
   o se contradicen.
3. Una fuente es confiable por quién está detrás, su experiencia, sus intereses, si es original y si está vigente, no por su aspecto.
4. La lectura lateral y SIFT te enseñan a salir de la página, investigar la fuente, buscar mejor cobertura y rastrear hasta el original.
5. En este curso, lo importante se contrasta con al menos dos fuentes confiables; lo que no se puede verificar se corrige o se descarta.
6. Un buen prompt reduce el error, pero no lo elimina: la validación sigue siendo necesaria.
7. Quien firma o comparte responde por el contenido, y la honestidad intelectual exige decir qué se verificó y cuándo se usó IA.

## Glosario

- **Validación**: revisión de una respuesta generada, contrastándola con el texto original y con fuentes confiables, antes de usarla.
- **Confabulación**: nombre que usa NIST para la alucinación: contenido falso o erróneo presentado con seguridad.
- **Desactualización**: error de una respuesta que da como vigente un dato que ya cambió.
- **Afirmación verificable**: dato, cifra, fecha, nombre, cita o referencia que se puede comprobar en una fuente.
- **Fuente confiable**: fuente con autoría identificable, experiencia en el tema, intereses claros y fecha vigente.
- **Fuente original**: documento, norma o sitio del que sale un dato, a diferencia de un comentario o resumen sobre él.
- **Lectura vertical**: evaluar un sitio leyéndolo de arriba abajo, sin salir de él.
- **Lectura lateral**: evaluar un sitio saliendo de él para ver qué dicen otras fuentes sobre quién está detrás.
- **SIFT**: método de cuatro pasos para evaluar información: detenerse, investigar la fuente, buscar mejor cobertura y rastrear hasta
  el original.
- **Checklist de validación**: lista de pasos que se aplica a una respuesta generada antes de usarla o compartirla.
- **Sesgo de automatización**: tendencia a confiar de más en lo que entrega una máquina y dejar de revisarlo.
- **Honestidad intelectual**: actitud de no presentar como propio ni como seguro lo que no lo es.

## Conexión con el proyecto

Tu checklist (P12) y tu tabla de validación (P15) son las herramientas del **caso M1-C2 · Cuando la IA inventa**. Allí analizarás casos
documentados en que alguien usó respuestas de IA sin verificarlas, qué se revisó y qué no, y qué consecuencias tuvo. Luego aplicarás
el checklist a las respuestas que obtienes con tu **biblioteca de prompts** del Hito 1, y lo seguirás usando en los módulos siguientes.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md`, `investigacion/HERRAMIENTAS-1.md` y, para los casos reales,
`investigacion/casos/M1-C2.md` (consultadas el 24-10-2026).

- F-M1-01 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://doi.org/10.6028/NIST.AI.600-1
- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-M1-09 · OpenAI Help Center (2026). ¿Dice ChatGPT la verdad? https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- F-M1-10 · OpenAI; Kalai y otros (2025). Por qué alucinan los modelos de lenguaje. https://openai.com/es-419/index/why-language-models-hallucinate/
- F-M1-11 · Noticias ONU (2024). La inteligencia artificial ya reproduce estereotipos de género. https://news.un.org/es/story/2024/03/1528182
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-M1-19 · Caulfield, M. (2019). SIFT (The Four Moves). https://hapgood.us/2019/06/19/sift-the-four-moves/
- F-M1-20 · Wineburg, S. y McGrew, S. (2018). Lateral Reading and the Nature of Expertise (manuscrito, Stanford Digital Repository). https://purl.stanford.edu/yk133ht8603
- F-M1C2-01 · Tribunal de Distrito de EE. UU., Distrito Sur de Nueva York (22-06-2023). Mata v. Avianca, Inc., 22-cv-1461 (PKC), Opinion and Order on Sanctions. https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0.pdf
- F-M1C2-03 · Civil Resolution Tribunal de Columbia Británica (14-02-2024). Moffatt v. Air Canada, 2024 BCCRT 149. https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do
- F-H-03 · OpenAI (2026). Términos de uso. https://openai.com/es-419/policies/terms-of-use/
- F-H-07 · OpenAI (2026). Searching the web with ChatGPT. https://help.openai.com/en/articles/9237897-chatgpt-search
- F-H-16 · Google (s. f.). Ver fuentes relacionadas de las aplicaciones de Gemini. https://support.google.com/gemini/answer/14143489?hl=es
- F-H-19 · Microsoft (2026). Copilot para gente joven. https://support.microsoft.com/es-es/privacy/microsoft-copilot/young-people

Recomendaciones del curso, sin fuente: el mínimo de **dos fuentes** confiables para contrastar (C2; SIFT y la lectura lateral piden
contrastar, pero no fijan un número), la tabla de criterios de confiabilidad de P08 como síntesis didáctica, el orden del checklist de
P12, la tabla de decisión de P13 y el error «pedirle al mismo asistente que confirme» (P13), que se apoya en la recomendación de usar
la IA como borrador y no como fuente final [F-M1-09]. Los ejemplos con Camila, Andrés y Rosa son ficticios y los datos de la respuesta de
P07 son inventados a propósito. Los dos casos reales (P02 y P16) se verificaron en las resoluciones de los tribunales.
