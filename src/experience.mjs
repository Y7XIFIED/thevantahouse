import '../public/app.js';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const mm=gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)',()=>{
 if(document.querySelector('.signature-copy')){
  gsap.from('.signature-copy h1>*',{y:80,opacity:0,rotate:2,duration:1.7,stagger:.14,ease:'power4.out',delay:.15});
  gsap.from('.signature-copy .eyebrow,.signature-description,.signature-copy .button',{y:18,opacity:0,duration:1.2,stagger:.12,delay:.7,ease:'power3.out'});
  gsap.fromTo('.signature-hero .hero-image',{scale:1.07},{scale:1,duration:2.5,ease:'power2.out'});
  gsap.to('.signature-hero .hero-image',{yPercent:13,ease:'none',scrollTrigger:{trigger:'.signature-hero',start:'top top',end:'bottom top',scrub:1}});
  gsap.from('.manifesto-text',{color:'#a9aeb2',y:25,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top 75%',end:'center 45%',scrub:1}});
  gsap.to('.quiet-image img',{yPercent:-14,ease:'none',scrollTrigger:{trigger:'.quiet-section',start:'top bottom',end:'bottom top',scrub:1}});
 }
 const progress=document.createElement('div');progress.className='scroll-progress';document.body.append(progress);gsap.to(progress,{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:.2}});
 return ()=>progress.remove();
});
const spatial=document.querySelector('#home-canvas');if(spatial){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){observer.disconnect();import('./spatial.mjs').then(m=>m.createSpatial(spatial)).catch(()=>{document.querySelector('.model-instructions').style.display='none'});}},{rootMargin:'300px'});observer.observe(spatial);}
const descriptions={core:['THE CENTRE OF YOUR WORLD','Everything, in your hands.','Imagine lighting, climate and everyday routines coming together through one considered touchscreen.'],secure:['A MORE PERSONAL WELCOME','Arrive with peace of mind.','Explore the concept of fingerprint, PIN and RFID access, integrated into a restrained graphite door lock.'],glow:['LIGHT THAT UNDERSTANDS THE MOMENT','Set the light. Feel the difference.','Imagine adjustable brightness and personalised lighting scenes supporting the rhythm of your day.'],vision:['A REASSURING PERSPECTIVE','Home is never far away.','Explore the idea of remote viewing, motion notifications and night vision in a discreet camera concept.']};
document.querySelectorAll('[data-system]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.system;document.querySelectorAll('[data-system]').forEach(x=>x.setAttribute('aria-pressed',x===b));const [category,title,copy]=descriptions[id];document.querySelector('#system-category').textContent=category;document.querySelector('#system-title').textContent=title;document.querySelector('#system-copy').textContent=copy;const link=document.querySelector('#system-link');link.href='/products/'+id+'/';link.innerHTML='Discover Vanta '+id[0].toUpperCase()+id.slice(1)+' <span aria-hidden="true">↗</span>';if(!matchMedia('(prefers-reduced-motion: reduce)').matches)gsap.fromTo('.system-description',{opacity:.3,y:8},{opacity:1,y:0,duration:.5});document.dispatchEvent(new CustomEvent('vanta:system',{detail:id}));}));

const carouselHost = document.querySelector('#product-flex-carousel');
if (carouselHost) {
  const carouselObserver = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      carouselObserver.disconnect();
      import('./FlexCarousel.js').then(m => {
        const productItems = [
          {
            src: '/assets/core-dark.webp',
            alt: 'Vanta Core Control Hub',
            title: 'Vanta Core',
            subtitle: 'Centralised Control Hub · ₹24,999'
          },
          {
            src: '/assets/secure-dark.webp',
            alt: 'Vanta Secure Smart Door Lock',
            title: 'Vanta Secure',
            subtitle: 'Fingerprint & RFID Access · ₹14,999'
          },
          {
            src: '/assets/glow-dark.webp',
            alt: 'Vanta Glow Smart Lighting',
            title: 'Vanta Glow',
            subtitle: 'Adaptive Lighting System · ₹7,999'
          },
          {
            src: '/assets/vision-dark.webp',
            alt: 'Vanta Vision Security Camera',
            title: 'Vanta Vision',
            subtitle: 'Discreet Security Vision · ₹5,999'
          }
        ];
        m.mountFlexCarousel(carouselHost, {
          items: productItems,
          preset: 'liquid',
          intro: 'rise',
          cardHeight: 0.44,
          gap: 16,
          radius: 8,
          fit: 'square',
          squeeze: 0.18,
          focusOnClick: true,
          captions: true,
          captureWheel: true,
          autoplay: true,
          interval: 4.5,
          onSelect: (index, item) => {
            const productIds = ['core', 'secure', 'glow', 'vision'];
            const id = productIds[index];
            if (id) {
              const link = document.querySelector(`.editorial-product a[href="/products/${id}/"]`);
              if (link) {
                link.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }
          }
        });
      }).catch(err => {
        console.warn('FlexCarousel failed to mount:', err);
      });
    }
  }, { rootMargin: '250px' });
  carouselObserver.observe(carouselHost);
}

const asciiHost = document.querySelector('#footer-ascii-host');
if (asciiHost) {
  const asciiObserver = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      asciiObserver.disconnect();
      import('./GradientASCII.js').then(m => {
        m.mountGradientASCII(asciiHost, {
          colors: ['#000000', '#1c2228', '#3b444b', '#8f9ba3', '#dce1e5'],
          shape: 'horizon',
          characters: ' Y7XIFIED',
          cellSize: 16,
          density: 0.85,
          glyphOpacity: 0.9,
          glow: 0.25,
          speed: 0.75,
          flow: 0.45,
          softness: 0.55,
          gradientOpacity: 0.85,
          grain: 0.07,
          mouseInteraction: true,
          scrambleRadius: 0.12,
          clickEffect: 'wave'
        });
      }).catch(err => {
        console.warn('GradientASCII failed to mount:', err);
      });
    }
  }, { rootMargin: '200px' });
  asciiObserver.observe(asciiHost);
}

const techTextHost = document.querySelector('#footer-techtext-host');
if (techTextHost) {
  const techObserver = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      techObserver.disconnect();
      import('./TechText.js').then(m => {
        const isMobile = window.innerWidth < 640;
        m.mountTechText(techTextHost, {
          text: 'THE VANTA HOUSE',
          fontWeight: 600,
          fontSize: isMobile ? 26 : 42,
          letterSpacing: 0.04,
          color: '#ffffff',
          accentColor: '#555555',
          reveal: 'letter',
          dashLength: 3,
          dashGap: 2,
          specks: 8,
          intro: 'none',
          clickKick: true,
          draggable: false,
          bounce: 0.2,
          sweep: false,
          speed: 1,
          guides: false
        });
      }).catch(err => {
        console.warn('TechText failed to mount:', err);
      });
    }
  }, { rootMargin: '200px' });
  techObserver.observe(techTextHost);
}

const slingSlot = document.querySelector('#enquiry-sling-button');
if (slingSlot) {
  import('./SlingButton.js').then(m => {
    m.mountSlingButton(slingSlot, {
      size: 56,
      strokeWidth: 3,
      armAt: 48,
      maxPull: 150,
      launchSpeed: 2400,
      particles: 16,
      spread: 65,
      padColor: '#edf0f2',
      iconColor: '#192026',
      accentColor: '#ffffff',
      wellColor: '#2b343c',
      bandColor: '#5a6875',
      ariaLabel: 'Slingshot to send enquiry',
      onSend: () => {
        const enquiryForm = document.querySelector('#enquiry-form');
        if (enquiryForm) {
          enquiryForm.requestSubmit();
        }
      }
    });
  }).catch(err => {
    console.warn('SlingButton failed to mount:', err);
  });
}



