# jackfeist.com

Single-page static site: resume, portfolio, and consulting landing page in one.
No build step. Plain HTML, CSS, and a small progressive-enhancement script.

## Design

"Engineer's worksheet" look: graph-paper background, hard 2px ink borders,
solid offset shadows, one burnt-orange accent, monospace labels, rubber-stamp
badges, a taped-snapshot hero photo, a stats ticker, and a project ledger with
a cursor-following image peek. Set in Bricolage Grotesque and IBM Plex Mono.

## Structure

- `index.html`: all content (hero, ticker, selected work, ledger, services, experience, about, contact)
- `styles.css`: the full design system
- `script.js`: mobile menu, scroll reveal, nav highlighting, ledger peek
- `assets/`: optimized images (sourced from the old RESUME site, the Secure Fields
  Forge app assets, and a live screenshot of boon.art)
- `Resume.pdf`: linked from the hero and contact sections; replace to update

## Preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Static output. Works as-is on GitHub Pages (serve the repo root).

## Content notes

- MAN_HUNT and Sonic Charades App Store listings currently 404, so they are
  described without store links. Re-add links if the Apple developer account is
  reactivated.
- Secure Fields is presented without a repo link (repo is private) and stamped
  "Launching soon". Update once listed on the Atlassian Marketplace.
- All claims (downloads, launches, intern counts) follow Resume.pdf wording.
