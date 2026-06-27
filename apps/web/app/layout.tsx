import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env["NEXT_PUBLIC_APP_URL"] ?? "https://graciousgreens.in"),
  title: {
    default: "Gracious Greens — Gift a Little Life",
    template: "%s | Gracious Greens",
  },
  description:
    "Miniature plants gifted with care. Personalised plant gifts for every occasion — birthdays, corporate events, and everyday moments that deserve something alive.",
  keywords: [
    "miniature plant gifts",
    "personalised gifting India",
    "plant gifts for office",
    "indoor plants online",
    "corporate plant gifts",
    "birthday plant gift",
  ],
  authors: [{ name: "Gracious Greens" }],
  creator: "Gracious Greens",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env["NEXT_PUBLIC_APP_URL"],
    siteName: "Gracious Greens",
    title: "Gracious Greens — Gift a Little Life",
    description: "Miniature plants, gifted with intention.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gracious Greens — Miniature Plant Gifts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gracious Greens",
    description: "Gift a little life.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#042f2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${geist.variable} ${playfair.variable} ${caveat.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
