# Plan: Fake Cloudflare Warning Gate

## Goal

Serve a Cloudflare-style blocked page for public visitors until the real
`kankaku` landing page is ready, while preserving a localhost-only preview for
development.

## Steps

1. Recreate the warning page as static Astro output.
2. Reuse the warning gate on `/`, known project pages, and the 404 route.
3. Add the warning screenshot assets under `public/`.
4. Verify the build and browser-rendered localhost/public-host behavior.
5. Commit, push, open a PR, and run the autonomous review loop.
6. Replace static demo client details with live Cloudflare request metadata.

## Verification

- `npm run build`
- Browser check for `localhost` bypass.
- Browser check for public host simulation.
- Pages Function client info response check.

## Status

- Static warning gate implemented.
- Build and browser verification passed.
- PR review feedback addressed by moving the document shell into an Astro layout.
- Client IP reveal and live Ray ID fetch implemented.
- Current PR review loop pending.
