# Mena Maged's Personal Website

Personal portfolio site, built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Build

The site is statically exported (`output: "export"` in `next.config.ts`), producing plain HTML/CSS/JS in `out/` suitable for static hosting:

```bash
npm run build
```

Content (experience, education, projects, skills) lives in `src/lib/data.ts`.
