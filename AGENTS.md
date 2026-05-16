# AGENTS.md

## Project Overview

`tobira` is the repository for the official `kankaku` landing page at `www.kankaku.net`.
The project name is not intended to appear as a `/tobira` route. Project pages should live at
`www.kankaku.net/(project-name)`.

## Required Reading Order

At the start of each session, read:

1. `AGENTS.md`
2. `.agent/PROJECT.md`
3. `.agent/STATUS.md`
4. Any active plan in `.agent/execplans/`

## Execution Rules

- Keep the site lightweight and static unless a runtime server is clearly needed.
- Preserve the `www.kankaku.net` main-domain intent.
- Do not introduce a `/tobira` route for the landing page.
- Treat Cloudflare DNS cautiously because `kankaku.net` may already have iCloud+ custom email records.
- Run appropriate verification before committing changes.

## Documentation Rules

- Update `.agent/STATUS.md` when a meaningful implementation step is completed.
- Create or update an execution plan in `.agent/execplans/` for multi-step work.
