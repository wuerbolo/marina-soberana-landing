import Image from "next/image";

export default function SobreMi() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        <div className="w-48 shrink-0 md:w-60">
          <Image
            src="/images/marina.jpg"
            alt="Marina, maestra de Registros Akáshicos"
            width={480}
            height={853}
            className="w-full rounded-2xl object-cover shadow-card"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
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
              energéticas para que puedas ayudar en profundidad a tus clientes, logren
              sus resultados y noten transformación desde la 2ª sesión, sin que pierdan
              más tiempo ni dinero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
