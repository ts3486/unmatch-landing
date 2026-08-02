import type { Dictionary } from "@/content";

export function Problem({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">
          {dict.problem.heading}
        </h2>
        <p className="mt-4 text-muted">{dict.problem.lede}</p>
        <ul className="mt-8 space-y-3 text-left">
          {dict.problem.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-xl border border-border bg-bg px-5 py-4 text-text"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
