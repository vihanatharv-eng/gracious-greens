// Real product catalogue — Gracious Greens handcrafted miniature scene planters & decor.
// Photos live in /public/images/catalogue/. Pricing confirmed 2026-06-21.

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
  image: string; // primary/default photo — used on cards, hero, carousels
  images: string[]; // full gallery for the product detail page (image is images[0])
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
    basePrice: 1699,
    emoji: "🧺",
    gradient: "linear-gradient(135deg, #8B6F47 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/family-picnic.png",
    images: [
      "/images/catalogue/family-picnic.png",
      "/images/catalogue/family-picnic-2.png",
      "/images/catalogue/family-picnic-3.png",
      "/images/catalogue/family-picnic-4.png",
    ],
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
      { id: "1a", name: "As Shown", price: 1699, attributes: {}, stock: 6 },
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
    basePrice: 1599,
    emoji: "💑",
    gradient: "linear-gradient(135deg, #C8D9C0 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/couples-nook.png",
    images: [
      "/images/catalogue/couples-nook.png",
      "/images/catalogue/couples-nook-2.png",
      "/images/catalogue/couples-nook-3.png",
      "/images/catalogue/couples-nook-4.png",
    ],
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
      { id: "2a", name: "As Shown", price: 1599, attributes: {}, stock: 5 },
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
    basePrice: 1299,
    emoji: "🍄",
    gradient: "linear-gradient(135deg, #D99A7E 0%, #FEF7E4 60%, #A8BCA1 100%)",
    image: "/images/catalogue/garden-gnome.png",
    images: [
      "/images/catalogue/garden-gnome.png",
      "/images/catalogue/garden-gnome-2.png",
      "/images/catalogue/garden-gnome-3.png",
      "/images/catalogue/garden-gnome-4.png",
    ],
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
      { id: "3a", name: "As Shown", price: 1299, attributes: {}, stock: 7 },
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
    basePrice: 999,
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #2D5040 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/reading-buddha.png",
    images: [
      "/images/catalogue/reading-buddha.png",
      "/images/catalogue/reading-buddha-2.png",
      "/images/catalogue/reading-buddha-3.png",
      "/images/catalogue/reading-buddha-4.png",
    ],
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
      { id: "4a", name: "As Shown", price: 999, attributes: {}, stock: 6 },
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
    basePrice: 949,
    emoji: "🪷",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #C8D9C0 60%, #FEF7E4 100%)",
    image: "/images/catalogue/little-buddha.png",
    images: [
      "/images/catalogue/little-buddha.png",
      "/images/catalogue/little-buddha-2.png",
      "/images/catalogue/little-buddha-3.png",
      "/images/catalogue/little-buddha-4.png",
    ],
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
      { id: "5a", name: "As Shown", price: 949, attributes: {}, stock: 5 },
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
    basePrice: 849,
    emoji: "🙈",
    gradient: "linear-gradient(135deg, #FEF7E4 0%, #C8D9C0 60%, #A8BCA1 100%)",
    image: "/images/catalogue/three-monks.png",
    images: [
      "/images/catalogue/three-monks.png",
      "/images/catalogue/three-monks-2.png",
      "/images/catalogue/three-monks-3.png",
      "/images/catalogue/three-monks-4.png",
    ],
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
      { id: "6a", name: "As Shown", price: 849, attributes: {}, stock: 8 },
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
    basePrice: 649,
    emoji: "🐕",
    gradient: "linear-gradient(135deg, #D4C5A9 0%, #C77B58 60%, #FEF7E4 100%)",
    image: "/images/catalogue/loyal-companions.png",
    images: [
      "/images/catalogue/loyal-companions.png",
      "/images/catalogue/loyal-companions-2.png",
    ],
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
      { id: "7a", name: "Single Dog", price: 649, attributes: {}, stock: 10 },
      { id: "7b", name: "Pair (Labrador + Shepherd)", price: 1199, attributes: {}, stock: 5 },
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
    images: [
      "/images/catalogue/mystic-owl.png",
      "/images/catalogue/mystic-owl-2.png",
      "/images/catalogue/mystic-owl-3.png",
      "/images/catalogue/mystic-owl-4.png",
    ],
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
    basePrice: 899,
    emoji: "🦉",
    gradient: "linear-gradient(135deg, #2D5040 0%, #C8D9C0 60%, #FEF7E4 100%)",
    image: "/images/catalogue/owl-pair.png",
    images: [
      "/images/catalogue/owl-pair.png",
      "/images/catalogue/owl-pair-2.png",
      "/images/catalogue/owl-pair-3.png",
      "/images/catalogue/owl-pair-4.png",
    ],
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
      { id: "9a", name: "Pair", price: 899, attributes: {}, stock: 9 },
    ],
  },
  {
    id: "10",
    slug: "squirrel-stash",
    title: "The Squirrel Stash",
    tagline: "Tiny Hoarders, Big Charm",
    description:
      "Two cheerful squirrels guard their acorn stash among white pebbles, beneath a trailing variegated pothos in a fluted forest-green ceramic pot — finished with a satin bow, ready to gift straight out of the box.",
    story:
      "A little reminder to save what matters and savour the small things. Easy to love, easy to keep — perfect for a desk, a windowsill, or anyone who could use a dose of cheer.",
    basePrice: 799,
    emoji: "🐿️",
    gradient: "linear-gradient(135deg, #2D5040 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/squirrel-stash.png",
    images: [
      "/images/catalogue/squirrel-stash.png",
      "/images/catalogue/squirrel-stash-2.png",
      "/images/catalogue/squirrel-stash-3.png",
      "/images/catalogue/squirrel-stash-4.png",
    ],
    category: "Desk Planters",
    tags: ["gift", "desk", "cheerful"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. Pothos is nearly indestructible and thrives on a little neglect.",
    rating: 4.8,
    reviewCount: 6,
    isNew: true,
    variants: [
      { id: "10a", name: "As Shown", price: 799, attributes: {}, stock: 8 },
    ],
  },
  {
    id: "11",
    slug: "family-reunion",
    title: "The Family Reunion",
    tagline: "Three Generations, One Garden",
    description:
      "A father carrying his child, a grandmother at the table, a mother cradling her baby — gathered beneath an arch of glossy ZZ leaves, with yellow ducks bobbing in a tiny pond, all framed by a rainbow picket fence.",
    story:
      "For the families that span generations under one roof. A keepsake for a reunion, a grandparent's birthday, or anyone who carries their whole family with them, always.",
    basePrice: 1599,
    emoji: "👵",
    gradient: "linear-gradient(135deg, #4A7856 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/family-reunion.png",
    images: [
      "/images/catalogue/family-reunion.png",
      "/images/catalogue/family-reunion-2.png",
      "/images/catalogue/family-reunion-3.png",
      "/images/catalogue/family-reunion-4.png",
    ],
    category: "Scene Planters",
    tags: ["family", "multi-generation", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. The ZZ plant is hardy and forgiving — avoid overwatering.",
    rating: 4.9,
    reviewCount: 5,
    isNew: true,
    variants: [
      { id: "11a", name: "As Shown", price: 1599, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "12",
    slug: "cozy-corner",
    title: "The Cozy Corner",
    tagline: "A Little World, Just for Her",
    description:
      "A girl at her own little home-office desk — chair, drawers, monitor and all — tucked beneath an arching ZZ canopy, with a sleepy rabbit and two ducks paddling close by, framed by a soft blue picket fence.",
    story:
      "For the one who built a life she loves, one quiet corner at a time. A thoughtful gift for a new job, a new desk, or just a well-earned moment of calm.",
    basePrice: 1649,
    emoji: "🪴",
    gradient: "linear-gradient(135deg, #2D5040 0%, #C8D9C0 60%, #FEF7E4 100%)",
    image: "/images/catalogue/cozy-corner.png",
    images: [
      "/images/catalogue/cozy-corner.png",
      "/images/catalogue/cozy-corner-2.png",
      "/images/catalogue/cozy-corner-3.png",
      "/images/catalogue/cozy-corner-4.png",
    ],
    category: "Scene Planters",
    tags: ["her", "new-job", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. The ZZ plant is hardy and forgiving — avoid overwatering.",
    rating: 4.9,
    reviewCount: 4,
    isNew: true,
    variants: [
      { id: "12a", name: "As Shown", price: 1649, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "13",
    slug: "beachside-bash",
    title: "The Beachside Bash",
    tagline: "A Toast to Fifty Trips Around the Sun",
    description:
      "A milestone birthday scene by the sea — a boy relaxing beside a bonfire, a tiny boat, a lifebuoy, cake and wine, all set between two arching plants in a sea-glass blue scalloped bowl. The '50' is sculpted right in.",
    story:
      "Built for the big one — a parent's, grandparent's, or mentor's milestone birthday. A keepsake that says this chapter deserved a celebration, not just a card.",
    basePrice: 1749,
    emoji: "🎂",
    gradient: "linear-gradient(135deg, #6FA8A0 0%, #C8D9C0 60%, #FEF7E4 100%)",
    image: "/images/catalogue/beachside-bash.png",
    images: [
      "/images/catalogue/beachside-bash.png",
      "/images/catalogue/beachside-bash-2.png",
      "/images/catalogue/beachside-bash-3.png",
      "/images/catalogue/beachside-bash-4.png",
    ],
    category: "Scene Planters",
    tags: ["birthday", "milestone", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. Hardy foliage that's forgiving of the occasional missed watering.",
    rating: 5.0,
    reviewCount: 3,
    isNew: true,
    variants: [
      { id: "13a", name: "As Shown", price: 1749, attributes: {}, stock: 4 },
    ],
  },
];

export const CATEGORIES = ["All", "Scene Planters", "Spiritual", "Desk Planters", "Decor"];
