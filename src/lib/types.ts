export interface LeadQuestion {
  id: string;
  prompt: string;
}

export interface QualifyResponse {
  score: number;
  is_qualified: boolean;
}

export interface LeadSubmission {
  full_name: string;
  email: string;
  phone?: string;
  answers: Record<string, boolean>;
  message?: string;
  preferred_times?: string;
}
