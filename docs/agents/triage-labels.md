# Triage Labels

The skills speak in terms of five canonical triage roles (plus two category roles). This file maps those roles to the actual Trello label strings used on the shared Soberana board.

| Canonical role    | Label on Soberana Trello board | Meaning                                  |
| ----------------- | ------------------------------ | ---------------------------------------- |
| `bug`             | `bug`                          | Something is broken                      |
| `enhancement`     | `enhancement`                  | New feature or improvement               |
| `needs-triage`    | `needs-triage`                 | Maintainer needs to evaluate this issue  |
| `needs-info`      | `needs-info`                   | Waiting on reporter for more information |
| `ready-for-agent` | `ready-for-agent`              | Fully specified, ready for an AFK agent  |
| `ready-for-human` | `ready-for-human`              | Requires human implementation            |
| `wontfix`         | `wontfix`                      | Will not be actioned                     |

Edit the right-hand column if the vocabulary ever changes.

These labels live on the shared board (see `docs/agents/issue-tracker.md`). Only `ready-for-agent` exists on the board today; the rest are created on first use via the Trello API.

## Other label axes

Triage-state labels are independent of the board's two other label axes — a card typically carries one of each:

- **Provenance** — `from-business` / `internal`
- **Area** — `landing` / `infra` / `backend` / `app`

Workflow position is *not* a label; it is the card's list (`Inbox` → `Next` → `In Progress` → `Done`).
