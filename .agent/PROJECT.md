# Project

## Goal

Build and deploy the official `kankaku` landing page at `www.kankaku.net`.

## Architecture

- Static Astro site.
- Main landing page at `/`.
- Project pages at `/(project-name)`.
- No `/tobira` route.

## Workspace Structure

- `src/pages/`: Astro routes.
- `public/`: static public assets.
- `.agent/`: project context and execution state.

## Key Decisions

- Use Astro for a lightweight static site.
- Use Cloudflare Pages for hosting.
- Keep DNS changes scoped so existing iCloud+ email records are not disturbed.

## Tech Stack

- Astro
- TypeScript
- Cloudflare Pages

## Milestones

- M0: Minimal deployable Hello World site.
- M1: Project data structure and project cards.
- M2: Visual design, ASCII animation, and content polish.
- M3: Cloudflare Pages production deployment.
