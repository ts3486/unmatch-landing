export const LOCALES = ["en", "ja"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ja: "ja_JP",
};
