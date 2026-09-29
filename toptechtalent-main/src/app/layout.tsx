import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Roboto, Outfit } from "next/font/google";
import { Site } from "@/lib/Site";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import LinksSection from "./_components/LinksSection";

const roboto = Roboto({
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: Site?.seo_title,
  description: Site?.description,
  metadataBase: new URL(Site?.url),
  keywords:[Site?.keywords?.split(",").map((keyword) => keyword.trim())].flat(),
  openGraph: {
    title: Site?.seo_title,
    description: Site?.description,
    url: Site?.url,
    siteName: Site?.name,
    images: [
      {
        url: "/assets/logo-multi.png",
        width: 1200,
        height: 630,
        alt: `${Site?.name} Logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: Site?.seo_title,
    description: Site?.description,
    images: [`${Site?.url}/assets/logo-multi.png`],
    creator: "@TopTechTalent",
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: Site?.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: Site?.themeColor || "#3758F9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} ${outfit?.variable} antialiased relative`}
      >
        <Header />
        <main className="block">{children}</main>
        <LinksSection />
        <Footer />
      </body>
    </html>
  );
}
