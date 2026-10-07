import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {PixelMotion} from './PixelMotion';
import {BannerLoop} from './BannerLoop';
import {HeroBackdrop} from './HeroBackdrop';
const Root=()=> <>
  <Composition id="RenderPixelMotion" component={PixelMotion} width={1440} height={900} fps={30} durationInFrames={720}
    defaultProps={{pointerX:750,pointerY:350,pointerVisible:true,hover:0,dark:false,mobile:false,enabled:true}}/>
  <Composition id="RenderBanner1080" component={BannerLoop} width={1920} height={1080} fps={30} durationInFrames={300}
    defaultProps={{showDot:true}}/>
  <Composition id="RenderHeroBackdrop" component={HeroBackdrop} width={1920} height={1080} fps={30} durationInFrames={360}/>
</>;
registerRoot(Root);
