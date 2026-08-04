# The landing carries no countdown and no place count

The landing page states neither a deadline nor a number of remaining places.
Marina's concept had both — a countdown to `now + 3 días` and "Últimas 4 plazas"
— and both were deliberately dropped. Scarcity is expressed instead as the
reason places are limited at all: every alumna gets weekly individual follow-up,
so a finite number can be accompanied at once.

## Why

The countdown was written to `localStorage` on first visit, so every visitor got
a private three-day deadline that never expired. A returning visitor in October
would still have been told there were three days left.

The place count had nothing to count. Soberana is a **rolling enrolment**: each
`Enrollment` carries its own `start_date`/`end_date` six-month window
(`marina-soberana-backend/app/models/enrollment.py`), so students are in month 1
and month 5 of the same máster simultaneously. There is no group in the system to
be the sixteenth member of, and nobody can arrive too late. "Últimas 4 plazas"
described a cohort the platform does not have and cannot currently represent.

Both patterns are also what the EU Omnibus Directive (2019/2161, in force in
Spain since 2022) was written to target. That is a secondary reason, not the
main one, and nobody qualified has reviewed it.

The main reason is that the real constraint is better than the invented one.
Weekly individual follow-up from Marina and a tutora is both true and the same
fact that justifies the price — so stating it does the scarcity work *and* sells
the máster, where a fabricated timer only did the first and could be screenshotted.

## Considered and rejected

- **Keep the rolling countdown.** What Marina's concept did, and the highest-
  pressure option. Rejected: it is false on its face to any returning visitor,
  and it trades something defensible for something fragile.
- **Make cohorts real** — introduce a shared start date so "inicio septiembre"
  and "16 plazas" become true, and the countdown counts to something. A coherent
  product, and a much larger change: it contradicts continuous enrolment, which
  is how Marina actually sells. Deferred, not refused.
- **A live counter of remaining places**, derived from active enrollments against
  a cap. Honest and buildable, but nobody knows the cap — Marina has never had to
  name the number of people she can accompany at once. Revisit when she does.

## Consequences

- Copy stays true in October. Nothing on the page decays.
- Urgency on the page is weaker than a ticking clock, and conversion will reflect
  that. Urgency lives on the 1:1 call instead, where it can be specific.
- Marina's own "bonus por acción rápida" — two individual sessions for booking
  early — survives this decision, but only with a **real** end date she commits
  to. Without one it is not shipped. If it ships, it must actually be delivered
  to everyone who books before that date.
- Do not reintroduce a countdown, a "plazas restantes" number, or the words
  *grupo*, *cohorte* or *inicio septiembre* without first making cohorts real in
  the backend. See `CONTEXT.md` — *Rolling enrolment*, *Capacity*.
