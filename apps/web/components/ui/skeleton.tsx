import { cn } from "@/lib/utils";

/**
 * Base shimmer block. Pure presentation — safe in server components.
 * The shimmer + reduced-motion fallback live in globals.css (.gg-skeleton).
 */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("gg-skeleton rounded-md", className)} aria-hidden="true" />;
}

/**
 * Mirrors <ProductCard> so the grid doesn't shift when real cards swap in.
 */
export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-[#1F3A2D]/5">
      {/* Image area */}
      <Skeleton className="aspect-[4/5] rounded-none" />
      {/* Card info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-4 w-14 rounded-full" />
        </div>
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2 mb-4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>
    </div>
  );
}

/**
 * Full shop-page skeleton. Reused by app/(store)/shop/loading.tsx (route
 * transition) and the in-page <Suspense> fallback for useSearchParams.
 */
export function ShopSkeleton() {
  return (
    <div role="status" aria-busy="true">
      <span className="sr-only">Loading creations…</span>

      {/* Page header */}
      <div className="bg-[#FAF8F3] border-b border-[#1F3A2D]/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Skeleton className="h-3 w-16 mb-3" />
          <Skeleton className="h-9 w-64 mb-3" />
          <Skeleton className="h-4 w-80" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="hidden md:flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-9 w-40 rounded-full ml-auto" />
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0 space-y-8">
            <div className="space-y-3">
              <Skeleton className="h-3 w-20" />
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-full rounded-lg" />
              ))}
            </div>
            <div className="space-y-3">
              <Skeleton className="h-3 w-24" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-full rounded-lg" />
              ))}
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {Array.from({ length: 9 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Full product-detail skeleton. Mirrors the two-column layout of
 * app/(store)/shop/[slug]/page.tsx.
 */
export function ProductDetailSkeleton() {
  return (
    <div role="status" aria-busy="true">
      <span className="sr-only">Loading creation…</span>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <Skeleton className="h-3 w-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: image + thumbnails + care card */}
          <div className="space-y-4">
            <Skeleton className="aspect-square rounded-3xl" />
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl" />
              ))}
            </div>
            <div className="rounded-2xl border border-[#1F3A2D]/6 p-5 space-y-3">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </div>
          </div>

          {/* Right: details + CTA */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </div>
            {/* Qty + price row */}
            <div className="flex items-end justify-between pt-2">
              <Skeleton className="h-12 w-32 rounded-xl" />
              <Skeleton className="h-10 w-28" />
            </div>
            {/* Personalisation card */}
            <Skeleton className="h-40 w-full rounded-2xl" />
            {/* CTA */}
            <Skeleton className="h-14 w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
