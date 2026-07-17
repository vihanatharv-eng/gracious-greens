import { safeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEMO_PRODUCTS } from "@/lib/demo-products";
import { TESTIMONIALS } from "@/lib/testimonials";
import { ProductDetail } from "@/components/product-detail";

const BASE = process.env["NEXT_PUBLIC_APP_URL"] ?? "https://graciousgreens.in";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DEMO_PRODUCTS.map((p) => ({ slug: p.slug }));
}

// The catalogue is a static array, so the slugs above are the only valid ones.
// Without this, an unknown slug is rendered on demand — and because this route
// has a loading.tsx, Next starts streaming (committing HTTP 200) before
// notFound() runs, so bad URLs returned 200 with the not-found UI. That soft-404
// let search engines index unlimited junk URLs. Rejecting unknown params here
// returns a real 404 before any rendering begins.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = DEMO_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found" };

  const url = `${BASE}/shop/${product.slug}`;
  const description = `${product.tagline}. Handcrafted miniature scene planter. ${product.basePrice ? `₹${product.basePrice}.` : ""} Made to order, shipped across India with fragile-safe packaging.`;

  return {
    title: product.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.title} | Gracious Greens`,
      description: product.tagline,
      images: [{ url: product.image, width: 1200, height: 1200, alt: product.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.tagline,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = DEMO_PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  const url = `${BASE}/shop/${product.slug}`;

  // Only genuine, explicitly-rated testimonials for this exact product feed
  // the schema below — never fabricated, so a product simply has no
  // aggregateRating/review markup until a real one exists for it.
  const ratedTestimonials = TESTIMONIALS.filter(
    (t) => t.productSlug === product.slug && t.rating !== undefined,
  );
  const aggregateRating =
    ratedTestimonials.length > 0
      ? {
          "@type": "AggregateRating" as const,
          ratingValue: (
            ratedTestimonials.reduce((sum, t) => sum + (t.rating ?? 0), 0) /
            ratedTestimonials.length
          ).toFixed(1),
          reviewCount: ratedTestimonials.length,
        }
      : undefined;
  const reviews =
    ratedTestimonials.length > 0
      ? ratedTestimonials.map((t) => ({
          "@type": "Review" as const,
          author: { "@type": "Person" as const, name: t.name },
          reviewRating: { "@type": "Rating" as const, ratingValue: t.rating },
          reviewBody: t.quote,
        }))
      : undefined;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: [`${BASE}${product.image}`],
    url,
    brand: { "@type": "Brand", name: "Gracious Greens" },
    category: product.category,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: product.basePrice,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      // Matches the cart's free-shipping-over-₹999 nudge and the
      // 2-4 day assembly / 1-7 day transit windows on /shipping.
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: product.basePrice >= 999 ? "0" : "99",
          currency: "INR",
        },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 4, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 7, unitCode: "DAY" },
        },
      },
      // Matches /shipping: no change-of-mind returns, but a 48hr window for
      // damaged/defective items (free replacement or refund).
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 2,
        applicableCountry: "IN",
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
        refundType: "https://schema.org/FullRefund",
      },
    },
    // Populated only from real, rated testimonials in lib/testimonials.ts —
    // never fabricated, since fake review markup risks a Google penalty.
    ...(aggregateRating && { aggregateRating }),
    ...(reviews && { review: reviews }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Shop", item: `${BASE}/shop` },
      { "@type": "ListItem", position: 3, name: product.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
