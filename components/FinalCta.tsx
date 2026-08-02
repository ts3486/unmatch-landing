import { AppStoreButton } from "./AppStoreButton";

export function FinalCta() {
  return (
    <section
      className="px-6 py-24 text-center"
      style={{
        background:
          "linear-gradient(160deg, #0B1220 0%, #121C2E 40%, #1a1040 70%, #2d1050 100%)",
      }}
    >
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-extrabold text-text">
          Take back your time from dating apps.
        </h2>
        <p className="mt-4 text-muted">Free to download. Private by design.</p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
