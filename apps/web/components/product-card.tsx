"use client";

import Link from "next/link";
import { useState } from "react";
import type { DemoProduct } from "@/lib/demo-products";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/contexts/cart-context";

interface ProductCardProps {
  product: DemoProduct;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();
  const [adding, setAdding] = useState(false);
  const defaultVariant = product.variants[0]!;

  async function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault(); // don't navigate to product page
    setAdding(true);
    addItem({
      productSlug: product.slug,
      variantId: defaultVariant.id,
      productTitle: product.title,
      variantName: defaultVariant.name,
      price: defaultVariant.price,
      quantity: 1,
      emoji: product.emoji,
      gradient: product.gradient,
    });
    await new Promise((r) => setTimeout(r, 600));
    setAdding(false);
  }

  return (
    <Link
      href={`/shop/${product.slug}`}
      className={cn(
        "group block rounded-2xl overflow-hidden bg-white transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1F3A2D]/10",
        "border border-[#1F3A2D]/5",
        className
      )}
    >
      {/* Image area — gradient placeholder until real photos are uploaded */}
      <div
        className="relative aspect-[4/5] flex items-center justify-center overflow-hidden"
        style={{ background: product.gradient }}
      >
        {/* Plant emoji */}
        <span
          className="text-8xl select-none transition-transform duration-500 group-hover:scale-110"
          role="img"
          aria-label={product.title}
        >
          {product.emoji}
        </span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-full bg-[#1F3A2D] text-[#FAF8F3] text-[10px] font-semibold uppercase tracking-wider">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-full bg-[#C77B58] text-[#FAF8F3] text-[10px] font-semibold uppercase tracking-wider">
              New
            </span>
          )}
        </div>

        {/* Quick add button — appears on hover */}
        <button
          onClick={handleAddToCart}
          disabled={adding}
          className={cn(
            "absolute bottom-3 left-3 right-3 py-2.5 rounded-xl",
            "bg-[#FAF8F3]/95 backdrop-blur-sm text-[#1F3A2D] text-sm font-semibold",
            "transition-all duration-300 opacity-0 translate-y-2",
            "group-hover:opacity-100 group-hover:translate-y-0",
            "hover:bg-[#FAF8F3] active:scale-[0.98]",
            adding && "opacity-70 cursor-default"
          )}
          aria-label={`Add ${product.title} to cart`}
        >
          {adding ? "Added! 🌿" : "Quick Add"}
        </button>
      </div>

      {/* Card info */}
      <div className="p-4">
        {/* Category + care level */}
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-[#22201C]/40 uppercase tracking-wider font-medium">
            {product.category}
          </span>
          <span className={cn(
            "text-xs px-2 py-0.5 rounded-full font-medium",
            product.careLevel === "easy" && "bg-[#A8BCA1]/30 text-[#1F3A2D]",
            product.careLevel === "moderate" && "bg-[#C77B58]/20 text-[#8B4A2A]",
            product.careLevel === "expert" && "bg-[#1F3A2D]/10 text-[#1F3A2D]",
          )}>
            {product.careLevel === "easy" ? "Easy care" : product.careLevel === "moderate" ? "Moderate" : "Expert"}
          </span>
        </div>

        {/* Title + tagline */}
        <h3
          className="font-semibold text-[#22201C] text-base leading-snug mb-0.5"
          style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
        >
          {product.title}
        </h3>
        <p className="text-xs text-[#22201C]/50 mb-3">{product.tagline}</p>

        {/* Rating + price row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  className={star <= Math.round(product.rating) ? "text-[#C77B58]" : "text-[#22201C]/20"}
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-[#22201C]/40">({product.reviewCount})</span>
          </div>
          <span
            className="font-semibold text-[#1F3A2D] text-base"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            {formatPrice(product.basePrice)}
          </span>
        </div>

        {/* Personalisation indicator */}
        {product.allowsCustomNote && (
          <p className="mt-2.5 text-[10px] text-[#A8BCA1] flex items-center gap-1">
            <span>✍️</span> Custom message available
          </p>
        )}
      </div>
    </Link>
  );
}
