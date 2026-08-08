# Landing conversion audit — visual pass + copy recommendations

Date: 2026-08-08. Scope: escuelasoberana.com home page.
Status of each item: **SHIPPED** (visual, in `design/visual-impact-pass`, no copy touched) or **PROPOSED** (copy/structure — needs Marina's sign-off before anyone edits the page).

Every recommendation is graded against the two goals in CLAUDE.md (qualified call bookings first, newsletter capture second) and against the framework Alex Hormozi has been repeating through 2025–26: the **value equation** —

> Value = (Dream outcome × Perceived likelihood of achieving it) ÷ (Time delay × Effort and sacrifice)

— plus his operating rules for pages that sell a call, not a checkout: *proof beats promise, proof sits next to the claim it backs, specificity beats adjectives, one page = one ask, and scarcity only when it is true* (ours is: 16 alumnas at a time, capacity-based — the one kind of scarcity he says compounds trust instead of burning it).

---

## 1. What shipped in this visual pass (and the conversion logic for each)

No copy was touched. Everything below is presentation only, uses the existing palette tokens, and degrades to the current static page under `prefers-reduced-motion` or older browsers.

| Change | Where | Why it converts |
|---|---|---|
| **Gold starfield** on the two night surfaces (hero + closing card), breathing very slowly | `Hero`, `FinalCTA`, `.starfield` in `globals.css` | This is the "one of a kind in the niche" move. Every competitor page in Registros Akáshicos is either stock-photo purple or flat Canva. A quiet, hand-placed night sky is on-subject (the records are read "from the sky"), owns a look nobody else has, and — because the same sky closes the page — makes the final CTA feel like the end of one continuous scene rather than a bolted-on banner. Emotional impact at the two decision moments: first impression and final ask. |
| **Shine sweep on the gold CTA pill** — a highlight crosses the button once every ~5 s, resting most of the cycle | `.btn-cta::after` | Salience. The eye is pulled back to the one action on the page exactly when the visitor is idle-reading. Intermittent (not looping constantly) so it draws attention without reading as a casino button. Applies automatically to all five CTA placements, including the sticky bar. |
| **Count-up on the proof numbers** (+2, +900, +60, 16) the first time the band scrolls into view | `Credenciales` → new `CountUp` | The stats band is the page's likelihood-of-success argument. Numbers that tick up get fixated on and *read*; static ones get scrolled past. Server-renders the final value (SEO/no-JS safe), animates once, respects reduced motion. |
| **Gold arch echo behind Marina's portrait** — a hairline copy of the arched frame, offset down-right | `SobreMi` | Turns the portrait's arch from "a rounded image" into a deliberate brand shape. It's the same arch language as her own concept file, repeated once — signature, not clutter. |
| **✦ mark above every section title** | `SectionHeading` | The page's own list glyph, reused as a section opener. Gives the long scroll a rhythm and a recognizable mark at near-zero visual cost (quieter than the gold rule the reference pass removed). |
| **Hover physics** on detail tiles, both accordions, and testimonial screenshots (lift + shadow; accordions also hold a gold border while open) | `Detalles`, `Enfoque`, `AntesDeDecidir`, `TestimoniosGrid` | Perceived craft. Micro-feedback on touchable things is the cheapest "this is a serious operation" signal there is, and for a 3.000 €-tier offer the page's build quality is itself proof. Open accordions staying gold-edged keeps the visitor oriented in the two objection-handling sections. |

What was deliberately **not** added: parallax, video backgrounds, floating particles over text, decorative gradients on light sections. The reference pass's restraint (300-weight type, three surfaces, one light source) is what makes this page feel expensive; the additions above are the few ornaments that carry meaning. More would trade beauty for noise.

---

## 2. The one structural bug (PROPOSED, high priority)

**The `<title>`/meta description sell the wrong product.** `layout.tsx` still says *"Soberana | Proceso de evolución, sanación y manifestación"* and describes a personal-growth journey — the old positioning, not the máster. This is the copy Google, WhatsApp link previews and browser tabs show *before* anyone sees the hero. It currently promises a different offer than the page delivers (a mismatch that costs clicks and primes the wrong visitor).

Proposed:

- **Title:** `Soberana | Máster de Registros Akáshicos con Marina Romés`
- **Description:** `Fórmate como terapeuta de Registros Akáshicos en 6 meses: clases en directo, seguimiento individual semanal y un método ya recorrido por más de 60 alumnas.`

---

## 3. Structure — proof proximity (PROPOSED)

Current order: Hero → Para ti → Sobre mí → **Stats** → Logros → Enfoque → **Testimonios 1** → Detalles → **Testimonios 2** → FAQ → CTA.

1. **Put a one-line proof strip inside the hero**, under the meta chips: `+60 alumnas formadas · +900 personas acompañadas · desde 2021`. Hormozi's proof-proximity rule: the claim ("como un terapeuta profesional") and its evidence are currently three screens apart. One quiet line in the hero closes that gap without moving any section. (The full stats band stays where it is — it reads as *her* credentials right after her bio, which is correct.)
2. **Lead the testimonials with the money quote.** The single strongest proof on the page — *"he tenido más clientes este mes que en los 2 meses anteriores juntos… ahora no tengo plazas"* — is buried in the second testimonial block, ninth screenshot the visitor meets. The first block leads with "me siento segura" (feeling-proof). Swap so the first block opens with client-and-income results and the feeling-proof supports it. Dream outcome for the avatar is *paying clients*; order the evidence the way she orders her desires.
3. **Add a "qué pasa cuando envías tus respuestas" 3-step before the final CTA** (new copy, drafted below). In a call funnel the silent conversion killer isn't the offer — it's fear of the call ("me van a presionar", "¿quién me llama?", "¿cuándo?"). Three lines kill it: `1. Respondes 5 preguntas (3 min). 2. Si encaja, hablamos por WhatsApp — sin guion de ventas. 3. Decides con toda la información, también el precio.` Risk-reversal applied to the *mechanism* instead of a money-back guarantee (which a call-sold offer can't show on the page anyway).

---

## 4. Copy recommendations (PROPOSED — before → after, with the lever)

The CTA label (`Quiero saber si es para mí`), the `3 minutos · sin compromiso` de-risker, price disclosure kept inside the qualifier, and the objection-voiced FAQ titles are all **right — do not touch them**. They are textbook low-threat call-funnel mechanics.

### 4.1 Surface the speed proof (Time-delay lever — the biggest one available)

*"A los 15 días ya empiezas a canalizar con claridad. Nadie se queda sin canalizar"* is the strongest time-collapsing + likelihood claim on the page, and it lives inside FAQ answer #1, visible only after a click. In the value equation, time-to-first-result is a denominator: halving perceived delay doubles perceived value.

- Add as a hero chip: `Canalizas desde la semana 2` (or `A los 15 días ya canalizas`), or as the closing line of the hero standfirst.
- Repeat it as the subtitle of "Esto es lo que vas a lograr".

### 4.2 Hero standfirst (58 words, one sentence)

> Actual: "Soberana no es un curso más de Registros Akáshicos: es el máster de Registros Akáshicos + terapias emocionales de 6 meses con el que te formas en una nueva profesión, con material 100% exclusivo de esta formación, para crear acompañamientos con los que tus clientes vean resultados desde el día 1."

Three problems: *"no es un curso más"* is the sentence every competitor also opens with (a differentiation claim that no longer differentiates); *"material 100% exclusivo"* is an adjective wearing a number (specificity theater — Hormozi's rule is that specifics must be verifiable facts: 6 meses, 16 alumnas, +900 personas); and it's one 58-word sentence doing four jobs.

> Proposed: "El máster de Registros Akáshicos + terapias emocionales de 6 meses con el que te formas en una nueva profesión: sales con tu propio método de acompañamiento y con clientes que notan el cambio desde la primera sesión. Y canalizas desde las primeras semanas."

### 4.3 Vague scarcity → true capacity (Sticky bar + Detalles tile)

- Sticky bar: `Plazas limitadas` → **`Solo 16 alumnas a la vez`**. "Plazas limitadas" is what every page on the internet says (vague scarcity reads as fake scarcity, and fake-smelling scarcity *lowers* trust). Ours is real, has a number, and has a reason — say all of it in the tightest space. Compatible with ADR-0001: capacity is programme-wide and always true; the ban is on group/deadline phrasing.
- Detalles tile: `Plazas / Limitadas` → `Plazas / 16 a la vez`, with the note under the grid (or the tile's own second line) carrying the reason: *"porque cada alumna tiene seguimiento individual semanal"*. Hormozi: scarcity with a stated reason converts; scarcity without one pattern-matches to manipulation.

### 4.4 Section headers that sell instead of label

- `Más historias de transformación` → **`Alumnas que ya cobran por sus sesiones`** (that block literally contains the paying-clients quotes; make the header state the outcome the avatar wants).
- Its subtitle `Alumnas que ya están aplicando lo aprendido en Soberana.` → `Consultas abiertas, clientes que repiten — contado por ellas.`
- `Tu siguiente paso` (closing card) → **`Antes de entrar, hablamos`** — states the actual mechanism, sounds like a person, and frames the call as mutual selection (prizing the offer) rather than funnel-speak.
- `Logros` subtitle `En 6 meses, paso a paso, con objetivos claros en cada etapa.` → `Objetivo a objetivo, durante 6 meses.`

### 4.5 Repetition audit

"Resultados reales / resultados desde el día 1 / resultados duraderos" appears in some form **eight times** across hero, Logros, Enfoque and the section subs. Two effects: the phrase stops meaning anything by the third read, and uniform phrase-recycling is itself the strongest machine-writing tell (see §5). Keep it in the hero and in *one* Enfoque answer; vary or cut the rest (e.g. "que tu cliente vuelva", "cambios que se quedan", "que note la diferencia en su semana").

---

## 5. AI-smell audit

Flagged because the user asked: lines that pattern-match to generated marketing Spanish. The WhatsApp screenshots are the page's humanity anchor — everything *around* them should sound like the same person who answers those messages.

| Line | Where | Why it smells | Direction |
|---|---|---|---|
| "Más historias de transformación" | Testimonios 2 header | "Historias de transformación" is template funnel-speak — no human titles their friends' messages that way | §4.4 |
| "Alumnas que ya están aplicando lo aprendido" | Testimonios 2 sub | "Aplicar lo aprendido" is corporate-LMS language | §4.4 |
| "Tu siguiente paso" | FinalCTA header | The most generic CTA header in existence | §4.4 |
| "transformación, evolución y sanación" | Para ti, item 1 | The rule-of-three noun triad — the single most reliable generated-copy tell. Also in the meta description ("claridad, confianza y merecimiento") and Logros sub ("paso a paso, con objetivos claros") | Keep at most one triad per screen; break the others into a concrete ("que tu clienta te escriba al día siguiente") |
| "material 100% exclusivo de esta formación" | Hero standfirst | Percentage as intensifier, unverifiable | §4.2 |
| "no es un curso más" | Hero standfirst | The niche's universal opener | §4.2 |
| "resultados reales" ×8 | everywhere | Phrase-recycling; "reales" as a defensive tic implies the fear of the opposite | §4.5 |
| "Mensajes reales de alumnas" | Testimonios 1 sub | Borderline — the screenshots already prove realness; asserting it slightly undercuts them. Acceptable to keep | optional: "Capturas tal cual llegaron, sin editar." |

Not flagged: the Enfoque accordion answers and FAQ answers. They have specific opinions, named counter-examples ("sesiones sueltas a 60€", "si no haces esta oración 3 veces no vas a canalizar") and an actual voice — that's the register the flagged lines should be pulled toward.

---

## 6. What to keep refusing (Hormozi-compliant *because* it's absent)

For completeness, tactics from the genre that would raise short-term clicks and damage this funnel: countdown timers (banned by ADR-0001 and rightly — rolling enrolment has no deadline), fake "2 plazas left" counters, exit-intent popups (would cannibalize the newsletter path with a worse offer), price-anchoring theater on the page ("valorado en 5.000€" — price belongs in the qualifier, where it deflects), and testimonial re-typesetting into pretty quote cards (the raw WhatsApp crop *is* the credibility; polishing it would delete the proof).

---

## Suggested order of implementation

1. §2 metadata fix (5 minutes, pure win, no design risk).
2. §4.3 true-capacity scarcity (two strings).
3. §4.1 speed proof surfacing + §3.1 hero proof strip (hero only).
4. §3.2 testimonial reorder (data move, no copy edit).
5. §4.4 headers + §3.3 call 3-step (needs Marina's voice pass).
6. §4.5/§5 repetition + AI-smell rewrites (batch, with Marina).
