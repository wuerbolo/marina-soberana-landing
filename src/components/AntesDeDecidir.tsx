const ITEMS = [
  {
    question: "¿Yo voy a saber canalizar?",
    answer:
      "Todas las personas recibimos información constantemente, pero lo hacemos de forma distinta. Este máster te va a ayudar a detectar de qué forma canalizas tú la información de los Registros Akáshicos para que podamos desarrollarla. A los 15 días ya empiezas a canalizar con claridad. Nadie se queda sin canalizar.",
  },
  {
    question: "¿Y si me lo invento o no me llega nada?",
    answer:
      "Vamos a ir desarrollando tu capacidad de canalización paso a paso, aunque seas muy mental. Además, tendrás un método de verificación de la información para que cada vez tengas más seguridad y claridad en lo que recibes.",
  },
  {
    question: "Ya he hecho un curso de Registros Akáshicos y no sentí ni vi nada.",
    answer:
      "Hay muchas formaciones de Registros Akáshicos superficiales que no te enseñan a canalizar a tu manera —intentan que hagas algo que no eres— y que no te dan herramientas para desarrollar la apertura de canal y recibir mensajes con claridad. Este no es el caso: es un máster de alto nivel, con un método construido en +2 años y ya recorrido por más de 60 alumnas.",
  },
  {
    question: "¿Y si yo no quiero dejar mi trabajo para ser terapeuta?",
    answer:
      "Ningún problema. En este máster aprendes a ser terapeuta para ti y para otros, y puedes compaginarlo con tu trabajo actual: muchas alumnas empiezan como actividad complementaria y deciden más adelante si quieren dedicarse a ello por completo.",
  },
  {
    question: "¿Y si me bloqueo y me siento perdida?",
    answer:
      "Vas a tener acompañamiento de alto nivel: estamos en contacto contigo semanalmente, tanto yo como tu tutora, para asegurarnos que consigues tus objetivos y que avanzas.",
  },
];

export default function AntesDeDecidir() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Antes de decidir
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted">
          Las dudas más frecuentes de quienes están valorando entrar.
        </p>

        <div className="mt-12 space-y-4">
          {ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-line bg-background open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 font-serif text-lg font-medium marker:content-none">
                <span className="flex-1">{item.question}</span>
                <span className="shrink-0 text-xl font-sans font-light text-accent group-open:hidden">
                  +
                </span>
                <span className="hidden shrink-0 text-xl font-sans font-light text-accent group-open:inline">
                  −
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
