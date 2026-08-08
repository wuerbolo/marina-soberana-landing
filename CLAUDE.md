# Landing — public sales funnel (escuelasoberana.com)

Sells Marina's flagship "Soberana" program. Sales happen on a 1:1 call, NOT
self-serve checkout — the page's job is to qualify visitors and get the right
ones to request a call. See the parent/home-directory CLAUDE.md for shared
context and deployment model.

## Goals (in priority order)
1. Maximize qualified call bookings (the `/aplicar` funnel → lead with contact info).
2. Unqualified visitors → capture email for Marina's newsletter (nurture path).
Judge every change against these two.

## Language
- Code, comments, docstrings, and commit messages: English only, even when the conversation happens in Spanish. (Full rule + exceptions in the parent/home-directory CLAUDE.md.) Exception: user-facing copy on the page itself stays in Spanish — that's product content, not docs.

## Conventions
- Qualification logic lives server-side: questions from `GET /leads/questions`, and one `POST /leads` that creates the lead and returns `is_qualified` plus the `gate_to_quote` to quote back on a fail. There is no scoring-preview endpoint — this repo only renders, and never hardcodes questions, scoring or gate rules.
- The WhatsApp deep link exists in exactly one place, `src/lib/links.ts`, rendered only on the qualifier's pass screen. Adding one anywhere else silently disables qualification — see `docs/adr/0002`.
- Brand palette: CSS variables in `src/app/globals.css` are the single source of truth — never hardcode a color in a component. Copy tone: Spanish, empathetic, clarity above cleverness (sourced from Marina's own sales material).
- Testimonials: the WhatsApp screenshots Marina supplied (`public/images/testimonios`), rendered by `TestimoniosGrid`. Still no names and no faces — the shots are anonymous bubbles — and every one carries its verbatim transcription as alt text, which is the condition for shipping them as images at all. Never add a screenshot whose text isn't transcribed into `alt`.
- `NEXT_PUBLIC_API_URL` is baked at build time (compose build arg).

## Develop & deploy
- This repo may be iterated directly on the VPS (Claude Code + tmux): edit → `./deploy.sh` → check https://escuelasoberana.com. Low blast radius (no state here — leads live in the backend), but commit and push to GitHub as you go; that's the only backup.
- Local dev: `docker compose up -d` (:3400) against the backend dev stack. The VPS is small and shared by multiple concurrent agent sessions — if you bring the dev stack up to run checks, `docker compose down` it as soon as you're done; don't leave it running idle.

## Agent skills

### Issue tracker

Issues live on the shared "Soberana" Trello board (https://trello.com/b/GvafiE7f) — not per-repo GitHub Issues. Lists are workflow position (`Inbox` → `Next` → `In Progress` → `Done`); provenance is the `from-business` / `internal` label pair. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical triage roles map 1:1 to identically-named Trello labels (`bug`, `enhancement`, `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

