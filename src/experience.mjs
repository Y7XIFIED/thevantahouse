import '../public/app.js';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const mm=gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)',()=>{
 if(document.querySelector('.signature-copy')){
  gsap.from('.signature-copy h1>*',{y:80,opacity:0,rotate:2,duration:1.7,stagger:.14,ease:'power4.out',delay:.15});
  gsap.from('.signature-copy .eyebrow,.signature-description,.signature-copy .button',{y:18,opacity:0,duration:1.2,stagger:.12,delay:.7,ease:'power3.out'});
  gsap.from('.atmosphere-studio',{y:45,opacity:0,duration:1.8,delay:.9,ease:'power3.out'});
  gsap.fromTo('.signature-hero .hero-image',{scale:1.07},{scale:1,duration:2.5,ease:'power2.out'});
  gsap.to('.signature-hero .hero-image',{yPercent:13,ease:'none',scrollTrigger:{trigger:'.signature-hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.from('.manifesto-text',{color:'#a9aeb2',y:25,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top 75%',end:'center 45%',scrub:1}});
  gsap.to('.brand-marquee>div',{xPercent:-20,ease:'none',scrollTrigger:{trigger:'.brand-marquee',start:'top bottom',end:'bottom top',scrub:1}});
  gsap.to('.quiet-image img',{yPercent:-14,ease:'none',scrollTrigger:{trigger:'.quiet-section',start:'top bottom',end:'bottom top',scrub:1}});
 }
 const progress=document.createElement('div');progress.className='scroll-progress';document.body.append(progress);gsap.to(progress,{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:.2}});
 return ()=>progress.remove();
});
const range=document.querySelector('#ambience');
if(range){let mood='arrive';const presets={arrive:{brightness:68,time:'18:30',copy:'A gentle welcome home.',warmth:.12},focus:{brightness:95,time:'09:00',copy:'A little more clarity. A little more focus.',warmth:0},unwind:{brightness:32,time:'21:00',copy:'Let the day soften around you.',warmth:.32}};const renderAtmosphere=()=>{const v=Number(range.value),p=presets[mood];document.querySelector('#light-value').textContent=v+'%';document.querySelector('.signature-hero .hero-image').style.filter='brightness('+(.5+v*.007)+') saturate('+(.4+v*.005)+') sepia('+p.warmth+')';};range.addEventListener('input',renderAtmosphere);document.querySelectorAll('[data-atmosphere]').forEach(button=>button.addEventListener('click',()=>{mood=button.dataset.atmosphere;const p=presets[mood];range.value=p.brightness;document.querySelectorAll('[data-atmosphere]').forEach(b=>b.setAttribute('aria-pressed',b===button));document.querySelector('#atmosphere-time').textContent=p.time;document.querySelector('#atmosphere-description').textContent=p.copy;renderAtmosphere();}));}
const spatial=document.querySelector('#home-canvas');if(spatial){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){observer.disconnect();import('./spatial.mjs').then(m=>m.createSpatial(spatial)).catch(()=>{document.querySelector('.model-instructions').style.display='none'});}},{rootMargin:'300px'});observer.observe(spatial);}
const descriptions={core:['THE CENTRE OF YOUR WORLD','Everything, in your hands.','Imagine lighting, climate and everyday routines coming together through one considered touchscreen.'],secure:['A MORE PERSONAL WELCOME','Arrive with peace of mind.','Explore the concept of fingerprint, PIN and RFID access, integrated into a restrained graphite door lock.'],glow:['LIGHT THAT UNDERSTANDS THE MOMENT','Set the light. Feel the difference.','Imagine adjustable brightness and personalised lighting scenes supporting the rhythm of your day.'],vision:['A REASSURING PERSPECTIVE','Home is never far away.','Explore the idea of remote viewing, motion notifications and night vision in a discreet camera concept.']};
document.querySelectorAll('[data-system]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.system;document.querySelectorAll('[data-system]').forEach(x=>x.setAttribute('aria-pressed',x===b));const [category,title,copy]=descriptions[id];document.querySelector('#system-category').textContent=category;document.querySelector('#system-title').textContent=title;document.querySelector('#system-copy').textContent=copy;const link=document.querySelector('#system-link');link.href='/products/'+id+'/';link.innerHTML='Discover Vanta '+id[0].toUpperCase()+id.slice(1)+' <span aria-hidden="true">↗</span>';if(!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.fromTo('.system-description',{opacity:.3,y:8},{opacity:1,y:0,duration:.5});document.dispatchEvent(new CustomEvent('vanta:system',{detail:id}));}));
