const ITEMS = [
  "Vivir en paz, ligereza, gratitud y amor. Sabes cómo sacarte de la ansiedad, estrés, miedo, angustia y sufrimiento.",
  "Autoconocimiento profundo: quién eres, para qué estás aquí, cuáles son tus heridas, qué lección de vida vienes a integrar.",
  "Canalizas mensajes de tus guías para liberarte de los miedos que te paralizan y tomar decisiones expansivas con confianza.",
  "Transformas tu relación con el dinero y el amor: dejas de sentir culpa, escasez o miedo y empiezas a recibirlo con naturalidad.",
  "Sabes cómo acceder a tus vidas pasadas para romper pactos de soledad, sufrimiento y escasez.",
  "Traes prosperidad y plenitud a tu familia: sabes cómo liberar patrones, miedos y creencias limitantes para no transmitirlas.",
  "Tendrás herramientas prácticas y fáciles de sanación energética y emocional para usar a diario en menos de 10 minutos.",
  "Aprenderás a manifestar de forma práctica: amor, dinero, salud, negocios, viajes… sin sabotearte ni sentir culpa.",
  "Serás tu propia terapeuta y la de otros (si lo deseas).",
];

export default function OutcomesList() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
          ¿Qué vas a lograr?
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
