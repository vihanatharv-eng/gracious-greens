import Link from "next/link";
import { CartProvider } from "@/contexts/cart-context";
import { Navbar } from "@/components/navbar";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";

// This is the ROOT not-found.tsx, used by Next.js for genuinely unmatched
// URLs (no matching route at all). It does NOT inherit the (store) route
// group's layout/chrome — that layout only wraps notFound() calls thrown
// from WITHIN an already-matched (store) route (e.g. an invalid product
// slug). So navbar/footer/cart are wired up directly here, self-contained.
export default function NotFound() {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <main className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FAF8F3] text-center px-6 pt-32 pb-20">
        <span className="text-6xl mb-6" role="img" aria-label="wilted plant">
          🥀
        </span>
        <h1
          className="text-4xl font-serif text-[#1F3A2D] mb-3"
          style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
        >
          Page not found
        </h1>
        <p className="text-[#22201C]/50 mb-8 max-w-xs">
          This page seems to have wandered off. Let&apos;s get you back to greener pastures.
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] text-sm font-medium hover:bg-[#2D5040] transition-colors"
        >
          Back home
        </Link>
      </main>
      <Footer />
    </CartProvider>
  );
}
