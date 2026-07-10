import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
          Tu siguiente paso
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Soberana se trabaja de forma cercana y personalizada, así que antes de unirte
          hablamos en una llamada. Empieza por estas preguntas para saber si es tu
          momento.
        </p>
        <div className="mt-10">
          <Link
            href="/aplicar"
            className="inline-flex rounded-full bg-accent px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-accent-hover"
          >
            Quiero saber si es para mí
          </Link>
        </div>
      </div>
      <footer className="border-t border-line px-6 py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Marina Romés · Soberana
      </footer>
    </section>
  );
}
