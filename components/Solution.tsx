import Image from "next/image";
import type { Dictionary } from "@/content";

export function Solution({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-text sm:text-3xl">
          {dict.solution.heading}
        </h2>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {dict.solution.steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-border bg-bg p-5">
              <span className="text-sm font-semibold text-primary">
                {dict.solution.stepLabel} {index + 1}
              </span>
              <p className="mt-1 font-semibold text-text">{step.title}</p>
              <p className="mt-1 text-sm text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center gap-4">
            <Image
              src="/screenshot-checkin.png"
              alt={dict.solution.checkinAlt}
              width={220}
              height={448}
              className="h-auto w-full min-w-0 max-w-[220px] rounded-2xl border border-border shadow-xl"
            />
            <Image
              src="/screenshot-progress.png"
              alt={dict.solution.progressAlt}
              width={220}
              height={448}
              className="h-auto w-full min-w-0 max-w-[220px] rounded-2xl border border-border shadow-xl"
            />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {dict.solution.features.map((feature) => (
              <li key={feature.title} className="rounded-xl border border-border bg-bg p-5">
                <p className="font-semibold text-text">{feature.title}</p>
                <p className="mt-1 text-sm text-muted">{feature.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
