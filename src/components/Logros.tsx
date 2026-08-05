const ITEMS = [
  <>
    <strong className="font-medium text-foreground">
      Vas a utilizar los Registros Akáshicos como una herramienta terapéutica real, con
      criterio profesional:
    </strong>{" "}
    no serás una simple lectora, tendrás una visión completa y precisa de lo que cada
    persona necesita trabajar a nivel energético y emocional: autoestima, merecimiento,
    confianza, ansiedad, relaciones / vínculos familiares, economía...
  </>,
  <>
    <strong className="font-medium text-foreground">
      Dominarás otras terapias energéticas y emocionales hasta construir tu propio método
      de acompañamiento,
    </strong>{" "}
    el que hará que las personas que trabajen contigo obtengan resultados reales y
    duraderos. Diseñamos procesos con estructura, no sesiones sueltas que no llevan a
    ningún sitio.
  </>,
  <>
    Sabrás{" "}
    <strong className="font-medium text-foreground">
      aplicar los Registros Akáshicos en toda su potencia:
    </strong>{" "}
    leerás la información para expandir tu conciencia y la de tu cliente, sabrás aplicar
    sanaciones energéticas que desprograman traumas y creencias limitantes, y reconocerás
    qué desbloquear en el campo energético para acelerar manifestaciones.
  </>,
  <>
    Sabrás entrar en la frecuencia de los Registros Akáshicos{" "}
    <strong className="font-medium text-foreground">en 1 minuto y con precisión,</strong>{" "}
    para recibir mensajes con total claridad, sin depender de rituales ni de saber
    meditar.
  </>,
  <>
    Tendrás un protocolo propio para limpiar tu canal, proteger y expandir tu energía en{" "}
    <strong className="font-medium text-foreground">5 minutos,</strong> de forma que
    puedas sostener sesión tras sesión sin cargarte de energía ajena ni terminar agotada.
  </>,
];

export default function Logros() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Esto es lo que vas a lograr
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted">
          En 6 meses, paso a paso, con objetivos claros en cada etapa.
        </p>

        <ol className="mt-12 divide-y divide-line">
          {ITEMS.map((item, i) => (
            <li key={i} className="flex gap-5 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark-raised font-serif text-lg font-semibold text-accent">
                {i + 1}
              </span>
              <p className="pt-1.5 text-base leading-relaxed text-foreground/90">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
