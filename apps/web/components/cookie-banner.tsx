"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "gg_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if the visitor hasn't already made a choice.
    if (typeof window === "undefined") return;
    const choice = window.localStorage.getItem(STORAGE_KEY);
    if (!choice) setVisible(true);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    // We still set a flag so we don't keep nagging — declining just means
    // we won't show this banner again. Essential cookies (cart) still work
    // since they're required for the site to function.
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      style={{
        position: "fixed",
        left: "16px",
        right: "16px",
        bottom: "16px",
        zIndex: 100,
        maxWidth: "640px",
        margin: "0 auto",
        backgroundColor: "#042f2e",
        borderRadius: "16px",
        padding: "20px 24px",
        boxShadow: "0 12px 40px rgba(4,47,46,0.35)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <p
        style={{
          flex: "1 1 280px",
          margin: 0,
          fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
          fontSize: "13.5px",
          lineHeight: 1.6,
          color: "rgba(254,247,228,0.85)",
        }}
      >
        We use cookies to keep your cart working and to understand how
        visitors use our site. See our{" "}
        <Link href="/privacy" style={{ color: "#FEF7E4", textDecoration: "underline", textUnderlineOffset: "2px" }}>
          Privacy Policy
        </Link>
        .
      </p>

      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: "10px 18px",
            backgroundColor: "transparent",
            color: "rgba(254,247,228,0.7)",
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "12.5px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderRadius: "50px",
            border: "1px solid rgba(254,247,228,0.25)",
            cursor: "pointer",
            transition: "border-color 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(254,247,228,0.5)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(254,247,228,0.25)"; }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: "10px 22px",
            backgroundColor: "#c2410c",
            color: "#ffffff",
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "12.5px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
