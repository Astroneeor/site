# workshop-site

Workshop hub application built with Vite + React + TypeScript.

## Purpose

This app is the entrypoint for workshop tools under one domain:

- `/` library landing page
- `/skill-tree` skill tree tool (placeholder)
- `/diff-viewer` diff tool (placeholder)

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Auth and Backend

- Current auth is mock/local so the app can run without backend dependencies.
- Auth architecture is adapter-based so Supabase can be plugged in later.
- Future env vars:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

See `DEPLOYMENT.md` for Cloudflare and routing setup.
