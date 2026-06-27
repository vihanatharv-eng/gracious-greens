import type { Metadata } from "next";
import { whatsappLink } from "@/lib/site";

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
          Tell Parul what you have in mind — the occasion, the people, the
          little details — and she&apos;ll come back with ideas and a quote.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={whatsappLink(
              "Hi Parul! I'd like to personalise a Gracious Greens scene. Here's what I have in mind: "
            )}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.937zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Message Parul on WhatsApp
          </a>
        </div>
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
