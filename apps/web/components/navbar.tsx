"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "/shop", label: "Creations" },
  { href: "/about", label: "About" },
  { href: "/gifts/personalise", label: "Personalise" },
];

export function Navbar() {
  const { itemCount, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const close = () => setMobileOpen(false);
      window.addEventListener("scroll", close, { once: true, passive: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [mobileOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background-color 0.3s ease",
        backgroundColor: scrolled ? "rgba(4, 47, 46, 0.97)" : "rgba(4, 47, 46, 0.92)",
        backdropFilter: "blur(12px)",
        boxSizing: "border-box",
      }}
    >
      <Link
        href="/"
        style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center", gap: "12px" }}
        aria-label="Gracious Greens home"
      >
        <span style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#FEF7E4",
          flexShrink: 0,
          overflow: "hidden",
        }}>
          <Image
            src="/logo-mark.png"
            alt="Gracious Greens mark"
            width={36}
            height={44}
            priority
            style={{ width: "36px", height: "44px", objectFit: "contain" }}
          />
        </span>
        <span style={{
          fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
          fontSize: "16px",
          fontWeight: 600,
          color: "#FEF7E4",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}>
          Gracious Greens
        </span>
      </Link>

      {/* Desktop */}
      <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#FEF7E4",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Gracious Greens on Instagram"
          style={{ display: "flex", alignItems: "center", color: "#FEF7E4", opacity: 0.85, transition: "opacity 0.3s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.85"; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <button
          onClick={open}
          aria-label={`Cart (${itemCount} items)`}
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "13px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "#FEF7E4",
            background: "none",
            cursor: "pointer",
            padding: "8px 20px",
            border: "1px solid rgba(255,251,235,0.3)",
            borderRadius: "50px",
            transition: "border-color 0.3s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,251,235,0.7)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,251,235,0.3)"; }}
        >
          Cart ({itemCount > 9 ? "9+" : itemCount})
        </button>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="nav-mobile-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none", flexDirection: "column", gap: "5px" }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{
            display: "block", width: "22px", height: "1.5px", backgroundColor: "#FEF7E4", borderRadius: "1px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: mobileOpen && i === 0 ? "translateY(6.5px) rotate(45deg)" : mobileOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)" : "none",
            opacity: mobileOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {mobileOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, width: "100%", backgroundColor: "rgba(4,47,46,0.97)", backdropFilter: "blur(12px)", padding: "24px 40px 32px", display: "flex", flexDirection: "column", gap: "20px", borderTop: "1px solid rgba(255,251,235,0.08)" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#FEF7E4", textDecoration: "none", opacity: 0.85 }}>
              {link.label}
            </Link>
          ))}
          <button onClick={() => { setMobileOpen(false); open(); }}
            style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#FEF7E4", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, opacity: 0.85 }}>
            Cart ({itemCount})
          </button>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#FEF7E4", textDecoration: "none", opacity: 0.85 }}
          >
            Instagram
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
