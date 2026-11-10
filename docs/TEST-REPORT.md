# Verification — 10 November 2026

## Completed

- Signature redesign: keyboard-operated ambience slider updated from 68% to 69%; interactive Three.js canvas rendered; Vision and Glow selectors updated the correct copy; rotate and reset controls exercised.
- A deprecated Three.js shadow-map constant discovered during QA was replaced with the supported PCFShadowMap setting.
- Static-source checks: 10 unique titles, 10 unique descriptions, one H1 per page, canonicals/JSON-LD, and 260 local links/asset references resolved.

- `npm test`: 5 tests passed. Covered valid/invalid Indian mobile formats, required fields, consent, past/impossible dates, persistence, duplicate retry references, missing storage, honeypot, fill-time check, malformed JSON and cross-origin rejection.
- Ten routes checked in the browser at viewport widths 375, 768 and 1440 px: no horizontal overflow; one H1 per page; no broken loaded images detected. Raw observations are in `browser-checks.json`.
- Catalogue filtering: Lighting showed one product; All products restored the catalogue.
- Smart Living: Unwind changed the scene headline, description and light treatment.
- Product hotspot opened the correct dialog; close returned to the scene.
- Mobile menu opened and navigated to the collection.
- Empty enquiry form showed inline errors. Product parameter prefilled Core.
- A synthetic enquiry using demo@example.com returned reference `VH-05DA7546` and produced a 358-byte JSON record under ignored local storage. Attribution from the test campaign was stored with it.
- Basic fill-time protection rejected the first automated rapid submission; a safe retry succeeded.
- Browser console inspection returned no warnings or errors in the tested session.

## Screenshots

1. `screenshots/01-home-desktop.jpg`
2. `screenshots/02-collection.jpg`
3. `screenshots/03-form-success.jpg`
4. `screenshots/04-home-mobile.jpg`
5. `screenshots/05-product.jpg`
6. `screenshots/06-smart-living.jpg`

## Limits

These checks are focused functional and responsive checks, not a full accessibility certification or penetration test. Keyboard interactions use native links/buttons, a native dialog, visible focus styles, a skip link and labelled inputs. Reduced-motion behavior is implemented in CSS; a full assistive-technology audit was not performed. Lighthouse was not run, so no Lighthouse scores are reported. Search visibility is intentionally disabled for this private academic preview. No actual traffic, conversion rates, Google Ads results or commercial product performance are claimed.

## Final dark edition checks
30 route/width checks passed again. Atmosphere Studio Unwind returned 32% brightness, Focus returned 95%, and Arrive restored 68%. Mobile navigation worked. Five backend tests passed, and 270 internal links/assets resolved. Google Sans Flex and dark product assets are locally hosted.
