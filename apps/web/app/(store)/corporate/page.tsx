import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Gifting",
  description:
    "Memorable, handcrafted corporate gifts — personalised miniature scene planters for clients, teams, and events, at any volume.",
};

const REASONS = [
  {
    title: "Gifts that get kept",
    body: "A branded mug ends up in a drawer. A living, handcrafted scene stays on the desk — keeping your brand in view long after the gift is given.",
  },
  {
    title: "Personal, even at scale",
    body: "Add a recipient's name on a card, your colours, or a tiny signboard with your message. Bulk doesn't have to mean impersonal.",
  },
  {
    title: "Planned around your event",
    body: "Whether it's ten pieces for a leadership team or a few hundred for a client list, we build production timelines around your deadline.",
  },
];

export default function CorporatePage() {
  return (
    <div style={{ backgroundColor: "#FEF7E4" }}>
      {/* Hero */}
      <section style={{ padding: "140px 24px 70px", textAlign: "center" }}>
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
            Corporate &amp; Bulk Gifting
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-1.6px",
              color: "#042f2e",
              margin: "20px 0 24px",
            }}
          >
            Gifts your clients won&apos;t forget.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(4,47,46,0.66)",
            }}
          >
            Handcrafted miniature scene planters for clients, teams, and events —
            personalised to carry your brand and built to be kept, not stashed in
            a drawer.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section style={{ padding: "0 24px 90px" }}>
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="corporate-grid"
        >
          {REASONS.map((r) => (
            <div
              key={r.title}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "32px 28px",
                border: "1px solid rgba(4,47,46,0.06)",
              }}
            >
              <div style={{ width: "40px", height: "2px", backgroundColor: "#c2410c", marginBottom: "22px" }} />
              <h3
                style={{
                  fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                  fontSize: "21px",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: "#042f2e",
                  marginBottom: "12px",
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(4,47,46,0.6)",
                }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works strip */}
      <section style={{ backgroundColor: "#042f2e", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#FEF7E4",
              marginBottom: "20px",
            }}
          >
            Tell us what you need
          </h2>
          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(255,251,235,0.7)",
              marginBottom: "36px",
            }}
          >
            Share your occasion, quantity, timeline, and any branding you&apos;d
            like included. We&apos;ll come back with concepts, pricing, and a
            delivery plan that fits your event.
          </p>
          <a
            href="mailto:hello@graciousgreens.in?subject=Corporate%20Gifting%20Enquiry"
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
            Start a Corporate Enquiry
          </a>
        </div>
      </section>

      {/* Secondary CTA */}
      <section style={{ padding: "70px 24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "15px",
            color: "rgba(4,47,46,0.6)",
            marginBottom: "16px",
          }}
        >
          Want to see what we make first?
        </p>
        <Link
          href="/shop"
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "13px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "#042f2e",
            textDecoration: "none",
            borderBottom: "1px solid rgba(4,47,46,0.3)",
            paddingBottom: "4px",
          }}
        >
          Browse the Collection
        </Link>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .corporate-grid { grid-template-columns: 1fr !important; max-width: 460px; }
        }
      `}</style>
    </div>
  );
}
