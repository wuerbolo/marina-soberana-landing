export default function TestimonialQuote({
  quote,
  name,
}: {
  quote: string;
  name?: string;
}) {
  return (
    <figure className="rounded-2xl border border-line bg-background p-6">
      <blockquote className="font-serif text-lg font-light leading-relaxed text-foreground/90">
        “{quote}”
      </blockquote>
      {name && (
        <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted">
          {name}
        </figcaption>
      )}
    </figure>
  );
}
