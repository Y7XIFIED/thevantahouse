import {readFile,writeFile} from 'node:fs/promises';

const image = async name => {
  const buf = await readFile('docs/screenshots/' + name);
  const ext = name.endsWith('.png') ? 'image/png' : 'image/jpeg';
  return `data:${ext};base64,` + buf.toString('base64');
};

const [home, collection, success, mobile, product, living, qrcode] = await Promise.all([
  '01-home-desktop.jpg',
  '02-collection.jpg',
  '03-form-success.jpg',
  '04-home-mobile.jpg',
  '05-product.jpg',
  '06-smart-living.jpg',
  'qrcode.png'
].map(image));

const slides = [
  [
    'WEBSITE DEVELOPMENT OVERVIEW',
    'A Digital Showroom<br>for Intelligent Living.',
    'The Vanta House · Digital Marketing · Part 3',
    `<img src="${home}" alt="Actual homepage screenshot">`,
    [
      'Premium smart home technology academic concept for modern living in India',
      'Purpose: Bridge physical architectural beauty with ambient, intuitive control',
      'Core objectives: Brand credibility, balanced product showcase, and lead generation',
      'Designed & developed by Y7XIFIED (Full-stack architecture & SEO)'
    ]
  ],
  [
    'WEBSITE STRUCTURE',
    'Information Architecture<br>& User Journey.',
    'One clear journey: Discover ➔ Explore ➔ Compare ➔ Enquire',
    `<div class="journey">
      <div><b>01</b> HOME (/) — Cinematic Hero & 3D Residence</div>
      <div><b>02</b> PRODUCTS (/products/) — 4-Product Collection Showcase</div>
      <div><b>03</b> SMART LIVING (/smart-living/) — Daily Automation Scenarios</div>
      <div><b>04</b> PHILOSOPHY (/philosophy/) — Restraint, Purpose, Human Focus</div>
      <div><b>05</b> CONTACT (/contact/) — Lead Acquisition & Consultation Form</div>
    </div>`,
    [
      'Five core pillar destinations plus four dedicated product routes',
      'Philosophy builds brand context; Smart Living illustrates daily routines',
      'Every product card links directly to prefilled consultation enquiry'
    ]
  ],
  [
    'HOMEPAGE DESIGN',
    'An Identity<br>You Can Feel.',
    'Titanium Minimalism: Pitch-black backdrop with fluid micro-interactions.',
    `<img src="${home}" alt="Actual homepage screenshot">`,
    [
      'AMOLED pitch-black (#000000) canvas with Google Sans Flex typography',
      'Cinematic architectural artwork and dual call-to-action buttons',
      'Kinetic Marquee: CONSIDERED DESIGN ✳ INTUITIVE LIVING ✳ QUIET INTELLIGENCE',
      'Interactive 3D connected residence model powered by Three.js WebGL'
    ]
  ],
  [
    'PRODUCT SHOWCASE',
    'Four Concepts.<br>One Design Language.',
    'Core · Secure · Glow · Vision',
    `<img src="${product}" alt="Actual Core detail page">`,
    [
      'Vanta Core (₹24,999): Centralised touchscreen automation hub',
      'Vanta Secure (₹14,999): Biometric fingerprint & RFID digital lock',
      'Vanta Glow (₹7,999): Circadian rhythm adaptive ceiling lighting',
      'Vanta Vision (₹5,999): Discreet AI security camera with privacy shutter',
      'Balanced 4-column desktop showcase with smooth squircle image frames'
    ]
  ],
  [
    'HTML, CSS & JAVASCRIPT',
    'Frontend Architecture<br>& Clean Code Stack.',
    'Semantic HTML5, CSS custom properties, and modern ES6+ modules.',
    `<pre>/* 1. Balanced 4-Column Showcase */
.catalog .product-grid {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 20px !important;
}

/* 2. Squircle Geometry */
.product-visual img {
  width: clamp(120px, 12vw, 160px) !important;
  aspect-ratio: 1 / 1 !important;
  border-radius: 20px !important;
}</pre>`,
    [
      'Prerendered semantic HTML templates compiled at build time for speed',
      'Comprehensive CSS design tokens: --ink, --squircle-md, and dark surfaces',
      'Vanilla ES6+ client modules: Category filters, scene switching, dialogs',
      'Zero bloated dependencies: 100% bespoke, ultra-fast delivery'
    ]
  ],
  [
    'RESPONSIVE DESIGN',
    'Flawless Flow<br>on Every Screen.',
    'Ten routes verified across 375px, 768px, and 1440px viewports.',
    `<div class="devices"><img src="${mobile}" alt="Actual mobile homepage"><img src="${home}" alt="Actual desktop homepage"></div>`,
    [
      'Mobile (375px - 480px): Single-column reflow and full-screen menu drawer',
      'Tablet (768px - 1024px): 2-column adaptive layout with fluid typography',
      'Desktop (1280px - 1440px+): 4-column luxury showcase and 3D canvas',
      'Zero horizontal overflow detected across 30 route/viewport tests'
    ]
  ],
  [
    'SEO KEYWORD RESEARCH',
    'Matching Intent<br>to High-Value Pages.',
    'Strategic keyword architecture mapped across consumer search funnels.',
    `<div class="keyword-map">
      <p><b>DISCOVERY / BRAND</b>"Premium smart home solutions", "Smart home automation India"</p>
      <p><b>COMMERCIAL / CATEGORY</b>"Smart home devices India", "Luxury smart home ecosystem"</p>
      <p><b>TRANSACTIONAL / PRODUCT</b>"Smart home control hub India", "Biometric smart door lock"</p>
      <p><b>CONVERSION / LEAD</b>"Smart home consultation India", "Book smart home demo"</p>
    </div>`,
    [
      'Homepage and Collection capture broad high-volume domestic searches',
      'Dedicated product routes answer specific feature & hardware queries',
      'Copy written in natural, engaging tone with semantic heading hierarchy'
    ]
  ],
  [
    'ON-PAGE & TECHNICAL SEO',
    'Evidence in Source.<br>Verified Standards.',
    'Handcrafted metadata, canonical architecture, and structured data.',
    `<pre>&lt;title&gt;The Vanta House | Premium
Smart Home Technology India&lt;/title&gt;

&lt;meta name="description"
 content="Explore premium smart home
 technology by The Vanta House..."&gt;

&lt;link rel="canonical" href="…"&gt;
robots.txt   /   sitemap.xml
WebSite JSON-LD   /   Open Graph</pre>`,
    [
      'Unique meta title and description handcrafted for each of the 10 routes',
      'Single <h1> per page with strict <h2> and <h3> topic taxonomy',
      'Optimised WebP visuals with descriptive alt tags and explicit dimensions',
      'Schema.org WebSite JSON-LD structured data and canonical links'
    ]
  ],
  [
    'CUSTOMER ENQUIRY FORM',
    'A Real Request.<br>Verified Lead Storage.',
    'Multi-tier validation with client regex, honeypot, and idempotency.',
    `<img src="${success}" alt="Actual successful test enquiry confirmation">`,
    [
      'Fields: Full Name, Email, Indian Phone (+91 validation), City, Product, Date',
      'Anti-bot defense: Hidden honeypot trap and minimum fill-time gating',
      'Duplicate-safe idempotency: Retries return existing confirmation tokens',
      'Verified persistence: Confirmed stored with unique enquiry reference'
    ]
  ],
  [
    'TESTING & CONCLUSION',
    'Quality Assured.<br>Deployed Live.',
    'Automated test suite passed 5/5, live deployment, and scannable QR code.',
    `<div class="conclusion-box">
      <img src="${qrcode}" alt="Live Website QR Code" class="qr-img">
      <div class="qr-info">
        <strong>SCAN TO TEST LIVE</strong>
        <p>https://thevantahouse.vercel.app</p>
        <small>GitHub: github.com/Y7XIFIED/thevantahouse</small>
      </div>
    </div>`,
    [
      '5 / 5 automated backend unit & integration tests passing',
      '30 route/viewport cross-browser checks without layout shifts',
      'Live website deployed on Vercel with high-contrast mobile QR access',
      'Designed & developed by Y7XIFIED'
    ]
  ]
];

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>The Vanta House — Titanium Minimalism 10-Slide Deck</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #000000;
      color: #ffffff;
      font-family: 'Google Sans Flex', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      overflow: hidden;
    }
    .deck {
      width: 100vw;
      height: 100vh;
      display: grid;
      place-items: center;
      background: #000000;
    }
    .slide {
      display: none;
      background: #080a0c;
      border: 1px solid #1f252b;
      border-radius: 12px;
      width: min(94vw, 160vh);
      height: min(58.75vw, 92vh);
      padding: 3.5vw 4.2vw;
      position: relative;
    }
    .slide.active {
      display: grid;
      grid-template-columns: 1fr 1.05fr;
      gap: 3.5vw;
      align-items: center;
    }
    .kicker {
      font-size: clamp(8px, 0.85vw, 12px);
      letter-spacing: .22em;
      color: #8e98a2;
      font-weight: 700;
      margin: 0 0 1vw;
    }
    h1 {
      font-weight: 400;
      font-size: clamp(24px, 3.2vw, 48px);
      line-height: 1.08;
      letter-spacing: -0.04em;
      margin: 0 0 1vw;
      color: #ffffff;
    }
    p.subtitle {
      color: #a4adb5;
      font-size: clamp(12px, 1.1vw, 17px);
      line-height: 1.5;
      margin: 0 0 1.5vw;
    }
    ul {
      padding-left: 18px;
      margin: 0;
    }
    li {
      font-size: clamp(11px, 0.95vw, 15px);
      line-height: 1.6;
      margin: 8px 0;
      color: #c2c9d0;
    }
    .visual {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .visual img {
      width: 100%;
      max-height: 52vh;
      object-fit: contain;
      border-radius: 12px;
      border: 1px solid #242b32;
      box-shadow: 0 16px 40px rgba(0,0,0,0.8);
    }
    .footer {
      position: absolute;
      left: 4.2vw;
      right: 4.2vw;
      bottom: 1.8vw;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #1a2026;
      padding-top: 10px;
      font-size: 9.5px;
      letter-spacing: .14em;
      color: #717b85;
    }
    .footer strong {
      color: #a4adb5;
    }
    .nav {
      position: fixed;
      right: 24px;
      bottom: 18px;
      display: flex;
      gap: 10px;
      z-index: 50;
    }
    .nav button {
      background: #111519;
      color: #ffffff;
      border: 1px solid #2e3740;
      border-radius: 8px;
      min-width: 44px;
      min-height: 38px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
    }
    .nav button:hover:not(:disabled) {
      background: #ffffff;
      color: #000000;
    }
    .nav button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    pre {
      font-size: clamp(10px, 0.88vw, 14px);
      line-height: 1.65;
      background: #040506;
      border: 1px solid #222930;
      border-radius: 10px;
      color: #dce0e2;
      padding: 1.8vw;
      white-space: pre-wrap;
      font-family: 'Courier New', monospace;
      width: 100%;
    }
    .journey {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      background: #040506;
      padding: 1.8vw;
      border: 1px solid #222930;
      border-radius: 10px;
    }
    .journey div {
      font-size: clamp(11px, 0.95vw, 14px);
      color: #a4adb5;
      padding-bottom: 8px;
      border-bottom: 1px solid #171d22;
    }
    .journey b {
      color: #ffffff;
      margin-right: 8px;
    }
    .devices {
      display: flex;
      gap: 14px;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .devices img:first-child {
      width: 27%;
      max-height: 48vh;
      object-fit: contain;
      border-radius: 12px;
    }
    .devices img:last-child {
      width: 71%;
      max-height: 48vh;
      object-fit: contain;
      border-radius: 12px;
    }
    .keyword-map {
      width: 100%;
      background: #040506;
      border: 1px solid #222930;
      border-radius: 10px;
      padding: 1.2vw 1.6vw;
    }
    .keyword-map p {
      padding: 10px 0;
      margin: 0;
      border-bottom: 1px solid #171d22;
      font-size: clamp(10px, 0.9vw, 13px);
      color: #c2c9d0;
    }
    .keyword-map p:last-child { border-bottom: none; }
    .keyword-map b {
      display: block;
      font-size: 8.5px;
      letter-spacing: .2em;
      color: #8e98a2;
      margin-bottom: 4px;
    }
    .conclusion-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #040506;
      border: 1px solid #222930;
      border-radius: 12px;
      padding: 2vw;
      width: 100%;
      text-align: center;
    }
    .qr-img {
      width: 170px !important;
      height: 170px !important;
      max-height: 170px !important;
      border-radius: 10px;
      border: 2px solid #ffffff !important;
      margin-bottom: 16px;
    }
    .qr-info strong {
      display: block;
      font-size: 11px;
      letter-spacing: .16em;
      color: #ffffff;
      margin-bottom: 6px;
    }
    .qr-info p {
      margin: 0 0 6px;
      font-size: 13px;
      color: #a4adb5;
      font-family: 'Courier New', monospace;
    }
    .qr-info small {
      color: #68727c;
      font-size: 10px;
      font-family: 'Courier New', monospace;
    }
    @media print {
      @page { size: A4 landscape; margin: 0; }
      body { background: #000000; }
      .deck { display: block; height: auto; }
      .slide, .slide.active {
        display: grid;
        width: 297mm;
        height: 210mm;
        grid-template-columns: 1fr 1.05fr;
        break-after: page;
        padding: 15mm;
        gap: 12mm;
        background: #000000;
        border: none;
      }
      .nav { display: none; }
    }
  </style>
</head>
<body>
  <main class="deck">
    ${slides.map(([k,t,s,v,bullets],i) => `
      <section class="slide ${i===0?'active':''}" aria-label="Slide ${i+1}">
        <div>
          <p class="kicker">PART 03 / ${k}</p>
          <h1>${t}</h1>
          <p class="subtitle">${s}</p>
          <ul>
            ${bullets.map(b => '<li>' + b + '</li>').join('')}
          </ul>
        </div>
        <div class="visual">
          ${v}
        </div>
        <div class="footer">
          <span>THE VANTA HOUSE · DIGITAL MARKETING</span>
          <strong>DESIGNED & DEVELOPED BY Y7XIFIED</strong>
          <span>SLIDE ${String(i+1).padStart(2,'0')} / 10</span>
        </div>
      </section>
    `).join('')}
  </main>

  <nav class="nav" aria-label="Slide navigation">
    <button id="prev" aria-label="Previous slide">←</button>
    <button id="next" aria-label="Next slide">→</button>
  </nav>

  <script>
    let n = 0;
    const slides = [...document.querySelectorAll('.slide')];
    function show(i) {
      n = Math.max(0, Math.min(9, i));
      slides.forEach((s, j) => s.classList.toggle('active', n === j));
      document.getElementById('prev').disabled = n === 0;
      document.getElementById('next').disabled = n === 9;
    }
    document.getElementById('prev').onclick = () => show(n - 1);
    document.getElementById('next').onclick = () => show(n + 1);
    document.addEventListener('keydown', e => {
      if (['ArrowRight', 'ArrowLeft', ' '].includes(e.key)) {
        e.preventDefault();
        show(n + (e.key === 'ArrowLeft' ? -1 : 1));
      }
    });
    show(0);
  </script>
</body>
</html>`;

await writeFile('docs/presentation.html', html);
console.log('Titanium Minimalism 10-slide HTML presentation updated successfully at docs/presentation.html');
