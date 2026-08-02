import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Unmatch logo"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="text-text">Unmatch</span>
        </div>
        <a href="#" className="hover:text-text">
          Privacy
        </a>
      </div>
    </footer>
  );
}
