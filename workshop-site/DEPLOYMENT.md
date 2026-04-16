# Workshop Deployment Runbook

This app is deployed as a separate project at `workshop.<your-domain>`.

## 1) Build and verify locally

From `workshop-site/`:

```bash
npm install
npm run lint
npm run build
```

## 2) Configure hosting target

Deploy `workshop-site` as a standalone static app (for example Vercel, Netlify, or Cloudflare Pages).

- Build command: `npm run build`
- Output directory: `dist`

## 3) DNS and Cloudflare

1. In Cloudflare DNS, create a `CNAME` or `A` record for `workshop` that points to your host origin.
2. Enable proxy (orange cloud) if you want Cloudflare edge features.
3. SSL mode:
   - Start with `Full`.
   - Move to `Full (strict)` once origin certificates are configured.

## 4) SPA route fallback

Because this app uses client-side routing, configure your host to serve `index.html` for unknown routes so paths like `/skill-tree` and `/diff-viewer` load correctly.

For **Cloudflare Pages**, this repo includes `public/_redirects` with a single-page-app rule so deep links work after deploy.

## 5) Future Supabase integration

When your homelab Supabase is ready:

1. Copy `.env.example` to `.env.local`.
2. Set:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Replace mock auth adapter with a Supabase-backed adapter.

## 6) Homelab exposure guidance

Do not expose Supabase directly to the public internet without protections. Prefer Cloudflare Tunnel or equivalent secure ingress before enabling production auth traffic.
