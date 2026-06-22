import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Shipping & Refund Policy",
  description: "Delivery areas, timelines, and our policy on cancellations, damage, and refunds.",
};

export default function ShippingPage() {
  return (
    <LegalPage eyebrow="Legal" title="Shipping & Refund Policy" updated="21 June 2026">
      <h2>Where we deliver</h2>
      <p>
        We currently deliver across Palwal and the Delhi NCR region directly,
        and to the rest of India via courier partners. Delivery availability
        and charges for your pincode are confirmed at checkout.
      </p>

      <h2>Processing time</h2>
      <p>
        Every piece is handcrafted to order. Please allow{" "}
        <strong>2–4 business days</strong> for your scene to be assembled
        before it ships. Personalised or custom-designed orders (see{" "}
        <a href="/gifts/personalise">Personalise a Scene</a>) may take longer —
        we&apos;ll confirm a timeline with you directly for these.
      </p>

      <h2>Delivery time</h2>
      <ul>
        <li><strong>Palwal &amp; Delhi NCR:</strong> typically 1–3 days after dispatch.</li>
        <li><strong>Rest of India:</strong> typically 4–7 days after dispatch, depending on courier serviceability.</li>
      </ul>
      <p>
        These are estimates, not guarantees — delays can occasionally occur due
        to courier delays, weather, or local restrictions outside our control.
      </p>

      <h2>Packaging</h2>
      <p>
        Each planter is carefully packed with cushioning to protect the
        ceramic bowl, plant, and figurines in transit. Gift-wrapped orders
        (+₹79) include kraft paper, a ribbon, and a sticker seal.
      </p>

      <h2>Cancellations</h2>
      <ul>
        <li>Orders can be cancelled for a full refund if crafting has not yet begun — contact us as soon as possible after ordering.</li>
        <li>Once a piece has entered production (assembly has started), we&apos;re unable to offer a full cancellation since materials and the live plant are already committed. We&apos;ll let you know if your order has reached this stage.</li>
      </ul>

      <h2>Damaged or incorrect items</h2>
      <p>
        We take great care in packaging, but if your order arrives damaged,
        incorrect, or significantly different from what you ordered:
      </p>
      <ul>
        <li>Contact us within <strong>48 hours</strong> of delivery at <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>, with photos of the item and packaging.</li>
        <li>We&apos;ll arrange a replacement where possible, or a full refund if a replacement isn&apos;t feasible.</li>
      </ul>

      <h2>Returns</h2>
      <p>
        Because each planter includes a live plant and is made to order, we&apos;re
        unable to accept returns for change-of-mind once an order has shipped.
        This policy doesn&apos;t affect your right to a replacement or refund for
        damaged or defective items as described above.
      </p>

      <h2>Refunds</h2>
      <p>
        Approved refunds are processed to your original payment method via
        Razorpay within <strong>5–7 business days</strong> of approval. Your
        bank or payment provider may take a few additional days to reflect the
        credit.
      </p>

      <h2>Questions</h2>
      <p>
        For anything related to your order, reach us at{" "}
        <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a> or
        visit our <a href="/contact">Contact page</a>.
      </p>
    </LegalPage>
  );
}
