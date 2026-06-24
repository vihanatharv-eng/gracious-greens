import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// Content-Security-Policy. Applied for production builds/serving only so local
// `next dev` (HMR websocket + eval-based source maps) keeps working unhindered.
// We gate on the Next.js *phase* rather than NODE_ENV because this project's
// .env.local pins NODE_ENV=development, which would otherwise misfire.
// 'unsafe-inline' is required for styles and for Next's hydration scripts since
// we don't run a nonce setup. When Razorpay is wired up, extend script-src /
// connect-src / add a frame-src with their domains (see inline notes).
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  // Razorpay (later): add https://checkout.razorpay.com to script-src
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.supabase.co https://*.r2.cloudflarestorage.com https://cdn.graciousgreens.in",
  "font-src 'self' data:",
  // Razorpay (later): add https://*.razorpay.com to connect-src,
  // and a "frame-src https://api.razorpay.com https://checkout.razorpay.com"
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

export default function config(phase: string): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    // Compile workspace packages that export TypeScript source
    transpilePackages: ["@gg/ui"],

    images: {
      remotePatterns: [
        { protocol: "https", hostname: "**.r2.cloudflarestorage.com" },
        { protocol: "https", hostname: "**.supabase.co" },
        { protocol: "https", hostname: "cdn.graciousgreens.in" },
      ],
      formats: ["image/avif", "image/webp"],
    },

    // Security headers
    async headers() {
      const headers = [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ];

      // Production-only: CSP (avoids breaking dev HMR) and HSTS.
      if (!isDev) {
        headers.push({ key: "Content-Security-Policy", value: contentSecurityPolicy });
        headers.push({
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        });
      }

      return [{ source: "/(.*)", headers }];
    },
  };
}
