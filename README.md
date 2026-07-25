# jacksonfeist — resume & consulting site

Single-page static site: résumé, portfolio, and consulting landing page in one.
No build step — plain HTML, CSS, and a small progressive-enhancement script.

## Structure

- `index.html` — all content (hero, selected work, projects, services, experience, about, contact)
- `styles.css` — design system: warm-paper palette, Fraunces + Inter, one green accent
- `script.js` — scroll reveal, sticky-header hairline, mobile menu, nav highlighting
- `assets/` — optimized images (sourced from the old RESUME site, the Secure Fields
  Forge app assets, and a live screenshot of boon.art)
- `Resume.pdf` — linked from the hero and contact sections; replace to update

## Preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Static output — works as-is on GitHub Pages (serve the repo root).

## Content notes

- MAN_HUNT and Sonic Charades App Store listings currently 404, so they are
  described without store links. Re-add links if the Apple developer account is
  reactivated.
- Secure Fields is presented without a repo link (repo is private) and marked
  "Preparing for Atlassian Marketplace launch" — update once listed.
- All claims (downloads, launches, intern counts) follow Resume.pdf wording.
