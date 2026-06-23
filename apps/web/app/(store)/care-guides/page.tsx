import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Care Guides",
  description: "How to care for the live plants in your Gracious Greens miniature scene — watering, light, and simple upkeep.",
};

export default function CareGuidesPage() {
  return (
    <LegalPage eyebrow="Plant Care" title="Caring for Your Scene">
      <p>
        Every Gracious Greens scene is built around a hardy, forgiving plant
        chosen to thrive with very little effort. Here&apos;s how to keep yours
        looking its best — whichever plant is at its heart.
      </p>

      <h2>The golden rules</h2>
      <ul>
        <li><strong>Under-water rather than over-water.</strong> Most of our plants store water and dislike soggy roots. When in doubt, wait a few more days.</li>
        <li><strong>Bright, indirect light.</strong> A spot near a window that doesn&apos;t get harsh direct sun is ideal for almost all our scenes.</li>
        <li><strong>Keep the figurines dry.</strong> Water the soil gently around the base rather than pouring over the whole scene.</li>
        <li><strong>Dust occasionally.</strong> A soft, dry cloth or brush keeps both the leaves and the little details looking fresh.</li>
      </ul>

      <h2>ZZ Plant (Family Picnic, Couple&apos;s Nook, Little Buddha)</h2>
      <p>
        The ZZ is nearly indestructible. Water lightly every 1–2 weeks, letting
        the soil dry out in between. It tolerates low light but prefers bright,
        indirect light. Avoid overwatering — that&apos;s the only thing that
        really troubles it.
      </p>

      <h2>Jade (Three Wise Monks)</h2>
      <p>
        Jade is a succulent, so it likes to dry out fully between waterings —
        roughly every 2 weeks, less in winter. Give it the brightest spot you
        have. Wrinkled leaves mean it&apos;s thirsty; mushy leaves mean it&apos;s
        had too much.
      </p>

      <h2>Aglaonema (Reading Buddha, Garden Gnome)</h2>
      <p>
        Aglaonema is wonderfully low-maintenance and air-purifying. Keep the soil
        lightly moist but never waterlogged, and place it in indirect light. It
        tolerates shade well, making it a great choice for desks and shelves.
      </p>

      <h2>Decor pieces (owls, dog planters)</h2>
      <p>
        Our purely decorative resin pieces need no watering at all — just dust
        them gently with a dry cloth now and then. The dog planters can hold a
        small succulent or your pens if you&apos;d like.
      </p>

      <h2>Need a hand?</h2>
      <p>
        If your plant ever looks unhappy and you&apos;re not sure why, send us a
        photo at <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>{" "}
        and we&apos;ll help you sort it out.
      </p>
    </LegalPage>
  );
}
