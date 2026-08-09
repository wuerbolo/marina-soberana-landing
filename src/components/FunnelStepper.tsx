"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ApiError, getQuestions, submitLead } from "@/lib/api";
import { questionEvent, track } from "@/lib/analytics";
import { CallScreen, GuiasScreen } from "@/components/QualifierResult";
import type { LeadCreated, LeadQuestion } from "@/lib/types";

// One question per screen, then contact and consent, then a single submission
// that both creates the lead and decides which of the two closing screens she
// sees. Nothing here scores or judges: the server owns the outcome, and this
// component only knows which question prompt it was told to quote back.
type Stage = "loading" | "load-error" | "questions" | "contact" | "result";

interface Contact {
  fullName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const EMPTY_CONTACT: Contact = { fullName: "", email: "", phone: "", consent: false };

export default function FunnelStepper() {
  const [stage, setStage] = useState<Stage>("loading");
  const [questions, setQuestions] = useState<LeadQuestion[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  // Held here, not in the form: stepping back to revise an answer unmounts the
  // form, and retyping her details would look like the page lost them.
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [result, setResult] = useState<LeadCreated | null>(null);

  useEffect(() => {
    getQuestions()
      .then((qs) => {
        setQuestions(qs);
        setStage("questions");
        track("qualifier-view", { questions: qs.length });
      })
      // Not just a failed fetch: for this visitor the funnel is dead, and the
      // page offers her no other way through. A spike here is an outage.
      .catch(() => {
        setStage("load-error");
        track("qualifier-load-error");
      });
  }, []);

  function answer(value: boolean) {
    const q = questions[step];
    setAnswers({ ...answers, [q.id]: value });
    // Stepping back and revising re-fires this. Umami funnels count sessions
    // reaching each step in order, so the funnel is unaffected; only the
    // `answer` breakdown double-counts, and recording the changed answer is
    // truer than dropping it.
    track(questionEvent(q.id), { answer: value });

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setStage("contact");
      track("qualifier-contact");
    }
  }

  if (stage === "loading") {
    return <Centered>Cargando…</Centered>;
  }

  if (stage === "load-error") {
    return (
      <Centered>
        No hemos podido cargar el formulario. Inténtalo de nuevo en unos minutos.
      </Centered>
    );
  }

  if (stage === "questions") {
    const q = questions[step];
    return (
      <div className="mx-auto max-w-xl px-6 py-20 md:py-28">
        <Progress current={step} total={questions.length + 1} />
        <p
          key={q.id}
          className="fade-up mt-10 font-serif text-2xl font-semibold leading-snug md:text-3xl"
        >
          {q.prompt}
        </p>
        <div className="mt-10 flex gap-4">
          <button
            onClick={() => answer(true)}
            className="flex-1 rounded-xl border border-line bg-surface py-4 text-sm uppercase tracking-widest transition-colors hover:border-accent hover:text-foreground"
          >
            Sí
          </button>
          <button
            onClick={() => answer(false)}
            className="flex-1 rounded-xl border border-line bg-surface py-4 text-sm uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            No
          </button>
        </div>
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-8 text-xs uppercase tracking-widest text-muted hover:text-foreground"
          >
            ← Anterior
          </button>
        )}
      </div>
    );
  }

  if (stage === "contact") {
    return (
      <ContactForm
        answers={answers}
        totalSteps={questions.length + 1}
        contact={contact}
        onContactChange={setContact}
        onBack={() => {
          setStep(questions.length - 1);
          setStage("questions");
        }}
        onSubmitted={(created) => {
          setResult(created);
          setStage("result");
        }}
      />
    );
  }

  // stage === "result"
  if (result?.is_qualified) {
    return <CallScreen fullName={contact.fullName} />;
  }

  const quoted = questions.find((q) => q.id === result?.gate_to_quote);
  return <GuiasScreen quotedPrompt={quoted?.prompt ?? null} consent={contact.consent} />;
}

function ContactForm({
  answers,
  totalSteps,
  contact,
  onContactChange,
  onBack,
  onSubmitted,
}: {
  answers: Record<string, boolean>;
  totalSteps: number;
  contact: Contact;
  onContactChange: (contact: Contact) => void;
  onBack: () => void;
  onSubmitted: (created: LeadCreated) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { fullName, email, phone, consent } = contact;

  function update(patch: Partial<Contact>) {
    onContactChange({ ...contact, ...patch });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Necesito tu nombre, tu email y tu teléfono para poder responderte.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const created = await submitLead({
        answers,
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        consent,
      });
      // Tracked here rather than on the button, because the outcome is the
      // server's to decide and the button cannot know it. `cta-qualifier-submit`
      // still fires on the click, so click-minus-outcome counts how many people
      // the empty-field check below turned back.
      track(created.is_qualified ? "qualifier-qualified" : "qualifier-not-qualified");
      if (consent) {
        track("newsletter-optin", { qualified: created.is_qualified });
      }
      onSubmitted(created);
    } catch (err) {
      track("qualifier-submit-error", {
        status: err instanceof ApiError ? err.status : 0,
      });
      // A 422 means the server rejected a field the browser let through — an
      // address like "nombre@gmail" passes `type="email"` but not EmailStr.
      // Saying "try again" to that sends her round an unwinnable loop.
      setError(
        err instanceof ApiError && err.status === 422
          ? "Revisa tu email y tu teléfono: alguno no tiene un formato que podamos usar."
          : "No se ha podido enviar. Inténtalo de nuevo.",
      );
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md px-6 py-20 md:py-28">
      <Progress current={totalSteps - 1} total={totalSteps} />
      <h2 className="fade-up mt-10 font-serif text-2xl font-medium leading-snug md:text-3xl">
        Un último paso: dime quién eres.
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Con esto puedo darte una respuesta a tu medida y escribirte si hace falta.
        El teléfono es obligatorio: es por donde te contesto.
      </p>

      <div className="mt-8 space-y-5">
        <Field label="Nombre">
          <input
            value={fullName}
            onChange={(e) => update({ fullName: e.target.value })}
            autoComplete="name"
            className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => update({ email: e.target.value })}
            autoComplete="email"
            className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
          />
        </Field>
        <Field label="Teléfono">
          <input
            type="tel"
            value={phone}
            onChange={(e) => update({ phone: e.target.value })}
            autoComplete="tel"
            className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
          />
        </Field>
      </div>

      {/* Unticked by default — a pre-ticked box is not consent she gave. */}
      <label className="mt-8 flex cursor-pointer gap-3 rounded-xl border border-line bg-surface p-5">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => update({ consent: e.target.checked })}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
        />
        <span className="text-sm leading-relaxed">
          Quiero recibir las cartas de Marina por email.
          <span className="mt-1 block text-xs leading-relaxed text-muted">
            Escribe sobre su trabajo y su forma de mirar. A veces habla de Soberana
            y a veces no vende nada. Puedes darte de baja cuando quieras.
          </span>
        </span>
      </label>

      {error && <p className="mt-5 text-sm text-foreground">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        data-umami-event="cta-qualifier-submit"
        className="btn-cta btn-cta-block mt-8"
      >
        {busy ? "Enviando…" : "Continuar"}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Al enviar aceptas nuestra{" "}
        <Link href="/privacidad" className="underline hover:text-foreground">
          política de privacidad
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={onBack}
        disabled={busy}
        className="mt-8 text-xs uppercase tracking-widest text-muted hover:text-foreground disabled:opacity-50"
      >
        ← Anterior
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-wider text-muted">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function Progress({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`h-1 flex-1 rounded-full ${i <= current ? "bg-accent" : "bg-line"}`}
        />
      ))}
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="fade-up mx-auto max-w-md px-6 py-28 text-center md:py-36">
      {children}
    </div>
  );
}
