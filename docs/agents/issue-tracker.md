# Issue Tracker

Issues for the whole Soberana project (backend, frontend, infra, landing) are tracked on a **single shared Trello board**, not per-repo GitHub Issues.

- **Board:** "Soberana" — https://trello.com/b/GvafiE7f
- **Board link file:** `.claude/trello-board.json` lives at the Soberana project root (`marina/soberana/.claude/trello-board.json`), one directory above these four repos. The `trello-tasks` skill's script walks up from the current directory to find it, so it resolves correctly from inside any of the four repos.
- **Tooling:** the `trello-tasks` skill (`scripts/trello.py`) — `list`, `add`, `move`, `archive`, `labels`, `board status`.

## Source lists

Cards are split by where the request originated, tracked via **list**, not label:

- **`From business`** — items the Product Owner (Marina) has provided directly, including from her audit docs (landing copy/UX feedback, business requirements, etc.). New list, created for this split.
- **`App (internal created)`** — items the team or an agent surfaced on its own (bugs found while working, tech debt, opportunities noticed during implementation). Pre-existing list, reused as-is.

The board's other existing lists (`Inbox`, `Next`, `In Progress`, `Done`) continue to be used for day-to-day workflow position — the source lists are about *provenance*, workflow position is tracked separately (existing lists or existing per-repo labels `landing` / `infra` / `backend` / `app`).

## Triage roles

The five canonical triage state roles and two category roles map 1:1 to Trello **labels** with identical names (created on first use): `bug`, `enhancement`, `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

A card can carry more than one label (source-area label like `landing` plus a triage-state label like `ready-for-agent`) — Trello supports multiple labels per card even though the `trello-tasks` `add` command only sets one at creation time; additional labels are added via the Trello API/UI afterward.

## Comments and closing

Use Trello card comments for triage notes and agent briefs (same content/templates the `triage` skill already defines). "Closing" an issue means moving the card to `Done` (or archiving it, per `trello.py archive`, for `wontfix`).

## PRs

This tracker has no native PR linkage (Trello isn't the code host — GitHub is, one repo per component). Treat "PRs as a request surface" as **off**: external PRs on the four GitHub repos are not pulled into Trello triage; triage here is issue/card-only.
