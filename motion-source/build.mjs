import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {existsSync} from 'node:fs';
const siteIsParent=existsSync(fileURLToPath(new URL('../index.html',import.meta.url)));
const output=process.env.RENDER_MOTION_OUTPUT||fileURLToPath(new URL(siteIsParent?'../motion.bundle.js':'../render-studio-website/motion.bundle.js',import.meta.url));
await build({entryPoints:[fileURLToPath(new URL('./src/site-motion.tsx',import.meta.url))],bundle:true,minify:true,format:'iife',platform:'browser',target:['es2020'],define:{'process.env.NODE_ENV':'"production"'},outfile:output,legalComments:'linked',jsx:'automatic'});
console.log(`Remotion website bundle saved to ${output}`);
