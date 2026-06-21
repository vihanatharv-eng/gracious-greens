import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Gracious Greens is a Palwal-based studio handcrafting custom miniature scene planters — tiny worlds built around your story, by Parul Jain.",
};

const VALUES = [
  {
    title: "Storytelling, not decoration",
    body: "Every scene we build carries meaning. We don't arrange props to look pretty — we arrange them to say something.",
  },
  {
    title: "Handcrafted, one at a time",
    body: "Each planter is assembled by hand, figurine by figurine. No two are ever exactly alike, because no two stories are.",
  },
  {
    title: "Made to last, not to wilt",
    body: "Unlike flowers, our creations don't fade in a week. They sit on shelves for years — little keepsakes that keep giving.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#FEF7E4" }}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
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
            Handcrafted in Palwal
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
            Tiny worlds, built around your story.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(4,47,46,0.66)",
            }}
          >
            Gracious Greens is a small studio in Palwal, Haryana, making custom
            miniature scene planters — ceramic bowls filled with live plants,
            pebbles, moss, and hand-placed figurines that come together to tell
            a story worth keeping.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 40px 100px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="about-story-grid"
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#a8bca1",
            }}
          >
            <Image
              src="/images/catalogue/family-picnic.png"
              alt="A custom miniature scene planter by Gracious Greens"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <h2
              style={{
                fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.8px",
                color: "#042f2e",
                marginBottom: "20px",
              }}
            >
              It started with a feeling, not a product.
            </h2>
            <div
              style={{
                fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "rgba(4,47,46,0.66)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                Gracious Greens began with a simple idea: that the most
                meaningful gifts aren&apos;t bought off a shelf — they&apos;re
                built around the person receiving them.
              </p>
              <p>
                Founder Parul Jain started arranging tiny figures, plants, and
                props into little ceramic scenes — a family at a picnic, a couple
                under the leaves, a quiet Buddha in a moment of calm. Each one
                made to order, each one telling someone&apos;s story.
              </p>
              <p>
                Today, from a studio in Palwal serving Delhi NCR and beyond, we
                build these miniature worlds for birthdays, anniversaries,
                housewarmings, and corporate gifting — one handcrafted scene at a
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#042f2e", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-1px",
              color: "#FEF7E4",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            What we believe
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
            className="about-values-grid"
          >
            {VALUES.map((v) => (
              <div key={v.title}>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#c2410c",
                    marginBottom: "24px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "#FEF7E4",
                    marginBottom: "12px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "rgba(255,251,235,0.6)",
                  }}
                >
                  {v.body}
                </p>
              </div>
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
            marginBottom: "28px",
          }}
        >
          Ready to tell your story?
        </h2>
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
            Browse the Collection
          </Link>
          <Link
            href="/gifts/personalise"
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
            }}
          >
            Design a Custom Scene
          </Link>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
