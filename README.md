# jackfeist.com

Single-page static site: a landing page aimed at small-business buyers, with the
work record kept lower down for technical and hiring readers. No build step.
Plain HTML, CSS, and a small progressive-enhancement script.

## Positioning

Two clauses, broad then narrow. "I build software for small businesses" is the
category, so a visitor with a large project still sees a software developer.
"The thing I get asked for most is taking over whatever process somebody is
still doing by hand" is the most common example, so a visitor with that exact
pain sees their pain. Automation is not the whole identity, and the offer is not
widened to "anything you need."

## Design

"Engineer's worksheet" look: graph-paper background, hard 2px ink borders, solid
offset shadows, one burnt-orange accent, monospace labels, rubber-stamp badges,
a taped-snapshot hero photo. Set in Bricolage Grotesque and IBM Plex Mono, the
only external requests on the page. No animation beyond hover states, no
tracking, no cookies.

## Structure

- `index.html`: all content (hero, proof strip, pilot, work, what I build,
  everything else, record, about, contact) plus Person and ProfessionalService
  JSON-LD
- `styles.css`: the full design system
- `script.js`: mobile menu, nav highlighting, footer year
- `assets/`: optimized images
- `Resume.pdf`: present in the repo but **not linked from the site**, see below

## Preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Static output. Works as-is on GitHub Pages (serve the repo root).

## Copy rules

These are absolute for anything on this site.

- No em dashes. Periods, commas, colons, or parentheses instead.
- First person singular only. Never "we", "our team", or anything implying
  company scale.
- No jargon in buyer-facing copy: no API, CSV, parser, pipeline, integration,
  endpoint, schema, or webhook in any headline or body a non-technical owner
  reads. The stack is named once, in the record section.
- Do not tell visitors what their problems are. Describe the work and let them
  recognize themselves in it.
- No jokes, and no self-deprecation about the work.
- Quantified claims are honest typical ranges, never promises. "Usually 10 to 15
  percent still needs a person" is fine. "Save 90 percent of your time" is not.
- Never invent case studies, testimonials, client names, logos, revenue, or
  hours-saved figures.

## Content notes

- **No phone number anywhere on the site**, by request. Email is the only direct
  contact. The contact copy points to a video call as the next step, never a
  phone call.
- **Calendly is not wired up yet.** The intended primary call to action is
  booking a video call. Until a Calendly link exists, email is the single call to
  action sitewide. To add it: put the button beside the email button in the hero,
  the pilot CTA strip, and the contact section.
- `Resume.pdf` is unlinked because its text could not be verified (subset-encoded
  fonts, not extractable here) and it likely still lists Cemental Software as
  current and includes a phone number. Re-link only after exporting a version
  with neither.
- Cemental Software appears once, in the record section, as past experience dated
  Oct 2025 to Jun 2026. Nothing on the site frames it as current.
- Secure Fields for Jira is **in Atlassian Marketplace review**, not released.
  Never describe it as shipped, live, or available. Repo
  (`forge-healthcare-compliance`) is private, so no code link. Marketing copy
  source: `forge-healthcare-compliance/docs/listing-copy-draft.md`; keep security
  claims scoped to that wording.
- App Store listings verified live under artist "Jackson Feist": MAN_HUNT
  `id6473125600`, Writhe `id6464530992`, Sonic Charades `id6480328193`, Ruff
  Rescue Shelter `id6479341501`. They 404'd once while the developer
  subscription lapsed, so re-check with
  `curl -o /dev/null -w '%{http_code}' -L` before trusting them.
- Inorganic Games is ongoing, never past tense.
- Boon.art is attributed to Oregon Software Consulting, where the role was
  product team lead. Its homepage says "under construction", so the card image is
  a screenshot of `/opportunities`.
- `assets/inorganic-games.png` is a screenshot of the live inorganicgames.com
  landing page (1280x800, above the fold).
- The source photo behind `assets/jackson.jpg` contains GPS EXIF of a home
  address. The copy in this repo was stripped via a PNG round-trip. Re-strip if
  it is ever re-exported.
- Unused in the current layout but kept in `assets/`: `writhe.jpg`,
  `ruff-rescue.jpg`, `sonic-charades.jpg`, `tntc.jpg`, `lmp.jpg`,
  `sidewalk-soccer.jpg`, `ai-drive-thru.jpg`, `neural-network.jpg`,
  `secure-fields-logo.svg`.
