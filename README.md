# personal-site

Monorepo containing two versions of my personal site.

| Project | Description | Status |
|---------|-------------|--------|
| [`static-site/`](./static-site) | Portfolio site — Vite + React + TypeScript | Production |
| [`game-site/`](./game-site) | Platformer game version of the site | In development |

## Getting started

Each project is self-contained. Navigate into the relevant folder and follow its own README.

```bash
cd static-site   # or game-site
npm install
npm run dev
```

## Deployment

Both sites target Vercel. The deployable artifact for `static-site` is the `dist/` folder produced by `npm run build`.
