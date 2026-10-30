# Quiz M2-AE2 · Prompting avanzado para textos

**Misión:** elegir la técnica que ataca lo que falla y convertir tus prompts en plantillas probadas
**Cuándo:** al terminar el tema «Prompting avanzado para textos», antes de pasar a presentaciones con IA.
**Insignia:** Laboratorio de prompts · **Siguiente parada:** tema «Presentaciones con IA»
**Estilo:** acento #a78bfa · acento2 #34d399 · fondo circuito · lema Probar, comparar y guardar lo que funciona
**Ilustración:** flujo | Tu prompt (chat) · El laboratorio (engranaje) · Tu plantilla (doc)

1. *(S1 · C1 · P11)* La respuesta que Gemini redacta para un cliente incluye un plazo de entrega que no estaba en los datos. ¿Qué técnica conviene probar primero?
   - a) Agregar diez ejemplos de respuestas bien escritas
   - **b) La restricción «usa solo los datos entregados» y la regla de [FALTA]**
   - c) Sumar ejemplos, restricciones y una cadena a la vez, por si acaso
   *Retroalimentación:* Cuando aparecen datos que no diste, la técnica que ataca el problema es una restricción de contenido con la regla de [FALTA]. Sumar técnicas que no resuelven el problema solo alarga el prompt.

2. *(S1 · C1 · P09)* Andrés quiere una minuta revisada a partir de una transcripción larga. Ordena los eslabones de su cadena: (1) revisar contra criterios y corregir; (2) redactar con la lista de hechos; (3) extraer solo los hechos.
   - **a) 3 → 2 → 1**
   - b) 2 → 3 → 1
   - c) 2 → 1 → 3
   - d) 3 → 1 → 2
   *Retroalimentación:* Primero se extraen los hechos, después se redacta con ellos y al final se revisa contra criterios. Redactar antes de extraer mezcla hechos y redacción, que es justo lo que la cadena separa.

3. *(C1 · A1 · P10)* En el paso 1 de su cadena, Gemini lista «total semana: 36 despachos», pero las notas dicen 38. Andrés aún no pasa al paso 2. ¿Dónde conviene corregir la cifra?
   - a) En el paso 3, porque la revisión comprobará cada cifra
   - b) En ninguno: al redactar, el paso 2 ordena y corrige los datos
   - **c) Ahora, al revisar la lista del paso 1 contra las notas**
   *Retroalimentación:* La ventaja de la cadena es revisar los resultados intermedios. Si la lista pasa con el error, el paso 3 solo comprueba que la cifra esté en la lista, y el 36 llega intacto a un informe que suena convincente.

4. *(S1 · C2 · P06)* Los dos ejemplos de la plantilla de Andrés dicen «llegará el lunes». Ahora la entrada dice miércoles, pero el aviso sale con «lunes». ¿Qué conviene hacer?
   - a) Agregar varios ejemplos más con «lunes» para reforzar el formato
   - **b) Usar ejemplos variados, con días distintos, porque el modelo copió de más**
   - c) Quitar los ejemplos y pedir el aviso sin formato de referencia
   *Retroalimentación:* El modelo copió un detalle de los ejemplos en vez de aplicar el patrón: es sobreajuste. Más ejemplos parecidos lo empeoran; ejemplos pocos y variados lo corrigen.

5. *(H1 · C1 · P12)* Camila completa su plantilla: «RESTRICCIONES: Usa solo los DATOS. Si falta algo, ___.» ¿Qué conviene escribir en el espacio?
   - a) «completa con un dato razonable»
   - **b) «escribe [FALTA]»**
   - c) «omite esa parte del texto»
   *Retroalimentación:* La regla de [FALTA] le da al modelo una salida distinta de inventar y te muestra qué completar. Un «dato razonable» es justamente un dato inventado, y omitir esconde el vacío.

6. *(C2 · H1 · P14)* Andrés probó su plantilla con tres casos simples, todos con los datos completos, y los tres salieron bien. «Ya puede darla por consistente.» ¿Es verdadero o falso?
   - a) Verdadero, porque salió bien en los tres casos que probó
   - b) Verdadero, porque si un prompt funciona una vez ya está listo
   - **c) Falso, porque le faltan un caso con un dato que falta y uno difícil**
   - d) Falso, porque una plantilla nunca da resultados consistentes
   *Retroalimentación:* Con casos fáciles la plantilla siempre sale bien; los problemas aparecen con datos incompletos y situaciones difíciles. Por eso los casos de prueba deben ser variados y repetirse en chats nuevos.

7. *(A1 · C2 · P03)* En su v2, Andrés agregó ejemplos, cambió el rol y sumó un límite de palabras. Los avisos mejoraron. ¿Qué problema tiene esa forma de trabajar?
   - a) Ninguno: lo importante es que la v2 salió mejor
   - **b) No sabrá cuál de los tres cambios produjo la mejora**
   - c) Que debió probar la v2 solo con el caso más fácil
   *Retroalimentación:* Cambiar una sola cosa por versión hace que la comparación sea justa y te dice qué produjo cada mejora. Que mejore no basta: si después algo empeora, no sabrás qué deshacer.

8. *(A2 · H1 · P16)* Una colega de ventas no entiende una sigla interna de la plantilla de Andrés. Él piensa: «da igual, lo importante es que la entienda Gemini». ¿Qué le conviene hacer?
   - **a) Escribirla completa, porque lo que no está en el prompt no existe para el modelo**
   - b) Mantenerla, porque el asistente conoce las siglas de cada empresa
   - c) Mantenerla y agregar más ejemplos con la sigla para que la aprenda
   *Retroalimentación:* Si alguien sin contexto no entiende el prompt, el modelo probablemente tampoco: solo sabe lo que está escrito. Tú llenas los vacíos sin darte cuenta; el asistente, no.
