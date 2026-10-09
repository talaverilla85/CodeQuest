'use strict';
/* CodeQuest: panel opcional de pistas con OpenAI. Solo en talleres Luau. */
let tutorUi={lesson:null,visible:false,available:null,checking:false,busy:false,access:'',question:'',intent:'pista',consent:false,answer:'',error:'',simQuestion:'',simTurns:[],simError:''};

/* Tutor simulado: preguntas predefinidas. Todo se procesa en el navegador. */
const SIMULATED_COACH={
 lab1:[
  '¿Qué variable guarda las vidas del jugador y con qué número empieza? Intenta señalar esa línea.',
  'Cuando quieres sumar dos vidas, ¿qué parte de tu programa debería modificar el valor de esa variable?',
  '¿Qué puedes mostrar con print para comprobar que el resultado coincide con tu predicción?'
 ],
 lab2:[
  '¿Cuál es la cantidad inicial de monedas y cuántas debería perder el jugador al comprar?',
  '¿Qué operación utilizarías para reducir el número guardado, sin crear una variable distinta?',
  '¿Qué valor debería aparecer en Output después de la compra? Compruébalo en Studio.'
 ],
 lab3:[
  '¿Cuántas llaves hacen falta para abrir la puerta? ¿Con qué número compararías la variable?',
  '¿Qué significa exactamente mayor o igual que? ¿Debería abrirse la puerta con dos llaves?',
  '¿Dónde termina el bloque de instrucciones que se ejecuta solamente si se cumple la condición?'
 ],
 lab4:[
  'Si quieres una cuenta atrás, ¿en qué orden deberían aparecer los números?',
  '¿Entre qué dos mensajes hace falta una pausa? ¿En qué unidad se expresa el tiempo?',
  'Prueba a cambiar una sola pausa. ¿Cómo afecta al comportamiento de tu cuenta atrás?'
 ],
 lab5:[
  '¿Cuál es la diferencia entre definir una función y pedirle que se ejecute?',
  '¿Dónde colocarías la instrucción que muestra el mensaje para que pertenezca a la función?',
  'Si quieres ver el saludo dos veces, ¿cuántas veces tendrás que llamar a esa función?'
 ],
 lab6:[
  '¿Qué debería ocurrir exactamente cuando algo toca la plataforma?',
  '¿Cómo se llama el evento de una Part que detecta un contacto? Comprueba la ortografía en Studio.',
  '¿Dónde colocarías la instrucción que imprime el mensaje: al iniciar el Script o dentro de la función del evento?'
 ],
 lab7:[
  '¿Una parte que no se ve deja también de bloquear al personaje? ¿Cómo lo comprobarías?',
  'Busca una propiedad que cambie la visibilidad y otra que controle las colisiones. ¿Son independientes?',
  'Prueba a modificar solo una propiedad y observa si el personaje puede atravesar la pared.'
 ],
 lab8:[
  '¿Cuál es la única cosa especial que quieres que haga tu videojuego?',
  'Divide tu idea en objetos, una regla y una prueba. ¿Qué parte puedes construir primero?',
  '¿Qué resultado te demostraría que funciona tu mecánica? Pide a alguien que la pruebe.'
 ]
};
function simulatedReply(m,turns,code){
 const guides=SIMULATED_COACH[m.id]||SIMULATED_COACH.lab8;
 const step=Math.min(turns,2);
 if(!code.trim()&&step===0)return 'Todavía no tienes un borrador de código. ¿Qué instrucción podrías escribir primero para acercarte al objetivo de este taller?';
 return guides[step];
}
function simulateTutorTurn(id){
 if(!tutorPanelIsCurrent(id)||!CURRICULUM_BY_ID[id])return;
 const s=tutorUi,q=s.simQuestion.trim().slice(0,350);
 if(s.simTurns.length>=3){s.simError='Ya tienes tres orientaciones. Prueba tu siguiente hipótesis en Roblox Studio y vuelve después a empezar.';render();return}
 if(q.length<5){s.simError='Escribe al menos una frase sobre lo que estás intentando.';render();return}
 const m=CURRICULUM_BY_ID[id],p=current();
 const reply=simulatedReply(m,s.simTurns.length,courseEntry(p,id).code||'');
 s.simTurns.push({question:q,answer:reply});
 s.simQuestion='';s.simError='';
 render();
}
function resetSimTutor(id){
 if(!tutorPanelIsCurrent(id))return;
 tutorUi.simQuestion='';tutorUi.simTurns=[];tutorUi.simError='';
 render();
}
function simulatedTutorPanel(m){
 const s=tutorUi,hasTurns=s.simTurns.length>0;
 return '<div class="sim-tutor"><div class="sim-tutor-title"><strong>🧠 Tutor de práctica</strong><span class="chip">SIN IA · GRATIS</span></div>'+
 '<p class="subtle">Este simulador utiliza preguntas preparadas para cada taller. <b>No interpreta lo que escribes</b>, pero te ayuda a razonar paso a paso. Nada se envía a OpenAI.</p>'+
 (hasTurns?'<div class="sim-dialog" role="log" aria-label="Conversación de práctica">'+s.simTurns.map(turn=>'<div class="sim-bubble student"><b>Tú</b><p>'+esc(turn.question)+'</p></div><div class="sim-bubble coach"><b>Tutor de práctica</b><p>'+esc(turn.answer)+'</p></div>').join('')+'</div>':
 '<div class="sim-bubble coach"><b>Tutor de práctica</b><p>¿Qué querías que hiciera tu programa? ¿Qué esperabas ver cuando lo probaras?</p></div>')+
 '<label class="note-label" for="tutor-sim-question">Mi respuesta o duda</label>'+
 '<textarea id="tutor-sim-question" data-tutor-sim-question maxlength="350" rows="3" class="textarea" placeholder="He intentado..., pero sucede...">'+esc(s.simQuestion)+'</textarea>'+
 (s.simError?'<div class="feedback error" role="alert">'+esc(s.simError)+'</div>':'')+
 '<div class="button-row">'+uiBtn(s.simTurns.length>=3?'Prueba en Studio y reinicia':'Recibir orientación →','tutor-simulate',m.id,'btn-quiet btn-sm',s.simTurns.length>=3)+
 (hasTurns?uiBtn('Reiniciar','tutor-sim-reset',m.id,'btn-secondary btn-sm'):'')+'</div>'+
 '<p class="subtle">Después de estas pistas, comprueba una hipótesis en Roblox Studio. Recuerda que el simulador no verifica tu código.</p></div>';
}

function tutorWorkshop(m){
 const s=tutorUi;
 if(s.lesson!==m.id){s.lesson=m.id;s.visible=false;s.available=null;s.question='';s.answer='';s.error='';s.consent=false;s.access='';s.simQuestion='';s.simTurns=[];s.simError='';}
 return '<div class="helper-panel"><h3>🤖 Tutor IA · modo supervisado</h3>'+
 '<p>Practica primero con las orientaciones gratuitas. La conexión real con OpenAI seguirá pendiente hasta completar las autorizaciones.</p>'+simulatedTutorPanel(m)+
 (!s.visible?uiBtn('Consultar disponibilidad','tutor-open',m.id,'btn-quiet btn-sm'):'')+
 (s.visible?'<div class="tutor-experiment">'+
 '<p class="subtle">Estado: '+(s.checking?'Comprobando…':s.available?'Disponible con autorización familiar':'Aún sin activar')+'</p>'+
 (s.available?'<label class="note-label" for="tutor-access">Código de acceso familiar (lo introduce un adulto)</label>'+
 '<input id="tutor-access" type="password" autocomplete="off" class="input" data-tutor-access placeholder="Código privado de autorización" value="'+esc(s.access)+'">'+
 '<label class="note-label" for="tutor-intent">Tipo de ayuda</label>'+
 '<select id="tutor-intent" data-tutor-intent class="input"><option value="pista" '+(s.intent==='pista'?'selected':'')+'>Dame una pista</option><option value="entender" '+(s.intent==='entender'?'selected':'')+'>Explícame un concepto</option><option value="depurar" '+(s.intent==='depurar'?'selected':'')+'>Ayúdame a investigar un error</option></select>'+
 '<label class="note-label" for="tutor-question">Mi pregunta (máx. 350 caracteres)</label>'+
 '<textarea id="tutor-question" data-tutor-question class="textarea" maxlength="350" placeholder="Esperaba que... pero ocurrió...">'+esc(s.question)+'</textarea>'+
 '<label class="check-workshop"><input type="checkbox" data-tutor-consent '+(s.consent?'checked':'')+'><span>Como adulto, autorizo enviar la pregunta y el borrador del taller a OpenAI. He comprobado que no contienen datos personales.</span></label>'+
 uiBtn(s.busy?'Consultando…':'Pedir una pista','tutor-ask',m.id,'btn-quiet btn-sm',s.busy):'<p class="subtle">Esta función necesita configuración y autorización familiar antes de utilizarse.</p>')+
 (s.answer?'<div class="feedback"><b>💬 Una pista del tutor</b><p>'+esc(s.answer)+'</p></div>':'')+
 (s.error?'<div class="feedback error" role="alert">'+esc(s.error)+'</div>':'')+
 '<p class="subtle">No se guarda la conversación. La autorización es temporal y no se envían nombre ni datos de perfil.</p></div>':'')+
 '</div>';
}
function tutorPanelIsCurrent(id){return route.page==='course-lesson'&&route.courseId===id}
async function tutorAvailability(id){
 if(!tutorPanelIsCurrent(id))return;
 tutorUi.lesson=id;tutorUi.visible=true;tutorUi.checking=true;tutorUi.error='';render();
 try{
  const response=await fetch('/api/tutor',{headers:{Accept:'application/json'},cache:'no-store'});
  const data=await response.json();
  tutorUi.available=response.ok&&data.available===true;
  if(!tutorUi.available)tutorUi.error='La IA no está activada todavía. Puedes seguir utilizando las pistas normales.';
 }catch(e){tutorUi.available=false;tutorUi.error='No se pudo comprobar el estado del tutor.'}
 tutorUi.checking=false;
 if(tutorPanelIsCurrent(id))render();
}
async function tutorAsk(id){
 if(!tutorPanelIsCurrent(id)||!tutorUi.available||tutorUi.busy)return;
 const p=current(),m=CURRICULUM_BY_ID[id];
 if(!p||!m)return;
 if(tutorUi.access.length<24){tutorUi.error='Debe introducirse la autorización familiar.';render();return}
 if(!tutorUi.consent){tutorUi.error='La persona adulta debe autorizar este envío.';render();return}
 if(!tutorUi.question.trim()){tutorUi.error='Explica qué te está pasando antes de pedir ayuda.';render();return}
 tutorUi.busy=true;tutorUi.answer='';tutorUi.error='';render();
 try{
  const response=await fetch('/api/tutor',{
   method:'POST',
   headers:{'Content-Type':'application/json','X-CodeQuest-Access-Code':tutorUi.access},
   body:JSON.stringify({lessonId:id,intent:tutorUi.intent,code:courseEntry(p,id).code.slice(0,3500),question:tutorUi.question.slice(0,350)})
  });
  const result=await response.json();
  if(!response.ok)throw new Error(result.error||'Error al consultar el tutor.');
  tutorUi.answer=String(result.answer||'').slice(0,1400);
 }catch(err){tutorUi.error=err.message||'No se ha podido solicitar la pista.';}
 tutorUi.busy=false;
 if(tutorPanelIsCurrent(id))render();
}
document.addEventListener('input',event=>{
 if(event.target.matches?.('[data-tutor-sim-question]'))tutorUi.simQuestion=event.target.value.slice(0,350);
 if(event.target.matches?.('[data-tutor-access]'))tutorUi.access=event.target.value.slice(0,160);
 if(event.target.matches?.('[data-tutor-question]'))tutorUi.question=event.target.value.slice(0,350);
});
document.addEventListener('change',event=>{
 if(event.target.matches?.('[data-tutor-intent]')&&['pista','entender','depurar'].includes(event.target.value))tutorUi.intent=event.target.value;
 if(event.target.matches?.('[data-tutor-consent]'))tutorUi.consent=event.target.checked;
});
document.addEventListener('click',event=>{
 const button=event.target.closest?.('[data-action]');
 if(!button)return;
 const id=button.dataset.id;
 if(button.dataset.action==='tutor-simulate')simulateTutorTurn(id);
 if(button.dataset.action==='tutor-sim-reset')resetSimTutor(id);
 if(button.dataset.action==='tutor-open')tutorAvailability(id);
 if(button.dataset.action==='tutor-ask')tutorAsk(id);
});
