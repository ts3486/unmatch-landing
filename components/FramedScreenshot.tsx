import Image from "next/image";

export function FramedScreenshot({
  src,
  alt,
  width,
  height,
  priority,
  glow = true,
  className = "",
  frameClassName = "rounded-[10px] sm:rounded-[19px] lg:rounded-[26px]",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  glow?: boolean;
  className?: string;
  /**
   * The source PNGs already have a rounded device bezel baked in (~12.8% of
   * their width). This clips our own corners just outside that curve so the
   * background-colored notch left by the source's rounded corners doesn't
   * show. Must be tuned to each call site's actual rendered width per
   * breakpoint — pass an override when using a different size than Hero's.
   */
  frameClassName?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <div
          aria-hidden
          className="absolute inset-x-6 inset-y-10 -z-10 rounded-[3rem] bg-primary/25 blur-3xl"
        />
      ) : null}
      <div
        className={`overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.65)] ${frameClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
