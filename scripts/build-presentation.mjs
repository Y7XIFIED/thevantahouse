import pptxgen from 'pptxgenjs';
import { resolve } from 'node:path';

const pres = new pptxgen();
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

// Helper for consistent slide chrome
function addSlideChrome(slide, partLabel, title, subtitle, slideNum, totalSlides = 30) {
  slide.background = { color: THEME.bg };

  // Subtle ambient frame
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 0.4,
    w: 12.333,
    h: 6.7,
    fill: { color: THEME.bg },
    line: { color: THEME.border, width: 1 }
  });

  // Top Kicker Badge
  slide.addText(partLabel.toUpperCase(), {
    x: 0.8,
    y: 0.62,
    w: 8.5,
    h: 0.28,
    fontSize: 9.5,
    fontFace: 'Arial',
    bold: true,
    color: THEME.badgeText,
    charSpacing: 2
  });

  // Headline
  slide.addText(title, {
    x: 0.8,
    y: 0.92,
    w: 11.5,
    h: 0.55,
    fontSize: 21,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textPrimary
  });

  // Subtitle
  slide.addText(subtitle, {
    x: 0.8,
    y: 1.48,
    w: 11.5,
    h: 0.35,
    fontSize: 11.5,
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
  slide.addText('THE VANTA HOUSE · DIGITAL MARKETING PRESENTATION', {
    x: 0.8,
    y: 6.68,
    w: 5.0,
    h: 0.3,
    fontSize: 8.5,
    fontFace: 'Arial',
    color: THEME.textMuted,
    charSpacing: 1.5
  });

  // Footer Center: Attribution Rule
  slide.addText('PROJECT LEAD & DEV: Y7XIFIED', {
    x: 5.5,
    y: 6.68,
    w: 3.5,
    h: 0.3,
    fontSize: 8.5,
    fontFace: 'Arial',
    bold: true,
    color: THEME.textSecondary,
    align: 'center',
    charSpacing: 1.5
  });

  // Footer Right: Slide Counter
  slide.addText(`${String(slideNum).padStart(2, '0')} / ${totalSlides}`, {
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

// ==========================================================================
// PART 1: BRANDING & INTRODUCTION (Slides 1 to 10)
// ==========================================================================

// Slide 1: Cover
{
  const s = pres.addSlide();
  s.background = { color: THEME.bg };

  s.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 12.333, h: 6.7,
    fill: { color: THEME.bg },
    line: { color: THEME.border, width: 1 }
  });

  s.addText('DIGITAL MARKETING / BRAND PRESENTATION', {
    x: 1.2, y: 1.8, w: 10.0, h: 0.35,
    fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 3
  });

  s.addText('THE VANTA HOUSE', {
    x: 1.2, y: 2.2, w: 11.0, h: 1.1,
    fontSize: 48, fontFace: 'Arial', bold: true, color: THEME.textPrimary, letterSpacing: -1
  });

  s.addText('SMART LIVING. THOUGHTFULLY CONNECTED.', {
    x: 1.2, y: 3.35, w: 10.0, h: 0.4,
    fontSize: 14, fontFace: 'Arial', bold: true, color: THEME.textSecondary, charSpacing: 2
  });

  s.addText('A smarter way to experience home.', {
    x: 1.2, y: 3.85, w: 10.0, h: 0.4,
    fontSize: 15, fontFace: 'Arial', color: THEME.textSecondary
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 1.2, y: 4.8, w: 4.5, h: 0.9, rectRadius: 0.1,
    fill: { color: THEME.surface }, line: { color: THEME.borderLight, width: 1 }
  });

  s.addText('PART 01 · BRANDING & INTRODUCTION\nLead Developer & System Architect: Y7XIFIED', {
    x: 1.4, y: 4.95, w: 4.1, h: 0.6,
    fontSize: 10, fontFace: 'Arial', color: THEME.textPrimary, lineSpacingMultiple: 1.2
  });

  s.addText('01 / 30', {
    x: 10.5, y: 6.68, w: 2.0, h: 0.3,
    fontSize: 8.5, fontFace: 'Arial', bold: true, color: THEME.textSecondary, align: 'right'
  });
}

// Slide 2: Digital marketing: connecting brands with people
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / FOUNDATIONS', 'Digital Marketing: Connecting Brands with People', 'Harnessing Online Channels to Promote Products, Build Relationships and Encourage Action', 2);

  const pillars = [
    { num: '01 / REACH', title: 'Connect with Audiences', desc: 'Engage high-intent consumers across search engines, social channels, web applications and digital advertising.' },
    { num: '02 / ENGAGE', title: 'Build Credibility & Trust', desc: 'Share informative architectural content, resolve friction points and nurture enduring brand confidence.' },
    { num: '03 / CONVERT', title: 'Drive Real Action', desc: 'Transform casual interest into qualified enquiries, design consultations and product evaluation.' },
    { num: '04 / MEASURE', title: 'Optimize Performance', desc: 'Continuously leverage data analytics to refine user funnels, marketing performance and UX workflows.' }
  ];

  let x = 0.8;
  pillars.forEach(p => {
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.95, w: 2.8, h: 3.2, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(p.num, { x: x + 0.15, y: 2.15, w: 2.5, h: 0.25, fontSize: 8.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5 });
    s.addText(p.title, { x: x + 0.15, y: 2.45, w: 2.5, h: 0.45, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addShape(pres.ShapeType.line, { x: x + 0.15, y: 2.95, w: 2.5, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText(p.desc, { x: x + 0.15, y: 3.1, w: 2.5, h: 1.8, fontSize: 10, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.25 });
    x += 2.978;
  });

  // Bottom Callout
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.35, w: 11.733, h: 1.05, rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });
  s.addText('FOR THE VANTA HOUSE: Our digital presence makes smart-home technology easier to discover, understand, and trust through frictionless design.', {
    x: 1.1, y: 5.65, w: 11.1, h: 0.45, fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center'
  });
}

// Slide 3: Meet The Vanta House
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / THE BRAND', 'Meet The Vanta House', 'A Connected-Home Brand Built Around Comfort, Control and Thoughtful Design', 3);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addText('THE BRAND PROMISE', {
    x: 1.1, y: 2.15, w: 5.1, h: 0.25, fontSize: 10, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5
  });

  s.addText('"Technology should simplify home life, not complicate it."', {
    x: 1.1, y: 2.5, w: 5.1, h: 0.85, fontSize: 18, fontFace: 'Arial', bold: true, color: THEME.textPrimary, lineSpacingMultiple: 1.2
  });

  s.addText('The Vanta House brings everyday smart technology into one coherent, unified experience. Our concept helps homeowners manage lighting, security, access and climate with products that feel intuitive, coordinated, and modern.', {
    x: 1.1, y: 3.45, w: 5.1, h: 1.2, fontSize: 11, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.3
  });

  s.addText('Designed for contemporary Indian residences seeking quiet elegance, restrained hardware, and seamless interaction without gadget clutter.', {
    x: 1.1, y: 4.8, w: 5.1, h: 1.0, fontSize: 10.5, fontFace: 'Arial', color: THEME.textMuted, lineSpacingMultiple: 1.3
  });

  // Right Card: Hero Artwork
  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addImage({
    path: resolve('public/assets/hero.webp'),
    x: 6.9, y: 2.1, w: 5.48, h: 3.55
  });

  s.addText('Atmospheric Architectural Residence · The Vanta House Concept', {
    x: 6.9, y: 5.85, w: 5.48, h: 0.35, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted, align: 'center'
  });
}

// Slide 4: Visual Identity - The Logo
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / VISUAL IDENTITY', 'The Logo: A Home, Connected by Design', 'Symbolic Architectural Geometry Representing Protection, Unity and Modern Tech', 4);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  const logoDetails = [
    { title: 'Roof Outline Geometry:', desc: 'Represents shelter, structural protection, comfort, and the sanctity of the domestic home.' },
    { title: 'The Central V Monogram:', desc: 'Evokes the Vanta brand identity while forming an interconnected converge point for smart devices.' },
    { title: 'Clean Precision Lines:', desc: 'Communicates engineering simplicity, architectural restraint, and modern digital precision.' },
    { title: 'Omnichannel Clarity:', desc: 'Meticulously crafted to scale flawlessly across digital screens, hardware packaging, and social media.' }
  ];

  let ly = 2.2;
  logoDetails.forEach(item => {
    s.addText([
      { text: `${item.title} `, options: { bold: true, color: THEME.textPrimary } },
      { text: item.desc, options: { color: THEME.textSecondary } }
    ], { x: 1.1, y: ly, w: 5.1, h: 0.85, fontSize: 10.5, fontFace: 'Arial', lineSpacingMultiple: 1.25 });
    ly += 0.95;
  });

  // Right Visual Card: Large Monogram Mark
  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });

  s.addText('V', {
    x: 6.75, y: 2.5, w: 5.78, h: 2.2,
    fontSize: 140, fontFace: 'Georgia', bold: true, color: THEME.textPrimary, align: 'center'
  });

  s.addText('THE VANTA HOUSE\nSMART LIVING. THOUGHTFULLY CONNECTED.', {
    x: 6.75, y: 4.8, w: 5.78, h: 0.8,
    fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textSecondary, align: 'center', lineSpacingMultiple: 1.3
  });
}

// Slide 5: Brand Purpose
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / BRAND PURPOSE', 'A Clear Promise. A Meaningful Direction.', 'Tagline, Strategic Vision, Everyday Mission and Core Operating Values', 5);

  // Vision Card
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 3.1, rectRadius: 0.12,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });
  s.addText('WHERE WE ARE GOING / VISION', {
    x: 1.1, y: 2.15, w: 5.1, h: 0.25, fontSize: 9.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5
  });
  s.addText('To make intelligent, connected living accessible and effortless, so every modern home can feel more comfortable, secure, and effortlessly in control.', {
    x: 1.1, y: 2.5, w: 5.1, h: 1.2, fontSize: 12.5, fontFace: 'Arial', color: THEME.textPrimary, lineSpacingMultiple: 1.3
  });

  // Mission Card
  s.addShape(pres.ShapeType.roundRect, {
    x: 6.833, y: 1.95, w: 5.7, h: 3.1, rectRadius: 0.12,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });
  s.addText('WHAT WE DO EVERY DAY / MISSION', {
    x: 7.133, y: 2.15, w: 5.1, h: 0.25, fontSize: 9.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5
  });
  s.addText('To create simple, reliable smart-home solutions that bring devices together, eliminate daily friction, and give homeowners total peace of mind.', {
    x: 7.133, y: 2.5, w: 5.1, h: 1.2, fontSize: 12.5, fontFace: 'Arial', color: THEME.textPrimary, lineSpacingMultiple: 1.3
  });

  // Bottom Values Strip
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.25, w: 11.733, h: 1.15, rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });
  s.addText('FOUR CORE VALUES:   COMFORT   •   SECURITY   •   SIMPLICITY   •   CONNECTION', {
    x: 1.0, y: 5.45, w: 11.3, h: 0.35, fontSize: 12, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center', charSpacing: 1.5
  });
  s.addText('TAGLINE: "Smart living. Thoughtfully connected."', {
    x: 1.0, y: 5.85, w: 11.3, h: 0.35, fontSize: 10, fontFace: 'Arial', color: THEME.textSecondary, align: 'center'
  });
}

// Slide 6: Product Portfolio
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / PRODUCT PORTFOLIO', 'One Connected Experience: Five Smart Solutions', 'Comprehensive Product Family Addressing Every Dimension of Smart Living', 6);

  const portfolio = [
    { num: '01', cat: 'CONTROL', name: 'Vanta Smart Hub', desc: 'Central touchscreen controller for ecosystem devices.', price: '₹10,999' },
    { num: '02', cat: 'LIGHTING', name: 'Vanta Glow', desc: 'Adaptive lighting designed for ambience & schedules.', price: '₹7,999' },
    { num: '03', cat: 'SECURITY', name: 'Vanta Secure', desc: 'Connected AI camera concept for active awareness.', price: '₹14,999' },
    { num: '04', cat: 'COMFORT', name: 'Vanta Climate', desc: 'Intelligent temperature & air comfort management.', price: '₹5,999' },
    { num: '05', cat: 'ACCESS', name: 'Vanta Lock', desc: 'Keyless biometric smart entry with encrypted logs.', price: '₹24,999' }
  ];

  let x = 0.8;
  portfolio.forEach(item => {
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.95, w: 2.25, h: 4.45, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(item.num, { x: x + 0.15, y: 2.15, w: 1.95, h: 0.4, fontSize: 24, fontFace: 'Arial', bold: true, color: THEME.borderLight });
    s.addText(item.cat, { x: x + 0.15, y: 2.7, w: 1.95, h: 0.25, fontSize: 8.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5 });
    s.addText(item.name, { x: x + 0.15, y: 3.0, w: 1.95, h: 0.45, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addShape(pres.ShapeType.line, { x: x + 0.15, y: 3.55, w: 1.95, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText(item.desc, { x: x + 0.15, y: 3.75, w: 1.95, h: 1.8, fontSize: 10, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.25 });
    s.addText(item.price, { x: x + 0.15, y: 5.75, w: 1.95, h: 0.4, fontSize: 14, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center' });
    x += 2.37;
  });
}

// Slide 7: Offer & Value Matrix
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / OFFER & VALUE', 'Designed Around Everyday Human Needs', 'Value Proposition Matrix and Indicative Academic Project Pricing', 7);

  const tableData = [
    [
      { text: 'PRODUCT', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'CORE KEY VALUE', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'PROJECT PRICE', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle }, align: 'right' } }
    ],
    [{ text: 'Vanta Smart Hub' }, { text: 'Centralised touchscreen control for a coordinated, connected home' }, { text: '₹7,999', options: { align: 'right' } }],
    [{ text: 'Vanta Glow' }, { text: 'Convenient circadian lighting, automated scenes and daily schedules' }, { text: '₹2,499', options: { align: 'right' } }],
    [{ text: 'Vanta Secure' }, { text: 'Remote awareness, intelligent camera monitoring and peace of mind' }, { text: '₹4,999', options: { align: 'right' } }],
    [{ text: 'Vanta Climate' }, { text: 'Comfort-focused temperature, climate control and energy visibility' }, { text: '₹5,999', options: { align: 'right' } }],
    [{ text: 'Vanta Lock' }, { text: 'Convenient keyless access management with biometric security' }, { text: '₹8,999', options: { align: 'right' } }]
  ];

  s.addTable(tableData, {
    x: 0.8, y: 2.1, w: 11.733, h: 3.5,
    fontFace: 'Arial', fontSize: 11,
    color: THEME.textSecondary,
    border: { color: THEME.border, pt: 1 },
    fill: { color: THEME.surface },
    rowH: [0.55, 0.55, 0.55, 0.55, 0.55, 0.55]
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.8, w: 11.733, h: 0.6, rectRadius: 0.08,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.border, width: 0.8 }
  });
  s.addText('Note: Pricing structures are academic project models designed for strategic feasibility analysis.', {
    x: 1.0, y: 5.95, w: 11.3, h: 0.3, fontSize: 9.5, fontFace: 'Arial', color: THEME.textMuted, align: 'center'
  });
}

// Slide 8: Brand Identity
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / BRAND IDENTITY', 'The Look, Feel and Voice of Vanta', 'Color System, Visual Aesthetic Principles and Brand Personality Attributes', 8);

  // Color Swatches
  const colors = [
    { name: 'GRAPHITE GREY', hex: '#1D1F22', fill: '1D1F22', desc: 'Primary structural surface' },
    { name: 'SILVER', hex: '#B1B8C1', fill: 'B1B8C1', desc: 'Precision metallic accent' },
    { name: 'WHITE', hex: '#F5F6F7', fill: 'F5F6F7', desc: 'Luminous high-contrast typography' }
  ];

  let cx = 0.8;
  colors.forEach(c => {
    s.addShape(pres.ShapeType.roundRect, {
      x: cx, y: 1.95, w: 3.75, h: 1.8, rectRadius: 0.1,
      fill: { color: c.fill }, line: { color: THEME.borderLight, width: 1 }
    });
    const textColor = c.name === 'WHITE' ? '000000' : 'FFFFFF';
    s.addText(`${c.name}\n${c.hex}`, {
      x: cx + 0.2, y: 2.45, w: 3.35, h: 0.8,
      fontSize: 14, fontFace: 'Arial', bold: true, color: textColor, align: 'center', lineSpacingMultiple: 1.2
    });
    cx += 3.99;
  });

  // Personality Cards
  const traits = [
    { title: 'MODERN', desc: 'Current, clean, forward-looking and architecturally aligned.' },
    { title: 'REASSURING', desc: 'Dependable, private, secure and designed with people first.' },
    { title: 'SIMPLE', desc: 'Technology explained in clear, accessible, everyday language.' },
    { title: 'THOUGHTFUL', desc: 'Useful domestic innovation rather than unnecessary gadget complexity.' }
  ];

  let tx = 0.8;
  traits.forEach(t => {
    s.addShape(pres.ShapeType.roundRect, {
      x: tx, y: 4.0, w: 2.8, h: 2.4, rectRadius: 0.1,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(t.title, {
      x: tx + 0.15, y: 4.25, w: 2.5, h: 0.35, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textPrimary
    });
    s.addShape(pres.ShapeType.line, { x: tx + 0.15, y: 4.7, w: 2.5, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText(t.desc, {
      x: tx + 0.15, y: 4.85, w: 2.5, h: 1.3, fontSize: 10, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.25
    });
    tx += 2.978;
  });
}

// Slide 9: Brand Positioning
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 01 / POSITIONING', 'Smart Technology Made to Feel Simple', 'Strategic Positioning Statement and Three Foundational Pillars', 9);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 11.733, h: 1.7, rectRadius: 0.12,
    fill: { color: THEME.surface }, line: { color: THEME.borderLight, width: 1 }
  });

  s.addText('OUR POSITIONING STATEMENT', {
    x: 1.1, y: 2.15, w: 11.1, h: 0.25, fontSize: 9.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5
  });

  s.addText('"For people who want a more comfortable, secure and connected home, The Vanta House is a smart-home brand that brings useful technology together in a simple, modern experience."', {
    x: 1.1, y: 2.5, w: 11.1, h: 0.95, fontSize: 15, fontFace: 'Arial', bold: true, color: THEME.textPrimary, lineSpacingMultiple: 1.25
  });

  const pillars = [
    { num: '01 / PILLAR', title: 'EASY TO USE', desc: 'Straightforward, human-centric experiences without steep learning curves or configuration fatigue.' },
    { num: '02 / PILLAR', title: 'MADE TO CONNECT', desc: 'A deeply coordinated product family operating in seamless hardware and software harmony.' },
    { num: '03 / PILLAR', title: 'BUILT FOR LIFE', desc: 'Enduring architectural materials that deliver authentic comfort and peace of mind at home.' }
  ];

  let px = 0.8;
  pillars.forEach(p => {
    s.addShape(pres.ShapeType.roundRect, {
      x: px, y: 3.85, w: 3.75, h: 2.55, rectRadius: 0.1,
      fill: { color: THEME.surfaceAlt }, line: { color: THEME.border, width: 1 }
    });
    s.addText(p.num, { x: px + 0.2, y: 4.1, w: 3.35, h: 0.25, fontSize: 8.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5 });
    s.addText(p.title, { x: px + 0.2, y: 4.4, w: 3.35, h: 0.35, fontSize: 14, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addShape(pres.ShapeType.line, { x: px + 0.2, y: 4.85, w: 3.35, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText(p.desc, { x: px + 0.2, y: 5.0, w: 3.35, h: 1.2, fontSize: 10.5, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.25 });
    px += 3.99;
  });
}

// Slide 10: Brand Conclusion / Transition
{
  const s = pres.addSlide();
  s.background = { color: THEME.bg };

  s.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 12.333, h: 6.7,
    fill: { color: THEME.bg }, line: { color: THEME.border, width: 1 }
  });

  s.addText('PART 01 CONCLUSION', {
    x: 1.2, y: 1.8, w: 10.0, h: 0.3,
    fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 3
  });

  s.addText('A better home starts with\nthoughtful connection.', {
    x: 1.2, y: 2.2, w: 11.0, h: 1.5,
    fontSize: 42, fontFace: 'Arial', bold: true, color: THEME.textPrimary, lineSpacingMultiple: 1.15
  });

  s.addText('Comfort in the everyday. Confidence in every connection.', {
    x: 1.2, y: 4.0, w: 10.0, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: THEME.textSecondary
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 1.2, y: 4.8, w: 6.5, h: 0.9, rectRadius: 0.1,
    fill: { color: THEME.surface }, line: { color: THEME.borderLight, width: 1 }
  });

  s.addText('UP NEXT: PART 02 · MARKET RESEARCH & AUDIENCE INTELLIGENCE\nFollowed by: PART 03 · WEBSITE DEVELOPMENT, SEO & ENQUIRY SYSTEM', {
    x: 1.4, y: 4.95, w: 6.1, h: 0.6,
    fontSize: 9.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, lineSpacingMultiple: 1.25
  });

  s.addText('10 / 30', {
    x: 10.5, y: 6.68, w: 2.0, h: 0.3,
    fontSize: 8.5, fontFace: 'Arial', bold: true, color: THEME.textSecondary, align: 'right'
  });
}

// ==========================================================================
// PART 2: MARKET RESEARCH (Slides 11 to 20)
// ==========================================================================

// Slide 11: Market Research Cover
{
  const s = pres.addSlide();
  s.background = { color: THEME.bg };

  s.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 12.333, h: 6.7,
    fill: { color: THEME.bg }, line: { color: THEME.border, width: 1 }
  });

  s.addText('PART 02 / MARKET INTELLIGENCE', {
    x: 1.2, y: 1.8, w: 10.0, h: 0.3,
    fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 3
  });

  s.addText('MARKET RESEARCH', {
    x: 1.2, y: 2.2, w: 11.0, h: 1.1,
    fontSize: 48, fontFace: 'Arial', bold: true, color: THEME.textPrimary
  });

  s.addText('AUDIENCE  /  COMPETITION  /  SEARCH  /  SWOT', {
    x: 1.2, y: 3.35, w: 10.0, h: 0.4,
    fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textSecondary, charSpacing: 2
  });

  s.addText('A smarter way to understand our market and customer intent.', {
    x: 1.2, y: 3.85, w: 10.0, h: 0.4,
    fontSize: 15, fontFace: 'Arial', color: THEME.textSecondary
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 1.2, y: 4.8, w: 4.5, h: 0.9, rectRadius: 0.1,
    fill: { color: THEME.surface }, line: { color: THEME.borderLight, width: 1 }
  });

  s.addText('MEMBER 2 | MARKET INTELLIGENCE\nAudience Insights, Competitive Analysis & Strategic Feasibility', {
    x: 1.4, y: 4.95, w: 4.1, h: 0.6,
    fontSize: 10, fontFace: 'Arial', color: THEME.textPrimary, lineSpacingMultiple: 1.2
  });

  s.addText('11 / 30', {
    x: 10.5, y: 6.68, w: 2.0, h: 0.3,
    fontSize: 8.5, fontFace: 'Arial', bold: true, color: THEME.textSecondary, align: 'right'
  });
}

// Slide 12: Research Framework
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / FRAMEWORK', 'Research Framework: From Insight to Positioning', 'A Systematic Four-Pillar Methodology for De-risking Category Entry', 12);

  const pillars = [
    { num: '01 / AUDIENCE', title: 'Target Profiles', desc: 'Who needs smart-home convenience, security and energy control, and what triggers their purchase decisions.' },
    { num: '02 / COMPETITION', title: 'Competitive Gaps', desc: 'Where established big-tech ecosystems dominate and where an integrated, premium offer can win.' },
    { num: '03 / SEARCH', title: 'Intent Mapping', desc: 'How high-intent Indian customers discover smart devices, compare automation ecosystems, and book demos.' },
    { num: '04 / SWOT', title: 'Strategic Synthesis', desc: 'Translating internal architectural capabilities and external market dynamics into actionable decisions.' }
  ];

  let x = 0.8;
  pillars.forEach(p => {
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.95, w: 2.8, h: 3.2, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(p.num, { x: x + 0.15, y: 2.15, w: 2.5, h: 0.25, fontSize: 8.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5 });
    s.addText(p.title, { x: x + 0.15, y: 2.45, w: 2.5, h: 0.45, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addShape(pres.ShapeType.line, { x: x + 0.15, y: 2.95, w: 2.5, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText(p.desc, { x: x + 0.15, y: 3.1, w: 2.5, h: 1.8, fontSize: 10, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.25 });
    x += 2.978;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.35, w: 11.733, h: 1.05, rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });
  s.addText('RESEARCH LENS: Smart home buyers prioritize trust, compatibility, setup simplicity, privacy and reliability over raw gadget count.', {
    x: 1.1, y: 5.65, w: 11.1, h: 0.45, fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center'
  });
}

// Slide 13: Target Audience Segments
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / AUDIENCE', 'Target Audience: Three High-Fit Consumer Segments', 'Profiling Primary Buyers in India’s Rapidly Growing Urban Automation Sector', 13);

  const segments = [
    {
      title: 'URBAN PROFESSIONALS',
      age: 'Age: 25 - 40 Years',
      need: 'Convenience, routines, remote smartphone control',
      trigger: 'Moving to new apartment / time-saving upgrades',
      msg: '“Your home, on your schedule.”'
    },
    {
      title: 'FAMILY HOMEOWNERS',
      age: 'Age: 30 - 50 Years',
      need: 'Physical security, child safety, energy visibility',
      trigger: 'Home renovation / growing family protection',
      msg: '“More control. More peace of mind.”'
    },
    {
      title: 'TECH-ENTHUSIASTS',
      age: 'Age: 20 - 40 Years',
      need: 'Device interoperability, custom automation scenes',
      trigger: 'Ecosystem expansion / latest protocol support',
      msg: '“Build a home that responds.”'
    }
  ];

  let sx = 0.8;
  segments.forEach(item => {
    s.addShape(pres.ShapeType.roundRect, {
      x: sx, y: 1.95, w: 3.75, h: 3.3, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(item.title, { x: sx + 0.2, y: 2.15, w: 3.35, h: 0.35, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addText(item.age, { x: sx + 0.2, y: 2.5, w: 3.35, h: 0.25, fontSize: 10, fontFace: 'Arial', bold: true, color: THEME.badgeText });
    s.addShape(pres.ShapeType.line, { x: sx + 0.2, y: 2.85, w: 3.35, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText([
      { text: 'Core Need: ', options: { bold: true, color: THEME.textPrimary } },
      { text: item.need + '\n\n', options: { color: THEME.textSecondary } },
      { text: 'Trigger: ', options: { bold: true, color: THEME.textPrimary } },
      { text: item.trigger + '\n\n', options: { color: THEME.textSecondary } },
      { text: 'Key Message: ', options: { bold: true, color: THEME.textPrimary } },
      { text: item.msg, options: { bold: true, color: THEME.textPrimary } }
    ], { x: sx + 0.2, y: 3.0, w: 3.35, h: 2.1, fontSize: 9.5, fontFace: 'Arial', lineSpacingMultiple: 1.2 });
    sx += 3.99;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.45, w: 11.733, h: 0.95, rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });
  s.addText('PRIORITY LAUNCH SEGMENT: Urban professionals upgrading or furnishing modern residences in metropolitan hubs.', {
    x: 1.1, y: 5.75, w: 11.1, h: 0.35, fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center'
  });
}

// Slide 14: Buyer Personas
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / PERSONAS', 'Buyer Personas: The Decision Behind the Purchase', 'Psychographic Motivations, Pain Points and Recommended Product Bundles', 14);

  const personas = [
    {
      name: 'THE CONVENIENCE SEEKER',
      quote: '“I want my home to handle routine tasks.”',
      values: 'Quick and simple setup · Uses mobile app-based services daily',
      concern: 'Fear of too many disjointed apps & technical complexity',
      offer: 'Starter Automation Bundle (Hub + Glow)'
    },
    {
      name: 'THE SECURITY-FIRST BUYER',
      quote: '“I want to know my home and family are safe.”',
      values: 'Instant alerts, reliable hardware visibility & verified reviews',
      concern: 'Data privacy risks, cloud hacks & false alarm fatigue',
      offer: 'Security Bundle (Secure Lock + Vision Camera)'
    },
    {
      name: 'THE CONNECTED BUILDER',
      quote: '“I want all devices to work as one system.”',
      values: 'Protocol compatibility (Matter/Zigbee) · Custom automation logic',
      concern: 'Vendor lock-in & incompatible proprietary protocols',
      offer: 'Modular Expandable System (Complete Family)'
    }
  ];

  let px = 0.8;
  personas.forEach(p => {
    s.addShape(pres.ShapeType.roundRect, {
      x: px, y: 1.95, w: 3.75, h: 4.45, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(p.name, { x: px + 0.2, y: 2.15, w: 3.35, h: 0.35, fontSize: 12, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addText(p.quote, { x: px + 0.2, y: 2.5, w: 3.35, h: 0.45, fontSize: 10, fontFace: 'Arial', italic: true, color: THEME.badgeText });
    s.addShape(pres.ShapeType.line, { x: px + 0.2, y: 3.05, w: 3.35, h: 0, line: { color: THEME.border, width: 0.8 } });

    s.addText([
      { text: 'Core Values:\n', options: { bold: true, color: THEME.textPrimary } },
      { text: p.values + '\n\n', options: { color: THEME.textSecondary } },
      { text: 'Primary Concern:\n', options: { bold: true, color: THEME.textPrimary } },
      { text: p.concern + '\n\n', options: { color: THEME.textSecondary } },
      { text: 'Recommended Offer:\n', options: { bold: true, color: THEME.textPrimary } },
      { text: p.offer, options: { bold: true, color: THEME.textPrimary } }
    ], { x: px + 0.2, y: 3.2, w: 3.35, h: 2.9, fontSize: 10, fontFace: 'Arial', lineSpacingMultiple: 1.25 });

    px += 3.99;
  });
}

// Slide 15: Competitor Landscape
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / COMPETITION', 'Competitor Landscape: Ecosystems vs Specialists', 'Analyzing Market Advantages, Industry Gaps and The Vanta House Response', 15);

  const compData = [
    [
      { text: 'PLAYER TYPE', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'CORE ADVANTAGE', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'TRADE-OFF / GAP', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'VANTA HOUSE RESPONSE', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } }
    ],
    [
      { text: 'Big-Tech Ecosystems\n(Amazon, Google, Apple)' },
      { text: 'Familiar apps; massive brand reach; broad catalog integration' },
      { text: 'Platform dependence; fragmented UI; gadget clutter' },
      { text: 'One guided, coherent, architectural lifestyle experience' }
    ],
    [
      { text: 'Device Specialists\n(Tuya, Philips Hue, Yale)' },
      { text: 'Deep category focus; specialized hardware; competitive pricing' },
      { text: 'Multiple apps required; fragmented communication protocols' },
      { text: 'Curated ecosystem bundles with universal design language' }
    ],
    [
      { text: 'Premium Automation\n(Control4, Savant, Crestron)' },
      { text: 'Bespoke custom control; high-end dealer installation' },
      { text: 'Extremely high cost; opaque pricing; complex setup' },
      { text: 'Accessible luxury positioning with transparent pricing' }
    ],
    [
      { text: 'DIY / Generic Devices\n(No-name smart plugs)' },
      { text: 'Very low barrier to entry; impulse purchase pricing' },
      { text: 'Inconsistent reliability; security flaws; poor support' },
      { text: 'Trusted hardware build, titanium finish, and local support' }
    ]
  ];

  s.addTable(compData, {
    x: 0.8, y: 2.05, w: 11.733, h: 4.25,
    fontFace: 'Arial', fontSize: 10,
    color: THEME.textSecondary,
    border: { color: THEME.border, pt: 1 },
    fill: { color: THEME.surface },
    rowH: [0.55, 0.9, 0.9, 0.9, 0.9]
  });
}

// Slide 16: Positioning Map
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / POSITIONING MAP', 'Positioning Map: Where The Vanta House Competes', 'Strategic Quadrant: Balancing Premium Experience with Approachable Setup', 16);

  // Left Content Card
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.5, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addText('STRATEGIC SWEET SPOT', {
    x: 1.1, y: 2.2, w: 4.9, h: 0.25, fontSize: 10, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5
  });

  s.addText('The Vanta House occupies the under-served quadrant between low-integration mass gadgets and prohibitively expensive bespoke automation.', {
    x: 1.1, y: 2.55, w: 4.9, h: 1.0, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textPrimary, lineSpacingMultiple: 1.25
  });

  const pPoints = [
    'Avoids the high friction and complex dealer lock-in of luxury systems.',
    'Eliminates the cheap plastic aesthetics of generic DIY components.',
    'Provides unified industrial design with unified app control.',
    'Offers transparent pricing and seamless lead consultation.'
  ];

  let py = 3.65;
  pPoints.forEach(pt => {
    s.addText(`•  ${pt}`, {
      x: 1.1, y: py, w: 4.9, h: 0.5, fontSize: 10.5, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.2
    });
    py += 0.55;
  });

  // Right Quadrant Diagram
  s.addShape(pres.ShapeType.roundRect, {
    x: 6.55, y: 1.95, w: 5.98, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });

  // Quadrant Axes
  s.addShape(pres.ShapeType.line, { x: 7.0, y: 4.15, w: 5.1, h: 0, line: { color: THEME.borderLight, width: 1.5 } });
  s.addShape(pres.ShapeType.line, { x: 9.55, y: 2.3, w: 0, h: 3.7, line: { color: THEME.borderLight, width: 1.5 } });

  s.addText('HIGH INTEGRATION (COORDINATED ECOSYSTEM) ➔', {
    x: 9.7, y: 4.0, w: 2.4, h: 0.25, fontSize: 7, fontFace: 'Arial', bold: true, color: THEME.textMuted
  });
  s.addText('HIGH PRICE / BESPOKE', {
    x: 8.55, y: 2.15, w: 2.0, h: 0.25, fontSize: 7.5, fontFace: 'Arial', bold: true, color: THEME.textMuted, align: 'center'
  });
  s.addText('APPROACHABLE PRICE / ACCESSIBLE', {
    x: 8.55, y: 6.05, w: 2.0, h: 0.25, fontSize: 7.5, fontFace: 'Arial', bold: true, color: THEME.textMuted, align: 'center'
  });

  // Competitor placements
  s.addText('Luxury Specialists\n(Control4, Savant)', { x: 10.0, y: 2.5, w: 2.2, h: 0.5, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted });
  s.addText('DIY Generic Gadgets\n(Tuya, Unbranded)', { x: 7.2, y: 5.2, w: 2.0, h: 0.5, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted });
  s.addText('Big Tech Platforms\n(Alexa, Google Home)', { x: 9.8, y: 5.2, w: 2.2, h: 0.5, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted });

  // Vanta House highlight badge
  s.addShape(pres.ShapeType.roundRect, {
    x: 9.9, y: 3.2, w: 2.2, h: 0.7, rectRadius: 0.1,
    fill: { color: THEME.textPrimary }, line: { color: THEME.textPrimary, width: 1 }
  });
  s.addText('★ THE VANTA HOUSE\n(High Integration · Accessible Premium)', {
    x: 9.9, y: 3.28, w: 2.2, h: 0.55, fontSize: 8.5, fontFace: 'Arial', bold: true, color: '000000', align: 'center', lineSpacingMultiple: 1.15
  });
}

// Slide 17: Keyword Research - Intent Based
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / KEYWORD RESEARCH', 'Keyword Research: Capture Intent, Not Just Traffic', 'Categorizing Search Terms Across the Complete Customer Decision Journey', 17);

  const kwBuckets = [
    {
      stage: 'STAGE 1: DISCOVERY',
      role: 'Broad Awareness',
      keywords: '• smart home devices\n• home automation ideas\n• smart home for beginners\n• connected home technology\n• ambient intelligent living'
    },
    {
      stage: 'STAGE 2: COMPARISON',
      role: 'Active Consideration',
      keywords: '• best smart home system India\n• smart home hub comparison\n• Matter compatible smart devices\n• smart door lock vs traditional\n• smart security vs CCTV'
    },
    {
      stage: 'STAGE 3: PURCHASE / ACTION',
      role: 'High Conversion Intent',
      keywords: '• buy smart home kit India\n• smart home installation cost\n• smart lighting price\n• smart security system price\n• smart home consultation Mumbai/Delhi'
    }
  ];

  let kx = 0.8;
  kwBuckets.forEach(b => {
    s.addShape(pres.ShapeType.roundRect, {
      x: kx, y: 1.95, w: 3.75, h: 3.3, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(b.stage, { x: kx + 0.2, y: 2.15, w: 3.35, h: 0.25, fontSize: 9.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5 });
    s.addText(b.role, { x: kx + 0.2, y: 2.45, w: 3.35, h: 0.35, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addShape(pres.ShapeType.line, { x: kx + 0.2, y: 2.9, w: 3.35, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText(b.keywords, { x: kx + 0.2, y: 3.1, w: 3.35, h: 1.9, fontSize: 10.5, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.35 });
    kx += 3.99;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.45, w: 11.733, h: 0.95, rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });
  s.addText('SEO MAPPING PRINCIPLE: One primary intent per page. Secondary terms appear organically across headings, specs, FAQs and internal links.', {
    x: 1.1, y: 5.75, w: 11.1, h: 0.35, fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center'
  });
}

// Slide 18: Keyword-to-Page Plan
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / KEYWORD PLAN', 'Keyword-to-Page Plan: Practical SEO Structure', 'Mapping Keywords, Supporting LSI Terms and Targeted Call-to-Actions by Route', 18);

  const planData = [
    [
      { text: 'PAGE ROUTE', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'PRIMARY KEYWORD', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'SUPPORTING LSI TERMS', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } },
      { text: 'TARGET CTA / CONVERSION', options: { bold: true, color: THEME.textPrimary, fill: { color: THEME.accentSubtle } } }
    ],
    [
      { text: 'Homepage (/)' },
      { text: 'Smart home solutions' },
      { text: 'Connected home; home automation; intelligent living' },
      { text: 'Explore systems / Enter collection' }
    ],
    [
      { text: 'Collection (/products/)' },
      { text: 'Smart home devices India' },
      { text: 'Touchscreen hub, door lock, smart lighting' },
      { text: 'View product specifications' }
    ],
    [
      { text: 'Smart Living (/smart-living/)' },
      { text: 'Home automation ideas' },
      { text: 'Circadian lighting; evening routines; away mode' },
      { text: 'Experience living room demo' }
    ],
    [
      { text: 'Consultation (/contact/)' },
      { text: 'Smart home consultation' },
      { text: 'Custom automation estimate; luxury home advice' },
      { text: 'Send consultation enquiry' }
    ],
    [
      { text: 'Product Detail (/products/core/)' },
      { text: 'Smart home control hub' },
      { text: 'Central touchscreen; Zigbee/Matter; climate UI' },
      { text: 'Enquire about Vanta Core' }
    ]
  ];

  s.addTable(planData, {
    x: 0.8, y: 2.1, w: 11.733, h: 3.5,
    fontFace: 'Arial', fontSize: 10,
    color: THEME.textSecondary,
    border: { color: THEME.border, pt: 1 },
    fill: { color: THEME.surface },
    rowH: [0.55, 0.55, 0.55, 0.55, 0.55, 0.55]
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.8, w: 11.733, h: 0.6, rectRadius: 0.08,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.border, width: 0.8 }
  });
  s.addText('Validation Note: Search volume and CPC estimates should be tracked via Google Keyword Planner for active paid media.', {
    x: 1.0, y: 5.95, w: 11.3, h: 0.3, fontSize: 9.5, fontFace: 'Arial', color: THEME.textMuted, align: 'center'
  });
}

// Slide 19: SWOT Analysis
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / SWOT ANALYSIS', 'SWOT Analysis: Strategic Market Reality Check', 'Synthesizing Internal Architectural Strengths with External Category Dynamics', 19);

  const swot = [
    {
      title: 'STRENGTHS',
      points: '• Cohesive brand identity + curated titanium design\n• Transparent project pricing and zero hidden fees\n• Clear outcome-led messaging without jargon\n• Lightweight, high-speed bespoke digital platform'
    },
    {
      title: 'WEAKNESSES',
      points: '• Academic prototype with limited brand history\n• Physical hardware manufacturing not yet scaled\n• Installation and after-sales support must be proven\n• Smaller initial product catalog compared to big-tech'
    },
    {
      title: 'OPPORTUNITIES',
      points: '• Rapid expansion of premium housing in India\n• Consumer fatigue with cluttered, fragmented apps\n• Turnkey automation consultation as high-margin service\n• Curated bundle marketing for new homeowners'
    },
    {
      title: 'THREATS',
      points: '• Aggressive pricing from Chinese generic hardware\n• Big-tech ecosystem lock-in (Apple Home, Google)\n• Heightened consumer privacy & data leakage fears\n• Rapid protocol changes requiring agile firmware'
    }
  ];

  const coords = [
    { x: 0.8, y: 2.0 }, { x: 6.833, y: 2.0 },
    { x: 0.8, y: 4.3 }, { x: 6.833, y: 4.3 }
  ];

  swot.forEach((item, idx) => {
    const c = coords[idx];
    s.addShape(pres.ShapeType.roundRect, {
      x: c.x, y: c.y, w: 5.7, h: 2.15, rectRadius: 0.1,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(item.title, {
      x: c.x + 0.2, y: c.y + 0.15, w: 5.3, h: 0.3,
      fontSize: 11.5, fontFace: 'Arial', bold: true, color: THEME.textPrimary, charSpacing: 1.5
    });
    s.addText(item.points, {
      x: c.x + 0.2, y: c.y + 0.5, w: 5.3, h: 1.55,
      fontSize: 9.5, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.3
    });
  });
}

// Slide 20: Research-Led Strategy
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 02 / STRATEGY', 'Research-Led Strategy: Earn Trust Before Scaling', 'Five Foundational Directives Guiding Website Architecture and Funnel Execution', 20);

  const directives = [
    { num: '01', title: 'Lead with Outcomes:', desc: 'Focus on peace of mind, time savings, and ambient comfort rather than dry protocol specs.' },
    { num: '02', title: 'Make Compatibility Visible:', desc: 'Clearly outline supported protocols, setup steps, and ecosystem boundaries upfront.' },
    { num: '03', title: 'Sell a Clear Starting Point:', desc: 'Offer transparently priced starter bundles tailored to distinct buyer persona triggers.' },
    { num: '04', title: 'Build Tangible Social Proof:', desc: 'Provide interactive 3D demos, transparent privacy terms, and detailed technical specs.' },
    { num: '05', title: 'Measure the Complete Funnel:', desc: 'Track search impressions ➔ product visits ➔ feature exploration ➔ consultation enquiry.' }
  ];

  let dy = 2.0;
  directives.forEach(d => {
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: dy, w: 11.733, h: 0.75, rectRadius: 0.08,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(d.num, {
      x: 1.0, y: dy + 0.18, w: 0.5, h: 0.35, fontSize: 13, fontFace: 'Arial', bold: true, color: THEME.badgeText
    });
    s.addText(d.title, {
      x: 1.55, y: dy + 0.2, w: 3.2, h: 0.35, fontSize: 11.5, fontFace: 'Arial', bold: true, color: THEME.textPrimary
    });
    s.addText(d.desc, {
      x: 4.85, y: dy + 0.2, w: 7.4, h: 0.35, fontSize: 10, fontFace: 'Arial', color: THEME.textSecondary
    });
    dy += 0.85;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 6.0, w: 11.733, h: 0.45, rectRadius: 0.06,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 0.8 }
  });
  s.addText('BOTTOM LINE: The Vanta House competes on clarity, trust, and a unified experience, not device count alone.', {
    x: 1.0, y: 6.12, w: 11.3, h: 0.25, fontSize: 9.5, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center'
  });
}

// ==========================================================================
// PART 3: WEBSITE DEVELOPMENT, SEO & ENQUIRY FORM (Slides 21 to 30)
// ==========================================================================

// Slide 21 (Topic 1): Website Development Overview
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / WEBSITE DEVELOPMENT OVERVIEW', 'A Digital Showroom for Intelligent Living in India', 'Introduction, Core Brand Purpose and Strategic Project Objectives', 21);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addText('PROJECT CONTEXT & OBJECTIVES', {
    x: 1.1, y: 2.15, w: 5.1, h: 0.3, fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.textPrimary, charSpacing: 1.5
  });

  const s21Bullets = [
    { title: 'Brand Introduction:', desc: 'The Vanta House is an Indian premium smart-home technology academic concept, blending architectural minimalism with ambient intelligence.' },
    { title: 'Core Purpose:', desc: 'Create an ultra-refined, pitch-black digital presence that elevates smart living from cluttered gadgets into timeless architectural objects.' },
    { title: 'Key Objectives:', desc: 'Establish brand credibility, showcase 4 proprietary titanium devices, maintain zero-friction responsive browsing, and generate high-intent consultation leads.' },
    { title: 'Team Role & Attribution:', desc: 'Designed & developed by Y7XIFIED, encompassing full-stack web development, SEO keyword mapping, on-page optimization, and lead handling.' }
  ];

  let y = 2.55;
  s21Bullets.forEach(b => {
    s.addText([
      { text: `${b.title} `, options: { bold: true, color: THEME.textPrimary } },
      { text: b.desc, options: { color: THEME.textSecondary } }
    ], { x: 1.1, y, w: 5.1, h: 0.85, fontSize: 10.5, fontFace: 'Arial', lineSpacingMultiple: 1.25 });
    y += 0.92;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addImage({
    path: resolve('docs/screenshots/01-homepage-hero.png'),
    x: 6.9, y: 2.1, w: 5.48, h: 3.55
  });

  s.addText('FIGURE 21.1: Live Homepage Hero Interface (Pitch-Black Aesthetic)', {
    x: 6.9, y: 5.85, w: 5.48, h: 0.35, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted, align: 'center'
  });
}

// Slide 22 (Topic 2): Website Structure
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / WEBSITE STRUCTURE', 'Information Architecture & Navigation Flow', 'Comprehensive Sitemap: Five Core Destinations and Ten Pre-Rendered Routes', 22);

  const pages = [
    { num: '01', title: 'Home Page (/)', role: 'Brand Foundation', desc: 'Cinematic hero, brand manifesto, interactive 3D residence model, spatial gallery, and conversion gateway.' },
    { num: '02', title: 'Collection (/products/)', role: 'Hardware Showcase', desc: 'Filterable catalog featuring all four titanium concepts, clear pricing, specifications, and direct enquiry CTAs.' },
    { num: '03', title: 'Smart Living (/smart-living/)', role: 'Experiential Context', desc: 'Time-sequenced domestic scenarios (07:00, 09:00, 14:00, 18:30) demonstrating subtle automation routines.' },
    { num: '04', title: 'Philosophy (/philosophy/)', role: 'Brand Authority', desc: 'Articulating three pillars: Design with Restraint, Intelligence with Purpose, and People at the Centre.' },
    { num: '05', title: 'Contact (/contact/)', role: 'Lead Acquisition', desc: 'Interactive consultation request form with multi-tier input validation and real-time verification.' }
  ];

  let cardX = 0.8;
  pages.forEach(p => {
    s.addShape(pres.ShapeType.roundRect, {
      x: cardX, y: 1.95, w: 2.25, h: 3.3, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(p.num, { x: cardX + 0.15, y: 2.1, w: 1.95, h: 0.35, fontSize: 18, fontFace: 'Arial', bold: true, color: THEME.borderLight });
    s.addText(p.title, { x: cardX + 0.15, y: 2.5, w: 1.95, h: 0.45, fontSize: 11, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addShape(pres.ShapeType.rect, {
      x: cardX + 0.15, y: 3.0, w: 1.95, h: 0.22,
      fill: { color: THEME.accentSubtle }, line: { color: THEME.border, width: 0.5 }
    });
    s.addText(p.role.toUpperCase(), {
      x: cardX + 0.15, y: 3.02, w: 1.95, h: 0.18, fontSize: 7.5, fontFace: 'Arial', bold: true, color: THEME.badgeText, align: 'center'
    });
    s.addText(p.desc, {
      x: cardX + 0.15, y: 3.3, w: 1.95, h: 1.8, fontSize: 9.5, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.2
    });
    cardX += 2.37;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.4, w: 11.733, h: 1.0, rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.borderLight, width: 1 }
  });
  s.addText([
    { text: 'USER CONVERSION FUNNEL:  ', options: { bold: true, color: THEME.textPrimary } },
    { text: 'AWARENESS (Home) ', options: { color: THEME.textSecondary } },
    { text: '➔  INTEREST (Smart Living) ', options: { color: THEME.textSecondary } },
    { text: '➔  CONSIDERATION (Collection & Product Details) ', options: { color: THEME.textSecondary } },
    { text: '➔  CONVERSION (Consultation Enquiry)', options: { bold: true, color: THEME.textPrimary } }
  ], { x: 1.0, y: 5.65, w: 11.3, h: 0.5, fontSize: 10, fontFace: 'Arial', align: 'center' });
}

// Slide 23 (Topic 3): Homepage Design
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / HOMEPAGE DESIGN', 'Homepage Layout, Branding & High-Intent CTA System', 'Restrained Luxury Aesthetic Combining Pitch-Black Canvas with Smooth Micro-Interactions', 23);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  const s23Points = [
    { title: 'Titanium Minimalism Styling:', desc: 'Crafted with a pitch-black background (#000000), deep titanium graphite accents, and high-contrast typography in Google Sans Flex.' },
    { title: 'Hero Architecture & Layout:', desc: 'Features cinematic architecture, an unhurried editorial headline, and dual call-to-actions ("Enter the collection" and "Explore the house").' },
    { title: 'Kinetic Brand Marquee:', desc: 'A continuously gliding marquee showcasing "CONSIDERED DESIGN ✳ INTUITIVE LIVING ✳ QUIET INTELLIGENCE" in crisp white bold font with glowing star marks.' },
    { title: 'Interactive 3D Spatial Canvas:', desc: 'WebGL Three.js architectural house model allowing visitors to drag, rotate, inspect room routines, and trigger live lighting cues.' }
  ];

  let y = 2.2;
  s23Points.forEach(p => {
    s.addText([
      { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
      { text: p.desc, options: { color: THEME.textSecondary } }
    ], { x: 1.1, y, w: 5.1, h: 0.85, fontSize: 10.5, fontFace: 'Arial', lineSpacingMultiple: 1.25 });
    y += 0.95;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addImage({
    path: resolve('docs/screenshots/01-homepage-hero.png'),
    x: 6.9, y: 2.1, w: 5.48, h: 3.55
  });

  s.addText('FIGURE 23.1: Live Homepage Hero Interface (Branding, Navigation & Dual CTAs)', {
    x: 6.9, y: 5.85, w: 5.48, h: 0.35, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted, align: 'center'
  });
}

// Slide 24 (Topic 4): Product Showcase
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / PRODUCT SHOWCASE', 'The Titanium Collection: Four Smart Home Devices', 'Hardware Specifications, Balanced 4-Column Presentation and Transparent Academic Pricing', 24);

  const products = [
    { name: 'Vanta Core', cat: 'Control Hub', price: '₹24,999', features: 'Central touchscreen hub · Climate & lighting automation · Scene selector · Ambient sensor array' },
    { name: 'Vanta Secure', cat: 'Smart Door Lock', price: '₹14,999', features: 'Biometric fingerprint scanner · Backlit PIN pad · Encrypted RFID entry · Titanium deadbolt' },
    { name: 'Vanta Glow', cat: 'Smart Lighting', price: '₹7,999', features: 'Circadian rhythm synchronization · Flush architectural ceiling mount · Smooth warm dimming' },
    { name: 'Vanta Vision', cat: 'Security Camera', price: '₹5,999', features: 'Discreet 4K HDR vision · On-device edge privacy processing · Physical mechanical privacy shutter' }
  ];

  let px = 0.8;
  products.forEach(p => {
    s.addShape(pres.ShapeType.roundRect, {
      x: px, y: 1.95, w: 2.8, h: 2.65, rectRadius: 0.12,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });
    s.addText(p.cat.toUpperCase(), { x: px + 0.15, y: 2.1, w: 2.5, h: 0.25, fontSize: 8, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.5 });
    s.addText(p.name, { x: px + 0.15, y: 2.35, w: 1.7, h: 0.35, fontSize: 14, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addText(p.price, { x: px + 1.6, y: 2.35, w: 1.05, h: 0.35, fontSize: 12, fontFace: 'Arial', bold: true, color: THEME.textSecondary, align: 'right' });
    s.addShape(pres.ShapeType.line, { x: px + 0.15, y: 2.75, w: 2.5, h: 0, line: { color: THEME.border, width: 0.8 } });
    s.addText(p.features, { x: px + 0.15, y: 2.85, w: 2.5, h: 1.6, fontSize: 9.5, fontFace: 'Arial', color: THEME.textSecondary, lineSpacingMultiple: 1.3 });
    px += 2.978;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 4.75, w: 11.733, h: 1.65, rectRadius: 0.1,
    fill: { color: THEME.surfaceAlt }, line: { color: THEME.border, width: 1 }
  });

  s.addImage({
    path: resolve('docs/screenshots/03-products-page.png'),
    x: 0.95, y: 4.85, w: 2.5, h: 1.45
  });

  s.addText([
    { text: 'COLLECTION SHOWCASE FEATURES:\n', options: { bold: true, color: THEME.textPrimary, fontSize: 11 } },
    { text: '• Balanced 4-Column Showcase: ', options: { bold: true, color: THEME.textPrimary } },
    { text: 'Eliminated awkward gaps with an evenly-spaced, compact luxury card layout.\n', options: { color: THEME.textSecondary } },
    { text: '• Dedicated Squircle Geometry: ', options: { bold: true, color: THEME.textPrimary } },
    { text: 'Curved 22px squircle radiuses applied directly to image frames to ensure smooth edges.\n', options: { color: THEME.textSecondary } },
    { text: '• Frictionless Conversion Bridge: ', options: { bold: true, color: THEME.textPrimary } },
    { text: 'Each device card links directly to a pre-filled consultation enquiry form.', options: { color: THEME.textSecondary } }
  ], { x: 3.65, y: 4.85, w: 8.6, h: 1.45, fontSize: 9.5, fontFace: 'Arial', lineSpacingMultiple: 1.2 });
}

// Slide 25 (Topic 5): HTML, CSS & JavaScript
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / HTML, CSS & JAVASCRIPT', 'Frontend Architecture, Technologies & Code Snippets', 'Zero-Bloat Semantic HTML5, Modular CSS Design System & ES6+ Modules', 25);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  const s25Tech = [
    { tech: 'Semantic HTML5 Architecture:', desc: 'Built using semantic containers (<main>, <section>, <article>, <dialog>) compiled into production-ready static HTML at build time for instant loading.' },
    { tech: 'CSS Design Tokens & Modern Grids:', desc: 'Modern CSS custom properties define squircle curvature (--squircle-md: 22px) and AMOLED dark surfaces, combined with dynamic CSS Grid and Flexbox.' },
    { tech: 'Lightweight Client-Side JavaScript:', desc: 'Native ES6+ modules power dynamic collection category filters, modal dialog previews, and real-time form validation without bulky third-party frameworks.' },
    { tech: 'GSAP Motion & Three.js 3D Engine:', desc: 'Fluid scroll choreographies driven by GSAP ScrollTrigger paired with an interactive Three.js canvas for architectural residence exploration.' }
  ];

  let y = 2.2;
  s25Tech.forEach(t => {
    s.addText([
      { text: `${t.tech} `, options: { bold: true, color: THEME.textPrimary } },
      { text: t.desc, options: { color: THEME.textSecondary } }
    ], { x: 1.1, y, w: 5.1, h: 0.85, fontSize: 10.5, fontFace: 'Arial', lineSpacingMultiple: 1.25 });
    y += 0.95;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.codeBg }, line: { color: THEME.borderLight, width: 1 }
  });

  s.addText('CORE ARCHITECTURE CODE SNIPPET (render.mjs / dark.css)', {
    x: 7.0, y: 2.15, w: 5.3, h: 0.25, fontSize: 9, fontFace: 'Courier New', bold: true, color: THEME.badgeText, charSpacing: 1
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

  s.addText(codeSnippet, {
    x: 7.0, y: 2.5, w: 5.3, h: 3.65, fontSize: 9.5, fontFace: 'Courier New', color: THEME.codeText, lineSpacingMultiple: 1.25
  });
}

// Slide 26 (Topic 6): Responsive Web Design
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / RESPONSIVE WEB DESIGN', 'Mobile, Tablet & Desktop Viewport Adaptability', 'Rigorous Cross-Device Testing: 30 Route & Viewport Checks with Zero Overflow', 26);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.5, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  const s26Points = [
    { title: 'Mobile Optimization (375px - 480px):', desc: 'Seamless single-column reflow, comfortable 44px+ touch targets, full-screen slideout menu drawer, and compact squircle product cards.' },
    { title: 'Tablet Adaptability (768px - 1024px):', desc: 'Balanced 2-column grid adaptation, fluid clamp() typography scaling, and streamlined multi-step enquiry layouts.' },
    { title: 'Desktop Canvas (1280px - 1440px+):', desc: 'Spacious 4-column product showcase, expansive Three.js 3D stage, and interactive spatial carousel with hover elevation.' },
    { title: 'Accessibility & Reduced Motion:', desc: 'Full compliance with prefers-reduced-motion media queries, accessible high-contrast text ratios, and skip-to-content keyboard bypass.' }
  ];

  let y = 2.2;
  s26Points.forEach(p => {
    s.addText([
      { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
      { text: p.desc, options: { color: THEME.textSecondary } }
    ], { x: 1.1, y, w: 4.9, h: 0.85, fontSize: 10.5, fontFace: 'Arial', lineSpacingMultiple: 1.25 });
    y += 0.95;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 6.55, y: 1.95, w: 5.98, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addImage({
    path: resolve('docs/screenshots/04-home-mobile.jpg'),
    x: 6.75, y: 2.1, w: 1.65, h: 3.55
  });

  s.addImage({
    path: resolve('docs/screenshots/01-home-desktop.jpg'),
    x: 8.55, y: 2.1, w: 3.75, h: 3.55
  });

  s.addText('FIGURE 26.1: Side-by-Side Mobile (375px) and Desktop (1440px) Viewport Renders', {
    x: 6.75, y: 5.85, w: 5.58, h: 0.35, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted, align: 'center'
  });
}

// Slide 27 (Topic 7): SEO Keyword Research
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / SEO KEYWORD RESEARCH', 'Strategic Search Intent Architecture & Keyword Mapping', 'Targeting High-Intent Discovery, Brand Affinity & Consultation Searches across India', 27);

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
    s.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: ky, w: 11.733, h: 0.98, rectRadius: 0.1,
      fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
    });

    s.addShape(pres.ShapeType.rect, {
      x: 1.05, y: ky + 0.18, w: 2.4, h: 0.28,
      fill: { color: THEME.accentSubtle }, line: { color: THEME.borderLight, width: 0.5 }
    });

    s.addText(k.intent, {
      x: 1.05, y: ky + 0.21, w: 2.4, h: 0.22, fontSize: 8, fontFace: 'Arial', bold: true, color: THEME.badgeText, align: 'center'
    });

    s.addText(k.target, {
      x: 1.05, y: ky + 0.55, w: 2.4, h: 0.3, fontSize: 9, fontFace: 'Courier New', color: THEME.textMuted, align: 'center'
    });

    s.addText([
      { text: 'PRIMARY KEYWORD: ', options: { bold: true, fontSize: 8.5, color: THEME.badgeText } },
      { text: `"${k.primary}"`, options: { bold: true, fontSize: 11, color: THEME.textPrimary } }
    ], { x: 3.65, y: ky + 0.18, w: 7.7, h: 0.32, fontFace: 'Arial' });

    s.addText([
      { text: 'SECONDARY KEYWORDS: ', options: { bold: true, fontSize: 8, color: THEME.textMuted } },
      { text: k.secondary, options: { fontSize: 9.5, color: THEME.textSecondary } }
    ], { x: 3.65, y: ky + 0.52, w: 7.7, h: 0.35, fontFace: 'Arial' });

    ky += 1.1;
  });
}

// Slide 28 (Topic 8): On-Page & Technical SEO
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / ON-PAGE & TECHNICAL SEO', 'Metadata Architecture, Semantic Markup & Technical Indexing', 'Implemented Standards Verified Directly in Source Code without Speculative Overpromising', 28);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  const s28Points = [
    { title: 'Unique Titles & Descriptions:', desc: 'Every route possesses handcrafted, high-relevance title tags and meta descriptions reflecting targeted consumer search intent.' },
    { title: 'Strict Heading Hierarchy:', desc: 'Strict adherence to single <h1> architecture per page, supported by structured <h2> and <h3> subheadings for clear crawler indexing.' },
    { title: 'Accessible Image Metadata:', desc: 'All WebP visuals incorporate descriptive alt attributes, alongside explicit width and height dimensions to eliminate Cumulative Layout Shift (CLS).' },
    { title: 'Technical Infrastructure:', desc: 'Automated /sitemap.xml generation, clean /robots.txt routing, self-referential canonical tags, and Schema.org WebSite JSON-LD structured data.' }
  ];

  let y = 2.2;
  s28Points.forEach(p => {
    s.addText([
      { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
      { text: p.desc, options: { color: THEME.textSecondary } }
    ], { x: 1.1, y, w: 5.1, h: 0.85, fontSize: 10.5, fontFace: 'Arial', lineSpacingMultiple: 1.25 });
    y += 0.95;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.codeBg }, line: { color: THEME.borderLight, width: 1 }
  });

  s.addText('ACTUAL SEO SOURCE CODE EVIDENCE (<head> Metadata)', {
    x: 7.0, y: 2.15, w: 5.3, h: 0.25, fontSize: 9, fontFace: 'Courier New', bold: true, color: THEME.badgeText, charSpacing: 1
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

  s.addText(seoSnippet, {
    x: 7.0, y: 2.45, w: 5.3, h: 3.75, fontSize: 9, fontFace: 'Courier New', color: THEME.codeText, lineSpacingMultiple: 1.25
  });
}

// Slide 29 (Topic 9): Customer Enquiry Form
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / CUSTOMER ENQUIRY FORM', 'Customer Enquiry Form, Multi-Tier Validation & Lead Storage', 'Frictionless Consultation Requests Backed by Server-Side Verification and Duplicate Protection', 29);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  const s29Points = [
    { title: 'Comprehensive Lead Form Fields:', desc: 'Captures Full Name, Email, Indian Phone (+91 validation), City, Product Interest dropdown, Enquiry Type, Date preference, and Project Message.' },
    { title: 'Indian Mobile & Regex Validation:', desc: 'Validates Indian 10-digit mobile phone numbers with optional +91 prefix while actively rejecting synthetic or malformed phone submissions.' },
    { title: 'Anti-Spam & Bot Defense:', desc: 'Employs a hidden honeypot trap field and minimum completion timestamp checks to thwart headless scrapers and automated bots.' },
    { title: 'Verified Storage & Idempotency:', desc: 'Form confirmation is generated only after server-side JSON persistence; identical retries return existing confirmation tokens without duplicates.' }
  ];

  let y = 2.2;
  s29Points.forEach(p => {
    s.addText([
      { text: `${p.title} `, options: { bold: true, color: THEME.textPrimary } },
      { text: p.desc, options: { color: THEME.textSecondary } }
    ], { x: 1.1, y, w: 5.1, h: 0.85, fontSize: 10.5, fontFace: 'Arial', lineSpacingMultiple: 1.25 });
    y += 0.95;
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addImage({
    path: resolve('docs/screenshots/03-form-success.jpg'),
    x: 6.9, y: 2.1, w: 5.48, h: 3.55
  });

  s.addText('FIGURE 29.1: Live Submission Evidence with Unique Reference Confirmation', {
    x: 6.9, y: 5.85, w: 5.48, h: 0.35, fontSize: 9, fontFace: 'Arial', color: THEME.textMuted, align: 'center'
  });
}

// Slide 30 (Topic 10): Website Testing & Conclusion
{
  const s = pres.addSlide();
  addSlideChrome(s, 'PART 03 / TESTING & CONCLUSION', 'Rigorous Quality Assurance, Live Deployment & Project Deliverables', 'Automated Test Suite Verification, Live Website Link and Mobile Scannable QR Code', 30);

  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 1.95, w: 5.7, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addText('AUTOMATED QA & PRODUCTION AUDIT METRICS', {
    x: 1.1, y: 2.15, w: 5.1, h: 0.25, fontSize: 10, fontFace: 'Arial', bold: true, color: THEME.badgeText, charSpacing: 1.2
  });

  const testStats = [
    { stat: '5 / 5', label: 'Backend Tests Passed', detail: 'Validation, idempotency, spam defense, and cross-origin security' },
    { stat: '30 / 30', label: 'Route Viewport Checks', detail: 'Zero layout shift or horizontal overflow across 375px, 768px, 1440px' },
    { stat: '0', label: 'Console Errors Observed', detail: 'Clean runtime execution with smooth graceful fallbacks' }
  ];

  let sy = 2.5;
  testStats.forEach(t => {
    s.addText(t.stat, { x: 1.1, y: sy, w: 1.3, h: 0.5, fontSize: 22, fontFace: 'Arial', bold: true, color: THEME.textPrimary });
    s.addText([
      { text: `${t.label}\n`, options: { bold: true, fontSize: 11, color: THEME.textPrimary } },
      { text: t.detail, options: { fontSize: 9.5, color: THEME.textSecondary } }
    ], { x: 2.5, y: sy + 0.02, w: 3.7, h: 0.55, fontFace: 'Arial', lineSpacingMultiple: 1.15 });
    s.addShape(pres.ShapeType.line, { x: 1.1, y: sy + 0.62, w: 5.1, h: 0, line: { color: THEME.border, width: 0.8 } });
    sy += 0.72;
  });

  s.addText([
    { text: 'PROJECT SUMMARY: ', options: { bold: true, color: THEME.textPrimary } },
    { text: 'The Vanta House successfully demonstrates how restrained aesthetic design, modern web architecture, and evidence-backed digital marketing converge into an effective, conversion-focused digital ecosystem.', options: { color: THEME.textSecondary } }
  ], { x: 1.1, y: 4.85, w: 5.1, h: 1.35, fontSize: 10, fontFace: 'Arial', lineSpacingMultiple: 1.25 });

  s.addShape(pres.ShapeType.roundRect, {
    x: 6.75, y: 1.95, w: 5.78, h: 4.45, rectRadius: 0.15,
    fill: { color: THEME.surface }, line: { color: THEME.border, width: 1 }
  });

  s.addImage({
    path: resolve('docs/screenshots/qrcode.png'),
    x: 8.44, y: 2.2, w: 2.4, h: 2.4
  });

  s.addText('SCAN TO EXPLORE LIVE WEBSITE', {
    x: 7.0, y: 4.75, w: 5.28, h: 0.3, fontSize: 10, fontFace: 'Arial', bold: true, color: THEME.textPrimary, align: 'center', charSpacing: 1.5
  });

  s.addText('https://thevantahouse.vercel.app', {
    x: 7.0, y: 5.08, w: 5.28, h: 0.35, fontSize: 11, fontFace: 'Courier New', color: THEME.badgeText, align: 'center'
  });

  s.addText('GitHub: https://github.com/Y7XIFIED/thevantahouse', {
    x: 7.0, y: 5.48, w: 5.28, h: 0.35, fontSize: 9.5, fontFace: 'Courier New', color: THEME.textMuted, align: 'center'
  });

  s.addText('Author & Lead Developer: Y7XIFIED', {
    x: 7.0, y: 5.88, w: 5.28, h: 0.3, fontSize: 9.5, fontFace: 'Arial', bold: true, color: THEME.textSecondary, align: 'center'
  });
}

// Write the PowerPoint file to docs directory
const outputPath = resolve('docs/The_Vanta_House_Presentation.pptx');
await pres.writeFile({ fileName: outputPath });
console.log(`Complete 30-Slide PowerPoint Presentation created successfully at: ${outputPath}`);
