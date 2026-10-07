import React from 'react';
import {AbsoluteFill,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';

export const HeroBackdrop:React.FC=()=>{
  const frame=useCurrentFrame();const {fps}=useVideoConfig();
  const phase=(frame/(fps*12))*Math.PI*2;
  const cell=180;
  return <AbsoluteFill style={{background:'#56636a',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:-180,filter:'blur(42px)',scale:1.08,translate:`${Math.sin(phase)*120}px ${Math.cos(phase)*70}px`}}>
      {Array.from({length:9},(_,row)=>Array.from({length:14},(_,column)=>{
        const wave=(1+Math.cos(phase-column*.45+row*.68))/2;
        const value=Math.round(30+wave*208);
        return <div key={`${row}-${column}`} style={{position:'absolute',left:column*cell,top:row*cell,width:cell,height:cell,
          background:`rgb(${Math.max(0,value-8)},${value+2},${value+6})`,opacity:1}}/>;
      }))}
    </div>
    <div style={{position:'absolute',left:1130,top:100,width:530,height:420,filter:'blur(84px)',
      translate:`${Math.sin(phase)*190}px ${Math.cos(phase)*70}px`,rotate:`${Math.sin(phase)*8}deg`,
      background:'rgba(20,32,40,.3)'}}/>
    <div style={{position:'absolute',left:150,top:660,width:490,height:320,filter:'blur(95px)',
      translate:`${Math.sin(phase+1.2)*155}px ${Math.cos(phase+1.2)*64}px`,rotate:`${Math.sin(phase+1.2)*6}deg`,background:'rgba(24,38,46,.22)'}}/>
    <div style={{position:'absolute',left:820,top:300,width:480,height:590,filter:'blur(105px)',
      translate:`${Math.sin(phase+2.3)*150}px ${Math.cos(phase+2.3)*90}px`,background:'rgba(245,250,247,.2)'}}/>
    <AbsoluteFill style={{backgroundImage:`url(${staticFile('banner-grain.png')})`,backgroundRepeat:'repeat',opacity:.022,mixBlendMode:'soft-light'}}/>
    <div style={{position:'absolute',left:948,top:528,width:24,height:24,borderRadius:'50%',background:'#ad4244'}}/>
  </AbsoluteFill>;
};
