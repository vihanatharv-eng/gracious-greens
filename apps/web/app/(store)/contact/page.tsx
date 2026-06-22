import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Gracious Greens — questions, custom orders, or order support.",
};

// TODO: add phone/WhatsApp number once available, then uncomment the
// phone card below and the WhatsApp CTA in the personalise/contact flow.
const PHONE: string | null = null;

const CONTACT_CARDS = [
  {
    label: "Email",
    value: "hello@graciousgreens.in",
    href: "mailto:hello@graciousgreens.in",
  },
  ...(PHONE
    ? [{ label: "WhatsApp / Phone", value: PHONE, href: `https://wa.me/${PHONE.replace(/\D/g, "")}` }]
    : []),
  {
    label: "Studio location",
    value: "Palwal, Haryana, India",
    href: undefined,
  },
  {
    label: "Hours",
    value: "Mon–Sat, 10am–7pm IST",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#FEF7E4", minHeight: "100vh" }}>
      <section style={{ padding: "140px 24px 60px", textAlign: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "11px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#c2410c",
          }}
        >
          Get in touch
        </span>
        <h1
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-1.4px",
            color: "#042f2e",
            margin: "16px 0 20px",
          }}
        >
          We&apos;d love to hear from you.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(4,47,46,0.62)",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          Questions about an order, a custom scene idea, or anything else —
          reach out and we&apos;ll get back to you as soon as we can.
        </p>
      </section>

      <section style={{ padding: "40px 24px 120px" }}>
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: `repeat(${CONTACT_CARDS.length}, 1fr)`,
            gap: "20px",
          }}
          className="contact-cards-grid"
        >
          {CONTACT_CARDS.map((card) => (
            <div
              key={card.label}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "28px 24px",
                border: "1px solid rgba(4,47,46,0.06)",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "rgba(4,47,46,0.45)",
                  marginBottom: "10px",
                }}
              >
                {card.label}
              </span>
              {card.href ? (
                <a
                  href={card.href}
                  style={{
                    fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                    fontSize: "17px",
                    color: "#042f2e",
                    textDecoration: "none",
                    wordBreak: "break-word",
                  }}
                >
                  {card.value}
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                    fontSize: "17px",
                    color: "#042f2e",
                  }}
                >
                  {card.value}
                </span>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="mailto:hello@graciousgreens.in"
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
            Send Us a Message
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .contact-cards-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 420px) {
          .contact-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
