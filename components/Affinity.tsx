import type { Dictionary } from "@/content";

export function Affinity({ dict }: { dict: Dictionary }) {
  const [lead, ...rest] = dict.affinity.body;

  return (
    <section className="relative overflow-hidden bg-bg px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(76,141,255,0.08) 0%, rgba(11,18,32,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">{dict.affinity.heading}</h2>
        <div className="mx-auto mt-8 max-w-xl border-l-2 border-secondary/50 pl-6 text-left">
          {lead ? (
            <p className="text-xl font-medium leading-relaxed text-text">{lead}</p>
          ) : null}
          {rest.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
