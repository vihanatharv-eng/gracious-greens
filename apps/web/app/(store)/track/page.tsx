import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "How to check on the status of your Gracious Greens order.",
};

export default function TrackPage() {
  return (
    <LegalPage eyebrow="Orders" title="Track Your Order">
      <p>
        Every Gracious Greens piece is handcrafted to order, so your order moves
        through a few stages before it reaches you:
      </p>

      <h2>1. Confirmed</h2>
      <p>
        As soon as your payment goes through, you&apos;ll receive a confirmation
        by email or WhatsApp. This is your cue that we&apos;ve received your order
        and the details of your scene.
      </p>

      <h2>2. In the studio</h2>
      <p>
        Your scene is hand-assembled over the next 2–4 business days (longer for
        custom or bulk orders, which we&apos;ll have agreed with you in advance).
      </p>

      <h2>3. On its way</h2>
      <p>
        Once your order ships, we&apos;ll share dispatch details and, where the
        courier provides one, a tracking link so you can follow it to your door.
      </p>

      <h2>Want an update?</h2>
      <p>
        For now, the quickest way to check on your order is to reach out to us
        directly with your order details. Email{" "}
        <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a> or
        visit our <a href="/contact">Contact page</a>, and we&apos;ll tell you
        exactly where things stand.
      </p>
    </LegalPage>
  );
}
