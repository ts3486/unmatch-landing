import Image from "next/image";

const steps = [
  { title: "Tap Reset", detail: "Two taps away, any time." },
  { title: "Breathe for 60 seconds", detail: "A guided visual breathing cycle." },
  { title: "Choose a short action", detail: "1-15 minutes, from a preset list." },
  { title: "Log what happened", detail: "Win or not, it counts." },
];

const features = [
  {
    title: "Panic Reset",
    detail: "A structured 60-second protocol for when the urge hits.",
  },
  {
    title: "Spend Delay Cards",
    detail: "Catches impulsive boosts and premium purchases before they happen.",
  },
  {
    title: "Daily Check-in",
    detail: "Track mood, fatigue, and urges in seconds.",
  },
  {
    title: "Progress & Meditation Rank",
    detail: "Streaks, stats, and a rank that only ever goes up.",
  },
  {
    title: "7-Day Starter Course",
    detail: "Short daily lessons on triggers and habits.",
  },
];

export function Solution() {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-text sm:text-3xl">
          When the urge hits, open Unmatch.
        </h2>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-border bg-bg p-5">
              <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
              <p className="mt-1 font-semibold text-text">{step.title}</p>
              <p className="mt-1 text-sm text-muted">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center gap-4">
            <Image
              src="/screenshot-checkin.png"
              alt="Unmatch daily check-in screen for tracking mood, fatigue, and urge levels"
              width={220}
              height={448}
              className="h-auto w-full min-w-0 max-w-[220px] rounded-2xl border border-border shadow-xl"
            />
            <Image
              src="/screenshot-progress.png"
              alt="Unmatch progress screen showing check-in streaks and weekly stats"
              width={220}
              height={448}
              className="h-auto w-full min-w-0 max-w-[220px] rounded-2xl border border-border shadow-xl"
            />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
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
