# The Vanta House

A premium, fictional smart-home showroom for a Digital Marketing assignment. Designed and developed by [Y7XIFIED](https://github.com/Y7XIFIED).

## Run locally

Requires Node.js 22 or newer. Three.js and GSAP provide the interactive model and motion; esbuild bundles the browser modules.

```sh
npm ci
npm run build
npm run dev
```

Open http://127.0.0.1:4173. The development server uses the built Worker, so rebuild and restart it after source changes. Run `npm test` for backend validation and submission tests.

## What is included

- Ten semantic HTML pages: homepage, collection, four product detail pages, philosophy, Smart Living, contact and privacy.
- Original architectural concept artwork and four consistent product concepts; locally hosted, compressed WebP assets and fonts.
- Graphite grain, fluted-glass detail, monochromatic landscape, blueprint grid and contour treatments.
- Bodoni Moda editorial display type paired with Manrope and Inter; a working ambience dial, asymmetric product studies, GSAP entrances and scroll choreography, a Three.js architectural model with drag/keyboard rotation and four product selectors, room scenes, dialogs and reduced-motion support.
- Responsive navigation and catalogue filtering, product-specific enquiry links, unique metadata, canonicals, social metadata, sitemap, robots and truthful WebSite structured data.
- Real server-confirmed enquiry storage, client/server validation, retry deduplication, honeypot, minimum fill-time check, payload limits and same-origin checks.
- Y7XIFIED developer credit and GitHub link on every page.
- `docs/presentation.html`: ten-slide presentation, arrow-key navigation, actual screenshots, printable layout.
- `docs/presentation-notes.md`, `docs/TEST-REPORT.md`, `docs/browser-checks.json` and screenshot evidence.

## Source map

| File | Purpose |
|---|---|
| `src/data.mjs` | Brand, replaceable tagline, products, academic pricing |
| `src/render.mjs` | Shared semantic templates and page metadata |
| `src/home.mjs` | Signature homepage and modular showroom sections |
| `src/experience.mjs` | GSAP motion, lighting dial and lazy model loading |
| `src/spatial.mjs` | Three.js architectural model and accessible controls |
| `public/styles.css` | Design tokens, typography, responsive layouts, animation |
| `public/signature.css` | Editorial art direction and luxury display typography |
| `public/app.js` | Navigation, filters, scenes, dialog, form and analytics events |
| `src/api.mjs` | Validation and server-side submission handler |
| `scripts/build.mjs` | Generates static HTML and portable Worker bundle |
| `scripts/dev.mjs` | Local server with private file-based storage |
| `.openai/hosting.json` | Sites identity and storage declaration |

## Enquiry storage

Local submissions are written to `.local/enquiries/<submission UUID>.json`. This directory is ignored by Git and never exposed by the server. The deployed Worker expects an R2-compatible binding named `BUCKET`. It stores records at `enquiries/<submission UUID>.json`. Repeating a request with the same UUID returns the original reference without creating a second record.

Success is returned only after storage succeeds. Missing storage produces a truthful 503 error; network failure preserves the form for retry. Email delivery and appointment scheduling are **not** configured. Basic spam controls are demonstrations; an intentionally public commercial launch would need stronger rate limiting/bot protection, a retention policy and an operational contact channel. The current academic site explicitly asks for synthetic test details.

The project owner should remove demo records after assessment. No automatic retention or deletion job is configured. There is deliberately no unauthenticated listing endpoint.

## Deployment

The primary deployment is a private Sites Worker with an R2 storage binding. `npm run build` generates `dist/server/index.js` and copies `.openai/hosting.json`. Sites provisions the declared storage. No runtime secrets are needed.

For a different origin, set `SITE_ORIGIN` before building. On PowerShell:

```powershell
$env:SITE_ORIGIN = 'https://your-domain.example'
npm run build
```

For Netlify or Vercel, the generated `dist/client` directory can be hosted as a static site. To retain submission functionality, add a serverless adapter at `/api/enquiries` that imports `submit` from `src/api.mjs` and supplies a durable object-store adapter implementing asynchronous `get(key)` and `put(key, value)`. Do not publish only the static output and claim the form works. Alternatively configure a documented form service, update the client endpoint and privacy notice, and verify delivery first. Those accounts/services are not configured here.

## SEO and analytics

The academic/private preview intentionally uses `noindex, nofollow` and `Disallow: /`. This does not mean the page-specific SEO implementation is absent. Before an intentional public launch, review academic disclosure, set the real origin, remove the noindex directive in `src/render.mjs` and change `robots.txt` generation to allow indexing. Private Sites access remains a separate audience setting.

`window.dataLayer` and the `vanta:analytics` event expose `product_view`, `product_enquiry_click`, `consultation_cta_click`, `contact_page_visit`, and `form_submission_success`. No external tracker is active. UTM tags are stored for the session and attached to the enquiry; no contact details are included in analytics events.

To integrate GA4: create a web data stream for the final domain; configure the Google tag/GTM with its real measurement ID; connect the named events and non-personal parameters; add the required consent handling; mark `form_submission_success` as a key event; verify in DebugView using a real successful test submission. Never count the submit-button click as a successful lead. Do not forward enquiry field values to GA4.

## Validation limits

See `docs/TEST-REPORT.md`. Browser checks and API tests are recorded. Lighthouse scores and full WCAG conformance are not claimed; the 90+ values in the original brief remain targets until measured. Generated product imagery and all product features are academic concepts, not certified specifications.
