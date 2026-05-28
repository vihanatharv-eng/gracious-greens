import Link from "next/link";

// ─── Gracious Greens — Coming Soon / Launch Page ──────────────────────────────
// Replace with full homepage (hero + products + sections) in Phase 1

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF8F3] px-6">
      {/* Background texture — subtle radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #A8BCA133 0%, transparent 70%)",
        }}
      />

      {/* Logo / Brand mark */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Leaf icon */}
        <span className="text-5xl mb-8 select-none" role="img" aria-label="leaf">
          🌿
        </span>

        {/* Brand name */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-serif text-[#1F3A2D] mb-4 tracking-tight leading-none"
          style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
        >
          Gracious Greens
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-[#22201C]/60 font-light tracking-wide mb-2">
          Gift a little life.
        </p>
        <p className="text-base text-[#22201C]/40 max-w-md mb-12">
          Miniature plants, personalised for every occasion. For the people you care about,
          and the moments worth celebrating.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] text-sm font-medium tracking-wide hover:bg-[#2D5040] transition-all duration-200 hover:shadow-lg hover:shadow-[#1F3A2D]/20 hover:-translate-y-0.5"
          >
            Explore Collection
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="/gifts/personalise"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#1F3A2D] text-[#1F3A2D] text-sm font-medium tracking-wide hover:bg-[#1F3A2D]/5 transition-all duration-200"
          >
            Personalise a Gift
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-[#22201C]/40 uppercase tracking-widest">
          <span>🪴 Handpicked plants</span>
          <span>✍️ Custom messages</span>
          <span>📦 Gift-ready packaging</span>
          <span>🚚 Pan-India delivery</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 flex justify-center gap-6 text-xs text-[#22201C]/30">
        <Link href="/about" className="hover:text-[#1F3A2D] transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#1F3A2D] transition-colors">
          Contact
        </Link>
        <a
          href="https://instagram.com/graciousgreens"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1F3A2D] transition-colors"
        >
          Instagram
        </a>
      </footer>
    </main>
  );
}
