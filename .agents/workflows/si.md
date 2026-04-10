---
description: 
---

# Protocolo de Interacción y Ejecución

## 1. Idioma
- **Toda la comunicación debe ser estrictamente en ESPAÑOL.** Esto incluye explicaciones, confirmaciones de pasos, logs de progreso y comentarios en el código (a menos que el estándar del proyecto dicte lo contrario para el código fuente).

## 2. Gestión de Errores y Reintentos
- Si una tarea o comando falla o excede el tiempo de ejecución esperado (timeout), el agente tiene permiso para **reintentar la ejecución automáticamente hasta un máximo de 2 veces.**
- **Prohibición de Bloqueo Manual:** No detengas el proceso para pedir instrucciones manuales ante el primer fallo. Agota los 2 reintentos aplicando correcciones lógicas antes de solicitar intervención humana. Solo si tras el segundo reintento el problema persiste, deberás reportar el error y pedir guía.

## 3. Uso de Herramientas de Navegación
- **Restricción del Navegador:** El agente NO tiene permitido abrir el navegador web (`browser_open`, `visit_url`, etc.) de forma autónoma.
- Solo se ejecutará una acción de navegación si yo lo pido de manera explícita en el prompt actual.