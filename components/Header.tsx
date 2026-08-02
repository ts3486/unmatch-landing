import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { AppStoreButton } from "./AppStoreButton";

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.png"
            alt={dict.logoAlt}
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="hidden text-lg font-semibold text-text sm:inline">Unmatch</span>
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <nav
            aria-label="Language"
            className="flex items-center gap-1 whitespace-nowrap text-sm"
          >
            <Link
              href="/en"
              hrefLang="en"
              className={locale === "en" ? "text-text" : "text-muted hover:text-text"}
            >
              EN
            </Link>
            <span aria-hidden className="text-border">
              /
            </span>
            <Link
              href="/ja"
              hrefLang="ja"
              className={locale === "ja" ? "text-text" : "text-muted hover:text-text"}
            >
              日本語
            </Link>
          </nav>
          <AppStoreButton dict={dict} className="scale-90 px-4 py-2" />
        </div>
      </div>
    </header>
  );
}
