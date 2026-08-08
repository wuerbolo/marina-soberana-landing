import SectionHeading from "./SectionHeading";

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
      "Hay muchos libros y formaciones que te dan un método o unas oraciones que no son tuyas —intentan que hagas algo que no eres— y por eso no conectas ni canalizas con ellos. Aquí no vas a seguir un protocolo ajeno: vas a encontrar tu propia forma de canalizar, con herramientas para abrir tu canal y recibir mensajes con claridad. Es un máster de alto nivel, con un método construido en +2 años y ya recorrido por más de 60 alumnas.",
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
    <section className="bg-surface px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto max-w-[760px]">
        <SectionHeading
          title="Antes de decidir"
          subtitle="Las dudas más frecuentes de quienes están valorando entrar."
        />

        <div className="reveal flex flex-col gap-2.5">
          {ITEMS.map((item) => (
            <details
              key={item.question}
              className="overflow-hidden rounded-[14px] border border-panel-line bg-panel transition-[border-color,box-shadow] duration-200 open:border-accent/45 open:shadow-card hover:border-accent/40"
            >
              {/* Same type role as the Enfoque accordion titles — see .h-card. */}
              <summary className="h-card relative block cursor-pointer py-[18px] pl-5 pr-[52px] marker:content-none">
                {item.question}
                <span
                  aria-hidden
                  className="om-plus absolute right-5 top-[19px] font-sans text-[22px] font-light leading-none text-accent"
                >
                  +
                </span>
              </summary>
              <p className="t-note px-5 pb-5 text-pretty text-body-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
