"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { DEMO_PRODUCTS } from "@/lib/demo-products";
import { formatPrice, cn } from "@/lib/utils";
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
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [giftWrap, setGiftWrap] = useState(false);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();
  const selectedVariant = product.variants[selectedVariantIdx]!;
  const lineTotal = (selectedVariant.price + (giftWrap ? 50 : 0)) * qty;

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
                src={product.image}
                alt={product.title}
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
                    {formatPrice(selectedVariant.price + (giftWrap ? 50 : 0))} each
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
                    <span className="text-xs text-[#22201C]/40 ml-2">+₹50</span>
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
