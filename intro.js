'use strict';
(()=>{
  const root=document.documentElement;
  const intro=document.querySelector('#site-intro');
  if(!intro){root.classList.remove('intro-pending');return;}
  const grid=intro.querySelector('.intro-tiles');
  const skip=intro.querySelector('.intro-skip');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const timers=new Set();
  const originalFocus=document.activeElement;
  const locked=[];
  let finished=false,revealing=false,observer=null;
  let savedPause=false;
  try{savedPause=localStorage.getItem('render-motion-paused')==='true';}catch{}
  function later(callback,delay){const timer=setTimeout(()=>{timers.delete(timer);callback();},delay);timers.add(timer);}
  function finish(){
    if(finished)return;
    finished=true;
    timers.forEach(clearTimeout);timers.clear();
    root.classList.remove('intro-pending','intro-running');
    try{sessionStorage.setItem('render-intro-seen','true');}catch{}
    locked.forEach(({element,inert})=>{element.inert=inert;});
    observer?.disconnect();
    window.removeEventListener('resize',onResize);
    window.removeEventListener('render-language-change',updateLanguage);
    document.removeEventListener('keydown',onKey);
    reduced.removeEventListener('change',onMotionChange);
    intro.remove();
    if(originalFocus&&originalFocus!==document.body&&originalFocus.isConnected)originalFocus.focus({preventScroll:true});
    window.dispatchEvent(new CustomEvent('render-intro-end'));
    window.dispatchEvent(new Event('scroll'));
  }
  window.RenderIntro={finish,get state(){return finished?'finished':revealing?'revealing':'logo';}};
  let alreadySeen=false;try{alreadySeen=sessionStorage.getItem('render-intro-seen')==='true';}catch{}
  if(alreadySeen){finish();return;}
  function updateLanguage(){const ka=window.RenderI18n?.language==='ka';skip.textContent=ka?'ანიმაციის გამოტოვება':'Skip intro';intro.setAttribute('aria-label',ka?'Render Studio-ს შესავალი':'Render Studio introduction');}
  function buildTiles(){
    const columns=window.innerWidth<=760?6:Math.min(16,Math.max(10,Math.round(window.innerWidth/120)));
    const rows=Math.min(18,Math.max(5,Math.ceil(window.innerHeight/(window.innerWidth/columns))));
    grid.style.setProperty('--intro-columns',String(columns));grid.style.setProperty('--intro-rows',String(rows));
    const tiles=[];
    for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){
      const tile=document.createElement('span');tile.className='intro-tile';
      const distance=Math.abs(col-(columns-1)/2)+Math.abs(row-(rows-1)/2);
      const delay=distance/((columns+rows)/2)*430+((row*13+col*7)%7)*16;
      tile.style.setProperty('--tile-delay',`${Math.round(delay)}ms`);tiles.push(tile);
    }
    grid.replaceChildren(...tiles);
  }
  function beginReveal(){
    if(finished||revealing)return;
    revealing=true;intro.classList.add('is-revealing');
    later(finish,intro.classList.contains('is-static')?180:1050);
  }
  function onResize(){if(revealing)finish();else buildTiles();}
  function onKey(event){if(event.key==='Escape'){event.preventDefault();finish();}}
  function onMotionChange(){if(reduced.matches||root.classList.contains('motion-paused')){const alreadyStatic=intro.classList.contains('is-static');intro.classList.add('is-static');if(!alreadyStatic)beginReveal();}}
  buildTiles();
  window.addEventListener('resize',onResize);
  window.addEventListener('render-language-change',updateLanguage);
  document.addEventListener('keydown',onKey);
  reduced.addEventListener('change',onMotionChange);
  skip.addEventListener('click',finish);
  if('MutationObserver' in window){observer=new MutationObserver(onMotionChange);observer.observe(root,{attributes:true,attributeFilter:['class']});}
  for(const element of document.body.children){
    if(element===intro||element.matches('script,style,noscript'))continue;
    locked.push({element,inert:element.inert});element.inert=true;
  }
  if(reduced.matches||savedPause||root.classList.contains('motion-paused'))intro.classList.add('is-static');
  intro.hidden=false;
  root.classList.add('intro-running');root.classList.remove('intro-pending');
  updateLanguage();skip.focus({preventScroll:true});
  later(beginReveal,intro.classList.contains('is-static')?350:1300);
  later(finish,4500);
})();
