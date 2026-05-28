import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

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
  themeColor: "#1F3A2D",
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
