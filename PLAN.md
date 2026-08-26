# Project plan — menaxmaged.me portfolio

Master status doc. Day plans live in `plans/`.

## Status

| Day | Slug | Status |
|-----|------|--------|
| 01 | [apple-redesign](plans/day-01-apple-redesign.md) | done — 2026-08-26 |
| 02 | [seo-geo](plans/day-02-seo-geo.md) | done — 2026-08-26 |

## History

- 2026-08-26: Shipped Day 01 — full visual/motion redesign to Apple HIG look
  (light-first, system-blue accent, `motion` lib for spring/scroll animation).
  Lint (src) + build clean; screenshot-verified light/dark in headless Chromium.
- 2026-08-26: Shipped Day 02 — SEO/GEO pass: JSON-LD Person+WebSite schema, robots.txt
  with explicit AI-crawler allow rules, sitemap.xml, llms.txt, canonical/metadataBase.
  Confirmed content was already fully SSG'd (static export) before this pass — no
  client-only-shell issue existed.
