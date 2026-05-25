# Unit Zero — The AI-Native Blockchain

Production-ready marketing site for **Unit Zero**, a settlement layer purpose-built for autonomous agents and machine-to-machine economies.

> Infrastructure for autonomous economies.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** with a custom design system (`tailwind.config.ts`)
- **Framer Motion** for cinematic, scroll-driven motion
- **System fonts via `next/font/google`** — Inter Tight (display + body), JetBrains Mono (technical), Instrument Serif (editorial accent)
- Fully responsive · dark-first · mobile-first
- SEO-ready: OpenGraph, Twitter cards, sitemap, robots, structured metadata
- Deploys instantly to Vercel, Netlify, or Cloudflare Pages

---

## Folder Structure

```
unit-zero/
├── public/                       # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout: fonts, metadata, navbar/footer
│   │   ├── page.tsx              # Home — composes all sections
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Scroll-aware glass nav + mobile sheet
│   │   │   └── Footer.tsx        # Brand block + link columns + wordmark
│   │   ├── sections/             # 13 page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Narrative.tsx
│   │   │   ├── WhyDifferent.tsx
│   │   │   ├── Platform.tsx
│   │   │   ├── AgentEconomy.tsx
│   │   │   ├── Ecosystem.tsx
│   │   │   ├── AiDefi.tsx
│   │   │   ├── Infrastructure.tsx
│   │   │   ├── Developers.tsx
│   │   │   ├── Token.tsx
│   │   │   ├── Roadmap.tsx
│   │   │   ├── Partners.tsx
│   │   │   └── FinalCta.tsx
│   │   ├── ui/                   # Reusable design primitives
│   │   │   ├── Logo.tsx
│   │   │   ├── Reveal.tsx        # Scroll reveal & stagger helpers
│   │   │   └── SectionHeader.tsx
│   │   └── visuals/              # SVG / motion artwork
│   │       ├── AgentMesh.tsx     # Hero neural-network graph
│   │       ├── GridBackdrop.tsx  # Grid + scanline backgrounds
│   │       └── TerminalCard.tsx  # Animated agent terminal
│   ├── lib/
│   │   ├── site.ts               # Site config, nav, stats
│   │   └── utils.ts              # cn() class helper
│   └── styles/
│       └── globals.css           # Design tokens, base layer, primitives
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

---

## Deploy

### Vercel
```bash
npx vercel --prod
```
or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Zero config required — `vercel.json` is included.

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```
Set the build command to `npm run build` and publish directory to `.next`.

### Cloudflare Pages
Set framework preset to **Next.js**, build command `npm run build`, output directory `.next`.

---

## Design System

The aesthetic direction is **institutional AI infrastructure** — cinematic dark surface, editorial typography, restrained color, technical motion. Tokens live in `tailwind.config.ts` and `src/styles/globals.css`.

| Token        | Use                                              |
|--------------|--------------------------------------------------|
| `ink-*`      | Surface darks (50 → 500)                         |
| `bone-*`     | Foreground neutrals (50 → 500)                   |
| `signal-*`   | Primary accent — electric cyan                   |
| `plasma-*`   | Secondary accent — violet (neural / AI motif)    |
| `surface`    | Border + gradient card primitive                 |
| `bg-grid`    | Subtle grid pattern background                   |
| `eyebrow`    | Mono uppercase section label                     |
| `btn-primary`| Light pill CTA with shimmer hover                |
| `btn-ghost`  | Glass border CTA                                 |

---

## Customization

- **Copy & nav** — edit `src/lib/site.ts`
- **Stats** — `heroStats` in `src/lib/site.ts`
- **Sections** — each section lives in `src/components/sections/` and can be reordered in `src/app/page.tsx`
- **Colors / fonts** — `tailwind.config.ts` and `src/app/layout.tsx`

---

© Unit Zero Foundation. License: MIT.
