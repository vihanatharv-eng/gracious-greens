"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { DEMO_PRODUCTS, OCCASIONS } from "@/lib/demo-products";

// Featured = bestsellers first, then fill to 4
const FEATURED = [
  ...DEMO_PRODUCTS.filter((p) => p.isBestseller),
  ...DEMO_PRODUCTS.filter((p) => !p.isBestseller),
].slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FAF8F3]">
        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, #A8BCA1 0%, transparent 70%)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C77B58 0%, transparent 70%)" }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F3A2D]/8 text-[#1F3A2D] text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8BCA1] inline-block" />
                Miniature plants, maximum feeling
              </span>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#1F3A2D] leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                Gift a plant.
                <br />
                <em className="not-italic text-[#A8BCA1]">Gift a feeling.</em>
              </h1>

              <p className="text-lg text-[#22201C]/60 leading-relaxed max-w-md mb-10">
                Handpicked miniature plants with personalised notes, thoughtful packaging,
                and same-day delivery across Hyderabad.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="px-8 py-3.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] font-semibold text-sm hover:bg-[#2D5040] active:scale-[0.98] transition-all"
                >
                  Shop Now →
                </Link>
                <Link
                  href="/gifts/personalise"
                  className="px-8 py-3.5 rounded-full border border-[#1F3A2D]/20 text-[#1F3A2D] font-semibold text-sm hover:bg-[#1F3A2D]/5 active:scale-[0.98] transition-all"
                >
                  Personalise a Gift
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 mt-12">
                {[
                  { icon: "🌿", label: "500+ Plants Gifted" },
                  { icon: "✍️", label: "Handwritten Notes" },
                  { icon: "🚚", label: "Same-Day Delivery" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden>{icon}</span>
                    <span className="text-xs text-[#22201C]/50 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating plant showcase */}
            <div className="relative hidden lg:flex items-center justify-center h-[520px]">
              {/* Main center card */}
              <div
                className="absolute w-56 h-56 rounded-3xl flex items-center justify-center shadow-2xl shadow-[#1F3A2D]/15"
                style={{ background: DEMO_PRODUCTS[0]!.gradient }}
              >
                <span className="text-8xl select-none" role="img" aria-label={DEMO_PRODUCTS[0]!.title}>
                  {DEMO_PRODUCTS[0]!.emoji}
                </span>
              </div>

              {/* Top-right */}
              <div
                className="absolute top-8 right-12 w-36 h-36 rounded-2xl flex items-center justify-center shadow-xl shadow-[#1F3A2D]/10 rotate-6"
                style={{ background: DEMO_PRODUCTS[1]!.gradient }}
              >
                <span className="text-5xl select-none" role="img" aria-label={DEMO_PRODUCTS[1]!.title}>
                  {DEMO_PRODUCTS[1]!.emoji}
                </span>
              </div>

              {/* Bottom-left */}
              <div
                className="absolute bottom-16 left-8 w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl shadow-[#1F3A2D]/10 -rotate-3"
                style={{ background: DEMO_PRODUCTS[2]!.gradient }}
              >
                <span className="text-5xl select-none" role="img" aria-label={DEMO_PRODUCTS[2]!.title}>
                  {DEMO_PRODUCTS[2]!.emoji}
                </span>
              </div>

              {/* Top-left small */}
              <div
                className="absolute top-24 left-0 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg shadow-[#1F3A2D]/8 rotate-12"
                style={{ background: DEMO_PRODUCTS[3]!.gradient }}
              >
                <span className="text-4xl select-none" role="img" aria-label={DEMO_PRODUCTS[3]!.title}>
                  {DEMO_PRODUCTS[3]!.emoji}
                </span>
              </div>

              {/* Floating tag */}
              <div className="absolute bottom-8 right-4 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-[#1F3A2D]/10">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#C77B58">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#1F3A2D]">4.9 / 5</span>
                </div>
                <p className="text-[10px] text-[#22201C]/40 mt-0.5">From 200+ happy gifters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Occasions Strip ────────────────────────────────────────────── */}
      <section className="bg-[#1F3A2D] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2
            className="text-center text-2xl font-semibold text-[#FAF8F3] mb-8"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            What&apos;s the occasion?
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {OCCASIONS.map((occasion) => (
              <Link
                key={occasion.label}
                href={`/shop?occasion=${encodeURIComponent(occasion.label)}`}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#FAF8F3]/5 hover:bg-[#FAF8F3]/10 transition-colors group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200" aria-hidden>
                  {occasion.emoji}
                </span>
                <span className="text-xs text-[#A8BCA1] font-medium text-center leading-snug">
                  {occasion.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A8BCA1] mb-2">
                Handpicked for you
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#1F3A2D]"
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                Customer favourites
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#1F3A2D] hover:text-[#2D5040] transition-colors"
            >
              View all <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FEATURED.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1F3A2D]"
            >
              View all plants →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Personalisation Banner ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-[#1F3A2D] overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Left — copy */}
              <div className="px-10 py-14 lg:px-14">
                <span className="inline-block px-3 py-1 rounded-full bg-[#A8BCA1]/20 text-[#A8BCA1] text-xs font-semibold uppercase tracking-widest mb-6">
                  Make it personal
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-[#FAF8F3] leading-tight mb-4"
                  style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
                >
                  Every gift tells
                  <br />a story.
                </h2>
                <p className="text-[#A8BCA1] leading-relaxed mb-8 max-w-sm">
                  Add a handwritten note, choose elegant gift wrapping, or upload a photo
                  to make your plant truly one-of-a-kind.
                </p>

                <div className="space-y-3 mb-10">
                  {[
                    { icon: "✍️", text: "Handwritten message on premium card" },
                    { icon: "🎁", text: "Luxury gift wrapping (+₹50)" },
                    { icon: "📸", text: "Custom photo keepsake option" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <span className="text-lg flex-shrink-0">{icon}</span>
                      <span className="text-sm text-[#FAF8F3]/70">{text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/gifts/personalise"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF8F3] text-[#1F3A2D] font-semibold text-sm hover:bg-[#A8BCA1]/20 hover:text-[#FAF8F3] transition-all"
                >
                  Personalise a Gift →
                </Link>
              </div>

              {/* Right — visual preview */}
              <div className="relative hidden lg:flex items-center justify-center h-80 bg-[#FAF8F3]/5">
                {/* Floating card mockup */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-xs mx-auto rotate-2">
                  <div
                    className="w-full h-32 rounded-2xl mb-4 flex items-center justify-center"
                    style={{ background: DEMO_PRODUCTS[4]!.gradient }}
                  >
                    <span className="text-6xl">{DEMO_PRODUCTS[4]!.emoji}</span>
                  </div>
                  <div className="space-y-1">
                    <p
                      className="font-semibold text-[#1F3A2D] text-sm"
                      style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
                    >
                      {DEMO_PRODUCTS[4]!.title}
                    </p>
                    <p className="text-xs text-[#22201C]/50 italic">
                      &ldquo;Wishing you all the happiness! 🌿&rdquo;
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] bg-[#C77B58]/10 text-[#C77B58] rounded-full px-2 py-0.5 font-medium">
                        🎁 Gift wrapped
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Brand Story ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-5xl mb-6 block" role="img" aria-label="plant">🌱</span>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[#1F3A2D] mb-6"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Why Gracious Greens?
          </h2>
          <p className="text-[#22201C]/60 leading-relaxed text-lg mb-12">
            We started because we believed gifts should feel alive — not just bought, but
            chosen with care. Every plant we send has been handpicked, every note written
            by a human hand, every box packed like it matters.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {(
              [
                {
                  icon: "🪴",
                  title: "Handpicked Plants",
                  desc: "Each plant is personally selected for health, beauty, and longevity.",
                },
                {
                  icon: "💌",
                  title: "Human Touch",
                  desc: "Every message is handwritten. Because copy-paste doesn't carry feeling.",
                },
                {
                  icon: "🌍",
                  title: "Hyderabad Local",
                  desc: "We deliver same-day across the city. No warehouses, no delays.",
                },
              ] as const
            ).map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center">
                <span className="text-4xl mb-3" role="img" aria-hidden>{icon}</span>
                <h3
                  className="font-semibold text-[#1F3A2D] mb-2"
                  style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#22201C]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-[#1F3A2D]/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A8BCA1] mb-3">
            Ready to gift?
          </p>
          <h2
            className="text-3xl font-semibold text-[#1F3A2D] mb-4"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Find the perfect plant today.
          </h2>
          <p className="text-[#22201C]/50 mb-8">
            Browse our collection — miniature plants starting at ₹449.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#1F3A2D] text-[#FAF8F3] font-semibold hover:bg-[#2D5040] active:scale-[0.98] transition-all"
          >
            Explore Collection →
          </Link>
        </div>
      </section>
    </>
  );
}
