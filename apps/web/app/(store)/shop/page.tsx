"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ProductCard } from "@/components/product-card";
import { DEMO_PRODUCTS, CATEGORIES } from "@/lib/demo-products";
import type { DemoProduct } from "@/lib/demo-products";

// CATEGORIES already contains "All" as first item

const CARE_LABELS: Record<DemoProduct["careLevel"], string> = {
  easy: "Easy care",
  moderate: "Moderate",
  expert: "Expert",
};

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? CATEGORIES[0]!;

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeCare, setActiveCare] = useState<DemoProduct["careLevel"] | "all">("all");
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let products = [...DEMO_PRODUCTS];

    if (activeCategory !== CATEGORIES[0]) {
      products = products.filter((p) => p.category === activeCategory);
    }
    if (activeCare !== "all") {
      products = products.filter((p) => p.careLevel === activeCare);
    }

    switch (sort) {
      case "price-asc":
        products.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price-desc":
        products.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // featured: bestsellers first
        products.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return products;
  }, [activeCategory, activeCare, sort]);

  return (
    <>
      {/* Page header */}
      <div className="bg-[#FAF8F3] border-b border-[#1F3A2D]/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A8BCA1] mb-2">
            Browse
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold text-[#1F3A2D]"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Our Creations
          </h1>
          <p className="text-[#22201C]/50 mt-2 text-sm">
            {filtered.length} {filtered.length === 1 ? "creation" : "creations"} — each handcrafted to tell a story
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Toolbar ── */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-[#1F3A2D] text-[#FAF8F3]"
                    : "bg-[#1F3A2D]/6 text-[#22201C]/60 hover:bg-[#1F3A2D]/10",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-[#1F3A2D]/15 text-sm font-medium text-[#1F3A2D]"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            Filters
            {(activeCategory !== "All" || activeCare !== "all") && (
              <span className="w-2 h-2 rounded-full bg-[#C77B58]" />
            )}
          </button>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm rounded-full border border-[#1F3A2D]/15 px-4 py-2 text-[#22201C] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#1F3A2D]/20 cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {/* Mobile filters panel */}
        {mobileFiltersOpen && (
          <div className="md:hidden mb-6 p-4 rounded-2xl bg-white border border-[#1F3A2D]/8 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40 mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={[
                      "px-3 py-1 rounded-full text-xs font-medium transition-all",
                      activeCategory === cat
                        ? "bg-[#1F3A2D] text-[#FAF8F3]"
                        : "bg-[#1F3A2D]/6 text-[#22201C]/60",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40 mb-3">Care Level</p>
              <div className="flex flex-wrap gap-2">
                {(["all", "easy", "moderate", "expert"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setActiveCare(level)}
                    className={[
                      "px-3 py-1 rounded-full text-xs font-medium transition-all",
                      activeCare === level
                        ? "bg-[#1F3A2D] text-[#FAF8F3]"
                        : "bg-[#1F3A2D]/6 text-[#22201C]/60",
                    ].join(" ")}
                  >
                    {level === "all" ? "All levels" : CARE_LABELS[level]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* ── Sidebar filters — desktop ── */}
          <aside className="hidden lg:block w-52 flex-shrink-0 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40 mb-3">Category</p>
              <ul className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={[
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                        activeCategory === cat
                          ? "bg-[#1F3A2D]/8 text-[#1F3A2D] font-semibold"
                          : "text-[#22201C]/55 hover:text-[#22201C]",
                      ].join(" ")}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#22201C]/40 mb-3">Care Level</p>
              <ul className="space-y-1">
                {(["all", "easy", "moderate", "expert"] as const).map((level) => (
                  <li key={level}>
                    <button
                      onClick={() => setActiveCare(level)}
                      className={[
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                        activeCare === level
                          ? "bg-[#1F3A2D]/8 text-[#1F3A2D] font-semibold"
                          : "text-[#22201C]/55 hover:text-[#22201C]",
                      ].join(" ")}
                    >
                      {level === "all" ? "All levels" : CARE_LABELS[level]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── Product grid ── */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <span className="text-5xl mb-4 block" role="img" aria-label="empty">🪴</span>
                <p className="text-[#1F3A2D] font-semibold mb-2" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
                  No plants found
                </p>
                <p className="text-sm text-[#22201C]/50 mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { setActiveCategory(CATEGORIES[0]!); setActiveCare("all"); }}
                  className="px-6 py-2.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] text-sm font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center">
        <span className="text-4xl animate-pulse">🌿</span>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
