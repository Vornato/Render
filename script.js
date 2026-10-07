'use strict';
window.RENDER_CONFIG = {whatsappNumber:'995595551405', whatsappDisplay:'+995 595 55 14 05'};
const t=text=>window.RenderI18n?.t(text)??text;
const isGeorgian=()=>window.RenderI18n?.language==='ka';
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
function closeMenu(){nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const isOpen=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(isOpen));});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>1000)closeMenu();});

// Keep the number in one place. All WhatsApp URLs are generated from this setting.
const config=window.RENDER_CONFIG;
const greeting="Hi Render Studio! I'd like to discuss a project.";
function whatsappURL(text){return `https://wa.me/${config.whatsappNumber}${text?'?text='+encodeURIComponent(text):''}`;}
function updateWhatsAppLinks(){document.querySelectorAll('.whatsapp-link').forEach(link=>{link.href=whatsappURL(link.classList.contains('contact-number')?'':t(greeting));});}
updateWhatsAppLinks();
document.querySelector('.contact-number').textContent=config.whatsappDisplay;
document.querySelector('#year').textContent=new Date().getFullYear();

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle=document.querySelector('#motion-toggle');
let manuallyPaused=false;
try{manuallyPaused=localStorage.getItem('render-motion-paused')==='true';}catch{}
function motionAllowed(){return !reducedMotion.matches&&!manuallyPaused;}
function updateMotion(){
  document.documentElement.classList.toggle('motion-paused',!motionAllowed());
  motionToggle.setAttribute('aria-pressed',String(!motionAllowed()));
  motionToggle.textContent=t(reducedMotion.matches?'Reduced motion enabled':manuallyPaused?'Resume site motion':'Pause site motion');
  const square=document.createElement('span');square.className='tiny-square';square.setAttribute('aria-hidden','true');motionToggle.append(square);
  motionToggle.disabled=reducedMotion.matches;
  if(!motionAllowed()){document.querySelectorAll('.reveal').forEach(item=>item.classList.add('is-visible'));pauseVideo();}
}
motionToggle.addEventListener('click',()=>{manuallyPaused=!manuallyPaused;try{localStorage.setItem('render-motion-paused',String(manuallyPaused));}catch{}updateMotion();scheduleScroll();});
reducedMotion.addEventListener('change',()=>{updateMotion();scheduleScroll();});

// Reveals use IntersectionObserver; content stays visible if JavaScript is unavailable.
if('IntersectionObserver' in window){
  document.documentElement.classList.add('js-motion');
  const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:0.08,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.reveal').forEach(item=>revealObserver.observe(item));
}

const track=document.querySelector('.scroll-track');
const railCount=document.querySelector('.rail-count');
const sections=[...document.querySelectorAll('[data-section]')];
const heroImage=document.querySelector('.hero-image-frame>img');
const floatingPixel=document.querySelector('.floating-pixel');
const navLinks=[...nav.querySelectorAll('a:not(.button)')];
let framePending=false;
function updateScroll(){
  framePending=false;
  const maxScroll=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
  const progress=maxScroll?Math.min(1,Math.max(0,window.scrollY/maxScroll)):0;
  document.documentElement.style.setProperty('--scroll',progress.toFixed(4));
  track.setAttribute('aria-valuenow',String(Math.round(progress*100)));
  track.setAttribute('aria-valuetext',isGeorgian()?`გვერდის ${Math.round(progress*100)}% გადახვეულია`:`${Math.round(progress*100)}% through page`);
  const active=sections.reduce((current,section)=>section.getBoundingClientRect().top<window.innerHeight*.4?section:current,sections[0]);
  if(document.documentElement.dataset.activeSection!==active.id)document.documentElement.dataset.activeSection=active.id;
  railCount.textContent=active.dataset.section;
  document.querySelector('.scroll-control').classList.toggle('is-dark',active.id==='home'||active.id==='services');
  navLinks.forEach(link=>{if(link.hash===`#${active.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  if(motionAllowed()){
    const heroProgress=Math.min(1,window.scrollY/Math.max(window.innerHeight,1));
    if(heroImage)heroImage.style.transform=`translateY(${heroProgress*22}px) scale(${1.06+heroProgress*.025})`;
    if(floatingPixel)floatingPixel.style.transform=`translate(${heroProgress*35}px,${-heroProgress*35}px)`;
  }
  const contactRect=document.querySelector('#contact').getBoundingClientRect();
  const hideFloating=contactRect.top<window.innerHeight*.8&&contactRect.bottom>0;
  const floatLink=document.querySelector('.whatsapp-float');
  floatLink.classList.toggle('is-hidden',hideFloating);
  floatLink.inert=hideFloating;
}
function scheduleScroll(){if(!framePending){framePending=true;requestAnimationFrame(updateScroll);}}
window.addEventListener('scroll',scheduleScroll,{passive:true});
window.addEventListener('resize',scheduleScroll);
window.addEventListener('load',scheduleScroll);
function scrubTo(event){const bounds=track.getBoundingClientRect();const fraction=Math.min(1,Math.max(0,(event.clientY-bounds.top)/bounds.height));window.scrollTo({top:fraction*(document.documentElement.scrollHeight-window.innerHeight),behavior:'instant'});}
track.addEventListener('pointerdown',event=>{if(event.button!==0)return;track.setPointerCapture(event.pointerId);scrubTo(event);});
track.addEventListener('pointermove',event=>{if(track.hasPointerCapture(event.pointerId))scrubTo(event);});
track.addEventListener('pointerup',event=>{if(track.hasPointerCapture(event.pointerId))track.releasePointerCapture(event.pointerId);});
track.addEventListener('keydown',event=>{let target=window.scrollY;const amount=window.innerHeight*.2;switch(event.key){case'ArrowDown':case'ArrowRight':target+=amount;break;case'ArrowUp':case'ArrowLeft':target-=amount;break;case'PageDown':target+=window.innerHeight;break;case'PageUp':target-=window.innerHeight;break;case'Home':target=0;break;case'End':target=document.documentElement.scrollHeight;break;default:return;}event.preventDefault();window.scrollTo({top:target,behavior:'instant'});});

// Portfolio categories and genuine local concept details.
const filterButtons=[...document.querySelectorAll('[data-filter]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const category=button.dataset.filter;let count=0;
  filterButtons.forEach(item=>{const selected=item===button;item.classList.toggle('is-active',selected);item.setAttribute('aria-pressed',String(selected));});
  document.querySelectorAll('.project').forEach(project=>{project.hidden=category!=='all'&&project.dataset.category!==category;if(!project.hidden){project.classList.add('is-visible');count++;}});
  if(category==='strategy')pauseVideo();
  document.querySelector('#filter-status').textContent=isGeorgian()?`ნაჩვენებია სტუდიის ${count} კონცეფცია.`:`Showing ${count} ${count===1?'studio concept':'studio concepts'}.`;
  scheduleScroll();
}));
const conceptData={content:{title:'Content, built to connect.',image:'assets/content.webp',alt:'A geometric pixel camera and framed artwork with a muted red accent',description:'A studio exploration of a content-production world built from our square-grid identity. The camera, framed images and red focal point bring a shared visual language to a collection of social assets. A real project could carry this direction through videos, post design and a planned content calendar.',tags:['Creative direction','Social content','Video production']},growth:{title:'A strategy with direction.',image:'assets/growth.webp',alt:'Ascending gray block steps with a muted red block at the top',description:'A studio exploration of how a brand can visualize progress without overcomplicating the message. A simple staircase and one red focal point form a clear campaign idea. A real project would begin with an audience, a measurable goal and a creative testing plan.',tags:['Campaign concept','Brand strategy','Performance thinking']}};
const dialog=document.querySelector('#project-dialog');let lastDialogTrigger=null;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const concept=conceptData[button.dataset.project];lastDialogTrigger=button;
  populateDialog(concept);
  if(typeof dialog.showModal==='function'){dialog.showModal();document.documentElement.classList.add('dialog-open');}else{dialog.setAttribute('open','');}
}));
function closeDialog(){if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');document.documentElement.classList.remove('dialog-open');if(lastDialogTrigger)lastDialogTrigger.focus();}
document.querySelector('.dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('close',()=>{document.documentElement.classList.remove('dialog-open');});
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closeDialog();}});
document.querySelector('.dialog-contact').addEventListener('click',closeDialog);

const video=document.querySelector('#brand-video');
const videoToggle=document.querySelector('.video-toggle');
function pauseVideo(){if(!video)return;video.pause();videoToggle.setAttribute('aria-pressed','false');videoToggle.querySelector('.video-label').textContent=t('Play motion study');}
videoToggle.addEventListener('click',async()=>{
  if(!video.paused){pauseVideo();return;}
  try{await video.play();videoToggle.setAttribute('aria-pressed','true');videoToggle.querySelector('.video-label').textContent=t('Pause motion study');}catch{videoToggle.querySelector('.video-label').textContent=t('Video unavailable');}
});
if('IntersectionObserver' in window){const videoObserver=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting){const bounds=video.getBoundingClientRect();if(bounds.bottom<=0||bounds.top>=window.innerHeight)pauseVideo();}});videoObserver.observe(video);}
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseVideo();});

// No backend or automatic message sending: the visitor reviews the brief in WhatsApp.
const form=document.querySelector('#project-form');
form.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form);const name=String(data.get('name')||'').trim();const brief=String(data.get('brief')||'').trim();
  if(!name||brief.length<10){document.querySelector('#form-status').textContent=t('Please add your name and a little more detail about your project.');return;}
  const company=String(data.get('company')||'').trim();const services=data.getAll('service');
  const message=isGeorgian()?[`გამარჯობა, Render Studio! მე ვარ ${name}.`,company?`ბრენდი / კომპანია: ${company}`:'',services.length?`მაინტერესებს: ${services.map(t).join(', ')}`:'',`პროექტის აღწერა: ${brief}`].filter(Boolean).join('\n\n'):[`Hi Render Studio! I'm ${name}.`,company?`Brand / company: ${company}`:'',services.length?`Interested in: ${services.join(', ')}`:'',`Project brief: ${brief}`].filter(Boolean).join('\n\n');
  const url=whatsappURL(message);window.open(url,'_blank','noopener,noreferrer');
  const status=document.querySelector('#form-status');const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=t('Open your brief in WhatsApp');status.replaceChildren(document.createTextNode(t('Your brief is ready to review and send.')+' '),link);
});
function populateDialog(concept){
  const image=document.querySelector('#dialog-image');image.src=concept.image;image.alt=t(concept.alt);
  document.querySelector('#dialog-title').textContent=t(concept.title);
  document.querySelector('#dialog-description').textContent=t(concept.description);
  document.querySelector('#dialog-tags').replaceChildren(...concept.tags.map(text=>{const tag=document.createElement('span');tag.textContent=t(text);return tag;}));
}
// Dialog chrome is outside the static translation inventory because its contents are dynamic.
function updateLanguageUI(){
  updateWhatsAppLinks();updateMotion();scheduleScroll();
  videoToggle.querySelector('.video-label').textContent=t(video.paused?'Play motion study':'Pause motion study');
  const close=document.querySelector('.dialog-close');close.setAttribute('aria-label',t('Close concept details'));close.firstChild.nodeValue=t('Close')+' ';
  document.querySelector('.dialog-copy .eyebrow').textContent=t('RENDER STUDIO / CONCEPT EXPLORATION');
  document.querySelector('.dialog-contact').firstChild.nodeValue=t('Create something like this');
  if(dialog.open&&lastDialogTrigger)populateDialog(conceptData[lastDialogTrigger.dataset.project]);
  document.querySelector('#filter-status').textContent='';document.querySelector('#form-status').replaceChildren();
}
window.addEventListener('render-language-change',updateLanguageUI);
form.querySelectorAll('[required]').forEach(input=>{
  input.addEventListener('input',()=>input.setCustomValidity(''));
  input.addEventListener('invalid',()=>{if(isGeorgian())input.setCustomValidity(input.name==='name'?'გთხოვ, მიუთითე შენი სახელი.':'გთხოვ, პროექტი აღწერე მინიმუმ 10 სიმბოლოთი.');});
});
updateLanguageUI();
updateMotion();scheduleScroll();
