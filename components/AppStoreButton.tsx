import type { Dictionary } from "@/content";
import { APP_STORE_URL } from "@/lib/constants";

const sizes = {
  base: { padding: "px-5 py-3", icon: 28, label: "text-xs", store: "text-lg" },
  lg: { padding: "px-7 py-4", icon: 34, label: "text-sm", store: "text-xl" },
};

export function AppStoreButton({
  dict,
  className = "",
  size = "base",
}: {
  dict: Dictionary;
  className?: string;
  size?: keyof typeof sizes;
}) {
  const s = sizes[size];

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl bg-text text-bg transition hover:opacity-90 ${s.padding} ${size === "lg" ? "shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_40px_-12px_rgba(76,141,255,0.45)]" : ""} ${className}`}
    >
      <svg aria-hidden viewBox="0 0 384 512" width={s.icon} height={s.icon} fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <span className="flex flex-col items-start whitespace-nowrap leading-tight">
        <span className={s.label}>{dict.appStore.downloadOn}</span>
        <span className={`-mt-0.5 font-semibold ${s.store}`}>{dict.appStore.appStore}</span>
      </span>
    </a>
  );
}
