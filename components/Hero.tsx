import type { Dictionary } from "@/content";
import { AppStoreButton } from "./AppStoreButton";
import { PhoneFrame } from "./PhoneFrame";

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
      <PhoneFrame
        src="/screenshot-home.png"
        alt={dict.hero.screenshotAlt}
        width={320}
        height={651}
        priority
        className="mx-auto mt-16 max-w-[260px]"
      />
    </section>
  );
}
