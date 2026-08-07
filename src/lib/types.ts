export interface LeadQuestion {
  id: string;
  prompt: string;
}

export interface LeadSubmission {
  answers: Record<string, boolean>;
  full_name: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface LeadCreated {
  is_qualified: boolean;
  // The gate to quote back on the Tus Guías Te Hablan screen — the id of one of
  // the questions already held here. The server picks it; null when she cleared
  // every gate.
  gate_to_quote: string | null;
}
