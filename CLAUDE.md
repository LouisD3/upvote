# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Astro dev server
- `npm run build` — Production build (Astro SSG)
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint
- `npm run test` — Run all tests (vitest)
- `npm run test:watch` — Run tests in watch mode

Deployed on **Vercel** (SSG output). Vercel config in `vercel.json` (redirects, security headers, CSP, caching).

## Architecture

**Astro SSG + React islands** — Pages are `.astro` files that wrap full-page React components hydrated with `client:load`.

### Page rendering pattern

Each page follows the same structure:
1. `src/pages/*.astro` — Astro page shell (SEO meta, JSON-LD schemas, CSS import)
2. `src/layouts/Layout.astro` — Shared `<head>` (meta tags, OG, structured data, Contentsquare)
3. `src/react-pages/*.tsx` — Full React component rendered inside the Astro shell via `client:load`

`client:load` = SSR at build time + hydration at runtime. HTML is pre-rendered and visible to crawlers.

### Key directories

- `src/components/landing/` — Section components (Hero, Pricing, FAQ, Process, etc.)
- `src/components/ui/` — shadcn/ui primitives (don't modify directly)
- `src/data/` — Static data files (FAQ content)
- `src/contexts/LanguageContext.tsx` — i18n via React context (FR default, EN toggle, state-based not URL-based)
- `src/lib/i18n.ts` — Translation keys and strings
- `src/integrations/supabase/` — Supabase client and types

### Path alias

`@/` → `./src/` (configured in tsconfig.json, astro.config.mjs, and vitest.config.ts)

## Site details

- **Site**: upvotepartners.com — Reddit marketing agency + GEO (Generative Engine Optimization)
- **Language**: French primary, English secondary (React state toggle, no separate URLs)
- **Pages**: `/` (agence reddit), `/agence-geo`, `/social`, `/partners`, `/404`
- `/social` and `/partners` are excluded from sitemap (see `astro.config.mjs` filter)
- `/agence-reddit` redirects 301 to `/` (see `vercel.json`)

## Styling

Tailwind CSS 3 + shadcn/ui (Radix UI). Config in `tailwind.config.ts`. Custom animations defined there (e.g., `animate-fade-up`).

`AnimatedSection` component (`src/components/ui/AnimatedSection.tsx`) uses CSS keyframes with `opacity:0` start — this affects LCP for H1 elements.
