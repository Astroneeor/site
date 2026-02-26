# static-site

Portfolio site built with Vite, React, TypeScript, and TailwindCSS.

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite** — dev server and bundler
- **TailwindCSS** — utility styling with a custom `forest-*` color scale and Space Grotesk display font
- **Framer Motion** — component transitions and staggered reveals
- **GSAP** — scroll-driven timelines
- **Lenis** — smooth-scroll easing

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server with HMR
npm run build     # Type-check then bundle → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint check
```

## Structure

```
src/
├── sections/       # Full-page sections (Hero, About, Features, Showcase, CTA, Footer)
├── components/     # Shared UI (Navbar, Button, SectionWrapper, StarBackground, VineBackground)
├── hooks/          # useSmoothScroll, useScrollAnimation
└── styles/         # Tailwind directives + custom layers (.glass, .text-gradient, .glow)
```

## Deployment

`npm run build` outputs to `dist/`. Vite is configured with `base: "./"` so the folder deploys as-is to any static host (Vercel, Netlify, GitHub Pages, etc.).
