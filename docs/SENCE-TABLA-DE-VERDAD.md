# Guía técnica del SENCE: auditoría y tabla de verdad

> Versión 1.0 del 03-11-2026. Generado con `node scripts/sence-auditoria.mjs` desde `data/sence/guia-tecnica.json`: se corrige allá, no aquí. El Word está en `entregables/sence/`.

Documento de trabajo del equipo. Resume y ordena la guía con palabras propias: no la reemplaza ni reemplaza a la Resolución Exenta 2.484. Ante cualquier duda, manda el texto original en la página indicada.

La guía técnica explica con qué criterios el SENCE revisa las solicitudes de cursos por franquicia tributaria bajo la Resolución Exenta 2.484 de 2026. Baja esa resolución a preguntas concretas y a ejemplos de lo que pasa y de lo que no pasa.

El curso ya tiene el primer visto bueno del cliente, pero quien decide si se financia con franquicia es el SENCE. Un curso puede gustarle al cliente y aun así quedar inadmisible. Esta auditoría deja escrito, una sola vez y con su página, todo lo que la guía pide, para comparar después el aula y la solicitud contra una vara fija.

**Alcance.** Esta auditoría revisó las 21 páginas y las 20 secciones de la guía. Todavía no compara nada con el curso: las columnas de resultado de la tabla de verdad quedan en blanco a propósito.

147 enunciados en 15 bloques: 133 se comparan con el curso y 26 son excluyentes. 18 modelos y 18 hallazgos.

## Cómo leer la tabla

- **Tipo.** Requisito: lo que debe existir o decirse. Criterio: lo que el SENCE analizará. Límite: lo que no basta o no cuenta. Modelo: patrón tomado de un ejemplo de la guía, que orienta sin obligar al pie de la letra. Aclaración y Afirmación: precisan cómo se lee la guía y no se comparan. Lo que sale solo de un ejemplo va como Modelo si muestra lo que sí y como Límite si muestra lo que no.
- **Dónde.** Dónde se comprueba. Solicitud: el formulario del SENCE, que hoy se alimenta de la planilla. Aula: Moodle. Ambas: debe estar declarado y además existir en el aula.
- **Si es falso.** Inadmisible: la revisión termina. Observada, Debe corregirse, Insuficiente, Puede observarse, No se acredita y Faltan antecedentes: las palabras con que la guía lo dice. No lo dice: la guía no escribe la consecuencia; se trata como riesgo de observación.
- **V/F.** V: verdadero, con evidencia que se pueda abrir. P: parcial. F: falso. NA: no aplica. Queda en blanco hasta la comparación.

## Enunciados destacados

1. **Pasar la admisibilidad no aprueba el curso: solo abre la evaluación técnica.** Son dos puertas y la segunda es la exigente. Una solicitud puede tener todo lo formal en orden y caer porque su evaluación no verifica la competencia. Hay que diseñar pensando en la segunda puerta. *Qué lo prueba:* Bloques de admisibilidad en verdadero y, además, los de evaluación técnica. *(Guía, pp. 3 y 8; filas PR-03.)*
2. **Basta un requisito legal falso para que la solicitud quede inadmisible y no se revise lo demás.** Los ocho requisitos no se compensan entre sí. Un curso excelente con el facilitador mal descrito ni siquiera llega a la evaluación técnica. Por eso el bloque AL se compara primero. *Qué lo prueba:* Todas las filas del bloque AL, una por una. *(Guía, p. 7; filas PR-04.)*
3. **Un curso no puede ser solo contenido para leer o ver: debe haber intervención formativa y evaluación.** Es la frontera entre capacitación y autoaprendizaje, y un curso asincrónico con paquetes SCORM es el que está más cerca de ella. La diferencia la hace lo que ocurre entre el contenido y la nota. *Qué lo prueba:* Descripción del proceso en la solicitud y secuencia real de cada módulo en el aula. *(Guía, p. 4; filas AL-09 a AL-11.)*
4. **Nombrar a un facilitador no basta: hay que decir qué hará, sobre qué aprendizaje, por qué canal y cuándo.** El SENCE busca a una persona que interviene en el aprendizaje, no a quien administra la plataforma. Es un requisito excluyente, y en la etapa técnica se mira además si sus antecedentes calzan con esa función. *Qué lo prueba:* Antecedentes del facilitador y descripción de su función en la solicitud. *(Guía, p. 6; filas AL-16 a AL-23.)*
5. **Estar disponible no es acompañar: foro, correo, chat o mesa de ayuda no acreditan por sí solos.** Es el error natural de un curso asincrónico: declarar canales en vez de actividades. La guía pide hechos formativos, no vías de contacto abiertas. *Qué lo prueba:* La instancia obligatoria se describe como actividad, no como canal. *(Guía, pp. 6 y 16; filas AL-25, IN-01 e IN-03.)*
6. **Un acompañamiento bien descrito reúne cinco elementos: actividad + responsable + evidencia + retroalimentación + registro.** Es el ejemplo que la guía da por adecuado y lo más parecido a una receta que trae. Cada instancia obligatoria debería poder leerse con esos cinco elementos, y el aula tiene que mostrarlos. *Qué lo prueba:* Recorrido en el aula con una cuenta de prueba: los cinco elementos a la vista. *(Guía, p. 16; filas IN-04 a IN-08.)*
7. **Para cada aprendizaje esperado debe poder reconstruirse su evidencia, instrumento, criterio, ponderación y condición de aprobación.** El diseño se juzga completo, pero la evaluación debe poder seguirse aprendizaje por aprendizaje. Si a uno le falta su cadena, no hay cómo mostrar que se verificó. Con 22 aprendizajes esperados, es la tabla más larga que hay que construir. *Qué lo prueba:* Ficha por aprendizaje esperado con los seis eslabones completos. *(Guía, p. 17; filas EV-04.)*
8. **Preguntas de selección múltiple sobre conceptos pueden no bastar para demostrar que alguien sabe aplicar.** El instrumento debe estar a la altura del verbo. Si el aprendizaje dice aplicar, la guía sugiere mostrar desempeño: un caso resuelto, una simulación o una estrategia, con criterios para valorarlos. *Qué lo prueba:* Instrumento de cada aprendizaje esperado de aplicar, comparado con su verbo. *(Guía, p. 18; caso parecido en la p. 11; filas CU-12 y EV-14.)*
9. **La competencia se escribe como acción + objeto o resultado + contexto o condición de desempeño.** De esa frase cuelga todo lo demás: define qué hay que enseñar y qué hay que evaluar. Una competencia vaga deja sin referencia a los aprendizajes, a las actividades y a la evaluación. *Qué lo prueba:* Separar los tres elementos en cada competencia declarada. *(Guía, p. 11; filas CM-04.)*
10. **Que la suma cuadre no alcanza: la distribución de horas debe ser razonable y poder reconstruirse.** El SENCE preguntará cómo se usan las horas, no solo cuántas son. Cada cambio en el aula mueve el desglose, así que las horas se recalculan al final de cada cambio. *Qué lo prueba:* Horas por aprendizaje esperado y por actividad, que sumen el total y calcen con el aula. *(Guía, p. 14; filas DU-02, DU-04 y DU-07.)*
11. **Un mismo dato no puede decir dos cosas en dos partes.** La guía lo ejemplifica con el peso de una evaluación. Cada vez que el diseño cambia en un lugar y no en otro nace una contradicción, y con varias fuentes vivas el riesgo es real. *Qué lo prueba:* Nombre, horas, modalidad, ponderaciones y facilitador iguales en toda la solicitud, y de ahí en la planilla y el aula. *(Guía, p. 8; filas AF-08 y AF-09.)*
12. **Lo que la solicitud declara, el aula debe mostrarlo.** La solicitud es una promesa que se comprueba. Prometer retroalimentación individual obliga a que la plataforma deje ver la actividad, la entrega, la intervención, la retroalimentación y el registro. *Qué lo prueba:* Revisión de la solicitud contra el aula, punto por punto. *(Guía, pp. 19-20; filas LM-01, LM-12 y LM-13.)*
13. **Si un instrumento está bien descrito en la solicitud, su comprobación queda para la plataforma; si no está descrito, se puede observar.** Dice cuánto hay que escribir. No hace falta copiar cada instrumento en la solicitud, pero sí explicar qué es, para qué sirve, con qué criterios se aplica y cuánto pesa. *Qué lo prueba:* Cada instrumento con finalidad, criterios y ponderación en la solicitud. *(Guía, p. 20; filas LM-14.)*
14. **La pregunta de fondo es si el diseño «permite razonablemente desarrollar y verificar la competencia laboral declarada» (guía técnica, p. 9).** Resume toda la guía y sirve para decidir en caso de duda: una pieza del curso vale en la medida en que ayuda a desarrollar la competencia o a demostrar que se logró. *Qué lo prueba:* Lectura completa del diseño con esa pregunta en mente. *(Guía, p. 9; filas CU-03.)*

## Tabla de verdad

### PR · Cómo funciona la revisión

Secciones 1, 2, 3, 4, 5 y cierre. Estas filas no se comparan con el curso: explican las reglas del juego. Están aquí para que nadie lea mal el resultado de una etapa.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PR-01 | 1 | 3 | La guía orienta a los OTEC sobre cómo presentar sus solicitudes y con qué criterios se revisarán en admisibilidad y evaluación técnica, conforme a la RE 2.484 de 2026. | Afirmación | — | — | — | — |   |
| PR-02 | 1 | 3 | La admisibilidad legal mira si la actividad puede ser capacitación financiable con franquicia; la formal, si la información alcanza para evaluarla después. | Afirmación | — | — | — | — |   |
| PR-03 | 1 y 4 | 3, 8 | Superar la admisibilidad solo deja pasar a la evaluación técnica; no significa que el curso esté aprobado. | Afirmación | — | — | — | — |   |
| PR-04 | 2 | 7 | Si falla cualquiera de los requisitos legales, la solicitud es inadmisible y su revisión se detiene. | Afirmación | — | — | — | — |   |
| PR-05 | 3.2 | 7 | En admisibilidad formal no se juzga si los componentes son óptimos: solo que sean consistentes y evaluables. | Afirmación | — | — | — | — |   |
| PR-06 | 2.5, 2.8 y 4 | 5, 6, 8 | La admisibilidad comprueba que algo exista; la evaluación técnica analiza su coherencia, suficiencia, idoneidad, pertinencia y proporción. La proporcionalidad de las horas y la calidad del instrumento se dejan para esa etapa. | Afirmación | — | — | — | — |   |
| PR-07 | 5 | 9 | La evaluación técnica no revisa cada componente por separado: analiza el diseño completo. | Afirmación | — | — | — | — |   |
| PR-08 | 5.1 | 9 | Revisa al menos diez ámbitos: coherencia curricular; aprendizajes y contenidos; técnicas y actividades; duración y horas; facilitador; interacción, retroalimentación y acompañamiento, cuando corresponda; evaluación; materiales, recursos, infraestructura y equipamiento; plataformas y trazabilidad en e-learning; y costos. | Afirmación | — | — | — | — |   |
| PR-09 | Cierre | 21 | Los ejemplos de la guía son solo referenciales y orientadores. | Afirmación | — | — | — | — |   |

### AL · Admisibilidad legal

Secciones 2.1 a 2.8. Es el primer filtro y no admite compensación: si un requisito falla, la solicitud queda inadmisible. Por eso se compara primero. Lo legal se lee en lo que la solicitud describe; el cruce con el aula va en el bloque LM. Las filas del facilitador y de la interacción son las más exigentes para un curso asincrónico, porque piden describir a una persona que interviene.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AL-01 | 2.1 | 3 | La solicitud apunta a desarrollar o perfeccionar conocimientos, habilidades o competencias para el trabajo: empleabilidad, productividad, adaptación a la tecnología o desempeño. | Requisito | Solicitud | Inadmisible | Nombre, competencia y finalidad declarada |   |   |
| AL-02 | 2.1 | 3 | El ítem «Características de los participantes» deja reconocer con claridad la finalidad formativa del curso y cómo se relaciona con el trabajo de quienes participan. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: finalidad y relación con el trabajo |   |   |
| AL-03 | 2.1 | 3 | El ítem «Características de los participantes» dice qué funciones cumple el público del curso. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: funciones |   |   |
| AL-04 | 2.1 | 3 | Ese ítem señala la necesidad laboral del grupo. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: necesidad laboral |   |   |
| AL-05 | 2.1 | 3 | Ese ítem señala qué aspecto del desempeño se quiere fortalecer. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: desempeño a fortalecer |   |   |
| AL-06 | 2.1 | 3-4 | El ítem «Competencia a desarrollar» expresa el desempeño esperado como una acción que la persona podrá hacer en su trabajo al terminar. | Requisito | Solicitud | Inadmisible | Ítem «Competencia a desarrollar» |   |   |
| AL-07 | 2.2 | 4 | El propósito predominante no es la recreación, la convivencia, la integración, el esparcimiento ni el bienestar sin una finalidad real de capacitación laboral. | Límite | Solicitud | Inadmisible | Nombre, competencia, aprendizajes y contenidos |   |   |
| AL-08 | 2.2 | 4 | Usar dinámicas recreativas como recurso del método no vuelve inadmisible un curso por sí solo: lo que cuenta es que su propósito principal sea formativo y laboral. | Aclaración | — | — | Sirve para ubicar juegos e insignias como recurso del método | — |   |
| AL-09 | 2.3 | 4 | La solicitud describe un proceso formativo estructurado y no se limita a entregar contenidos, dejarlos disponibles o pedir que se revisen por cuenta propia. | Requisito | Solicitud | Inadmisible | Descripción del proceso en la solicitud |   |   |
| AL-10 | 2.3 | 4 | Quien participa no solo lee o mira contenidos: el proceso incluye intervención formativa. | Requisito | Solicitud | Inadmisible | Actividades con intervención del facilitador, descritas |   |   |
| AL-11 | 2.3 | 4 | El proceso incluye evaluación de aprendizajes. | Requisito | Solicitud | Inadmisible | Evaluación descrita en la solicitud |   |   |
| AL-12 | 2.4 | 5 | Si el curso aborda una ley, un reglamento, un protocolo, un procedimiento u otra obligación normativa, su diseño desarrolla una competencia aplicable al trabajo. | Requisito | Solicitud | Inadmisible | Aprendizajes y casos sobre datos personales, licencias y derechos |   |   |
| AL-13 | 2.4 | 5 | La acción no se agota en informar, difundir, registrar una lectura, acreditar que se tomó conocimiento o cumplir una formalidad. | Límite | Solicitud | Inadmisible | Actividades y evaluación de esos temas, como se describen |   |   |
| AL-14 | 2.4 | 5 | Un tema normativo se plantea como aplicación de la norma, con evaluación del aprendizaje, y no como su sola identificación. | Modelo | Solicitud | Inadmisible | Verbos de los aprendizajes sobre datos, licencias y derechos |   |   |
| AL-15 | 2.5 | 5 | La duración es de al menos 8 horas cronológicas, salvo que un Plan Formativo SENCE, una norma sectorial u otra regulación especial fije otra. | Requisito | Solicitud | Inadmisible | Duración total declarada |   |   |
| AL-16 | 2.6 | 6 | La solicitud identifica quién es responsable de intervenir en la formación. | Requisito | Solicitud | Inadmisible | Identificación del facilitador |   |   |
| AL-17 | 2.6 | 6 | Señala sus antecedentes de formación y experiencia en la temática del curso. | Requisito | Solicitud | Inadmisible | Antecedentes en el tema |   |   |
| AL-18 | 2.6 | 6 | Señala sus antecedentes de formación y experiencia en la capacitación de personas adultas. | Requisito | Solicitud | Inadmisible | Antecedentes formando adultos |   |   |
| AL-19 | 2.6 | 6 | Describe qué acción realizará esa persona. | Requisito | Solicitud | Inadmisible | Función formativa: acción |   |   |
| AL-20 | 2.6 | 6 | Describe sobre qué actividad o aprendizaje esperado intervendrá. | Requisito | Solicitud | Inadmisible | Función formativa: actividad o aprendizaje |   |   |
| AL-21 | 2.6 | 6 | Describe por qué canal intervendrá. | Requisito | Solicitud | Inadmisible | Función formativa: canal |   |   |
| AL-22 | 2.6 | 6 | Describe en qué momento del proceso intervendrá. | Requisito | Solicitud | Inadmisible | Función formativa: momento |   |   |
| AL-23 | 2.6 | 6 | Hay intervención ligada al aprendizaje: no basta con nombrar a una persona ni con darle tareas administrativas, técnicas o de soporte. | Límite | Solicitud | Inadmisible | Intervenciones atadas a una actividad de aprendizaje |   |   |
| AL-24 | 2.7 | 6 | El proceso contempla al menos una instancia obligatoria de interacción, de retroalimentación o de acompañamiento. | Requisito | Solicitud | Inadmisible | Instancia declarada como obligatoria |   |   |
| AL-25 | 2.7 | 6 | Esa instancia no se reduce a tener a disposición un correo, un chat, una mesa de ayuda u otra vía de consulta. | Límite | Solicitud | Inadmisible | La instancia descrita es una actividad, no un canal |   |   |
| AL-26 | 2.8 | 6 | El curso contempla una evaluación destinada a comprobar los aprendizajes alcanzados. | Requisito | Solicitud | Inadmisible | Evaluación declarada |   |   |
| AL-27 | 2.8 | 6 | Esa evaluación no consiste solo en encuestas de satisfacción, listas de asistencia, declaraciones de haber participado o constancias de lectura o de toma de conocimiento. | Límite | Solicitud | Inadmisible | Instrumentos declarados |   |   |

### AF · Admisibilidad formal

Secciones 3.1 a 3.5 y 4. Este filtro no mide calidad sino orden: que la solicitud esté completa, sea específica y no se contradiga. Aquí caen los datos que cambiaron en un lugar y no en otro.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AF-01 | 3.1 | 7 | Están completos todos los campos y antecedentes que pide el sistema. | Requisito | Solicitud | No lo dice | Formulario sin campos vacíos |   |   |
| AF-02 | 3.1 | 7 | La información es lo bastante específica para entender las características del curso. | Requisito | Solicitud | No lo dice | Lectura por alguien ajeno al curso |   |   |
| AF-03 | 3.2 | 7 | Competencia, aprendizajes esperados, contenidos, técnicas, actividades e instrumentos de evaluación no se contradicen de forma manifiesta. | Requisito | Solicitud | Observada | Matriz de coherencia contra el aula |   |   |
| AF-04 | 3.3 | 7 | La duración total declarada coincide con el desglose horario de la solicitud. | Requisito | Solicitud | Observada | Suma del desglose contra el total |   |   |
| AF-05 | 3.3 | 7 | El desglose se muestra por aprendizaje esperado y suma exactamente el total. | Modelo | Solicitud | Observada | Horas por aprendizaje esperado |   |   |
| AF-06 | 3.4 | 7 | La modalidad es una de las tres previstas (presencial, e-learning sincrónica o e-learning asincrónica) y está bien identificada. | Requisito | Solicitud | No lo dice | Campo modalidad |   |   |
| AF-07 | 3.4 | 7-8 | La modalidad es coherente con la forma en que se describe el desarrollo del curso. | Requisito | Solicitud | Observada | Descripción del curso en la solicitud |   |   |
| AF-08 | 3.5 | 8 | No hay contradicciones, inconsistencias manifiestas ni falta de información que impidan entender el diseño o evaluarlo. | Requisito | Solicitud | Observada | Lectura cruzada de solicitud, planilla y aula |   |   |
| AF-09 | 3.5 | 8 | Un mismo dato no aparece con valores distintos en dos partes (el ejemplo es el peso de una evaluación). | Límite | Solicitud | Observada | Nombre, horas, modalidad, pesos y facilitador iguales en toda la solicitud |   |   |
| AF-10 | 4 | 8 | La solicitud desarrolla técnicas metodológicas: la admisibilidad comprueba que existan. | Requisito | Solicitud | No lo dice | Técnicas descritas en la solicitud |   |   |

### CU · Coherencia curricular

Secciones 5 y 6. La evaluación técnica lee el diseño como una sola cadena. Un eslabón suelto, aunque sea bueno, debilita toda la solicitud.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CU-01 | 2.1 | 4 | La competencia es coherente con las características de los participantes y se desarrolla en aprendizajes esperados, técnicas y evaluación. La guía deja esta revisión para la evaluación técnica. | Criterio | Solicitud | No lo dice | Lectura cruzada de esos cuatro elementos |   |   |
| CU-02 | 5 | 9 | Hay coherencia en toda la secuencia: participantes, competencia, aprendizajes esperados, contenidos, técnicas, actividades, evaluación, duración y recursos. | Criterio | Solicitud | No lo dice | Matriz de coherencia de punta a punta |   |   |
| CU-03 | 5 | 9 | Mirado completo, el diseño permite de forma razonable desarrollar la competencia y comprobar que se logró. | Criterio | Ambas | No lo dice | Lectura completa del diseño con esa pregunta |   |   |
| CU-04 | 6 | 9 | Los componentes están relacionados entre sí y cada uno aporta al desarrollo de la competencia. | Criterio | Solicitud | No lo dice | Ningún componente queda suelto |   |   |
| CU-05 | 6 | 10 | La competencia responde qué debe hacer la persona. | Criterio | Solicitud | No lo dice | Una respuesta para la competencia |   |   |
| CU-06 | 6 | 10 | Los aprendizajes esperados responden qué aprenderá la persona, paso a paso, para llegar a la competencia. | Criterio | Solicitud | No lo dice | Progresión de los aprendizajes |   |   |
| CU-07 | 6 | 10 | Los contenidos responden qué conocimientos y habilidades necesita dominar. | Criterio | Solicitud | No lo dice | Una respuesta para los contenidos |   |   |
| CU-08 | 6 | 10 | Las técnicas y actividades responden con qué desarrollará los aprendizajes. | Criterio | Solicitud | No lo dice | Una respuesta para las técnicas y actividades |   |   |
| CU-09 | 6 | 10 | La evaluación responde cómo se comprobará que los alcanzó. | Criterio | Solicitud | No lo dice | Una respuesta para la evaluación |   |   |
| CU-10 | 6 | 10 | La solicitud muestra una relación directa entre características laborales de los participantes, competencia, aprendizajes, contenidos, actividades y evaluación. | Requisito | Solicitud | No lo dice | Relación explícita entre los seis elementos |   |   |
| CU-11 | 6 | 10 | Se observa una relación entre el trabajo de la persona, lo que aprende, la actividad que hace y lo que finalmente se evalúa. | Modelo | Solicitud | No lo dice | Por aprendizaje: trabajo, actividad y evaluación |   |   |
| CU-12 | 6 | 11 | La evaluación comprueba la aplicación de la competencia y no solo conocimiento conceptual. | Límite | Ambas | Observada | Qué desempeño muestra la persona en cada evaluación |   |   |

### CM · Competencia

Secciones 7. La competencia es la referencia de todo lo demás. Si está mal escrita, los aprendizajes, las actividades y la evaluación no tienen contra qué medirse.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CM-01 | 7 | 11 | La competencia dice qué será capaz de hacer la persona al terminar la capacitación. | Requisito | Solicitud | Debe corregirse | Texto de la competencia |   |   |
| CM-02 | 7 | 11 | Se relaciona con el contexto laboral de la persona. | Requisito | Solicitud | No lo dice | Contexto de trabajo en el texto |   |   |
| CM-03 | 4 | 8 | La competencia es coherente y suficiente dentro del diseño. | Criterio | Solicitud | No lo dice | Competencia contra el resto del diseño |   |   |
| CM-04 | 7 | 11 | Tiene la estructura acción + objeto o resultado + contexto o condición de desempeño. | Requisito | Solicitud | Debe corregirse | Los tres elementos, separados |   |   |
| CM-05 | 7 | 11 | No es una fórmula genérica del tipo conocer + herramienta, que no deja ver el desempeño. | Límite | Solicitud | Debe corregirse | Verbo de desempeño observable |   |   |

### AE · Aprendizajes esperados

Secciones 8. Son los eslabones que llevan a la competencia. Cada uno debe tener contenidos y actividades asociados y poder evaluarse. Si no se puede decir qué hará la persona para demostrarlo, falta precisarlo.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AE-01 | 8 | 11 | Cada aprendizaje esperado describe un desempeño parcial que hay que alcanzar para desarrollar la competencia. | Requisito | Solicitud | No lo dice | Cada aprendizaje contra su competencia |   |   |
| AE-02 | 8 | 12 | Cada uno aporta directamente al logro de la competencia. | Requisito | Solicitud | No lo dice | Relación con la competencia |   |   |
| AE-03 | 8 | 12 | Cada uno describe algo que se puede verificar. | Requisito | Solicitud | No lo dice | Verbo y producto observable |   |   |
| AE-04 | 8 | 12 | Cada uno tiene contenidos asociados. | Requisito | Ambas | No lo dice | Contenido del aprendizaje en el aula |   |   |
| AE-05 | 8 | 12 | Cada uno tiene actividades que permiten desarrollarlo. | Requisito | Ambas | No lo dice | Actividades del aprendizaje en el aula |   |   |
| AE-06 | 8 | 12 | Cada uno se puede evaluar. | Requisito | Ambas | No lo dice | Instrumento que lo evalúa |   |   |
| AE-07 | 8 | 12 | Para cada uno se puede responder qué hará la persona para demostrar que lo logró; si no, probablemente falta operacionalizarlo. | Criterio | Solicitud | No lo dice | Ficha por aprendizaje esperado |   |   |
| AE-08 | 6 | 11 | Los aprendizajes y las actividades están al nivel de la competencia: una competencia de aplicar no se sostiene con un aprendizaje de conocer y una lectura. | Modelo | Solicitud | Observada | Verbos de competencia, aprendizajes y actividades |   |   |

### CT · Contenidos

Secciones 9. No se cuenta cuánto contenido hay, sino si alcanza para hacer lo que el aprendizaje pide. Un curso rico en conceptos puede quedar corto si el aprendizaje dice aplicar.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT-01 | 9 | 12 | Los contenidos están asociados a cada aprendizaje esperado y se relacionan con la competencia. | Requisito | Ambas | No lo dice | Cruce aprendizaje y contenido |   |   |
| CT-02 | 9 | 12 | Son suficientes para desarrollar el aprendizaje. | Requisito | Ambas | No lo dice | Contenido contra lo que se pide hacer |   |   |
| CT-03 | 9 | 12 | Se vinculan con la finalidad del curso. | Requisito | Solicitud | No lo dice | Contenidos contra finalidad laboral |   |   |
| CT-04 | 9 | 12 | Siguen una secuencia lógica. | Requisito | Ambas | No lo dice | Orden de temas y módulos |   |   |
| CT-05 | 9 | 12 | Su profundidad es compatible con las horas declaradas. | Requisito | Ambas | No lo dice | Profundidad contra horas del aprendizaje |   |   |
| CT-06 | 9 | 13 | Si el aprendizaje pide aplicar, hay contenidos para aplicar (estructura, técnicas, ejercicios) y no solo definiciones, historia o tipos. | Límite | Ambas | Insuficiente | Pasos, técnicas y ejercicios en esos temas |   |   |

### TM · Técnicas y actividades

Secciones 10. Nombrar técnicas no prueba nada. El SENCE quiere leer qué hace la persona, qué produce y cómo interviene el facilitador.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TM-01 | 10 | 13 | Las técnicas y actividades permiten de verdad desarrollar los aprendizajes esperados. | Criterio | Ambas | No lo dice | Técnica y actividades por aprendizaje |   |   |
| TM-02 | 10 | 13 | La solicitud no se queda en una lista de técnicas (exposición, lectura, foro, estudio de caso, trabajo en grupo). | Límite | Solicitud | Insuficiente | Texto de técnicas en la solicitud |   |   |
| TM-03 | 10 | 13 | Explica qué hará la persona participante. | Requisito | Solicitud | Insuficiente | Acción del participante por actividad |   |   |
| TM-04 | 10 | 13 | Explica cómo esa actividad aporta al aprendizaje esperado. | Requisito | Solicitud | Insuficiente | Relación actividad y aprendizaje |   |   |
| TM-05 | 10 | 13 | Declara cómo el facilitador retroalimentará y acompañará, para acreditar ese proceso. | Requisito | Ambas | Insuficiente | Forma y momento de la retroalimentación |   |   |
| TM-06 | 10 | 14 | En cada actividad se distinguen cinco elementos: actividad, participante, aprendizaje asociado, producto e intervención del facilitador. | Modelo | Solicitud | No lo dice | Los cinco elementos por actividad |   |   |

### DU · Duración y horas

Secciones 11. Las horas son el dato que más se desordena cuando el diseño cambia. La guía pide que se puedan reconstruir, no solo sumar, y que tengan sentido frente a lo que se pide hacer.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DU-01 | 11 | 14 | La duración guarda relación con la complejidad de la competencia, la cantidad y profundidad de los aprendizajes, los contenidos, la metodología, las actividades prácticas y la evaluación. | Requisito | Solicitud | No lo dice | Justificación de las horas totales |   |   |
| DU-02 | 11 | 14 | La distribución permite ejecutar el proceso de forma razonable: no basta con que la suma sea correcta. | Criterio | Solicitud | Puede observarse | Horas por módulo, aprendizaje y actividad |   |   |
| DU-03 | 11 | 14-15 | No hay diferencias entre las horas totales y el desglose, tampoco en la suma de las actividades. | Requisito | Solicitud | Debe corregirse | Total contra suma por aprendizaje y actividad |   |   |
| DU-04 | 11 | 14 | La duración de cada actividad se puede reconstruir. | Requisito | Ambas | Observada | Parámetros de tiempo por tipo de actividad |   |   |
| DU-05 | 11 | 14 | Ningún aprendizaje complejo tiene un tiempo claramente insuficiente. | Requisito | Solicitud | Puede observarse | Horas de los aprendizajes más complejos |   |   |
| DU-06 | 11 | 14 | No hay tiempos excesivos sin actividades formativas que los respalden. | Requisito | Solicitud | Puede observarse | Minutos de cada actividad con su respaldo |   |   |
| DU-07 | 11 | 14 | Se puede reconstruir cómo se reparte en la práctica la carga horaria, sin contradicciones. | Criterio | Ambas | Observada | Hoja «Resumen horas» contra el aula de hoy |   |   |
| DU-08 | 11 | 15 | La metodología y las actividades explican cómo se usan las horas declaradas. | Modelo | Solicitud | Observada | Texto de metodología |   |   |

### FA · Facilitador

Secciones 12. Aquí ya no basta con que el facilitador exista: se juzga si sus antecedentes calzan con lo que va a hacer. Y lo que puede hacer limita lo que el curso puede prometer.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FA-01 | 12 | 15 | Su formación y/o experiencia permite relacionarlo razonablemente con la temática del curso. | Criterio | Solicitud | Faltan antecedentes | Antecedentes contra temática |   |   |
| FA-02 | 12 | 15 | También con las actividades que debe desarrollar. | Criterio | Solicitud | Faltan antecedentes | Antecedentes contra actividades |   |   |
| FA-03 | 12 | 15 | También con la orientación del aprendizaje. | Criterio | Solicitud | Faltan antecedentes | Experiencia orientando a adultos |   |   |
| FA-04 | 12 | 15 | Y con la evaluación, cuando le corresponda. | Criterio | Solicitud | Faltan antecedentes | Experiencia evaluando con rúbrica |   |   |
| FA-05 | 12 | 15 | No se pide un título profesional específico, salvo que una norma sectorial lo determine. | Aclaración | — | — | — | — |   |
| FA-06 | 12 | 15 | La persona es idónea para la función formativa declarada y sus acciones apoyan el proceso de aprendizaje. | Criterio | Solicitud | No lo dice | Función declarada contra antecedentes y acciones |   |   |
| FA-07 | 12 | 15 | Hay una correspondencia reconocible entre sus antecedentes y su función (formación afín, experiencia en el tema y experiencia facilitando capacitación laboral). | Modelo | Solicitud | Faltan antecedentes | Antecedentes y función, lado a lado |   |   |
| FA-08 | 12 | 16 | La experiencia general como capacitador, sin relación con la materia, no alcanza para mostrar idoneidad en lo que debe orientar o evaluar. | Límite | Solicitud | Faltan antecedentes | Antecedentes en la materia del curso |   |   |

### IN · Interacción, retroalimentación y acompañamiento

Secciones 13. En e-learning esta es la diferencia entre un curso y un repositorio. La guía exige una actividad concreta y deja fuera los canales abiertos, incluido el foro por sí solo.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IN-01 | 13 | 16 | El acompañamiento no se apoya por sí solo en correo, foro, chat, mesa de ayuda o canal de consultas. | Límite | Ambas | No se acredita | Lo declarado no depende de un canal abierto |   |   |
| IN-02 | 13 | 16 | Está identificada una actividad formativa concreta. | Requisito | Ambas | No se acredita | Actividad con nombre en solicitud y aula |   |   |
| IN-03 | 13 | 16 | La solicitud no se queda en decir que el tutor estará disponible para responder dudas: eso muestra disponibilidad, pero no necesariamente intervención. | Límite | Solicitud | Insuficiente | El texto habla de acciones |   |   |
| IN-04 | 13 | 16 | Cada participante entrega un producto en un punto definido del curso. | Modelo | Ambas | No lo dice | Tarea de entrega en el aula |   |   |
| IN-05 | 13 | 16 | El facilitador revisa ese producto. | Modelo | Ambas | No lo dice | Revisión del docente en la tarea |   |   |
| IN-06 | 13 | 16 | Entrega retroalimentación individual por la plataforma, con fortalezas, errores y aspectos por corregir. | Modelo | Ambas | No lo dice | Comentario individual en la tarea |   |   |
| IN-07 | 13 | 16 | La actividad es obligatoria. | Modelo | Ambas | No lo dice | Requisito de finalización del curso |   |   |
| IN-08 | 13 | 16 | Queda registrada en la plataforma. | Modelo | Ambas | No lo dice | Registro de entrega y retroalimentación |   |   |

### EV · Evaluación de los aprendizajes

Secciones 14, 15 y 16. Es el bloque con más consecuencias: tiene que demostrar que cada aprendizaje y la competencia se alcanzaron. Si los instrumentos no muestran desempeño, no alcanza con que lo demás esté bien.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV-01 | 14 | 16 | La evaluación permite comprobar que la persona alcanzó los aprendizajes esperados. | Requisito | Ambas | No lo dice | Cobertura de todos los aprendizajes |   |   |
| EV-02 | 14 | 16 | En conjunto, permite comprobar la competencia del curso. | Requisito | Ambas | Observada | Evaluaciones en conjunto contra la competencia |   |   |
| EV-03 | 2.8 y 4 | 6, 8 | Cada instrumento es pertinente, suficiente y de calidad técnica para lo que evalúa. | Criterio | Ambas | No lo dice | Cada instrumento contra lo que debe verificar |   |   |
| EV-04 | 14 | 17 | Para cada aprendizaje esperado se puede reconstruir la cadena: evidencia, instrumento, criterio de evaluación, ponderación y condición de aprobación. | Requisito | Ambas | No lo dice | Ficha por aprendizaje con los seis eslabones |   |   |
| EV-05 | 14 | 17 | La solicitud indica qué se evaluará. | Requisito | Solicitud | Puede observarse | Objeto de cada evaluación |   |   |
| EV-06 | 14 | 17 | Indica qué hará la persona participante. | Requisito | Solicitud | No lo dice | Tarea de la persona en cada evaluación |   |   |
| EV-07 | 14 | 17 | Indica con qué instrumento se evaluará. | Requisito | Solicitud | Puede observarse | Instrumento por evaluación |   |   |
| EV-08 | 14 | 17 | Indica qué criterios se aplicarán. | Requisito | Ambas | Puede observarse | Criterios o rúbrica |   |   |
| EV-09 | 14 | 17 | Indica cómo se calificará, con su escala o puntaje y su mínimo de aprobación. | Requisito | Ambas | Puede observarse | Escala, puntaje y mínimo |   |   |
| EV-10 | 14 | 17 | Indica cuál es la ponderación. | Requisito | Ambas | Puede observarse | Pesos en la solicitud y en el libro de calificaciones |   |   |
| EV-11 | 14 | 17 | Las ponderaciones suman 100 %. | Modelo | Ambas | No lo dice | Suma de los pesos |   |   |
| EV-12 | 15 | 18 | Hay correspondencia verificable entre aprendizaje, actividad, evidencia e instrumento: un aprendizaje de aplicar, un caso, un producto de la persona y una rúbrica con criterios y puntajes (100 puntos y mínimo de 60 en el ejemplo). | Modelo | Ambas | No lo dice | El modelo aplicado a los aprendizajes de aplicar |   |   |
| EV-13 | 2.7 y 6 | 6, 10 | El facilitador evalúa la actividad o aplica el instrumento. | Modelo | Ambas | No lo dice | Quién califica cada instrumento |   |   |
| EV-14 | 16 | 18 | Si el aprendizaje es de aplicar, el instrumento comprueba esa capacidad: no se limita a selección múltiple sobre conceptos. | Límite | Ambas | Insuficiente | Instrumento de cada aprendizaje de aplicar |   |   |
| EV-15 | 16 | 18 | Para corregirlo se incorpora un instrumento de desempeño (resolver un caso, una simulación, analizar respuestas o elaborar una estrategia) con criterios para valorar el desempeño esperado. | Modelo | Ambas | No lo dice | Caso, simulación o producto con rúbrica |   |   |

### RC · Recursos y equipamiento

Secciones 17. La pregunta es simple: con lo declarado, ¿se puede hacer lo diseñado? En un curso de IA eso incluye las herramientas, el acceso y el equipo que piden las prácticas.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RC-01 | 17 | 19 | Los recursos declarados permiten hacer las actividades y las evaluaciones propuestas. | Requisito | Solicitud | Puede observarse | Lista de recursos contra actividades |   |   |
| RC-02 | 17 | 19 | Las técnicas metodológicas muestran cómo se usarán los materiales, herramientas y equipamiento declarados. | Requisito | Solicitud | No lo dice | Uso de cada herramienta en las técnicas |   |   |
| RC-03 | 17 | 19 | Si hay ejercicios con software, se declaran el software, el computador, sus características técnicas y el acceso. | Modelo | Solicitud | Puede observarse | Herramientas, equipo, requisitos y acceso |   |   |
| RC-04 | 17 | 19 | A un curso sobre todo conceptual no se le exigen recursos que no vienen al caso. | Aclaración | — | — | — | — |   |

### LM · Verificación en el aula

Secciones 18 y 19. En e-learning el aula es la evidencia. Todo lo que diga la solicitud puede comprobarse dentro de la plataforma, con sus registros. La lista de la guía es abierta: puede mirarse más.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LM-01 | 18 | 19 | Lo declarado en la solicitud corresponde con lo que después se puede comprobar en la plataforma. | Requisito | Ambas | No lo dice | Solicitud contra aula, punto por punto |   |   |
| LM-02 | 18 | 19 | El aula deja comprobar la estructura del curso. | Criterio | Aula | No lo dice | Secciones y orden |   |   |
| LM-03 | 18 | 19 | Deja comprobar las actividades. | Criterio | Aula | No lo dice | Actividades visibles y configuradas |   |   |
| LM-04 | 18 | 19 | Deja comprobar la participación. | Criterio | Aula | No lo dice | Informes de participación |   |   |
| LM-05 | 18 | 19 | Deja comprobar la progresión. | Criterio | Aula | No lo dice | Finalización de actividades |   |   |
| LM-06 | 18 | 19 | Deja comprobar la intervención del facilitador. | Criterio | Aula | No lo dice | Comentarios y notas del docente |   |   |
| LM-07 | 18 | 19 | Deja comprobar la interacción. | Criterio | Aula | No lo dice | Foros y entregas con respuesta |   |   |
| LM-08 | 18 | 19 | Deja comprobar la retroalimentación. | Criterio | Aula | No lo dice | Retroalimentación en tareas y cuestionarios |   |   |
| LM-09 | 18 | 19 | Deja comprobar las evaluaciones. | Criterio | Aula | No lo dice | Cuestionarios y tareas calificadas |   |   |
| LM-10 | 18 | 19 | Deja comprobar los resultados. | Criterio | Aula | No lo dice | Libro de calificaciones |   |   |
| LM-11 | 18 | 19 | Deja comprobar los registros de trazabilidad. | Criterio | Aula | No lo dice | Registros del curso |   |   |
| LM-12 | 18 | 20 | La plataforma contiene de verdad cada componente que se declaró como parte del diseño. | Requisito | Ambas | No lo dice | Cada componente declarado, visible en el aula |   |   |
| LM-13 | 18 | 20 | Si se promete retroalimentación individual, la plataforma deja ver la actividad, la entrega, la intervención del facilitador, la retroalimentación y su registro. | Modelo | Aula | No lo dice | Recorrido con cuenta de prueba: los cinco rastros |   |   |
| LM-14 | 19 | 20 | La solicitud explica qué instrumento usará, qué evalúa y cómo se calificará, y describe su finalidad, criterios y ponderación: así queda como verificación pendiente y no como falta de información. | Criterio | Solicitud | Puede observarse | Descripción de cada instrumento |   |   |
| LM-15 | 19 | 20 | Que un instrumento o registro no esté reproducido en la solicitud no significa automáticamente que no exista: si está bien declarado, el SENCE puede terminar de comprobarlo en la plataforma. | Aclaración | — | — | — | — |   |

### CS · Costos

Secciones 20. No se mide si es caro o barato, sino si cada costo se explica por el diseño. Si el diseño cambia, los costos declarados también deben revisarse.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CS-01 | 20 | 20 | Los costos declarados corresponden con las características técnicas de la capacitación. | Requisito | Solicitud | No lo dice | Presupuesto contra diseño |   |   |
| CS-02 | 20 | 21 | Corresponden con elementos como la modalidad, el número de participantes, la duración, los facilitadores, la infraestructura, los materiales, el equipamiento, las plataformas y las actividades. | Criterio | Solicitud | No lo dice | Cada ítem de costo con su elemento del diseño |   |   |
| CS-03 | 20 | 20-21 | No se compara con el mercado ni se observa un curso solo porque un costo parezca alto o bajo. | Aclaración | — | — | — | — |   |
| CS-04 | 20 | 21 | No se declara un costo de infraestructura que no aparezca en el diseño. | Límite | Solicitud | Puede observarse | Infraestructura declarada |   |   |
| CS-05 | 20 | 21 | Toda actividad que requiera equipamiento lo tiene declarado. | Límite | Solicitud | Puede observarse | Equipamiento de las actividades |   |   |
| CS-06 | 20 | 21 | Cada costo tiene una relación identificable con la ejecución del curso. | Límite | Solicitud | Puede observarse | Relación de cada costo con la ejecución |   |   |

## Modelos de la guía

| N.° | Modelo | Lo que sí | Lo que no | Guía |
| --- | --- | --- | --- | --- |
| M-01 | Finalidad y desempeño | Para qué se capacita (finalidad laboral) + qué podrá hacer la persona (desempeño) | Una finalidad sin desempeño, o un desempeño sin necesidad laboral detrás | 2.1, p. 4 |
| M-02 | Tema normativo | Aplicar la norma, con evaluación del aprendizaje | Solo identificar la norma | 2.4, p. 5 |
| M-03 | Ejemplo de instancia obligatoria | Actividad en la plataforma + evaluada por el facilitador + retroalimentación en la plataforma | Correo, chat, mesa de ayuda u otro canal disponible | 2.7, p. 6 |
| M-04 | Desglose de horas | Horas por aprendizaje esperado que suman exactamente el total, y metodología que explica su uso | Un desglose cuya suma no coincide con el total | 3.3 y 11, pp. 7 y 15 |
| M-05 | Cadena curricular | Participantes + competencia + aprendizaje + actividad + evaluación, con relación observable entre el trabajo y lo evaluado | Competencia de aplicar con aprendizaje de conocer, lectura y cuestionario de definiciones | 6, pp. 10-11 |
| M-06 | Competencia | Acción + objeto o resultado + contexto o condición de desempeño | Conocer + nombre de una herramienta | 7, p. 11 |
| M-07 | Aprendizaje operacionalizado | Aprendizaje + actividad + evidencia + evaluación con rúbrica y criterios | No poder decir qué hará la persona para demostrarlo | 8, p. 12 |
| M-08 | Contenido para aplicar | Conceptos + estructura o procedimiento + técnicas + ejercicios de aplicación | Solo definición, historia y tipos | 9, p. 13 |
| M-09 | Descripción de una técnica | Actividad + participante + aprendizaje asociado + producto + intervención del facilitador | Lista de técnicas sin explicación | 10, pp. 13-14 |
| M-10 | Idoneidad del facilitador | Formación afín + experiencia en el tema + experiencia como facilitador | Experiencia general como capacitador, sin la materia | 12, pp. 15-16 |
| M-11 | Ejemplo de acompañamiento | Actividad + responsable + evidencia + retroalimentación + registro | Decir que el tutor estará disponible | 13, p. 16 |
| M-12 | Cadena de evaluación | Aprendizaje → evidencia → instrumento → criterio → ponderación → condición de aprobación | Un aprendizaje sin alguno de esos eslabones | 14, p. 17 |
| M-13 | Evaluación coherente | Aprendizaje de aplicar + caso + producto de la persona + rúbrica con criterios + puntaje máximo y mínimo (100 y 60 en el ejemplo) | Instrumento que no permite ver el desempeño | 15, p. 18 |
| M-14 | Cómo corregir una evaluación insuficiente | Agregar resolución de caso, simulación, análisis de respuestas o elaboración de una estrategia, con criterios | Selección múltiple sobre conceptos para un aprendizaje de aplicar | 16, p. 18 |
| M-15 | Recursos para software | Software + computador + características técnicas + acceso | Actividades que piden algo que no está declarado | 17, p. 19 |
| M-16 | Promesa comprobable | Actividad + entrega + intervención + retroalimentación + registro, a la vista en la plataforma | Declarar algo que la plataforma no deja ver | 18, p. 20 |
| M-17 | Verificación pendiente | Instrumento descrito en la solicitud (finalidad, criterios, ponderación), que se comprueba en el aula | Falta de información: no se explica qué instrumento se usa, qué evalúa ni cómo se califica | 19, p. 20 |
| M-18 | Costo coherente | Cada costo se explica por un elemento del diseño | Infraestructura fuera del diseño, equipamiento no declarado o costo sin relación con la ejecución | 20, p. 21 |

## Hallazgos de la auditoría

| N.° | Gravedad | Tema | Hallazgo | Qué hacer | Referencia |
| --- | --- | --- | --- | --- | --- |
| O-01 | Alta | El Anexo Técnico no llegó | La planilla anota que la RE 2.484 remite la evaluación técnica a dos documentos: una Guía Técnica y un Anexo Técnico con criterios, indicadores, medios de verificación y estándares. La guía recibida no nombra ningún anexo ni trae indicadores o estándares, y su título no es exactamente el que anota la planilla. | Confirmar con OTIC SOFOFA o el SENCE si esta es la Guía Técnica que cita la resolución y si existe un Anexo Técnico aparte. Mientras tanto, tratar esta tabla como mínimo, no como lista cerrada. | Toda la guía; planilla, hojas Léeme y Pendientes (fila 3) |
| O-02 | Alta | Selección múltiple sobre casos | La guía cuestiona la selección múltiple sobre conceptos para un aprendizaje de aplicar. No dice qué pasa con preguntas de selección múltiple construidas sobre situaciones o casos. | Tratarlo como riesgo: decidir con Natalia y, si hay duda, consultar antes de presentar. | 16, p. 18 |
| O-03 | Alta | Ponderación por aprendizaje o por evaluación | La cadena pide ponderación para cada aprendizaje esperado, pero el ejemplo pondera evaluaciones (1, 2 y final) y el ejemplo completo de la sección 15 no trae ponderación. No dice qué hacer cuando una evaluación cubre varios aprendizajes. | Armar la ficha por aprendizaje y mostrar en qué evaluación se mide y cuánto pesa esa evaluación. | 14 y 15, pp. 17 y 18 |
| O-04 | Alta | El foro como actividad | El foro aparece como medio insuficiente y como técnica que no basta enumerar, pero la guía no dice si un foro con consigna, revisión y retroalimentación del facilitador puede ser la actividad concreta. | No apoyar la instancia obligatoria en foros. Si se usan, describirlos con los cinco elementos del acompañamiento. | 10 y 13, pp. 13 y 16 |
| O-05 | Alta | Una competencia o varias | La guía razona casi siempre con la competencia del curso, en singular (en la p. 3 nombra competencias en plural, al definir la finalidad). No dice cómo se declara un curso largo organizado en módulos con competencia propia. | Revisar qué permite el formulario y definir si hace falta una competencia general del curso. | 2.1, 5 y 7, pp. 3, 9 y 11 |
| O-06 | Media | Documento sin fecha ni firma | No trae fecha, número, versión ni firma. Según los metadatos del PDF se generó el 02-11-2026, y cada página lleva una marca de CamScanner sobre el pie. | Buscar la versión oficial en sence.cl o pedirla a OTIC SOFOFA y anotar cuál se usó. Si aparece otra, comparar y actualizar esta tabla. | Todas las páginas |
| O-07 | Media | Reglas que solo están en ejemplos | La guía dice que sus ejemplos son referenciales, pero varias precisiones aparecen solo ahí: el desglose por aprendizaje, la retroalimentación con fortalezas y errores, o la rúbrica de 100 puntos con mínimo de 60. | Tratarlas como lo que el revisor espera ver, sin leerlas como obligación literal. En la tabla van como Modelo si muestran lo que sí y como Límite si muestran lo que no. | pp. 7, 16, 17 y 21 |
| O-08 | Media | Cuántas instancias bastan | La sección 2.7 pide al menos una instancia de interacción, de retroalimentación o de acompañamiento. La 5.1 y el título de la 13 las suman, y la 10 pide declarar las formas de retroalimentación y acompañamiento. No dice si en la etapa técnica basta una forma ni cuántas instancias son suficientes en un curso largo. | Fijar un criterio propio, proporcional a las horas, y justificarlo. La planilla anota que la RE mira también la suficiencia (IV.3 e). | 2.7, 5.1, 10 y 13, pp. 6, 9, 13 y 16 |
| O-09 | Media | Desglose por aprendizaje o por actividad | El ejemplo de la sección 3.3 desglosa por aprendizaje esperado y el de la sección 11 habla también de actividades. No fija un único formato. | Preparar los dos desgloses y que cuadren entre sí. | 3.3 y 11, pp. 7, 14 y 15 |
| O-10 | Media | Sin parámetros de tiempo | No da parámetros para estimar tiempos en e-learning asincrónico ni cifras de lo insuficiente o lo excesivo: queda a criterio de quien revisa. | Mantener a la vista los parámetros propios (por ejemplo, minutos por pantalla) y su respaldo. La planilla tiene pendiente un piloto de tiempos. | 11, p. 14 |
| O-11 | Media | Qué pasa si falla lo formal | Para lo legal, la guía dice que la revisión termina. Para lo formal solo hay ejemplos que dicen observada o por corregir: no escribe una regla general ni si se corrige en el mismo trámite. | Revisar la RE 2.484. La planilla anota que cada reingreso reinicia el plazo completo (IV.1.1). | 3, pp. 7-8 |
| O-12 | Media | Técnicas en la admisibilidad | La sección 4 incluye el desarrollo de técnicas metodológicas entre lo que se verifica en admisibilidad, pero no aparece como requisito propio en las secciones 2 ni 3. | Tratarlo como exigible desde la admisibilidad (fila AF-10). | 4, p. 8 |
| O-13 | Media | Formación y experiencia | La sección 2.6 pide antecedentes de formación y experiencia; la sección 4 habla de formación y experiencia, y la 12 de formación y/o experiencia. | Declarar las dos cosas cuando se pueda: es la lectura segura. | 2.6, 4 y 12, pp. 6, 8 y 15 |
| O-14 | Media | Un responsable o un equipo | Habla de la persona responsable, en singular, aunque entre los elementos de costos nombra facilitadores en plural. No trata equipos ni reemplazos. | Definir bien a la persona antes de presentar: la planilla anota que la RE no permite sustituir al facilitador autorizado (VI.2) y que hay que confirmar si se pueden declarar varios. | 2.6 y 20, pp. 6 y 21 |
| O-15 | Media | Con qué acceso se mira el aula | La guía ubica la revisión de la plataforma dentro de la evaluación técnica y como algo posterior a lo declarado, pero no dice con qué acceso ni si el aula debe estar completa al presentar. Además, la lista de lo verificable es abierta. | Tener el aula completa y una cuenta para el revisor antes de presentar. La planilla anota que la RE exige mantener el acceso operativo (III.2). | 5.1, 18 y 19, pp. 9, 19 y 20 |
| O-16 | Baja | Existencia o descripción | En el índice, la sección 2.3 habla de la existencia de un proceso de aprendizaje; en el cuerpo, de su descripción y de que sea estructurado. | Tomar la lectura exigente: tiene que existir, ser estructurado y estar descrito en la solicitud. | 2.3, pp. 1 y 4 |
| O-17 | Baja | Nombre de la modalidad | La guía dice e-learning asincrónica; la planilla anota «A distancia o e-learning – asincrónica» según la resolución. | Usar el nombre exacto del formulario del sistema. | 3.4, p. 7 |
| O-18 | Baja | Erratas | Hay detalles de edición sin efecto en los requisitos: una lista que termina en coma (p. 6), el primer elemento de una lista convertido en título y sin frase que la presente (p. 10), una palabra sin tilde (p. 13) y títulos que varían entre índice y cuerpo (5.1 y 8). | Ninguna. Se dejan anotados para que nadie los lea como exigencias. | pp. 1, 6, 9, 10, 11 y 13 |

## Cruce con la RE 2.484

Armado con la hoja «Cumplimiento RE 2484» de la planilla, que resume la resolución.

| Guía | RE 2.484 | Fila de la hoja | Qué agrega la guía |
| --- | --- | --- | --- |
| 2.1 | IV.2.1 a) | 1 | Dice qué debe contener «Características de los participantes» y que la competencia exprese una acción en el trabajo |
| 2.2 | IV.2.1 b) | 2 | Aclara que lo lúdico como recurso no vuelve inadmisible un curso |
| 2.3 | IV.2.1 c) | 3 | Pide intervención formativa además de evaluación |
| 2.4 | IV.2.1 d) | 4 | Distingue aplicar de identificar |
| 2.5 | IV.2.1 e) y II.2 | 5 | Separa el mínimo de 8 h (admisibilidad) de la proporcionalidad (evaluación técnica) |
| 2.6 | IV.2.1 f) y II.1.b.2 | 6 | Antecedentes en el tema y con adultos; función con acción, aprendizaje, canal y momento |
| 2.7 | IV.2.1 g) | 7 | La disponibilidad de un canal no cuenta |
| 2.8 | IV.2.1 h) | 8 | Lista lo que no es evaluación de aprendizajes |
| 2 (cierre) | IV.2.1 (cierre) | 9 | Nada nuevo: confirma la inadmisibilidad |
| 3.1 | IV.2.2 a) | 10 | Pide además que la información sea específica |
| 3.2 | IV.2.2 b) | 11 | Aclara que aquí no se juzga si es óptimo |
| 3.3 | IV.2.2 c) | 12 | Ejemplo de desglose por aprendizaje esperado |
| 3.4 | IV.2.2 d) y II.1.b.2 | 13 | La modalidad debe calzar con la descripción del curso |
| 3.5 | IV.2.2 e) | 14 | Ejemplo con el peso de una evaluación |
| 5 a 9 | IV.3 a) | 15 | Secuencia completa, pregunta por nivel, estructura de la competencia, reglas para aprendizajes y contenidos |
| 10 | IV.3 b) | 16 | Cinco elementos para describir una actividad |
| 11 | IV.3 c) | 17 | Qué evitar y cuándo se observa |
| 12 | IV.3 d) y II.1.b.2 | 18 | No exige un título: mira la idoneidad para la función |
| 13 | IV.3 e) | 19 | Suma el foro a los medios insuficientes y da la fórmula de cinco elementos |
| 14 a 16 | IV.3 f) | 20 | Cadena de seis eslabones por aprendizaje y límite a la selección múltiple conceptual |
| 17 | IV.3 g) | 21 | Pregunta clave y ejemplo con software |
| 18 y 19 | III.2 | 22 y 23 | Lista de lo verificable y diferencia entre falta de información y verificación pendiente |
| 20 | IV.3.1 | 24 | Qué se puede observar y qué no |
