import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_STORE_ID, SITE_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Unmatch — Take Back Your Time From Dating Apps";
const description =
  "Unmatch is a free, private, offline app to break the dating app swipe-check-spend cycle. A 60-second reset, no account, no subscription.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Unmatch",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  other: {
    "apple-itunes-app": `app-id=${APP_STORE_ID}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg font-sans text-text antialiased">{children}</body>
    </html>
  );
}
