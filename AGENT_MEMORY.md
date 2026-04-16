# Agent Memory

## Project Identity
- Repo name: `personal-site` monorepo.
- Goal: host personal portfolio experiences in two forms.

## Subprojects
- `static-site/` is the production experience and primary active target.
- `game-site/` is an in-progress platformer interpretation of the portfolio (stack not finalized).

## static-site Snapshot
- Stack: React 18, TypeScript (strict), Vite, TailwindCSS, Framer Motion, GSAP, Lenis.
- Command set:
  - `npm run dev`
  - `npm run lint`
  - `npm run build`
  - `npm run preview`
- No test runner configured at present.

## static-site Structure Memory
- `src/App.tsx` composes full-page sections.
- `src/sections/`: `Hero`, `About`, `Features`, `Showcase`, `CTA`, `Footer`.
- `src/components/`: `Navbar`, `Button`, `SectionWrapper`, `StarBackground`, `VineBackground`.
- `src/hooks/`: `useSmoothScroll`, `useScrollAnimation`.
- `src/styles/index.css`: Tailwind directives and custom classes (`.glass`, `.text-gradient`, `.glow`).
- `tailwind.config.js`: custom forest palette, accent colors, display font, animation keyframes.
- `vite.config.ts`: `base: "./"` for path-portable static deployment.

## Deployment Memory
- Build output for `static-site` is `dist/`.
- Intended hosting target is Vercel; configuration also works for static hosts generally.

## Working Preference
- Unless explicitly redirected, prefer edits in `static-site/`.
