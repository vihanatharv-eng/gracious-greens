"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FEF7E4",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        overflow: "hidden",
      }}
      className="hero-section"
    >
      {/* ── Left: brand copy ─────────────────────────────────────────────── */}
      <div
        className="hero-text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 40px 80px 56px",
        }}
      >
        {/* Eyebrow label */}
        <span
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "11px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#c2410c",
            marginBottom: "20px",
            display: "block",
          }}
        >
          Handcrafted in Palwal
        </span>

        <h1
          style={{
            fontFamily:
              "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(38px, 4vw, 72px)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-2px",
            color: "#042f2e",
            marginBottom: "28px",
          }}
        >
          Your story,
          <br />
          told in miniature.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(4,47,46,0.62)",
            marginBottom: "44px",
            maxWidth: "380px",
          }}
        >
          Custom-built miniature scene planters — figurines, props, and
          botanicals arranged to tell your story. Made to order, made to last.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
          <Link
            href="/shop"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              backgroundColor: "#c2410c",
              color: "#ffffff",
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              borderRadius: "50px",
              textDecoration: "none",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(194,65,12,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Design Your Scene
          </Link>

          <Link
            href="/shop"
            style={{
              display: "inline-block",
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: "#042f2e",
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              borderRadius: "50px",
              textDecoration: "none",
              border: "1px solid rgba(4,47,46,0.2)",
              transition: "border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(4,47,46,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(4,47,46,0.2)";
            }}
          >
            See Collections
          </Link>
        </div>
      </div>

      {/* ── Right: product image ──────────────────────────────────────────── */}
      <div
        className="hero-image-wrap"
        style={{
          position: "relative",
          height: "100vh",
        }}
      >
        <Image
          src="/hero-product.jpg"
          alt="A Day at the Park — custom miniature scene planter"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
            padding: "60px 48px 60px 0",
          }}
        />
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto;
            min-height: auto !important;
          }
          .hero-text {
            padding: 120px 24px 32px !important;
          }
          .hero-image-wrap {
            height: 72vw !important;
            min-height: 280px;
            padding: 0 24px 48px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-text {
            padding: 120px 24px 80px 36px !important;
          }
          .hero-image-wrap {
            padding: 80px 32px 80px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
