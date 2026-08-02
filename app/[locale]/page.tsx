import { notFound } from "next/navigation";
import { Affinity } from "@/components/Affinity";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Narrowing } from "@/components/Narrowing";
import { Offer } from "@/components/Offer";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { getDictionary } from "@/content";
import { SITE_URL } from "@/lib/constants";
import { isLocale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Unmatch",
    description: dict.meta.description,
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <Problem dict={dict} />
        <Affinity dict={dict} />
        <Solution dict={dict} />
        <Offer dict={dict} />
        <Narrowing dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
