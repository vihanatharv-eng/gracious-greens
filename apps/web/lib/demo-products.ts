// Demo product data — replace with real DB queries once products are added via admin
// Each product has a gradient for the card background (used until real photos are uploaded)

export type DemoVariant = {
  id: string;
  name: string;
  price: number;
  attributes: { size?: string; pot?: string };
  stock: number;
};

export type DemoProduct = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  story: string;
  basePrice: number;
  emoji: string;
  gradient: string; // CSS gradient for placeholder card
  category: string;
  tags: string[];
  allowsCustomNote: boolean;
  allowsCustomImage: boolean;
  allowsEngraving: boolean;
  careLevel: "easy" | "moderate" | "expert";
  careInstructions: string;
  rating: number;
  reviewCount: number;
  variants: DemoVariant[];
  isBestseller?: boolean;
  isNew?: boolean;
};

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "1",
    slug: "monstera-deliciosa",
    title: "Monstera Deliciosa",
    tagline: "The Statement Plant",
    description:
      "The iconic split-leaf Monstera — lush, architectural, and impossible to ignore. A plant that makes every room feel like a greenhouse escape.",
    story:
      "Named for its \"monstrous\" leaves, the Monstera has been a symbol of tropical luxury since the 1970s. Gift one and you're gifting not just a plant, but a lifestyle.",
    basePrice: 899,
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #2D5040 0%, #1F3A2D 50%, #A8BCA1 100%)",
    category: "Statement Plants",
    tags: ["bestseller", "statement", "easy-care"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: true,
    careLevel: "easy",
    careInstructions:
      "Water every 1–2 weeks. Bright indirect light. Wipe leaves monthly for shine. Keep away from direct sun.",
    rating: 4.8,
    reviewCount: 124,
    isBestseller: true,
    variants: [
      { id: "1a", name: "Small — Terracotta", price: 899, attributes: { size: "small", pot: "terracotta" }, stock: 12 },
      { id: "1b", name: "Medium — Terracotta", price: 1199, attributes: { size: "medium", pot: "terracotta" }, stock: 8 },
      { id: "1c", name: "Small — Ceramic White", price: 999, attributes: { size: "small", pot: "ceramic-white" }, stock: 5 },
      { id: "1d", name: "Medium — Ceramic White", price: 1349, attributes: { size: "medium", pot: "ceramic-white" }, stock: 3 },
    ],
  },
  {
    id: "2",
    slug: "succulent-trio-gift-set",
    title: "Succulent Trio Gift Set",
    tagline: "For the Minimalist",
    description:
      "Three perfectly curated succulents in a handcrafted wooden tray. Minimal care, maximum joy — the perfect desk companion or coffee table centerpiece.",
    story:
      "Succulents store water in their leaves, a quiet metaphor for resilience. Gift this set to someone who knows how to hold their own.",
    basePrice: 599,
    emoji: "🪴",
    gradient: "linear-gradient(135deg, #C77B58 0%, #D99A7E 60%, #FAF8F3 100%)",
    category: "Gift Sets",
    tags: ["gift-set", "minimal", "desk"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water once every 2 weeks. Direct to bright indirect light. Avoid overwatering — less is more.",
    rating: 4.9,
    reviewCount: 89,
    isBestseller: true,
    isNew: false,
    variants: [
      { id: "2a", name: "Trio — Wooden Tray", price: 599, attributes: { pot: "wooden-tray" }, stock: 15 },
      { id: "2b", name: "Trio — Ceramic Pots", price: 749, attributes: { pot: "ceramic-set" }, stock: 7 },
      { id: "2c", name: "Quintet — Wooden Tray", price: 899, attributes: { pot: "wooden-tray-5" }, stock: 4 },
    ],
  },
  {
    id: "3",
    slug: "pothos-golden-queen",
    title: "Golden Pothos",
    tagline: "The Forever Friend",
    description:
      "The most forgiving plant in the world. Trailing, golden-marbled leaves that thrive even when forgotten. Perfect for the busy gifted — or the new plant parent.",
    story:
      "Called \"Devil's Ivy\" because it refuses to die even in the dark. A symbol of enduring connection — perfect for someone you're not letting go of either.",
    basePrice: 449,
    emoji: "💛",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #C8D9C0 60%, #FAF8F3 100%)",
    category: "Desk Plants",
    tags: ["beginner-friendly", "trailing", "desk"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when top inch of soil is dry. Tolerates low light. Wipe leaves monthly. Prune to encourage fullness.",
    rating: 4.7,
    reviewCount: 203,
    variants: [
      { id: "3a", name: "Hanging Basket", price: 449, attributes: { pot: "hanging" }, stock: 20 },
      { id: "3b", name: "Terracotta Pot", price: 399, attributes: { pot: "terracotta" }, stock: 18 },
      { id: "3c", name: "Ceramic White", price: 499, attributes: { pot: "ceramic-white" }, stock: 10 },
    ],
  },
  {
    id: "4",
    slug: "cactus-trio",
    title: "Desert Cactus Trio",
    tagline: "Low Maintenance Love",
    description:
      "Three distinct cacti in a row of elegant terracotta pots. Architectural, dramatic, and extraordinarily self-sufficient. For the person who loves beauty without fuss.",
    story:
      "Cacti survive the harshest conditions while remaining beautiful — a reminder that strength and elegance can coexist.",
    basePrice: 749,
    emoji: "🌵",
    gradient: "linear-gradient(135deg, #D4C5A9 0%, #C77B58 60%, #8B6F47 100%)",
    category: "Statement Plants",
    tags: ["low-maintenance", "dramatic", "gifting"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: true,
    careLevel: "easy",
    careInstructions:
      "Water once a month in summer, every 6 weeks in winter. Full sun. Do not overwater.",
    rating: 4.6,
    reviewCount: 67,
    isNew: true,
    variants: [
      { id: "4a", name: "Trio — Terracotta", price: 749, attributes: { pot: "terracotta" }, stock: 9 },
      { id: "4b", name: "Trio — Black Ceramic", price: 899, attributes: { pot: "black-ceramic" }, stock: 4 },
    ],
  },
  {
    id: "5",
    slug: "peace-lily",
    title: "Peace Lily",
    tagline: "The Elegant Gift",
    description:
      "Graceful white blooms rising from deep green leaves. The Peace Lily purifies air, thrives in shade, and blooms even for beginners. A gift of serenity.",
    story:
      "In many cultures, the Peace Lily represents tranquility and new beginnings. Gift it for housewarmings, recoveries, or simply to say: \"I want peace for you.\"",
    basePrice: 699,
    emoji: "🤍",
    gradient: "linear-gradient(135deg, #FAF8F3 0%, #C8D9C0 50%, #A8BCA1 100%)",
    category: "Flowering Plants",
    tags: ["air-purifying", "flowering", "premium"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: true,
    careLevel: "moderate",
    careInstructions:
      "Keep soil moist but not soggy. Indirect light. Mist leaves in dry weather. Yellow leaves = too much sun.",
    rating: 4.8,
    reviewCount: 156,
    isBestseller: true,
    variants: [
      { id: "5a", name: "Medium — White Ceramic", price: 699, attributes: { size: "medium", pot: "ceramic-white" }, stock: 11 },
      { id: "5b", name: "Large — White Ceramic", price: 899, attributes: { size: "large", pot: "ceramic-white" }, stock: 6 },
      { id: "5c", name: "Medium — Terracotta", price: 649, attributes: { size: "medium", pot: "terracotta" }, stock: 8 },
    ],
  },
  {
    id: "6",
    slug: "zz-plant",
    title: "ZZ Plant",
    tagline: "The Resilient One",
    description:
      "Glossy, waxy, architectural leaves in deep emerald green. The ZZ tolerates neglect, low light, and erratic watering — and still looks like it was styled by a designer.",
    story:
      "The ZZ Plant (Zamioculcas zamiifolia) is nearly indestructible. A quiet symbol of persistence. Perfect for someone who has been through a lot — and kept thriving.",
    basePrice: 799,
    emoji: "🌱",
    gradient: "linear-gradient(135deg, #1F3A2D 0%, #2D5040 40%, #A8BCA1 100%)",
    category: "Desk Plants",
    tags: ["low-light", "statement", "beginner-friendly"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: true,
    careLevel: "easy",
    careInstructions:
      "Water every 2–3 weeks. Tolerates low light. Do not overwater. Wipe leaves for shine.",
    rating: 4.7,
    reviewCount: 91,
    variants: [
      { id: "6a", name: "Small — Black Ceramic", price: 799, attributes: { size: "small", pot: "black-ceramic" }, stock: 7 },
      { id: "6b", name: "Medium — Black Ceramic", price: 1099, attributes: { size: "medium", pot: "black-ceramic" }, stock: 5 },
      { id: "6c", name: "Small — Terracotta", price: 749, attributes: { size: "small", pot: "terracotta" }, stock: 12 },
    ],
  },
];

export const CATEGORIES = ["All", "Statement Plants", "Desk Plants", "Gift Sets", "Flowering Plants"];

export const OCCASIONS = [
  { emoji: "🎂", label: "Birthday", desc: "Something alive for another year of them" },
  { emoji: "💑", label: "Anniversary", desc: "A gift that grows with your love" },
  { emoji: "🏠", label: "Housewarming", desc: "Help them make a house feel like home" },
  { emoji: "💼", label: "Corporate", desc: "Thoughtful gifting at scale" },
  { emoji: "🎓", label: "Graduation", desc: "Celebrate a new chapter" },
  { emoji: "💚", label: "Just Because", desc: "The best reason of all" },
];

export function getProductBySlug(slug: string): DemoProduct | undefined {
  return DEMO_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): DemoProduct[] {
  if (category === "All") return DEMO_PRODUCTS;
  return DEMO_PRODUCTS.filter((p) => p.category === category);
}

export function getBestsellers(): DemoProduct[] {
  return DEMO_PRODUCTS.filter((p) => p.isBestseller);
}
