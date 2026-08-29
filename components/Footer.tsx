import Image from "next/image";
import type { Dictionary } from "@/content";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-bg px-6 py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 text-sm text-muted">
        <Image
          src="/logo.png"
          alt={dict.logoAlt}
          width={24}
          height={24}
          className="rounded-md"
        />
        <span className="text-text">Unmatch</span>
      </div>
    </footer>
  );
}
