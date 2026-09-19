import type { Metadata } from "next";
import Link from "next/link";
import { safeJsonLd } from "@/lib/json-ld";
import { DEMO_PRODUCTS } from "@/lib/demo-products";
import { ProductCard } from "@/components/product-card";
import { whatsappLink } from "@/lib/site";

const BASE = process.env["NEXT_PUBLIC_APP_URL"] ?? "https://graciousgreens.in";

export const metadata: Metadata = {
  title: "Diwali Plant Gifts & Corporate Hampers",
  description:
    "Eco-friendly Diwali gifts that outlast the festival — handcrafted miniature plant lanterns, Ganesha planters, and corporate Diwali gifting in bulk. Made to order in Palwal, shipped across India.",
  alternates: { canonical: `${BASE}/gifts/diwali` },
};

// Curated by price band rather than by catalogue category: at Diwali people
// shop to a budget per recipient (staff gift, return gift, client gift)
// before they shop by theme.
const BANDS = [
  {
    id: "lights",
    eyebrow: "Under ₹500",
    title: "Lanterns & little lights",
    body: "The festival of lights, in miniature. Solar-powered pieces that need no plant care at all — the easiest thing to gift in volume, and the easiest to receive.",
    slugs: [
      "garden-lantern-classic",
      "garden-lantern-mini",
      "mushroom-meadow-lights",
      "butterfly-garden-lights",
      "squirrels-glow",
      "four-blessings",
    ],
  },
  {
    id: "blessings",
    eyebrow: "₹849 – ₹999",
    title: "Blessings for the new year",
    body: "Ganesha, the monks, and the Diwali pair — living planters for the people you'd normally hand a box of mithai.",
    slugs: [
      "diwali-duo",
      "ganeshas-grace",
      "three-wise-monks",
      "little-monks-garden",
      "buddhas-retreat",
      "little-buddha",
    ],
  },
  {
    id: "premium",
    eyebrow: "₹1,699 and above",
    title: "For clients & the people who matter most",
    body: "The pieces that land like a real gesture — substantial, handcrafted, and nothing like the standard corporate hamper.",
    slugs: [
      "gratitude-garden",
      "royal-elephant-pair",
      "golden-antler-pair",
      "serenity-grove",
    ],
  },
];

const FAQS = [
  {
    q: "When should I order for Diwali 2026?",
    a: "Diwali falls on 8 November 2026. Every scene is assembled by hand over 2–4 working days, plus 1–7 days in transit, so we'd ask for orders by roughly 25 October. For bulk and corporate orders, please talk to us at least three weeks ahead — the earlier you tell us the quantity, the more we can hold for you.",
  },
  {
    q: "Do you do bulk or corporate Diwali gifting?",
    a: "Yes — employee gifts, client gifts, and event giveaways are a large part of what we do at Diwali. We can work to a per-head budget, keep the pieces consistent across a batch, and include a handwritten or branded note card with each one.",
  },
  {
    q: "Can these be personalised?",
    a: "Every scene can be customised — the figurines, the props, the theme, and the message on the card. For corporate orders we can match the pieces to a company colour or include your branding on the card.",
  },
  {
    q: "Will a live plant survive being shipped?",
    a: "Yes. We build around hardy, forgiving plants — money plant, ZZ, snake plant, jade — chosen precisely because they travel well and need very little care. Each order is packed fragile-safe and arrives with a care card.",
  },
  {
    q: "Why give a plant instead of sweets or dry fruit?",
    a: "Mithai is finished in a week and dry fruit boxes get passed along. A miniature planter sits on a desk or a shelf and keeps being seen — which, if you're gifting to staff or clients, is the entire point.",
  },
];

export default function DiwaliGiftsPage() {
  const bands = BANDS.map((band) => ({
    ...band,
    products: band.slugs
      .map((slug) => DEMO_PRODUCTS.find((p) => p.slug === slug))
      .filter((p): p is NonNullable<typeof p> => Boolean(p)),
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Diwali Gifts", item: `${BASE}/gifts/diwali` },
    ],
  };

  return (
    <div style={{ backgroundColor: "#FEF7E4" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "140px 40px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
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
            Diwali · 8 November 2026
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-1.6px",
              color: "#042f2e",
              margin: "20px 0 24px",
            }}
          >
            Diwali gifts that are still alive in December.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(4,47,46,0.66)",
            }}
          >
            Handcrafted miniature plant gifts for Diwali — lanterns and little
            lights, Ganesha planters, and corporate gifting in bulk. Made to
            order in our Palwal studio and shipped across India.
          </p>
        </div>
      </section>

      {/* ── Curated bands ────────────────────────────────────────────────── */}
      {bands.map((band, i) => (
        <section
          key={band.id}
          style={{
            padding: i === 0 ? "0 40px 88px" : "0 40px 88px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px", marginBottom: "32px" }}>
              <span
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#c2410c",
                }}
              >
                {band.eyebrow}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-0.8px",
                  color: "#042f2e",
                  margin: "12px 0 14px",
                }}
              >
                {band.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "rgba(4,47,46,0.62)",
                }}
              >
                {band.body}
              </p>
            </div>

            <div className="diwali-grid">
              {band.products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Corporate ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#042f2e", padding: "90px 40px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#FEF7E4",
              marginBottom: "18px",
            }}
          >
            Corporate Diwali gifting
          </h2>
          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(255,251,235,0.72)",
              marginBottom: "32px",
            }}
          >
            Gifting a team, a client list, or an event? We build to a per-head
            budget, keep every piece consistent across the batch, and include a
            note card with your message on each one. Tell us the headcount and
            the budget and we&apos;ll come back with options.
          </p>
          <Link
            href="/corporate"
            style={{
              display: "inline-block",
              padding: "15px 38px",
              border: "1px solid rgba(255,251,235,0.35)",
              color: "#FEF7E4",
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              borderRadius: "50px",
              textDecoration: "none",
            }}
          >
            See corporate gifting
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "92px 40px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              color: "#042f2e",
              marginBottom: "36px",
            }}
          >
            Ordering for Diwali
          </h2>
          {FAQS.map((f) => (
            <div
              key={f.q}
              style={{
                paddingBottom: "24px",
                marginBottom: "24px",
                borderBottom: "1px solid rgba(4,47,46,0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#042f2e",
                  marginBottom: "10px",
                }}
              >
                {f.q}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "15.5px",
                  lineHeight: 1.75,
                  color: "rgba(4,47,46,0.66)",
                }}
              >
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 40px 110px", textAlign: "center" }}>
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
          Tell us who you&apos;re gifting.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(4,47,46,0.6)",
            maxWidth: "500px",
            margin: "0 auto 36px",
          }}
        >
          Message Parul with the occasion, the headcount, and your budget — she
          replies personally, usually the same day.
        </p>
        <a
          href={whatsappLink(
            "Hi Parul! I'm looking for Diwali gifts. Here's what I have in mind: "
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
      </section>

      <style>{`
        .diwali-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .diwali-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
        }
        @media (max-width: 520px) {
          .diwali-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
