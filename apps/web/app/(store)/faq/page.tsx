import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Gracious Greens — orders, customisation, plant care, shipping, and payments.",
};

export default function FaqPage() {
  return (
    <LegalPage eyebrow="Help" title="Frequently Asked Questions">
      <h2>What exactly is a Gracious Greens planter?</h2>
      <p>
        Each piece is a handcrafted miniature scene — a ceramic bowl holding a
        live plant, pebbles, moss, and hand-placed figurines and props arranged
        to tell a story. They&apos;re made to order in our Palwal studio.
      </p>

      <h2>Are the plants real?</h2>
      <p>
        Yes. Most of our scenes use hardy, low-maintenance live plants like ZZ
        plants, jade, or aglaonema — chosen because they thrive with very little
        care. A few decor pieces (like our owls) don&apos;t include a live plant;
        this is always noted on the product page.
      </p>

      <h2>Can I customise a scene?</h2>
      <p>
        Absolutely — that&apos;s the heart of what we do. You can add a personal
        message at checkout, or design a fully bespoke scene through our{" "}
        <a href="/gifts/personalise">Personalise a Scene</a> page. Tell us the
        occasion and the details, and we&apos;ll build it around your story.
      </p>

      <h2>How long does an order take?</h2>
      <p>
        Because every piece is made to order, please allow 2–4 business days for
        crafting before it ships. Custom and bulk orders may take longer — we&apos;ll
        confirm a timeline with you directly. See our{" "}
        <a href="/shipping">Shipping &amp; Refund Policy</a> for full details.
      </p>

      <h2>Where do you deliver?</h2>
      <p>
        We deliver across Palwal and Delhi NCR directly, and to the rest of India
        via courier partners. Delivery charges for your pincode are shown at
        checkout.
      </p>

      <h2>How do I care for my plant?</h2>
      <p>
        Each scene comes with care guidance, and you can read our full{" "}
        <a href="/care-guides">Care Guides</a> anytime. In short: most of our
        plants need only occasional watering and bright, indirect light.
      </p>

      <h2>What payment methods do you accept?</h2>
      <p>
        Payments are processed securely through Razorpay, which supports UPI,
        debit/credit cards, net banking, and popular wallets. We never see or
        store your payment details.
      </p>

      <h2>What if my order arrives damaged?</h2>
      <p>
        We pack every order carefully, but if something arrives damaged, contact
        us within 48 hours with photos and we&apos;ll arrange a replacement or
        refund. Full details are in our{" "}
        <a href="/shipping">Shipping &amp; Refund Policy</a>.
      </p>

      <h2>Do you do corporate or bulk gifting?</h2>
      <p>
        Yes — see our <a href="/corporate">Corporate Gifting</a> page or get in
        touch and we&apos;ll put together a plan for your team or client list.
      </p>

      <h2>Still have a question?</h2>
      <p>
        We&apos;re happy to help — reach us via our{" "}
        <a href="/contact">Contact page</a> or email{" "}
        <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>.
      </p>
    </LegalPage>
  );
}
