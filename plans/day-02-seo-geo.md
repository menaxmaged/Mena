# Day 02 — SEO, GEO, robots.txt, llms.txt, SSG verification

> Status: implemented 2026-08-26

## Context
Follow-up to [day-01](day-01-apple-redesign.md)'s visual redesign. Site is a Next.js 16
`output: "export"` static site (deployed to cPanel per `.cpanel.yml` — no Node server at
runtime). User asked to improve SEO, "GEO" (generative-engine optimization — how AI
answer engines like ChatGPT/Claude/Perplexity crawl, cite, and summarize the site),
robots.txt, llms.txt, and to confirm content is server-rendered rather than client-only.

## Scope
1. Verify (don't just assume) that page content is fully present in the static-exported
   HTML, since several section components are `"use client"` for `motion` — confirm
   Next.js still SSGs their real content rather than shipping an empty shell.
2. `layout.tsx` metadata: `metadataBase`, canonical alternate, explicit `robots` /
   `googleBot` directives, `openGraph` `siteName`/`locale`/`profile` fields.
3. JSON-LD structured data (`Person` + `WebSite`) sourced from `src/lib/data.ts`, rendered
   server-side in the root layout.
4. `src/app/robots.ts` — metadata route generating `robots.txt`, explicit `Allow: /` for
   major AI/answer-engine crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
   etc.) in addition to the wildcard rule, plus a `Sitemap:` pointer.
5. `src/app/sitemap.ts` — metadata route generating `sitemap.xml` (single entry; the site
   is one page with anchor sections, so no per-section URLs).
6. `public/llms.txt` — hand-written markdown per the llms.txt convention: profile summary,
   links, experience, projects, education, skills, curated for LLM context ingestion
   (distinct purpose from robots.txt, which is crawl permission not content curation).

## Out of scope
- No JS framework/build-target change — `output: "export"` stays; metadata routes had to
  be made static-export-compatible (`export const dynamic = "force-static"`), not routed
  around.
- No sitemap entries for in-page anchors (`#projects`, etc.) — not meaningful as separate
  indexable URLs.
- `llms.txt` is a static hand-authored file, not generated from `data.ts` at build time —
  flagged as a follow-up if it drifts from the data file after future content edits.

## Verification plan
- `npm run build` (static export) succeeds with `/robots.txt` and `/sitemap.xml` listed as
  prerendered static routes.
- `cat out/robots.txt`, `out/sitemap.xml`, `out/llms.txt` — confirm real, correct content.
- `grep` `out/index.html` for the JSON-LD `<script type="application/ld+json">` blocks and
  for plain-text content (headline, company names, project names) to confirm SSG output,
  not a client-only shell.
- `npx eslint src --max-warnings=0`

## What was actually built

- Confirmed via `npm run build` + `grep out/index.html` (before touching anything) that
  content was already fully SSG'd: `"use client"` on a component only affects the
  hydration/interactivity boundary in Next.js App Router, not whether it's rendered server-
  side — the exported HTML already contained the real headline, company names, and project
  names with zero JS. No architectural change was needed to satisfy "make sure content is
  SSR"; this is SSG (stronger than per-request SSR for a static-export/cPanel deployment —
  fully pre-rendered once at build time, zero server compute per request), not literal SSR
  (there's no Node server at runtime to do per-request rendering). Called this out explicitly
  rather than silently reinterpreting the ask.
- `layout.tsx`: added `metadataBase`, `alternates.canonical`, explicit `robots`/`googleBot`
  directives, `openGraph.siteName`/`locale`/`type: "profile"` + `firstName`/`lastName`.
- New `src/components/StructuredData.tsx` (server component, sources `profile`/`experience`/
  `education`/`skills` from `data.ts`): renders `Person` + `WebSite` JSON-LD, mounted once in
  `layout.tsx`.
- New `src/app/robots.ts` and `src/app/sitemap.ts`. Both needed `export const dynamic =
  "force-static"` — Next.js's dynamic-usage heuristic flagged them (sitemap's `new Date()`,
  robots' data import) as incompatible with `output: "export"` without it; build failed with
  a clear error pointing at the fix, not silent.
- New `public/llms.txt`, hand-authored from the same `data.ts` content (profile, all 8
  experience entries, all 3 projects, education, skills) per the llms.txt community
  convention — copied verbatim into `out/` by Next's static-export public-dir handling, no
  route needed.

## Verification actually performed

- `npm run build` — clean, `/robots.txt` and `/sitemap.xml` both listed as prerendered
  static routes alongside `/`.
- `cat out/robots.txt` — wildcard allow-all plus 10 explicit named AI/answer-engine crawler
  rules (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai,
  PerplexityBot, Google-Extended, Applebot-Extended, CCBot) and a correct `Sitemap:` line.
- `cat out/sitemap.xml` — single correct `<url>` entry with today's `lastmod`.
- `ls out/llms.txt` — present, 2628 bytes.
- `grep out/index.html` for `application/ld+json` — both Person and WebSite blocks present
  with real data (name, url, image, sameAs, etc.), not placeholder/empty.
- `npx eslint src --max-warnings=0` — clean.
- Not done: no live Google Search Console / Rich Results Test submission (site isn't
  deployed from this session), no manual AI-crawler citation test (e.g. asking ChatGPT to
  summarize the live site) — both require the deployed production URL, out of reach here.
