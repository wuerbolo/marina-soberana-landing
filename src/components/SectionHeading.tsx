/**
 * The heading block every section on the page opens with: a short gold rule, a
 * serif title, and an optional line of subtitle underneath.
 *
 * Extracted during the 2026-08-08 design pass. Nine sections had hand-copied
 * the same three elements, and the copies had already drifted apart in weight
 * and spacing — which is exactly the kind of drift that makes a page read as
 * assembled rather than designed. Changing the rhythm of the whole page is now
 * one edit here.
 */
export default function SectionHeading({
  title,
  subtitle,
  tone = "light",
}: {
  title: string;
  /** Optional supporting line. Kept short — it is a subtitle, not a paragraph. */
  subtitle?: string;
  /** `dark` picks the on-dark text colours for the deep purple sections. */
  tone?: "light" | "dark";
}) {
  return (
    <div className="reveal text-center">
      <div aria-hidden className="rule-gold mx-auto mb-7 w-16" />
      <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-xl text-base leading-relaxed ${
            tone === "dark" ? "text-on-dark-muted" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
