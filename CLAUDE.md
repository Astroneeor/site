# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a monorepo with two sub-projects:

- `static-site/` — Production portfolio site (Vite + React + TypeScript). The main site.
- `game-site/` — Platformer game version of the site (in development).

## static-site Commands

Run all commands from inside `static-site/`:

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check (tsc -b) then bundle for production → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint check
```

No test runner is configured.

## static-site Architecture

**Stack**: React 18 + TypeScript (strict) + Vite + TailwindCSS + Framer Motion + GSAP + Lenis

**Folder layout** under `src/`:

| Path | Role |
|------|------|
| `sections/` | Full-page sections (`Hero`, `About`, `Features`, `Showcase`, `CTA`, `Footer`) composed in `App.tsx` |
| `components/` | Shared UI: `Navbar`, `Button`, `SectionWrapper`, `StarBackground` (canvas particle system), `VineBackground` |
| `hooks/` | `useSmoothScroll` (Lenis setup), `useScrollAnimation` (GSAP/Framer helpers) |
| `styles/index.css` | Tailwind directives + custom layers: `.glass`, `.text-gradient`, `.glow`, scrollbar overrides |

**Animation strategy**: Framer Motion for component-level transitions and staggered reveals; GSAP for scroll timelines; Lenis for smooth-scroll easing on the window.

**Tailwind theme** (`tailwind.config.js`): Custom `forest-*` color scale (dark greens), `accent-green`/`accent-emerald`, and custom `display` font (Space Grotesk). Custom keyframes: `sway`, `grow`.

**Vite config**: `base: "./"` — outputs relative paths so the `dist/` folder deploys anywhere as static files.

## Deployment

Both sites are intended for Vercel. The `dist/` folder from `npm run build` in `static-site/` is the deployable artifact.
