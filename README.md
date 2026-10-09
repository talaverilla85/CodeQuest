# CodeQuest · Academia de Creadores

**Versión inicial de prueba (MVP).** Aplicación web educativa, gratuita y adaptable a ordenador, tableta y móvil para aprender pensamiento computacional y programación **Luau para Roblox Studio**.

## Filosofía
> La IA es profesora, no programadora: el alumno escribe el código, aprende a leer errores, prueba hipótesis y construye sus propias mecánicas.

## Incluye
- **Ruta Luau**: 8 talleres progresivos agrupados en 4 unidades (variables, condiciones/tiempo, funciones/eventos y creación original), cada uno con predicción, código propio, comprobación declarada en Roblox Studio y explicación.
- **Revisión de patrones de texto** orientativa por taller. No hay intérprete Luau en la web: las comprobaciones pueden tener falsos positivos y falsos negativos; el código debe probarse en Roblox Studio.
- **Registro de talleres**: borradores, reflexiones, uso de pistas, revisiones solicitadas, progreso por unidad, logros y 40 XP por taller realizado una sola vez.
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
- El «tutor de pistas» actual **no es un chat de IA**: son pistas didácticas predefinidas. Las orientaciones de la aplicación se basan en reglas simples, no en la comprensión real del código.
- Se recomienda que una persona adulta supervise la experiencia, especialmente al utilizar Roblox Studio, herramientas externas o compartir informes.
- El código mostrado es didáctico. El editor/diario **no ejecuta Luau**; las pruebas de programación se hacen en Roblox Studio.
- La autoevaluación y los informes recogen lo que el usuario declara; no verifican automáticamente lo sucedido en Roblox Studio. El Dojo califica únicamente opciones predefinidas y no ejecuta scripts.
- La información almacenada es local. Las copias JSON contienen borradores y observaciones: trátalas como documentos privados de un menor.


## Tutor de práctica simulado (ya disponible)

En cada taller de la **Ruta Luau**, el alumno puede utilizar un tutor de práctica que ofrece hasta **tres preguntas o pistas guiadas** sobre el concepto de la actividad. Es gratuito, funciona en el propio navegador y **no realiza solicitudes a OpenAI**.

- Permite escribir dudas e ir avanzando mediante orientaciones predefinidas.
- **No es un modelo de IA ni comprende las preguntas**: las orientaciones dependen del taller y del turno. No evalúa el código ni conoce la situación real del alumno.
- La conversación simulada no se guarda en las copias de seguridad ni en el progreso del navegador. Se reinicia al actualizar la página o cambiar de taller.
- La conexión con la API real seguirá apagada hasta completar las autorizaciones y controles pendientes: https://github.com/talaverilla85/CodeQuest/issues/1.

## Tutor opcional con OpenAI (piloto, desactivado)

Se ha preparado una función serverless en \`api/tutor.js\` y una interfaz supervisada en \`tutor-client.js\`. Utiliza el modelo **\`gpt-5.6-luna\`** y ofrece una única pista o pregunta socrática por consulta. La API no es un intérprete de Luau; las pruebas de código se realizan en Roblox Studio.

**Por seguridad, el tutor permanece DESACTIVADO.** CodeQuest funciona normalmente sin clave API ni llamadas a OpenAI.

### Requisitos antes de activarlo con menores de 13 años
1. Comprobar que la organización o proyecto de la API ha sido **aprobado y configurado con Zero Data Retention (ZDR)**. No basta con \`store:false\` ni con desactivar el entrenamiento. Documentación oficial: https://developers.openai.com/api/docs/guides/safety-checks/under-18-api-guidance y https://developers.openai.com/api/docs/guides/your-data.
2. Revisar el tratamiento de datos conforme a las normas aplicables, el consentimiento y la supervisión familiar. No solicitar ni compartir información personal.
3. Crear en OpenAI un proyecto API específico para CodeQuest, con clave independiente y **presupuesto / alertas de gasto bajos**. El límite en memoria del prototipo (5 solicitudes/minuto por instancia) NO es un límite global seguro en Vercel: antes de abrirlo al público, instalar un control distribuido y persistente de cuota por adulto/usuario.
4. Incorporar pruebas de seguridad adicionales para el tutor y una puerta de acceso adulto antes de permitir conversaciones de menores. Las instrucciones de un modelo no garantizan que siempre cumpla el enfoque pedagógico.
5. En Vercel, en las variables de entorno del proyecto **CodeQuest** (nunca en GitHub), configurar exclusivamente después de cumplir lo anterior:

| Variable | Valor |
| --- | --- |
| \`OPENAI_API_KEY\` | Clave secreta del proyecto API de CodeQuest |
| \`CODEQUEST_TUTOR_ACCESS_CODE\` | Código secreto largo y aleatorio de mínimo 24 caracteres, distinto de la API key |
| \`CODEQUEST_ZDR_CONFIRMED\` | \`yes\` **solo** con aprobación y configuración real de ZDR verificadas |
| \`CODEQUEST_TUTOR_ENABLED\` | \`true\` cuando esté preparado y revisado |

Tras añadir las variables, desplegar de nuevo el proyecto. El panel de tutor permite a una persona adulta introducir un código temporal y autorizar expresamente cada consulta. No se guarda ese código ni el texto intercambiado en \`localStorage\`.

El endpoint \`GET /api/tutor\` revela únicamente si está activado. \`POST /api/tutor\` exige mismo origen, autorización y formato limitado. Envía exclusivamente el tema de la lección, la pregunta y el borrador de código del taller; no incluye el apodo ni los datos de progreso. Utiliza moderación y \`store:false\`.

### Limitaciones importantes del piloto
- Cualquier clave de acceso introducida en un navegador puede estar expuesta a quien controle ese navegador: no se debe compartir el código con menores ni usarlo como mecanismo de autenticación público definitivo.
- La API y la moderación tienen costes y limitaciones que deben monitorizarse desde el proyecto de OpenAI.
- El tutor puede cometer errores, revelar respuestas de manera involuntaria o no detectar datos personales escritos en comentarios de código. Requiere supervisión familiar, revisión y un despliegue gradual.
- Este código es una preparación para pilotos, **no una plataforma infantil pública lista para producción**.

## Próximas fases propuestas
1. Revisar la experiencia inicial con una familia y ajustar la dificultad y accesibilidad. Evaluar si los 8 talleres son apropiados tras la Misión 0.
2. Añadir lecciones más variadas, rutas adaptativas y explicaciones prácticas de mensajes de error.
3. Diseñar autenticación familiar, persistencia segura, exportación/consentimiento y política de privacidad antes de introducir servidores o cuentas infantiles.
4. Evaluar, con medidas apropiadas para menores, una asistencia de IA **gestionada por adultos**, con pistas graduadas y sin entregar código completo.
5. Valorar integración con proyectos propios de Roblox Studio (sin prometer ejecución de Luau en navegador).

CodeQuest no está afiliado a Roblox Corporation ni Duolingo. Roblox, Roblox Studio y Luau son nombres de sus respectivos titulares.
