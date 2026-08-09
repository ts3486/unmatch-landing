import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { getDictionary } from "@/content";
import { APP_STORE_ID, IS_INDEXABLE, SITE_URL } from "@/lib/constants";
import { isLocale, LOCALES, OG_LOCALE } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ja: "/ja",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: "Unmatch",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      locale: OG_LOCALE[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og-image.png"],
    },
    robots: {
      index: IS_INDEXABLE,
      follow: IS_INDEXABLE,
      googleBot: { index: IS_INDEXABLE, follow: IS_INDEXABLE },
    },
    other: {
      "apple-itunes-app": `app-id=${APP_STORE_ID}`,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0B1220",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-bg font-sans text-text antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
