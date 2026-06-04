"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Three.js canvas — SSR disabled (WebGL needs the browser)
const HeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false });

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const canvas = sectionRef.current.querySelector("canvas");
      if (canvas) {
        canvas.style.transform = `translateY(${scrollY * 0.3}px)`;
        canvas.style.opacity = String(Math.max(0, 1 - scrollY / 800));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#042f2e",
        overflow: "hidden",
      }}
    >
      {/* Three.js canvas */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <HeroCanvas />
      </div>

      {/* Left-side vignette so text is always readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(4,47,46,0.92) 0%, rgba(4,47,46,0.55) 45%, transparent 72%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40%",
          background: "linear-gradient(to top, #042f2e, transparent)",
          zIndex: 11,
          pointerEvents: "none",
        }}
      />

      {/* Copy — left column, vertically centred */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          padding: "0 40px 0 56px",
          maxWidth: "560px",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(40px, 5vw, 80px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-1.6px",
            color: "#fffbeb",
            marginBottom: "24px",
          }}
        >
          Nature&apos;s finest, scaled to perfection.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(255,251,235,0.7)",
            marginBottom: "32px",
            maxWidth: "460px",
          }}
        >
          Handcrafted miniature botanical gifts for the discerning plant lover.
        </p>
        <Link
          href="/shop"
          style={{
            pointerEvents: "auto",
            display: "inline-block",
            padding: "16px 40px",
            backgroundColor: "#c2410c",
            color: "#ffffff",
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            borderRadius: "50px",
            textDecoration: "none",
            alignSelf: "flex-start",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(194,65,12,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Shop Collection
        </Link>
      </div>
    </section>
  );
}
