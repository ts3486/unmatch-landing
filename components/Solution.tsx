import type { Dictionary } from "@/content";
import {
  IconBookOpen,
  IconBreath,
  IconCalendarCheck,
  IconCardPause,
  IconChecklist,
  IconNote,
  IconShieldPulse,
  IconTarget,
  IconTrendUp,
} from "./icons";
import { PhoneFrame } from "./PhoneFrame";

const stepIcons = [IconTarget, IconBreath, IconChecklist, IconNote];
const featureIcons = [IconShieldPulse, IconCardPause, IconCalendarCheck, IconTrendUp, IconBookOpen];

export function Solution({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-extrabold text-text sm:text-3xl">
          {dict.solution.heading}
        </h2>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {dict.solution.steps.map((step, index) => {
            const StepIcon = stepIcons[index];
            return (
              <li key={step.title} className="rounded-xl border border-border bg-bg p-5">
                <div className="flex items-center gap-2">
                  {StepIcon ? <StepIcon className="h-5 w-5 text-primary" /> : null}
                  <span className="inline-flex items-center rounded-full bg-secondary/15 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                    {dict.solution.stepLabel} {index + 1}
                  </span>
                </div>
                <p className="mt-2 font-semibold text-text">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.detail}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center gap-3 sm:gap-4">
            <PhoneFrame
              src="/screenshot-checkin.png"
              alt={dict.solution.checkinAlt}
              width={220}
              height={448}
              className="w-full max-w-[150px] sm:max-w-[220px]"
            />
            <PhoneFrame
              src="/screenshot-progress.png"
              alt={dict.solution.progressAlt}
              width={220}
              height={448}
              className="w-full max-w-[150px] sm:max-w-[220px]"
            />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {dict.solution.features.map((feature, index) => {
              const FeatureIcon = featureIcons[index];
              return (
                <li key={feature.title} className="rounded-xl border border-border bg-bg p-5">
                  {FeatureIcon ? <FeatureIcon className="h-5 w-5 text-primary" /> : null}
                  <p className="mt-2 font-semibold text-text">{feature.title}</p>
                  <p className="mt-1 text-sm text-muted">{feature.detail}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
