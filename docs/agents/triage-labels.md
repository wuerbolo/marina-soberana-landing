# Triage Labels

The skills speak in terms of five canonical triage roles (plus two category roles). This file maps those roles to the actual Trello label strings used on the shared Soberana board.

| Canonical role   | Label on Soberana Trello board | Meaning                                  |
| ---------------- | ------------------------------- | ----------------------------------------- |
| `bug`             | `bug`                | Something is broken                      |
| `enhancement`     | `enhancement`        | New feature or improvement                |
| `needs-triage`    | `needs-triage`       | Maintainer needs to evaluate this issue  |
| `needs-info`      | `needs-info`         | Waiting on reporter for more information |
| `ready-for-agent` | `ready-for-agent`    | Fully specified, ready for an AFK agent  |
| `ready-for-human` | `ready-for-human`    | Requires human implementation            |
| `wontfix`         | `wontfix`            | Will not be actioned                     |

These labels live on the shared board (see `docs/agents/issue-tracker.md`) and are created on first use by the `trello-tasks` script or directly via the Trello API. They're independent of the source lists (`From Marina` / `Internal Findings`) and the existing per-repo-area labels (`landing` / `infra` / `backend` / `app`) — a card typically carries one area label plus one triage-state label.

Edit the right-hand column if the vocabulary ever changes.
