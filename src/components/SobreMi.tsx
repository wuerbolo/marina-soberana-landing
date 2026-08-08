import Image from "next/image";

export default function SobreMi() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        {/*
          The arched frame is Marina's own shape from the webv3 mockup — square
          shoulders, a deep sweep at the foot. The offset gold outline behind it
          is what stops a lone portrait from floating on a white field.
        */}
        <div className="reveal relative w-48 shrink-0 md:w-60">
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 h-full w-full rounded-t-lg rounded-b-[120px] border border-accent/45"
          />
          <Image
            src="/images/marina.jpg"
            alt="Marina, maestra de Registros Akáshicos"
            width={480}
            height={853}
            className="relative w-full rounded-t-lg rounded-b-[120px] object-cover shadow-card-lift"
          />
        </div>
        <div className="reveal text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Quién te acompaña
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl">
            Hola, ¡soy Marina!
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Maestra de Registros Akáshicos, terapeuta sistémica especialista en
              relaciones, autoestima y dinero, y amante de los cambios y la
              manifestación.
            </p>
            <p>
              Desde 2021 he observado por qué las terapias energéticas no tienen
              resultados a largo plazo: les falta el componente terrenal. ¿Cómo digo lo
              que siento? ¿Cómo pongo límites? ¿Cómo creo relaciones sanas? ¿Cómo me
              siento merecedora?
            </p>
            <p>
              Voy a enseñarte a aplicar de forma práctica herramientas emocionales y
              energéticas para que ayudes en profundidad a tus clientes: que logren sus
              resultados y noten transformación desde el día 1, sin perder más tiempo ni
              dinero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
