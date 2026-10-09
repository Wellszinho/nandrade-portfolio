import {projects,photos,profile} from './content.mjs';

const $=selector=>document.querySelector(selector);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.5"/></svg>';
const image=(src,alt)=>`<img src="assets/${esc(src)}.webp" alt="${esc(alt)}">`;
const dialog=$('#project-dialog');
let previousFocus;

document.body.classList.add('js-enabled');
const menu=$('.menu-toggle');
const navigation=$('#navigation');
if(menu&&navigation){
 menu.hidden=false;
 const closeMenu=(restore=false)=>{menu.setAttribute('aria-expanded','false');navigation.classList.remove('is-open');if(restore)menu.focus();};
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);});
 navigation.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true')closeMenu(true);});
 document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
 matchMedia('(min-width:768px)').addEventListener('change',()=>closeMenu());
}

const filters=$('.filters');
if(filters){filters.hidden=false;filters.addEventListener('click',e=>{const button=e.target.closest('[data-filter]');if(!button)return;const value=button.dataset.filter;filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.archive-grid .project').forEach(p=>{p.hidden=value!=='todos'&&p.dataset.category!==value;if(!p.hidden)count++;});$('#filter-status').textContent=`${count} projetos exibidos.`;});}

function showDialog(content){
 if(!dialog)return;
 if(!dialog.open){previousFocus=document.activeElement;dialog.showModal();document.body.classList.add('modal-open');}
 $('#dialog-content').innerHTML=content;
 dialog.scrollTop=0;
 $('.dialog-close').focus();
}
function projectContent(project){
 const media=`<div class="dialog-media ${project.portrait?'vertical':''}">${image(project.image,'Capa de '+project.title)}${project.youtube?`<button class="button media-load" data-youtube="${esc(project.youtube)}">Carregar vídeo ${arrow}</button>`:''}</div>`;
 const related=projects.filter(p=>p.filter===project.filter&&p.id!==project.id).slice(0,2);
 return `<p class="eyebrow">${esc(project.category)}${project.year?' · '+esc(project.year):''}</p><h2 id="dialog-title">${esc(project.title)}</h2>${media}<a class="text-link external-alternative" href="${esc(project.url)}" target="_blank" rel="noopener noreferrer">${esc(project.linkLabel)} ${arrow}</a><div class="case-copy"><div><h3>O projeto</h3><p>${esc(project.description)}</p></div><div><h3>Minha participação</h3><p>${esc(project.participation)}</p>${project.credit?`<p class="credit">${esc(project.credit)}</p>`:''}${project.date?`<p class="eyebrow">${esc(project.date)}</p>`:''}</div></div><div class="case-related"><h3>Outros trabalhos</h3>${related.map(p=>`<a href="cases/${p.id}.html" data-project="${p.id}">${esc(p.title)} ${arrow}</a>`).join('')}</div><div class="case-contact"><a class="button" href="mailto:${esc(profile.email)}?subject=${encodeURIComponent('Projeto audiovisual — referência: '+project.title)}">Vamos conversar ${arrow}</a></div>`;
}
if(dialog){
 document.querySelectorAll('[data-reel]').forEach(b=>b.hidden=false);
 document.addEventListener('click',e=>{
  const projectLink=e.target.closest('[data-project]');
  if(projectLink&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&e.button===0){const p=projects.find(p=>p.id===projectLink.dataset.project);if(p){e.preventDefault();showDialog(projectContent(p));}return;}
  const photoLink=e.target.closest('[data-photo]');
  if(photoLink&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&e.button===0){const p=photos[Number(photoLink.dataset.photo)];if(p){e.preventDefault();showDialog(`<p class="eyebrow">Fotografia</p><h2 id="dialog-title">${esc(p.title)}</h2><div class="dialog-media photo-media">${image(p.image,p.alt)}</div><a class="text-link" href="${profile.instagram}" target="_blank" rel="noopener noreferrer">Mais fotografias no Instagram ${arrow}</a>`);}return;}
  if(e.target.closest('[data-reel]')){showDialog(`<p class="eyebrow">Imagem, som e movimento</p><h2 id="dialog-title">Portfolio Nandrade 2024</h2><div class="dialog-media"><video controls playsinline preload="none" poster="assets/${profile.reelPoster}.webp" aria-label="Portfolio Nandrade 2024"><source src="${profile.reel}" type="video/mp4"><p>Seu navegador não suporta este vídeo.</p></video></div><p class="media-status" role="status"></p><a class="text-link" href="${profile.reel}" target="_blank" rel="noopener noreferrer">Abrir o vídeo em outra aba ${arrow}</a>`);const video=dialog.querySelector('video');video.addEventListener('error',()=>{dialog.querySelector('.media-status').textContent='O vídeo não pôde ser carregado. Use o link abaixo para abrir o arquivo.'});}
 });
 $('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(v=>v.pause());$('#dialog-content').replaceChildren();document.body.classList.remove('modal-open');if(previousFocus?.isConnected)previousFocus.focus();});
}

document.addEventListener('click',e=>{
 const button=e.target.closest('[data-youtube]');if(!button)return;
 const iframe=document.createElement('iframe');
 iframe.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(button.dataset.youtube)}?rel=0`;
 iframe.title='Vídeo: '+($('#dialog-title')?.textContent||$('h1')?.textContent||'projeto');iframe.allow='encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';
 const holder=button.parentElement;holder.replaceChildren(iframe);iframe.focus();
});

if('IntersectionObserver' in window){
 const navLinks=[...document.querySelectorAll('#navigation a')];
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-20% 0px -60% 0px',threshold:0});
 ['trabalhos','servicos','sobre','contato'].forEach(id=>{const el=document.getElementById(id);if(el)observer.observe(el);});
 if(!matchMedia('(prefers-reduced-motion:reduce)').matches){const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal-in');reveal.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.section-heading,.signature>div,.about-grid,.process-list').forEach(e=>reveal.observe(e));}
}

document.addEventListener('error',e=>{const img=e.target;if(img.tagName!=='IMG'||img.dataset.fallback)return;img.dataset.fallback='true';img.src=new URL('assets/image-fallback.svg',import.meta.url).href;},true);
