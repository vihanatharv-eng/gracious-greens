"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { DEMO_PRODUCTS } from "@/lib/demo-products";
import { formatPrice, cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";
import { useCart } from "@/contexts/cart-context";
import { ProductCard } from "@/components/product-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const { slug } = use(params);
  const product = DEMO_PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  // After notFound() guard, product is guaranteed non-null for JSX below.
  // We forward all rendering to a child component that receives a non-optional product.
  return <ProductDetail product={product} />;
}

// ── Inner component so hooks run after null-check ─────────────────────────────

import type { DemoProduct } from "@/lib/demo-products";

function ProductDetail({ product }: { product: DemoProduct }) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [giftWrap, setGiftWrap] = useState(false);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  // Reset selection state when navigating to a different product (e.g. via
  // "You might also like") — the page component itself isn't remounted by
  // the router, so stale indices could otherwise point past a shorter gallery.
  useEffect(() => {
    setSelectedVariantIdx(0);
    setSelectedImageIdx(0);
  }, [product.id]);

  const { addItem } = useCart();
  const selectedVariant = product.variants[selectedVariantIdx]!;
  const lineTotal = (selectedVariant.price + (giftWrap ? 79 : 0)) * qty;

  // Direct WhatsApp order (no online checkout yet) — pre-fills the order so
  // Parul receives the product, variant, qty and personalisation in one tap.
  function buildWhatsappMessage(): string {
    const parts = [
      "Hi Parul! I'd like to order this from Gracious Greens:",
      "",
      `${product.title} (${selectedVariant.name}) ×${qty} — ${formatPrice(lineTotal)}`,
    ];
    if (note.trim()) parts.push(`✍️ Note: "${note.trim()}"`);
    if (giftWrap) parts.push("🎁 Gift wrap (+₹79)");
    parts.push("", "Is this available? Thank you!");
    return parts.join("\n");
  }

  // Related products (same category, exclude current)
  const related = DEMO_PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  async function handleAddToCart() {
    setAdding(true);
    addItem({
      productSlug: product.slug,
      variantId: selectedVariant.id,
      productTitle: product.title,
      variantName: selectedVariant.name,
      price: selectedVariant.price,
      quantity: qty,
      emoji: product.emoji,
      gradient: product.gradient,
      personalization: {
        note: note.trim() || undefined,
        giftWrap: giftWrap || undefined,
      },
    });
    await new Promise((r) => setTimeout(r, 500));
    setAdding(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs text-[#22201C]/40">
          <Link href="/" className="hover:text-[#22201C]/70 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#22201C]/70 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#22201C]/70">{product.title}</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Left: Image ── */}
          <div className="space-y-4">
            <div
              className="relative aspect-square rounded-3xl overflow-hidden"
              style={{ background: product.gradient }}
            >
              <Image
                src={product.images[selectedImageIdx] ?? product.image}
                alt={`${product.title} — view ${selectedImageIdx + 1} of ${product.images.length}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Badges */}
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                {product.isBestseller && (
                  <span className="px-3 py-1.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] text-xs font-semibold uppercase tracking-wider">
                    Bestseller
                  </span>
                )}
                {product.isNew && (
                  <span className="px-3 py-1.5 rounded-full bg-[#C77B58] text-[#FAF8F3] text-xs font-semibold uppercase tracking-wider">
                    New
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-3" role="tablist" aria-label="Product photos">
                {product.images.map((img, idx) => (
                  <button
                    key={img}
                    role="tab"
                    aria-selected={idx === selectedImageIdx}
                    aria-label={`View photo ${idx + 1}`}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={cn(
                      "relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all",
                      idx === selectedImageIdx
                        ? "ring-2 ring-[#1F3A2D] ring-offset-2 ring-offset-[#FAF8F3]"
                        : "opacity-60 hover:opacity-100"
                    )}
                    style={{ background: product.gradient }}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Care info card */}
            <div className="rounded-2xl bg-[#FAF8F3] border border-[#1F3A2D]/6 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40 mb-3">
                Care Guide
              </p>
              <p className="text-sm text-[#22201C]/60 leading-relaxed">
                {product.careInstructions}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className={cn(
                  "text-xs px-2.5 py-1 rounded-full font-medium",
                  product.careLevel === "easy" && "bg-[#A8BCA1]/30 text-[#1F3A2D]",
                  product.careLevel === "moderate" && "bg-[#C77B58]/20 text-[#8B4A2A]",
                  product.careLevel === "expert" && "bg-[#1F3A2D]/10 text-[#1F3A2D]",
                )}>
                  {product.careLevel === "easy"
                    ? "🌱 Easy care"
                    : product.careLevel === "moderate"
                    ? "🌿 Moderate"
                    : "🌳 Expert"}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Details + Add to Cart ── */}
          <div className="space-y-6">
            {/* Category + rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A8BCA1]">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      className={star <= Math.round(product.rating) ? "text-[#C77B58]" : "text-[#22201C]/20"}
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-medium text-[#22201C]/50">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Title + tagline */}
            <div>
              <h1
                className="text-3xl sm:text-4xl font-semibold text-[#1F3A2D] leading-tight mb-2"
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                {product.title}
              </h1>
              <p className="text-[#22201C]/55">{product.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-[#22201C]/60 leading-relaxed">{product.description}</p>

            {/* Story */}
            {product.story && (
              <blockquote className="border-l-2 border-[#A8BCA1] pl-4 text-sm text-[#22201C]/50 italic leading-relaxed">
                {product.story}
              </blockquote>
            )}

            {/* Variants */}
            {product.variants.length > 1 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40 mb-3">
                  Size / Variant
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, idx) => {
                    const priceDiff = v.price - product.basePrice;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariantIdx(idx)}
                        className={cn(
                          "px-4 py-2 rounded-xl border text-sm font-medium transition-all",
                          selectedVariantIdx === idx
                            ? "border-[#1F3A2D] bg-[#1F3A2D] text-[#FAF8F3]"
                            : "border-[#1F3A2D]/15 text-[#22201C]/60 hover:border-[#1F3A2D]/30"
                        )}
                      >
                        {v.name}
                        {priceDiff !== 0 && (
                          <span className="ml-1.5 text-xs opacity-70">
                            {priceDiff > 0 ? `+₹${priceDiff}` : `-₹${Math.abs(priceDiff)}`}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-end gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40 mb-3">Qty</p>
                <div className="flex items-center gap-3 bg-[#FAF8F3] rounded-xl p-1 w-fit">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-8 h-8 rounded-lg border border-[#1F3A2D]/15 text-[#1F3A2D] flex items-center justify-center hover:bg-[#1F3A2D]/5 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold text-[#22201C]">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-8 h-8 rounded-lg border border-[#1F3A2D]/15 text-[#1F3A2D] flex items-center justify-center hover:bg-[#1F3A2D]/5 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price display */}
              <div className="ml-auto text-right">
                <p className="text-xs text-[#22201C]/40 mb-1">Total</p>
                <p
                  className="text-3xl font-semibold text-[#1F3A2D]"
                  style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
                >
                  {formatPrice(lineTotal)}
                </p>
                {qty > 1 && (
                  <p className="text-xs text-[#22201C]/40">
                    {formatPrice(selectedVariant.price + (giftWrap ? 79 : 0))} each
                  </p>
                )}
              </div>
            </div>

            {/* Personalisation */}
            {product.allowsCustomNote && (
              <div className="rounded-2xl border border-[#1F3A2D]/8 bg-[#FAF8F3] p-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40">
                  Personalise this gift ✨
                </p>

                <div>
                  <label htmlFor="note" className="block text-sm font-medium text-[#1F3A2D] mb-1.5">
                    Add a personal message{" "}
                    <span className="text-[#22201C]/40 font-normal">(handwritten on premium card)</span>
                  </label>
                  <textarea
                    id="note"
                    rows={3}
                    maxLength={200}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="e.g. Happy birthday! Wishing you all the happiness 🌿"
                    className="w-full rounded-xl border border-[#1F3A2D]/15 px-4 py-3 text-sm text-[#22201C] placeholder-[#22201C]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3A2D]/20 resize-none"
                  />
                  <p className="text-[10px] text-[#22201C]/30 mt-1 text-right">{note.length}/200</p>
                </div>

                {/* Gift wrap toggle */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "w-10 h-6 rounded-full transition-colors",
                      giftWrap ? "bg-[#1F3A2D]" : "bg-[#22201C]/15"
                    )}>
                      <div className={cn(
                        "w-4 h-4 rounded-full bg-white shadow absolute top-1 transition-transform",
                        giftWrap ? "translate-x-5" : "translate-x-1"
                      )} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-[#1F3A2D]">Gift wrapping</span>
                    <span className="text-xs text-[#22201C]/40 ml-2">+₹79</span>
                    <p className="text-[10px] text-[#22201C]/40 mt-0.5">Elegant kraft paper with ribbon + sticker seal</p>
                  </div>
                  <span className="text-2xl flex-shrink-0" aria-hidden>🎁</span>
                </label>
              </div>
            )}

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={adding || added}
                className={cn(
                  "w-full py-4 rounded-full font-semibold text-sm transition-all",
                  added
                    ? "bg-[#A8BCA1] text-[#FAF8F3]"
                    : "bg-[#1F3A2D] text-[#FAF8F3] hover:bg-[#2D5040] active:scale-[0.98]",
                  adding && "opacity-70 cursor-wait"
                )}
              >
                {added ? "Added to cart ✓" : adding ? "Adding…" : `Add to Cart — ${formatPrice(lineTotal)}`}
              </button>

              <a
                href={whatsappLink(buildWhatsappMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold text-sm border-2 border-[#1F3A2D] text-[#1F3A2D] hover:bg-[#1F3A2D]/5 active:scale-[0.98] transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.937zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Order on WhatsApp
              </a>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                {[
                  { icon: "🚚", text: "Delivery across Palwal & NCR" },
                  { icon: "🌱", text: "Handcrafted to order" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-xs text-[#22201C]/40">
                    <span aria-hidden>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Products ── */}
        {related.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#1F3A2D]/8">
            <div className="flex items-end justify-between mb-8">
              <h2
                className="text-2xl font-semibold text-[#1F3A2D]"
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                You might also like
              </h2>
              <Link href="/shop" className="text-sm text-[#1F3A2D] font-medium hover:text-[#2D5040] transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
