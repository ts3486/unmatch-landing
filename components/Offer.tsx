import type { Dictionary } from "@/content";

export function Offer({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-bg px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">{dict.offer.heading}</h2>
        <ul className="mt-8 space-y-3 text-left">
          {dict.offer.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4"
            >
              <span aria-hidden className="mt-0.5 text-success">
                {"✓"}
              </span>
              <span className="text-text">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
