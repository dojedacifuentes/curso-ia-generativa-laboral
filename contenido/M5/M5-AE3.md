# M5-AE3 · Supervisión humana y riesgos

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-12, F-M5-13
bloque: Texto

En el tema anterior construiste un flujo que funciona solo. Eso es una ventaja y también un riesgo: un flujo no se cansa, pero tampoco
duda, y si algo sale mal, lo repite cada vez. En este tema vas a decidir dónde tiene que mirar una persona y qué hacer si el flujo
falla.

El aprendizaje esperado es este: Incorporar puntos de supervisión humana y controles de riesgo en un flujo automatizado, evaluando su efecto.
Al final deberías poder definir puntos de control humano según el riesgo de cada paso, escribir un plan de contingencia para tu flujo y
comprobar con pruebas si tus controles sirven.

Vas a trabajar con casos de oficina en que un flujo automatizado con IA trae un problema. En cada uno vas a analizar qué pasó, qué
riesgo apareció y qué control lo habría evitado, con ideas de marcos reconocidos, como las directrices éticas de la Comisión Europea y
el marco de gestión de riesgos de IA del NIST de Estados Unidos [@F-M5-12; @F-M5-13]. Además de Camila y Andrés aparece Paula, ejecutiva de atención al
cliente en una tienda de electrodomésticos. Las tres personas y sus casos son ficticios; las situaciones reales las vas a ver en la
actividad de análisis de casos.

Hay una idea que recorre todo el tema. Automatizar una tarea no te quita la **responsabilidad** por su resultado. Lo que cambia es tu
trabajo: pasas de hacer la tarea a supervisar que se haga bien.

## P02 · Caso 1: el error que se repite solo
cubre: S1
fuentes: F-M5-10, F-M5-14
bloque: Escenario (scenario) con preguntas + recuadro de error

Andrés puso en marcha su flujo: cuando marca un despacho como «atrasado» en la planilla, la IA redacta el aviso al cliente con la nueva
fecha y lo deja en la columna «Borrador». Andrés copia el borrador y lo envía. En todas sus pruebas funcionó.

Una semana después, un cliente llama molesto porque su pedido no llegó el día que decía el aviso. Andrés revisa la planilla y descubre
que, desde el lunes, una compañera anota las fechas nuevas de otra forma y la IA las interpreta mal. Cinco avisos salieron con la
fecha equivocada, y los clientes ya habían organizado su recepción con esos datos.

Esto es un **error en cadena**. En un flujo, los datos de un paso alimentan al siguiente, así que un dato erróneo, o un mapeo que se
rompió, se repite en cada ejecución y llega a quien usa el resultado [@F-M5-10]. A eso se suma que la IA generativa puede **confabular**, es decir,
entregar contenido falso con tono seguro [@F-M5-14], como una fecha que la planilla no decía.

Antes de seguir, piensa en estas preguntas:
1. ¿En qué paso nació el error y en qué paso se hizo visible?
2. ¿Quién se dio cuenta, y cuánto tiempo pasó?
3. ¿Qué control habría detectado el problema el primer día?

:::error «Si pasó las pruebas, funcionará siempre»
Las pruebas revisan los casos que imaginaste. En la vida real aparecen otros: un proveedor nuevo, un formato distinto, un correo
reenviado. Por eso un flujo necesita supervisión también después de ponerlo en marcha.
:::

## P03 · Caso 2: datos personales en el flujo
cubre: S1, A1
fuentes: F-M5-14, F-H-15
bloque: Escenario (scenario) con preguntas + recuadro destacado

La constructora donde trabaja Camila abrió una vacante y llegan decenas de currículums por correo. En la reunión de la semana, su
jefatura propone automatizar la revisión: un flujo copiaría a una planilla los datos de cada currículum y le pediría a la IA un resumen
y una opinión sobre cada persona.

Antes de opinar, Camila piensa en el riesgo. Sabe lo que trae un currículum, porque los recibe cada vez que hay una vacante: nombre,
RUT, teléfono, dirección, experiencia y a veces datos de salud o de familia. El perfil de riesgos de IA generativa del NIST incluye la
**privacidad**, es decir, la filtración o el uso no autorizado de datos personales [@F-M5-14]. Y si el flujo usara Gemini con la actividad guardada,
según Google, revisores humanos podrían leer esas conversaciones [@F-H-15].

Camila propone otra cosa: «Automaticemos solo el registro de que llegó una postulación, con la fecha y el cargo. El análisis de cada
currículum lo hace una persona». Su jefatura acepta probarlo así. Con esa propuesta, los datos sensibles no pasan por la IA y la
decisión sobre cada persona queda en manos de alguien que puede responder por ella.

Antes de seguir, piensa en estas preguntas:
1. ¿Qué datos personales pasarían por cada paso del flujo que propuso la jefatura?
2. ¿Cuáles son necesarios para la tarea y cuáles sobran?
3. ¿Qué parte de ese flujo decidiría algo sobre una persona?

:::clave
El dato más seguro es el que no entra al flujo. Antes de agregar un campo, pregúntate si la tarea lo necesita de verdad.
:::

## P04 · Caso 3: el sesgo que se multiplica
cubre: S1, A2
fuentes: F-M5-14
bloque: Escenario (scenario) con preguntas + recuadro de error

Paula, ejecutiva de atención al cliente en una tienda de electrodomésticos, armó un flujo que clasifica los reclamos de clientes en
urgencia alta, media o baja, para que el equipo atienda primero lo urgente. Al mes revisa la planilla y nota algo raro: los reclamos
escritos con faltas de ortografía o en un tono muy informal quedan casi siempre en «baja», aunque algunos eran graves, como un
refrigerador que llegó sin funcionar.

El NIST describe dos riesgos que aparecen juntos en este caso. El primero es el **sesgo dañino**: la IA puede reproducir sesgos, y al
automatizarla aumentan la velocidad y la escala con que se propagan [@F-M5-14]. Un criterio injusto aplicado a mano afecta a unos pocos; dentro de
un flujo, afecta a todos. El segundo es el **sesgo de automatización**, que consiste en confiar de más en lo que entrega un sistema
automático. El equipo de Paula dejó de leer los reclamos marcados como «baja» porque «el sistema ya los clasificó», y esa dependencia
agravó el error.

Antes de seguir, piensa en estas preguntas:
1. ¿A quiénes perjudicó la clasificación, y por qué nadie lo notó antes?
2. ¿Qué habría pasado si una persona revisaba cada semana una muestra de reclamos en «baja»?
3. ¿Debería la IA decidir sola la urgencia de un reclamo?

:::error «Lo decidió el sistema, así que es objetivo»
Un sistema automático puede repetir sesgos de sus datos y aplicarlos a todos los casos, más rápido. Que no lo haya decidido una persona
no lo hace neutral: hay que revisar sus resultados.
:::

## P05 · Decisiones automatizadas sobre personas: la ley en Chile
cubre: S1, S2, A1
fuentes: F-M5-16, F-M3-16
bloque: Texto + comprueba

Los casos de Camila y de Paula tienen algo en común: el flujo decide, o influye en, algo que afecta a una persona. En Chile, la Ley
21.719 modifica la Ley 19.628 sobre datos personales y agrega un artículo 8° bis sobre **decisiones automatizadas** [@F-M5-16].

Según ese artículo, toda persona tiene derecho a oponerse y a no ser objeto de decisiones basadas en el tratamiento automatizado de sus
datos, incluida la elaboración de perfiles, cuando le produzcan efectos jurídicos o le afecten significativamente. Hay excepciones, por
ejemplo cuando la decisión es necesaria para un contrato, cuando hay consentimiento expreso o cuando lo autoriza una ley. Pero aun en
esos casos, quien es responsable de los datos debe asegurar que la persona reciba información y una explicación, pueda pedir
**intervención humana**, expresar su punto de vista y pedir que se revise la decisión.

En tu trabajo esto importa cada vez que un flujo toca a otras personas, sean clientes, proveedores, compañeros o candidatos a un puesto.
Según su texto, estos cambios rigen desde el 1 de diciembre de 2026. Hay un proyecto de ley en trámite en el Senado que propone
postergar esa fecha a diciembre de 2027 y que todavía no está aprobado [@F-M3-16], así que antes de aplicar esta norma revisa en qué estado está.

:::comprueba
Según la Ley 21.719, ¿qué debe poder pedir una persona afectada significativamente por una decisión automatizada, en los casos en que
la ley la permite?
- a) Que se borre el flujo de la empresa
- **b) Intervención humana y revisión de la decisión**
- c) Una copia de las instrucciones de la IA
Retroalimentación: La ley asegura información, explicación, intervención humana, expresar su punto de vista y pedir revisión.
:::

## P06 · Tres formas de supervisión humana
cubre: S2
fuentes: F-M5-12, F-M5-13
bloque: Tabla + ejemplo

Las directrices éticas para una IA fiable de la Comisión Europea ponen como primer requisito la acción y supervisión humanas, y
describen tres formas de supervisar [@F-M5-12]. En inglés se conocen con nombres que vas a encontrar a menudo:

| Forma | Qué hace la persona | En inglés | En un flujo |
|---|---|---|---|
| Participación humana | Interviene en cada ciclo de decisión | *Human-in-the-loop* (en el circuito) | Revisa y aprueba cada resultado antes de que se use |
| Control humano | Interviene en el diseño y en el seguimiento del funcionamiento | *Human-on-the-loop* (sobre el circuito) | El flujo corre solo; la persona revisa el registro y corrige |
| Mando humano | Supervisa la actividad global y decide cuándo y cómo usar el sistema, o no usarlo | *Human-in-command* | Decide si el flujo se usa, se pausa o se apaga |

Las directrices agregan una regla útil: cuanto menor sea la supervisión posible, mayores deben ser las verificaciones. El marco del
NIST, por su parte, explica que las configuraciones entre personas e IA van de totalmente autónomas a totalmente manuales, y pide
definir y documentar los procesos de supervisión y los roles de cada persona [@F-M5-13].

:::ejemplo Las tres formas en la tienda de Paula
Con participación humana, alguien confirma cada reclamo que el flujo clasifica como «baja». Con control humano, una vez por semana
alguien revisa una muestra en el registro. Con mando humano, la jefatura decide si el flujo sigue en uso después de ver los resultados
del mes, y decide también que cualquier cliente pueda pedir que su reclamo lo lea una persona desde el comienzo.
:::

## P07 · Dónde poner un punto de control
cubre: H1, C1
fuentes: F-M5-08, F-H-93
bloque: Texto + lista + comprueba

Un **punto de control** es un lugar del flujo donde una persona revisa antes de que el resultado siga. No va en todos los pasos, sino
donde el riesgo es mayor. Estos son los lugares típicos:
- Antes de que algo salga hacia otra persona, como un correo a un cliente o un aviso al equipo.
- Antes de escribir en un registro que otros usan para decidir, como la planilla de pagos o el registro de pedidos.
- Cuando la IA clasifica, resume o extrae datos que luego se usan sin volver al original.
- Cuando aparecen datos personales.
- Cuando un dato no cumple una regla; una condición puede detener el flujo o desviarlo a revisión [@F-M5-08], por ejemplo si la fecha extraída está vacía o es anterior a hoy.

Algunas plataformas tienen pasos de aprobación ya hechos, pero no caben en sus planes gratuitos más básicos: Zapier gratis, por
ejemplo, solo permite flujos de dos pasos [@F-H-93]. Por eso en este curso usamos la revisión manual, que funciona gratis. El flujo deja el
resultado en una columna «Estado» con el valor «por revisar», y nadie lo usa hasta que una persona lo cambia a «aprobado». En el camino
del celular la lógica es la misma: Gemini te entrega la lista y nada queda registrado hasta que tú la revisas.

:::comprueba
En el flujo de Andrés, ¿dónde conviene más un punto de control humano?
- a) Antes de marcar el despacho como atrasado
- **b) Después de que la IA redacta el borrador y antes de enviarlo al cliente**
- c) En ningún paso: la IA ya fue probada
Retroalimentación: El riesgo está en el aviso que redacta la IA y que sale hacia un cliente. Ahí va la revisión.
:::

## P08 · Criterios de aprobación humana
cubre: H1, C1, A2
fuentes: F-M5-12, F-M5-13
bloque: Lista de verificación (checklist) + tabla + actividad

Una revisión sin criterios se vuelve un clic automático: «aprobado, aprobado, aprobado». Para que el control sirva, define qué revisa la
persona y cuándo aprueba. El NIST pide que estos procesos de supervisión queden definidos y documentados [@F-M5-13].

Un **criterio de aprobación** es una pregunta que se responde con sí o no en pocos segundos, por ejemplo:
- [ ] ¿Los datos coinciden con el correo o el documento original?
- [ ] ¿La categoría o el resumen de la IA es correcto?
- [ ] ¿Hay datos personales que no deberían estar?
- [ ] ¿El tono es adecuado para quien lo va a recibir?

Si algo no cumple, la persona decide si lo corrige o si hace esa tarea a mano. La cantidad de revisión depende del riesgo, y para
decidirla sirven la matriz del tema 1 y la regla de la Comisión Europea: menos supervisión pide más verificaciones [@F-M5-12]. Esta tabla es una
propuesta del curso:

| Riesgo del paso | Forma de supervisión | Cómo se revisa |
|---|---|---|
| Bajo | Control humano | Revisión de una muestra del registro, por ejemplo una vez al día |
| Alto | Participación humana | Revisión de cada resultado antes de que se use |
| Decide algo importante sobre una persona | Mando humano | No se automatiza la decisión: la toma una persona |

:::actividad Define tus criterios
Escribe tres o cuatro criterios de aprobación para el punto de control más importante de tu flujo. Cada uno debe poder responderse con
sí o no en pocos segundos.
:::

## P09 · Registro: que quede huella
cubre: S3, A1
fuentes: F-M5-12, F-M5-11
bloque: Texto + tabla de ejemplo + ejemplo

Cuando algo sale mal, la primera pregunta es qué pasó, y para responderla necesitas un **registro**. Las directrices europeas piden
documentar los datos, los procesos y las decisiones para lograr **trazabilidad**: poder reconstruir qué pasó, entender por qué hubo un
error y prevenir otros [@F-M5-12].

En tu flujo hay dos registros. Uno es el historial de la plataforma; en Zapier, por ejemplo, cada ejecución queda guardada con el paso
que falló y su mensaje de error [@F-M5-11]. El otro es tu propio registro en la planilla del flujo, al que conviene agregarle columnas para la
supervisión, como en este ejemplo de Andrés:

| Fecha | Dato original | Resultado de la IA | Estado | Revisó | Observación |
|---|---|---|---|---|---|
| 12-11 | Pedido 412 · nueva fecha 14-11 | «Llegará el jueves 14» | Aprobado | Andrés | — |
| 13-11 | Pedido 415 · nueva fecha 05-12 | «Llegará el 12 de mayo» | Corregido | Andrés | La IA leyó la fecha al revés |

La columna «Dato original» es la más útil, porque permite comparar lo que entró con lo que salió sin tener que buscar otra vez el dato
de origen.

:::ejemplo El registro de Paula
Con la columna «Revisó», Paula descubrió que nadie miraba los reclamos en «baja». El problema no era solo de la IA: el punto de control
existía en el papel, pero nadie lo había asumido.
:::

## P10 · Reversibilidad: poder detener y deshacer
cubre: S3, C2
fuentes: F-M5-13, F-M5-15
bloque: Texto + lista + comprueba

Un flujo seguro es uno que se puede detener y cuyos efectos se pueden deshacer. A eso se le llama **reversibilidad**. El marco del NIST
pide mecanismos y responsables para reemplazar, desconectar o desactivar un sistema que no funciona como se espera [@F-M5-13], y los principios de
la OCDE piden que un sistema que arriesga causar daños pueda ser anulado, reparado o retirado de forma segura [@F-M5-15].

En un flujo simple, eso se traduce en cuatro prácticas que el curso te recomienda:
- Saber dónde se apaga: antes de activar el flujo, ubica cómo se pausa o se desactiva en tu herramienta.
- No sobrescribir el original: que el flujo agregue filas nuevas en vez de reemplazar datos, y que guarde el dato original.
- Preferir acciones que se pueden corregir: una fila en una planilla se arregla fácil, pero un correo enviado a un cliente no se puede recoger.
- Recuperar lo que falló: como viste en el tema 2, algunas plataformas permiten volver a ejecutar lo que falló una vez corregida la causa.

:::comprueba
¿Cuál de estas acciones es más difícil de revertir si el flujo se equivoca?
- a) Agregar una fila en una planilla de prueba
- **b) Enviar un correo automático a todos los clientes**
- c) Crear un evento en tu propio calendario
Retroalimentación: Un correo enviado no se puede recoger. Las acciones hacia otras personas necesitan un punto de control antes.
:::

## P11 · Plan de contingencia
cubre: H1, C2
fuentes: F-M5-06, F-M5-13
bloque: Proceso (process block) + ejemplo

Un **plan de contingencia** dice qué hacer si el flujo deja de funcionar o empieza a equivocarse. La guía de la Universidad de Bath lo
pide para todo flujo importante [@F-M5-06], y el NIST incluye la respuesta a incidentes y la recuperación en el seguimiento que se hace después de
poner un sistema en marcha [@F-M5-13]. Tu plan responde seis preguntas:

1. ¿Cómo me doy cuenta? Por ejemplo, por un error en el historial, filas vacías o el aviso de alguien.
2. ¿Cómo lo detengo? Dónde se pausa el flujo y quién lo hace.
3. ¿Cómo sigue el trabajo mientras tanto? Con la forma manual de hacer la tarea.
4. ¿Cómo recupero lo que falló? Revisando el registro, corrigiendo las filas malas y volviendo a ejecutar lo pendiente.
5. ¿A quién aviso? A las personas que usan el resultado.
6. ¿Quién responde? Una persona con nombre, no «el sistema».

Escribe tus seis respuestas pensando en tu flujo y en tu equipo. Si alguna es «no sé», ese es el punto débil que tienes que resolver
antes de ponerlo en marcha.

:::ejemplo El plan de Andrés
Andrés sabrá que algo anda mal si ve un borrador sin fecha, una fecha distinta a la de la planilla o el reclamo de un cliente. En ese
caso pausa el escenario desde su cuenta y, mientras tanto, escribe los avisos con la plantilla manual de su biblioteca. Después compara
los avisos de la semana con la planilla y, si uno salió mal, escribe al cliente para corregirlo. Avisa a su jefatura y a ventas.
Responde él, y si está de vacaciones, su compañera de turno.
:::

## P12 · Evalúa el efecto de tus controles
cubre: C1, A2, H1
fuentes: F-M5-13
bloque: Proceso + tabla + actividad

Poner un control no basta: hay que comprobar que sirve. El marco del NIST pide medir con pruebas y documentar los resultados [@F-M5-13], y en tu
flujo puedes hacerlo en cuatro pasos:

1. Prepara 10 casos ficticios y, en 3 de ellos, siembra un error: un correo con una fecha ambigua, uno con un dato personal que no debería pasar y uno que debería detenerse.
2. Corre el flujo sin el control y anota cuántos errores llegan al resultado.
3. Corre el flujo con el control y anota cuántos errores detectó la persona revisora.
4. Mide el costo: cuánto tiempo tomó revisar y cuántas veces el control marcó algo que estaba bien, lo que se llama falsa alarma.

| Indicador | Sin control | Con control |
|---|---|---|
| Errores que llegaron al resultado | 3 de 3 | 0 de 3 |
| Falsas alarmas | — | 1 |
| Tiempo de revisión | — | Pocos minutos por tanda |

Con los datos, decides. Puedes mantener el control, ajustarlo, por ejemplo revisando solo una muestra si nunca encuentra errores, o
subir la supervisión si pasaron errores. Un buen control detecta los errores importantes sin volver más lento todo el trabajo, y si no
lo mides, no sabes si cumple.

:::actividad Mide tu control
Haz la prueba con tu flujo y completa la tabla. Escribe una conclusión de dos líneas: ¿tu control reduce el riesgo lo suficiente para lo
que cuesta?
:::

## P13 · Responsabilidad y prudencia
cubre: A1, A2
fuentes: F-M5-15, F-M5-13
bloque: Texto + escenario breve + comprueba

Los principios de la OCDE incluyen la **rendición de cuentas**: quienes ponen en marcha un sistema de IA responden por su
funcionamiento, y deben registrar datos, procesos y decisiones y gestionar los riesgos de forma sistemática [@F-M5-15]. El marco del NIST pide,
además, roles claros: quién supervisa, quién puede apagar el sistema y quién atiende un incidente [@F-M5-13].

Para ti esto tiene un sentido práctico: el flujo actúa en tu nombre. Si manda un dato equivocado a un cliente o a un proveedor, para
quien lo recibe el error es tuyo y de tu empresa, no de la herramienta. Un error común es pensar lo contrario, que si el flujo se
equivocó la culpa es del sistema. Justamente para poder responder cuando algo falla se definen puntos de control, registros y un plan
de contingencia.

La **prudencia** es la actitud que acompaña esa responsabilidad. No es miedo a automatizar, sino no confiar de más. El sesgo de
automatización, que viste en el caso de Paula, aparece cuando el flujo funciona bien por un tiempo y la revisión se relaja. La persona
prudente sigue mirando, sobre todo cuando cambia algo: un proveedor nuevo, un formato distinto, un cambio en la herramienta. Y también
mira más allá de su flujo. Una empresa que decide automatizar todo lo que pueda, aunque baje la calidad, arriesga la confianza de sus
clientes y de su propio equipo, así que conviene pensar cómo una automatización afecta a quienes trabajan y a quienes reciben el
servicio.

:::comprueba
Paula lleva dos meses sin encontrar errores en la revisión. ¿Qué es lo más prudente?
- a) Eliminar el control, porque ya no hace falta
- **b) Mantener una revisión por muestreo y volver a revisar todo si algo cambia**
- c) Dejar que la IA también decida la respuesta al cliente
Retroalimentación: Sin errores, el control puede aliviarse, pero no desaparecer. Los cambios traen errores nuevos.
:::

## P14 · Cierre: tu flujo con supervisión humana
cubre: C1, C2, H1, A1
fuentes: F-M5-12, F-M5-13
bloque: Texto + actividad de cierre (entrega)

En este tema analizaste tres casos: un error en cadena, un flujo con datos personales y un sesgo que se multiplicaba. Viste que la
supervisión humana puede ser participación, control o mando [@F-M5-12], y que se ajusta al riesgo [@F-M5-13]. También aprendiste a dejar registro, a hacer el
flujo reversible, a escribir un plan de contingencia y a medir si tus controles sirven.

Con eso puedes completar tu prototipo. Un flujo con supervisión humana no es más lento: es uno en el que puedes confiar y del que puedes
responder ante tu jefatura. Cuando esté listo, tu empresa podrá decidir con evidencia si se usa con los datos reales.

:::actividad Completa tu prototipo
Toma el flujo que construiste en el tema 2 y agrégale:
1. Un mapa de riesgos: para cada paso, qué podría salir mal (errores en cadena, privacidad, sesgo).
2. Los puntos de control: dónde revisa una persona, con qué forma de supervisión y por qué, según el riesgo.
3. Los criterios de aprobación: tres o cuatro preguntas de sí o no para cada punto de control.
4. El registro: las columnas de supervisión en tu planilla.
5. El plan de contingencia: las seis respuestas de P11.
6. La evaluación: tu tabla con y sin control, y tu conclusión.

Trabaja siempre con datos ficticios o con copias sin datos sensibles.
:::

## Ideas clave

1. Automatizar trae riesgos propios: errores en cadena que se repiten en cada ejecución, confabulación, filtración de datos personales
   y sesgos que se multiplican en velocidad y escala.
2. El sesgo de automatización es confiar de más en lo automático; se combate con revisión, sobre todo cuando algo cambia.
3. La supervisión humana puede ser participación (en el circuito), control (sobre el circuito) o mando (decidir si se usa); cuanto
   menor la supervisión, mayores las verificaciones.
4. Los puntos de control van donde el riesgo es mayor y necesitan criterios de aprobación claros; la revisión manual funciona gratis.
5. El registro da trazabilidad y la reversibilidad permite detener y deshacer: guarda el dato original y prefiere acciones que se
   pueden corregir.
6. Un plan de contingencia dice cómo detectar la falla, detener el flujo, seguir a mano, recuperar lo perdido, avisar y quién responde.
7. Los controles se evalúan con pruebas: errores detectados, falsas alarmas y tiempo de revisión.

## Referencias bibliográficas

- Google. (s. f.). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Grupo independiente de expertos de alto nivel sobre inteligencia artificial. (2019). *Directrices éticas para una IA fiable*. Comisión Europea. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idLey=21719
- Microsoft. (2022, 16 de mayo). *Agregar una condición a un flujo de nube en Power Automate*. Microsoft Learn. https://learn.microsoft.com/es-es/power-automate/add-condition
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- OCDE. (2024). *Principios de la OCDE sobre IA*. OECD.AI. https://oecd.ai/en/ai-principles
- Senado de Chile. (2026). *Proyecto que modifica la Ley 21.719 (Boletín 18623-07)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- Zapier. (2026a, 15 de octubre). *How to troubleshoot errors in Zap workflows*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496037690637
- Zapier. (2026b, 23 de octubre). *Plans & pricing*. https://zapier.com/pricing
- Zapier. (2026c, 18 de junio). *Send data between steps by mapping fields*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496343026701
