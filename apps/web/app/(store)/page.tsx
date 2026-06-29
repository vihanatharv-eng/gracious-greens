import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { Journal } from "@/components/sections/journal";
import { SITE } from "@/lib/site";

const BASE = process.env["NEXT_PUBLIC_APP_URL"] ?? "https://graciousgreens.in";

// Organization structured data — helps Google associate the "Gracious
// Greens" brand name with this exact domain for branded searches (knowledge
// panel eligibility, sitelinks), rather than just an unattributed listing.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gracious Greens",
  alternateName: "Gracious Greens by Parul Jain",
  url: BASE,
  logo: `${BASE}/logo-mark.png`,
  image: `${BASE}/og-image.jpg`,
  description: "Handcrafted miniature scene planters and personalised plant gifts, made to order in Palwal, Haryana.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palwal",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: [SITE.instagramUrl],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${SITE.phoneE164}`,
    email: SITE.email,
    contactType: "customer service",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <Philosophy />
      <FeaturedCollection />
      <Journal />
    </>
  );
}
