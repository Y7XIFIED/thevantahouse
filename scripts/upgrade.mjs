import {readFile,writeFile} from 'node:fs/promises';
let s=await readFile('src/render.mjs','utf8');
if(s.includes('function home(){')){const a=s.indexOf('function home(){'),b=s.indexOf('function catalog()',a);s=s.slice(0,a)+s.slice(b);s="import {home} from './home.mjs';\n"+s;}
s=s.replace('<link rel="stylesheet" href="/styles.css">','<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/signature.css">');
s=s.replace('src="/app.js"','src="/experience.js"');
await writeFile('src/render.mjs',s);
