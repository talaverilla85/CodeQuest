'use strict';
/* CodeQuest: panel opcional de pistas con OpenAI. Solo en talleres Luau. */
let tutorUi={lesson:null,visible:false,available:null,checking:false,busy:false,access:'',question:'',intent:'pista',consent:false,answer:'',error:''};
function tutorWorkshop(m){
 const s=tutorUi;
 if(s.lesson!==m.id){s.lesson=m.id;s.visible=false;s.available=null;s.question='';s.answer='';s.error='';s.consent=false;s.access='';}
 return '<div class="helper-panel"><h3>🤖 Tutor IA · modo supervisado</h3>'+
 '<p>Aprende mediante una sola pista por turno. El tutor no debe escribir el programa por ti y puede equivocarse.</p>'+
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
 if(button.dataset.action==='tutor-open')tutorAvailability(id);
 if(button.dataset.action==='tutor-ask')tutorAsk(id);
});
