import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { LOCALES } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        en: `${SITE_URL}/en`,
        ja: `${SITE_URL}/ja`,
      },
    },
  }));
}
