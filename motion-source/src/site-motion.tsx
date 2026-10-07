import React,{useEffect,useMemo,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player,type PlayerRef} from '@remotion/player';
import {PixelMotion,type PixelMotionProps} from './PixelMotion';

const MotionOverlay=()=>{
  const ref=useRef<PlayerRef>(null);
  const [size,setSize]=useState({width:window.innerWidth,height:window.innerHeight});
  const [pointer,setPointer]=useState({x:0,y:0,visible:false,hover:0});
  const [environment,setEnvironment]=useState({dark:false,mobile:innerWidth<=760||!matchMedia('(pointer:fine)').matches,enabled:!document.documentElement.classList.contains('motion-paused')});
  const inputProps=useMemo<PixelMotionProps>(()=>({pointerX:pointer.x,pointerY:pointer.y,pointerVisible:pointer.visible,hover:pointer.hover,...environment}),[pointer,environment]);

  useEffect(()=>{
    let raf=0;let stopped=false;let smoothing=false;
    let target={x:0,y:0,visible:false,hover:0};let current={x:0,y:0,visible:false,hover:0};
    const coarse=matchMedia('(pointer:fine)');
    function sync(){
      raf=0;if(stopped)return;
      const enabled=!document.documentElement.classList.contains('motion-paused');
      if(!enabled){smoothing=false;return;}
      const max=document.documentElement.scrollHeight-innerHeight;
      const frame=Math.round(Math.min(1,Math.max(0,max>0?scrollY/max:0))*719);
      if(ref.current&&ref.current.getCurrentFrame()!==frame)ref.current.seekTo(frame);
      const dark=document.querySelector('.scroll-control')?.classList.contains('is-dark')||false;
      const mobile=innerWidth<=760||!coarse.matches;
      setEnvironment(previous=>previous.dark===dark&&previous.mobile===mobile&&previous.enabled===enabled?previous:{dark,mobile,enabled});
      const distance=Math.abs(target.x-current.x)+Math.abs(target.y-current.y)+Math.abs(target.hover-current.hover)*20;
      if(smoothing){
        current={x:current.x+(target.x-current.x)*.27,y:current.y+(target.y-current.y)*.27,hover:current.hover+(target.hover-current.hover)*.22,visible:target.visible};
        setPointer({...current});
        if(distance>.2)raf=requestAnimationFrame(sync);else smoothing=false;
      }
    }
    function schedule(){if(!raf)raf=requestAnimationFrame(sync);}
    function onPointer(event:PointerEvent){
      if(event.pointerType==='touch')return;
      const element=event.target as Element;
      const interactive=!!element.closest('a,button,summary,.scroll-track');
      const visible=!element.closest('input,textarea,dialog')&&!document.documentElement.classList.contains('dialog-open');
      if(!current.visible){current.x=event.clientX;current.y=event.clientY;}
      target={x:event.clientX,y:event.clientY,visible,hover:interactive?1:0};smoothing=true;schedule();
    }
    function onLeave(){target.visible=false;current.visible=false;setPointer({...current});}
    function onResize(){setSize({width:innerWidth,height:innerHeight});schedule();}
    const classObserver=new MutationObserver(()=>{
      const enabled=!document.documentElement.classList.contains('motion-paused');
      setEnvironment(previous=>({...previous,enabled}));
      if(!enabled){if(raf)cancelAnimationFrame(raf);raf=0;smoothing=false;onLeave();}else schedule();
    });
    classObserver.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
    window.addEventListener('pointermove',onPointer,{passive:true});
    document.documentElement.addEventListener('pointerleave',onLeave);
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',onResize);window.addEventListener('render-language-change',schedule);
    coarse.addEventListener('change',onResize);schedule();
    (window as any).RenderMotion={engine:'Remotion Player',getFrame:()=>ref.current?.getCurrentFrame(),refresh:schedule};
    return()=>{stopped=true;if(raf)cancelAnimationFrame(raf);classObserver.disconnect();window.removeEventListener('pointermove',onPointer);document.documentElement.removeEventListener('pointerleave',onLeave);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',onResize);window.removeEventListener('render-language-change',schedule);coarse.removeEventListener('change',onResize);};
  },[]);

  return <Player ref={ref} component={PixelMotion} inputProps={inputProps} durationInFrames={720} fps={30}
    compositionWidth={size.width} compositionHeight={size.height} style={{width:'100%',height:'100%',pointerEvents:'none'}}
    controls={false} autoPlay={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false}
    allowFullscreen={false} numberOfSharedAudioTags={0} initialVolume={0} errorFallback={()=>null}/>;
};
const host=document.querySelector('#remotion-overlay');
if(host)createRoot(host).render(<MotionOverlay/>);
