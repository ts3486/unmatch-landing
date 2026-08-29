import type { Dictionary } from "@/content";
import { AppStoreButton } from "./AppStoreButton";

export function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="px-6 py-24 text-center"
      style={{
        background:
          "linear-gradient(200deg, #0B1220 0%, #0F1B2E 35%, #123152 68%, #163F66 100%)",
      }}
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold text-text">{dict.finalCta.heading}</h2>
        <p className="mt-4 text-muted">{dict.finalCta.sub}</p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton dict={dict} size="lg" />
        </div>
      </div>
    </section>
  );
}
