export default function TestimonialQuote({
  quote,
  name,
}: {
  quote: string;
  name?: string;
}) {
  // Rendered inside the dark testimonial section — on-dark palette.
  return (
    <figure className="rounded-2xl bg-dark-raised p-6">
      <blockquote className="font-serif text-lg font-light leading-relaxed text-on-dark/90">
        “{quote}”
      </blockquote>
      {name && (
        <figcaption className="mt-4 text-xs uppercase tracking-widest text-on-dark-muted">
          {name}
        </figcaption>
      )}
    </figure>
  );
}
