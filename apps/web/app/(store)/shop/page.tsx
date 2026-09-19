import { ShopContent } from "@/components/shop-content";
import { CATEGORIES } from "@/lib/demo-products";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

// Server component on purpose. Reading the category here and handing it down
// as a prop keeps useSearchParams() out of the tree, so the grid — and the
// links to all 45 product pages — are server-rendered into the HTML that
// crawlers receive.
export default async function ShopPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const initialCategory =
    category && CATEGORIES.includes(category) ? category : CATEGORIES[0]!;

  return <ShopContent initialCategory={initialCategory} />;
}
