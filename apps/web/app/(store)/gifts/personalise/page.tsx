import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personalise a Scene",
  description:
    "Tell us your story and we'll build it in miniature — a fully custom scene planter made to order, by Gracious Greens.",
};

const STEPS = [
  {
    n: "01",
    title: "Tell us your story",
    body: "Share the occasion, the people, the little details — a family of four, a couple's first home, a colleague's farewell. The more you tell us, the more personal it becomes.",
  },
  {
    n: "02",
    title: "We design the scene",
    body: "We pick the bowl, the plant, and the figurines that bring your story to life, and share a plan with you before we begin.",
  },
  {
    n: "03",
    title: "Crafted by hand",
    body: "Your scene is assembled one piece at a time in our Palwal studio — moss, pebbles, props, and a live plant, arranged with care.",
  },
  {
    n: "04",
    title: "Delivered with a note",
    body: "It arrives gift-ready, with an optional handwritten message on a premium card. Across Palwal and Delhi NCR.",
  },
];

const OCCASIONS = [
  "Birthdays",
  "Anniversaries",
  "Housewarmings",
  "Corporate gifting",
  "Farewells",
  "Just because",
];

export default function PersonalisePage() {
  return (
    <div style={{ backgroundColor: "#FEF7E4" }}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{ padding: "140px 40px 80px", textAlign: "center" }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#c2410c",
            }}
          >
            Made to order
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-1.6px",
              color: "#042f2e",
              margin: "20px 0 24px",
            }}
          >
            Design a scene that&apos;s entirely theirs.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(4,47,46,0.66)",
            }}
          >
            Every Gracious Greens planter can be fully customised — the people,
            the props, the theme, the message. Tell us the story you want to
            tell, and we&apos;ll build it in miniature.
          </p>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section style={{ padding: "0 40px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "28px",
            }}
            className="personalise-steps-grid"
          >
            {STEPS.map((s) => (
              <div
                key={s.n}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  border: "1px solid rgba(4,47,46,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "#a8bca1",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {s.n}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "#042f2e",
                    marginBottom: "12px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(4,47,46,0.6)",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Occasions ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#042f2e", padding: "90px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#FEF7E4",
              marginBottom: "40px",
            }}
          >
            Made for every kind of moment
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {OCCASIONS.map((o) => (
              <span
                key={o}
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "14px",
                  color: "rgba(255,251,235,0.85)",
                  border: "1px solid rgba(255,251,235,0.25)",
                  borderRadius: "50px",
                  padding: "10px 22px",
                }}
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-1px",
            color: "#042f2e",
            marginBottom: "16px",
          }}
        >
          Let&apos;s build it together.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(4,47,46,0.6)",
            maxWidth: "480px",
            margin: "0 auto 36px",
          }}
        >
          Start from one of our designs and customise it, or reach out and
          we&apos;ll create something entirely new for you.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
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
            }}
          >
            Start From a Design
          </Link>
        </div>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "13px",
            color: "rgba(4,47,46,0.45)",
            marginTop: "20px",
          }}
        >
          Prefer to talk it through? Add a note at checkout, or message us on
          WhatsApp.
        </p>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .personalise-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .personalise-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
