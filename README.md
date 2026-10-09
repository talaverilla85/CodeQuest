# CodeQuest · Academia de Creadores

**Versión inicial de prueba (MVP).** Aplicación web educativa, gratuita y adaptable a ordenador, tableta y móvil para aprender pensamiento computacional y programación **Luau para Roblox Studio**.

## Filosofía
> La IA es profesora, no programadora: el alumno escribe el código, aprende a leer errores, prueba hipótesis y construye sus propias mecánicas.

## Incluye
- Perfiles locales con **apodo** (hasta cinco) y progreso independiente.
- **Misión 0**: evaluación inicial en tres retos (puente, variables, depuración).
- **Tres mundos** y nueve lecciones adicionales de variables, condiciones, tiempo, propiedades, eventos, funciones, diseño y depuración.
- Preguntas interactivas con retroalimentación, **tres pistas progresivas**, experimentos que deben realizarse en Roblox Studio y diario de reflexión.
- XP, insignias, bloqueo de mundos según progreso y sección para familias.
- **Exportación** de un informe de progreso en texto plano.
- **Laboratorio de escritura Luau** en nueve misiones: borrador editable, comprobaciones orientativas de patrones y pruebas reales en Roblox Studio (la web no ejecuta Luau).
- **Dojo de depuración**, con cinco escenarios (condiciones, colisiones, funciones, eventos y tiempo), en tres etapas: hipótesis, prueba y corrección. Registra intentos, pistas y una explicación opcional.
- **Sugerencia local del siguiente reto** basada únicamente en misiones finalizadas, intentos y pistas; no usa un modelo de IA ni afirma medir conocimientos automáticamente.
- **Cuaderno de depuración**: qué esperaba, qué ocurrió y qué probó; genera una pregunta para un tutor que solicita pistas y no soluciones completas.
- **Copias de seguridad locales**: exportación e importación JSON supervisada para no perder los avances al limpiar o cambiar de navegador.
- Acceso directo a Roblox Studio y documentación oficial.

## Empezar
Es una web estática, sin dependencias ni instalación. Basta con abrir `index.html` en un navegador o publicarla en Vercel conectando este repositorio. Los ficheros principales son `index.html`, `styles.css` y `app.js`.

## Privacidad y supervisión
- Esta versión **no tiene cuentas**, contraseñas ni perfiles en la nube.
- No recoge correos, apellidos ni edad. Se recomienda usar únicamente apodos.
- El progreso se guarda **solo en localStorage del navegador**, sin sincronización entre dispositivos. Borrar datos del navegador puede borrar el progreso, salvo que se haya exportado y guardado una copia de seguridad JSON. Una importación sustituye todos los perfiles locales existentes. Los archivos de copia incluyen respuestas y borradores: guárdalos de manera privada.
- El «tutor de pistas» actual **no es un chat de IA**: son pistas didácticas predefinidas.
- Se recomienda que una persona adulta supervise la experiencia, especialmente al utilizar Roblox Studio, herramientas externas o compartir informes.
- El código mostrado es didáctico. El editor/diario **no ejecuta Luau**; las pruebas de programación se hacen en Roblox Studio.
- La autoevaluación y los informes recogen lo que el usuario declara; no verifican automáticamente lo sucedido en Roblox Studio. El Dojo califica únicamente opciones predefinidas y no ejecuta scripts.
- La información almacenada es local. Las copias JSON contienen borradores y observaciones: trátalas como documentos privados de un menor.

## Próximas fases propuestas
1. Revisar la experiencia inicial con una familia y ajustar la dificultad y accesibilidad.
2. Añadir lecciones más variadas, rutas adaptativas y explicaciones prácticas de mensajes de error.
3. Diseñar autenticación familiar, persistencia segura, exportación/consentimiento y política de privacidad antes de introducir servidores o cuentas infantiles.
4. Evaluar, con medidas apropiadas para menores, una asistencia de IA **gestionada por adultos**, con pistas graduadas y sin entregar código completo.
5. Valorar integración con proyectos propios de Roblox Studio (sin prometer ejecución de Luau en navegador).

CodeQuest no está afiliado a Roblox Corporation ni Duolingo. Roblox, Roblox Studio y Luau son nombres de sus respectivos titulares.
