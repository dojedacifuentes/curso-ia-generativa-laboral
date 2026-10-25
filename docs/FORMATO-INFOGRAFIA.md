# Formato de la infografía del módulo

La planilla pide una infografía por módulo (hoja «Recursos», tipo «Complemento»): R017, R034, R051, R069, R084 y R100. La fuente es
`infografias/M<n>.json`. `node scripts/infografias.mjs M<n>` la valida y escribe `entregables/infografias/M<n>-Infografia.html` y su
`.png` (1080 px de ancho; el alto se calcula solo). La paleta es neutra, con un acento por módulo; la tipografía es IBM Plex Sans y
los íconos son Lucide.

## Campos

```json
{
  "modulo": 1,
  "recurso": "R017",
  "titulo": "Anatomía de un prompt efectivo",
  "bajada": "Una frase (máx. 170 caracteres) que diga para qué sirve.",
  "tipo": "anatomia",
  "bloques": [
    { "icono": "user-check", "titulo": "Rol", "texto": "Máx. 190 caracteres. **negrita** permitida.", "ejemplo": "opcional, corto", "ver": ["M1-AE2 P04"] }
  ],
  "clave": "La idea que hay que llevarse, con **negrita** si hace falta.",
  "pie": "Basado en el contenido de M1-AE2 (pantallas P03-P08)"
}
```

## Tipos

| Tipo | Bloques | Uso | Campos extra |
|---|---|---|---|
| `anatomia` | 4–5 | Las partes de algo, con una franja «parte + parte + parte» | — |
| `pasos` | 3–6 | Flujo o ruta en orden | — |
| `matriz` | exactamente 4 | Matriz 2×2: bloques en orden arriba-izquierda, arriba-derecha, abajo-izquierda, abajo-derecha | `"ejes": {"x": "Impacto", "y": "Riesgo"}` |
| `mapa` | 4–6 | Categorías + semáforo | `"semaforoTitulo"`, `"semaforo": [{"nivel": "verde\|amarillo\|rojo", "titulo", "texto"}]` |
| `ciclo` | 4–5 | Etapas que se repiten | `"centro"`, `"vuelta"` |

## Reglas

- **Contenido:** todo sale del contenido base de los AE del módulo y de lo que la planilla dice de la infografía (título del recurso
  en la hoja «Recursos»).
- **«ver»:** remite a las pantallas donde se desarrolla cada bloque, con el formato «M1-AE2 P04».
- **Datos que cambian:** nada de cifras de planes gratuitos ni nombres de modelos que cambian rápido.
- **Íconos disponibles:** son los archivos de `scripts/lib/iconos-lucide/`; el nombre se escribe sin «.svg».
