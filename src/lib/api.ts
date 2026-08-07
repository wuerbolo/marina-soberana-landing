import type { LeadCreated, LeadQuestion, LeadSubmission } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// Every call here is public — no auth/token handling, unlike the main app.
async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });

  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      if (body?.detail) detail = typeof body.detail === "string" ? body.detail : detail;
    } catch {
      /* ignore non-JSON bodies */
    }
    throw new ApiError(res.status, detail);
  }

  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

export function getQuestions(): Promise<LeadQuestion[]> {
  return apiFetch<LeadQuestion[]>("/leads/questions");
}

// The funnel's only write, and the only place qualification is decided: it
// creates the lead and answers which screen follows. Nothing here scores.
export function submitLead(payload: LeadSubmission): Promise<LeadCreated> {
  return apiFetch<LeadCreated>("/leads", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
