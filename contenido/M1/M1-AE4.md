# M1-AE4 · Validación de resultados

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-09, F-M1-01
bloque: Texto + imagen de portada

En el primer tema conociste tres límites de la IA generativa: la alucinación, el sesgo y la fecha de corte. En el tema anterior viste
que el mismo pedido puede dar respuestas distintas. Las dos cosas llevan a la misma conclusión: que una respuesta esté bien escrita no
quiere decir que esté verificada. Ahora vas a aprender a **validar** con método antes de usar o compartir lo que genera la IA.

El aprendizaje esperado es este: Validar resultados generados por IA, contrastándolos con fuentes confiables, para detectar
alucinaciones, errores y sesgos. Al terminar deberías poder identificar errores o sesgos en una respuesta generada, contrastar lo
importante con al menos dos fuentes confiables y corregir o descartar lo que no puedas verificar.

El tema se apoya en casos. Los errores que vas a ver son de tipos que documentan organismos y proveedores, como el NIST de Estados
Unidos y OpenAI [@F-M1-01; @F-M1-09]. Los ejemplos con Camila, Andrés, Rosa y otras personas son ficticios, pero muestran cómo aparecen esos errores en
tareas de oficina. En la actividad de análisis de casos vas a ver además situaciones reales en que alguien usó una respuesta sin
verificarla.

Validar no es desconfiar de todo. Es saber qué revisar, dónde hacerlo y cuándo una respuesta está lista para salir con tu nombre.

## P02 · Por qué hay que validar
cubre: S1
fuentes: F-M1-01, F-M1-09
bloque: Texto + recuadro destacado

Un modelo de lenguaje no consulta una base de datos de verdades: produce texto plausible a partir de patrones. El NIST explica que
inventar contenido es un resultado natural de ese diseño, porque el modelo predice el texto según los patrones estadísticos de sus
datos, no según lo que es cierto [@F-M1-01]. Y lo inventado sale con la misma seguridad que lo correcto.

La ayuda de ChatGPT lo dice de forma directa: el asistente puede dar respuestas incorrectas o engañosas con aparente seguridad, y esa
seguridad no garantiza que sea fiable [@F-M1-09]. Por eso recomienda usarlo como primer borrador y no como fuente final. Un error común es pensar
que una respuesta detallada debe ser cierta. El detalle es parte del estilo del modelo: una cifra con decimales o una cita con número
de artículo también pueden ser inventadas.

A Andrés le pasó cuando preguntó por el peso máximo que una persona puede levantar sola en una bodega. El asistente respondió con una
cifra exacta, con decimales y en tono seguro. Como no sabía de dónde salía, antes de ponerla en el diario mural decidió buscarla en la
norma y en el organismo que corresponde.

:::ejemplo Las referencias que nadie abrió
Marcela, un personaje ficticio, trabaja en el área legal de una empresa de transportes. Para responder el reclamo de un cliente le
pidió a un asistente fallos de tribunales que apoyaran a la empresa y recibió cuatro, con número, fecha y resumen. Le preguntó si eran
reales y el asistente dijo que sí. No abrió ninguno, y su gerente firmó el informe sin leerlos. El abogado del cliente no encontró dos
de esos fallos porque no existían, y la empresa tuvo que retirar el informe y dar explicaciones.
:::

## P03 · Error 1: alucinación
cubre: S1, C1
fuentes: F-M1-01, F-M1-09
bloque: Texto + knowledge check

La **alucinación**, que el NIST llama confabulación, es contenido falso o erróneo presentado con seguridad [@F-M1-01]. Puede tomar la forma de
datos inventados, como cifras, fechas o nombres de personas y empresas que no existen o no corresponden. Puede aparecer como citas y
fuentes inventadas: títulos de estudios, artículos de una ley o enlaces que no llevan a ninguna parte o que dicen otra cosa, algo que
la propia ayuda de ChatGPT advierte [@F-M1-09]. Y puede venir envuelta en un razonamiento que justifica algo falso, porque el modelo es capaz de
entregar pasos «lógicos» que hacen parecer correcta una respuesta equivocada.

Es más probable cuando pides citas o estudios, en respuestas largas a preguntas abiertas y en temas que exigen conocimiento experto [@F-M1-01]. Un
error común es dar por real un estudio porque trae nombre y año. Esos detalles dan apariencia de rigor, pero el modelo también los
puede inventar, así que toda cita se busca en su origen.

Camila lo vivió preparando una minuta para su jefatura. Le pidió al asistente «un dato con fuente sobre cuánto se atrasan los pagos a
proveedores en las constructoras» y recibió un porcentaje atribuido a un estudio con nombre y año. Al buscarlo, no encontró ese estudio
en ninguna parte. El dato no podía ir en la minuta.

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
fuentes: F-M1-01, F-M1-11
bloque: Texto + imagen comparativa

El **sesgo** aparece cuando la respuesta repite estereotipos o presenta una sola mirada como si fuera la única. Es más difícil de ver
que una cifra inventada, porque el texto puede ser correcto en los datos y aun así ser parcial.

Hay formas documentadas. Un estudio de la UNESCO encontró que, al pedir historias, los modelos asignaban a los hombres trabajos más
variados y de más prestigio, y a las mujeres roles domésticos o desvalorizados [@F-M1-11]. El NIST describe modelos de imagen que, al pedir un
gerente, un médico o un juez, dejan fuera a mujeres, a minorías y a personas con discapacidad [@F-M1-01]. Y llama «homogeneización» a las salidas
que se parecen demasiado entre sí, como si hubiera una sola manera de decir las cosas.

Para detectarlo sirven dos preguntas: ¿a quién deja fuera esta respuesta?, ¿qué supone sin que yo se lo haya dicho? Si la respuesta
asume el género, la edad o el origen de alguien sin que lo pidieras, ahí hay un sesgo que corregir antes de usar el texto.

:::ejemplo El perfil que nadie pidió
Rosa ayuda a redactar la publicación de una vacante de técnico en mantención para el centro médico. El borrador del asistente dice
«buscamos un hombre con experiencia». Rosa no pidió eso. Corrige el texto para que hable del cargo y de los requisitos, no del género
de la persona que lo va a ocupar.
:::

## P05 · Error 3: desactualización
cubre: S1, C1
fuentes: F-M1-09, F-H-16
bloque: Texto + línea de tiempo

La **desactualización** ocurre cuando la respuesta da como vigente algo que ya cambió. Se debe a la fecha de corte: el modelo no conoce
lo que pasó después de su entrenamiento, salvo que use herramientas como la búsqueda web [@F-M1-09]. Es más probable con:

- valores que cambian cada año, como montos, porcentajes o tarifas;
- normas, trámites y requisitos que se modifican;
- horarios, direcciones y contactos de servicios;
- nombres de cargos y autoridades.

Gemini a veces muestra un botón «Fuentes» con los enlaces que usó, y ChatGPT con la búsqueda activada puede citar fuentes recientes [@F-H-16; @F-M1-09].
Eso ayuda, pero no resuelve todo: la página que encontró puede ser antigua o poco confiable, y el resumen puede tener errores. Camila
lo comprobó cuando preguntó el horario de atención de una oficina pública donde debía hacer un trámite para la constructora. El
asistente le dio un horario con total seguridad; en el sitio del servicio vio que había cambiado hace unos meses.

:::error «Si la respuesta trae fecha reciente, está al día»
Una respuesta puede mencionar el año actual y aun así usar un dato antiguo. Lo que importa es la fecha de la fuente, no la del texto
generado.
:::

## P06 · Otros errores: no seguir el texto y contradecirse
cubre: S1, C1
fuentes: F-M1-01
bloque: Texto + knowledge check

Además de los tres errores principales, el NIST documenta salidas que no siguen el texto entregado o que se contradicen [@F-M1-01]. Son
frecuentes cuando le pides resumir o transformar un documento, y aparecen de cuatro maneras:

- agrega algo que el texto no dice, como la firma del gerente general en el resumen del instructivo de Camila;
- omite algo importante, como una fecha límite o una excepción;
- cambia un dato al copiarlo: un número, un nombre, una cantidad;
- se contradice, y en un párrafo dice una cosa y en otro lo contrario.

Estos errores se detectan comparando con el original, línea por línea. No necesitas otra fuente: el texto que entregaste es tu
referencia. Cuando hay una contradicción, en cambio, al menos una de las dos afirmaciones es falsa, y eso se resuelve con la fuente, no
con el modelo. A Rosa le llegó un borrador que en el primer párrafo decía «atendemos de lunes a viernes» y en el último «también los
sábados»; lo marcó como contradicción y confirmó el horario con la información del centro.

:::comprueba
Andrés pide resumir el reporte de stock. El reporte dice 120 cajas de guantes y el resumen dice 210. ¿Qué tipo de error es?
- a) Sesgo
- b) Desactualización
- **c) Salida que no sigue el texto entregado: cambió un dato**
Retroalimentación: El dato correcto estaba en el reporte. El resumen lo cambió al transformarlo. Se detecta comparando con el original.
:::

## P07 · Caso de práctica: encuentra los errores
cubre: C1, S1
fuentes: F-M1-01, F-M1-11
bloque: Escenario o actividad de marcar (hotspot)

Camila le pidió a un asistente: «Explícame cómo se organiza el registro de facturas en una oficina y qué datos hay que anotar de cada
una». Lee la respuesta que recibió. Los datos son ficticios a propósito, así que no los uses como información real: el objetivo es
entrenar el ojo.

> «El registro de facturas lo lleva la secretaria del gerente. De cada factura se anotan el número, la fecha, el proveedor y el monto.
> Según el estudio "Oficinas Ordenadas 2019", el 87 % de las empresas pierde al menos una factura al año. Para pasar a pesos los
> montos en UF, considera que la UF vale $28.000. Las mujeres suelen destacar en este trabajo por su paciencia y orden. Te recomiendo
> además inscribirte en un curso de contabilidad avanzada.»

Algunas partes sirven y otras no. La lista de datos que se anotan de cada factura responde bien a lo pedido; el resto merece una
segunda mirada antes de que Camila use algo de esta respuesta [@F-M1-01; @F-M1-11].

:::actividad Marca los errores
Identifica en la respuesta:
1. Un posible dato inventado, con una fuente difícil de comprobar. → El estudio con nombre, año y porcentaje.
2. Un dato que puede estar desactualizado. → El valor de la UF, que cambia todos los días.
3. Un sesgo. → Suponer que el registro lo lleva «la secretaria del gerente» y que las mujeres destacan «por su paciencia».
4. Algo que no responde a lo pedido. → La recomendación de un curso de contabilidad, que Camila no preguntó.

Para cada uno, escribe qué harías: verificar, corregir o descartar.
:::

## P08 · Criterios de confiabilidad de una fuente
cubre: S2
fuentes: F-M1-19, F-M1-20
bloque: Texto + tabla

Para contrastar necesitas **fuentes confiables**. ¿Cómo sabes si una lo es? El investigador Mike Caulfield propone preguntarse quién
está detrás, con qué experiencia y con qué intereses [@F-M1-19]. A partir de eso, puedes usar estos criterios:

| Criterio | Pregunta | Señal de confianza |
|---|---|---|
| Autoría | ¿Quién publica? | Un organismo, una institución o una persona identificable con experiencia en el tema |
| Experiencia | ¿Sabe de esto? | Es su área de trabajo o de estudio |
| Interés | ¿Gana algo con que le creas? | No vende el producto del que habla, o lo dice con claridad |
| Origen | ¿Es la fuente original? | Es el documento, la norma o el sitio del organismo, no un comentario sobre él |
| Fecha | ¿Está vigente? | Tiene fecha y es reciente para un dato que cambia |
| Independencia | ¿Lo confirman otras? | Otras fuentes sin relación entre sí dicen lo mismo |

Un estudio de la Universidad de Stanford encontró que incluso personas expertas en otros temas se dejaban engañar por logos y dominios
de apariencia seria [@F-M1-20]. El aspecto de un sitio no prueba que sea confiable.

:::error «Si el sitio se ve profesional, es confiable»
Un buen diseño, un logo o un dominio que parece institucional se pueden imitar. Lo que importa es quién está detrás, y eso se averigua
fuera del sitio.
:::

## P09 · Lectura lateral: salir del sitio para evaluarlo
cubre: S2, C2
fuentes: F-M1-20, F-M1-19
bloque: Texto + proceso en 3 pasos

Los investigadores Sam Wineburg y Sarah McGrew compararon cómo evalúan un sitio web historiadores, estudiantes y verificadores
profesionales de información. Historiadores y estudiantes leyeron el sitio de arriba abajo, sin salir de él, y a eso le llamaron
**lectura vertical**. Los verificadores, en cambio, tras un vistazo rápido salieron del sitio y abrieron otras pestañas para ver qué
decían otras fuentes de él. A eso le llamaron **lectura lateral**, y con ella llegaron a mejores conclusiones en menos tiempo [@F-M1-20].

Desde el celular se hace en tres pasos:

1. No te quedes leyendo la página que te dio el asistente.
2. Abre una pestaña nueva y busca el nombre de la fuente: quién es y qué dicen otros de ella [@F-M1-19].
3. Vuelve solo si lo que encontraste te da confianza.

Andrés lo probó con un enlace que le dio el asistente: un sitio con recomendaciones de seguridad para bodegas que se veía serio. En
otra pestaña descubrió que era de una empresa que vende fajas lumbares. No lo descartó del todo, pero buscó la información en el
organismo público que corresponde.

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

Mike Caulfield resumió la evaluación de información en cuatro movimientos, conocidos por su sigla en inglés: **SIFT** [@F-M1-19].

1. Detente (Stop). Antes de usar o compartir, pregúntate si conoces esta fuente y si sabes que es confiable.
2. Investiga la fuente (Investigate the source). Averigua quién está detrás, qué experiencia tiene y qué intereses; aquí usas la lectura lateral.
3. Busca una cobertura mejor (Find better coverage). Cuando importa más la afirmación que la página, busca otras fuentes confiables que hablen de lo mismo y mira si coinciden.
4. Rastrea hasta el original (Trace claims to the original context). Sigue la cita, el dato o la imagen hasta su origen, para ver si fue recortado o sacado de contexto.

SIFT se pensó para evaluar lo que circula en internet, pero sirve igual para una respuesta de IA. Cada dato que el asistente te da es
una afirmación que puedes detener, investigar, contrastar y rastrear.

:::ejemplo SIFT con una respuesta de IA
Rosa recibe del asistente un requisito para un examen médico. Se detiene, porque no sabe de dónde salió. Investiga y ve que el
asistente citó un blog sin autor. Busca una cobertura mejor y encuentra la indicación en el sitio del laboratorio y en el del centro
donde trabaja. Al rastrear, descubre que la indicación del blog estaba recortada y omitía una excepción.
:::

## P11 · Las fuentes que muestra el asistente
cubre: S2, H1
fuentes: F-H-16, F-M1-09
bloque: Texto + imagen de una respuesta con fuentes

Varios asistentes muestran de dónde sacaron la información. A veces Gemini muestra un botón «Fuentes» con enlaces a sitios web o a
archivos que subiste, y ChatGPT, con la búsqueda activada, puede citar fuentes recientes [@F-H-16; @F-M1-09]. Es una gran ayuda, pero una fuente citada no
es una fuente verificada. La propia ayuda de ChatGPT recomienda revisar las citas y abrir los enlaces [@F-M1-09].

Al abrirlos, comprueba tres cosas:

1. Que el enlace exista y abra.
2. Que diga lo que el asistente afirma, porque a veces la página habla del tema pero no trae ese dato.
3. Que sea confiable, aplicando los criterios y la lectura lateral.

Camila hizo justo eso cuando Gemini le dio tres requisitos para inscribir a su equipo en un curso de capacitación, con dos fuentes. La
primera era el sitio del organismo y decía lo mismo. La segunda era un foro de hace cuatro años. Se quedó con la primera y buscó otra
fuente confiable para completar.

:::error «Si trae enlace, ya está verificado»
El enlace puede no abrir, llevar a una página que no dice eso o ser poco confiable. Hasta que lo abres y lo lees, es solo una pista.
:::

## P12 · Tu checklist de validación
cubre: S3
fuentes: F-M1-19, F-M1-09
bloque: Lista de verificación (checklist) descargable

Ahora juntas todo en un **checklist de validación**: una lista de pasos que aplicas a una respuesta antes de usarla.

1. [ ] Me detengo: no copio ni envío todavía.
2. [ ] Marco las afirmaciones verificables: datos, cifras, fechas, nombres, citas, referencias y enlaces.
3. [ ] Comparo con mi texto original, si le entregué uno: ¿agregó, omitió o cambió algo?
4. [ ] Abro las fuentes que citó y reviso que existan y digan eso.
5. [ ] Contrasto lo importante con al menos dos fuentes confiables, independientes entre sí.
6. [ ] Rastreo hasta el original: la norma, el documento o el sitio del organismo.
7. [ ] Reviso sesgo y vigencia: ¿a quién deja fuera?, ¿el dato sigue vigente?
8. [ ] Decido: mantengo, corrijo o descarto cada afirmación.

Los pasos 1, 4, 5 y 6 vienen de SIFT y de las recomendaciones de los proveedores [@F-M1-19; @F-M1-09]. El mínimo de dos fuentes es un criterio de este
curso, no de una fuente externa: te asegura que no dependes de una sola página.

:::clave
No todo exige el checklist completo. Un correo de saludo no lo necesita. Una cifra que irá en un informe, un requisito legal o un dato
que afecta a otra persona, sí.
:::

## P13 · Corregir o descartar lo que no se puede verificar
cubre: H1, C2
fuentes: F-M1-09, F-M1-19
bloque: Tabla de decisión + escenario

Después de contrastar, cada afirmación cae en una de estas situaciones:

| Lo que encontraste | Qué haces |
|---|---|
| Dos fuentes confiables confirman el dato | Lo mantienes y, si corresponde, citas la fuente |
| Las fuentes dicen otra cosa | Lo corriges con el dato de la fuente original |
| Las fuentes no coinciden entre sí | Buscas la fuente original o lo dejas fuera hasta aclararlo |
| No encuentras ninguna fuente | Lo descartas, o lo marcas como «no verificado» si es indispensable mencionarlo |

Fíjate en la última fila. Lo que no puedes verificar no se usa como si fuera cierto [@F-M1-09; @F-M1-19], y **descartar** no es perder trabajo: es evitar
que un error salga con tu nombre. Andrés tenía tres datos en un borrador de procedimiento. El primero lo confirmó en dos fuentes y lo
mantuvo. El segundo estaba desactualizado y lo corrigió con la norma vigente. El tercero, un porcentaje sin origen, no apareció en
ninguna parte, así que lo borró.

:::error Pedirle al mismo asistente que confirme su respuesta
Preguntar «¿estás seguro?» no es verificar. El asistente puede repetir el error o cambiarlo por otro con la misma seguridad. Es lo que
le pasó a Marcela en la pantalla 2: preguntó si los fallos eran reales y el asistente dijo que sí. La verificación se hace con fuentes
externas.
:::

## P14 · Prevenir desde el prompt
cubre: S3, H1
fuentes: F-M1-15, F-M1-10
bloque: Texto + comparación antes/después

Validar es la defensa principal, pero también puedes bajar el riesgo de error desde el prompt. Los proveedores documentan dos medidas.
La primera es entregar el texto y pedir que use solo ese contexto: la guía de Google propone limitar al modelo a la información que le
das, para que trabaje sobre tu documento y no rellene con datos de otra parte [@F-M1-15]. La segunda es permitirle decir «no lo sé». OpenAI
explica que un modelo puede abstenerse en vez de inventar [@F-M1-10], y si se lo pides de forma explícita le das una salida honesta.

Camila lo aplicó a una consulta frecuente de su equipo. Antes preguntaba: «¿Qué documentos hay que adjuntar a una rendición de
gastos?», y el asistente respondía con una lista general que mezclaba prácticas de otras empresas. Ahora escribe:

> «Usa solo el instructivo que te pego. Lista los documentos que hay que adjuntar a una rendición. Si algo no aparece en el
> instructivo, no lo agregues y escribe "el instructivo no lo indica". Instructivo: "…"»

Estas medidas se conectan con lo que viste en el tema 2, porque son restricciones, y con el tema 3, porque una instrucción de precisión
deja menos espacio para la variación.

:::clave
Un buen prompt reduce los errores, pero no los elimina. La respuesta igual se revisa con el checklist.
:::

## P15 · Práctica guiada: valida una respuesta
cubre: H1, C1, C2
fuentes: F-M1-19, F-H-16
bloque: Proceso paso a paso + actividad

Ahora aplicas el checklist a una respuesta real, sobre un tema de tu trabajo.

1. Abre Gemini o el asistente que uses.
2. Pide información verificable sobre un tema de tu cargo, sin datos personales ni de tu empresa. Por ejemplo: «¿Qué elementos de protección personal se usan en una bodega?» o «¿Qué debe tener una boleta electrónica?».
3. Marca tres afirmaciones verificables de la respuesta.
4. Revisa si muestra un botón o una lista de fuentes, y ábrelas [@F-H-16].
5. Busca dos fuentes confiables por cada afirmación, con lectura lateral [@F-M1-19].
6. Decide qué haces con cada una.

Si una afirmación no se puede verificar en dos fuentes confiables, no la uses en tu versión final y anota por qué la descartaste.

:::actividad Tu tabla de validación
| Afirmación | Fuente 1 | Fuente 2 | ¿Coinciden? | Decisión (mantener, corregir, descartar) |
|---|---|---|---|---|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |

Al final, escribe la versión corregida de la respuesta, solo con lo que pudiste verificar.
:::

## P16 · Responsabilidad profesional
cubre: A1
fuentes: F-M1-12, F-M1-01
bloque: Texto + escenario

Cuando firmas un informe, envías un correo o publicas un aviso, quien responde eres tú, no la herramienta. La guía de Google para
Gemini lo dice con todas sus letras: hay que revisar todo resultado antes de usarlo, porque la persona es responsable del resultado
final [@F-M1-12]. El NIST agrega un riesgo que conviene conocer, el **sesgo de automatización**: la tendencia a confiar de más en lo que entrega
una máquina [@F-M1-01]. Mientras más cómodo y rápido es el asistente, más fácil es dejar de revisar.

En la práctica, la **responsabilidad profesional** significa revisar con más cuidado mientras más grave sería el error, no firmar ni
enviar lo que no entiendes o no revisaste, avisar cuando no pudiste verificar algo en vez de presentarlo como seguro, y corregir rápido
si descubres un error después de compartirlo.

Vale también para las empresas. Imagina una tienda de electrodomésticos que pone un asistente de IA en su sitio web. Un cliente
pregunta si puede devolver un producto después de 60 días y el asistente le dice que sí, aunque la política publicada en el mismo sitio
dice 30. Cuando el cliente reclama, decir «se equivocó el asistente» no sirve de excusa: la información del sitio es responsabilidad de
la tienda, la haya escrito una persona o una máquina.

Andrés lo tiene claro. Antes de firmar el reporte mensual de stock que ordenó con un asistente, compara cada cifra con su planilla,
corrige una diferencia y anota al final: «Cifras revisadas contra el sistema de inventario».

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
bloque: Texto + actividad de cierre

La **honestidad intelectual** es no presentar como propio, ni como seguro, algo que no lo es. Con la IA generativa significa no hacer
pasar como tuyo un texto generado cuando eso importa, porque la UNESCO lo describe como una forma nueva de plagio [@F-M1-02], y decir que usaste
IA cuando a quien lo recibe le importa saberlo. Significa también separar lo verificado de lo que no: si algo no lo pudiste confirmar,
lo dices. Y significa no confiar en los «detectores» de texto hecho con IA; la ayuda de ChatGPT advierte que no puede determinar si un
texto fue escrito por una IA [@F-M1-09].

En este tema viste los tipos de error que conviene buscar (alucinación, sesgo, desactualización y salidas que no siguen el texto), los
criterios para saber si una fuente es confiable, la lectura lateral, el método SIFT y tu checklist de validación. También practicaste
contrastar con al menos dos fuentes y decidir qué mantener, qué corregir y qué descartar.

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

## Referencias bibliográficas

- Caulfield, M. (2019, 19 de junio). *SIFT (The four moves)*. Hapgood. https://hapgood.us/2019/06/19/sift-the-four-moves/
- Google. (s. f.-a). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Google. (s. f.-b). *Ver fuentes relacionadas de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/14143489?hl=es
- Google. (2026, 13 de octubre). *Estrategias de diseño de instrucciones*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- Miao, F. y Holmes, W. (2024). *Guía para el uso de IA generativa en educación e investigación*. UNESCO. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Noticias ONU. (2024, 7 de marzo). *La inteligencia artificial ya reproduce estereotipos de género*. https://news.un.org/es/story/2024/03/1528182
- OpenAI. (2025, 5 de septiembre). *Por qué alucinan los modelos de lenguaje*. https://openai.com/es-419/index/why-language-models-hallucinate/
- OpenAI. (2026). *¿Dice ChatGPT la verdad?* OpenAI Help Center. https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- Wineburg, S. y McGrew, S. (2018). *Lateral reading and the nature of expertise: Reading less and learning more when evaluating digital information*. Stanford Digital Repository. https://purl.stanford.edu/yk133ht8603
