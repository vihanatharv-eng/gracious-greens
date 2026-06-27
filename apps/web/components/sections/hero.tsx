"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Hero — editorial evolution
 *
 * Layering strategy (back → front), all decorative layers are aria-hidden
 * and pointer-events:none so they never interfere with content or AT:
 *   0. Paper-grain texture        — feTurbulence, ~4% — premium tactility
 *   1. Oversized botanical line-art — ~6% — fills the empty centre, bridges
 *      the text and the product (the single biggest "fuller" win)
 *   2. Soft radial spotlight        — lifts the planter without an obvious glow
 *   3. Contact shadow ellipse       — grounds the planter so it "floats"
 *   ── content grid (text | product) ──
 *
 * Motion is built-in but DISABLED by default. To enable later, add the
 * `hero--motion` class to the <section>; animations still respect
 * prefers-reduced-motion.
 */

const TRUST = ["Made to Order", "Living Plants", "Handcrafted in India", "Personalised Gifts"];

export function Hero() {
  return (
    <section className="hero-section">
      {/* ── Layer 0: paper grain (tiled data-URI — rasterised once, cheap) ── */}
      <div className="hero-grain" aria-hidden="true" />

      {/* ── Layer 1: soft spotlight behind the product ───────────────────── */}
      <div className="hero-spotlight" aria-hidden="true" />

      {/* ── Left: brand copy ─────────────────────────────────────────────── */}
      <div className="hero-text">
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-rule" aria-hidden="true" />
          Handcrafted in Palwal
        </span>

        <h1 className="hero-title">
          Your story,
          <br />
          told in miniature.
        </h1>

        <p className="hero-lede">
          Custom-built miniature scene planters — figurines, props, and
          botanicals arranged to tell your story. Made to order, made to last.
        </p>

        <div className="hero-cta-row">
          <Link href="/gifts/personalise" className="hero-btn hero-btn--primary">
            Design Your Scene
          </Link>
          <Link href="/shop" className="hero-btn hero-btn--ghost">
            See Creations
          </Link>
        </div>

        {/* Trust / storytelling row */}
        <ul className="hero-trust" aria-label="What makes Gracious Greens special">
          {TRUST.map((item) => (
            <li key={item} className="hero-trust-item">
              <svg className="hero-trust-check" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 6.2L4.7 8.4L9.5 3.4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Right: product image ──────────────────────────────────────────── */}
      <div className="hero-image-wrap hero-float">
        <div className="hero-product-shadow" aria-hidden="true" />
        <Image
          src="/hero-product.jpg"
          alt="The Couple's Nook — a custom Gracious Greens miniature scene planter in a boat-shaped ceramic bowl, with live plants, figurines, and a tiny arch"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="hero-product-img"
        />
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #FEF7E4;
          display: grid;
          grid-template-columns: 1.02fr 1.18fr;
          align-items: center;
          overflow: hidden;
        }

        /* ── Decorative background layers ── */
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.045;
          pointer-events: none;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 140px 140px;
        }
        .hero-spotlight {
          position: absolute;
          top: 50%;
          right: 0;
          width: 60%;
          height: 90%;
          transform: translateY(-50%);
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 58% 54% at 52% 48%,
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 255, 255, 0) 70%);
        }

        /* ── Left text ── */
        .hero-text {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 32px 80px 64px;
          max-width: 620px;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-geist-sans, 'Inter', sans-serif);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #c2410c;
          margin-bottom: 22px;
        }
        .hero-eyebrow-rule {
          width: 28px;
          height: 1px;
          background-color: #c2410c;
          opacity: 0.5;
          flex-shrink: 0;
        }
        .hero-title {
          font-family: var(--font-playfair, 'Playfair Display', Georgia, serif);
          font-size: clamp(44px, 5vw, 84px);
          font-weight: 400;
          line-height: 1.04;
          letter-spacing: -2.4px;
          color: #042f2e;
          margin: 0 0 28px;
        }
        .hero-lede {
          font-family: var(--font-geist-sans, 'Inter', sans-serif);
          font-size: 16.5px;
          line-height: 1.72;
          color: rgba(4, 47, 46, 0.68);
          margin: 0 0 40px;
          max-width: 430px;
        }

        /* ── Buttons ── */
        .hero-cta-row { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
        .hero-btn {
          display: inline-block;
          font-family: var(--font-geist-sans, 'Inter', sans-serif);
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-radius: 50px;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        }
        .hero-btn--primary {
          padding: 16px 40px;
          background-color: #c2410c;
          color: #ffffff;
        }
        .hero-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(194, 65, 12, 0.28);
        }
        .hero-btn--ghost {
          padding: 16px 32px;
          background-color: transparent;
          color: #042f2e;
          border: 1px solid rgba(4, 47, 46, 0.2);
        }
        .hero-btn--ghost:hover { border-color: rgba(4, 47, 46, 0.5); }

        /* ── Trust row ── */
        .hero-trust {
          list-style: none;
          margin: 36px 0 0;
          padding: 28px 0 0;
          border-top: 1px solid rgba(4, 47, 46, 0.1);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 26px;
        }
        .hero-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-geist-sans, 'Inter', sans-serif);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: rgba(4, 47, 46, 0.6);
          white-space: nowrap;
        }
        .hero-trust-check { width: 12px; height: 12px; color: #5b7a52; flex-shrink: 0; }

        /* ── Product ── */
        .hero-image-wrap {
          position: relative;
          z-index: 1;
          height: 100vh;
        }
        .hero-product-img {
          object-fit: contain;
          object-position: center center;
          padding: 48px 40px 48px 8px;
          /* Feather the photo's rectangular edges into the cream so there's no
             visible seam. GPU-cheap (mask only) — no backdrop compositing. */
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 62%, transparent 94%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 62%, transparent 94%);
        }
        .hero-product-shadow {
          position: absolute;
          left: 50%;
          bottom: 13%;
          width: 34%;
          height: 3.5%;
          transform: translateX(-50%);
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(ellipse at center,
            rgba(4, 47, 46, 0.14) 0%, rgba(4, 47, 46, 0) 72%);
          filter: blur(5px);
        }

        /* ── Motion (opt-in: add 'hero--motion' to .hero-section) ── */
        @media (prefers-reduced-motion: no-preference) {
          .hero--motion .hero-float { animation: heroFloat 7s ease-in-out infinite; }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        /* ── Tablet ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-section { grid-template-columns: 1fr 1.08fr; }
          .hero-text { padding: 120px 20px 80px 40px; }
          .hero-product-img { padding: 72px 28px 72px 0; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            min-height: auto;
          }
          .hero-text {
            padding: 116px 24px 28px;
            max-width: none;
            order: 1;
          }
          .hero-title { letter-spacing: -1.4px; }
          .hero-lede { max-width: none; }
          .hero-image-wrap { height: 78vw; min-height: 300px; order: 2; }
          .hero-product-img {
            object-position: center;
            padding: 0 24px 36px;
          }
          .hero-product-shadow { left: 50%; bottom: 18%; width: 50%; }
          .hero-spotlight { width: 100%; top: 70%; height: 50%; }
          .hero-trust { gap: 6px 4px; }
          .hero-trust-item { font-size: 10px; letter-spacing: 1px; }
        }
      `}</style>
    </section>
  );
}
