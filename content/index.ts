import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { ja } from "./ja";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
