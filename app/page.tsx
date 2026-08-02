import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Affinity } from "@/components/Affinity";
import { Solution } from "@/components/Solution";
import { Offer } from "@/components/Offer";
import { Narrowing } from "@/components/Narrowing";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Unmatch",
  description:
    "A calm, private tool to break the dating app swipe-check-spend cycle. Free, offline, no account required.",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: SITE_URL,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Affinity />
        <Solution />
        <Offer />
        <Narrowing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
