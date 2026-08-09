# The qualifier is the only route to Marina, and the price lives inside it

Every call to action on the landing leads to `/aplicar`. The WhatsApp deep link
appears exactly once — on the screen shown to a visitor who has passed all three
gates. The máster's price appears nowhere in the sales copy; it is disclosed
inside the qualifier, as the budget gate.

## Why

Marina's concept routed **all three** of its CTAs to the same `wa.me` link,
prefilled with *"Marina, estoy interesada en Soberana. Cuéntame más."* That is an
information request, and reducing information requests is the page's entire job
(`CONTEXT.md` — *Deflection*). The concept's every CTA generated the thing the
page exists to prevent.

Gates only gate if there is no door beside them. One tap versus six questions is
not a fair contest: a single WhatsApp button anywhere on the page would take most
of the traffic and reduce the qualifier to decoration nobody maintains.

The evidence that settled it is Vanessa Baumart — Marina's own mentor and the
concept's stated design reference. Her page does not route to WhatsApp. Her CTA
opens a Jotform application headed "SOLD OUT DAY", asking name, email and
qualifying questions, closing with *"En caso de ser seleccionada me pondré en
contacto contigo."* Observed live at `lp.vanessabaumart.com` on 2026-08-04;
re-verify before citing it to anyone.

Price sits inside the qualifier rather than on the page for a related reason. A
budget question with no number attached — the previous *"¿Estás en condiciones de
invertir…?"* — asks people to self-assess against a figure they have never seen,
and is answered *sí* by nearly everyone. Hiding the price and keeping a vague
budget question removes the filter twice over. Naming `2.300€` at the moment of
qualification keeps disclosure doing its work while the sales copy stays free of
it.

Supporting but **unverified**: Alex Hormozi's position, as reported by podcast
summary sites, is that price is presented during the conversation rather than
before it, and that an application with budget/authority/need/timing questions
precedes a sales call. The primary texts could not be reached. Treat as
indicative, never quote it as his.

## Considered and rejected

- **WhatsApp-first, no qualifier** — Marina's concept, and the reason this
  decision exists. Highest raw conversion into her inbox, and no way to tell whose
  message is worth answering.
- **A low-key escape hatch** (a "¿dudas?" WhatsApp link in the footer). Softer,
  and it re-creates the problem in miniature: the people most likely to take a
  shortcut are the ones the questions were for.
- **Two versions of the page**, one preferred and one closer to Marina's vision,
  to show her both. Dropped once she agreed to keep qualification — building the
  argument stopped being necessary.

## Consequences

- The qualifier's completion rate is now the whole funnel. If it drops, leads
  drop; there is no second path absorbing the difference.
- A genuinely interested visitor with one quick question has no fast way to ask
  it, and some will leave instead. The "Antes de decidir" accordion is what
  absorbs those questions, so it earns real estate rather than decorating it.
- ~~`2.300€` has exactly one home, in `lead_questions.py`. If it appears in the
  landing's copy as well, they will drift.~~ Superseded 2026-08-09: the exact
  figure is no longer named anywhere in either repo. The page states a floor
  ("desde 2.000€") and the qualifier's gate asks against that same floor; the
  exact price is disclosed on the call. The drift risk this bullet guarded
  against is gone with the second copy of the number.
- `/aplicar` stays a route rather than an inline section, so Marina can paste the
  link into Instagram and WhatsApp replies. It is the answer to "cuéntame más".
- Adding a WhatsApp button anywhere else silently disables qualification. It will
  look like a harmless conversion win.
