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

Deploy `workshop-site` as a standalone static app (for example Vercel, Netlify, or Cloudflare).

- Build command: `npm run build`
- Output directory: `dist`

### Cloudflare Workers (Static Assets + Wrangler)

If you deploy with **Wrangler** / **Workers Static Assets** (the flow that uploads `workers/scripts/<name>/versions`), use the included [`wrangler.toml`](./wrangler.toml):

- `[assets].directory` points at `./dist/` after `npm run build`.
- `not_found_handling = "single-page-application"` serves `/index.html` for navigation requests that do not match a file (deep links like `/skill-tree` work).

Do **not** add `public/_redirects` with `/* /index.html 200` for this product: Cloudflare’s API rejects that pattern as an infinite loop ([error 10021](https://developers.cloudflare.com/workers/observability/errors/#validation-errors-10021)).

Set `name` in `wrangler.toml` to match your Worker’s name in the Cloudflare dashboard (defaults to `site` here because that matches a common setup; change it if yours differs).

### Cloudflare Pages

If you use **Pages** instead, point the project at this folder, same build/output. Pages can handle SPA fallbacks without `_redirects` in many setups; prefer dashboard “SPA” / fallback settings if a route 404s.

## 3) DNS and Cloudflare

1. In Cloudflare DNS, create a `CNAME` or `A` record for `workshop` that points to your host origin.
2. Enable proxy (orange cloud) if you want Cloudflare edge features.
3. SSL mode:
   - Start with `Full`.
   - Move to `Full (strict)` once origin certificates are configured.

## 4) SPA route fallback (summary)

Client-side routes need either **host-level SPA fallback** or **`not_found_handling = "single-page-application"`** in Wrangler (this repo uses the latter for Workers deploys).

## 5) Future Supabase integration

When your homelab Supabase is ready:

1. Copy `.env.example` to `.env.local`.
2. Set:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Replace mock auth adapter with a Supabase-backed adapter.

## 6) Homelab exposure guidance

Do not expose Supabase directly to the public internet without protections. Prefer Cloudflare Tunnel or equivalent secure ingress before enabling production auth traffic.
