import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header, { TopBar } from "@/components/Header";
import Footer, { MobileCallBar } from "@/components/Footer";
import TextUsWidget from "@/components/TextUsWidget";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Interior & Exterior Painters in Detroit, MI`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} provides interior painting, exterior painting, cabinet refinishing, commercial painting, drywall repair, and deck staining across ${site.region}. Get a free estimate today.`,
};

export const viewport: Viewport = {
  themeColor: "#450a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
        <TextUsWidget />
      </body>
    </html>
  );
}
