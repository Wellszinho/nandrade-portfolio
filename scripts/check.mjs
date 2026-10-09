import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {projects,photos,profile} from '../src/content.mjs';
const html=await readFile('dist/index.html','utf8');
assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
assert.ok(!html.includes('{{'));assert.ok(!/href="#"/.test(html));assert.ok(html.includes('lang="pt-BR"'));
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);
for(const anchor of [...html.matchAll(/href="#([^"]+)"/g)])assert.ok(ids.includes(anchor[1]),`Missing section ${anchor[1]}`);
for(const match of [...html.matchAll(/(?:src|href)="([^"?#]+)"/g)]){if(/^(https?:|mailto:)/.test(match[1]))continue;await stat('dist/'+match[1]);}
for(const p of projects){await stat(`dist/assets/${p.image}.webp`);const page=await readFile(`dist/cases/${p.id}.html`,'utf8');assert.ok(page.includes(p.title.replaceAll('&','&amp;')));assert.ok(page.includes('Minha participação'));}
for(const p of photos)await stat(`dist/assets/${p.image}.webp`);
assert.match(profile.phone,/^55\d{11}$/);
console.log('PASS: sections, local links, assets, metadata, all case pages and confirmed contact format.');
