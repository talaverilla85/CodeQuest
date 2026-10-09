
/* CodeQuest · Primer prototipo educativo. Sin servicios externos ni cuenta infantil. */
'use strict';
const STORAGE='codequest-v1';
const WORLDS=[
 {id:'inicio',title:'Mundo 1 · La chispa',subtitle:'Descubre cómo piensa un programa',color:'#336474',emoji:'⚡',level:'Aprendiz',lessons:['w1a','w1b','w1c']},
 {id:'constructor',title:'Mundo 2 · Constructor',subtitle:'Da vida a los objetos de Roblox',color:'#594587',emoji:'🏗️',level:'Constructor',lessons:['w2a','w2b','w2c']},
 {id:'inventor',title:'Mundo 3 · Inventor',subtitle:'Diseña tus propias mecánicas',color:'#73503f',emoji:'🚀',level:'Inventor',lessons:['w3a','w3b','w3c']}
];
const MISSIONS=[
 {id:'d1',world:'diagnostico',title:'El puente imposible',sub:'Construye y experimenta',time:8,emoji:'🌉',description:'¿Qué recuerdas de Roblox Studio? Crea cinco plataformas suspendidas, a diferentes alturas, y comprueba si tu personaje puede saltar entre ellas.',concept:'En Roblox Studio, las Parts se pueden mover, escalar y anclar. La propiedad Anchored evita que la física las haga caer.',code:'',question:'¿Qué propiedad evita que una plataforma caiga por la gravedad?',options:['Anchored','Transparency','Color'],answer:0,explanation:'Anchored mantiene la pieza fija en el mundo. No significa que esté oculta.',task:'Abre Roblox Studio, crea las cinco plataformas y pulsa Play. Cambia Anchored en una de ellas para ver qué sucede.',hints:['Busca las propiedades de la pieza seleccionada.','El nombre en inglés significa «anclado».','Activa Anchored para que una plataforma permanezca suspendida.'],reflection:'¿Qué has construido? ¿Qué ocurrió al probarlo?'},
 {id:'d2',world:'diagnostico',title:'El código misterioso',sub:'Descifra las instrucciones',time:8,emoji:'🔎',description:'Un programa usa palabras y símbolos para darle instrucciones al ordenador. No hace falta que sepas escribirlo todavía: intenta comprenderlo.',concept:'Una variable guarda un valor. El signo = asigna un valor; print lo muestra en la salida.',code:'local puntos = 0\npuntos = puntos + 1\nprint(puntos)',question:'¿Qué número muestra este código?',options:['0','1','2'],answer:1,explanation:'Empieza en cero, suma uno y después print muestra 1. Puedes probarlo en un Script.',task:'Explica en voz alta qué crees que sucede en cada línea. Si sabes usar un Script, prueba a ejecutarlo.',hints:['Busca dónde empieza el valor de puntos.','La segunda línea suma una unidad.','El resultado final es 1.'],reflection:'¿Qué línea entendiste mejor? ¿Cuál te resultó más extraña?'},
 {id:'d3',world:'diagnostico',title:'El error oculto',sub:'Investiga como un detective',time:8,emoji:'🛠️',description:'Queremos que una plataforma desaparezca y que el jugador pueda atravesarla. Alguien ha escrito este fragmento, pero olvidó algo.',concept:'Transparency cambia la visibilidad. CanCollide controla si el jugador choca con el objeto.',code:'local plataforma = script.Parent\nplataforma.Transparency = 1\nplataforma.CanCollide = true',question:'La plataforma es invisible pero el personaje sigue chocando. ¿Qué cambiarías?',options:['Transparency a 0','CanCollide a false','El nombre de la variable'],answer:1,explanation:'Aunque una parte sea invisible puede seguir teniendo colisión. Con CanCollide = false deja pasar.',task:'Sin copiar una solución completa, explica la causa del fallo. Si puedes, modifica una propiedad y comprueba el resultado.',hints:['Que no se vea no significa que no exista.','Investiga qué quiere decir collision.','La propiedad CanCollide debe estar en false.'],reflection:'¿Qué intentaste antes de saber la respuesta?'},
 {id:'w1a',world:'inicio',title:'La caja de los puntos',sub:'Variables y números',time:15,emoji:'💎',description:'Vas a crear una variable que guarde los puntos de un jugador.',concept:'local crea una variable local. Las variables guardan datos que pueden cambiar a medida que transcurre el juego.',code:'local puntos = 5\npuntos = puntos + 3\nprint(puntos)',question:'Si el jugador empieza con 5 puntos y gana 3, ¿qué aparece en Output?',options:['53','8','3'],answer:1,explanation:'Se suman los valores numéricos: 5 + 3 = 8.',task:'En Roblox Studio, escribe tú mismo un Script con una variable monedas. Empieza con 10, añade 2 e imprime el resultado. No copies este ejemplo: transfórmalo.',hints:['Crea una variable usando local.','Primero guarda 10 en monedas; después utiliza monedas = monedas + 2.','Para ver su valor usa print(monedas).'],reflection:'¿Para qué podrías utilizar variables en el juego que tienes en mente?'},
 {id:'w1b',world:'inicio',title:'La puerta del sí o no',sub:'Condiciones',time:15,emoji:'🚪',description:'Un videojuego decide qué hacer en función de una condición.',concept:'if comprueba una condición. Si es verdadera, ejecuta el código hasta end.',code:'local llaves = 2\nif llaves >= 2 then\n    print("Puerta abierta")\nend',question:'¿Qué pasa si cambiamos llaves = 2 por llaves = 1?',options:['Muestra puerta abierta','No muestra el mensaje','Da dos llaves nuevas'],answer:1,explanation:'Uno no es mayor ni igual que dos. El bloque del if no se ejecuta.',task:'Crea una condición que abra una puerta solo cuando monedas sea mayor o igual a 5. Prueba valores distintos.',hints:['La comparación es >=.','Escribe if monedas >= 5 then.','Recuerda cerrar el bloque con end.'],reflection:'¿Qué otro requisito pondrías para abrir una puerta especial?'},
 {id:'w1c',world:'inicio',title:'El reloj de las misiones',sub:'Tiempo y secuencias',time:15,emoji:'⏱️',description:'Controla cuándo suceden las cosas dentro de un videojuego.',concept:'task.wait(n) hace que un script espere aproximadamente n segundos antes de continuar.',code:'print("Preparados")\ntask.wait(2)\nprint("¡Ya!")',question:'¿Qué sucede entre los dos mensajes?',options:['Una espera de unos 2 segundos','Se borra el primer mensaje','El juego se cierra'],answer:0,explanation:'task.wait(2) crea una pausa de unos dos segundos.',task:'Crea una cuenta atrás de 3, 2, 1. Escribe los mensajes y añade una espera entre cada uno.',hints:['Primero imprime 3.','Después escribe task.wait(1).','Repite la secuencia con 2, 1 y el mensaje ¡Ya!'],reflection:'¿En qué parte de un videojuego sería útil una cuenta atrás?'},
 {id:'w2a',world:'constructor',title:'Plataformas invisibles',sub:'Propiedades de objetos',time:17,emoji:'👻',description:'Los objetos tienen propiedades que cambian su comportamiento.',concept:'Transparency usa valores de 0 (visible) a 1 (invisible); CanCollide activa o desactiva las colisiones.',code:'local parte = script.Parent\nparte.Transparency = 0.5\nparte.CanCollide = false',question:'¿Qué ocurre con la parte?',options:['Es semitransparente y atravesable','Es completamente visible y sólida','Desaparece del proyecto'],answer:0,explanation:'Transparency = 0.5 la hace semitransparente y CanCollide = false quita la colisión.',task:'Construye un camino secreto con tres plataformas. Haz que una sea semitransparente y que otra se pueda atravesar.',hints:['Empieza con una Part anclada.','Prueba valores como 0, 0.5 y 1 en Transparency.','CanCollide = false permite pasar a través.'],reflection:'¿Cómo avisarías al jugador de que existe un camino secreto?'},
 {id:'w2b',world:'constructor',title:'La plataforma sensible',sub:'Eventos',time:18,emoji:'🦶',description:'Un evento permite responder cuando algo sucede en el mundo del juego.',concept:'Touched se dispara cuando otra pieza entra en contacto con una Part. Connect vincula el evento con una función.',code:'local plataforma = script.Parent\nplataforma.Touched:Connect(function(otraParte)\n    print("¡Algo tocó la plataforma!")\nend)',question:'¿Cuándo se intenta imprimir el mensaje?',options:['Cuando algo toca la plataforma','Solo al iniciar Roblox Studio','Cada veinte segundos'],answer:0,explanation:'Touched ejecuta la función cuando detecta contacto. Ojo: también pueden tocarla objetos distintos del jugador.',task:'Haz que una plataforma anuncie en Output cuándo algo la toca. Intenta explicar para qué sirve cada línea.',hints:['Inserta un Script dentro de una Part.','Necesitas el evento Touched.','La estructura es plataforma.Touched:Connect(function(...) ... end).'],reflection:'¿Qué otra acción te gustaría activar con un contacto?'},
 {id:'w2c',world:'constructor',title:'El botón secreto',sub:'Funciones',time:18,emoji:'🔘',description:'Reutiliza instrucciones agrupándolas en una función.',concept:'Una función es un conjunto de instrucciones con nombre. Se ejecuta cuando la llamas.',code:'local function saludar()\n    print("¡Bienvenido!")\nend\n\nsaludar()',question:'¿Cuántas veces aparece el saludo?',options:['Ninguna','Una','Tres'],answer:1,explanation:'La función se define y luego se llama una sola vez.',task:'Escribe una función anunciarVictoria() y haz que muestre un mensaje. Después llámala dos veces.',hints:['Define una función con local function nombre().','Escribe el print dentro y termina con end.','Llama a la función escribiendo su nombre y ().'],reflection:'¿Qué instrucciones repetirías muchas veces en tu juego?'},
 {id:'w3a',world:'inventor',title:'Monedas que cuentan',sub:'Eventos + variables',time:20,emoji:'🪙',description:'Combina lo que sabes para idear una mecánica de recolección.',concept:'Los juegos reales mezclan variables, condiciones y eventos. Antes de escribir código conviene describir paso a paso qué debería ocurrir.',code:'-- Diseño en lenguaje natural:\n-- 1. Detectar quién tocó la moneda\n-- 2. Evitar contarla dos veces\n-- 3. Sumar una moneda\n-- 4. Ocultar o retirar la moneda',question:'¿Por qué necesitamos evitar que una moneda se cuente dos veces?',options:['Para que no se sumen puntos extra al tocarla varias veces','Para que sea más brillante','Porque Luau no permite sumar'],answer:0,explanation:'Touched puede activarse varias veces. Controlar el estado de la moneda evita sumar puntos indebidamente.',task:'Diseña sobre papel o en un documento el comportamiento de una moneda. Divide el problema en cuatro instrucciones y prueba una parte en Studio.',hints:['Primero detecta el contacto.','Piensa en una variable como recogida = false.','Cuando ya se recogió, ignora nuevos contactos.'],reflection:'¿Qué fue más difícil: imaginar la mecánica o dividirla en pasos?'},
 {id:'w3b',world:'inventor',title:'Cazador de errores',sub:'Depuración',time:20,emoji:'🐛',description:'Aprende a encontrar la causa de un fallo sin pedir a la IA que reescriba tu código.',concept:'Depurar implica observar el comportamiento, leer Output, formular una hipótesis, cambiar una cosa y probar otra vez.',code:'local monedas = 4\nif monedas > 5 then\n    print("Premio desbloqueado")\nend',question:'Esperabas un premio con 5 monedas. ¿Cuál es el problema?',options:['Debería ser >= 5','Falta cambiar print por wait','La variable no puede ser local'],answer:0,explanation:'Con > 5 se necesitan al menos 6 monedas. Para incluir el 5 se usa >= 5. Además, el valor de prueba actual es 4.',task:'Haz que el programa muestre el premio al llegar exactamente a 5 monedas. Cambia una cosa cada vez y comprueba Output.',hints:['Prueba el valor 5 y observa qué sucede.','Compara > y >=.','El símbolo >= significa mayor o igual.'],reflection:'¿Qué hipótesis probaste antes de corregirlo?'},
 {id:'w3c',world:'inventor',title:'Tu primera creación',sub:'Diseño de videojuegos',time:25,emoji:'🏆',description:'Prepara una pequeña mecánica original y pruébala en Roblox Studio.',concept:'Un prototipo es una versión sencilla para comprobar si una idea funciona. No necesita tener muchos niveles ni gráficos perfectos.',code:'-- Mi idea:\n-- Objetivo del jugador:\n-- Acción principal:\n-- ¿Cómo se gana?:\n-- ¿Qué probaré primero?:',question:'¿Cuál es la mejor primera versión de una idea grande?',options:['Una mecánica pequeña y comprobable','Un juego enorme sin pruebas','Copiar entero otro videojuego'],answer:0,explanation:'Primero se construye algo pequeño que puedas probar, comprender y mejorar.',task:'Elige una idea (un portal, un coleccionable o una plataforma especial). Describe el objetivo, constrúyela en Studio y pide a otra persona que la pruebe.',hints:['Elige UNA sola mecánica.','Divídela en objetos, reglas y pruebas.','Prueba primero que el comportamiento funciona; después mejora los gráficos.'],reflection:'¿Qué cambiarías después de ver a alguien probar tu juego?'}
];
const M_BY_ID=Object.fromEntries(MISSIONS.map(m=>[m.id,m]));


/* RUTA LUAU: talleres abiertos, evidencia observable y comprobaciones no ejecutables. */
function courseEntry(p,id){
 p.course ||= {};
 if(!p.course[id])p.course[id]={predict:'',code:'',reflection:'',tested:false,reviewAttempts:0,hints:0,completed:false,date:'',xp:0,lastReview:null};
 return p.course[id];
}
function courseCompleted(p,id){return !!(p.course&&p.course[id]&&p.course[id].completed)}
function courseCount(p,ids){return ids.filter(x=>courseCompleted(p,x)).length}
function courseUnlocked(p,id){const idx=CURRICULUM_LESSONS.findIndex(l=>l.id===id);return idx===0||(idx>0&&courseCompleted(p,CURRICULUM_LESSONS[idx-1].id))}
function courseCheck(p,id){
 const m=CURRICULUM_BY_ID[id],e=courseEntry(p,id);if(!m)return null;
 const clean=e.code.split('\n').filter(line=>!(/^\s*--/.test(line))).join('\n');
 return m.rules.map(r=>{const reg=new RegExp(r.source,r.flags||'i');return {title:r.title,met:(clean.match(reg)||[]).length>=(r.minMatches||1)}});
}
function courseOverview(p){
 const completed=courseCount(p,CURRICULUM_LESSONS.map(x=>x.id));
 return '<div class="section-top"><div><span class="eyebrow">CURRÍCULO PRÁCTICO · LUAU</span><h2>Tu ruta para crear videojuegos 💻</h2><p>Primero piensa, después escribe, prueba y explica. Avanza a tu ritmo.</p></div></div>'+
 '<div class="level-banner"><div><span class="eyebrow">PRÁCTICA GUIADA</span><strong>'+completed+' de 8 talleres realizados</strong><p>Esta ruta registra actividades realizadas, no certifica conocimientos ni comprueba los juegos de Roblox Studio.</p></div><span style="font-size:42px">🎓</span></div>'+
 '<div class="card" style="margin-bottom:20px"><h3>🧠 Cómo se aprende aquí</h3><p class="view-lead">Cada taller tiene cuatro momentos: <b>predice</b> qué ocurrirá, <b>escribe</b> tú el código, <b>comprueba</b> cómo funciona en Roblox Studio y <b>explica</b> lo que aprendiste. Puedes pedir pistas, pero no recibirás el programa resuelto.</p><p class="subtle">Para utilizar Roblox Studio necesitarás un ordenador Windows o Mac. En el móvil puedes leer las instrucciones y preparar tus ideas.</p></div>'+
 CURRICULUM_UNITS.map(unit=>'<section class="course-unit"><div class="course-unit-head"><div><span class="eyebrow">'+esc(unit.emoji+' '+unit.title)+'</span><h3>'+esc(unit.sub)+'</h3></div><span class="chip">'+courseCount(p,unit.lessons)+' / '+unit.lessons.length+'</span></div><div class="course-grid">'+unit.lessons.map(id=>{const l=CURRICULUM_BY_ID[id],e=(p.course||{})[id],done=courseCompleted(p,id),unlocked=courseUnlocked(p,id);return '<article class="lesson-tile '+(done?'completed':!unlocked?'locked':'')+'"><span class="lesson-num">'+l.time+' MIN · '+(done?'FINALIZADO':unlocked?'DISPONIBLE':'PENDIENTE')+'</span><span class="lesson-status">'+(done?'✅':unlocked?'🧪':'🔒')+'</span><h3>'+esc(l.emoji+' '+l.title)+'</h3><p>'+esc(l.objective)+'</p>'+uiBtn(done?'Repasar taller →':unlocked?'Entrar al taller →':'Completa el anterior','course-open',id,'btn-quiet btn-sm',!unlocked)+'</article>'}).join('')+'</div></section>').join('')+
 '<div class="parent-notice">🎯 Una actividad marcada como realizada no equivale a dominarla. Puedes volver a experimentar, revisar los resultados y pedir nuevas pruebas.</div>';
}
function courseWorkshop(p,m){
 if(!m)return courseOverview(p);
 if(!courseUnlocked(p,m.id))return '<div class="empty"><h2>🔒 Antes viene otro taller</h2><p>Completa el ejercicio anterior y regresa a esta unidad.</p>'+uiBtn('Volver a la ruta','nav','course','btn-primary')+'</div>';
 const e=courseEntry(p,m.id),n=CURRICULUM_LESSONS.findIndex(x=>x.id===m.id),review=e.lastReview,ready=e.predict.trim().length>=10&&e.code.trim().length>=12&&e.reflection.trim().length>=10&&e.tested&&e.reviewAttempts>=1;
 return '<button class="back-link" data-action="nav" data-id="course">← Volver a mi ruta</button>'+
 '<div class="mission-layout"><section class="card mission-card"><span class="eyebrow">TALLER '+(n+1)+' / '+CURRICULUM_LESSONS.length+' · '+m.time+' MIN</span><h1>'+m.emoji+' '+esc(m.title)+'</h1><p class="mission-description">'+esc(m.objective)+'</p>'+
 '<div class="task-panel"><span class="eyebrow">01 · PREDICE</span><h3>¿Qué crees que ocurrirá?</h3><pre class="codeblock"><code>'+esc(m.snippet)+'</code></pre><p>'+esc(m.predict)+'</p><label class="note-label" for="course-predict">Mi predicción (con mis palabras)</label><textarea id="course-predict" data-course-input="predict" data-course-id="'+m.id+'" class="textarea" placeholder="No importa equivocarte: escribe qué piensas...">'+esc(e.predict)+'</textarea></div>'+
 '<div class="task-panel"><span class="eyebrow">02 · ESCRIBE</span><h3>⌨️ Es tu turno</h3><p>'+esc(m.task)+'</p><label class="note-label" for="course-code">Mi código Luau</label><textarea id="course-code" class="textarea code-editor" data-course-input="code" data-course-id="'+m.id+'" spellcheck="false" placeholder="-- Escribe el código por ti mismo aquí...">'+esc(e.code)+'</textarea><div class="button-row">'+uiBtn('🔎 Revisar elementos escritos','course-review',m.id,'btn-quiet btn-sm')+'</div>'+
 (review?'<div class="feedback" role="status"><b>Comprobación orientativa · revisión '+e.reviewAttempts+'</b><p class="subtle">Esta revisión busca fragmentos de texto; no ejecuta Luau, no comprueba la lógica completa y puede equivocarse.</p>'+
 (review.length?'<ul>'+review.map(r=>'<li>'+(r.met?'✅ ':'⬜ ')+esc(r.title)+'</li>').join('')+'</ul>':'<p>Esta actividad es libre: no hay un patrón único. Utiliza Roblox Studio para comprobar tu idea.</p>')+'</div>':'')+
 '</div>'+
 '<div class="task-panel"><span class="eyebrow">03 · PRUEBA EN ROBLOX STUDIO</span><h3>▶ Comprueba el comportamiento</h3><p>Abre Roblox Studio en un ordenador, escribe o pega tu propia versión y observa <b>Output</b> o el comportamiento de los objetos.</p><label class="check-workshop"><input type="checkbox" data-course-test="'+m.id+'" '+(e.tested?'checked':'')+'><span>He intentado comprobar mi código en Roblox Studio</span></label><p class="subtle">La aplicación no puede comprobar por sí sola que lo hayas probado ni si funcionó.</p></div>'+
 '<div class="task-panel"><span class="eyebrow">04 · EXPLICA</span><h3>¿Qué aprendiste?</h3><p>'+esc(m.reflection)+'</p><label class="note-label" for="course-reflect">Mi explicación</label><textarea id="course-reflect" data-course-input="reflection" data-course-id="'+m.id+'" class="textarea" placeholder="Cuenta qué viste, qué cambiaste y por qué...">'+esc(e.reflection)+'</textarea></div>'+
 '<div class="task-panel"><span class="eyebrow">FINAL DEL TALLER</span><h3>🏅 Registra lo que has intentado</h3><p>'+ (e.completed?'Taller ya registrado. Puedes seguir repasando tu explicación y el código.':'Cuando hayas escrito tu predicción, revisado el código, hecho una prueba en Studio y explicado lo ocurrido, podrás registrar el taller.') +'</p>'+
 (e.completed?'<div class="feedback">✅ Realizado · '+e.xp+' XP. ¡Sigue investigando!</div>':uiBtn('Registrar mi práctica · +40 XP','course-finish',m.id,'btn-primary',false))+
 '<p class="subtle">'+(e.completed?'Tu progreso se ha guardado.':'Requisito: predicción, borrador, al menos una revisión, prueba declarada y explicación.')+'</p></div>'+
 '</section><aside class="sticky-panel"><div class="helper-panel"><h3>💡 Tu tutor de pistas</h3><p>Primero piensa por tu cuenta. Abre una pista si te atascas.</p><div class="chip">'+e.hints+' de 3 pistas</div><div class="hint-box"><p>'+(e.hints?esc(m.hints[e.hints-1]):'Todavía no has pedido ninguna pista.')+'</p>'+uiBtn(e.hints>=3?'Pistas agotadas':'Pedir una pista →','course-hint',m.id,'btn-quiet btn-sm',e.hints>=3)+'</div></div><div class="helper-panel"><h3>📌 Mis pasos</h3>'+
 '<p>'+(e.predict.trim().length>=10?'✅':'⬜')+' Predicción</p><p>'+(e.code.trim().length>=12?'✅':'⬜')+' Borrador de código</p><p>'+(e.reviewAttempts>0?'✅':'⬜')+' Revisión solicitada</p><p>'+(e.tested?'✅':'⬜')+' Prueba declarada</p><p>'+(e.reflection.trim().length>=10?'✅':'⬜')+' Explicación</p><p class="subtle">'+(ready?'Ya tienes todos los pasos preparados.':'Puedes hacerlo en varias sesiones. Se guardará el borrador.')+'</p></div></aside></div>';
}
function courseFinish(p,id){
 const m=CURRICULUM_BY_ID[id];if(!m||!courseUnlocked(p,id))return {ok:false,message:'Este taller aún no está disponible.'};
 const e=courseEntry(p,id);if(e.completed)return {ok:false,message:'Esta práctica ya está registrada.'};
 const steps=[];
 if(e.predict.trim().length<10)steps.push('escribe tu predicción');
 if(e.code.trim().length<12)steps.push('escribe tu código');
 if(e.reviewAttempts<1)steps.push('revisa el borrador');
 if(!e.tested)steps.push('declara una prueba en Roblox Studio');
 if(e.reflection.trim().length<10)steps.push('explica qué ocurrió');
 if(steps.length)return {ok:false,message:'Antes de terminar, falta: '+steps.join(', ')+'.'};
 e.completed=true;e.date=new Date().toISOString();e.xp=40;p.xp+=40;persist();return {ok:true,message:'🏆 ¡Práctica registrada! Ganaste 40 XP. Recuerda: aún puedes mejorar tu código.'};
}
function courseBackup(source){
 if(!source||typeof source!=='object'||Array.isArray(source))return {};
 const result={};function cleanStr(v,max){return typeof v==='string'?v.slice(0,max):''}
 for(const l of CURRICULUM_LESSONS){const x=source[l.id];if(!x||typeof x!=='object'||Array.isArray(x))continue;
  const predict=cleanStr(x.predict,1300),code=cleanStr(x.code,6000),reflection=cleanStr(x.reflection,1300);
  const reviewAttempts=Number.isInteger(x.reviewAttempts)?Math.max(0,Math.min(999,x.reviewAttempts)):0;
  const hints=Number.isInteger(x.hints)?Math.max(0,Math.min(3,x.hints)):0;
  const tested=x.tested===true;
  const completed=x.completed===true&&predict.trim().length>=10&&code.trim().length>=12&&reflection.trim().length>=10&&tested&&reviewAttempts>=1;
  result[l.id]={predict,code,reflection,reviewAttempts,hints,tested,completed,date:completed&&!Number.isNaN(Date.parse(x.date))?x.date:'',xp:completed?40:0,lastReview:null};
 }
 return result;
}

/* Mini-laboratorio: revisión orientativa mediante patrones, sin ejecutar Luau. */

/* DOJO DE DEPURACIÓN · razonamiento guiado, sin ejecutar código ni usar IA externa. */
const DOJO_CASES=[
 {id:'puerta',topic:'Condiciones',emoji:'🚪',level:'Inicial',title:'La puerta que no se abre',minutes:7,
  code:'local monedas = 5\nif monedas > 5 then\n    print("¡Puerta abierta!")\nend',
  symptom:'Tienes cinco monedas, pero el mensaje «¡Puerta abierta!» no aparece.',
  steps:[
   {title:'Formular una hipótesis',question:'¿Qué puede estar pasando?',options:['El número 5 no cumple la comparación > 5','print siempre necesita dos argumentos','Las variables locales no guardan números'],correct:0,hint:'Compara «mayor que» con «mayor o igual que».',why:'5 > 5 es falso. Sería verdadero a partir de 6.'},
   {title:'Elegir una prueba',question:'¿Qué probarías primero para comprobar esa hipótesis?',options:['Cambiar el color de la puerta','Probar con 6 monedas y mirar Output','Borrar el script y comenzar de cero'],correct:1,hint:'Cambia una sola cosa para saber cuál es la causa.',why:'Si con 6 funciona, sabemos que el problema está en el límite de la condición.'},
   {title:'Proponer una corrección',question:'Si quieres que funcione con 5 monedas, ¿qué cambias?',options:['Usar monedas <= 5','Usar monedas >= 5','Usar monedas = 5 en el if'],correct:1,hint:'Necesitas incluir el valor exacto 5 en la comparación.',why:'>= incluye el 5. Una condición usa comparaciones; no se debe confundir asignación con comparación.'}
  ]},
 {id:'pared',topic:'Propiedades',emoji:'👻',level:'Inicial',title:'La pared invisible',minutes:7,
  code:'local pared = script.Parent\npared.Transparency = 1\npared.CanCollide = true',
  symptom:'La pared se ha vuelto invisible, pero el personaje no consigue atravesarla.',
  steps:[
   {title:'Formular una hipótesis',question:'¿Por qué sigue bloqueando al personaje?',options:['Transparency no cambia las colisiones','Las paredes invisibles siempre se borran','La variable debería llamarse jugador'],correct:0,hint:'Visualmente invisible y físicamente atravesable no significan lo mismo.',why:'Transparency controla cómo se ve la pieza; CanCollide controla si colisiona.'},
   {title:'Elegir una prueba',question:'¿Qué comprobarías en Roblox Studio?',options:['El nombre del proyecto','El valor de CanCollide en la pared','El número de ventanas abiertas'],correct:1,hint:'Busca la propiedad responsable de los choques.',why:'Si CanCollide está en true, la pieza continúa teniendo colisión.'},
   {title:'Proponer una corrección',question:'¿Qué línea debe modificarse?',options:['pared.Transparency = 5','pared.CanCollide = false','pared.CanCollide = 1'],correct:1,hint:'La colisión debe desactivarse, no solo la visibilidad.',why:'Con CanCollide = false, la pared deja de bloquear al personaje.'}
  ]},
 {id:'funcion',topic:'Funciones',emoji:'🔔',level:'Medio',title:'La alarma silenciosa',minutes:8,
  code:'local function anunciar()\n    print("¡Alerta!")\nend',
  symptom:'El script se inicia sin mostrar errores, pero el mensaje «¡Alerta!» nunca aparece.',
  steps:[
   {title:'Formular una hipótesis',question:'¿Qué le falta a este script?',options:['Definir una segunda variable','Llamar a la función anunciar','Sustituir print por Transparency'],correct:1,hint:'Definir una función no significa que se ejecute sola.',why:'Se ha definido anunciar, pero no hay ninguna llamada a anunciar().'},
   {title:'Elegir una prueba',question:'¿Cuál sería la prueba más útil?',options:['Escribir anunciar() al final y revisar Output','Cambiar el nombre del proyecto','Poner un modelo más grande'],correct:0,hint:'Piensa en cómo dar la orden de ejecutar la función.',why:'La llamada anunciar() ejecuta las instrucciones dentro de la función.'},
   {title:'Proponer una corrección',question:'¿Qué añadirías al final del código?',options:['anunciar()','function = true','local anunciar = 0'],correct:0,hint:'El nombre de la función seguido de paréntesis hace la llamada.',why:'anunciar() es una llamada a la función que ya definimos.'}
  ]},
 {id:'contacto',topic:'Eventos',emoji:'🦶',level:'Medio',title:'La plataforma que no responde',minutes:9,
  code:'local plataforma = script.Parent\nplataforma.Touch:Connect(function()\n    print("¡Me tocaron!")\nend)',
  symptom:'Al comenzar, Output muestra un error parecido a «Touch is not a valid member of Part».',
  steps:[
   {title:'Formular una hipótesis',question:'¿Dónde buscarías el fallo primero?',options:['En la línea con .Touch','En el color de la plataforma','En el tamaño del personaje'],correct:0,hint:'Output está señalando una propiedad o evento cuyo nombre no reconoce.',why:'Touch no es el nombre del evento; Roblox Studio reconoce Touched.'},
   {title:'Elegir una prueba',question:'¿Cuál es la mejor forma de comprobar el nombre del evento?',options:['Cambiar todos los scripts a la vez','Buscar el evento Touched en la documentación o autocompletado','Reiniciar el ordenador'],correct:1,hint:'Antes de cambiar muchas cosas, comprueba la ortografía exacta.',why:'El autocompletado y la documentación ayudan a verificar la API.'},
   {title:'Proponer una corrección',question:'¿Cuál es el nombre correcto?',options:['.Touching','.Touched','.TouchEvented'],correct:1,hint:'El evento de una Part cuando entra en contacto se llama Touched.',why:'plataforma.Touched:Connect(...) escucha contactos con la plataforma.'}
  ]},
 {id:'espera',topic:'Tiempo',emoji:'⏱️',level:'Inicial',title:'La cuenta atrás acelerada',minutes:7,
  code:'print("Espera...")\ntask.wait(0.3)\nprint("¡Ya!")',
  symptom:'Querías esperar unos tres segundos, pero el segundo mensaje aparece casi inmediatamente.',
  steps:[
   {title:'Formular una hipótesis',question:'¿Qué significa el número 0.3 en task.wait?',options:['Treinta segundos','Tres décimas de segundo','Tres minutos'],correct:1,hint:'Los decimales son fracciones de un segundo.',why:'0.3 segundos son tres décimas de segundo, no tres segundos.'},
   {title:'Elegir una prueba',question:'¿Qué comprobarías para confirmar la causa?',options:['Medir la pausa y variar solo el número de task.wait','Cambiar la fuente del editor','Borrar print del código'],correct:0,hint:'Mide el tiempo cambiando solo el valor de espera.',why:'Si cambias únicamente el tiempo, puedes comprobar si era la causa.'},
   {title:'Proponer una corrección',question:'¿Cómo esperarías aproximadamente tres segundos?',options:['task.wait(300)','task.wait(3)','task.wait("rápido")'],correct:1,hint:'La función recibe el tiempo en segundos.',why:'task.wait(3) espera aproximadamente tres segundos antes de continuar.'}
  ]}
];
const DOJO_MAP=Object.fromEntries(DOJO_CASES.map(x=>[x.id,x]));
function dojoRecord(p,id){
 p.dojo ||= {};
 if(!p.dojo[id])p.dojo[id]={stage:0,attempts:[0,0,0],hints:[0,0,0],solved:[false,false,false],finished:false,reflection:''};
 return p.dojo[id];
}
function dojoStats(p){
 const d=p.dojo||{},all=DOJO_CASES.filter(c=>d[c.id]&&d[c.id].finished),wrong=all.reduce((n,c)=>n+(d[c.id].attempts||[]).reduce((z,a)=>z+Math.max(0,a-1),0),0);
 return {finished:all.length,wrong};
}
function learningSuggestion(p){
 const first=MISSIONS.find(m=>m.world==='diagnostico'&&!done(p,m.id));
 if(first)return {title:'Primero, descubramos tu punto de partida',detail:'Completa la evaluación inicial antes de decidir qué conceptos conviene reforzar.',action:'mission',id:first.id,label:'Continuar evaluación'};
 const topicByMission={d1:'pared',d2:'puerta',d3:'pared',w1a:'puerta',w1b:'puerta',w1c:'espera',w2a:'pared',w2b:'contacto',w2c:'funcion',w3a:'contacto',w3b:'puerta',w3c:'funcion'};
 const challenges=MISSIONS.filter(m=>done(p,m.id)).sort((a,b)=>((p.attempts[b.id]||0)+(p.hints[b.id]||0)*2)-((p.attempts[a.id]||0)+(p.hints[a.id]||0)*2));
 const needsReview=challenges.find(m=>((p.attempts[m.id]||0)>1||(p.hints[m.id]||0)>0)&&!((p.dojo||{})[topicByMission[m.id]]||{}).finished);
 if(needsReview)return {title:'Refuerza un concepto con un detective',detail:'Esta recomendación se basa en los intentos y pistas utilizados; no es una evaluación automática del código.',action:'dojo-open',id:topicByMission[needsReview.id],label:'Practicar depuración'};
 const next=MISSIONS.find(m=>m.world!=='diagnostico'&&worldUnlocked(p,m.world)&&!done(p,m.id));
 if(next)return {title:'Construye una habilidad nueva',detail:'Continúa en '+next.title+'. Recuerda escribir tú el código y probarlo en Roblox Studio.',action:'mission',id:next.id,label:'Continuar aprendizaje'};
 const c=DOJO_CASES.find(x=>!((p.dojo||{})[x.id]||{}).finished);
 if(c)return {title:'Practica pensando como programador',detail:'Investiga la causa, diseña una prueba y propone una corrección. Hay cinco casos diferentes.',action:'dojo-open',id:c.id,label:'Abrir detective'};
 return {title:'Ahora, inventa tu próxima mecánica',detail:'Puedes diseñar y probar un prototipo en Roblox Studio. Recuerda explicar qué aprendiste.',action:'nav',id:'map',label:'Volver a los mundos'};
}
function coachBox(p){const r=learningSuggestion(p);return '<section class="card coach-pick"><div><span class="eyebrow">TU SIGUIENTE PASO · ORIENTACIÓN LOCAL</span><h3>🧠 '+esc(r.title)+'</h3><p>'+esc(r.detail)+'</p></div>'+uiBtn(esc(r.label)+' →',r.action,r.id,'btn-quiet btn-sm')+'</section>'}
function dojoList(p){
 const stats=dojoStats(p);
 return '<div class="section-top"><div><span class="eyebrow">APRENDER DE LOS ERRORES</span><h2>Dojo de depuración 🕵️</h2><p>Piensa antes de corregir: hipótesis → prueba → solución. Sin IA externa.</p></div></div>'+
 '<div class="level-banner"><div><span class="eyebrow">INVESTIGACIONES RESUELTAS</span><strong>'+stats.finished+' de '+DOJO_CASES.length+' misterios</strong><p>Puedes repetir los casos para repasar, pero la experiencia solo se concede una vez.</p></div><span style="font-size:48px">🔍</span></div>'+
 '<div class="lessons">'+DOJO_CASES.map((c,i)=>{const r=(p.dojo||{})[c.id],finished=!!(r&&r.finished);return '<article class="lesson-tile '+(finished?'completed':'')+'"><span class="lesson-num">'+esc(c.topic.toUpperCase())+' · '+c.minutes+' MIN</span><span class="lesson-status">'+(finished?'✅':'🔎')+'</span><h3>'+c.emoji+' '+esc(c.title)+'</h3><p>'+esc(c.symptom)+'</p>'+uiBtn(finished?'Repasar caso →':r&&r.stage>0?'Continuar investigación →':'Investigar →','dojo-open',c.id,'btn-quiet btn-sm')+'</article>'}).join('')+'</div>'+
 '<div class="parent-notice" style="margin-top:22px"><b>Regla del detective:</b> nadie tiene que resolver un error a la primera. Cada intento es una oportunidad para formular una hipótesis mejor.</div>';
}
function dojoCaseView(p,c){
 if(!c)return dojoList(p);
 const r=dojoRecord(p,c.id),stage=Math.min(2,Math.max(0,r.stage||0)),s=c.steps[stage],passed=!!r.solved[stage],hintCount=r.hints[stage]||0;
 return '<button class="back-link" data-action="nav" data-id="dojo">← Volver al dojo</button>'+
 '<div class="mission-layout"><section class="card mission-card"><span class="eyebrow">DOJO · '+esc(c.topic.toUpperCase())+' · '+esc(c.level)+' · '+c.minutes+' MIN</span><h1>'+c.emoji+' '+esc(c.title)+'</h1><p class="mission-description">'+esc(c.symptom)+'</p>'+
 '<div class="task-panel"><h3>💻 Código bajo investigación</h3><pre class="codeblock"><code>'+esc(c.code)+'</code></pre><p class="subtle">Este código es un ejemplo didáctico; no se ejecuta en CodeQuest.</p></div>'+
 '<div class="task-panel"><span class="eyebrow">PASO '+(stage+1)+' DE 3</span><h3>'+esc(s.title)+'</h3>'+['🧠 1. Pensar','🔬 2. Experimentar','🛠️ 3. Corregir'].map((t,i)=>'<span class="dojo-step '+(i===stage?'active':'')+'">'+t+(r.solved[i]?' ✓':'')+'</span>').join('')+
 '<div class="question">'+esc(s.question)+'</div><div class="options">'+s.options.map((o,i)=>'<button class="option" type="button" data-action="dojo-answer" data-id="'+c.id+'" data-index="'+i+'" '+(passed||r.finished?'disabled':'')+'><span class="option-index">'+String.fromCharCode(65+i)+'</span>'+esc(o)+'</button>').join('')+'</div>'+
 (passed?'<div class="feedback" role="status"><b>✅ ¡Buena investigación!</b><p>'+esc(s.why)+'</p></div>':r.lastWrong===stage?'<div class="feedback error" role="status"><b>🔎 Esa opción no parece explicar el problema.</b><p>¿Qué dato del código puedes comprobar? Prueba otra hipótesis o pide una pista.</p></div>':'')+
 (!passed?'<div class="hint-box"><h3>💡 Pista '+(hintCount?'desbloqueada':'disponible')+'</h3><p>'+(hintCount?esc(s.hint):'Intenta responder primero. Si te bloqueas, puedes pedir ayuda.')+'</p>'+uiBtn(hintCount?'Pista ya consultada':'Consultar una pista','dojo-hint',c.id,'btn-quiet btn-sm',!!hintCount)+'</div>':'')+
 '<div class="button-row">'+(passed&&!r.finished?(stage<2?uiBtn('Siguiente paso →','dojo-next',c.id):uiBtn('Registrar investigación','dojo-finish',c.id)):'')+'</div></div>'+
 (r.finished?'<div class="feedback"><b>🏅 Misterio resuelto.</b><p>Ahora podrías intentar reproducir el caso en Roblox Studio, observar Output y contar qué ocurrió.</p></div>':'')+
 '<label class="note-label" for="dojo-reflection">Mi explicación (opcional)</label><textarea id="dojo-reflection" class="textarea" data-dojo-note="'+c.id+'" placeholder="¿Qué creías que pasaba? ¿Qué comprobaste?">'+esc(r.reflection||'')+'</textarea>'+
 '</section><aside class="sticky-panel"><div class="helper-panel"><h3>🧩 Método de los tres pasos</h3><p>1. ¿Qué ocurre?<br>2. ¿Cómo lo comprobaría?<br>3. ¿Qué cambio pequeño haría?</p><p>No hace falta que la solución aparezca de golpe.</p></div><div class="helper-panel"><h3>📊 Mis intentos</h3><p>Respuestas dadas: '+r.attempts.reduce((sum,v)=>sum+v,0)+'</p><p>Pistas consultadas: '+r.hints.reduce((sum,v)=>sum+v,0)+'</p><p class="subtle">Estos datos sirven para ayudarte a aprender, no para ponerte una nota.</p></div></aside></div>';
}
function dojoAnswer(p,id,option){
 const c=DOJO_MAP[id];if(!c||!Number.isInteger(option))return false;
 const r=dojoRecord(p,id),st=r.stage;if(r.finished||r.solved[st]||option<0||option>=c.steps[st].options.length)return false;
 r.attempts[st]+=1;
 if(option===c.steps[st].correct){r.solved[st]=true;r.lastWrong=-1}
 else r.lastWrong=st;
 persist();return r.solved[st];
}
function dojoNext(p,id){
 const c=DOJO_MAP[id];if(!c)return;
 const r=dojoRecord(p,id);
 if(r.stage<2&&r.solved[r.stage]){r.stage+=1;r.lastWrong=-1;persist()}
}
function dojoFinish(p,id){
 const c=DOJO_MAP[id];if(!c)return false;
 const r=dojoRecord(p,id);
 if(r.finished||!r.solved.every(Boolean))return false;
 r.finished=true;r.date=new Date().toISOString();
 r.xp=40;p.xp+=r.xp;persist();return true;
}
function dojoBackup(value){
 if(!value||typeof value!=='object'||Array.isArray(value))return {};
 const clean={};
 for(const c of DOJO_CASES){const x=value[c.id];if(!x||typeof x!=='object'||Array.isArray(x))continue;
   const attempts=[0,1,2].map(i=>Number.isInteger(x.attempts?.[i])?Math.max(0,Math.min(999,x.attempts[i])):0);
   const solved=[0,1,2].map(i=>x.solved?.[i]===true);
   const hints=[0,1,2].map(i=>x.hints?.[i]===1?1:0);
   const finished=x.finished===true&&solved.every(Boolean);
   clean[c.id]={stage:finished?2:Math.max(0,Math.min(2,Number.isInteger(x.stage)?x.stage:0)),attempts,hints,solved,finished,reflection:typeof x.reflection==='string'?x.reflection.slice(0,1000):'',lastWrong:-1, ...(finished?{xp:40,date:Number.isNaN(Date.parse(x.date))?new Date().toISOString():x.date}:{})};
 }
 return clean;
}

const CODE_TASKS={
  d2:{label:'Cambia la suma para obtener dos puntos',hint:'Usa puntos = puntos + 2 e imprime el resultado.',checks:[['Actualizas puntos con una suma de 2',/puntos\s*=\s*puntos\s*\+\s*2/],['Muestras el resultado con print',/print\s*\(\s*puntos\s*\)/]]},
  d3:{label:'Haz que una plataforma invisible sea atravesable',hint:'Busca la propiedad que controla las colisiones.',checks:[['Quitas la colisión de la plataforma',/CanCollide\s*=\s*false/]]},
  w1a:{label:'Escribe tu código de monedas desde cero',hint:'Crea monedas con 10; suma 2; muestra monedas.',checks:[['Creas la variable monedas',/local\s+monedas\s*=\s*10/],['Sumas 2 monedas',/monedas\s*=\s*monedas\s*\+\s*2/],['Muestras monedas en Output',/print\s*\(\s*monedas\s*\)/]]},
  w1b:{label:'Crea la condición para abrir la puerta',hint:'Utiliza if monedas >= 5 then y recuerda cerrar el bloque.',checks:[['Compruebas que monedas sea al menos 5',/if\s+monedas\s*>=\s*5\s+then/],['Cierras el bloque condicional',/\bend\b/]]},
  w1c:{label:'Escribe una cuenta atrás de tres a uno',hint:'Utiliza print y task.wait(1) entre cada mensaje.',checks:[['Escribes mensajes para 3, 2 y 1',/print\s*\(\s*["']?3["']?\s*\)[\s\S]*print\s*\(\s*["']?2["']?\s*\)[\s\S]*print\s*\(\s*["']?1["']?\s*\)/],['Incluyes al menos dos esperas',/task\.wait\s*\(\s*1\s*\)[\s\S]*task\.wait\s*\(\s*1\s*\)/]]},
  w2a:{label:'Define una parte semitransparente y atravesable',hint:'Busca Transparency y CanCollide.',checks:[['Defines Transparency a 0.5',/Transparency\s*=\s*0\.5/],['Desactivas CanCollide',/CanCollide\s*=\s*false/]]},
  w2b:{label:'Detecta cuándo tocan una plataforma',hint:'Usa el evento Touched conectado a una función.',checks:[['Escuchas el evento Touched',/\.Touched\s*:\s*Connect\s*\(/],['Defines una función',/function\s*\(/],['Muestras un mensaje',/print\s*\(/]]},
  w2c:{label:'Crea una función de victoria y llámala dos veces',hint:'Necesitas local function anunciarVictoria() y luego dos llamadas.',checks:[['Defines anunciarVictoria',/local\s+function\s+anunciarVictoria\s*\(/],['Muestras un mensaje',/print\s*\(/],['Llamas la función dos veces',/anunciarVictoria\s*\([\s\S]*?\)[\s\S]*anunciarVictoria\s*\([\s\S]*?\)/]]},
  w3b:{label:'Corrige el límite del premio y prueba con cinco monedas',hint:'Cambia > por >= y prueba con exactamente cinco monedas.',checks:[['Pruebas con cinco monedas',/monedas\s*=\s*5/],['La condición incluye el número cinco',/if\s+monedas\s*>=\s*5\s+then/]]}
};
function getChecks(p,id){
 const def=CODE_TASKS[id],code=(p.codeDrafts&&p.codeDrafts[id])||'';
 if(!def)return null;
 const lines=code.split('\n').filter(x=>!(/^\s*--/.test(x))).join('\n');
 return {rules:def.checks.map(([description,re],index)=>({description,met:id==='w2c'&&index===2?(lines.match(/^\s*anunciarVictoria\s*\(\s*\)\s*;?\s*$/gm)||[]).length>=2:re.test(lines)})),hasCode:!!code.trim()};
}
function codeWorkshop(p,m){
 const item=CODE_TASKS[m.id];
 if(!item)return '';
 const review=p.codeReviews[m.id];
 return '<div class="task-panel"><span class="eyebrow">04 · LABORATORIO DE CÓDIGO · OPCIONAL</span>'+
 '<h3>⌨️ Escribe tu propia solución</h3>'+
 '<p>'+esc(item.label)+'. No necesitas copiar el ejemplo. Tu borrador se guarda en este dispositivo.</p>'+
 '<label class="note-label" for="code-draft">Mi código Luau</label>'+
 '<textarea class="textarea code-editor" spellcheck="false" id="code-draft" data-code-draft="'+m.id+'" placeholder="-- Empieza a escribir aquí.&#10;-- Prueba después en Roblox Studio.">'+esc(p.codeDrafts[m.id]||'')+'</textarea>'+
 '<div class="button-row">'+uiBtn('🔎 Revisar mi intento','review-code',m.id,'btn-quiet btn-sm')+'</div>'+
 (review?'<div class="feedback" role="status"><strong>Lista de comprobación (orientativa)</strong><ul>'+review.rules.map(r=>'<li>'+(r.met?'✅ ':'⬜ ')+esc(r.description)+'</li>').join('')+'</ul><p>'+esc(review.message)+'</p></div>':'')+
 '<p class="subtle">Esta revisión solo busca patrones de escritura. <b>No ejecuta Luau, no verifica que el código funcione y no sustituye las pruebas de Roblox Studio.</b></p></div>';
}
function debugWorkshop(p,m){
 if(m.world==='diagnostico')return '';
 const data=p.debugNotes[m.id]||{};
 return '<div class="task-panel"><span class="eyebrow">05 · APRENDE A PEDIR AYUDA</span><h3>🕵️ Tu cuaderno de errores</h3>'+
 '<p>Antes de pedir a la IA que lo arregle, describe el problema con tus palabras. No incluyas información personal.</p>'+
 [['expected','¿Qué querías que ocurriera?'],['actual','¿Qué ocurrió realmente?'],['tried','¿Qué comprobaste o cambiaste?']].map(([field,label],i)=>'<label class="note-label" for="debug-'+i+'">'+esc(label)+'</label><textarea id="debug-'+i+'" class="textarea debug-field" rows="2" data-debug="'+m.id+'" data-field="'+field+'" placeholder="Escribe lo que observaste...">'+esc(data[field]||'')+'</textarea>').join('')+
 '<div class="button-row">'+uiBtn('📋 Preparar mi pregunta para el tutor','copy-question',m.id,'btn-quiet btn-sm')+'</div>'+
 '<p class="subtle">Comparte la pregunta con una persona adulta. La IA debería darte pistas y explicaciones, no sustituir tu trabajo.</p></div>';
}
function questionForTutor(p,m){
 const d=p.debugNotes[m.id]||{};
 return 'Estoy aprendiendo Luau en Roblox Studio. Misión: '+m.title+
 '\nLo que esperaba: '+(d.expected||'(pendiente)')+
 '\nLo que ocurrió: '+(d.actual||'(pendiente)')+
 '\nLo que ya probé: '+(d.tried||'(pendiente)')+
 '\nPor favor, actúa como profesor: hazme preguntas y ofrece UNA pista cada vez. NO escribas la solución ni el código completo. Ayúdame a descubrir el error por mí mismo.';
}

let model=load();
let route={page:'home',world:null,mission:null,modal:false,toast:''};
const app=document.getElementById('app');
function load(){try{const raw=JSON.parse(localStorage.getItem(STORAGE));if(raw&&Array.isArray(raw.profiles))return raw}catch(e){}return{profiles:[],active:null}}
function persist(){try{localStorage.setItem(STORAGE,JSON.stringify(model))}catch(e){console.warn('No se pudo guardar el progreso',e)}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function current(){const p=model.profiles.find(p=>p.id===model.active)||null;if(p){p.codeDrafts ||= {};p.codeReviews ||= {};p.debugNotes ||= {};p.notes ||= {};p.completed ||= {};p.selected ||= {};p.attempts ||= {};p.hints ||= {};p.practiced ||= {};p.dojo ||= {};p.course ||= {}; }return p}
function done(p,id){return !!(p&&p.completed&&p.completed[id])}
function doneN(p,ids){return ids.filter(id=>done(p,id)).length}
function worldUnlocked(p,w){const n=WORLDS.findIndex(x=>x.id===w);return n<=0||doneN(p,WORLDS[n-1].lessons)>=2}
function labelLevel(p){return p.xp>=600?'Maestro de misiones':p.xp>=300?'Inventor en prácticas':p.xp>=120?'Constructor en prácticas':'Explorador'}
function achievement(p){const a=[];if(doneN(p,['d1','d2','d3'])===3)a.push(['🎯','Detective inicial']);if(doneN(p,WORLDS[0].lessons)===3)a.push(['⚡','La chispa']);if(doneN(p,WORLDS[1].lessons)===3)a.push(['🏗️','Constructor']);if(doneN(p,WORLDS[2].lessons)===3)a.push(['🚀','Inventor']);if(Object.keys(p.completed).length>=1)a.push(['🏅','Primer paso']);if(courseCount(p,CURRICULUM_UNITS[0].lessons)===2)a.push(['📘','Primeras líneas Luau']);if(courseCount(p,CURRICULUM_LESSONS.map(l=>l.id))===8)a.push(['🎓','Ruta Luau completada']);return a}
function tileStatus(p,id){return done(p,id)?'✅ Completada':'▶ Empezar misión'}
function nav(id){route.page=id;route.mission=null;route.world=null;route.modal=false;route.toast='';render();window.scrollTo(0,0)}
function uiBtn(label,action,arg,cls,disabled){return '<button type="button" class="btn '+(cls||'btn-primary')+'" data-action="'+action+'"'+(arg?' data-id="'+esc(arg)+'"':'')+(disabled?' disabled':'')+'>'+label+'</button>'}
function progress(n,total){return '<div class="progress-bg" role="progressbar" aria-label="Progreso" aria-valuemin="0" aria-valuemax="'+total+'" aria-valuenow="'+n+'"><div class="progress-fill" style="width:'+(n/total*100||0)+'%"></div></div>'}
function stats(p){return '<div class="stats">'+
 '<div class="stat"><span class="stat-icon">⚡</span><div><div class="stat-label">Experiencia</div><strong>'+p.xp+' XP</strong></div></div>'+
 '<div class="stat"><span class="stat-icon">🎯</span><div><div class="stat-label">Misiones</div><strong>'+Object.keys(p.completed).length+' / 12</strong></div></div>'+
 '<div class="stat"><span class="stat-icon">🏅</span><div><div class="stat-label">Insignias</div><strong>'+achievement(p).length+'</strong></div></div></div>'}
function worldCard(p,w){const n=doneN(p,w.lessons),unlocked=worldUnlocked(p,w);return '<article class="world">'+
 '<div class="world-banner" style="--tone:'+w.color+'"><span class="world-emoji">'+w.emoji+'</span><span class="world-label">'+(unlocked?'MUNDO DESBLOQUEADO':'🔒 POR DESBLOQUEAR')+'</span></div>'+
 '<div class="world-body"><div class="eyebrow">'+w.level+'</div><h3>'+esc(w.title)+'</h3><p>'+esc(w.subtitle)+'</p>'+progress(n,3)+
 '<div class="world-footer"><span>'+n+' de 3 misiones</span>'+uiBtn(unlocked?'Explorar →':'Bloqueado','world',w.id,'btn-quiet btn-sm',!unlocked)+'</div></div></article>'}
function home(p){const d=doneN(p,['d1','d2','d3']);const next=MISSIONS.find(m=>m.world==='diagnostico'&&!done(p,m.id))||MISSIONS.find(m=>m.world!=='diagnostico'&&worldUnlocked(p,m.world)&&!done(p,m.id));return '<section class="hero"><div class="hero-copy"><span class="eyebrow">TU AVENTURA COMIENZA AQUÍ</span><h1>Imagina. Programa.<br><span>Hazlo realidad.</span></h1><p>Aprende a crear videojuegos en Roblox Studio. Aquí escribes tú el código: el tutor te guía con pistas, no hace el trabajo por ti.</p><div class="button-row">'+uiBtn('🚀 '+(next?'Continuar aventura':'Ver mis logros'),'mission',next?next.id:'','btn-primary',!next)+uiBtn('🗺️ Ver mundos','nav','map','btn-secondary')+'</div></div><span class="mascot" aria-hidden="true">👾</span><span class="float-tag">+ CREA TU MUNDO ✨</span></section>'+
 stats(p)+coachBox(p)+'<div class="card assessment"><div><span class="eyebrow">MISIÓN ESPECIAL · 30 MIN</span><h3>🎮 El despertar del programador</h3><p>Una evaluación inicial en forma de aventura: construir un puente, descifrar código y detectar un error. Sin notas ni presión. Puedes hacerla con una persona adulta.</p><div class="button-row">'+uiBtn(d===3?'Revisar evaluación →':d?'Continuar evaluación →':'Comenzar evaluación →','assessment','','btn-secondary')+'</div></div><span class="assessment-badge">🏁</span></div>'+
 '<section class="card course-invite"><div><span class="eyebrow">NUEVO · 8 TALLERES EN 4 UNIDADES</span><h3>📘 Tu ruta de programación Luau</h3><p>Predice, escribe tú el código, compruébalo en Roblox Studio y explica lo que aprendiste. Nada de limitarse a elegir respuestas.</p><div class="course-invite-bar">'+progress(courseCount(p,CURRICULUM_LESSONS.map(l=>l.id)),CURRICULUM_LESSONS.length)+'<span>'+courseCount(p,CURRICULUM_LESSONS.map(l=>l.id))+' / 8</span></div></div>'+uiBtn('Explorar ruta →','nav','course','btn-primary')+'</section>'+
 '<div class="section-top"><div><h2>Elige tu próximo mundo</h2><p>Misiones cortas que van creciendo contigo.</p></div></div><div class="world-list">'+WORLDS.map(w=>worldCard(p,w)).join('')+'</div>'}
function mapView(p){return '<div class="section-top"><div><span class="eyebrow">TU CAMINO</span><h2>Mapa de mundos 🗺️</h2><p>Supera dos misiones de cada mundo para abrir el siguiente.</p></div></div><div class="world-list">'+WORLDS.map(w=>worldCard(p,w)).join('')+'</div><div class="parent-notice" style="margin-top:24px">💡 No hay límite de tiempo ni obligación de jugar todos los días. Los errores también forman parte de aprender.</div>'}
function assessmentView(p){return '<button class="back-link" data-action="nav" data-id="home">← Volver al inicio</button><div class="level-banner"><div><span class="eyebrow">MISIÓN CERO · EVALUACIÓN INICIAL</span><strong>🏁 El despertar del programador</strong><p>Tres retos de unos 8 minutos y una conversación final. No es un examen.</p></div><span style="font-size:43px">🧭</span></div>'+
 '<div class="section-top"><div><h2>Tres desafíos</h2><p>La persona adulta puede observar y anotar lo que sucede.</p></div></div><div class="lessons">'+MISSIONS.filter(m=>m.world==='diagnostico').map((m,i)=>lessonTile(p,m,i,true)).join('')+'</div><div class="parent-notice" style="margin-top:22px"><b>Para las familias:</b> prepara Roblox Studio en un ordenador. No es necesario saber programar. Al acabar, ve a «Zona familias» y copia el informe para compartirlo con tu tutor.</div>'}
function lessonTile(p,m,i,unlocked){const completed=done(p,m.id);return '<article class="lesson-tile '+(completed?'completed ': '')+(!unlocked?'locked':'')+'">'+
 '<span class="lesson-num">MISIÓN '+String(i+1).padStart(2,'0')+' · '+m.time+' MIN</span><span class="lesson-status">'+(completed?'✅':!unlocked?'🔒':'⭐')+'</span><h3>'+esc(m.emoji+' '+m.title)+'</h3><p>'+esc(m.sub)+'</p>'+uiBtn(completed?'Revisar misión →':unlocked?'Abrir misión →':'Bloqueada','mission',m.id,'btn-quiet btn-sm',!unlocked)+'</article>'}
function worldView(p,w){if(!w)return mapView(p);if(!worldUnlocked(p,w.id))return '<div class="empty"><h2>🔒 Este mundo aún está cerrado</h2><p>Supera al menos dos misiones del mundo anterior.</p>'+uiBtn('Volver al mapa','nav','map','btn-primary')+'</div>';return '<button class="back-link" data-action="nav" data-id="map">← Mapa de mundos</button><div class="level-banner"><div><span class="eyebrow">'+w.level.toUpperCase()+'</span><strong>'+w.emoji+' '+esc(w.title)+'</strong><p>'+esc(w.subtitle)+'</p></div><div style="min-width:130px">'+progress(doneN(p,w.lessons),3)+'</div></div><div class="section-top"><div><h2>Misiones disponibles</h2><p>Puedes repetir cualquier actividad para practicar.</p></div></div><div class="lessons">'+w.lessons.map((id,i)=>lessonTile(p,M_BY_ID[id],i,true)).join('')+'</div>'}
function feedback(p,m){const chosen=p.selected[m.id];if(chosen===undefined)return '';const okay=chosen===m.answer;return '<div class="feedback '+(okay?'':'error')+'" role="status"><b>'+(okay?'✅ ¡Bien razonado!':'🔎 Aún no. Investiga un poco más.')+'</b><p style="margin:5px 0 0">'+(okay?esc(m.explanation):'Prueba otra opción o abre una pista. Equivocarse sirve para descubrir qué falta entender.')+'</p></div>'}
function missionView(p,m){if(!m)return home(p);if(m.world!=='diagnostico'&&!worldUnlocked(p,m.world))return mapView(p);const diag=m.world==='diagnostico',selected=p.selected[m.id],correct=selected===m.answer,h=p.hints[m.id]||0,practiced=!!p.practiced[m.id],completed=done(p,m.id);return '<div class="mission-layout"><section class="card mission-card">'+
 '<button class="back-link" data-action="'+(diag?'assessment':'world')+'" data-id="'+(diag?'':m.world)+'">← Volver a las misiones</button><span class="eyebrow">'+(diag?'EVALUACIÓN INICIAL':'APRENDE LUAU · ROBLOX')+' · '+m.time+' MIN</span><h1>'+m.emoji+' '+esc(m.title)+'</h1><p class="mission-description">'+esc(m.description)+'</p>'+
 '<div class="task-panel"><span class="eyebrow">01 · DESCUBRE</span><h3>Lo que necesitas saber</h3><p>'+esc(m.concept)+'</p>'+(m.code?'<pre class="codeblock"><code>'+esc(m.code)+'</code></pre>'+uiBtn('📋 Copiar ejemplo','copy',m.id,'btn-quiet btn-sm'):'')+'</div>'+
 '<div class="task-panel"><span class="eyebrow">02 · PIENSA</span><div class="question">'+esc(m.question)+'</div><div class="options">'+m.options.map((o,i)=>'<button type="button" class="option '+(selected===i?(correct?'selected':'wrong'):'')+'" data-action="choose" data-id="'+m.id+'" data-index="'+i+'"'+(completed?' disabled':'')+'><span class="option-index">'+String.fromCharCode(65+i)+'</span>'+esc(o)+'</button>').join('')+'</div>'+feedback(p,m)+'</div>'+
 '<div class="task-panel"><span class="eyebrow">03 · CONSTRUYE TÚ</span><h3>Reto en Roblox Studio</h3><p>'+esc(m.task)+'</p><label style="display:flex;gap:10px;align-items:center;cursor:pointer;margin-top:12px"><input type="checkbox" data-practiced="'+m.id+'" '+(practiced?'checked':'')+' '+(completed?'disabled':'')+'><span class="subtle" style="color:#deebff">He intentado la parte práctica en Roblox Studio</span></label><label class="note-label" for="note">Tu diario de explorador (opcional)</label><textarea class="textarea" id="note" data-note="'+m.id+'" placeholder="'+esc(m.reflection)+'" '+(completed?'readonly':'')+'>'+esc(p.notes[m.id]||'')+'</textarea></div>'+
 codeWorkshop(p,m)+debugWorkshop(p,m)+
 '<div class="button-row">'+(completed?'<div class="feedback">🏆 ¡Misión registrada! Ganaste '+p.completed[m.id].xp+' XP. Puedes volver a leerla cuando quieras.</div>':uiBtn(diag?'✅ Registrar intento':'🏆 Completar misión','finish',m.id,'btn-primary',!diag&&!correct))+
 (completed?uiBtn('Siguiente desafío →','next',m.id,'btn-secondary'):'')+'</div>'+
 '</section><aside class="sticky-panel"><div class="helper-panel"><h3>🤖 Tu tutor de pistas</h3><p>Antes de pedir una pista, intenta explicarte qué sabes, qué esperabas y qué ha ocurrido.</p><div class="chip">Pistas '+h+' / 3</div><div class="hint-box"><h3>💡 Pista '+(h||'disponible')+'</h3><p>'+(h?esc(m.hints[h-1]):'¿Te has atascado? Puedes desbloquear pistas una a una. No hay penalización.')+'</p>'+uiBtn(h>=3?'Todas las pistas abiertas':'Ver '+(h?'otra':'primera')+' pista','hint',m.id,'btn-quiet btn-sm',h>=3)+'</div></div><div class="helper-panel"><h3>🧩 Regla de oro</h3><p>La IA es tu profesora, no tu programadora. <b>Tú escribes el código.</b></p><ul><li>¿Qué debería pasar?</li><li>¿Qué pasó de verdad?</li><li>¿Qué cambio pequeño probarás?</li></ul><a class="btn btn-quiet btn-sm" href="https://create.roblox.com/" target="_blank" rel="noopener noreferrer">Abrir Roblox Studio ↗</a></div></aside></div>'}
function progressView(p){const badges=achievement(p),entries=Object.entries(p.completed).sort((a,b)=>b[1].date.localeCompare(a[1].date));return '<div class="section-top"><div><span class="eyebrow">TU AVENTURA</span><h2>Mi progreso 📈</h2><p>No competimos con otros: descubrimos cuánto has aprendido.</p></div></div>'+stats(p)+'<div class="level-banner"><div><span class="eyebrow">NIVEL ACTUAL</span><strong>🌟 '+labelLevel(p)+'</strong><p>La experiencia se obtiene al intentarlo, razonar y practicar.</p></div><span style="font-size:45px">🏆</span></div><div class="summary-grid"><section class="card"><h3>🏅 Insignias</h3>'+(badges.length?'<div class="badge-row">'+badges.map(x=>'<span class="badge-award"><span>'+x[0]+'</span>'+x[1]+'</span>').join('')+'</div>':'<p class="view-lead">Tu primera insignia aparecerá después de completar una misión.</p>')+'</section><section class="card"><h3>📚 Recorrido</h3>'+WORLDS.map(w=>'<p class="subtle">'+esc(w.title)+' · '+doneN(p,w.lessons)+'/3</p>'+progress(doneN(p,w.lessons),3)).join('')+'</section></div><section class="card" style="margin-top:20px"><h3>🗓️ Misiones realizadas</h3>'+(entries.length?'<div class="timeline">'+entries.map(([id,v])=>'<div class="timeline-item"><div><strong>'+esc(M_BY_ID[id]?M_BY_ID[id].emoji+' '+M_BY_ID[id].title:id)+'</strong><small>'+new Date(v.date).toLocaleDateString('es-ES')+'</small></div><b style="color:var(--mint)">+'+v.xp+' XP</b></div>').join('')+'</div>':'<div class="empty"><p>Aún no has registrado una misión.</p></div>')+'</section>'}
function report(p){const items=Object.entries(p.completed).sort((a,b)=>a[1].date.localeCompare(b[1].date));let rows=['CODEQUEST · INFORME DE APRENDIZAJE','Alias: '+p.name,'Nivel: '+labelLevel(p),'Experiencia: '+p.xp+' XP','Misiones completadas: '+items.length,'Fecha del informe: '+new Date().toLocaleDateString('es-ES'),'','Importante: este informe recoge respuestas y declaraciones, no comprueba lo realizado en Roblox Studio.',''];for(const [id,v] of items){const m=M_BY_ID[id];if(!m)continue;rows.push('MISIÓN: '+m.title,'Fecha: '+new Date(v.date).toLocaleDateString('es-ES'),'Respuesta final correcta: '+(v.correct?'Sí':'No o no respondida'),'Intentos de respuesta: '+v.attempts,'Pistas utilizadas: '+(p.hints[id]||0),'Práctica en Roblox declarada: '+(v.practiced?'Sí':'No'),'XP: '+v.xp,'Observaciones: '+(v.note||'Sin anotaciones'),'Código escrito (no verificado):\n'+((p.codeDrafts||{})[id]||'No hay borrador'),'Cuaderno de errores: '+JSON.stringify((p.debugNotes||{})[id]||{}),'');}const solvedDojo=DOJO_CASES.filter(c=>((p.dojo||{})[c.id]||{}).finished);rows.push('','RUTA LUAU: '+courseCount(p,CURRICULUM_LESSONS.map(l=>l.id))+'/'+CURRICULUM_LESSONS.length+' talleres registrados');for(const lesson of CURRICULUM_LESSONS){const r=(p.course||{})[lesson.id];if(!r)continue;rows.push('TALLER: '+lesson.title,'Estado: '+(r.completed?'realizado':'en progreso'),'Pistas utilizadas: '+r.hints,'Revisiones solicitadas: '+r.reviewAttempts,'Prueba en Roblox Studio declarada: '+(r.tested?'Sí':'No'),'Predicción: '+(r.predict||'(sin respuesta)'),'Borrador Luau (no ejecutado):\n'+(r.code||'(sin código)'),'Reflexión: '+(r.reflection||'(sin respuesta)'),'');}rows.push('','DOJO DE DEPURACIÓN: '+solvedDojo.length+'/'+DOJO_CASES.length+' casos resueltos');for(const c of solvedDojo){const d=p.dojo[c.id];rows.push('CASO: '+c.title,'Concepto: '+c.topic,'Intentos por etapa: '+d.attempts.join(', '),'Pistas: '+d.hints.reduce((sum,n)=>sum+n,0),'Explicación: '+(d.reflection||'(sin reflexión)'),'')}if(!items.length)rows.push('No se han registrado misiones todavía.');rows.push('No hay evaluación automática de habilidades prácticas ni ejecución de código.');return rows.join('\n')}

/* Copias locales: validación estricta y sin transferencia a servidores. */
function backupText(){return JSON.stringify({app:'CodeQuest',version:1,exportedAt:new Date().toISOString(),profiles:model.profiles,active:model.active},null,2)}
function readBackup(source){
 if(!source||source.app!=='CodeQuest'||source.version!==1||!Array.isArray(source.profiles)||source.profiles.length>5||source.profiles.length<1)throw Error('El archivo no es una copia válida de CodeQuest.');
 function boundedNum(v,min,max){const n=Number(v);return Number.isFinite(n)?Math.min(max,Math.max(min,Math.trunc(n))):min}
 function safeText(s,max){return typeof s==='string'?s.slice(0,max):''}
 function onlyIds(raw,convert){const out=Object.create(null);if(raw&&typeof raw==='object'&&!Array.isArray(raw)){for(const m of MISSIONS){if(Object.prototype.hasOwnProperty.call(raw,m.id))out[m.id]=convert(raw[m.id],m.id)}}return out}
 const ids=new Set(),profiles=source.profiles.map((old,index)=>{
   if(!old||typeof old!=='object'||Array.isArray(old))throw Error('Se ha detectado un perfil no válido.');
   const name=safeText(old.name,22).trim();
   if(name.length<2)throw Error('Hay un perfil sin apodo válido.');
   const id='restored_'+index;
   if(ids.has(id))throw Error('Hay perfiles duplicados.');ids.add(id);
   const completed=onlyIds(old.completed,(entry)=>{
      if(!entry||typeof entry!=='object')return null;
      const date=safeText(entry.date,35);
      const validDate=!Number.isNaN(Date.parse(date));
      if(!validDate)return null;
      return {date,xp:boundedNum(entry.xp,0,60),correct:entry.correct===true,practiced:entry.practiced===true,attempts:boundedNum(entry.attempts,0,999),note:safeText(entry.note,1500)}
   });
   for(const key of Object.keys(completed)){if(!completed[key])delete completed[key]}
   const selected=onlyIds(old.selected,v=>boundedNum(v,0,2));
   const attempts=onlyIds(old.attempts,v=>boundedNum(v,0,999));
   const hints=onlyIds(old.hints,v=>boundedNum(v,0,3));
   const notes=onlyIds(old.notes,v=>safeText(v,1500));
   const practiced=onlyIds(old.practiced,v=>v===true);
   const codeDrafts=onlyIds(old.codeDrafts,v=>safeText(v,5000));
   const debugNotes=onlyIds(old.debugNotes,v=>({expected:safeText(v&&v.expected,900),actual:safeText(v&&v.actual,900),tried:safeText(v&&v.tried,900)}));
   const dojo=dojoBackup(old.dojo);const course=courseBackup(old.course);const xp=Object.values(completed).reduce((sum,item)=>sum+item.xp,0)+Object.values(dojo).reduce((sum,item)=>sum+(item.finished?40:0),0)+Object.values(course).reduce((sum,item)=>sum+(item.completed?40:0),0);
   return{id,name,xp,completed,selected,attempts,hints,notes,practiced,codeDrafts,codeReviews:{},debugNotes,dojo,course};
 });
 const activeIndex=source.profiles.findIndex(p=>p&&p.id===source.active);
 return {profiles,active:profiles[Math.max(0,activeIndex)].id};
}
function downloadFile(name,content,type){
 const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),500);
}

function parentsView(p){return '<div class="section-top"><div><span class="eyebrow">ACOMPAÑAMIENTO FAMILIAR</span><h2>Zona familias 👨‍👩‍👧‍👦</h2><p>Para observar sin convertir el aprendizaje en un examen.</p></div></div><div class="parent-notice">🔐 <b>Privacidad:</b> versión de prueba sin cuentas ni base de datos. El alias y el progreso se guardan solamente en este navegador. Si se borran sus datos o se cambia de dispositivo, el progreso no se recupera. No introduzcáis apellidos ni información sensible.</div><div class="summary-grid"><section class="card"><h3>🧭 ¿Qué conviene observar?</h3><p class="view-lead">Si comprende el código, si formula hipótesis, cómo reacciona ante errores y si puede explicar lo que ha construido. Las pistas no son un fracaso: ayudan a aprender.</p><p class="view-lead">La evaluación inicial se puede completar aunque no acierte todas las preguntas, para detectar su punto de partida.</p></section><section class="card"><h3>🛡️ Sobre el tutor</h3><p class="view-lead">Esta versión utiliza <b>pistas pedagógicas escritas y revisables</b>. Todavía no conecta con un modelo de IA ni permite conversaciones abiertas con menores. La futura integración necesitará controles de seguridad y supervisión.</p></section></div><section class="card" style="margin-top:18px"><h3>📋 Informe para compartir</h3><p class="view-lead">Puedes copiar el informe y compartirlo con ChatGPT desde una conversación gestionada por una persona adulta para revisar el aprendizaje y adaptar las próximas misiones.</p><textarea class="textarea" style="min-height:280px" readonly id="parent-report">'+esc(report(p))+'</textarea><div class="button-row">'+uiBtn('📋 Copiar informe','copy-report','','btn-primary')+uiBtn('⬇ Descargar informe','download-report','','btn-quiet')+'</div></section><section class="card" style="margin-top:20px"><h3>💾 Guardar o recuperar el progreso</h3><p class="view-lead">Descarga un archivo privado con los perfiles y las actividades de este navegador. Guárdalo en un lugar seguro: contiene apodos, respuestas y borradores de código. Para recuperar una copia, tendrás que elegir el archivo desde este dispositivo. <b>Importar reemplaza todos los perfiles locales actuales.</b></p><div class="button-row">'+uiBtn('⬇ Guardar copia de seguridad','download-backup','','btn-primary')+uiBtn('↥ Recuperar una copia','open-backup','','btn-quiet')+'</div><input id="backup-input" class="sr-only" type="file" accept=".json,application/json" aria-label="Seleccionar copia de CodeQuest" data-backup-input></section>'}
function header(p){const navLinks=[['home','🏠','Inicio'],['course','📘','Ruta Luau'],['map','🗺️','Mundos'],['dojo','🕵️','Dojo'],['progress','🏆','Progreso'],['parents','👨‍👩‍👧','Familias']];return '<div class="layout"><aside class="sidebar"><div class="logo"><span class="logo-mark">⚡</span><span>Code<em>Quest</em></span></div><nav class="nav-group" aria-label="Principal">'+navLinks.map(x=>'<button type="button" class="nav-item '+(route.page===x[0]?'active':'')+'" data-action="nav" data-id="'+x[0]+'"><span class="nav-ico">'+x[1]+'</span><span>'+x[2]+'</span></button>').join('')+'</nav><div class="side-bottom"><span class="mini">TU MISIÓN</span><strong>Aprender creando</strong><p>Piensa. Prueba. Equivócate. Descubre. Vuelve a intentar.</p></div></aside><div class="main-area"><header class="topbar"><div class="crumb">ACADEMIA DE CREADORES <span style="color:var(--mint)">✦</span></div><div class="top-actions"><span class="pill">⚡ <b>'+p.xp+' XP</b></span><button class="profile-switch" type="button" data-action="profiles" aria-label="Cambiar perfil">👾 '+esc(p.name)+' ▾</button></div></header><main class="content">'}
function bottom(){return '<footer class="footer">CodeQuest · Aprende con curiosidad, a tu propio ritmo · <a href="https://create.roblox.com/docs" target="_blank" rel="noopener noreferrer">Documentación oficial de Roblox ↗</a></footer></main></div></div>'}
function profileModal(){return '<div class="modal-screen" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal"><div class="celebrate">👾</div><span class="eyebrow">ACADEMIA DE CREADORES</span><h2 id="modal-title">'+(model.profiles.length?'Elige tu explorador':'¡Bienvenido a CodeQuest!')+'</h2><p>'+(!model.profiles.length?'Vamos a construir tu aventura. Utiliza un apodo (no tu nombre completo); los datos se guardarán solamente en este navegador.':'Elige un perfil o crea otro para empezar desde cero.')+'</p>'+(model.profiles.length?'<div class="profile-list">'+model.profiles.map(p=>'<button type="button" class="profile-option" data-action="select-profile" data-id="'+esc(p.id)+'">👾 '+esc(p.name)+' <span>'+p.xp+' XP →</span></button>').join('')+'</div>':'')+'<form id="add-profile-form"><label class="note-label" for="alias">Apodo del explorador</label><div class="profile-add"><input id="alias" class="input" name="alias" maxlength="22" placeholder="Ej. Capitán Pixel" autocomplete="off" required><button class="btn btn-primary" type="submit">Crear →</button></div></form><p class="subtle" style="font-size:12px;margin-top:20px">Recomendado con acompañamiento familiar. No se necesita correo, contraseña ni datos personales.</p>'+(model.profiles.length?uiBtn('Cancelar','close-modal','','btn-quiet btn-sm'):'')+'</div></div>'}
function render(){const p=current();if(!p){app.innerHTML=profileModal();return}let body='';if(route.page==='home')body=home(p);else if(route.page==='map')body=mapView(p);else if(route.page==='assessment')body=assessmentView(p);else if(route.page==='world')body=worldView(p,WORLDS.find(w=>w.id===route.world));else if(route.page==='mission')body=missionView(p,M_BY_ID[route.mission]);else if(route.page==='progress')body=progressView(p);else if(route.page==='parents')body=parentsView(p);else if(route.page==='dojo')body=dojoList(p);else if(route.page==='dojo-case')body=dojoCaseView(p,DOJO_MAP[route.dojoId]);else if(route.page==='course')body=courseOverview(p);else if(route.page==='course-lesson')body=courseWorkshop(p,CURRICULUM_BY_ID[route.courseId]);else body=home(p);app.innerHTML=header(p)+body+(route.toast?'<div class="feedback" role="status" style="margin-top:22px">'+esc(route.toast)+'</div>':'')+bottom()+(route.modal?profileModal():'')}
function openMission(id){if(!M_BY_ID[id])return;route.page='mission';route.mission=id;route.modal=false;route.toast='';render();window.scrollTo(0,0)}
function nextMission(id){const all=MISSIONS,ix=all.findIndex(m=>m.id===id);const next=all[ix+1];if(next&&((next.world==='diagnostico')||worldUnlocked(current(),next.world)))openMission(next.id);else nav('progress')}
function copyText(value){if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(value).then(()=>{route.toast='✅ Copiado al portapapeles';render()}).catch(()=>{route.toast='No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente.';render()})}else{route.toast='Selecciona y copia el texto manualmente.';render()}}
document.addEventListener('submit',ev=>{if(ev.target.id!=='add-profile-form')return;ev.preventDefault();const name=(new FormData(ev.target).get('alias')||'').toString().trim().slice(0,22);if(name.length<2){alert('Escribe un apodo de al menos dos caracteres');return}if(model.profiles.length>=5){alert('En este dispositivo se permiten hasta cinco perfiles.');return}const id='p_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6);model.profiles.push({id,name,xp:0,completed:{},selected:{},attempts:{},hints:{},notes:{},practiced:{}});model.active=id;persist();route={page:'home',world:null,mission:null,modal:false,toast:''};render()});
document.addEventListener('change',ev=>{const p=current();if(!p)return;const el=ev.target;if(el.dataset.courseTest&&CURRICULUM_BY_ID[el.dataset.courseTest]){courseEntry(p,el.dataset.courseTest).tested=el.checked;persist()}if(el.dataset.practiced){p.practiced[el.dataset.practiced]=el.checked;persist()}if(el.dataset.note){p.notes[el.dataset.note]=el.value.slice(0,1500);persist()}});
document.addEventListener('input',ev=>{const p=current();if(!p)return;const el=ev.target;if(el.dataset.note){p.notes[el.dataset.note]=el.value.slice(0,1500);persist()}if(el.dataset.codeDraft){p.codeDrafts[el.dataset.codeDraft]=el.value.slice(0,5000);delete p.codeReviews[el.dataset.codeDraft];persist()}if(el.dataset.courseInput&&CURRICULUM_BY_ID[el.dataset.courseId]){const e=courseEntry(p,el.dataset.courseId);const field=el.dataset.courseInput;if(['predict','code','reflection'].includes(field)){e[field]=el.value.slice(0,field==='code'?6000:1300);e.lastReview=null;persist()}}if(el.dataset.dojoNote){const r=dojoRecord(p,el.dataset.dojoNote);r.reflection=el.value.slice(0,1000);persist()}if(el.dataset.debug){const id=el.dataset.debug,field=el.dataset.field;if(['expected','actual','tried'].includes(field)){p.debugNotes[id] ||= {};p.debugNotes[id][field]=el.value.slice(0,900);persist()}}});
document.addEventListener('click',ev=>{const el=ev.target.closest('[data-action]');if(!el)return;const action=el.dataset.action,id=el.dataset.id,p=current();if(action==='profiles'){route.modal=true;render();return}if(action==='close-modal'){route.modal=false;render();return}if(action==='select-profile'){model.active=id;persist();route={page:'home',world:null,mission:null,modal:false,toast:''};render();return}if(!p)return;if(action==='nav'){nav(id);return}if(action==='course-open'){if(CURRICULUM_BY_ID[id]&&courseUnlocked(p,id)){route.page='course-lesson';route.courseId=id;route.toast='';render();window.scrollTo(0,0)}return}if(action==='course-review'){if(!CURRICULUM_BY_ID[id])return;const e=courseEntry(p,id);e.reviewAttempts+=1;e.lastReview=courseCheck(p,id);persist();render();return}if(action==='course-hint'){if(!CURRICULUM_BY_ID[id])return;const e=courseEntry(p,id);e.hints=Math.min(3,e.hints+1);persist();render();return}if(action==='course-finish'){const r=courseFinish(p,id);route.toast=r.message;render();if(r.ok)window.scrollTo(0,0);return}if(action==='dojo-open'){if(!DOJO_MAP[id])return;route.page='dojo-case';route.dojoId=id;route.toast='';render();window.scrollTo(0,0);return}if(action==='dojo-answer'){if(DOJO_MAP[id]){dojoAnswer(p,id,Number(el.dataset.index));render()}return}if(action==='dojo-next'){dojoNext(p,id);render();return}if(action==='dojo-hint'){const r=dojoRecord(p,id);if(!r.finished&&!r.solved[r.stage]){r.hints[r.stage]=1;persist();render()}return}if(action==='dojo-finish'){if(dojoFinish(p,id)){route.toast='🏅 Has resuelto el misterio y ganado 40 XP.';render();window.scrollTo(0,0)}return}if(action==='assessment'){nav('assessment');return}if(action==='world'){route.page='world';route.world=id;route.toast='';render();window.scrollTo(0,0);return}if(action==='mission'){openMission(id);return}if(action==='next'){nextMission(id);return}if(action==='copy'){const m=M_BY_ID[id];if(m)copyText(m.code);return}if(action==='review-code'){const check=getChecks(p,id);if(!check)return;const missing=check.rules.filter(r=>!r.met);p.codeReviews[id]={rules:check.rules,message:!check.hasCode?'Escribe primero tu intento.':missing.length?'Hay '+missing.length+' elemento(s) que revisar. Observa las indicaciones, modifica una cosa y prueba en Studio.':'Has incluido los elementos que buscamos. Ahora prueba el código en Roblox Studio; aquí no podemos asegurar que funcione.'};persist();render();return}if(action==='copy-question'){if(!M_BY_ID[id])return;const d=p.debugNotes[id]||{};if(!d.expected?.trim()||!d.actual?.trim()){route.toast='Escribe al menos qué esperabas y qué ocurrió antes de copiar tu pregunta.';render();return}copyText(questionForTutor(p,M_BY_ID[id]));return}if(action==='download-backup'){downloadFile('CodeQuest-copia-de-seguridad.json',backupText(),'application/json;charset=utf-8');return}if(action==='open-backup'){document.getElementById('backup-input')?.click();return}if(action==='copy-report'){copyText(report(p));return}if(action==='download-report'){const blob=new Blob([report(p)],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='CodeQuest-informe-'+p.id+'.txt';a.click();URL.revokeObjectURL(url);return}
 if(action==='choose'){const m=M_BY_ID[id],i=Number(el.dataset.index);if(!m||done(p,id))return;p.selected[id]=i;p.attempts[id]=(p.attempts[id]||0)+1;persist();render();return}
 if(action==='hint'){const m=M_BY_ID[id];if(m){p.hints[id]=Math.min(3,(p.hints[id]||0)+1);persist();render()}return}
 if(action==='finish'){const m=M_BY_ID[id];if(!m||done(p,id))return;const correct=p.selected[id]===m.answer;if(m.world!=='diagnostico'&&!correct)return;const practiced=!!p.practiced[id];const earned=20+(correct?25:0)+(practiced?15:0);p.completed[id]={date:new Date().toISOString(),xp:earned,correct,practiced,attempts:p.attempts[id]||0,note:p.notes[id]||''};p.xp+=earned;persist();route.toast='🎉 ¡Misión registrada! Has ganado '+earned+' XP. Sigue explorando a tu ritmo.';render();window.scrollTo({top:0,behavior:'smooth'});return}
});

document.addEventListener('change',async ev=>{
 if(!ev.target.matches||!ev.target.matches('[data-backup-input]'))return;
 const file=ev.target.files&&ev.target.files[0];if(!file)return;
 try{
   if(file.size>1048576)throw Error('La copia es demasiado grande (máximo 1 MB).');
   const candidate=readBackup(JSON.parse(await file.text()));
   if(!window.confirm('Esta operación reemplazará TODOS los perfiles y progresos de CodeQuest en este navegador. ¿Quieres continuar?'))return;
   model=candidate;persist();route={page:'parents',world:null,mission:null,modal:false,toast:'✅ Copia restaurada en este navegador.'};render();
 }catch(error){route.toast='No se pudo recuperar la copia: '+error.message;render()}
});

render();
