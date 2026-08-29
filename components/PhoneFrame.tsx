import Image from "next/image";

export function PhoneFrame({
  src,
  alt,
  width,
  height,
  priority,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="absolute inset-x-6 inset-y-10 -z-10 rounded-[3rem] bg-primary/25 blur-3xl"
      />
      <div className="relative rounded-[2.75rem] bg-gradient-to-b from-[#454c5c] via-[#20242e] to-[#14171f] p-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.65)]">
        <span
          aria-hidden
          className="absolute -left-[3px] top-[22%] h-8 w-[3px] rounded-l-sm bg-[#2a2e38]"
        />
        <span
          aria-hidden
          className="absolute -left-[3px] top-[34%] h-12 w-[3px] rounded-l-sm bg-[#2a2e38]"
        />
        <span
          aria-hidden
          className="absolute -right-[3px] top-[26%] h-16 w-[3px] rounded-r-sm bg-[#2a2e38]"
        />
        <div className="relative overflow-hidden rounded-[2.6rem] bg-black">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="block h-auto w-full"
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-2.5 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2.6rem] ring-1 ring-inset ring-white/15"
          />
        </div>
      </div>
    </div>
  );
}
