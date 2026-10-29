# M3-AE4 · Análisis crítico y privacidad

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-13, F-M3-14
bloque: Texto + imagen

En este módulo usaste la IA para buscar, contrastar y presentar información. Queda una pregunta que atraviesa todo lo anterior: qué le
estás entregando a la herramienta y qué te está devolviendo. Por un lado, sus resultados pueden tener sesgos, errores difíciles de
rastrear y límites. Por otro, lo que escribes o subes puede incluir datos de personas o información de tu empresa que no debería salir
de ahí.

El aprendizaje esperado es este: Evaluar críticamente los resultados de la IA y los riesgos de privacidad al usar información laboral,
proponiendo prácticas de uso seguro. Al final deberías poder clasificar la información de tu trabajo según su sensibilidad, decidir con
fundamento qué puede ingresar a una herramienta de IA y proponer una práctica segura para lo que no puede.

Los riesgos que vas a ver no son supuestos: están descritos por organismos como el NIST, el instituto de normas y tecnología de Estados
Unidos, y por la ley chilena de protección de datos [@F-M3-13; @F-M3-14]. Los ejemplos con Camila, Andrés y Rosa son ficticios, pero muestran cómo aparecen
esos riesgos en tareas de oficina comunes. En la actividad de análisis de casos vas a ver situaciones reales.

Como trabajas con información real todos los días, este tema tiene una consecuencia práctica: cuando quieras probar una herramienta
con un documento de tu trabajo, usa una copia sin datos sensibles o con datos de prueba, y sigue lo que diga tu empresa.

:::clave
Lo que verás sobre leyes es orientación general para usar la IA con cuidado, no asesoría legal. Si en tu trabajo tienes una duda
concreta sobre datos personales, consulta a quien corresponda en tu organización o a un profesional.
:::

## P02 · Evaluar un resultado: tres preguntas
cubre: S1
fuentes: F-M3-13, F-M3-01
bloque: Texto + proceso en 3 pasos

En el módulo 1 aprendiste a validar una respuesta, y en el tema 2 de este módulo, a contrastar fuentes. **Evaluar críticamente** va
un paso más allá: no solo preguntas si un dato es correcto, sino qué tan confiable es el proceso que lo produjo. Para eso sirven tres
preguntas, en este orden:

1. ¿Qué sesgos puede tener? ¿A quién representa bien esta respuesta y a quién deja fuera?
2. ¿Puedo rastrearla? ¿Sé de dónde salió cada afirmación?
3. ¿Qué límites tiene? ¿Qué no puede hacer bien esta herramienta, aunque lo intente?

NIST describe estos tres frentes entre los riesgos de la IA generativa: el sesgo dañino, la confabulación (lo que solemos llamar
alucinación) y los problemas de integridad de la información [@F-M3-13]. Las herramientas de este módulo ayudan con la trazabilidad, porque un
buscador con citas enlaza cada afirmación a su fuente [@F-M3-01]. Los otros dos frentes, en cambio, no los resuelven.

Camila aplicó las tres preguntas al borrador de su informe del Hito 3 antes de entregarlo a la gerenta de administración. Descubrió
que casi todas las fuentes sobre archivo de documentos digitales eran de otros países y que un párrafo no tenía ninguna cita. Ajustó
los mensajes clave para decir que la evidencia chilena era escasa y sacó el párrafo sin respaldo.

:::comprueba
¿Qué agrega «evaluar críticamente» a «validar un dato»?
- a) Nada, son lo mismo
- **b) Revisar también los sesgos, la trazabilidad y los límites del proceso que produjo la respuesta**
- c) Confiar más en la herramienta
Retroalimentación: Validar revisa si un dato es correcto. Evaluar críticamente revisa también qué tan confiable es el camino por el
que llegó.
:::

## P03 · Sesgos en una investigación hecha con IA
cubre: S1
fuentes: F-M3-13
bloque: Texto + escenario

NIST explica que la IA generativa puede amplificar sesgos históricos y sociales y rendir distinto según el grupo o el idioma, en parte
porque sus datos de entrenamiento no son representativos [@F-M3-13]. También describe la **homogeneización**: respuestas demasiado parecidas
entre sí, que repiten una sola mirada.

En una investigación de trabajo esto se nota de formas concretas. Si hay más información en inglés o sobre otros países, la respuesta
puede describir prácticas o normas que no aplican en Chile. Como las fuentes más visibles suelen ser de grandes empresas, una pyme o
un centro médico pequeño quedan fuera del retrato. Y una respuesta sobre «el cliente típico» o «el trabajador ideal» puede dejar fuera
a grupos completos de personas.

Para detectarlo, hazte tres preguntas frente a cada resultado: de qué país y de qué tipo de organización son las fuentes, si eso
aplica a tu realidad y a quién no menciona. Un error común es pensar que la IA es neutral porque es una máquina. Los modelos aprenden
de lo que la gente escribió y publicó, con sus desigualdades, y una respuesta puede ser correcta en los datos y aun así representar a
un solo grupo.

:::ejemplo Rosa detecta un sesgo
Rosa pide ideas para reducir la inasistencia. Todas suponen que los pacientes tienen teléfono inteligente y correo. Muchos pacientes de
su centro son personas mayores que prefieren una llamada. Rosa agrega esa limitación a su informe y pide ideas pensadas para ese
grupo.
:::

## P04 · Trazabilidad: ¿puedo seguir el dato hasta su origen?
cubre: S1
fuentes: F-M3-01, F-M3-13
bloque: Texto + tabla

La **trazabilidad** es la posibilidad de seguir una afirmación hasta su origen. Es lo que te permite verificarla y citarla, y no todas
las respuestas de IA la tienen en el mismo nivel.

| Situación | Trazabilidad | Qué hacer |
|---|---|---|
| Respuesta de un asistente sin fuentes | Baja: no sabes de dónde salió | Úsala solo como pista y busca la fuente |
| Respuesta de un buscador con citas | Media: cada afirmación enlaza a una página [@F-M3-01] | Abre cada cita y revisa que diga eso |
| Respuesta de un asistente sobre tus fuentes | Alta: cita la parte exacta de tus documentos, como viste en el tema 1 | Toca las citas y compara con el texto |

Hay un límite que ninguna herramienta resuelve hoy. NIST señala que la mayoría de los desarrolladores no informa con qué datos entrenó
sus modelos [@F-M3-13]. Cuando un asistente responde «de memoria», no hay forma de saber de qué textos aprendió eso.

Por eso, en este curso, la regla es simple: lo que no puedes rastrear no lo presentas como hecho. Si necesitas mencionarlo, dices que
no está verificado.

:::comprueba
¿Qué respuesta tiene mayor trazabilidad?
- a) La de un asistente que responde sin mostrar fuentes
- b) Un resumen que te reenvió un compañero
- **c) La de un asistente sobre fuentes propias que cita el párrafo de tu documento**
Retroalimentación: Cuando la respuesta apunta a la parte exacta de un documento que tienes, puedes comprobarla de inmediato.
:::

## P05 · Límites que no desaparecen
cubre: S1
fuentes: F-M3-13, F-M3-02
bloque: Texto + escenario

Aun con buenas herramientas, hay límites que siguen ahí. NIST explica que la IA puede producir contenido falso con total seguridad,
incluso razonamientos o **citas inventadas** para justificar la respuesta, y que puede presentar una opinión como si fuera un hecho sin
reconocer cuándo no está segura [@F-M3-13]. Trabajar sobre tus propios documentos tampoco lo elimina: la ayuda de Gemini Notebook advierte que
sus respuestas pueden tener errores, y recomienda consultar a un profesional en temas médicos, legales o financieros [@F-M3-02].

Este último punto importa mucho en el trabajo. Una herramienta puede ayudarte a entender una norma o a ordenar información, pero no
reemplaza a quien tiene la responsabilidad y la formación para decidir. Andrés, por ejemplo, le preguntó a un asistente si su bodega
cumplía una norma de seguridad y recibió una respuesta segura y detallada. La usó para entender de qué trataba la norma, pero la
decisión la tomó con el prevencionista de riesgos de la empresa.

Por eso un error común es creer que, si la herramienta trabaja con tus documentos, sus conclusiones son seguras. Mejora la
trazabilidad, pero puede resumir mal o mezclar ideas, y en temas legales, médicos o financieros la conclusión la revisa una persona
con formación en el tema.

:::ejemplo Un informe con referencias que nadie abrió
Una compañera de Rosa preparó para la dirección del centro médico un informe sobre tiempos de espera con ayuda de un asistente. Las
referencias se veían impecables, con autores, años y títulos. En la reunión, el director quiso leer dos de ellas y no las encontró:
no existían. El informe tuvo que rehacerse y, aunque el resto de los datos era correcto, ya nadie confiaba en él para decidir.
:::

## P06 · El otro lado: lo que tú le entregas a la IA
cubre: S2, S4
fuentes: F-M3-20, F-M3-13
bloque: Texto + escenario

Hasta aquí evaluaste lo que la IA te devuelve. Ahora mira lo que tú le entregas. Cada pregunta que escribes y cada archivo que subes
sale de tu control y queda en los sistemas de un proveedor.

El Centro de Privacidad de Gemini lo explica con claridad. Con el ajuste de actividad encendido, Google usa tu actividad para mejorar
sus servicios, incluido el entrenamiento de IA generativa, y revisores humanos leen una parte de las conversaciones, desvinculadas de
tu cuenta. El mismo centro recomienda expresamente no ingresar datos confidenciales ni nada que no quieras que vea un revisor [@F-M3-20].

NIST agrega otro riesgo: los modelos pueden filtrar, generar o inferir datos sensibles de personas, incluso combinando información que
estaba dispersa [@F-M3-13]. Un dato suelto puede parecer inofensivo, pero junto con otros puede identificar a alguien.

Por eso, antes de escribir o subir algo, la pregunta no es solo si te va a servir la respuesta, sino también si puedes entregar esa
información. Una vez que pegas algo en una herramienta ya no lo puedes «des-pegar», así que la decisión se toma antes.

:::ejemplo La nómina que se subió completa
En la constructora donde trabaja Camila, una persona del área de remuneraciones quiso revisar más rápido la nómina del mes y la subió
entera a un asistente gratuito, con nombres, RUT y sueldos. No lo hizo por descuido, sino para trabajar mejor. Cuando la gerencia se
enteró, ya no había forma de retirar esa información ni de saber quién podía haberla leído. La empresa decidió definir por escrito qué
herramientas se pueden usar y con qué información.
:::

## P07 · Qué es un dato personal
cubre: S2, C1
fuentes: F-M3-14, F-M3-15
bloque: Texto + tarjetas (flashcards)

Para decidir qué puedes entregar, primero tienes que reconocer un **dato personal**. En Chile lo define la ley. La Ley 19.628, vigente,
dice que es cualquier información sobre personas naturales identificadas o identificables [@F-M3-14]. La Ley 21.719, que según su texto rige
desde el 1 de diciembre de 2026, lo amplía: es cualquier información vinculada a una persona natural identificada o identificable,
directa o indirectamente, y da como ejemplos el nombre, el RUN y elementos de su identidad física, genética, psíquica, económica,
cultural o social [@F-M3-15].

Fíjate en la palabra identificable. No hace falta el nombre para que un dato sea personal: basta con que, juntando datos, se pueda
saber de quién se habla. Por ejemplo, «el paciente de las 10:30 del martes con el doctor de traumatología», «la única supervisora del
turno de noche de la sucursal de Maipú», una foto, una dirección o un número de teléfono.

Una **persona natural** es un ser humano. Los datos de una empresa, que es una persona jurídica, como sus ventas, no son datos
personales, aunque pueden ser confidenciales, como verás en P09. En una oficina conviven los dos tipos: la planilla de facturas que
registra Camila tiene datos de empresas, pero si un proveedor es una persona que trabaja por su cuenta, su nombre y su RUT son datos
personales.

:::comprueba
¿Cuál de estos es un dato personal?
- a) El total de despachos de la semana
- **b) «El conductor que llegó atrasado el lunes al turno de la mañana»**
- c) El nombre de un producto
Retroalimentación: Aunque no diga el nombre, permite identificar a una persona concreta. Por eso es un dato personal.
:::

## P08 · Datos sensibles: los que exigen más cuidado
cubre: S2, C1
fuentes: F-M3-14, F-M3-15
bloque: Texto + tabla comparativa

Algunos datos personales son **sensibles**: su mal uso puede causar discriminación o un daño grave, y por eso la ley los protege con
más fuerza. Las dos leyes los describen así.

| Ley 19.628 (vigente) | Ley 21.719 (según su texto, desde el 1 de diciembre de 2026) |
|---|---|
| Datos que se refieren a características físicas o morales de las personas, o a su vida privada o intimidad. Por ejemplo: hábitos personales, origen racial, ideologías y opiniones políticas, creencias religiosas, salud física o psíquica, vida sexual [@F-M3-14] | Datos que revelan, entre otros: origen étnico o racial; afiliación política, sindical o gremial; situación socioeconómica; convicciones ideológicas o filosóficas; creencias religiosas; salud; perfil biológico; datos biométricos; vida sexual; orientación sexual e identidad de género [@F-M3-15] |

Las dos leyes coinciden en lo central: salud, creencias, origen, opiniones políticas y vida sexual son datos sensibles. La Ley 21.719
nombra de forma expresa otros que aparecen a menudo en el trabajo, como la afiliación sindical, la situación socioeconómica y los datos
biométricos, por ejemplo la huella con que se marca la entrada.

En una oficina los datos sensibles aparecen más de lo que parece: una licencia médica que llega para tramitar, un certificado de
discapacidad, la lista de quienes pertenecen al sindicato.

:::error «Si quito el nombre, un dato de salud deja de ser sensible»
Si con el resto de la información se puede saber de quién se trata, sigue siendo un dato personal sensible. Un diagnóstico con la
fecha, el cargo y el turno puede identificar a alguien.
:::

## P09 · Información confidencial de una organización
cubre: S2, C1
fuentes: F-M3-19, F-M3-17
bloque: Texto + tabla de tres niveles

No todo lo que hay que proteger son datos de personas. Una empresa también tiene **información confidencial**: precios negociados,
listas de clientes, ventas, remuneraciones, contratos o planes que aún no se anuncian. El Instituto Nacional de Ciberseguridad de
España (INCIBE) propone clasificar la información de una empresa según quién puede acceder a ella, en tres niveles [@F-M3-19].

| Nivel | Quién accede | Ejemplos |
|---|---|---|
| Confidencial | Solo personas concretas | Remuneraciones, contratos, datos de salud del personal |
| Interna | Solo el personal de la empresa | Procedimientos internos, reportes de stock, turnos |
| Pública | Cualquiera | Catálogo publicado, horarios de atención, comunicados de prensa |

INCIBE propone además pensar en el daño que causaría que esa información se pierda o se filtre: daño a la imagen, consecuencias
legales o económicas, o que el trabajo se detenga. Por ejemplo, solo quienes procesan las remuneraciones deberían acceder a esos
datos. En Chile, los lineamientos del Estado para el uso de IA, que verás en P12, también piden cuidar la información confidencial de
las personas jurídicas y no solo la de las personas [@F-M3-17].

:::ejemplo Andrés clasifica
Andrés revisa los documentos que maneja. El catálogo de productos es público. El reporte semanal de stock es interno. La lista de
precios especiales para un cliente es confidencial: solo la ven él, su jefatura y el área comercial.
:::

## P10 · Ley 19.628: lo que pide hoy
cubre: S3
fuentes: F-M3-14
bloque: Texto + escenario

La Ley 19.628, sobre protección de la vida privada, se publicó en 1999 y es la que está vigente. Dos de sus reglas se relacionan
directamente con el uso de IA en el trabajo.

La primera es que para tratar datos personales se necesita una base. El artículo 4 dice que el tratamiento de datos personales requiere
que una ley lo autorice o que la persona dueña de los datos, el **titular**, dé su consentimiento expreso, informado y por escrito [@F-M3-14].
Piénsalo en tu trabajo: pegar la lista de clientes en una herramienta de IA para que la ordene ya es hacer algo con datos personales
de otras personas, y antes de hacerlo tienes que preguntarte si tienes una base para ello.

La segunda es el **deber de secreto**. El artículo 7 obliga a quienes trabajan en el tratamiento de datos personales a guardar secreto
sobre ellos, incluso después de dejar esa función. Te alcanza aunque no seas dueña o dueño de la empresa: si tu trabajo incluye manejar
datos de clientes, pacientes o compañeros, debes guardar reserva sobre ellos.

Camila, por ejemplo, lleva la planilla de clientes con deuda de la constructora. Quería que Gemini le ayudara a ordenarla y a redactar
los correos de cobranza, y pensó en pegarla completa. Se detuvo: esos datos los conoce por su trabajo y no son suyos para compartir.
Armó una copia con clientes inventados y las mismas columnas, y con eso le pidió la fórmula para ordenar y una plantilla de correo.

:::comprueba
Según la Ley 19.628, ¿cuándo termina el deber de secreto de quien trabajó con datos personales?
- a) Al terminar la jornada
- b) Al cambiar de trabajo
- **c) No termina al dejar esa función: sigue después**
Retroalimentación: El artículo 7 indica que la obligación de secreto continúa después de dejar las funciones relacionadas con esos
datos.
:::

## P11 · Ley 21.719: qué cambia y en qué estado está
cubre: S3
fuentes: F-M3-15, F-M3-16
bloque: Texto + línea de tiempo

La Ley 21.719 moderniza la Ley 19.628: regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de
Datos Personales. Se publicó el 13 de diciembre de 2024. Su texto dice que sus cambios rigen desde el primer día del mes 24 posterior a
la publicación, y el sitio LeyChile de la Biblioteca del Congreso Nacional registra esa fecha como el 1 de diciembre de 2026 [@F-M3-15].

Esa fecha podría cambiar. Hay un proyecto de ley del Ejecutivo, el boletín 18623-07, que propone postergar la entrada en vigencia al 1
de diciembre de 2027. Al 24 de octubre de 2026, según la ficha de tramitación del Senado, está en primer trámite y no ha sido aprobado [@F-M3-16].
Mientras no se apruebe y publique, la fecha que fija la ley es el 1 de diciembre de 2026.

| Fecha | Hecho |
|---|---|
| 13-12-2024 | Se publica la Ley 21.719 |
| 01-09-2026 | Ingresa al Senado el proyecto que propone postergarla |
| 01-12-2026 | Fecha de vigencia según el texto de la ley |

Ya viste dos de sus cambios: una definición más amplia de dato personal (P07) y una lista más larga de datos sensibles (P08). Además,
la nueva ley obliga a quien es responsable de los datos a guardar secreto o confidencialidad, incluso después de terminar su relación
con el titular.

:::clave
Las normas sobre datos están cambiando. Cuando uses estas fechas en un trabajo, revisa la ficha de tramitación y di a qué fecha
corresponde lo que afirmas, como practicaste en el tema 2.
:::

## P12 · Políticas internas: el ejemplo del Estado
cubre: S3, S4
fuentes: F-M3-17, F-M3-18
bloque: Texto + lista con viñetas

Chile todavía no tiene una ley general de inteligencia artificial: el proyecto que regula los sistemas de IA, el boletín 16821-19, está
en segundo trámite en el Senado [@F-M3-18]. Por eso, en el día a día, lo que más pesa son las **políticas internas**, que son las reglas propias de
cada organización sobre qué herramientas se pueden usar y qué información puede salir.

Un ejemplo chileno es el Oficio Circular N.° 711, de 2023, disponible en el sitio del Ministerio de Ciencia, con lineamientos para el
uso de IA en el sector público [@F-M3-17]. Son recomendaciones para los órganos del Estado, no obligaciones para las empresas privadas, pero
sirven como referencia de lo que hace una organización cuidadosa. Recomiendan:

- tratar los datos personales, en especial los sensibles, de acuerdo con la Ley 19.628 y solo para fines autorizados;
- no ingresar información personal, en especial sensible, en herramientas de IA generativa que el organismo no haya contratado o desarrollado;
- cuidar también la información confidencial de las personas jurídicas;
- capacitar a quienes trabajan en el uso de estas herramientas.

En tu caso, lo primero es preguntar a tu jefatura si tu empresa tiene una política sobre IA y seguirla. Si no la tiene, aplica estos
mismos criterios y deja por escrito qué herramienta usas y con qué información.

:::error «Si la herramienta es gratuita y conocida, puedo usarla con información del trabajo»
Que una herramienta sea popular no significa que tu empresa la haya autorizado. Una herramienta personal y gratuita no es una
herramienta contratada por tu organización, y no tiene sus mismas garantías.
:::

## P13 · Clasificar antes de ingresar
cubre: H1, C1
fuentes: F-M3-19, F-M3-15
bloque: Diagrama de decisión + tabla

Ahora juntas todo en un método para decidir qué puede ingresar a una herramienta de IA. Se basa en dos preguntas. La primera es quién
puede acceder a esa información, y la respondes con la clasificación de INCIBE: pública, interna o confidencial [@F-M3-19]. La segunda es si
tiene datos personales y si son sensibles, y la respondes con las definiciones de la ley [@F-M3-15]. Con las dos respuestas, decides.

| | Sin datos personales | Con datos personales | Con datos sensibles |
|---|---|---|---|
| Pública | Puede ingresar | Solo anonimizada | No ingresa |
| Interna | Solo en una herramienta autorizada, o sin detalles que identifiquen a la empresa | Solo anonimizada y en una herramienta autorizada | No ingresa |
| Confidencial | No ingresa a una herramienta no autorizada | No ingresa | No ingresa |

Esta tabla es un criterio del curso que aplica las fuentes. Lo público puede ingresar. Lo que tiene datos sensibles o es confidencial
no debe ingresar a una herramienta que tu organización no autorizó, como recomiendan los lineamientos del Estado que viste en P12.
Entre esos extremos está lo interno, que se puede trabajar si quitas lo que identifica a la empresa o a las personas.

:::clave
Cuando dudes entre dos casillas, elige la más estricta. Es más fácil anonimizar de más que deshacer una filtración.
:::

## P14 · Ejercicio: ¿qué puede ingresar?
cubre: H1, C1, C2
fuentes: F-M3-19, F-M3-15
bloque: Escenario + actividad de clasificación

Aplica el método a situaciones de oficina. Para cada una, clasifica la información, decide si puede ingresar a una herramienta de IA
gratuita que tu empresa no contrató y nombra la regla que aplicaste. Después compara con la propuesta.

Fíjate en que la respuesta casi nunca es solo «sí» o «no». Muchas veces la salida es quitar algo, pedir solo una plantilla o hacer el
cálculo en tu propia planilla. Una decisión con fundamento dice qué información es, qué regla aplica y qué haces en consecuencia.

:::actividad Decide y fundamenta
1. Andrés quiere que Gemini redacte un aviso con el horario de atención de la bodega, que está publicado en la puerta. → Pública, sin datos personales. Puede ingresar.
2. Rosa quiere ordenar la lista de pacientes del día con su especialidad. → Confidencial, con datos sensibles (salud). No ingresa. Regla: dato sensible según la ley (P08) [@F-M3-15].
3. Camila quiere que Gemini ordene la ficha de un proveedor que trabaja por su cuenta, con su nombre, RUT, dirección y cuenta bancaria. → Interna, con datos personales. No ingresa así: quita el RUT, la dirección y la cuenta, y pide solo el formato de la ficha con datos inventados.
4. Andrés quiere resumir el reporte de stock de la semana, sin nombres de clientes. → Interna, sin datos personales. Solo sin detalles que identifiquen a la empresa, o en una herramienta autorizada.
5. Rosa quiere redactar un correo a una compañera sobre su licencia médica. → Dato sensible de otra persona. No ingresa. Escribe ella el correo, o pide una plantilla general.
6. Andrés quiere comparar los sueldos del equipo para proponer un bono. → Confidencial, con datos personales. No ingresa. Regla: las remuneraciones son confidenciales [@F-M3-19]; el asistente puede darle la fórmula sin ver los datos.
:::

## P15 · Anonimizar y no pegar datos de terceros
cubre: S4, C2
fuentes: F-M3-13, F-M3-15
bloque: Texto + comparación antes/después

Muchas veces no necesitas los datos reales para que la IA te ayude. **Anonimizar** es quitar o cambiar los datos de modo que ya no se
pueda saber a quién se refieren. Las técnicas son simples:

- quitar nombres, RUN o RUT de personas, teléfonos, correos y direcciones;
- reemplazarlos por roles o códigos, como «Cliente A», «Paciente 1» o «Proveedor 3»;
- generalizar, por ejemplo «una persona de unos 60 años» en vez de la fecha de nacimiento;
- trabajar con totales o promedios en vez de casos individuales;
- usar datos inventados que tengan la misma forma que los reales.

Compara dos pedidos. «Redacta un correo para Juana Pérez, RUN 12.345.678-9, que faltó a su hora de cardiología del 3 de mayo» entrega
datos sensibles de una paciente. «Redacta un correo cordial para un paciente que faltó a su hora; deja espacios para el nombre y la
fecha» consigue lo mismo sin entregar nada. Rosa hace eso con sus recordatorios: pide una plantilla con espacios en blanco y la
completa ella en el sistema del centro.

Cuidado con la reidentificación. NIST advierte que un modelo puede inferir datos de una persona combinando información dispersa [@F-M3-13]. Si
quitas el nombre pero dejas el cargo, el turno y la sucursal, alguien puede saber de quién hablas. Por eso la Ley 21.719 habla de
personas identificables directa o indirectamente [@F-M3-15].

:::error «Si son datos de otra persona pero no los publico, no hay problema»
Pegar datos de un tercero en una herramienta ya es entregarlos a otra organización. La regla práctica es no pegar datos de terceros, y
cuando la tarea lo exige, anonimizar antes.
:::

## P16 · Ajusta la configuración de privacidad
cubre: S4
fuentes: F-H-15, F-H-30
bloque: Texto + pestañas (tabs) por herramienta

Algunos proveedores usan tus conversaciones para mejorar sus modelos, y en varios casos ese uso se puede apagar. Vale la pena revisarlo
en las dos herramientas de este módulo que más vas a usar. Lo que sigue es lo que decían los proveedores al 24 de octubre de 2026, y
los nombres de los ajustes pueden cambiar con cada versión de la aplicación.

En Gemini, cuando el ajuste de actividad está encendido (aparece como «Guardar actividad» o «Conservar la actividad», según la
traducción), revisores humanos pueden leer conversaciones para mejorar los servicios de Google. Para evitarlo hay que apagar ese ajuste
o usar conversaciones temporales. Aun así, Google guarda las conversaciones por un tiempo corto para responder y por seguridad [@F-H-15].

En Perplexity, el plan gratuito trae activado el ajuste «AI data retention», lo que significa que tus datos se usan para entrenar. Se
apaga en la configuración de la cuenta, en la sección Preferences, y la exclusión rige solo desde ese momento: lo que ya se usó antes
no se retira [@F-H-30].

Gemini Notebook, como viste en el tema 1, no entrena con tus datos si usas una cuenta personal, salvo que envíes comentarios. Si en tu
trabajo usas otra herramienta, busca en su configuración un ajuste parecido antes de empezar.

:::clave
Configurar la privacidad reduce el riesgo, pero no lo elimina. La regla de P13 sigue valiendo: lo confidencial no se pega, aunque el
entrenamiento esté apagado.
:::

## P17 · Responsabilidad, ética y confidencialidad
cubre: A1, A2
fuentes: F-M3-17, F-M3-14
bloque: Texto + escenario

Proteger la información no es solo cumplir una regla. Es una forma de **responsabilidad** con las personas que confían sus datos a tu
organización: clientes, pacientes, proveedores y compañeros.

Actuar con responsabilidad y ética significa usar los datos de otras personas solo para los fines que ellas o la ley autorizaron, como
recomiendan los lineamientos del Estado de acuerdo con la Ley 19.628 [@F-M3-17; @F-M3-14]. Usar la planilla de clientes para «probar» una herramienta es un
fin distinto del que tuvo esa información, aunque la intención sea buena.

La **confidencialidad** es guardar reserva sobre lo que conoces por tu trabajo, y no es solo una buena costumbre: la Ley 19.628 obliga
a guardar secreto a quien trabaja con datos personales, y la nueva ley mantiene ese deber, como viste en P11. En la práctica, se nota
en gestos pequeños: no reenviar una planilla «para que la revise el asistente», no comentar en un chat el diagnóstico de un compañero,
preguntar antes de subir un documento que no es tuyo.

También es responsable decir que no y ofrecer otra salida. Casi siempre hay una forma de que la IA ayude sin ver los datos reales.

:::ejemplo Andrés recibe un pedido
Un compañero le pide a Andrés que pase la lista de clientes por un asistente «para sacar los correos más rápido». Andrés le explica que
esa lista es confidencial y tiene datos personales, y le propone otra salida: pedirle al asistente solo los pasos para hacerlo en la
planilla de la empresa.
:::

## P18 · Cierre: tu protocolo de uso seguro
cubre: C1, C2, H1, S1, S4
fuentes: F-M3-19, F-M3-17
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema evaluaste los resultados de la IA con tres preguntas, sobre sus sesgos, su trazabilidad y sus límites. Luego miraste lo
que tú entregas: aprendiste a reconocer datos personales, datos sensibles e información confidencial, conociste lo que piden la Ley
19.628 y la Ley 21.719 y el ejemplo de política interna del Estado, y armaste un método para clasificar y decidir [@F-M3-17; @F-M3-19]. También practicaste
anonimizar y configurar la privacidad.

Ahora lo conviertes en un protocolo para tu propio cargo. Una decisión con fundamento tiene tres partes: qué información es, qué regla
aplica y qué haces en consecuencia.

:::actividad Tu protocolo de uso seguro
Escribe en tu bitácora:
1. Tres tipos de información que manejas en tu cargo, cada uno clasificado como público, interno o confidencial, y con o sin datos personales o sensibles.
2. Para uno de ellos, tu decisión: si puede ingresar a una herramienta de IA y qué regla aplicaste (la clasificación, la ley o la política interna).
3. Una práctica segura concreta para ese caso, por ejemplo anonimizar con roles, pedir solo una plantilla o apagar el uso de los chats para entrenar.
4. Tu revisión del Hito 3: confirma que tu informe no incluye datos personales ni información confidencial de tu empresa.
5. Una respuesta de IA que usaste en tu informe, revisada con las tres preguntas de P02, con lo que encontraste y lo que ajustaste.
:::

## Ideas clave

1. Evaluar críticamente un resultado de IA es revisar sus sesgos, su trazabilidad y sus límites, no solo si un dato es correcto.
2. La IA puede rendir distinto según el grupo o el idioma; lo que no puedes rastrear hasta su origen no se presenta como hecho.
3. Dato personal es cualquier información que identifica o permite identificar a una persona, directa o indirectamente; los datos sensibles, como los de salud, exigen más cuidado.
4. La información confidencial también incluye la de una organización: clientes, precios, ventas o remuneraciones.
5. La Ley 19.628 está vigente; la Ley 21.719, publicada el 13-12-2024, rige según su texto desde el 01-12-2026, y hay un proyecto en trámite que propone postergarla.
6. Para decidir qué ingresa a una herramienta de IA: clasifica por acceso (pública, interna, confidencial) y por tipo de dato (personal, sensible); lo confidencial y lo sensible no ingresan a una herramienta no autorizada.
7. Las prácticas seguras son anonimizar, no pegar datos de terceros, apagar el uso de los chats para entrenar, probar con copias sin datos sensibles y seguir la política de tu empresa.

## Referencias bibliográficas

- Google. (s. f.-a). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-b). *Más información sobre Gemini Notebook*. Ayuda de NotebookLM. https://support.google.com/notebooklm/answer/16164461?hl=es-419
- Google. (2026, 23 de octubre). *Centro de privacidad de Apps con Gemini*. https://support.google.com/gemini/answer/13594961?hl=es-419
- Instituto Nacional de Ciberseguridad. (2018, 7 de diciembre). *Para proteger la información de tu empresa, primero clasifícala*. INCIBE. https://www.incibe.es/empresas/blog/proteger-informacion-tu-empresa-primero-clasificala
- Ley 19.628. (1999, 28 de agosto). *Sobre protección de la vida privada*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=141599
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Oficio Circular 711. (2023). *Lineamientos para el uso de herramientas de inteligencia artificial en el sector público*. Ministerio de Ciencia, Tecnología, Conocimiento e Innovación. https://minciencia.gob.cl/uploads/filer_public/ae/9a/ae9a7ce7-807b-4781-9ac3-9b253bfbe735/of_n711_2023_dis_lin_ia_minciencia.pdf
- Perplexity. (s. f.-a). *Data collection at Perplexity*. https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity
- Perplexity. (s. f.-b). *How does Perplexity work?* https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work
- Senado de Chile. (2026a). *Proyecto que modifica la Ley 21.719 (Boletín 18623-07)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- Senado de Chile. (2026b). *Proyecto que regula los sistemas de inteligencia artificial (Boletín 16821-19)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=16821
