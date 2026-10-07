import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export type PixelMotionProps = {
  pointerX:number; pointerY:number; pointerVisible:boolean; hover:number;
  dark:boolean; mobile:boolean; enabled:boolean;
};
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.25,.1,.25,1)} as const;
// These are simple square accents from the supplied identity. No content is drawn over.
const pixels=[{x:0,y:0,color:'#ad4244'},{x:2,y:0,color:'#afb2ac'},{x:3,y:1,color:'#777c75'},{x:0,y:2,color:'#afb2ac'},{x:2,y:2,color:'#afb2ac'},{x:1,y:3,color:'#777c75'},{x:3,y:3,color:'#777c75'},{x:2,y:4,color:'#252929'},{x:4,y:4,color:'#252929'}];

export const PixelMotion:React.FC<PixelMotionProps>=({pointerX,pointerY,pointerVisible,hover,dark,mobile,enabled})=>{
  const frame=useCurrentFrame();const {width,height}=useVideoConfig();
  const unit=mobile?2.5:7;const gutter=mobile?2:16;
  return <AbsoluteFill style={{pointerEvents:'none',overflow:'hidden',opacity:enabled?1:0}}>
    <div data-pixel-motif data-frame={frame} style={{position:'absolute',left:gutter,top:height*.73,width:unit*6,height:unit*7,
      translate:`0px ${interpolate(frame,[0,180,360,540,719],[-22,15,-12,22,-22],clamp)}px`}}>
      {pixels.map((pixel,index)=><div key={index} style={{position:'absolute',left:pixel.x*unit,top:pixel.y*unit,width:unit,height:unit,
        background:dark&&pixel.color==='#252929'?'#b7bcb4':pixel.color,
        opacity:pixel.color==='#ad4244'?.85:.38,
        translate:`${interpolate(frame,[0,120,240,360,480,600,719],[0,(index%3-1)*unit*1.5,0,(index%2?1:-1)*unit,0,(index%3-1)*unit,0],clamp)}px ${interpolate(frame,[0,120,240,360,480,600,719],[0,(index%2?1:-1)*unit*2,0,(index%3-1)*unit,0,(index%2?1:-1)*unit*1.5,0],clamp)}px`,
        rotate:`${interpolate(frame,[0,120,240,360,480,600,719],[0,90,0,-90,0,90,0],clamp)}deg`
      }}/>)}
    </div>
    <div data-pixel-cursor style={{position:'absolute',left:0,top:0,width:14+hover*14,height:14+hover*14,
      border:'1.5px solid #ad4244',background:hover>0.7?'rgba(173,66,68,.1)':'transparent',
      translate:`${pointerX+18}px ${pointerY+18}px`,rotate:`${interpolate(frame,[0,180,360,540,719],[0,90,0,-90,0],clamp)}deg`,
      opacity:pointerVisible&&!mobile?1:0}}>
      <div style={{position:'absolute',right:-5,bottom:-5,width:4,height:4,background:'#ad4244'}}/>
    </div>
    <div style={{position:'absolute',left:0,top:0,width:5,height:5,background:dark?'#b7bcb4':'#7d837b',
      translate:`${pointerX+41+hover*12}px ${pointerY+40+hover*12}px`,opacity:pointerVisible&&!mobile?.4:0}}/>
  </AbsoluteFill>;
};
