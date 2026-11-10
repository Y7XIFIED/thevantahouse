import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';

const req = createRequire('C:/Users/Y7XIFIED/.gemini/config/skills/playwright-skill/package.json');
const { chromium } = req('playwright');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:48293';
const OUT_DIR = path.resolve('docs/screenshots');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function run() {
  console.log(`Launching browser to capture screenshots from ${BASE_URL}...`);
  const browser = await chromium.launch({ headless: true });

  // 1. Homepage Hero (1440x900)
  {
    console.log('Capturing 1. Homepage Hero...');
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(OUT_DIR, '01-homepage-hero.png'),
      clip: { x: 0, y: 0, width: 1440, height: 880 }
    });
    await page.close();
  }

  // 2. Full Homepage
  {
    console.log('Capturing 2. Full Homepage...');
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(OUT_DIR, '02-full-homepage.png'),
      fullPage: true
    });
    await page.close();
  }

  // 3. Products Page (Showing all 4 products)
  {
    console.log('Capturing 3. Products Page...');
    const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
    await page.goto(`${BASE_URL}/products/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    // Scroll slightly to frame the header and all 4 product cards perfectly
    const grid = await page.$('.catalog');
    if (grid) {
      await grid.scrollIntoViewIfNeeded();
    }
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(OUT_DIR, '03-products-page.png'),
      clip: { x: 0, y: 120, width: 1440, height: 760 }
    });
    await page.close();
  }

  // 4. Product Details
  {
    console.log('Capturing 4. Product Details...');
    const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
    await page.goto(`${BASE_URL}/products/core/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(OUT_DIR, '04-product-details.png'),
      clip: { x: 0, y: 80, width: 1440, height: 860 }
    });
    await page.close();
  }

  // 5. Mobile Website (390x844)
  {
    console.log('Capturing 5. Mobile Website...');
    const page = await browser.newPage({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true
    });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: path.join(OUT_DIR, '05-mobile-website.png'),
      clip: { x: 0, y: 0, width: 390, height: 844 }
    });
    await page.close();
  }

  // 6. SEO Code (Rendered high-res code card)
  {
    console.log('Capturing 6. SEO Code...');
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    const seoCodeHtml = `
      <!doctype html>
      <html>
      <head>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: #000000;
            color: #d1d5db;
            font-family: 'Consolas', 'Courier New', monospace;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .window {
            background: #080a0c;
            border: 1px solid #1f2937;
            border-radius: 14px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.8);
            width: 100%;
            max-width: 1100px;
            overflow: hidden;
          }
          .titlebar {
            background: #0f141a;
            border-bottom: 1px solid #1f2937;
            padding: 12px 18px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
          .dot-red { background: #ef4444; }
          .dot-yellow { background: #eab308; }
          .dot-green { background: #22c55e; }
          .titlebar-text {
            color: #9ca3af;
            font-size: 13px;
            margin-left: 12px;
            font-family: Inter, sans-serif;
            letter-spacing: 0.05em;
          }
          pre {
            padding: 24px;
            font-size: 14px;
            line-height: 1.6;
            overflow-x: auto;
          }
          .tag { color: #f43f5e; }
          .attr { color: #a78bfa; }
          .val { color: #38bdf8; }
          .comment { color: #6b7280; font-style: italic; }
          .num { color: #4b5563; user-select: none; display: inline-block; width: 30px; text-align: right; margin-right: 14px; }
        </style>
      </head>
      <body>
        <div class="window">
          <div class="titlebar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
            <span class="titlebar-text">The Vanta House &mdash; SEO &amp; Semantic Metadata (dist/index.html)</span>
          </div>
          <pre><code><span class="num">01</span><span class="comment">&lt;!-- Primary Technical &amp; On-Page SEO Head Elements --&gt;</span>
<span class="num">02</span><span class="tag">&lt;title&gt;</span><span class="val">The Vanta House | Premium Smart Home Technology India</span><span class="tag">&lt;/title&gt;</span>
<span class="num">03</span><span class="tag">&lt;meta</span> <span class="attr">name=</span><span class="val">"description"</span> <span class="attr">content=</span><span class="val">"Explore premium smart home technology by The Vanta House. Discover intelligent lighting, smart security and connected home control concepts."</span><span class="tag">&gt;</span>
<span class="num">04</span><span class="tag">&lt;link</span> <span class="attr">rel=</span><span class="val">"canonical"</span> <span class="attr">href=</span><span class="val">"https://thevantahouse.vercel.app/"</span><span class="tag">&gt;</span>
<span class="num">05</span><span class="tag">&lt;meta</span> <span class="attr">name=</span><span class="val">"theme-color"</span> <span class="attr">content=</span><span class="val">"#000000"</span><span class="tag">&gt;</span>
<span class="num">06</span>
<span class="num">07</span><span class="comment">&lt;!-- Open Graph / Social Sharing Protocol --&gt;</span>
<span class="num">08</span><span class="tag">&lt;meta</span> <span class="attr">property=</span><span class="val">"og:type"</span> <span class="attr">content=</span><span class="val">"website"</span><span class="tag">&gt;</span>
<span class="num">09</span><span class="tag">&lt;meta</span> <span class="attr">property=</span><span class="val">"og:title"</span> <span class="attr">content=</span><span class="val">"The Vanta House | Premium Smart Home Technology India"</span><span class="tag">&gt;</span>
<span class="num">10</span><span class="tag">&lt;meta</span> <span class="attr">property=</span><span class="val">"og:description"</span> <span class="attr">content=</span><span class="val">"Intelligent Living. Considered Design. Premium Home Automation."</span><span class="tag">&gt;</span>
<span class="num">11</span><span class="tag">&lt;meta</span> <span class="attr">property=</span><span class="val">"og:image"</span> <span class="attr">content=</span><span class="val">"https://thevantahouse.vercel.app/assets/hero.webp"</span><span class="tag">&gt;</span>
<span class="num">12</span><span class="tag">&lt;meta</span> <span class="attr">property=</span><span class="val">"og:url"</span> <span class="attr">content=</span><span class="val">"https://thevantahouse.vercel.app/"</span><span class="tag">&gt;</span>
<span class="num">13</span>
<span class="num">14</span><span class="comment">&lt;!-- Structured Data JSON-LD for Rich Snippets --&gt;</span>
<span class="num">15</span><span class="tag">&lt;script</span> <span class="attr">type=</span><span class="val">"application/ld+json"</span><span class="tag">&gt;</span>
<span class="num">16</span>{
<span class="num">17</span>  <span class="attr">"@context"</span>: <span class="val">"https://schema.org"</span>,
<span class="num">18</span>  <span class="attr">"@type"</span>: <span class="val">"WebSite"</span>,
<span class="num">19</span>  <span class="attr">"name"</span>: <span class="val">"The Vanta House"</span>,
<span class="num">20</span>  <span class="attr">"url"</span>: <span class="val">"https://thevantahouse.vercel.app/"</span>,
<span class="num">21</span>  <span class="attr">"inLanguage"</span>: <span class="val">"en-IN"</span>
<span class="num">22</span>}
<span class="num">23</span><span class="tag">&lt;/script&gt;</span>
<span class="num">24</span>
<span class="num">25</span><span class="comment">&lt;!-- Semantic Product Image with Keyword-Rich Alt Text --&gt;</span>
<span class="num">26</span><span class="tag">&lt;img</span> <span class="attr">src=</span><span class="val">"/assets/core-dark.webp"</span> <span class="attr">alt=</span><span class="val">"Vanta Core smart home control hub in titanium and graphite"</span> <span class="attr">loading=</span><span class="val">"lazy"</span><span class="tag">&gt;</span></code></pre>
        </div>
      </body>
      </html>
    `;
    await page.setContent(seoCodeHtml);
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.join(OUT_DIR, '06-seo-code.png')
    });
    await page.close();
  }

  // 7. Consultation Form
  {
    console.log('Capturing 7. Consultation Form...');
    const page = await browser.newPage({ viewport: { width: 1440, height: 1050 } });
    await page.goto(`${BASE_URL}/contact/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    const form = await page.$('#enquiry-form');
    if (form) {
      await form.scrollIntoViewIfNeeded();
    }
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(OUT_DIR, '07-consultation-form.png'),
      clip: { x: 120, y: 100, width: 1200, height: 860 }
    });
    await page.close();
  }

  // 8. Form Confirmation
  {
    console.log('Capturing 8. Form Confirmation...');
    const page = await browser.newPage({ viewport: { width: 1440, height: 1050 } });
    await page.goto(`${BASE_URL}/contact/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Fill form fields
    await page.fill('#name', 'Aryan Sharma');
    await page.fill('#email', 'aryan.sharma@example.com');
    await page.fill('#phone', '+91 98765 43210');
    await page.fill('#city', 'Bengaluru');
    await page.selectOption('#product', 'core');
    await page.selectOption('#type', 'Consultation request');
    await page.fill('#date', '2026-11-20');
    await page.fill('#message', 'Interested in exploring the complete smart home ecosystem for our upcoming residence project.');
    await page.check('#consent');

    // Submit form
    await page.click('button[type="submit"]');

    // Wait for confirmation status
    await page.waitForSelector('#form-status:not(:empty)', { timeout: 6000 });
    await page.waitForTimeout(1000);

    const form = await page.$('#enquiry-form');
    if (form) {
      await form.scrollIntoViewIfNeeded();
    }
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(OUT_DIR, '08-form-confirmation.png'),
      clip: { x: 120, y: 150, width: 1200, height: 820 }
    });
    await page.close();
  }

  await browser.close();
  console.log('All 8 screenshots successfully captured and saved to docs/screenshots!');
}

run().catch(err => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
