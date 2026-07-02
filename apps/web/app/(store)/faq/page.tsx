import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Gracious Greens — orders, customisation, plant care, shipping, and payments.",
};

// Single source for both the rendered page and the FAQPage JSON-LD.
// `a` is the plain-text answer (used for schema); `jsx` is the rich version
// with links (used for rendering). Keep the two in sync when editing.
const FAQS: { q: string; a: string; jsx: React.ReactNode }[] = [
  {
    q: "What exactly is a Gracious Greens planter?",
    a: "Each piece is a handcrafted miniature scene — a ceramic bowl holding a live plant, pebbles, moss, and hand-placed figurines and props arranged to tell a story. They're made to order in our Palwal studio.",
    jsx: (
      <p>
        Each piece is a handcrafted miniature scene — a ceramic bowl holding a
        live plant, pebbles, moss, and hand-placed figurines and props arranged
        to tell a story. They&apos;re made to order in our Palwal studio.
      </p>
    ),
  },
  {
    q: "Are the plants real?",
    a: "Yes. Most of our scenes use hardy, low-maintenance live plants like ZZ plants, jade, or aglaonema — chosen because they thrive with very little care. A few decor pieces don't include a live plant; this is always noted on the product page.",
    jsx: (
      <p>
        Yes. Most of our scenes use hardy, low-maintenance live plants like ZZ
        plants, jade, or aglaonema — chosen because they thrive with very little
        care. A few decor pieces (like our owls) don&apos;t include a live plant;
        this is always noted on the product page.
      </p>
    ),
  },
  {
    q: "Can I customise a scene?",
    a: "Absolutely — that's the heart of what we do. You can add a personal message at checkout, or design a fully bespoke scene through our Personalise a Scene page. Tell us the occasion and the details, and we'll build it around your story.",
    jsx: (
      <p>
        Absolutely — that&apos;s the heart of what we do. You can add a personal
        message at checkout, or design a fully bespoke scene through our{" "}
        <a href="/gifts/personalise">Personalise a Scene</a> page. Tell us the
        occasion and the details, and we&apos;ll build it around your story.
      </p>
    ),
  },
  {
    q: "How long does an order take?",
    a: "Because every piece is made to order, please allow 2–4 business days for crafting before it ships. Custom and bulk orders may take longer — we'll confirm a timeline with you directly.",
    jsx: (
      <p>
        Because every piece is made to order, please allow 2–4 business days for
        crafting before it ships. Custom and bulk orders may take longer — we&apos;ll
        confirm a timeline with you directly. See our{" "}
        <a href="/shipping">Shipping &amp; Refund Policy</a> for full details.
      </p>
    ),
  },
  {
    q: "Where do you deliver?",
    a: "We ship across India. Palwal and Delhi NCR orders are delivered directly; the rest of India is served via courier partners with fragile-safe packaging.",
    jsx: (
      <p>
        We ship across India. Palwal and Delhi NCR orders are delivered directly,
        and the rest of India is served via courier partners — every piece packed
        in fragile-safe packaging.
      </p>
    ),
  },
  {
    q: "How do I care for my plant?",
    a: "Each scene comes with care guidance, and our full Care Guides are available on the website. In short: most of our plants need only occasional watering and bright, indirect light.",
    jsx: (
      <p>
        Each scene comes with care guidance, and you can read our full{" "}
        <a href="/care-guides">Care Guides</a> anytime. In short: most of our
        plants need only occasional watering and bright, indirect light.
      </p>
    ),
  },
  {
    q: "What payment methods do you accept?",
    a: "Orders are currently confirmed on WhatsApp, where we accept UPI and bank transfer. We never see or store your payment details.",
    jsx: (
      <p>
        Orders are currently confirmed on WhatsApp, where we accept UPI and bank
        transfer — quick, secure, and confirmed with a receipt. Online card
        payments are coming soon.
      </p>
    ),
  },
  {
    q: "What if my order arrives damaged?",
    a: "We pack every order carefully, but if something arrives damaged, contact us within 48 hours with photos and we'll arrange a replacement or refund.",
    jsx: (
      <p>
        We pack every order carefully, but if something arrives damaged, contact
        us within 48 hours with photos and we&apos;ll arrange a replacement or
        refund. Full details are in our{" "}
        <a href="/shipping">Shipping &amp; Refund Policy</a>.
      </p>
    ),
  },
  {
    q: "Do you do corporate or bulk gifting?",
    a: "Yes — from ten pieces for a leadership team to a few hundred for a client list, with personalisation and branding options. See our Corporate Gifting page.",
    jsx: (
      <p>
        Yes — see our <a href="/corporate">Corporate Gifting</a> page or get in
        touch and we&apos;ll put together a plan for your team or client list.
      </p>
    ),
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LegalPage eyebrow="Help" title="Frequently Asked Questions">
        {FAQS.map(({ q, jsx }) => (
          <section key={q}>
            <h2>{q}</h2>
            {jsx}
          </section>
        ))}

        <h2>Still have a question?</h2>
        <p>
          We&apos;re happy to help — reach us via our{" "}
          <a href="/contact">Contact page</a> or email{" "}
          <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>.
        </p>
      </LegalPage>
    </>
  );
}
