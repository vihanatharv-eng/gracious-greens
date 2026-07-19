import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plant Care Guides — Money Plant, ZZ, Snake Plant & More",
  description:
    "How to care for the live plants in your Gracious Greens miniature scene — watering schedules, light, and simple upkeep for Money Plant, ZZ, Snake Plant, Aglaonema, and Jade.",
  alternates: { canonical: "https://graciousgreens.in/care-guides" },
};

export default function CareGuidesPage() {
  return (
    <LegalPage eyebrow="Plant Care" title="Caring for Your Scene">
      <p>
        Every Gracious Greens scene is built around a hardy, forgiving plant
        chosen to thrive with very little effort. Here&apos;s how to keep yours
        looking its best — whichever plant is at its heart.
      </p>
      <p>
        Prefer it as a keepsake?{" "}
        <a href="/downloads/gracious-greens-plant-care-guide.pdf" target="_blank" rel="noopener noreferrer">
          Download our free Plant Care Guide (PDF)
        </a>{" "}
        — the same advice, beautifully printable.
      </p>

      <h2>The golden rules</h2>
      <ul>
        <li><strong>Under-water rather than over-water.</strong> Most of our plants store water and dislike soggy roots. When in doubt, wait a few more days.</li>
        <li><strong>Bright, indirect light.</strong> A spot near a window that doesn&apos;t get harsh direct sun is ideal for almost all our scenes.</li>
        <li><strong>Keep the figurines dry.</strong> Water the soil gently around the base rather than pouring over the whole scene.</li>
        <li><strong>Dust occasionally.</strong> A soft, dry cloth or brush keeps both the leaves and the little details looking fresh.</li>
      </ul>

      <h2>Money Plant / Pothos (<Link href="/shop/squirrel-stash">Squirrel Stash</Link>, <Link href="/shop/bunnys-bundle">Bunny&apos;s Bundle</Link>)</h2>
      <p>
        Water weekly — a small pour near the roots, letting the top inch of soil
        dry between waterings. It trails happily; trim long vines to keep the
        scene&apos;s shape, and wipe the leaves with a damp cloth monthly to keep
        them glossy.
      </p>

      <h2>ZZ Plant (<Link href="/shop/family-picnic">Family Picnic</Link>, <Link href="/shop/couples-nook">Couple&apos;s Nook</Link>, <Link href="/shop/little-buddha">Little Buddha</Link>)</h2>
      <p>
        The ZZ is nearly indestructible. Water lightly every 2–3 weeks, letting
        the soil dry out in between — it stores water in its roots, so yellow
        leaves mean too much water, not too little. It tolerates low light but
        prefers bright, indirect light.
      </p>

      <h2>Snake Plant</h2>
      <p>
        The most independent plant we use. Water every 3–4 weeks, letting the
        soil dry out completely between waterings — overwatering is the only
        real way to harm it. It tolerates almost any light, which makes it
        perfect for offices and desks.
      </p>

      <h2>Jade (<Link href="/shop/three-wise-monks">Three Wise Monks</Link>)</h2>
      <p>
        Jade is a succulent, so it likes to dry out fully between waterings —
        roughly every 2 weeks, less in winter. Give it the brightest spot you
        have. Wrinkled leaves mean it&apos;s thirsty; mushy leaves mean it&apos;s
        had too much.
      </p>

      <h2>Aglaonema (<Link href="/shop/reading-buddha">Reading Buddha</Link>, <Link href="/shop/garden-gnome">Garden Gnome</Link>)</h2>
      <p>
        Aglaonema is wonderfully low-maintenance and air-purifying. Keep the soil
        lightly moist but never waterlogged, and place it in indirect light. It
        tolerates shade well, making it a great choice for desks and shelves.
      </p>

      <h2>The moss base</h2>
      <p>
        The moss in your scene drinks from its surface — a light mist every 2–3
        days keeps it fresh, green, and lush. If it browns, mist daily for a week
        and it usually greens back up.
      </p>

      <h2>Decor pieces &amp; solar lights</h2>
      <p>
        Our purely decorative resin pieces need no watering at all — just dust
        them gently with a dry cloth now and then. Solar garden lights simply
        need 6–8 hours of sunlight to charge; wipe the small solar panel clean
        occasionally so they glow their brightest.
      </p>

      <h2>Need a hand?</h2>
      <p>
        If your plant ever looks unhappy and you&apos;re not sure why, send us a
        photo on{" "}
        <a
          href={`https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent("Hi Parul! My plant needs some help — here's a photo:")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>{" "}
        or email <a href="mailto:hello@graciousgreens.in">hello@graciousgreens.in</a>{" "}
        and we&apos;ll help you sort it out.
      </p>
    </LegalPage>
  );
}
