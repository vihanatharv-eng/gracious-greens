import type { Metadata } from "next";

// /shop is a client component (filters/sort state), so its metadata lives
// here in the segment layout instead.
export const metadata: Metadata = {
  title: "Shop Miniature Plant Gifts & Scene Planters",
  description:
    "Browse handcrafted miniature scene planters, desk planters, spiritual pieces, and garden decor. Real plants, hand-placed figurines, made to order and shipped across India.",
  alternates: { canonical: "https://graciousgreens.in/shop" },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
