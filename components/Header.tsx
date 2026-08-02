import Image from "next/image";
import { AppStoreButton } from "./AppStoreButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Unmatch logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-text">Unmatch</span>
        </div>
        <AppStoreButton className="scale-90 px-4 py-2" />
      </div>
    </header>
  );
}
