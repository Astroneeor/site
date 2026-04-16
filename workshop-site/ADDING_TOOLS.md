# Adding a tool to the Workshop

All tools share one deploy on `workshop.astroneeor.com` (same origin → shared auth storage when you add Supabase).

## Checklist

1. **Create a folder** under [`src/tools/<tool-id>/`](src/tools/) with a **default export** React component (e.g. `MyToolApp.tsx`).
2. **Register the tool** in [`src/registry/toolsRegistry.ts`](src/registry/toolsRegistry.ts):
   - `id` — stable string used by [`ToolHistoryPanel`](src/components/ToolHistoryPanel.tsx) / history storage (no spaces).
   - `path` — URL path starting with `/` (e.g. `/my-tool`).
   - `title`, `description`, `accessBlurb` — library card copy.
   - `showInNav` — set `true` only if you want a top-nav link (keep most tools library-only).
   - `Component` — `lazy(() => import('../tools/<tool-id>/MyToolApp'))`.
3. **History** — if the tool should support local/account snapshots, render [`ToolHistoryPanel`](src/components/ToolHistoryPanel.tsx) with `toolId={your id}`.
4. **Verify** — from `workshop-site/` run `npm run lint` and `npm run build`.
5. **Cloud history links** — account history uses [`getToolPath`](src/registry/toolsRegistry.ts) / `getToolTitle`; no extra step if `id` and `path` are registered.

## Porting an existing Vite/React repo

- Copy (or submodule) source into `src/tools/<tool-id>/`.
- Export one root component as default; wire routers inside that folder if the tool needs nested routes (future: optional `routes.tsx` under the tool).
- Align dependencies: add any npm packages the tool needs to `workshop-site/package.json`.

## Optional: keep code in another repo

- **Git submodule** the tool into `src/tools/<tool-id>/`, or
- **`file:../other-repo`** in `package.json` if you publish a local package entry point.
