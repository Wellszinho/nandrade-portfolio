import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {join,extname,resolve,sep} from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.mjs':'text/javascript','.webp':'image/webp','.svg':'image/svg+xml','.mp4':'video/mp4','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain'};
createServer(async(req,res)=>{try{let path=resolve(join(root,decodeURIComponent(new URL(req.url,'http://localhost').pathname)));if(!path.startsWith(root+sep)&&path!==root){res.writeHead(403).end();return;}if((await stat(path)).isDirectory())path=join(path,'index.html');const data=await readFile(path);res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-cache'}).end(data);}catch{res.writeHead(404).end('Arquivo não encontrado');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
