import type { Dictionary } from "@/content";

export function Affinity({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-bg px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">
          {dict.affinity.heading}
        </h2>
        {dict.affinity.body.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-lg text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
