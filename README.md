# personal-site

Monorepo containing multiple versions/apps for my personal site ecosystem.

| Project | Description | Status |
|---------|-------------|--------|
| [`static-site/`](./static-site) | Portfolio site — Vite + React + TypeScript | Production |
| [`game-site/`](./game-site) | Platformer game version of the site | In development |
| [`workshop-site/`](./workshop-site) | Tool library hub (route-based apps under one workshop domain) | In development |

## Getting started

Each project is self-contained. Navigate into the relevant folder and follow its own README.

```bash
cd static-site   # or game-site or workshop-site
npm install
npm run dev
```

## Deployment

All projects can be deployed independently. `static-site` and `workshop-site` both produce a deployable `dist/` folder via `npm run build`.
