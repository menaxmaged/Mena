# Day 01 — Apple HIG redesign + motion pass

> Status: implemented 2026-08-26

## Context
Site is a Next.js 16 / Tailwind v4 portfolio (`src/`) currently styled as a generic dark
gradient/glassmorphism tech theme (blue-to-emerald gradient headings, `.glass` cards,
CSS-keyframe fade/float only). User wants a redesign grounded in Apple Human Interface
Guidelines look-and-feel plus best-available web animation, applied across all sections:
Nav, Hero, About, Experience, Education, Projects, Contact/ContactForm, Footer.

User decisions locked in before starting:
- Theme: light-first, Apple-style canvas (`#fbfbfd` bg / `#1d1d1f` text), with automatic
  dark mode via `prefers-color-scheme` (true-black `#000` canvas), no manual toggle.
- Accent: Apple system blue `#0071e3` (dark-mode accent `#2997ff`), flat — no gradient text.

## Scope
1. Install `motion` (React animation lib, framer-motion's successor) for spring-based
   scroll reveals, stagger, hover/tap micro-interactions, nav-scroll transitions.
2. Rebuild design tokens in `globals.css`: Apple color tokens (light + dark via
   `prefers-color-scheme`), spacing/radius conventions, remove old gradient/glass/keyframe
   system.
3. Font: system stack (`-apple-system, BlinkMacSystemFont, "SF Pro Text"`) with Inter as
   the cross-platform fallback (visually closest to SF, already wired via `next/font`).
   Drop JetBrains Mono (not part of the target look).
4. Build one shared `<Reveal>` client component (scroll-triggered fade/slide-up via
   `motion`'s `whileInView`, spring easing, respects `prefers-reduced-motion` automatically)
   — reused by every section instead of duplicating IntersectionObserver logic per file.
5. Redesign each component to HIG conventions: generous whitespace, large confident
   type, restrained flat color, translucent/blurring sticky nav that condenses on scroll,
   pill buttons, subtle card hover lift, staggered list/grid reveals.
6. Keep all copy/data from `src/lib/data.ts` unchanged — visual/motion layer only.

## Out of scope
- No content/copy changes.
- No manual light/dark toggle (system-driven only, per user choice).
- No new pages/routes.

## Verification plan
- `npm run lint`
- `npm run build`
- `git status --short` to confirm diff scope matches (components + globals.css + layout.tsx
  + package.json, no data.ts changes)
- Manual: `npm run dev`, check hero/nav/scroll-reveal behavior in browser at both a light
  and emulated dark system setting.

## What was actually built

- Installed `motion` (npm package, framer-motion's successor); imported via `motion/react`
  everywhere.
- `globals.css` rewritten: plain CSS custom properties on `:root` (light values) overridden
  under `@media (prefers-color-scheme: dark)`, then aliased through `@theme inline` so
  Tailwind utilities (`bg-bg`, `text-text`, `bg-accent`, etc.) stay dynamic across the media
  query. Went with this two-layer pattern instead of putting the values straight in `@theme`
  because Tailwind v4 bakes `@theme` values in at build time — nesting it in `@media` doesn't
  re-evaluate at runtime the way a plain custom property does.
- `layout.tsx`: dropped JetBrains Mono entirely (no monospace use in the new design),
  kept Inter as the cross-platform fallback behind `-apple-system, BlinkMacSystemFont, "SF Pro
  Text/Display"` so real San Francisco renders on Apple devices.
- New shared `Reveal.tsx` client component (spring `whileInView`, `once: true`) — used by
  About, Experience, Education, Projects, Contact instead of duplicating scroll-observer logic
  per section. `motion` respects `prefers-reduced-motion` automatically, no extra wiring
  needed.
- Nav: `useScroll`/`useMotionValueEvent` drives an animated translucency + blur transition
  (transparent → blurred `bg-elevated`) past an 8px scroll threshold; mobile menu uses
  `AnimatePresence` height/opacity spring instead of a plain conditional render.
- Hero, Projects cards, ContactForm submit, social icons, nav CTA: spring
  `whileHover`/`whileTap` micro-interactions (scale, lift, color).
- `icons.tsx` left untouched — icons already use `currentColor`/`fill="currentColor"` so they
  pick up the new text/accent tokens for free; no diff needed there.
- Content/data (`src/lib/data.ts`) untouched as scoped.
- Caveat: `old/` (the pre-Next.js static backup) is not covered by `eslint.config.mjs`'s
  ignores, so root `npm run lint` reports ~2400 warnings/133 errors against
  `old/assets/js/app.js` — all pre-existing, unrelated to this redesign. Confirmed via
  `npx eslint src` (zero output) that the actual source tree is clean. Left the eslint config
  alone since fixing it was out of this day's scope; flagging in case it should be a follow-up.

## Verification actually performed

- `npx eslint src` — clean, no errors/warnings.
- `npm run lint` (repo root) — only pre-existing `old/assets/js/app.js` noise, see caveat above.
- `npm run build` — compiled successfully, typechecked, static-generated `/` and `/_not-found`.
- Live check: started `next dev` via a tracked background task (an earlier attempt using a
  bare `&` subshell died silently between tool calls and a stale unrelated app was listening
  on :3000 — caught this by diffing response `<title>` before trusting screenshots), then
  drove it with a scratch Playwright install (kept out of the project's own
  `package.json`/lockfile): full-page screenshots of hero + a scrolled Experience section,
  each in both `colorScheme: "light"` and `colorScheme: "dark"` emulation, plus a full page
  scroll with `console`/`pageerror` listeners attached — zero console errors. Confirmed
  visually: light canvas `#fbfbfd`/`#1d1d1f` text, dark canvas true-black `#000`, Apple-blue
  `#0071e3`/`#2997ff` accent switching correctly with the emulated scheme, nav condense-on-
  scroll rendering as expected.
- Not done: no real-device/Safari check, no manual mouse-hover/tap interaction test of the
  spring micro-interactions (only static screenshots) — hover/tap states are visually implied
  by the code (`whileHover`/`whileTap` props) but not screenshot-verified in a hovered state.
