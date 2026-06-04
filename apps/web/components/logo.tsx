"use client";

/**
 * Gracious Greens — Brand Logo
 *
 * Two exports:
 *   <GGMark />      — leaf icon only (favicon, small contexts)
 *   <Logo />        — leaf + wordmark (navbar, footer, og-image)
 *
 * variant="light"  → cream  #FEF7E4  (use on dark backgrounds: hero, nav, footer)
 * variant="dark"   → teal   #042f2e  (use on light backgrounds: shop, philosophy)
 */

interface LogoProps {
  variant?: "light" | "dark";
  /** Height of the leaf mark in px. Wordmark scales proportionally. */
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

// ─── Leaf mark ───────────────────────────────────────────────────────────────
// A single botanical leaf: organic bezier curves, slightly asymmetric for
// naturalness, sharp apex, center vein, hairline stem. viewBox 20 × 32.
export function GGMark({
  variant = "light",
  size = 28,
}: Pick<LogoProps, "variant" | "size">) {
  const fill = variant === "light" ? "#FEF7E4" : "#042f2e";
  // Vein contrasts against the fill
  const vein =
    variant === "light"
      ? "rgba(4, 47, 46, 0.22)"
      : "rgba(255, 251, 235, 0.28)";

  // Scale width proportionally to the 20×32 viewBox
  const w = Math.round((size * 20) / 32);

  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 20 32"
      fill="none"
      aria-label="Gracious Greens leaf mark"
      role="img"
    >
      {/*
        Leaf body — right side is fuller (max x ≈ 17.5) for a natural
        asymmetry; left side has a gentle concave dip around mid-height
        evoking a monstera split without being literal.
      */}
      <path
        d="M10 1
           C 13.5 3.5, 17.5 9, 17.5 15
           C 17.5 20.5, 14.5 25, 10 27
           C 6.5 25.5, 3 22, 2.5 17
           C 1.8 12.5, 3.5 7, 6 4
           C 7.5 2.2, 8.8 1, 10 1 Z"
        fill={fill}
      />

      {/*
        Subtle left-side indentation — the "notch" that reads as botanical
        character at larger sizes but disappears at small sizes.
      */}
      <path
        d="M2.5 17 C 1.2 15, 1 11.5, 3 9"
        stroke={vein}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Center vein */}
      <line
        x1="10"
        y1="5"
        x2="10"
        y2="25"
        stroke={vein}
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      {/* Two small lateral vein branches — left and right */}
      <path
        d="M10 12 C 8 11.5, 6 12, 5 13"
        stroke={vein}
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 12 C 12 11.5, 14 12, 15 13"
        stroke={vein}
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 17 C 8 16.5, 6.5 17, 5.5 18.5"
        stroke={vein}
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 17 C 12 16.5, 13.5 17, 14.5 18.5"
        stroke={vein}
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Stem */}
      <line
        x1="10"
        y1="27"
        x2="10"
        y2="31"
        stroke={fill}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Full logo lockup ─────────────────────────────────────────────────────────
export function Logo({
  variant = "light",
  size = 28,
  showWordmark = true,
}: LogoProps) {
  const color = variant === "light" ? "#FEF7E4" : "#042f2e";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${Math.round(size * 0.45)}px`,
        textDecoration: "none",
        userSelect: "none",
      }}
    >
      <GGMark variant={variant} size={size} />

      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: `${Math.round(size * 0.6)}px`,
            fontWeight: 600,
            color,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          Gracious Greens
        </span>
      )}
    </span>
  );
}
