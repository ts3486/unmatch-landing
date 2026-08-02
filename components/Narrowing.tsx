import type { Dictionary } from "@/content";

export function Narrowing({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-text">{dict.narrowing.forHeading}</h2>
          <p className="mt-3 text-muted">{dict.narrowing.forBody}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-text">{dict.narrowing.notForHeading}</h2>
          <p className="mt-3 text-muted">{dict.narrowing.notForBody}</p>
        </div>
      </div>
    </section>
  );
}
