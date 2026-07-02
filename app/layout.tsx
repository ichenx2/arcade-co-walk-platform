import type { Metadata } from "next";
import { Noto_Sans_TC, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_NAME_EN } from "@/lib/constants";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${SITE_NAME}｜${SITE_NAME_EN}`,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME}｜${SITE_NAME_EN}`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/images/hero-street.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}｜${SITE_NAME_EN}`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-street.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSansTC.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
