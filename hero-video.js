'use strict';
(() => {
  const hero=document.querySelector('#home');
  const video=document.querySelector('#hero-background-video');
  const control=document.querySelector('#hero-background-control');
  const fallback=document.querySelector('#hero-background-fallback');
  if(!hero||!video||!control)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const translate=text=>window.RenderI18n?.t(text)??text;
  video.muted=true;video.defaultMuted=true;video.setAttribute('muted','');
  let visible=hero.getBoundingClientRect().bottom>0&&hero.getBoundingClientRect().top<innerHeight;
  let intent='auto';let pending=false;let blocked=false;let motionRunning=false;
  let confirmedFrame=!video.paused&&video.currentTime>.1;
  let lastVideoTime=video.currentTime||0;let lastFrameAt=Date.now();
  const animatedSource=fallback?.getAttribute('src');
  const posterSource=video.getAttribute('poster');
  let previousMotionPaused=document.documentElement.classList.contains('motion-paused');
  function allowed(){
    return visible&&!document.hidden&&intent!=='pause'&&(intent==='play'||(!document.documentElement.classList.contains('motion-paused')&&!reduced.matches));
  }
  function reflect(){
    const active=allowed();
    if(fallback){const source=active?animatedSource:posterSource;if(fallback.getAttribute('src')!==source)fallback.setAttribute('src',source);}
    // Only reveal video once frames advance; a stalled video must not cover the fallback.
    const playing=active&&!blocked&&!video.paused&&video.readyState>=2&&confirmedFrame;
    const fallbackPlaying=active&&fallback?.complete&&fallback.naturalWidth>0;
    motionRunning=!!(playing||fallbackPlaying);
    video.classList.toggle('is-playing',playing);
    hero.classList.toggle('hero-background-user-play',intent==='play');
    hero.classList.toggle('hero-background-paused',!active);
    control.hidden=false;
    control.textContent=translate(motionRunning?'Pause background':'Play background');
    control.setAttribute('aria-label',translate(motionRunning?'Pause background animation':'Play background animation'));
    control.setAttribute('aria-pressed',String(motionRunning));
    video.dataset.playback=playing?'playing':fallbackPlaying?'animated-fallback':blocked?'blocked':'paused';
  }
  function sync(){
    if(!allowed()){video.pause();reflect();return;}
    reflect();
    if(!video.paused||pending)return;
    pending=true;
    let result;
    try{result=video.play();}catch{pending=false;blocked=true;reflect();return;}
    Promise.resolve(result).then(()=>{
      pending=false;blocked=false;
      if(!allowed())video.pause();
      reflect();
    }).catch(()=>{pending=false;blocked=true;reflect();});
  }
  control.addEventListener('click',()=>{
    intent=motionRunning?'pause':'play';
    blocked=false;sync();
  });
  video.addEventListener('playing',()=>{blocked=false;if(!allowed())video.pause();reflect();});
  video.addEventListener('pause',()=>{confirmedFrame=false;reflect();});
  function frameAdvanced(time){
    if(Math.abs(time-lastVideoTime)>.01){confirmedFrame=true;lastFrameAt=Date.now();}
    lastVideoTime=time;reflect();
  }
  video.addEventListener('timeupdate',()=>frameAdvanced(video.currentTime));
  if(typeof video.requestVideoFrameCallback==='function'){
    const receiveFrame=(_,metadata)=>{frameAdvanced(metadata.mediaTime);video.requestVideoFrameCallback(receiveFrame);};
    video.requestVideoFrameCallback(receiveFrame);
  }
  if(fallback)fallback.addEventListener('load',reflect);
  setInterval(()=>{if(confirmedFrame&&Date.now()-lastFrameAt>1800){confirmedFrame=false;reflect();}},1000);
  video.addEventListener('loadeddata',sync);
  video.addEventListener('canplay',sync);
  video.addEventListener('error',()=>{blocked=true;reflect();});
  if('IntersectionObserver' in window){
    let observer;
    function observeHero(){
      if(observer)observer.disconnect();
      const headerHeight=Math.ceil(document.querySelector('.site-header')?.getBoundingClientRect().height||0);
      observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0,rootMargin:`-${headerHeight}px 0px 0px 0px`});
      observer.observe(hero);
    }
    observeHero();window.addEventListener('resize',observeHero);
  }else{
    window.addEventListener('scroll',()=>{const box=hero.getBoundingClientRect();visible=box.bottom>0&&box.top<innerHeight;sync();},{passive:true});
  }
  new MutationObserver(()=>{
    const paused=document.documentElement.classList.contains('motion-paused');
    if(paused!==previousMotionPaused){intent='auto';previousMotionPaused=paused;}
    sync();
  }).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',sync);
  window.addEventListener('pageshow',sync);
  window.addEventListener('render-language-change',reflect);
  // A normal page interaction lets browsers retry an initially blocked autoplay.
  window.addEventListener('pointerdown',()=>{if(intent==='auto'&&blocked)sync();},{passive:true});
  window.addEventListener('keydown',()=>{if(intent==='auto'&&blocked)sync();});
  reduced.addEventListener('change',()=>{intent='auto';sync();});
  sync();
})();
