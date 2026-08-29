import type { Dictionary } from "@/content";
import { AppStoreButton } from "./AppStoreButton";
import { FramedScreenshot } from "./FramedScreenshot";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="relative overflow-hidden px-6 pb-24 pt-20 text-center"
      style={{
        background:
          "linear-gradient(160deg, #0B1220 0%, #121C2E 40%, #1a1040 70%, #2d1050 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          {dict.hero.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{dict.hero.subhead}</p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton dict={dict} />
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-4xl items-center justify-center gap-4 sm:gap-8 lg:gap-10">
        <FramedScreenshot
          src={dict.solution.checkinSrc}
          alt={dict.solution.checkinAlt}
          width={779}
          height={1600}
          className="w-full min-w-0 max-w-[76px] sm:max-w-[150px] lg:max-w-[200px]"
        />
        <FramedScreenshot
          src={dict.hero.screenshotSrc}
          alt={dict.hero.screenshotAlt}
          width={779}
          height={1600}
          priority
          className="w-full min-w-0 max-w-[76px] sm:max-w-[150px] lg:max-w-[200px]"
        />
        <FramedScreenshot
          src={dict.solution.progressSrc}
          alt={dict.solution.progressAlt}
          width={779}
          height={1600}
          className="w-full min-w-0 max-w-[76px] sm:max-w-[150px] lg:max-w-[200px]"
        />
      </div>
    </section>
  );
}
