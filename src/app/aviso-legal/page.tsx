export const metadata = {
  title: "Aviso legal | Soberana",
};

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl font-light tracking-tight">Aviso legal</h1>
      <p className="mt-3 text-xs uppercase tracking-widest text-muted">
        Última actualización: julio de 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="font-serif text-xl text-foreground">Identificación del titular</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Titular: Marina Romero Mieres</li>
            <li>NIF: 47542380T</li>
            <li>Domicilio: Rascafría 36, 28670 Villaviciosa de Odón (Madrid)</li>
            <li>
              Email de contacto:{" "}
              <a href="mailto:info@marinaromes.com" className="underline hover:text-foreground">
                info@marinaromes.com
              </a>
            </li>
            <li>Sitios web: escuelasoberana.com y app.escuelasoberana.com</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Objeto</h2>
          <p className="mt-2">
            escuelasoberana.com es el sitio informativo del programa Soberana. La
            contratación no se realiza mediante compra directa en esta web: se gestiona de
            forma personal, tras una llamada de valoración, con Marina o su equipo. Una vez
            matriculada, el acceso al contenido se realiza a través de
            app.escuelasoberana.com.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">
            Exclusión de garantías y responsabilidad
          </h2>
          <p className="mt-2">
            Marina Romero Mieres no garantiza la disponibilidad continua e ininterrumpida de
            los sitios web, ni se responsabiliza de daños derivados de errores, interrupciones
            o de la presencia de virus u otros elementos dañinos, cuando estos tengan su
            origen en causas ajenas a su control (por ejemplo, fallos de proveedores externos
            de alojamiento, base de datos o conectividad).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Política de enlaces</h2>
          <p className="mt-2">
            Si algún enlace externo apunta a esta web, no implica relación alguna con su
            titular ni aprobación de sus contenidos. A su vez, esta web no se responsabiliza
            del contenido de sitios de terceros a los que pueda enlazar.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">
            Modificaciones y derecho de exclusión
          </h2>
          <p className="mt-2">
            Marina Romero Mieres se reserva el derecho a modificar el contenido de este sitio
            sin previo aviso, así como a denegar o retirar el acceso a este sitio y/o los
            servicios ofrecidos a usuarias que incumplan estas condiciones.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Reclamaciones y dudas</h2>
          <p className="mt-2">
            Para cualquier reclamación o duda relacionada con este sitio o el programa,
            escribe a{" "}
            <a href="mailto:info@marinaromes.com" className="underline hover:text-foreground">
              info@marinaromes.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground">Ley aplicable y jurisdicción</h2>
          <p className="mt-2">
            Este aviso legal se rige por la legislación española. Cualquier controversia se
            someterá a los juzgados y tribunales que correspondan según la normativa de
            protección de consumidores, que en general te permite acudir a los de tu propio
            domicilio.
          </p>
        </section>
      </div>
    </main>
  );
}
