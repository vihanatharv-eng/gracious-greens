import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Gracious Greens collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="21 June 2026">
      <p>
        Gracious Greens (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates
        graciousgreens.in. This policy explains what information we collect when
        you visit our site or place an order, how we use it, and the choices you
        have.
      </p>

      <h2>Information we collect</h2>
      <p>When you browse or order from us, we may collect:</p>
      <ul>
        <li><strong>Contact details:</strong> name, email address, phone number, delivery address.</li>
        <li><strong>Order details:</strong> products purchased, personalisation notes, order history.</li>
        <li><strong>Payment information:</strong> processed entirely by our payment partner, Razorpay. We never see or store your card, UPI, or bank details.</li>
        <li><strong>Usage data:</strong> pages visited and basic device/browser information, collected automatically to help us improve the site.</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To process and deliver your order, including coordinating with our delivery partners.</li>
        <li>To contact you about order updates, delivery, or issues with your purchase.</li>
        <li>To respond to enquiries sent via our contact channels.</li>
        <li>To improve our products, website, and customer experience.</li>
        <li>To send occasional updates or offers, only if you&apos;ve opted in (e.g. via our newsletter sign-up) — you can unsubscribe at any time.</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>We do not sell your personal information. We share data only with:</p>
      <ul>
        <li><strong>Payment processors</strong> (Razorpay) to complete transactions securely.</li>
        <li><strong>Delivery/courier partners</strong> to fulfil and ship your order.</li>
        <li>Service providers who help us run the website (hosting, email), bound to keep your data confidential.</li>
        <li>Authorities, only where required by law.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use basic cookies to keep your cart contents while you browse and to
        understand how visitors use our site. You can disable cookies in your
        browser settings, though some features (like the shopping cart) may stop
        working correctly.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep order and contact information for as long as needed to fulfil
        orders, meet legal/accounting obligations, and resolve any disputes —
        typically up to 7 years for transaction records, in line with Indian tax
        requirements.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct, or delete the personal information we
        hold about you at any time by writing to{" "}
        <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>.
        We&apos;ll respond within a reasonable time.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        Our products are intended for purchase by adults. We do not knowingly
        collect personal information from children under 18.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on
        this page with a revised &quot;last updated&quot; date.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>, or
        see our <a href="/contact">Contact page</a>.
      </p>
    </LegalPage>
  );
}
