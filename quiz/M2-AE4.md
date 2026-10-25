# Quiz M2-AE4 · Planillas de cálculo con IA

**Misión:** leer cada fórmula que propone la IA y comprobarla antes de confiar en su número
**Cuándo:** al terminar el Rise M2-T4 · Planillas de cálculo con IA, antes del Hito 2 del proyecto aplicado.
**Insignia:** Fórmula comprobada · **Siguiente parada:** Hito 2 del proyecto, brief y presentación de 6 láminas
**Estilo:** acento #34d399 · acento2 #ff7a59 · fondo circuito · lema La IA propone, tú compruebas
**Ilustración:** flujo | Tus datos (bd) · La fórmula (numeral) · El resultado (barras)

1. *(S1 · C1 · P06)* En la tabla de práctica, la fila 5 es P04 · Caja mediana · Embalaje · 80 · 800. ¿Qué devuelve =BUSCARV("P04";A2:E7;4;FALSO)?
   - a) 800
   - **b) 80**
   - c) Embalaje
   - d) Caja mediana
   *Retroalimentación:* El índice 4 trae la cuarta columna del intervalo A2:E7, que es Unidades. El precio, 800, está en la columna 5; el índice se cuenta desde la primera columna del intervalo.

2. *(S1 · C1 · P05)* Con la tabla de práctica (Embalaje: cinta 150, caja 80 y film 25 unidades), ¿qué resultado da =SUMAR.SI(C2:C7;"Embalaje";D2:D7)?
   - a) 3, porque cuenta los productos de Embalaje
   - b) 406500, el valor total del stock de Embalaje
   - c) 60, la suma de las unidades de EPP
   - **d) 255, la suma de las unidades de Embalaje**
   *Retroalimentación:* SUMAR.SI revisa la condición en C2:C7 y suma lo que está en D2:D7, las unidades: 150 + 80 + 25 = 255. Para el valor total, el intervalo de suma tendría que ser la columna F.

3. *(C1 · S1 · P04)* En I2 va la suma del valor total de la categoría escrita en H2, y Andrés copiará la fórmula a I3 para la otra categoría. ¿Cuál debe escribir en I2?
   - a) =SUMAR.SI(C2:C7;H2;F2:F7)
   - **b) =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7)**
   - c) =SUMAR.SI($C$2:$C$7;$H$2;$F$2:$F$7)
   *Retroalimentación:* Los rangos de datos no deben moverse al copiar, así que llevan $; la categoría sí debe pasar de H2 a H3. Sin $ en los rangos, I3 mira C3:C8 y deja fuera la fila 2; con $H$2, I3 repite la misma categoría.

4. *(C2 · A1 · P11)* Andrés copió su fórmula de I2 a I3. I2 coincide con su cálculo a mano y no aparece ningún mensaje de error. «Ya puede dar por buena la tabla resumen.» ¿Es verdadero o falso?
   - a) Verdadero, porque si no aparece un mensaje de error la fórmula está bien
   - b) Verdadero, porque I3 tiene la misma fórmula que I2
   - **c) Falso, porque debe revisar también I3: el rango pudo moverse al copiar**
   - d) Falso, porque SUMAR.SI no sirve para sumar por categoría
   *Retroalimentación:* Los errores de referencia aparecen al copiar, y la primera fila puede estar bien. Los errores más peligrosos no muestran aviso: se compara I3 con el cálculo a mano y se lee su fórmula en la barra.

5. *(C2 · S1 · P13)* Gemini propone =BUSCARV(K2;$A$2:$E$7;5) para traer el precio. Con los datos de práctica, el resultado sale correcto. ¿Qué riesgo tiene la fórmula?
   - a) Ninguno: si funciona con los datos de práctica, está bien
   - b) Mostrará #REF!, porque le falta un argumento obligatorio
   - **c) Sin FALSO busca una coincidencia aproximada: con códigos desordenados puede traer el precio de otro producto**
   - d) El índice 5 está fuera del intervalo A2:E7
   *Retroalimentación:* Si se omite el último argumento, BUSCARV supone VERDADERO y busca una coincidencia aproximada. Funciona si la primera columna está ordenada, como en la práctica, pero puede fallar sin avisar con otros datos.

6. *(S2 · H1 · P07)* Andrés necesita sumar el valor total de los EPP. ¿Cuál pedido a Gemini tiene más probabilidades de dar una fórmula que funcione a la primera?
   - **a) «Uso Google Sheets en español, con punto y coma. C: categoría; F: valor total; filas 2 a 7. Suma el valor de EPP»**
   - b) «Dame una fórmula para sumar los EPP, que sea la correcta»
   - c) «Eres experto en planillas. Dame la mejor fórmula para sumar los EPP»
   *Retroalimentación:* La IA no ve tu planilla: necesita el programa, el separador, qué hay en cada columna y desde qué fila. Pedir «la correcta» o sumar un rol no le dice dónde están los datos.

7. *(S3 · A2 · C2 · P16)* Andrés pidió el valor total de los EPP. Gemini le dio =SUMAR.SI(C2:C7;"EPP";D2:D7) y explicó, muy seguro, que «suma el valor total de los EPP». ¿Qué conviene hacer?
   - a) Usarla, porque la explicación es clara y ordenada
   - b) Pedirle a Gemini que confirme la fórmula y usarla si dice que sí
   - **c) Filtrar EPP y sumar a mano los valores totales: deben dar 458720, y la fórmula da 60**
   *Retroalimentación:* Una explicación ordenada no prueba que la fórmula sea correcta: esta suma la columna D, las unidades. Lo que la prueba es que el resultado coincida con un camino distinto que hiciste tú.

8. *(S3 · A1 · P09)* Para comprobar que F2 (=D2*E2) mira las celdas correctas, Andrés cambia por un momento las unidades de D2 de 40 a 41. ¿Qué debería pasar si la fórmula está bien?
   - **a) F2 sube exactamente 3500, el precio unitario de esa fila**
   - b) F2 no cambia, porque la fórmula ya estaba calculada
   - c) F2 sube 1, lo mismo que subieron las unidades
   - d) Aparece un mensaje de error hasta que se copie de nuevo la fórmula
   *Retroalimentación:* Si la fórmula multiplica unidades por precio, una unidad más suma exactamente un precio unitario: 3500. Si F2 no cambia, la fórmula no está mirando esa celda; después se devuelve D2 a 40.
