# Issue Tracker

Issues for the whole Soberana project (backend, frontend, infra, landing) are tracked on a **single shared Trello board**, not per-repo GitHub Issues.

- **Board:** "Soberana" — https://trello.com/b/GvafiE7f
- **Tooling:** `trello-tasks`, a standalone Python CLI. It lives at `tools/trello-tasks` in the **infra** repo and is symlinked to `~/.local/bin/trello-tasks`, so it is on `PATH` and resolves identically from inside any of the four repos.
- **Credentials:** `~/.config/trello/env` (chmod 600) — `TRELLO_KEY`, `TRELLO_TOKEN`, `TRELLO_BOARD`. `TRELLO_BOARD` holds the board's **shortLink** (from the board URL), not its 24-character id; endpoints that require the full id (e.g. creating a label) must resolve it first via `GET /1/boards/<shortLink>?fields=id`.

## Commands

```
trello-tasks list [label]           # open cards grouped by list (label: backend|app|landing|infra)
trello-tasks add "title" [label]    # new card in Inbox; --desc reads the description from stdin
trello-tasks move <card> <list>     # e.g. trello-tasks move aBc123 "In Progress"
trello-tasks archive <card>         # closes the card (removed from board views)
trello-tasks labels                 # list board labels (name, color, id)
trello-tasks show <card>            # print a card's full name + description
trello-tasks set-desc <card>        # replace description, piped via stdin
```

Anything the CLI doesn't cover (adding a label to an existing card, creating a label, archiving a list) goes through the Trello REST API directly with the same credentials.

## Lists are workflow position

A Trello card lives in exactly one list, so lists track **workflow position only**:

`Inbox` → `Next` → `In Progress` → `Done`

Pick work from `Next`, move to `In Progress` while working, then `Done`. `Inbox` is the unprioritised backlog.

## Labels are everything else

Each card carries labels from up to three independent axes:

- **Provenance** — `from-business` (the Product Owner, Marina, asked for it, including items from her audit docs) or `internal` (the team or an agent surfaced it: bugs found while working, tech debt, opportunities noticed during implementation). Set this when creating a card; older `Inbox` cards predate the convention and may carry neither.
- **Area** — `backend` / `app` / `landing` / `infra`, mapping to the four repos.
- **Triage state** — see `docs/agents/triage-labels.md`.

`trello-tasks add` only sets one label at creation time; add the rest afterwards via the API.

## Comments and closing

Use Trello card comments for triage notes and agent briefs (same content/templates the `triage` skill already defines). "Closing" an issue means moving the card to `Done`, or archiving it (`trello-tasks archive`) for `wontfix`.

## PRs

This tracker has no native PR linkage (Trello isn't the code host — GitHub is, one repo per component). Treat "PRs as a request surface" as **off**: external PRs on the four GitHub repos are not pulled into Trello triage; triage here is card-only.
