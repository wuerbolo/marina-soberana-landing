# Analytics events

Self-hosted Umami at `umami.marinaromes.com` (the Mautic VPS, not Soberana's —
see `infra/docs/backup-system-implementation.md`). A Cloudflare Web Analytics
beacon runs alongside it for raw pageviews; Umami owns everything below.

## Naming

- `cta-<placement>` — a click on a call to action.
- `qualifier-*` — a step or outcome inside the `/aplicar` funnel.
- kebab-case, English, **50 characters maximum** (Umami truncates past that).

**Umami cannot rename an event.** A renamed event starts a new row and the old
one's history stops dead — that is how `cta-final-click` became orphaned data
when `FinalCTA.tsx` was deleted in `d4c0fcd`. Renaming is a data decision, not a
refactor: if the thing being measured is the same, keep the name.

## The catalogue

| Event | Properties | Fires |
|---|---|---|
| `cta-hero` | — | `Hero.tsx`, top CTA → `/aplicar` |
| `cta-sticky` | — | `StickyCtaBar.tsx`, fixed bottom bar (home only) |
| `cta-inversion` | — | `Inversion.tsx`, the closing price card |
| `qualifier-view` | `questions` | questions loaded, first one on screen |
| `qualifier-load-error` | — | `GET /leads/questions` failed — the funnel is dead for this visitor |
| `qualifier-q-<id>` | `answer` | she answered that question |
| `qualifier-contact` | — | the contact form is on screen |
| `cta-qualifier-submit` | — | click on "Continuar" (before validation) |
| `qualifier-qualified` | — | the server returned `is_qualified: true` |
| `qualifier-not-qualified` | — | the server returned `is_qualified: false` |
| `newsletter-optin` | `qualified` | submission succeeded with the consent box ticked |
| `qualifier-submit-error` | `status` | `POST /leads` failed |
| `cta-whatsapp` | — | the one WhatsApp link, on the pass screen |
| `cta-tus-guias` | — | outbound to the low-ticket course, on the deflection screen |

Clicks are declarative `data-umami-event` attributes on the element itself —
prefer that, it keeps the event next to the thing it measures. Steps and
outcomes go through `track()` in `src/lib/analytics.ts`, the only module that
touches `window.umami`.

### Two things worth knowing before reading the numbers

- **`cta-qualifier-submit` is a click, not a submission.** Subtract
  `qualifier-qualified + qualifier-not-qualified + qualifier-submit-error` from
  it and the remainder is people the empty-field check turned back.
- **`qualifier-q-<id>` can fire twice for one visitor.** The "← Anterior" button
  lets her revise. Umami funnels count sessions reaching a step in order, so the
  funnel is unaffected; only the `answer` breakdown double-counts.

### The question ids are the backend's

`qualifier-q-<id>` is built from the `id` in `GET /leads/questions`
(`commitment`, `investment_ready`, `availability`, `wants_real_accompaniment`,
`sees_herself_accompanying`, `has_room_for_it`). This repo never decides what
the questions are (see `CLAUDE.md`) and that extends to their event names. The
trade: rename a question id in the backend and Umami sees a brand-new event,
with the old one's history ending there. Worth a look at the saved reports
before doing it.

## Reports to build on this

Umami funnels are **closed** — only sessions that hit every step, in order,
count through — and 2–7 steps is the workable range. Hence two funnels rather
than one with all six questions in it:

- **Camino a la llamada**: `/` → `/aplicar` → `qualifier-q-commitment` →
  `qualifier-contact` → `qualifier-qualified` → `cta-whatsapp`. Anyone arriving
  straight at `/aplicar` from a shared link misses step 1 and is not counted.
- **Camino de deflexión**: `/aplicar` → `qualifier-contact` →
  `qualifier-not-qualified` → `cta-tus-guias`.
- **Goals**: `qualifier-qualified` (goal #1 in `CLAUDE.md`), `cta-whatsapp`,
  `newsletter-optin` (goal #2). Umami also accepts a goal on an event property —
  `qualifier-q-investment_ready` with `answer = false` puts a number on the price
  objection.
- Per-question drop-off is not a funnel: compare the six `qualifier-q-*` on the
  Events page.

## Keeping the team's own visits out

Umami has no "exclude me" button. Two mechanisms exist, and this is how they are
wired together across the two repos:

1. **`data-domains`** on the tracker (`src/app/layout.tsx`) — anything not served
   from `escuelasoberana.com` is never counted. Kills dev and preview traffic
   regardless of what the `.env` holds.
2. **`localStorage["umami.disabled"]`** — Umami's native gate, and what actually
   silences the tracker.

The problem is that the button belongs in the admin panel at
`app.escuelasoberana.com`, which cannot touch this origin's `localStorage`, and
a hidden iframe would read a partitioned store on Safari. So:

```
app.escuelasoberana.com          escuelasoberana.com
/admin/leads                     layout.tsx bridge          Umami tracker
  |                                   |                          |
  | writes cookie                     | reads cookie             |
  | soberana_notrack=1  ------------> | sets localStorage  ----> | U() returns
  | on .escuelasoberana.com           | "umami.disabled"         | early, sends
  |                                   |                          | nothing
  | reads the same cookie             |
  | to report "this browser is        |
  | being counted"                    |
```

The cookie is **only the transport**; the `localStorage` flag is what blocks.
That split matters because Safari caps any JS-written cookie at 7 days:

- Cookie `=1` → set the flag, refresh the cookie.
- Cookie `=0` → clear the flag (explicit "count me again").
- **Cookie absent → leave the flag alone**, and rewrite the cookie if the flag is
  set. So the opt-out survives the cookie's expiry, and the panel's diagnosis
  repairs itself on the next visit here.

Worst case the panel says "you are being counted" when you are not. That is a
false alarm, never a false all-clear — the error points the safe way on purpose.

Blocking is *not* done with `data-before-send`. In the tracker bundle that
handler is awaited **outside** the `try/catch` around the `fetch`, so one thrown
error would silently drop every event.

Two limits nobody can engineer away, and the copy on both sides says so: the
flag is per browser *and* per device, and the panel can only diagnose the
browser you are looking at it in.

The other half lives in `marina-soberana-frontend`:
`src/components/AnalyticsOptOut.tsx`, mounted on `/admin/leads`. Change one side
and you must change the other.
