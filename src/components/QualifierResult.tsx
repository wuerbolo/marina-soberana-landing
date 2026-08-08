import Link from "next/link";
import { TUS_GUIAS_URL, whatsappLink } from "@/lib/links";

// The qualifier's two closing screens. Which one a visitor sees is decided by
// the server's response to the single submission — never here.

/**
 * She cleared all three gates. This is the only WhatsApp link on the site
 * (docs/adr/0002) — every other route to Marina goes through these questions.
 */
export function CallScreen({ fullName }: { fullName: string }) {
  return (
    <div className="fade-up mx-auto max-w-xl px-6 py-20 text-center md:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">Tu siguiente paso</p>
      <h2 className="mt-4 font-serif text-3xl font-medium leading-snug md:text-4xl">
        Hablemos por WhatsApp.
      </h2>
      <p className="mt-5 text-base leading-relaxed text-muted">
        Por lo que cuentas, Soberana encaja con tu momento. Escríbeme y agendamos la
        llamada. Tengo delante tus respuestas, así que no tienes que explicarte otra vez.
      </p>
      <div className="mt-10">
        <a
          href={whatsappLink(fullName)}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="cta-whatsapp"
          className="btn-cta"
        >
          Escríbeme por WhatsApp
        </a>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted">
          El mensaje ya va escrito
        </p>
      </div>
      <p className="mt-10 text-sm leading-relaxed text-muted">
        Si prefieres esperar, no pasa nada: tengo tu teléfono y tu email, y te escribo yo.
      </p>
    </div>
  );
}

/**
 * She did not clear a gate. She is pointed at the rung below the máster, with
 * the reason quoted straight back from the answer she just gave — never a
 * score, a verdict, or a door that closed.
 */
export function GuiasScreen({
  quotedPrompt,
  consent,
}: {
  quotedPrompt: string | null;
  consent: boolean;
}) {
  return (
    <div className="fade-up mx-auto max-w-xl px-6 py-20 text-center md:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">Tu siguiente paso</p>
      <h2 className="mt-4 font-serif text-3xl font-medium leading-snug md:text-4xl">
        Empieza por Tus Guías Te Hablan.
      </h2>
      {quotedPrompt && (
        <figure className="mt-8 rounded-2xl border border-line bg-surface p-6 text-left shadow-card">
          <figcaption className="text-[11px] uppercase tracking-wider text-muted">
            Me has dicho que no a esto
          </figcaption>
          <blockquote className="mt-3 font-serif text-lg leading-snug">
            {quotedPrompt}
          </blockquote>
        </figure>
      )}
      <p className="mt-8 text-base leading-relaxed text-muted">
        El máster se sostiene justo ahí, y no te lo voy a poner delante ahora. Lo que
        sí puedes empezar hoy es el trabajo con tus guías: es el curso donde aprendes
        a canalizar sus mensajes por tu cuenta, a tu ritmo. Es el escalón anterior, y
        cuando cambie tu momento, Soberana sigue aquí.
      </p>
      <div className="mt-10">
        <a
          href={TUS_GUIAS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="cta-tus-guias"
          className="btn-cta"
        >
          Ver Tus Guías Te Hablan
        </a>
      </div>
      {consent && (
        <p className="mt-10 text-sm leading-relaxed text-muted">
          Y nos seguimos leyendo: te llegarán mis cartas al email que me has dejado.
        </p>
      )}
      <div className="mt-8">
        <Link href="/" className="text-xs uppercase tracking-widest text-muted hover:text-foreground">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
