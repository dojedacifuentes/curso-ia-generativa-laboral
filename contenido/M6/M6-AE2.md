# M6-AE2 · Implementar el flujo

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M6-04, F-M6-06
bloque: Texto + escenario (dónde están Camila y Andrés)

En el tema anterior fijaste tu punto de partida, tu meta y cómo vas a medir. Ahora toca hacer el cambio: poner en marcha el flujo con
IA en tu tarea, probarlo, corregirlo y dejar registro de lo que decides en el camino.

El aprendizaje esperado es este:
Implementar un flujo de trabajo con IA para la oportunidad priorizada, con supervisión humana y registro de decisiones.
Al final del tema deberías tener tu flujo funcionando, con al menos un punto de supervisión humana definido por escrito, y un registro
con la fecha y el motivo de cada decisión y cada ajuste que hiciste.

Implementar no es «encender» la IA y esperar. Es un ciclo: pruebas a pequeña escala, miras qué pasó, ajustas y vuelves a probar [@F-M6-04]. Cada
vuelta deja un aprendizaje, y ese aprendizaje se anota [@F-M6-06]. Tampoco hace falta un flujo grande. Uno de tres a cinco pasos, que funcione y
esté bien documentado, vale más que uno largo que nadie puede revisar.

:::ejemplo Dónde están Camila y Andrés
Camila ya tiene su meta: registrar cada documento en 2 minutos, sin errores en el registro final. En el módulo 5 automatizó un paso:
cada mañana, una acción programada de Gemini le lista los correos con documentos nuevos de su cuenta de práctica, donde solo llegan
copias sin datos sensibles. Andrés quiere enviar el mismo día el 90 % de los avisos de atraso. Su prototipo del módulo 5 arma el
borrador del aviso cuando marca un despacho como atrasado en la planilla.
:::

## P02 · Del prototipo al flujo completo
cubre: S1, C1
fuentes: F-H-61, F-H-94
bloque: Texto + diagrama de proceso (process block)

En el módulo 5 automatizaste un paso. Ahora dibujas el flujo completo de tu tarea, de la entrada a la salida, y marcas en cada paso
quién lo hace: la IA, la herramienta o tú. Así se ve el flujo de Andrés, que usa Make en el computador de la bodega:

1. Andrés marca un despacho como «atrasado» en la planilla (disparador).
2. Make lee la fila: número de pedido, empresa cliente y nueva fecha (herramienta).
3. Un módulo de IA redacta el aviso con la plantilla de su biblioteca y lo deja en la columna «Borrador» (IA).
4. Andrés compara pedido y fecha con la planilla, corrige y envía el correo (revisión humana).
5. Anota la hora de envío, que alimenta su indicador (registro).

El de Camila es más corto y lo hace desde el celular, con Gemini. La acción programada le lista cada mañana los correos con
documentos. Ella sube cada documento a un chat con su plantilla «Registrar documento», compara con el documento cada campo que
propone el asistente y, al final, pega la fila en su planilla y nombra el archivo. Son cuatro pasos, y uno de ellos es su revisión.

Antes de armar el tuyo, revisa los límites de tu herramienta. En Make, cada acción gasta créditos del plan gratuito, las funciones de
IA pueden gastar más y, si los créditos se acaban, el escenario se detiene [@F-H-94]. En Gemini, las acciones programadas piden una cuenta
personal, la actividad guardada y la aplicación conectada, y se están habilitando de a poco, así que puede que todavía no aparezcan
en tu cuenta [@F-H-61].

:::actividad Dibuja tu flujo
Escribe tu flujo en tres a cinco pasos numerados y marca cada uno como disparador, herramienta, IA, revisión humana o registro.
:::

## P03 · Planifica en ciclos pequeños
cubre: S1, A1, A2
fuentes: F-M6-04, F-M6-07
bloque: Proceso (process block) en etapas + pregunta de verificación

Los cambios se prueban primero a pequeña escala, se ajustan con ciclos repetidos y se prueban en condiciones distintas; solo después
se adoptan [@F-M6-04]. Un ciclo muy usado tiene cuatro momentos y se conoce como **PDSA**, por sus iniciales en inglés. Planificas qué vas a
probar, con cuántos casos y qué esperas que pase. Haces la prueba y anotas lo que ocurre. Estudias la diferencia entre lo que pasó y
lo que esperabas. Y actúas: adoptas, ajustas o descartas el cambio, y planificas el ciclo siguiente.

Con ese ciclo, tu implementación sigue seis etapas, en este orden:

1. Mapear el flujo completo (P02).
2. Definir los controles: quién revisa, cuándo y qué riesgos cuidar (P04 y P05).
3. Documentar el flujo en su ficha (P06).
4. Probar en pequeño, con pocos casos y algunos difíciles.
5. Estudiar y ajustar, registrando cada decisión (P07 a P09).
6. Usar el flujo en la tarea real durante el periodo de medición.

Reserva tiempo para las pruebas [@F-M6-07], porque es la parte que más se subestima. Andrés planificó su primer ciclo con cinco despachos
atrasados de la semana pasada, ya resueltos, y esperaba que los cinco borradores tuvieran pedido y fecha correctos. Dos salieron con
la fecha en formato inglés. Ajustó la plantilla y repitió con otros cinco. Decidir tú qué probar y cuándo ajustar, sin esperar que
todo salga perfecto a la primera, es autonomía. Repetir el ciclo las veces que haga falta es constancia.

:::comprueba
Andrés quiere usar su flujo esta semana con todos los atrasos reales. ¿Qué etapa le falta si todavía no lo ha corrido con casos ya
resueltos?
- a) Mapear el flujo
- **b) Probar en pequeño**
- c) Usar en la tarea real
Retroalimentación: Antes de usarlo con clientes, el flujo se prueba con pocos casos, incluidos casos difíciles. Saltarse esa etapa
lleva los errores directo a la tarea real.
:::

## P04 · Supervisión humana: quién revisa, cuándo y con qué
cubre: C1, S2
fuentes: F-M5-12, F-M5-14
bloque: Texto + tabla + pregunta de verificación

La supervisión humana no se improvisa: se define y se documenta como parte del flujo. Para cada punto de control respondes cinco
preguntas, que en el flujo de Andrés quedan así:

| Pregunta | Ejemplo de Andrés |
|---|---|
| ¿Quién revisa? | Andrés |
| ¿Cuándo? | Antes de enviar cada aviso |
| ¿Qué revisa? | Pedido, empresa, fecha nueva y tono |
| ¿Con qué criterio? | Coincide con la planilla; no promete nada que no esté confirmado |
| ¿Qué hace si falla? | Corrige a mano y anota el error en la bitácora |

En el módulo 5 viste tres niveles de supervisión. Con participación humana, una persona interviene en cada decisión del flujo, como
Andrés con cada aviso. Con control humano, la persona interviene en el diseño y sigue el funcionamiento. Con mando humano, decide si
usar el sistema, cuándo y cómo [@F-M5-12]. Tu proyecto debe dejar claro qué nivel aplicas en cada paso y por qué. Dejarlo por escrito, además,
te ayuda a encontrar después por qué hubo un error y a prevenir el siguiente [@F-M5-12].

Un error frecuente es pensar «ya funcionó en el módulo 5, no necesito revisar». Confiar de más en lo automatizado tiene nombre:
**sesgo de automatización** [@F-M5-14]. Mientras más veces funciona un flujo, más fácil es dejar de mirarlo, y justo ahí se cuela el error. Por
eso, mientras dure el proyecto, la revisión se mantiene en cada caso.

:::comprueba
¿Cuál de estos puntos de control está bien definido?
- a) «Reviso los avisos cuando tenga tiempo»
- **b) «Antes de enviar, comparo pedido y fecha con la planilla; si no coinciden, corrijo y lo anoto»**
- c) «La IA revisa sus propios borradores»
Retroalimentación: La b dice cuándo, qué y con qué criterio se revisa, y qué hacer si falla. La a no fija momento, y en la c no hay
supervisión humana.
:::

## P05 · Riesgos y cambios: qué puede salir mal
cubre: S2, A3
fuentes: F-M6-06, F-M6-07
bloque: Texto + tabla de riesgos + pregunta de verificación

Gestionar riesgos es anticipar qué puede fallar y cómo lo vas a controlar. Y no termina al implementar: después hay que seguir
mirando, poder anular una decisión, responder si algo sale mal y recuperarse [@F-M6-06]. Estos son los riesgos más comunes en un flujo como los
del curso:

| Riesgo | Control |
|---|---|
| La IA inventa un dato (fecha, monto) | Punto de control que compara con la fuente |
| Entran datos personales o información confidencial de la empresa | Copias sin datos sensibles, códigos en vez de nombres y lo que permita tu empresa |
| Se agota el límite del plan gratuito o la herramienta falla | Plan de contingencia: la plantilla manual de tu biblioteca |
| Cambias la plantilla y algo deja de funcionar | Probar de nuevo con los mismos casos antes de usarla |
| Dejas de revisar porque «siempre sale bien» | Revisión fija en cada caso y registro de errores |

La cuarta fila es la **gestión de cambios**: cada modificación al flujo o al prompt se vuelve a probar antes de usarla. La tercera es
el **plan de contingencia**, que dice con qué reemplazas el flujo si deja de funcionar y cómo te vas a enterar [@F-M6-07]. Como ese plan tiene
que servir justo cuando la herramienta falla, no puede depender de la misma herramienta.

Arma tu propia tabla con al menos cuatro riesgos de tu flujo y su control. Si uno queda sin control, decide si lo aceptas, lo reduces
o cambias el paso, y anota la decisión. Revisar cada fila con calma es parte del trabajo prolijo que pide este tema.

:::comprueba
En el flujo de Camila, ¿qué riesgo queda sin control?
- a) Que la IA lea mal una fecha: Camila revisa cada campo
- **b) Que se acabe el límite de uso gratuito de Gemini y no pueda registrar ese día**
- c) Que un documento traiga datos sensibles: solo usa copias que ya revisó
Retroalimentación: La a y la c tienen un control definido. Para la b, Camila necesita un plan de contingencia, como registrar a mano
en su planilla.
:::

## P06 · Documenta el flujo
cubre: S3, A3
fuentes: F-M6-07
bloque: Texto + ficha descargable (plantilla)

Un flujo que solo entiendes tú se pierde el día que no estás o que lo olvidas. Documentarlo es escribir una **ficha** que otra persona
pueda leer para entender qué hace, qué necesita y qué produce [@F-M6-07]. La ficha tiene ocho campos:

- Nombre, con una convención clara, como «Avisos atraso · Bodega · v2».
- Propósito: para qué existe, en una línea.
- Entradas: qué datos recibe y de dónde.
- Salidas: qué entrega y dónde queda.
- Dependencias: herramientas, cuentas, planillas y plantillas sin las cuales no funciona.
- Supervisión: quién revisa, cuándo y con qué criterio (P04).
- Contingencia: qué hacer si falla (P05).
- Responsable y fecha: quién lo mantiene y cuándo se actualizó.

Usa una **convención de nombres** y respétala en todo: el flujo, las plantillas, las planillas y los archivos [@F-M6-07]. Así cualquiera sabe qué
versión está mirando. Comparte la ficha con quien corresponda, por ejemplo tu jefatura o tu tutor. Un error común es dejarla para el
final y escribirla de memoria: se olvidan dependencias y ajustes. Escríbela antes de la primera prueba y actualízala con cada cambio.
Ese trabajo prolijo es lo que permite que tu flujo se revise, se mejore o lo use otra persona de tu equipo.

:::ejemplo La ficha de Camila
Camila llamó a su flujo «Registro documentos · Práctica · v3». Su propósito es registrar los documentos de la oficina en una planilla
para encontrarlos rápido. Entran copias sin datos sensibles de facturas, órdenes de compra y contratos, en PDF o foto, y sale una
fila por documento en la planilla «Registro 2026», con el archivo nombrado «AAAA-MM-DD_tipo_emisor». Depende de Gemini, de su cuenta
de práctica, de esa planilla y de su plantilla «Registrar documento». Ella revisa cada campo antes de guardar y, si el flujo falla,
registra a mano en la misma planilla.
:::

## P07 · Tu bitácora de decisiones
cubre: S3, C2, A3
fuentes: F-M6-08, F-H-15
bloque: Texto + entrada de ejemplo + actividad

Los proyectos cambian, y el motivo de cada decisión se olvida rápido. En equipos de tecnología se usan registros de decisiones para
guardar ese razonamiento y poder juzgar después si una decisión se puede cambiar [@F-M6-08]. En este curso adaptamos esa idea a una **bitácora
de decisiones**, que se suma a la bitácora que ya llevas.

Cada entrada lleva una fecha y un título, por ejemplo «12-11 · Dónde registrar los documentos». Después viene el contexto, que son
los hechos que te obligaron a decidir; la decisión, que es lo que elegiste; las consecuencias, lo bueno y lo malo que trae, y el
estado, vigente o reemplazada. Hay una regla que importa más que las otras: una decisión que ya aplicaste no se borra ni se
reescribe [@F-M6-08]. Si cambias de idea, agregas una entrada nueva y marcas la anterior como reemplazada. Así queda la historia completa, y
puedes responder la pregunta que te hará tu tutor o tu jefatura: «¿por qué lo hiciste así?».

Una entrada de Camila muestra cómo se ve. El 12-11 anotó «Dónde uso las aplicaciones conectadas». El contexto: la acción programada
le pide dejar encendida la actividad guardada, y con ella encendida, revisores humanos pueden leer las conversaciones [@F-H-15]. La decisión:
usar la acción programada solo en su cuenta de práctica, con copias sin datos sensibles. Las consecuencias: puede automatizar la
lista diaria sin exponer datos de la constructora, pero para trabajar con los documentos reales tendrá que cambiar el flujo y
acordarlo con su jefatura. Estado: vigente.

:::actividad Tus primeras entradas
Escribe en tu bitácora tres decisiones que ya tomaste: la herramienta que elegiste, el punto de supervisión y un riesgo que decidiste
controlar. Usa los cinco campos en cada una.
:::

## P08 · Versiones de tus prompts
cubre: S3, C2, A3
fuentes: F-M6-10, F-M6-09
bloque: Texto + tabla de versiones + actividad

Tus plantillas también cambian durante la implementación. Una práctica recomendada para quienes construyen con modelos de lenguaje
es **versionar los prompts**: guardar cada versión para poder revisar sus cambios, anotar el modelo o la herramienta con que se probó
y probar cada versión con los mismos casos [@F-M6-10]. Así quedó la tabla de versiones de la plantilla «Registrar documento» de Camila:

| Versión | Fecha | Herramienta | Qué cambió | Resultado con los 10 casos de prueba |
|---|---|---|---|---|
| v1 | 05-11 | Gemini | Plantilla del módulo 5 | 7 de 10 sin errores |
| v2 | 08-11 | Gemini | Pide la fecha en formato DD-MM-AAAA | 9 de 10 |
| v3 | 12-11 | Gemini | Agrega «si un campo no aparece, escribe NO APARECE» | 10 de 10 |

Si llevas tus plantillas en Documentos o en Hojas de cálculo de Google, el **historial de versiones** te ayuda. Muestra quién cambió
qué, permite ponerle nombre a una versión, como «Plantilla v2 · 08-11», y volver a una anterior [@F-M6-09]. Hay un máximo de versiones con
nombre: 40 en un documento y 15 en una hoja de cálculo. En Hojas de cálculo, restaurar una versión borra el historial de cambios de
cada celda, así que conviene hacer una copia antes [@F-M6-09].

Un error común es cambiar la plantilla sobre la marcha, sin guardar la que funcionaba. Si la nueva sale peor, no puedes volver atrás
ni explicar qué cambió.

:::actividad Versiona tu plantilla principal
Copia tu plantilla actual como v1 en una tabla de versiones. Cada vez que la cambies, guarda la anterior, agrega una fila y prueba la
versión nueva con los mismos casos.
:::

## P09 · Prueba, ajusta y vuelve a probar
cubre: H1, A1, A2
fuentes: F-M6-07, F-M5-11
bloque: Escenario (el atraso sin fecha de Andrés) + actividad

Ahora corres tu flujo con casos de prueba. Antes de usarlo en serio, prueba la mayor cantidad de escenarios posibles: casos normales,
casos con datos incompletos y casos raros [@F-M6-07]. Para Camila, eso significa probar una factura clara, una foto borrosa, un contrato sin
fecha y un documento que no es de ningún tipo conocido. Para Andrés, un atraso de un día, uno sin fecha nueva confirmada y uno de un
cliente nuevo.

Cuando algo falla, sigue siempre el mismo camino:

1. Ubica el paso que falló. Si tu herramienta guarda un historial de ejecuciones, úsalo: en Zapier, por ejemplo, muestra qué paso falló y por qué, y permite volver a ejecutarlo una vez corregido [@F-M5-11].
2. Corrige la causa, no solo el resultado: la plantilla, el dato de entrada o el punto de control.
3. Registra el ajuste en la bitácora y, si cambió la plantilla, crea una versión nueva.
4. Vuelve a probar con los mismos casos.

Así lo hizo Andrés. En una prueba, el despacho no tenía fecha nueva confirmada y el borrador inventó «llegará el lunes». Lo detectó
en su revisión, ajustó la plantilla con la instrucción «si no hay fecha nueva, escribe que avisarás apenas esté confirmada», lo anotó
en la bitácora, creó la v3 y repitió los diez casos. Que algo falle en la prueba es buena noticia, porque falló antes de llegar a un
cliente. Elegir tú los casos difíciles y decidir cuándo un ajuste basta es autonomía; volver a probar después de cada ajuste es
constancia.

:::actividad Tu ronda de pruebas
Arma diez casos de prueba sin datos personales, al menos tres difíciles. Córrelos, anota los resultados y haz al menos un ajuste
documentado en tu bitácora.
:::

## P10 · Tu Hito 6b y cómo se evalúa
cubre: H1, C1, C2, A3
fuentes: F-M6-07, F-M6-08
bloque: Texto + tabla de la rúbrica + lista de verificación

El Hito 6b, implementación del flujo, muestra que tu flujo funciona, que tiene supervisión humana y que quedó documentado. Lo
entregas en un documento o una carpeta compartida con seis piezas: el flujo en pasos numerados, con lo que hace la IA y lo que haces
tú (P02); la ficha, con supervisión y contingencia [@F-M6-07] (P04 a P06); la tabla de riesgos con sus controles (P05); la bitácora de
decisiones con al menos tres entradas [@F-M6-08] (P07); la tabla de versiones de tu plantilla principal (P08), y la evidencia de las pruebas,
con resultados y capturas sin datos personales ni información de tu empresa (P09).

Tu tutor lo revisa con la rúbrica general de hitos y te responde en un plazo de 72 horas como máximo:

| Criterio | Peso | Qué mira en el Hito 6b |
|---|---|---|
| Pertinencia al problema real | 25 % | El flujo ataca el desafío y la meta del Hito 6a |
| Uso verificado de IA | 25 % | Prompts documentados por versión y resultados revisados en cada prueba |
| Calidad del entregable | 20 % | Flujo, ficha y bitácora completos y coherentes entre sí |
| Ética, privacidad y licencias | 15 % | Sin datos personales expuestos; supervisión humana clara |
| Comunicación | 15 % | Otra persona entiende el flujo leyendo la ficha |

Este hito es formativo: no pondera en la nota, pero lo que tu tutor te comente aquí mejora tu entrega final. Con el flujo ya en uso,
empiezas a juntar los datos que vas a comparar con tu línea base en el tema siguiente.

:::actividad Revisa antes de entregar
- [ ] Cada punto de supervisión dice quién, cuándo, qué y con qué criterio.
- [ ] Cada riesgo tiene un control o una decisión registrada.
- [ ] La bitácora tiene fecha, contexto, decisión y consecuencias en cada entrada.
- [ ] Probé cada versión con los mismos casos.
:::

## Ideas clave

1. Implementar es un ciclo: probar a pequeña escala, estudiar lo que pasó, ajustar y volver a probar (PDSA).
2. Las etapas van en orden: mapear, definir controles, documentar, probar en pequeño, ajustar y recién después usar en la tarea real.
3. La supervisión humana se define por escrito: quién revisa, cuándo, qué, con qué criterio y qué hacer si falla.
4. Cada riesgo necesita un control; cada cambio al flujo o al prompt se vuelve a probar, y el plan de contingencia no depende de la
   misma herramienta.
5. La ficha del flujo registra propósito, entradas, salidas, dependencias, supervisión y contingencia, con una convención de nombres.
6. La bitácora de decisiones guarda contexto, decisión y consecuencias; una decisión aplicada no se reescribe, se reemplaza con otra
   entrada.
7. Cada versión de un prompt se guarda, se fecha y se prueba con los mismos casos.

## Referencias bibliográficas

- Google. (s. f.-a). *Acciones programadas en las aplicaciones de Gemini*. https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- Google. (s. f.-b). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-c). *Cómo ver los cambios de un archivo*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/190843?hl=es-419
- Government Digital Service. (2026, 5 de marzo). *The GDS Way: Architecture decisions*. https://gds-way.digital.cabinet-office.gov.uk/standards/architecture-decisions.html
- Grupo independiente de expertos de alto nivel sobre inteligencia artificial. (2019). *Directrices éticas para una IA fiable*. Comisión Europea. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- Institute for Healthcare Improvement. (s. f.). *Model for improvement*. https://www.ihi.org/library/model-for-improvement
- Make. (s. f.). *Pricing*. https://www.make.com/pricing
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- OpenAI. (s. f.). *Prompt engineering*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/prompt-engineering
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- Zapier. (2026, 15 de octubre). *How to troubleshoot errors in Zap workflows*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496037690637
