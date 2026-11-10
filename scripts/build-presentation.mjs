import pptxgen from 'pptxgenjs';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const pres = new pptxgen();

// Set 16:9 Widescreen layout
pres.layout = 'LAYOUT_16x9';

// Titanium Minimalism Theme Palette
const THEME = {
  bg: '000000',          // AMOLED Pitch Black
  surface: '0D1115',     // Titanium Graphite Card
  surfaceAlt: '14191F',  // Elevated Card Surface
  border: '242B32',      // Subtle Graphite Border
  borderLight: '38434E', // Active Highlight Border
  textPrimary: 'FFFFFF', // Pure Crisp White
  textSecondary: 'A4ADB5', // Titanium Silver
  textMuted: '68727C',   // Muted Slate
  accent: 'FFFFFF',      // High-Contrast White
  accentSubtle: '1E252D', // Badge Fill
  badgeText: 'CBD3DA',   // Badge Typography
  codeBg: '07090C',      // Monospace Surface
  codeText: 'E2E6EA',    // Code Text
  success: '4ADE80'      // Subtle Success Mint
};

// Helper to add consistent slide chrome (Header, Kicker, Footer)
function addChrome(slide, kicker, title, subtitle, slideNum) {
  // Pitch black slide background
  slide.background = { color: THEME.bg };

  // Subtle ambient border / gridline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 0.4,
    w: 12.333,
    h: 6.7,
    fill: { color: THEME.bg },
    line: { color: THEME.border, width: 1 }
  });

  // Top Kicker Badge
  slide.addText(`PART 03 / ${kicker.toUpperCase()}`, {
    x: 0.8,
    y: 0.65,
    w: 5.5,
    h: 0.3,
    fontSize: 9.5,
    fontFace: 'Arial',
    bold: true,
    color: THEME.badgeText,
    charSpacing: 2
  });

  // Slide Headline
  slide.addText(title, {
    x: 0.8,
    y: 0.95,
    w: 11.5,
    h: 0.55,
    fontSize: 22,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textPrimary
  });

  // Slide Subtitle
  slide.addText(subtitle, {
    x: 0.8,
    y: 1.5,
    w: 11.5,
    h: 0.35,
    fontSize: 12,
    fontFace: 'Arial',
    color: THEME.textSecondary
  });

  // Footer Rule
  slide.addShape(pres.ShapeType.line, {
    x: 0.8,
    y: 6.6,
    w: 11.733,
    h: 0,
    line: { color: THEME.border, width: 1 }
  });

  // Footer Left
  slide.addText('THE VANTA HOUSE · DIGITAL MARKETING ASSIGNMENT', {
    x: 0.8,
    y: 6.68,
    w: 4.5,
    h: 0.3,
    fontSize: 8.5,
    fontFace: 'Arial',
    color: THEME.textMuted,
    charSpacing: 1.5
  });

  // Footer Center: Developer Attribution Rule
  slide.addText('DESIGNED & DEVELOPED BY Y7XIFIED', {
    x: 5.0,
    y: 6.68,
    w: 4.0,
    h: 0.3,
    fontSize: 8.5,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textSecondary,
    align: 'center',
    charSpacing: 1.5
  });

  // Footer Right: Slide Number
  slide.addText(`${String(slideNum).padStart(2, '0')} / 10`, {
    x: 10.5,
    y: 6.68,
    w: 2.0,
    h: 0.3,
    fontSize: 8.5,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textSecondary,
    align: 'right'
  });
}

// --------------------------------------------------------------------------
// SLIDE 1: Website Development Overview
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'WEBSITE DEVELOPMENT OVERVIEW',
    'A Digital Showroom for Intelligent Living in India',
    'Introduction, Core Brand Purpose and Strategic Project Objectives',
    1
  );

  // Left Content Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.95,
    w: 5.7,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  slide.addText('PROJECT CONTEXT & OBJECTIVES', {
    x: 1.1,
    y: 2.15,
    w: 5.1,
    h: 0.3,
    fontSize: 11,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textPrimary,
    charSpacing: 1.5
  });

  const s1Bullets = [
    {
      title: 'Brand Introduction:',
      desc: 'The Vanta House is an Indian premium smart-home technology academic concept, blending architectural minimalism with ambient intelligence.'
    },
    {
      title: 'Core Purpose:',
      desc: 'Create an ultra-refined, pitch-black digital presence that elevates smart living from cluttered gadgets into timeless architectural objects.'
    },
    {
      title: 'Key Objectives:',
      desc: 'Establish brand credibility, showcase 4 proprietary titanium devices, maintain zero-friction responsive browsing, and generate high-intent consultation leads.'
    },
    {
      title: 'Team Role & Attribution:',
      desc: 'Designed & developed by Y7XIFIED, encompassing full-stack web development, SEO keyword mapping, on-page optimization, and lead handling.'
    }
  ];

  let yPos = 2.55;
  s1Bullets.forEach(b => {
    slide.addText(
      [
        { text: `${b.title} `, options: { bold: true, color: THEME.textPrimary } },
        { text: b.desc, options: { color: THEME.textSecondary } }
      ],
      {
        x: 1.1,
        y: yPos,
        w: 5.1,
        h: 0.85,
        fontSize: 10.5,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.25
      }
    );
    yPos += 0.92;
  });

  // Right Visual Card: Homepage Desktop Capture
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.75,
    y: 1.95,
    w: 5.78,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  slide.addImage({
    path: resolve('docs/screenshots/01-home-desktop.jpg'),
    x: 6.9,
    y: 2.1,
    w: 5.48,
    h: 3.55
  });

  slide.addText('FIGURE 1.1: Live Homepage Hero Interface (Pitch-Black Aesthetic)', {
    x: 6.9,
    y: 5.85,
    w: 5.48,
    h: 0.35,
    fontSize: 9,
    fontFace: 'Arial',
    color: THEME.textMuted,
    align: 'center'
  });
}

// --------------------------------------------------------------------------
// SLIDE 2: Website Structure
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'WEBSITE STRUCTURE',
    'Information Architecture & Navigation Flow',
    'Comprehensive Sitemap: Five Core Destinations and Ten Pre-Rendered Routes',
    2
  );

  const pages = [
    {
      num: '01',
      title: 'Home Page (/)',
      role: 'Brand Foundation',
      desc: 'Cinematic hero, brand manifesto, interactive 3D residence model, spatial gallery, and conversion gateway.'
    },
    {
      num: '02',
      title: 'Collection (/products/)',
      role: 'Hardware Showcase',
      desc: 'Filterable catalog featuring all four titanium concepts, clear pricing, specifications, and direct enquiry CTAs.'
    },
    {
      num: '03',
      title: 'Smart Living (/smart-living/)',
      role: 'Experiential Context',
      desc: 'Time-sequenced domestic scenarios (07:00, 09:00, 14:00, 18:30) demonstrating subtle automation routines.'
    },
    {
      num: '04',
      title: 'Philosophy (/philosophy/)',
      role: 'Brand Authority',
      desc: 'Articulating three pillars: Design with Restraint, Intelligence with Purpose, and People at the Centre.'
    },
    {
      num: '05',
      title: 'Contact (/contact/)',
      role: 'Lead Acquisition',
      desc: 'Interactive consultation request form with multi-tier input validation and real-time verification.'
    }
  ];

  let cardX = 0.8;
  pages.forEach(p => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX,
      y: 1.95,
      w: 2.25,
      h: 3.3,
      rectRadius: 0.12,
      fill: { color: THEME.surface },
      line: { color: THEME.border, width: 1 }
    });

    slide.addText(p.num, {
      x: cardX + 0.15,
      y: 2.1,
      w: 1.95,
      h: 0.35,
      fontSize: 18,
      fontFace: 'Arial',
      bold: true,
      color: THEME.borderLight
    });

    slide.addText(p.title, {
      x: cardX + 0.15,
      y: 2.5,
      w: 1.95,
      h: 0.45,
      fontSize: 11,
      fontFace: 'Arial',
      bold: true,
      color: THEME.textPrimary
    });

    slide.addShape(pres.ShapeType.rect, {
      x: cardX + 0.15,
      y: 3.0,
      w: 1.95,
      h: 0.22,
      fill: { color: THEME.accentSubtle },
      line: { color: THEME.border, width: 0.5 }
    });

    slide.addText(p.role.toUpperCase(), {
      x: cardX + 0.15,
      y: 3.02,
      w: 1.95,
      h: 0.18,
      fontSize: 7.5,
      fontFace: 'Arial',
      bold: true,
      color: THEME.badgeText,
      align: 'center'
    });

    slide.addText(p.desc, {
      x: cardX + 0.15,
      y: 3.3,
      w: 1.95,
      h: 1.8,
      fontSize: 9.5,
      fontFace: 'Arial',
      color: THEME.textSecondary,
      lineSpacingMultiple: 1.2
    });

    cardX += 2.37;
  });

  // User Journey Flow Banner at Bottom
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 5.4,
    w: 11.733,
    h: 1.0,
    rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt },
    line: { color: THEME.borderLight, width: 1 }
  });

  slide.addText(
    [
      { text: 'USER CONVERSION FUNNEL:  ', options: { bold: true, color: THEME.textPrimary } },
      { text: 'AWARENESS (Home) ', options: { color: THEME.textSecondary } },
      { text: '➔  INTEREST (Smart Living) ', options: { color: THEME.textSecondary } },
      { text: '➔  CONSIDERATION (Collection & Product Details) ', options: { color: THEME.textSecondary } },
      { text: '➔  CONVERSION (Consultation Enquiry)', options: { bold: true, color: THEME.textPrimary } }
    ],
    {
      x: 1.0,
      y: 5.65,
      w: 11.3,
      h: 0.5,
      fontSize: 10,
      fontFace: 'Arial',
      align: 'center'
    }
  );
}

// --------------------------------------------------------------------------
// SLIDE 3: Homepage Design
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'HOMEPAGE DESIGN',
    'Homepage Layout, Branding & High-Intent CTA System',
    'Restrained Luxury Aesthetic Combining Pitch-Black Canvas with Smooth Micro-Interactions',
    3
  );

  // Left Content Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.95,
    w: 5.7,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  const s3Points = [
    {
      title: 'Titanium Minimalism Styling:',
      desc: 'Crafted with a pitch-black background (#000000), deep titanium graphite accents, and high-contrast typography in Google Sans Flex.'
    },
    {
      title: 'Hero Architecture & Layout:',
      desc: 'Features cinematic architecture, an unhurried editorial headline, and dual call-to-actions ("Enter the collection" and "Explore the house").'
    },
    {
      title: 'Kinetic Brand Marquee:',
      desc: 'A continuously gliding marquee showcasing "CONSIDERED DESIGN ✳ INTUITIVE LIVING ✳ QUIET INTELLIGENCE" in crisp white bold font with glowing star marks.'
    },
    {
      title: 'Interactive 3D Spatial Canvas:',
      desc: 'WebGL Three.js architectural house model allowing visitors to drag, rotate, inspect room routines, and trigger live lighting cues.'
    }
  ];

  let y3 = 2.2;
  s3Points.forEach(p => {
    slide.addText(
      [
        { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
        { text: p.desc, options: { color: THEME.textSecondary } }
      ],
      {
        x: 1.1,
        y: y3,
        w: 5.1,
        h: 0.85,
        fontSize: 10.5,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.25
      }
    );
    y3 += 0.95;
  });

  // Right Visual Card: 3D Residence / Hero Snapshot
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.75,
    y: 1.95,
    w: 5.78,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  slide.addImage({
    path: resolve('docs/screenshots/07-3d-residence.jpg'),
    x: 6.9,
    y: 2.1,
    w: 5.48,
    h: 3.55
  });

  slide.addText('FIGURE 3.1: Interactive 3D Connected Residence Model (Three.js WebGL)', {
    x: 6.9,
    y: 5.85,
    w: 5.48,
    h: 0.35,
    fontSize: 9,
    fontFace: 'Arial',
    color: THEME.textMuted,
    align: 'center'
  });
}

// --------------------------------------------------------------------------
// SLIDE 4: Product Showcase
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'PRODUCT SHOWCASE',
    'The Titanium Collection: Four Smart Home Devices',
    'Hardware Specifications, Balanced 4-Column Presentation and Transparent Academic Pricing',
    4
  );

  const products = [
    {
      name: 'Vanta Core',
      cat: 'Control Hub',
      price: '₹24,999',
      features: 'Central touchscreen hub · Climate & lighting automation · Scene selector · Ambient sensor array'
    },
    {
      name: 'Vanta Secure',
      cat: 'Smart Door Lock',
      price: '₹14,999',
      features: 'Biometric fingerprint scanner · Backlit PIN pad · Encrypted RFID entry · Titanium deadbolt'
    },
    {
      name: 'Vanta Glow',
      cat: 'Smart Lighting',
      price: '₹7,999',
      features: 'Circadian rhythm synchronization · Flush architectural ceiling mount · Smooth warm dimming'
    },
    {
      name: 'Vanta Vision',
      cat: 'Security Camera',
      price: '₹5,999',
      features: 'Discreet 4K HDR vision · On-device edge privacy processing · Physical mechanical privacy shutter'
    }
  ];

  let px = 0.8;
  products.forEach(p => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: px,
      y: 1.95,
      w: 2.8,
      h: 2.65,
      rectRadius: 0.12,
      fill: { color: THEME.surface },
      line: { color: THEME.border, width: 1 }
    });

    slide.addText(p.cat.toUpperCase(), {
      x: px + 0.15,
      y: 2.1,
      w: 2.5,
      h: 0.25,
      fontSize: 8,
      fontFace: 'Arial',
      bold: true,
      color: THEME.badgeText,
      charSpacing: 1.5
    });

    slide.addText(p.name, {
      x: px + 0.15,
      y: 2.35,
      w: 1.7,
      h: 0.35,
      fontSize: 14,
      fontFace: 'Arial',
      bold: true,
      color: THEME.textPrimary
    });

    slide.addText(p.price, {
      x: px + 1.6,
      y: 2.35,
      w: 1.05,
      h: 0.35,
      fontSize: 12,
      fontFace: 'Arial',
      bold: true,
      color: THEME.textSecondary,
      align: 'right'
    });

    slide.addShape(pres.ShapeType.line, {
      x: px + 0.15,
      y: 2.75,
      w: 2.5,
      h: 0,
      line: { color: THEME.border, width: 0.8 }
    });

    slide.addText(p.features, {
      x: px + 0.15,
      y: 2.85,
      w: 2.5,
      h: 1.6,
      fontSize: 9.5,
      fontFace: 'Arial',
      color: THEME.textSecondary,
      lineSpacingMultiple: 1.3
    });

    px += 2.978;
  });

  // Bottom Visual: Product Detail Screenshot
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 4.75,
    w: 11.733,
    h: 1.65,
    rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt },
    line: { color: THEME.border, width: 1 }
  });

  slide.addImage({
    path: resolve('docs/screenshots/02-collection.jpg'),
    x: 0.95,
    y: 4.85,
    w: 2.5,
    h: 1.45
  });

  slide.addText(
    [
      { text: 'COLLECTION SHOWCASE FEATURES:\n', options: { bold: true, color: THEME.textPrimary, fontSize: 11 } },
      { text: '• Balanced 4-Column Showcase: ', options: { bold: true, color: THEME.textPrimary } },
      { text: 'Eliminated awkward gaps with an evenly-spaced, compact luxury card layout.\n', options: { color: THEME.textSecondary } },
      { text: '• Dedicated Squircle Geometry: ', options: { bold: true, color: THEME.textPrimary } },
      { text: 'Curved 22px squircle radiuses applied directly to image frames to ensure smooth edges.\n', options: { color: THEME.textSecondary } },
      { text: '• Frictionless Conversion Bridge: ', options: { bold: true, color: THEME.textPrimary } },
      { text: 'Each device card links directly to a pre-filled consultation enquiry form.', options: { color: THEME.textSecondary } }
    ],
    {
      x: 3.65,
      y: 4.85,
      w: 8.6,
      h: 1.45,
      fontSize: 9.5,
      fontFace: 'Arial',
      lineSpacingMultiple: 1.2
    }
  );
}

// --------------------------------------------------------------------------
// SLIDE 5: HTML, CSS & JavaScript Implementation
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'HTML, CSS & JAVASCRIPT',
    'Frontend Architecture, Technologies & Code Snippets',
    'Zero-Bloat Semantic HTML5, Modular CSS Design System & ES6+ Modules',
    5
  );

  // Left Tech Stack Overview
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.95,
    w: 5.7,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  const s5Tech = [
    {
      tech: 'Semantic HTML5 Architecture:',
      desc: 'Built using semantic containers (<main>, <section>, <article>, <dialog>) compiled into production-ready static HTML at build time for instant loading.'
    },
    {
      tech: 'CSS Design Tokens & Modern Grids:',
      desc: 'Modern CSS custom properties define squircle curvature (--squircle-md: 22px) and AMOLED dark surfaces, combined with dynamic CSS Grid and Flexbox.'
    },
    {
      tech: 'Lightweight Client-Side JavaScript:',
      desc: 'Native ES6+ modules power dynamic collection category filters, modal dialog previews, and real-time form validation without bulky third-party frameworks.'
    },
    {
      tech: 'GSAP Motion & Three.js 3D Engine:',
      desc: 'Fluid scroll choreographies driven by GSAP ScrollTrigger paired with an interactive Three.js canvas for architectural residence exploration.'
    }
  ];

  let y5 = 2.2;
  s5Tech.forEach(t => {
    slide.addText(
      [
        { text: `${t.tech} `, options: { bold: true, color: THEME.textPrimary } },
        { text: t.desc, options: { color: THEME.textSecondary } }
      ],
      {
        x: 1.1,
        y: y5,
        w: 5.1,
        h: 0.85,
        fontSize: 10.5,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.25
      }
    );
    y5 += 0.95;
  });

  // Right Code Snippet Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.75,
    y: 1.95,
    w: 5.78,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.codeBg },
    line: { color: THEME.borderLight, width: 1 }
  });

  slide.addText('CORE ARCHITECTURE CODE SNIPPET (render.mjs / dark.css)', {
    x: 7.0,
    y: 2.15,
    w: 5.3,
    h: 0.25,
    fontSize: 9,
    fontFace: 'Courier New',
    bold: true,
    color: THEME.badgeText,
    charSpacing: 1
  });

  const codeSnippet = `/* 1. Balanced 4-Column Showcase Grid */
.catalog .product-grid {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 20px !important;
  max-width: 1400px !important;
}

/* 2. Squircle Image Geometry */
.product-visual img {
  width: clamp(120px, 12vw, 160px) !important;
  aspect-ratio: 1 / 1 !important;
  border-radius: 20px !important;
  mix-blend-mode: normal !important;
}

// 3. Client Validation & Submission
const res = await fetch('/api/enquiry', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});`;

  slide.addText(codeSnippet, {
    x: 7.0,
    y: 2.5,
    w: 5.3,
    h: 3.65,
    fontSize: 9.5,
    fontFace: 'Courier New',
    color: THEME.codeText,
    lineSpacingMultiple: 1.25
  });
}

// --------------------------------------------------------------------------
// SLIDE 6: Responsive Web Design
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'RESPONSIVE WEB DESIGN',
    'Mobile, Tablet & Desktop Viewport Adaptability',
    'Rigorous Cross-Device Testing: 30 Route & Viewport Checks with Zero Overflow',
    6
  );

  // Left Content Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.95,
    w: 5.5,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  const s6Points = [
    {
      title: 'Mobile Optimization (375px - 480px):',
      desc: 'Seamless single-column reflow, comfortable 44px+ touch targets, full-screen slideout menu drawer, and compact squircle product cards.'
    },
    {
      title: 'Tablet Adaptability (768px - 1024px):',
      desc: 'Balanced 2-column grid adaptation, fluid clamp() typography scaling, and streamlined multi-step enquiry layouts.'
    },
    {
      title: 'Desktop Canvas (1280px - 1440px+):',
      desc: 'Spacious 4-column product showcase, expansive Three.js 3D stage, and interactive spatial carousel with hover elevation.'
    },
    {
      title: 'Accessibility & Reduced Motion:',
      desc: 'Full compliance with prefers-reduced-motion media queries, accessible high-contrast text ratios, and skip-to-content keyboard bypass.'
    }
  ];

  let y6 = 2.2;
  s6Points.forEach(p => {
    slide.addText(
      [
        { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
        { text: p.desc, options: { color: THEME.textSecondary } }
      ],
      {
        x: 1.1,
        y: y6,
        w: 4.9,
        h: 0.85,
        fontSize: 10.5,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.25
      }
    );
    y6 += 0.95;
  });

  // Right Visual Comparison: Side-by-side Mobile & Desktop
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.55,
    y: 1.95,
    w: 5.98,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  // Mobile Image
  slide.addImage({
    path: resolve('docs/screenshots/04-home-mobile.jpg'),
    x: 6.75,
    y: 2.1,
    w: 1.65,
    h: 3.55
  });

  // Desktop Image
  slide.addImage({
    path: resolve('docs/screenshots/01-home-desktop.jpg'),
    x: 8.55,
    y: 2.1,
    w: 3.75,
    h: 3.55
  });

  slide.addText('FIGURE 6.1: Side-by-Side Mobile (375px) and Desktop (1440px) Viewport Renders', {
    x: 6.75,
    y: 5.85,
    w: 5.58,
    h: 0.35,
    fontSize: 9,
    fontFace: 'Arial',
    color: THEME.textMuted,
    align: 'center'
  });
}

// --------------------------------------------------------------------------
// SLIDE 7: SEO Keyword Research
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'SEO KEYWORD RESEARCH',
    'Strategic Search Intent Architecture & Keyword Mapping',
    'Targeting High-Intent Discovery, Brand Affinity & Consultation Searches across India',
    7
  );

  const keywords = [
    {
      intent: 'INFORMATIONAL / DISCOVERY',
      target: 'Homepage (/)',
      primary: 'Premium smart home solutions',
      secondary: 'Smart home automation India, intelligent living, architectural automation concepts'
    },
    {
      intent: 'COMMERCIAL INVESTIGATION',
      target: 'Collection (/products/)',
      primary: 'Smart home devices India',
      secondary: 'Luxury home automation systems, smart home hardware ecosystem, titanium smart devices'
    },
    {
      intent: 'HIGH-INTENT TRANSACTIONAL',
      target: 'Product Pages (/products/*)',
      primary: 'Smart home control hub India (Core)',
      secondary: 'Biometric smart door lock (Secure), smart lighting solutions (Glow), home security camera (Vision)'
    },
    {
      intent: 'QUALIFIED LEAD CONVERSION',
      target: 'Contact (/contact/)',
      primary: 'Smart home consultation India',
      secondary: 'Custom home automation enquiry, luxury residential consultation, smart villa automation'
    }
  ];

  let ky = 1.95;
  keywords.forEach(k => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8,
      y: ky,
      w: 11.733,
      h: 0.98,
      rectRadius: 0.1,
      fill: { color: THEME.surface },
      line: { color: THEME.border, width: 1 }
    });

    // Intent Tag
    slide.addShape(pres.ShapeType.rect, {
      x: 1.05,
      y: ky + 0.18,
      w: 2.4,
      h: 0.28,
      fill: { color: THEME.accentSubtle },
      line: { color: THEME.borderLight, width: 0.5 }
    });

    slide.addText(k.intent, {
      x: 1.05,
      y: ky + 0.21,
      w: 2.4,
      h: 0.22,
      fontSize: 8,
      fontFace: 'Arial',
      bold: true,
      color: THEME.badgeText,
      align: 'center'
    });

    slide.addText(k.target, {
      x: 1.05,
      y: ky + 0.55,
      w: 2.4,
      h: 0.3,
      fontSize: 9,
      fontFace: 'Courier New',
      color: THEME.textMuted,
      align: 'center'
    });

    // Primary Keyword
    slide.addText(
      [
        { text: 'PRIMARY KEYWORD: ', options: { bold: true, fontSize: 8.5, color: THEME.badgeText } },
        { text: `"${k.primary}"`, options: { bold: true, fontSize: 11, color: THEME.textPrimary } }
      ],
      {
        x: 3.65,
        y: ky + 0.18,
        w: 7.7,
        h: 0.32,
        fontFace: 'Arial'
      }
    );

    // Secondary Keywords
    slide.addText(
      [
        { text: 'SECONDARY KEYWORDS: ', options: { bold: true, fontSize: 8, color: THEME.textMuted } },
        { text: k.secondary, options: { fontSize: 9.5, color: THEME.textSecondary } }
      ],
      {
        x: 3.65,
        y: ky + 0.52,
        w: 7.7,
        h: 0.35,
        fontFace: 'Arial'
      }
    );

    ky += 1.1;
  });
}

// --------------------------------------------------------------------------
// SLIDE 8: On-Page & Technical SEO
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'ON-PAGE & TECHNICAL SEO',
    'Metadata Architecture, Semantic Markup & Technical Indexing',
    'Implemented Standards Verified Directly in Source Code without Speculative Overpromising',
    8
  );

  // Left Content Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.95,
    w: 5.7,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  const s8Points = [
    {
      title: 'Unique Titles & Descriptions:',
      desc: 'Every route possesses handcrafted, high-relevance title tags and meta descriptions reflecting targeted consumer search intent.'
    },
    {
      title: 'Strict Heading Hierarchy:',
      desc: 'Strict adherence to single <h1> architecture per page, supported by structured <h2> and <h3> subheadings for clear crawler indexing.'
    },
    {
      title: 'Accessible Image Metadata:',
      desc: 'All WebP visuals incorporate descriptive alt attributes, alongside explicit width and height dimensions to eliminate Cumulative Layout Shift (CLS).'
    },
    {
      title: 'Technical Infrastructure:',
      desc: 'Automated /sitemap.xml generation, clean /robots.txt routing, self-referential canonical tags, and Schema.org WebSite JSON-LD structured data.'
    }
  ];

  let y8 = 2.2;
  s8Points.forEach(p => {
    slide.addText(
      [
        { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
        { text: p.desc, options: { color: THEME.textSecondary } }
      ],
      {
        x: 1.1,
        y: y8,
        w: 5.1,
        h: 0.85,
        fontSize: 10.5,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.25
      }
    );
    y8 += 0.95;
  });

  // Right Code Snippet Card: Actual SEO Head Tag Evidence
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.75,
    y: 1.95,
    w: 5.78,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.codeBg },
    line: { color: THEME.borderLight, width: 1 }
  });

  slide.addText('ACTUAL SEO SOURCE CODE EVIDENCE (<head> Metadata)', {
    x: 7.0,
    y: 2.15,
    w: 5.3,
    h: 0.25,
    fontSize: 9,
    fontFace: 'Courier New',
    bold: true,
    color: THEME.badgeText,
    charSpacing: 1
  });

  const seoSnippet = `<title>The Vanta House | Premium Smart Home Technology India</title>
<meta name="description" content="Explore premium smart home
technology by The Vanta House. Discover intelligent lighting,
smart security and connected home control concepts.">
<link rel="canonical" href="https://thevantahouse.vercel.app/">

<!-- Open Graph Social Protocol -->
<meta property="og:title" content="The Vanta House">
<meta property="og:type" content="website">
<meta property="og:image" content="/assets/hero.webp">

<!-- Schema.org Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Vanta House",
  "url": "https://thevantahouse.vercel.app"
}
</script>`;

  slide.addText(seoSnippet, {
    x: 7.0,
    y: 2.45,
    w: 5.3,
    h: 3.75,
    fontSize: 9,
    fontFace: 'Courier New',
    color: THEME.codeText,
    lineSpacingMultiple: 1.25
  });
}

// --------------------------------------------------------------------------
// SLIDE 9: Customer Enquiry Form
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'CUSTOMER ENQUIRY FORM',
    'Customer Enquiry Form, Multi-Tier Validation & Lead Storage',
    'Frictionless Consultation Requests Backed by Server-Side Verification and Duplicate Protection',
    9
  );

  // Left Content Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.95,
    w: 5.7,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  const s9Points = [
    {
      title: 'Comprehensive Lead Form Fields:',
      desc: 'Captures Full Name, Email, Indian Phone (+91 validation), City, Product Interest dropdown, Enquiry Type, Date preference, and Project Message.'
    },
    {
      title: 'Indian Mobile & Regex Validation:',
      desc: 'Validates Indian 10-digit mobile phone numbers with optional +91 prefix while actively rejecting synthetic or malformed phone submissions.'
    },
    {
      title: 'Anti-Spam & Bot Defense:',
      desc: 'Employs a hidden honeypot trap field and minimum completion timestamp checks to thwart headless scrapers and automated bots.'
    },
    {
      title: 'Verified Storage & Idempotency:',
      desc: 'Form confirmation is generated only after server-side JSON persistence; identical retries return existing confirmation tokens without duplicates.'
    }
  ];

  let y9 = 2.2;
  s9Points.forEach(p => {
    slide.addText(
      [
        { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
        { text: p.desc, options: { color: THEME.textSecondary } }
      ],
      {
        x: 1.1,
        y: y9,
        w: 5.1,
        h: 0.85,
        fontSize: 10.5,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.25
      }
    );
    y9 += 0.95;
  });

  // Right Visual Card: Actual Submission Evidence Screenshot
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.75,
    y: 1.95,
    w: 5.78,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  slide.addImage({
    path: resolve('docs/screenshots/03-form-success.jpg'),
    x: 6.9,
    y: 2.1,
    w: 5.48,
    h: 3.55
  });

  slide.addText('FIGURE 9.1: Live Submission Evidence with Unique Reference Confirmation', {
    x: 6.9,
    y: 5.85,
    w: 5.48,
    h: 0.35,
    fontSize: 9,
    fontFace: 'Arial',
    color: THEME.textMuted,
    align: 'center'
  });
}

// --------------------------------------------------------------------------
// SLIDE 10: Website Testing & Conclusion
// --------------------------------------------------------------------------
{
  const slide = pres.addSlide();
  addChrome(
    slide,
    'WEBSITE TESTING & CONCLUSION',
    'Rigorous Quality Assurance, Live Deployment & Project Deliverables',
    'Automated Test Suite Verification, Live Website Link and Mobile Scannable QR Code',
    10
  );

  // Left Metrics Card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8,
    y: 1.95,
    w: 5.7,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  slide.addText('AUTOMATED QA & PRODUCTION AUDIT METRICS', {
    x: 1.1,
    y: 2.15,
    w: 5.1,
    h: 0.25,
    fontSize: 10,
    fontFace: 'Arial',
    bold: true,
    color: THEME.badgeText,
    charSpacing: 1.2
  });

  const testStats = [
    { stat: '5 / 5', label: 'Backend Tests Passed', detail: 'Validation, idempotency, spam defense, and cross-origin security' },
    { stat: '30 / 30', label: 'Route Viewport Checks', detail: 'Zero layout shift or horizontal overflow across 375px, 768px, 1440px' },
    { stat: '0', label: 'Console Errors Observed', detail: 'Clean runtime execution with smooth graceful fallbacks' }
  ];

  let sy = 2.5;
  testStats.forEach(t => {
    slide.addText(t.stat, {
      x: 1.1,
      y: sy,
      w: 1.3,
      h: 0.5,
      fontSize: 22,
      fontFace: 'Arial',
      bold: true,
      color: THEME.textPrimary
    });

    slide.addText(
      [
        { text: `${t.label}\n`, options: { bold: true, fontSize: 11, color: THEME.textPrimary } },
        { text: t.detail, options: { fontSize: 9.5, color: THEME.textSecondary } }
      ],
      {
        x: 2.5,
        y: sy + 0.02,
        w: 3.7,
        h: 0.55,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.15
      }
    );

    slide.addShape(pres.ShapeType.line, {
      x: 1.1,
      y: sy + 0.62,
      w: 5.1,
      h: 0,
      line: { color: THEME.border, width: 0.8 }
    });

    sy += 0.72;
  });

  // Project Summary Note
  slide.addText(
    [
      { text: 'PROJECT SUMMARY: ', options: { bold: true, color: THEME.textPrimary } },
      { text: 'The Vanta House successfully demonstrates how restrained aesthetic design, modern web architecture, and evidence-backed digital marketing converge into an effective, conversion-focused digital ecosystem.', options: { color: THEME.textSecondary } }
    ],
    {
      x: 1.1,
      y: 4.85,
      w: 5.1,
      h: 1.35,
      fontSize: 10,
      fontFace: 'Arial',
      lineSpacingMultiple: 1.25
    }
  );

  // Right Visual Card: Live Website URL & QR Code
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.75,
    y: 1.95,
    w: 5.78,
    h: 4.45,
    rectRadius: 0.15,
    fill: { color: THEME.surface },
    line: { color: THEME.border, width: 1 }
  });

  // Scannable QR Code
  slide.addImage({
    path: resolve('docs/screenshots/qrcode.png'),
    x: 8.44,
    y: 2.2,
    w: 2.4,
    h: 2.4
  });

  slide.addText('SCAN TO EXPLORE LIVE WEBSITE', {
    x: 7.0,
    y: 4.75,
    w: 5.28,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textPrimary,
    align: 'center',
    charSpacing: 1.5
  });

  slide.addText('https://thevantahouse.vercel.app', {
    x: 7.0,
    y: 5.08,
    w: 5.28,
    h: 0.35,
    fontSize: 11,
    fontFace: 'Courier New',
    color: THEME.badgeText,
    align: 'center'
  });

  slide.addText('GitHub: https://github.com/Y7XIFIED/thevantahouse', {
    x: 7.0,
    y: 5.48,
    w: 5.28,
    h: 0.35,
    fontSize: 9.5,
    fontFace: 'Courier New',
    color: THEME.textMuted,
    align: 'center'
  });

  slide.addText('Author & Lead Developer: Y7XIFIED', {
    x: 7.0,
    y: 5.88,
    w: 5.28,
    h: 0.3,
    fontSize: 9.5,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textSecondary,
    align: 'center'
  });
}

// Write the PowerPoint file to docs directory
const outputPath = resolve('docs/The_Vanta_House_Presentation.pptx');
await pres.writeFile({ fileName: outputPath });
console.log(`PowerPoint Presentation created successfully at: ${outputPath}`);
