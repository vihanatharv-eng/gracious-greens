import Link from "next/link";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/testimonials";

// Honest social proof — renders nothing until real customer quotes exist in
// lib/testimonials.ts. Server component: no client JS needed.
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section
      aria-label="Customer testimonials"
      style={{ backgroundColor: "#FEF7E4", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#c2410c",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          From Our Customers
        </span>
        <h2
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(30px, 3.5vw, 44px)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-1px",
            color: "#042f2e",
            textAlign: "center",
            margin: "0 0 56px",
          }}
        >
          Loved, and lived with.
        </h2>

        <div className="gg-testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <figure
              key={`${t.name}-${t.quote.slice(0, 24)}`}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(4,47,46,0.06)",
                padding: "28px",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {t.photo && (
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 3",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={t.photo}
                    alt={`${t.name}'s Gracious Greens piece at home`}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <blockquote
                style={{
                  fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                  fontSize: "17px",
                  lineHeight: 1.6,
                  color: "#042f2e",
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "13px",
                  color: "rgba(4,47,46,0.55)",
                  marginTop: "auto",
                }}
              >
                <strong style={{ color: "rgba(4,47,46,0.8)", fontWeight: 600 }}>{t.name}</strong>
                {" · "}
                {t.context}
                {t.productSlug && (
                  <>
                    {" · "}
                    <Link
                      href={`/shop/${t.productSlug}`}
                      style={{ color: "#c2410c", textDecoration: "none" }}
                    >
                      See the piece →
                    </Link>
                  </>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .gg-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 860px) {
          .gg-testimonials-grid { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
