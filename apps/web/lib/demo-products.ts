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
  {
    id: "14",
    slug: "bunnys-bundle",
    title: "The Bunny's Bundle",
    tagline: "A Little One, Tagging Along",
    description:
      "A papa rabbit carrying a carrot in one paw and a canvas sack in the other, with a baby bunny peeking out beside a live succulent tucked inside.",
    story:
      "For the ones who never travel light when family's involved. A sweet, gentle gift for a new parent, a housewarming, or anyone who carries their little ones everywhere.",
    basePrice: 699,
    emoji: "🐰",
    gradient: "linear-gradient(135deg, #D99A7E 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/bunnys-bundle.png",
    images: [
      "/images/catalogue/bunnys-bundle.png",
      "/images/catalogue/bunnys-bundle-2.png",
      "/images/catalogue/bunnys-bundle-3.png",
      "/images/catalogue/bunnys-bundle-4.png",
    ],
    category: "Desk Planters",
    tags: ["cheerful", "family", "desk"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. The succulent thrives on a little neglect.",
    rating: 4.8,
    reviewCount: 5,
    isNew: true,
    variants: [
      { id: "14a", name: "As Shown", price: 699, attributes: {}, stock: 10 },
    ],
  },
  {
    id: "15",
    slug: "rocking-chair-charlie",
    title: "Rocking Chair Charlie",
    tagline: "Just Sitting Pretty",
    description:
      "A round, smiling planter face lounges in a tiny wooden rocking chair, a cheerful succulent sprouting from the top of his head.",
    story:
      "Pure whimsy — the kind of gift that gets a laugh before it gets a home on the shelf. Perfect for a desk, a windowsill, or anyone who needs a reason to smile.",
    basePrice: 549,
    emoji: "🪑",
    gradient: "linear-gradient(135deg, #C8D9C0 0%, #FEF7E4 60%, #D4C5A9 100%)",
    image: "/images/catalogue/rocking-chair-charlie.png",
    images: [
      "/images/catalogue/rocking-chair-charlie.png",
      "/images/catalogue/rocking-chair-charlie-2.png",
      "/images/catalogue/rocking-chair-charlie-3.png",
      "/images/catalogue/rocking-chair-charlie-4.png",
    ],
    category: "Desk Planters",
    tags: ["cheerful", "desk", "whimsical"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. The succulent thrives on a little neglect.",
    rating: 4.7,
    reviewCount: 4,
    isNew: true,
    variants: [
      { id: "15a", name: "As Shown", price: 549, attributes: {}, stock: 10 },
    ],
  },
  {
    id: "16",
    slug: "sunhat-sadie",
    title: "Sunhat Sadie",
    tagline: "A Little Gardener at Work",
    description:
      "A little girl in a floral sun hat leans over a rustic stone-finish planter, ready to be filled with a small plant of your choosing.",
    story:
      "For anyone who finds joy in getting their hands a little dirty. A charming addition to a garden shelf, balcony, or reading nook.",
    basePrice: 649,
    emoji: "👧",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #D99A7E 100%)",
    image: "/images/catalogue/sunhat-sadie.png",
    images: [
      "/images/catalogue/sunhat-sadie.png",
      "/images/catalogue/sunhat-sadie-2.png",
      "/images/catalogue/sunhat-sadie-3.png",
      "/images/catalogue/sunhat-sadie-4.png",
    ],
    category: "Desk Planters",
    tags: ["cheerful", "desk", "gardener"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. Pairs well with a small succulent or trailing plant.",
    rating: 4.7,
    reviewCount: 3,
    isNew: true,
    variants: [
      { id: "16a", name: "As Shown", price: 649, attributes: {}, stock: 8 },
    ],
  },
  {
    id: "17",
    slug: "four-blessings",
    title: "The Four Blessings",
    tagline: "Four Little Monks, Four Little Wishes",
    description:
      "A set of four miniature Buddha figures, each robed in a different colour — yellow, gold, red, and blue — for luck, prosperity, joy, and calm.",
    story:
      "Each colour carries its own quiet wish. Line them up on a shelf, a desk, or gift the full set to someone who could use a little of each blessing.",
    basePrice: 399,
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #C77B58 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/four-blessings.png",
    images: [
      "/images/catalogue/four-blessings.png",
      "/images/catalogue/four-blessings-2.png",
      "/images/catalogue/four-blessings-3.png",
    ],
    category: "Spiritual",
    tags: ["zen", "decor", "set-of-4"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions: "Decorative resin set. Dust gently with a dry cloth.",
    rating: 4.8,
    reviewCount: 6,
    isNew: true,
    variants: [
      { id: "17a", name: "Set of 4", price: 399, attributes: {}, stock: 10 },
    ],
  },
  {
    id: "18",
    slug: "story-time-circle",
    title: "Story Time Circle",
    tagline: "Four Friends, One Good Book",
    description:
      "Four tiny raincoat-clad figures sit reading together on stacks of miniature books. A standalone decor set — no planter or moss bowl included.",
    story:
      "For the readers, the quiet afternoons, the friend groups that fall silent over a good book. A sweet, small addition to any shelf or existing scene.",
    basePrice: 299,
    emoji: "📚",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #C77B58 100%)",
    image: "/images/catalogue/story-time-circle.png",
    images: [
      "/images/catalogue/story-time-circle.png",
      "/images/catalogue/story-time-circle-2.png",
      "/images/catalogue/story-time-circle-3.png",
    ],
    category: "Decor",
    tags: ["decor", "set-of-4", "cheerful"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions: "Decorative resin set. Dust gently with a dry cloth.",
    rating: 4.7,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "18a", name: "Set of 4", price: 299, attributes: {}, stock: 10 },
    ],
  },
  {
    id: "19",
    slug: "garden-lantern-mini",
    title: "The Garden Lantern (Mini)",
    tagline: "A Small Glow, Right Where You Need It",
    description:
      "A compact solar-powered lantern light stake with a warm amber glow — perfect for lining a garden bed, balcony pot, or beside your favourite planter.",
    story:
      "Little light, big warmth. A thoughtful add-on gift or a simple way to bring evening charm to any green corner.",
    basePrice: 499,
    emoji: "🏮",
    gradient: "linear-gradient(135deg, #4A4642 0%, #C77B58 60%, #FEF7E4 100%)",
    image: "/images/catalogue/garden-lantern-mini.png",
    images: [
      "/images/catalogue/garden-lantern-mini.png",
      "/images/catalogue/garden-lantern-mini-2.png",
      "/images/catalogue/garden-lantern-mini-3.png",
    ],
    category: "Decor",
    tags: ["solar", "lights", "outdoor"],
    allowsCustomNote: false,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Solar powered — no plant care needed. Place where it gets 6–8 hours of direct sunlight to charge. Turns on automatically at dusk. Wipe the solar panel clean occasionally.",
    rating: 4.6,
    reviewCount: 3,
    isNew: true,
    variants: [
      { id: "19a", name: "As Shown", price: 499, attributes: {}, stock: 15 },
    ],
  },
  {
    id: "20",
    slug: "garden-lantern-classic",
    title: "The Garden Lantern (Classic)",
    tagline: "Timeless Light for the Garden",
    description:
      "A taller, classic-style solar lantern with warm glass panes and a soft flickering glow — a statement piece for gardens, balconies, and entryways.",
    story:
      "For the ones who like their gardens to glow after sundown. A beautiful standalone gift or the finishing touch to an existing collection.",
    basePrice: 499,
    emoji: "🏮",
    gradient: "linear-gradient(135deg, #2D2A26 0%, #D99A7E 60%, #FEF7E4 100%)",
    image: "/images/catalogue/garden-lantern-classic.png",
    images: [
      "/images/catalogue/garden-lantern-classic.png",
      "/images/catalogue/garden-lantern-classic-2.png",
      "/images/catalogue/garden-lantern-classic-3.png",
    ],
    category: "Decor",
    tags: ["solar", "lights", "outdoor"],
    allowsCustomNote: false,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Solar powered — no plant care needed. Place where it gets 6–8 hours of direct sunlight to charge. Turns on automatically at dusk. Wipe the solar panel clean occasionally.",
    rating: 4.7,
    reviewCount: 4,
    isNew: true,
    variants: [
      { id: "20a", name: "As Shown", price: 499, attributes: {}, stock: 12 },
    ],
  },
  {
    id: "21",
    slug: "squirrels-glow",
    title: "The Squirrel's Glow",
    tagline: "A Little Guardian for the Garden",
    description:
      "A solar-powered squirrel figure, acorn in hand, glowing softly on a garden stake — equal parts nightlight and cheerful lawn ornament.",
    story:
      "A little bit of charm for the garden after dark. A fun, easy gift for anyone who loves their outdoor space.",
    basePrice: 499,
    emoji: "🐿️",
    gradient: "linear-gradient(135deg, #2D5040 0%, #D99A7E 60%, #FEF7E4 100%)",
    image: "/images/catalogue/squirrels-glow.png",
    images: [
      "/images/catalogue/squirrels-glow.png",
      "/images/catalogue/squirrels-glow-2.png",
      "/images/catalogue/squirrels-glow-3.png",
      "/images/catalogue/squirrels-glow-4.png",
    ],
    category: "Decor",
    tags: ["solar", "lights", "outdoor"],
    allowsCustomNote: false,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Solar powered — no plant care needed. Place where it gets 6–8 hours of direct sunlight to charge. Turns on automatically at dusk. Wipe the solar panel clean occasionally.",
    rating: 4.6,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "21a", name: "As Shown", price: 499, attributes: {}, stock: 12 },
    ],
  },
  {
    id: "22",
    slug: "frogs-toadstool",
    title: "The Frog's Toadstool",
    tagline: "A Cozy Perch, Lit From Within",
    description:
      "A cheerful frog perched atop a glowing red-capped toadstool — a solar garden light stake with a fairytale charm.",
    story:
      "For the whimsical gardens and the ones who still believe in a little bit of magic after dark.",
    basePrice: 499,
    emoji: "🐸",
    gradient: "linear-gradient(135deg, #4A7856 0%, #C77B58 60%, #FEF7E4 100%)",
    image: "/images/catalogue/frogs-toadstool.png",
    images: [
      "/images/catalogue/frogs-toadstool.png",
      "/images/catalogue/frogs-toadstool-2.png",
    ],
    category: "Decor",
    tags: ["solar", "lights", "outdoor"],
    allowsCustomNote: false,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Solar powered — no plant care needed. Place where it gets 6–8 hours of direct sunlight to charge. Turns on automatically at dusk. Wipe the solar panel clean occasionally.",
    rating: 4.6,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "22a", name: "As Shown", price: 499, attributes: {}, stock: 12 },
    ],
  },
  {
    id: "23",
    slug: "mushroom-meadow-lights",
    title: "Mushroom Meadow Lights",
    tagline: "A Little Cluster of Glowing Caps",
    description:
      "A cluster of five glowing mushroom-cap solar lights on slender stems — a soft, magical accent for any garden bed or planter.",
    story:
      "Scatter a little wonder through the garden. A gentle glow that turns any green corner into something a bit more enchanted.",
    basePrice: 499,
    emoji: "🍄",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #4A7856 100%)",
    image: "/images/catalogue/mushroom-meadow-lights.png",
    images: [
      "/images/catalogue/mushroom-meadow-lights.png",
      "/images/catalogue/mushroom-meadow-lights-2.png",
    ],
    category: "Decor",
    tags: ["solar", "lights", "outdoor"],
    allowsCustomNote: false,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Solar powered — no plant care needed. Place where it gets 6–8 hours of direct sunlight to charge. Turns on automatically at dusk. Wipe the solar panel clean occasionally.",
    rating: 4.7,
    reviewCount: 3,
    isNew: true,
    variants: [
      { id: "23a", name: "As Shown", price: 499, attributes: {}, stock: 10 },
    ],
  },
  {
    id: "24",
    slug: "butterfly-garden-lights",
    title: "Butterfly Garden Lights",
    tagline: "Flowers, Wings, and Fairy Lights",
    description:
      "Pink daisies and perched butterflies woven through with warm fairy lights on a single solar-powered garden stake — the most delicate of the light collection.",
    story:
      "A pretty, gentle glow for a balcony, garden bed, or window box. Feels like fireflies caught mid-flight.",
    basePrice: 499,
    emoji: "🦋",
    gradient: "linear-gradient(135deg, #C77B58 0%, #FEF7E4 60%, #A8BCA1 100%)",
    image: "/images/catalogue/butterfly-garden-lights.png",
    images: [
      "/images/catalogue/butterfly-garden-lights.png",
      "/images/catalogue/butterfly-garden-lights-2.png",
      "/images/catalogue/butterfly-garden-lights-3.png",
      "/images/catalogue/butterfly-garden-lights-4.png",
    ],
    category: "Decor",
    tags: ["solar", "lights", "outdoor"],
    allowsCustomNote: false,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Solar powered — no plant care needed. Place where it gets 6–8 hours of direct sunlight to charge. Turns on automatically at dusk. Wipe the solar panel clean occasionally.",
    rating: 4.8,
    reviewCount: 3,
    isNew: true,
    variants: [
      { id: "24a", name: "As Shown", price: 499, attributes: {}, stock: 10 },
    ],
  },
];

export const CATEGORIES = ["All", "Scene Planters", "Spiritual", "Desk Planters", "Decor"];
