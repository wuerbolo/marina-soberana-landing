import Link from "next/link";

const ITEMS = [
  "Sientes que tienes un don para ayudar a otras personas, aunque hoy tengas otro trabajo oficial.",
  "Quieres acompañar a otras personas a lograr resultados reales, con un método propio que puedas defender con seguridad.",
  "Estás dispuesta a sanar primero tus propios miedos, límites, comunicación y autoestima.",
  "Buscas una formación práctica, en directo y con alto nivel de acompañamiento, no un curso grabado superficial y sin seguimiento.",
  "Ya has hecho otras formaciones y sientes que no avanzaste: sin prácticas, sin casos reales, sin seguimiento. En nuestros acompañamientos comparto toda mi experiencia real profesional trabajando en terapia individual con más de 900 personas.",
];

export default function ParaTi() {
  return (
    <section className="bg-dark text-on-dark">
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          ¿Es para ti si…?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-on-dark-muted">
          No puedes acompañar a otras personas en un camino que tú no has recorrido. Por
          eso antes de ser terapeuta para otros, lo eres primero para ti: sanas tus
          propias heridas y después aprendes a aplicar ese mismo proceso para ayudar a
          los demás.
        </p>

        <ul className="mt-10 space-y-4">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-dark-raised">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/aplicar"
            data-umami-event="cta-para-ti-click"
            className="inline-flex rounded-full bg-accent px-9 py-4 text-sm font-medium uppercase tracking-widest text-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Quiero saber si es para mí
          </Link>
        </div>
      </div>
    </section>
  );
}
