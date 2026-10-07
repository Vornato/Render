import React from 'react';
import {AbsoluteFill,interpolate,useCurrentFrame,useVideoConfig,staticFile} from 'remotion';

export type BannerLoopProps={showDot?:boolean};
// All animated values use the same 10-second period. Frame 300 equals frame 0.
export const BannerLoop:React.FC<BannerLoopProps>=({showDot=true})=>{
  const frame=useCurrentFrame();const {fps,width,height}=useVideoConfig();
  const phase=(frame/(fps*10))*Math.PI*2;
  const cell=160;
  return <AbsoluteFill
    style={{backgroundColor:'#d6e0df',overflow:'hidden'}}
    durationInFrames={300}
  >
    <div style={{position:'absolute',inset:-160,translate:`${Math.sin(phase)*22}px ${Math.cos(phase)*16}px`}}>
      {Array.from({length:10},(_,row)=>Array.from({length:15},(_,column)=>{
        const wave=(1+Math.cos(phase-(column-9)*.39+row*.19))/2;
        const value=interpolate(Math.pow(wave,1.35),[0,.23,.58,1],[15,65,158,245]);
        const red=Math.round(value*.965),green=Math.round(Math.min(249,value+5)),blue=Math.round(Math.min(250,value+8));
        return <div key={`${row}-${column}`} style={{position:'absolute',left:column*cell,top:row*cell,width:cell,height:cell,
          backgroundColor:`rgb(${red},${green},${blue})`,opacity:1}}/>;
      }))}
    </div>
    <AbsoluteFill
      style={{background:'linear-gradient(100deg,rgba(4,12,18,.14),transparent 38%,rgba(233,242,239,.1) 82%)'}}
    />
    <div style={{position:'absolute',left:0,top:250,width:1920,height:160,
      background:'linear-gradient(90deg,transparent 5%,rgba(36,54,61,.18) 25%,rgba(12,20,27,.22) 40%,transparent 62%)',
      translate:`${Math.sin(phase+.5)*320}px 0px`,opacity:interpolate((Math.sin(phase)+1)/2,[0,1],[.25,.75])}}/>
    <div style={{position:'absolute',left:0,top:730,width:1920,height:160,
      background:'linear-gradient(90deg,transparent 10%,rgba(217,236,233,.23) 35%,rgba(225,240,236,.12) 60%,transparent 90%)',
      translate:`${Math.sin(phase-.4)*220}px 0px`}}/>
    <AbsoluteFill
      style={{background:'radial-gradient(ellipse 580px 360px at 50% 50%,rgba(242,247,244,.92) 0%,rgba(231,240,235,.78) 27%,rgba(231,240,235,.25) 58%,transparent 100%)'}}
    />
    <AbsoluteFill
      style={{background:'radial-gradient(ellipse at 50% 50%,transparent 35%,rgba(8,15,21,.15) 100%)'}}
    />
    <AbsoluteFill
      style={{backgroundImage:`url(${staticFile('banner-grain.png')})`,backgroundRepeat:'repeat',opacity:.043,mixBlendMode:'soft-light'}}
    />
    {showDot&&<div style={{position:'absolute',left:width/2-12,top:height/2-12,width:24,height:24,borderRadius:'50%',background:'#ad4244'}}/>}
  </AbsoluteFill>;
};
