"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/cart-context";

const NAV_LINKS = [
  { href: "/shop", label: "Collections" },
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
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease",
        backgroundColor: scrolled || mobileOpen ? "rgba(4, 47, 46, 0.92)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
        boxSizing: "border-box",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
          fontSize: "18px",
          fontWeight: 600,
          color: "#fffbeb",
          letterSpacing: "1px",
          textTransform: "uppercase",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        Gracious Greens
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
              color: "#fffbeb",
              textDecoration: "none",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={open}
          aria-label={`Cart (${itemCount} items)`}
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "13px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "#fffbeb",
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
            display: "block", width: "22px", height: "1.5px", backgroundColor: "#fffbeb", borderRadius: "1px",
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
              style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#fffbeb", textDecoration: "none", opacity: 0.85 }}>
              {link.label}
            </Link>
          ))}
          <button onClick={() => { setMobileOpen(false); open(); }}
            style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#fffbeb", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, opacity: 0.85 }}>
            Cart ({itemCount})
          </button>
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
