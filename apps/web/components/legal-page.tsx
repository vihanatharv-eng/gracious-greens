"use client";

import type { ReactNode } from "react";

/**
 * Shared shell for legal/trust pages (Privacy, Terms, Shipping & Refunds,
 * Contact). Keeps a consistent, document-readable layout distinct from the
 * marketing pages — narrower measure, plain section headings, no large
 * hero treatment.
 */

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "#FEF7E4", minHeight: "100vh" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "140px 24px 120px" }}>
        <span
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "11px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#c2410c",
            display: "block",
            marginBottom: "16px",
          }}
        >
          {eyebrow}
        </span>

        <h1
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(34px, 4vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            color: "#042f2e",
            margin: "0 0 12px",
          }}
        >
          {title}
        </h1>

        {updated && (
          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "13px",
              color: "rgba(4,47,46,0.45)",
              margin: "0 0 48px",
            }}
          >
            Last updated: {updated}
          </p>
        )}

        <div className="legal-body">{children}</div>
      </div>

      <style>{`
        .legal-body h2 {
          font-family: var(--font-playfair, 'Playfair Display', Georgia, serif);
          font-size: 22px;
          font-weight: 400;
          color: #042f2e;
          margin: 40px 0 14px;
          letter-spacing: -0.3px;
        }
        .legal-body h2:first-child { margin-top: 0; }
        .legal-body p {
          font-family: var(--font-geist-sans, 'Inter', sans-serif);
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(4,47,46,0.7);
          margin: 0 0 16px;
        }
        .legal-body ul {
          font-family: var(--font-geist-sans, 'Inter', sans-serif);
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(4,47,46,0.7);
          margin: 0 0 16px;
          padding-left: 22px;
        }
        .legal-body li { margin-bottom: 8px; }
        .legal-body a { color: #c2410c; text-decoration: underline; text-underline-offset: 2px; }
        .legal-body strong { color: #042f2e; font-weight: 600; }
      `}</style>
    </div>
  );
}
