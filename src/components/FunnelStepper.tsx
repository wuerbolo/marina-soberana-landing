"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getQuestions, qualify, submitLead } from "@/lib/api";
import type { LeadQuestion } from "@/lib/types";

type Stage =
  | "loading"
  | "load-error"
  | "questions"
  | "result-qualified"
  | "result-unqualified"
  | "contact-form"
  | "nurture-form"
  | "submitted-qualified"
  | "submitted-nurture";

export default function FunnelStepper() {
  const [stage, setStage] = useState<Stage>("loading");
  const [questions, setQuestions] = useState<LeadQuestion[]>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    getQuestions()
      .then((qs) => {
        setQuestions(qs);
        setStage("questions");
      })
      .catch(() => setStage("load-error"));
  }, []);

  function answer(value: boolean) {
    const q = questions[step];
    const next = { ...answers, [q.id]: value };
    setAnswers(next);

    if (step + 1 < questions.length) {
      setStep(step + 1);
      return;
    }

    // Last question — reveal the result.
    qualify(next)
      .then((res) => {
        setStage(res.is_qualified ? "result-qualified" : "result-unqualified");
      })
      .catch(() => setStage("load-error"));
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
        <Progress current={step} total={questions.length} />
        <p key={q.id} className="fade-up mt-10 font-serif text-2xl font-light leading-snug md:text-3xl">
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

  if (stage === "result-qualified") {
    return (
      <div className="fade-up mx-auto max-w-xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground">Resultado</p>
        <h2 className="mt-4 font-serif text-3xl font-light leading-snug md:text-4xl">
          Por lo que cuentas, Soberana puede ser para ti.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          El siguiente paso es una llamada con Marina para conoceros y resolver tus
          dudas. Déjanos tus datos y te contactará para agendarla.
        </p>
        <button
          onClick={() => setStage("contact-form")}
          className="mt-10 inline-flex rounded-full bg-accent px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-accent-hover"
        >
          Continuar
        </button>
      </div>
    );
  }

  if (stage === "result-unqualified") {
    return (
      <div className="fade-up mx-auto max-w-xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground">Resultado</p>
        <h2 className="mt-4 font-serif text-3xl font-light leading-snug md:text-4xl">
          Por ahora, Soberana no parece el paso adecuado para ti.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          No pasa nada — es un proceso profundo y solo tiene sentido cuando es el
          momento correcto. Si quieres, déjanos tu email y te avisaremos de futuras
          aperturas y contenido gratuito.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            onClick={() => setStage("nurture-form")}
            className="inline-flex rounded-full bg-accent px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-accent-hover"
          >
            Avísame en el futuro
          </button>
          <Link href="/" className="text-xs uppercase tracking-widest text-muted hover:text-foreground">
            Quizá más adelante
          </Link>
        </div>
      </div>
    );
  }

  if (stage === "contact-form") {
    return (
      <ContactForm
        answers={answers}
        qualified
        onSuccess={() => setStage("submitted-qualified")}
      />
    );
  }

  if (stage === "nurture-form") {
    return (
      <ContactForm
        answers={answers}
        qualified={false}
        onSuccess={() => setStage("submitted-nurture")}
      />
    );
  }

  if (stage === "submitted-qualified") {
    return (
      <Centered>
        <p className="font-serif text-2xl font-light">¡Gracias!</p>
        <p className="mt-3 text-base text-muted">
          Marina revisará tus respuestas y te contactará para agendar vuestra llamada.
        </p>
      </Centered>
    );
  }

  // submitted-nurture
  return (
    <Centered>
      <p className="font-serif text-2xl font-light">¡Gracias!</p>
      <p className="mt-3 text-base text-muted">
        Te avisaremos por email cuando haya novedades.
      </p>
    </Centered>
  );
}

function ContactForm({
  answers,
  qualified,
  onSuccess,
}: {
  answers: Record<string, boolean>;
  qualified: boolean;
  onSuccess: () => void;
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTimes, setPreferredTimes] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setError("Indica tu nombre y email.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await submitLead({
        full_name: fullName.trim(),
        email: email.trim(),
        phone: qualified ? phone.trim() || undefined : undefined,
        answers,
        message: message.trim() || undefined,
        preferred_times: qualified ? preferredTimes.trim() || undefined : undefined,
      });
      onSuccess();
    } catch {
      setError("No se ha podido enviar. Inténtalo de nuevo.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fade-up mx-auto max-w-md px-6 py-20 md:py-28"
    >
      <h2 className="font-serif text-2xl font-light leading-snug md:text-3xl">
        {qualified ? "Cuéntame cómo contactarte" : "Déjame tu email"}
      </h2>

      <div className="mt-8 space-y-5">
        <Field label="Nombre">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
          />
        </Field>
        {qualified && (
          <>
            <Field label="Teléfono (opcional)">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
              />
            </Field>
            <Field label="¿Cuándo te viene bien la llamada? (opcional)">
              <input
                value={preferredTimes}
                onChange={(e) => setPreferredTimes(e.target.value)}
                placeholder="Ej. martes y jueves por la tarde"
                className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
              />
            </Field>
            <Field label="¿Algo que quieras contarme? (opcional)">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full border-b border-line bg-transparent pb-2 text-sm outline-none focus:border-accent"
              />
            </Field>
          </>
        )}
      </div>

      {error && <p className="mt-5 text-sm text-foreground">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="mt-10 w-full rounded-full bg-accent py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-accent-hover disabled:opacity-50"
      >
        {busy ? "Enviando…" : qualified ? "Solicitar mi llamada" : "Avisarme"}
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
