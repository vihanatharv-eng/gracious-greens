import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEMO_PRODUCTS } from "@/lib/demo-products";
import { ProductDetail } from "@/components/product-detail";

const BASE = process.env["NEXT_PUBLIC_APP_URL"] ?? "https://graciousgreens.in";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DEMO_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = DEMO_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found" };

  const url = `${BASE}/shop/${product.slug}`;
  const description = `${product.tagline}. Handcrafted miniature scene planter. ${product.basePrice ? `₹${product.basePrice}.` : ""} Made to order, delivered across Palwal & Delhi NCR.`;

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
    },
    aggregateRating: product.reviewCount > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviewCount,
        }
      : undefined,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
