/**
 * The only place that talks to Umami programmatically.
 *
 * Most events on this site are declarative `data-umami-event` attributes on the
 * element itself, which is always preferable — it keeps the event next to the
 * thing it measures. This module exists for the events that have no element to
 * hang off: a step the visitor reached, or an outcome only the server knows.
 *
 * Two properties this wrapper has to guarantee:
 *
 * 1. `window.umami` is frequently absent. The tracker is loaded `defer`, so it
 *    is missing for the first moments of every page; it is missing forever in
 *    dev (no NEXT_PUBLIC_UMAMI_WEBSITE_ID) and for anyone running a blocker —
 *    Sentry tunnels around blockers via `tunnelRoute`, Umami does not.
 * 2. Analytics must never be able to break the funnel. A lead not created
 *    because a measurement threw is a real lost sale; a measurement lost
 *    because a lead was created is a rounding error. Hence the swallowed catch.
 *
 * Event names are capped at 50 characters by Umami and are documented in
 * docs/analytics-events.md — read that before adding one.
 */

type EventProperties = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (event: string, properties?: EventProperties) => void;
    };
  }
}

export function track(event: string, properties?: EventProperties): void {
  try {
    window.umami?.track(event, properties);
  } catch {
    // Deliberately silent: see (2) above.
  }
}

/**
 * Event name for one qualifier question.
 *
 * The id comes from `GET /leads/questions` — this repo never decides what the
 * questions are (see CLAUDE.md), and that extends to their event names. The
 * consequence, which is the right trade: if the backend renames a question id,
 * Umami sees a new event and the old one's history stops there.
 */
export function questionEvent(questionId: string): string {
  return `qualifier-q-${questionId}`;
}
