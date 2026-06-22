import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of graciousgreens.in and orders placed with Gracious Greens.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" updated="21 June 2026">
      <p>
        These terms govern your use of graciousgreens.in and any order you place
        with Gracious Greens, a handcrafted gifting studio based in Palwal,
        Haryana, India. By using this site or placing an order, you agree to
        these terms.
      </p>

      <h2>Our products</h2>
      <p>
        Each Gracious Greens piece is a handcrafted miniature scene planter,
        combining a live plant with hand-placed figurines, props, and natural
        materials. Because every piece is made by hand:
      </p>
      <ul>
        <li>Minor variations in plant size, leaf shape, pebble arrangement, and figurine placement are normal and part of the handcrafted nature of each product — not a defect.</li>
        <li>Product photos are representative; the exact plant and arrangement you receive may differ slightly from the image shown.</li>
        <li>Live plants are natural products and their appearance will change over time with care.</li>
      </ul>

      <h2>Orders and pricing</h2>
      <ul>
        <li>All prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise.</li>
        <li>We reserve the right to correct pricing errors and to cancel orders affected by a pricing error, with a full refund.</li>
        <li>An order is confirmed once payment is successfully processed. You&apos;ll receive a confirmation via email or WhatsApp.</li>
        <li>Made-to-order and personalised pieces begin production after order confirmation; please review personalisation details carefully before submitting, as we cannot guarantee changes once crafting has started.</li>
      </ul>

      <h2>Payments</h2>
      <p>
        Payments are processed securely through Razorpay. We do not store your
        card, UPI, or banking details. By making a payment, you also agree to
        Razorpay&apos;s applicable terms.
      </p>

      <h2>Shipping and delivery</h2>
      <p>
        See our <a href="/shipping">Shipping &amp; Refund Policy</a> for delivery
        areas, timelines, and what to do if your order arrives damaged.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site — including photographs, product designs,
        copy, and the Gracious Greens name and logo — is owned by Gracious
        Greens and may not be reproduced or used commercially without our
        written permission.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Please don&apos;t use this site for any unlawful purpose, to attempt
        unauthorised access to our systems, or to interfere with the
        site&apos;s normal operation.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We take care in crafting and packaging every order, but we are not
        liable for indirect or consequential loss arising from delays, courier
        issues outside our control, or natural variation in live plants. Our
        liability for any claim is limited to the value of the order in
        question.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Any disputes will be
        subject to the jurisdiction of the courts in Haryana.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms occasionally. Continued use of the site after
        changes are posted means you accept the revised terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms? Reach us at{" "}
        <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>.
      </p>
    </LegalPage>
  );
}
