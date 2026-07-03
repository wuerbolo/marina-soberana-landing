# Landing — public sales funnel (escuelasoberana.com)

Sells Marina's flagship "Soberana" program. Sales happen on a 1:1 call, NOT
self-serve checkout — the page's job is to qualify visitors and get the right
ones to request a call. See the parent/home-directory CLAUDE.md for shared
context and deployment model.

## Goals (in priority order)
1. Maximize qualified call bookings (the `/aplicar` funnel → lead with contact info).
2. Unqualified visitors → capture email for Marina's newsletter (nurture path).
Judge every change against these two.

## Conventions
- Qualification logic lives server-side: questions from `GET /leads/questions`, scoring via `POST /leads/qualify`. This repo only renders — never hardcode questions or scoring here.
- Brand palette: CSS variables in `src/app/globals.css` are the single source of truth — never hardcode a color in a component. Copy tone: Spanish, empathetic, clarity above cleverness (sourced from Marina's own sales material).
- Testimonials: text only, no names/photos, attributed "Alumna de Soberana".
- `NEXT_PUBLIC_API_URL` is baked at build time (compose build arg).

## Develop & deploy
- This repo may be iterated directly on the VPS (Claude Code + tmux): edit → `./deploy.sh` → check https://escuelasoberana.com. Low blast radius (no state here — leads live in the backend), but commit and push to GitHub as you go; that's the only backup.
- Local dev: `docker compose up -d` (:3400) against the backend dev stack.
