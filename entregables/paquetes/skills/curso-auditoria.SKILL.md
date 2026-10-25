---
name: curso-auditoria
description: Audita todo lo producido para el curso «IA generativa para entornos laborales» contra la planilla (10 capas, 83 chequeos), mantiene la correspondencia estructural y de fondo, y republica el artifact de la auditoría. Úsala cuando el usuario pregunte si todo calza con la planilla, qué falta, qué está desactualizado, o después de cualquier cambio en contenido, quiz, casos o Drive.
---

# Auditoría y correspondencia con la planilla

## Las tres capas de control

| Control | Comando o archivo | Qué responde |
|---|---|---|
| Correspondencia estructural | `node scripts/correspondencia.mjs` → `docs/CORRESPONDENCIA.md` | Si cada código, pantalla y recurso de la planilla tiene su pieza |
| Correspondencia de fondo | `docs/CORRESPONDENCIA-FONDO.md`, a mano | Si lo pedido está **trabajado de verdad**: 6 preguntas por AE (códigos, Bloom, técnica, criterios, alcance, quiz), con Sí, Parcial o No |
| Auditoría | `node scripts/auditar.mjs` | Las 10 capas, de C0 (planilla) a C9 (avance frente a los 101 recursos) |

## Correr la auditoría

```bash
node scripts/auditar.mjs            # escribe docs/AUDITORIA.md, entregables/auditoria/auditoria.json y AUDITORIA.html
node scripts/auditar.mjs --consola  # solo el resumen
```

- Solo lee: no corrige ni sube nada.
- **Drive (C8)** se audita desde la foto `data/drive-inventario.json`. Vuelve a tomarla después de cada subida (`curso-drive`);
  si no, C8 marca como error ids que sí existen.
- **Avisos que no son defectos:** derivados anteriores a su fuente (hay que regenerarlos), pendientes de verificación declarados en
  `docs/PENDIENTES-VERIFICACION.md` y la herramienta que hay que probar a mano.
- **Meta:** 0 errores y ningún «Parcial» abierto en la correspondencia de fondo.

## Correspondencia de fondo

- Cuando cierres un Parcial, pasa la celda a «Sí (corregido)».
- Mueve el hallazgo a «Hallazgos corregidos», con la evidencia y la corrección (pantallas y fuentes).
- Actualiza el «Resultado global».
- Si una corrección necesita un dato que no está verificado, **no edites**: deja el Parcial y di qué fuente falta.

## Artifact

- La auditoría se publica en https://claude.ai/artifact/Rhk7wedskD4BGT126ibkKL, a partir del archivo
  `entregables/auditoria/AUDITORIA.html`.
- Si el publish se rechaza por una versión más nueva, lee la copia guardada que te indica. Si solo difiere en la línea de datos
  (el JSON que genera el script), publica otra vez tu archivo. Si alguien editó el resto, fusiona sus cambios.

## Trabajo en paralelo

Otra sesión puede estar editando `scripts/auditar.mjs` o `WORKFLOW.md`. Antes de cambiarlos, revisa la hora de modificación
(`ls -la --time-style=+%H:%M`). No pises cambios ajenos: agrega los tuyos encima.
