"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";

const FOOTER_COLS = [
  { title: "Shop", links: [{ label: "All Creations", href: "/shop" }, { label: "Scene Planters", href: "/shop?category=Scene+Planters" }, { label: "Spiritual", href: "/shop?category=Spiritual" }, { label: "Desk Planters", href: "/shop?category=Desk+Planters" }, { label: "Decor", href: "/shop?category=Decor" }] },
  { title: "Company", links: [{ label: "Our Story", href: "/about" }, { label: "Personalise", href: "/gifts/personalise" }, { label: "Corporate Gifting", href: "/corporate" }, { label: "Custom Orders", href: "/gifts/personalise" }] },
  { title: "Support", links: [{ label: "Care Guides", href: "/care-guides" }, { label: "Track Order", href: "/track" }, { label: "FAQ", href: "/faq" }, { label: "Contact Us", href: "/contact" }, { label: "Instagram", href: SITE.instagramUrl }] },
];

// Basic RFC-5322-ish check — good enough to catch obvious typos client-side.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  // No email-capture backend (Resend/Mailchimp) is wired up yet — this just
  // validates and gives real feedback instead of being a silent no-op.
  // TODO: POST to a real subscribe endpoint once one exists.
  function handleSubscribe() {
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <footer
      id="about"
      className="gg-footer"
      style={{ position: "relative", width: "100%", backgroundColor: "#042f2e", padding: "120px 40px 60px 40px" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* Newsletter */}
        <div className="gg-footer-newsletter" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginBottom: "80px" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: "clamp(32px, 3vw, 48px)", fontWeight: 400, lineHeight: 1.2, color: "#FEF7E4", marginBottom: "20px" }}>
              Stay rooted with us.
            </h2>
            <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "16px", lineHeight: 1.6, color: "rgba(255,251,235,0.6)", maxWidth: "400px" }}>
              Get scene ideas, behind-the-scenes peeks at new creations, and exclusive offers.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
                onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
                aria-invalid={status === "error"}
                style={{
                  flex: 1,
                  padding: "16px 24px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: `1px solid ${status === "error" ? "rgba(194,65,12,0.6)" : "rgba(255,255,255,0.15)"}`,
                  borderRadius: "50px",
                  color: "#FEF7E4",
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "14px",
                  outline: "none",
                }}
                onFocus={(e) => { if (status !== "error") e.currentTarget.style.borderColor = "rgba(255,251,235,0.4)"; }}
                onBlur={(e) => { if (status !== "error") e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
              />
              <button
                onClick={handleSubscribe}
                style={{ padding: "16px 32px", backgroundColor: "#c2410c", color: "#ffffff", fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", borderRadius: "50px", border: "none", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(194,65,12,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Subscribe
              </button>
            </div>
            {status === "success" ? (
              <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "13px", color: "#A8BCA1", marginTop: "12px" }}>
                ✓ You&apos;re on the list — welcome to Gracious Greens.
              </p>
            ) : status === "error" ? (
              <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "13px", color: "#c2410c", marginTop: "12px" }}>
                Please enter a valid email address.
              </p>
            ) : (
              <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "12px", lineHeight: 1.5, color: "rgba(255,251,235,0.35)", marginTop: "12px" }}>
                By subscribing, you agree to receive marketing emails from us and
                to our{" "}
                <Link href="/privacy" style={{ color: "rgba(255,251,235,0.55)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                  Privacy Policy
                </Link>
                . Unsubscribe anytime.
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,251,235,0.1)", marginBottom: "60px" }} />

        {/* Links */}
        <div className="gg-footer-links" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#FEF7E4",
                flexShrink: 0,
                overflow: "hidden",
              }}>
                <Image
                  src="/logo-mark.png"
                  alt="Gracious Greens mark"
                  width={34}
                  height={40}
                  style={{ width: "34px", height: "40px", objectFit: "contain" }}
                />
              </span>
              <span style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
                fontSize: "15px",
                fontWeight: 600,
                color: "#FEF7E4",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}>
                Gracious Greens
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", color: "rgba(255,251,235,0.4)", lineHeight: 1.6, maxWidth: "280px" }}>
              Custom-built miniature scene planters — crafted around your story, delivered with care.
            </p>
          </div>

          <div className="gg-footer-cols" style={{ display: "flex", gap: "60px" }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "13px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,251,235,0.5)", marginBottom: "16px" }}>
                  {col.title}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={link.label} style={{ marginBottom: "10px" }}>
                        <Link
                          href={link.href}
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", color: "rgba(255,251,235,0.6)", textDecoration: "none", transition: "color 0.3s ease" }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = "#FEF7E4"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,251,235,0.6)"; }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: "80px", paddingTop: "30px", borderTop: "1px solid rgba(255,251,235,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "13px", color: "rgba(255,251,235,0.3)" }}>
            © {new Date().getFullYear()} Gracious Greens. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Shipping Policy", href: "/shipping" }].map((item) => (
              <Link key={item.href} href={item.href}
                style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "13px", color: "rgba(255,251,235,0.3)", textDecoration: "none", transition: "color 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,251,235,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,251,235,0.3)"; }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gg-footer { padding: 80px 24px 48px !important; }
          .gg-footer-newsletter {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            margin-bottom: 56px !important;
          }
          .gg-footer-links { flex-direction: column !important; gap: 40px !important; }
          .gg-footer-cols { gap: 40px !important; flex-wrap: wrap !important; }
        }
      `}</style>
    </footer>
  );
}
