// Real product catalogue — Gracious Greens handcrafted miniature scene planters & decor.
// PRICES ARE PLACEHOLDERS pending confirmation from Parul. Update `basePrice` + variant
// `price` once real pricing is set. Photos live in /public/images/catalogue/.

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
  gradient: string; // fallback card background if image fails
  image: string; // real product photo
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
    slug: "family-picnic",
    title: "The Family Picnic",
    tagline: "A Day Out, Frozen in Time",
    description:
      "A whole family gathered for a picnic — tiny figures sharing tea on a bed of moss, beneath a live ZZ plant. Set in a rustic glazed bowl with a hand-finished wooden rim.",
    story:
      "This is the scene we built our brand around — the warmth of people together, captured in miniature. Gift it to a family, or to anyone who misses being surrounded by the ones they love.",
    basePrice: 999,
    emoji: "🧺",
    gradient: "linear-gradient(135deg, #8B6F47 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/family-picnic.png",
    category: "Scene Planters",
    tags: ["bestseller", "family", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. The ZZ plant is hardy and forgiving — avoid overwatering.",
    rating: 5.0,
    reviewCount: 18,
    isBestseller: true,
    variants: [
      { id: "1a", name: "As Shown", price: 999, attributes: {}, stock: 6 },
      { id: "1b", name: "As Shown + Gift Wrap", price: 1099, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "2",
    slug: "couples-nook",
    title: "The Couple's Nook",
    tagline: "Two, Under the Leaves",
    description:
      "A couple seated by a tiny stream, framed by two arching ZZ plants in an elegant oval boat planter. Pebbles, moss, and miniature props complete the quiet little world.",
    story:
      "Made for anniversaries, weddings, and 'just because' — a keepsake that says the two of you built something that lasts.",
    basePrice: 949,
    emoji: "💑",
    gradient: "linear-gradient(135deg, #C8D9C0 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/couples-nook.png",
    category: "Scene Planters",
    tags: ["couple", "anniversary", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. ZZ plants thrive on a little neglect.",
    rating: 4.9,
    reviewCount: 14,
    isBestseller: true,
    variants: [
      { id: "2a", name: "As Shown", price: 949, attributes: {}, stock: 5 },
      { id: "2b", name: "As Shown + Gift Wrap", price: 1049, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "3",
    slug: "garden-gnome",
    title: "The Garden Gnome",
    tagline: "A Little Luck for the Home",
    description:
      "A cheerful gnome and his bunny friends nestled among pebbles, under a variegated aglaonema, in a hand-painted floral ceramic bowl.",
    story:
      "Gnomes have guarded gardens for centuries — a charm of good fortune. A bright, friendly housewarming gift that brings a smile every time it's seen.",
    basePrice: 849,
    emoji: "🍄",
    gradient: "linear-gradient(135deg, #D99A7E 0%, #FEF7E4 60%, #A8BCA1 100%)",
    image: "/images/catalogue/garden-gnome.png",
    category: "Scene Planters",
    tags: ["housewarming", "cheerful", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Keep soil lightly moist. Indirect light. Aglaonema is low-maintenance and tolerates shade well.",
    rating: 4.8,
    reviewCount: 11,
    isNew: true,
    variants: [
      { id: "3a", name: "As Shown", price: 849, attributes: {}, stock: 7 },
      { id: "3b", name: "As Shown + Gift Wrap", price: 949, attributes: {}, stock: 7 },
    ],
  },
  {
    id: "4",
    slug: "reading-buddha",
    title: "Reading Buddha",
    tagline: "Calm, in a Bowl",
    description:
      "A serene blue Buddha reads beside bunnies and a bright butterfly, set under a spotted aglaonema in a textured stone-finish bowl.",
    story:
      "A gift of stillness. Perfect for a meditation corner, a work desk that needs calming, or anyone learning to slow down.",
    basePrice: 899,
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #2D5040 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/reading-buddha.png",
    category: "Spiritual",
    tags: ["zen", "meditation", "premium"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Keep soil lightly moist. Indirect light. Aglaonema is forgiving and air-purifying.",
    rating: 4.9,
    reviewCount: 16,
    isBestseller: true,
    variants: [
      { id: "4a", name: "As Shown", price: 899, attributes: {}, stock: 6 },
      { id: "4b", name: "As Shown + Gift Wrap", price: 999, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "5",
    slug: "little-buddha",
    title: "Little Buddha",
    tagline: "Peace, Beginning Small",
    description:
      "A baby Buddha in a saffron robe meditates among pebbles and a tiny mushroom, beneath glossy ZZ foliage, in a moss-green floral ceramic bowl.",
    story:
      "New beginnings, gentle and quiet. A thoughtful gift for housewarmings, new chapters, or a moment of peace on a busy shelf.",
    basePrice: 879,
    emoji: "🪷",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #C8D9C0 60%, #FEF7E4 100%)",
    image: "/images/catalogue/little-buddha.png",
    category: "Spiritual",
    tags: ["zen", "housewarming", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water every 1–2 weeks. Bright, indirect light. ZZ plants are nearly indestructible.",
    rating: 4.8,
    reviewCount: 9,
    isNew: true,
    variants: [
      { id: "5a", name: "As Shown", price: 879, attributes: {}, stock: 5 },
      { id: "5b", name: "As Shown + Gift Wrap", price: 979, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "6",
    slug: "three-wise-monks",
    title: "Three Wise Monks",
    tagline: "See, Hear, Speak No Evil",
    description:
      "Three giggling baby monks sit before a live jade plant in a fluted white pot, wrapped in burlap and a floral ribbon finished with tiny roses.",
    story:
      "The timeless 'three wise monkeys' reimagined as monks — a charm of positivity and good conduct. The jade plant itself is a symbol of prosperity.",
    basePrice: 749,
    emoji: "🙈",
    gradient: "linear-gradient(135deg, #FEF7E4 0%, #C8D9C0 60%, #A8BCA1 100%)",
    image: "/images/catalogue/three-monks.png",
    category: "Spiritual",
    tags: ["prosperity", "cheerful", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil is dry. Bright light. Jade is a succulent — let it dry out between waterings.",
    rating: 4.9,
    reviewCount: 12,
    variants: [
      { id: "6a", name: "As Shown", price: 749, attributes: {}, stock: 8 },
      { id: "6b", name: "As Shown + Gift Wrap", price: 849, attributes: {}, stock: 8 },
    ],
  },
  {
    id: "7",
    slug: "loyal-companions",
    title: "Loyal Companions",
    tagline: "A Desk Buddy That Holds Your Pens",
    description:
      "Hand-painted Labrador and German Shepherd figures with a built-in pocket for pens, brushes, or a small succulent. Sold individually or as a pair.",
    story:
      "For the dog lover, the desk-dweller, the one who works late. A loyal little companion that keeps the workspace cheerful.",
    basePrice: 699,
    emoji: "🐕",
    gradient: "linear-gradient(135deg, #D4C5A9 0%, #C77B58 60%, #FEF7E4 100%)",
    image: "/images/catalogue/loyal-companions.png",
    category: "Desk Planters",
    tags: ["desk", "dog-lover", "office"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Doubles as a pen holder or a home for a small succulent. Wipe clean with a dry cloth.",
    rating: 4.7,
    reviewCount: 8,
    variants: [
      { id: "7a", name: "Single Dog", price: 699, attributes: {}, stock: 10 },
      { id: "7b", name: "Pair (Labrador + Shepherd)", price: 1299, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "8",
    slug: "mystic-owl",
    title: "The Mystic Owl",
    tagline: "Wisdom on the Shelf",
    description:
      "An intricately carved owl in cream, gold, and black, with evil-eye detailing on its feathers. A standalone decor piece that guards and watches over the home.",
    story:
      "Owls symbolise wisdom; the evil-eye motif wards off negativity. A meaningful, eye-catching accent for a shelf, study, or entryway.",
    basePrice: 549,
    emoji: "🦉",
    gradient: "linear-gradient(135deg, #4A4642 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/mystic-owl.png",
    category: "Decor",
    tags: ["decor", "wisdom", "evil-eye"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions: "Decorative resin piece. Dust gently with a dry cloth.",
    rating: 4.8,
    reviewCount: 7,
    variants: [
      { id: "8a", name: "Single Owl", price: 549, attributes: {}, stock: 12 },
    ],
  },
  {
    id: "9",
    slug: "owl-always-love-you",
    title: "Owl Always Love You",
    tagline: "A Pair, Perched Together",
    description:
      "Two ornate owls in blue, white, and silver, perched side by side on hand-finished birch logs. A charming pair that's better together.",
    story:
      "A play on words and a sweet sentiment — a gift for a partner, a best friend, or anyone you'd happily perch beside.",
    basePrice: 799,
    emoji: "🦉",
    gradient: "linear-gradient(135deg, #2D5040 0%, #C8D9C0 60%, #FEF7E4 100%)",
    image: "/images/catalogue/owl-pair.png",
    category: "Decor",
    tags: ["decor", "couple", "gifting"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions: "Decorative resin pair. Dust gently with a dry cloth.",
    rating: 4.9,
    reviewCount: 10,
    isBestseller: true,
    variants: [
      { id: "9a", name: "Pair", price: 799, attributes: {}, stock: 9 },
    ],
  },
];

export const CATEGORIES = ["All", "Scene Planters", "Spiritual", "Desk Planters", "Decor"];

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
