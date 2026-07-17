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
    basePrice: 249,
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
      { id: "8a", name: "Single Owl", price: 249, attributes: {}, stock: 12 },
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
    basePrice: 399,
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
      { id: "9a", name: "Pair", price: 399, attributes: {}, stock: 9 },
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
    category: "Decor",
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
  {
    id: "25",
    slug: "sunny-swings-by",
    title: "Sunny Swings By",
    tagline: "A Little Swing, A Little Sunshine",
    description:
      "The same cheerful smiling planter, now on a hand-finished wooden swing suspended from twine — a trailing succulent spilling over the top. Hangs by a hook or sits on any shelf edge.",
    story:
      "For the windows that need a little more light, and the desks that need a little more joy. Hang it by a sunny window and watch it sway.",
    basePrice: 449,
    emoji: "🌞",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #D4C5A9 100%)",
    image: "/images/catalogue/sunny-swings-by.png",
    images: [
      "/images/catalogue/sunny-swings-by.png",
      "/images/catalogue/sunny-swings-by-2.png",
      "/images/catalogue/sunny-swings-by-3.png",
    ],
    category: "Desk Planters",
    tags: ["cheerful", "hanging", "whimsical"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. The trailing succulent thrives on a little neglect.",
    rating: 4.7,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "25a", name: "As Shown", price: 449, attributes: {}, stock: 8 },
    ],
  },
  {
    id: "26",
    slug: "bashful-blossom",
    title: "Bashful Blossom",
    tagline: "Shy, Sweet, and Blooming",
    description:
      "A blushing girl in a flower crown, eyes closed and hand at her mouth, with a lush succulent spilling out like hair. A quiet, charming little planter for a desk or windowsill.",
    story:
      "For the quiet ones, the gentle ones, the ones who bloom in their own time. A sweet gift for a friend, a birthday, or just because.",
    basePrice: 299,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #C8D9C0 100%)",
    image: "/images/catalogue/bashful-blossom.png",
    images: [
      "/images/catalogue/bashful-blossom.png",
      "/images/catalogue/bashful-blossom-2.png",
      "/images/catalogue/bashful-blossom-3.png",
    ],
    category: "Desk Planters",
    tags: ["cheerful", "desk", "gift"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. The succulent thrives on a little neglect.",
    rating: 4.7,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "26a", name: "As Shown", price: 299, attributes: {}, stock: 8 },
    ],
  },
  {
    id: "27",
    slug: "fairy-hollow",
    title: "The Fairy Hollow",
    tagline: "Where Fairies Come Out to Play",
    description:
      "A blooming desert rose bonsai rises over a tiny stone bridge, two fairies at rest beside a trickling fountain, with rabbits, mushrooms, and a duck pond tucked into the moss below. A whole fairytale in one bowl.",
    story:
      "For the ones who still believe in a little magic — a birthday, a new home, or just because someone in your life deserves their own tiny wonderland.",
    basePrice: 1999,
    emoji: "🧚",
    gradient: "linear-gradient(135deg, #C8D9C0 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/fairy-hollow.jpg",
    images: [
      "/images/catalogue/fairy-hollow.jpg",
      "/images/catalogue/fairy-hollow-2.jpg",
      "/images/catalogue/fairy-hollow-3.jpg",
    ],
    category: "Scene Planters",
    tags: ["fairy garden", "custom", "whimsical"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "moderate",
    careInstructions:
      "Water sparingly — let the soil dry out fully between waterings. Bright, direct sunlight for a few hours daily. The desert rose (Adenium) is succulent-rooted; overwatering is the main risk.",
    rating: 4.8,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "27a", name: "As Shown", price: 1999, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "28",
    slug: "golden-chapter",
    title: "The Golden Chapter",
    tagline: "Cheers to the Next Best Part",
    description:
      "A retirement scene built for someone starting their favorite chapter yet — a couple on a bench, rabbits at play, and a duck pond, with a snake plant standing tall overhead and a 'Happy Retirement' sign completing the tribute.",
    story:
      "For the colleague, parent, or mentor stepping into a well-earned slower pace — a gift that says the best part of the story is just beginning.",
    basePrice: 1299,
    emoji: "🎉",
    gradient: "linear-gradient(135deg, #D4C5A9 0%, #C77B58 60%, #FEF7E4 100%)",
    image: "/images/catalogue/golden-chapter.jpg",
    images: [
      "/images/catalogue/golden-chapter.jpg",
      "/images/catalogue/golden-chapter-2.jpg",
      "/images/catalogue/golden-chapter-3.jpg",
    ],
    category: "Scene Planters",
    tags: ["retirement", "custom", "office gift"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. Snake plant (Sansevieria) is nearly indestructible and thrives on neglect.",
    rating: 4.7,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "28a", name: "As Shown", price: 1299, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "29",
    slug: "serenity-grove",
    title: "Serenity Grove",
    tagline: "A Quiet Corner of Calm",
    description:
      "A meditating white Buddha rests beneath a rising ZZ plant, framed by a golden picket fence and scattered mushrooms, in a rustic stone-textured bowl. Stillness, in miniature.",
    story:
      "For the desk that needs a breath of calm, or a friend who could use a gentle reminder to slow down.",
    basePrice: 1799,
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #4A4642 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/serenity-grove.jpg",
    images: [
      "/images/catalogue/serenity-grove.jpg",
      "/images/catalogue/serenity-grove-2.jpg",
      "/images/catalogue/serenity-grove-3.jpg",
    ],
    category: "Spiritual",
    tags: ["buddha", "zen", "desk"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. The ZZ plant is hardy and forgiving — avoid overwatering.",
    rating: 4.8,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "29a", name: "As Shown", price: 1799, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "30",
    slug: "buddhas-retreat",
    title: "Buddha's Retreat",
    tagline: "Peace, Framed in Green",
    description:
      "A serene white Buddha sits in quiet meditation beside a graceful umbrella plant, enclosed by a white picket fence in a glossy teal-glazed bowl.",
    story:
      "A gift for anyone building a calmer corner of their home — or a thank-you that says 'take a moment for yourself.'",
    basePrice: 999,
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #6FA8A0 0%, #C8D9C0 60%, #FEF7E4 100%)",
    image: "/images/catalogue/buddhas-retreat.jpg",
    images: [
      "/images/catalogue/buddhas-retreat.jpg",
      "/images/catalogue/buddhas-retreat-2.jpg",
      "/images/catalogue/buddhas-retreat-3.jpg",
    ],
    category: "Spiritual",
    tags: ["buddha", "zen", "gift"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. Umbrella plant (Schefflera) is forgiving and adapts well indoors.",
    rating: 4.7,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "30a", name: "As Shown", price: 999, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "31",
    slug: "little-beetle",
    title: "The Little Beetle",
    tagline: "A Tiny Car, A Little Green",
    description:
      "A cheerful vintage Beetle-shaped planter with a perky succulent and a painted bird riding along on the roof. Pick your color — sunny yellow or classic navy.",
    story:
      "A playful desk companion for the car lover, the road-tripper, or anyone who could use a little joy parked on their desk.",
    basePrice: 399,
    emoji: "🚗",
    gradient: "linear-gradient(135deg, #2D2A26 0%, #D99A7E 60%, #FEF7E4 100%)",
    image: "/images/catalogue/little-beetle.jpg",
    images: [
      "/images/catalogue/little-beetle.jpg",
      "/images/catalogue/little-beetle-2.jpg",
      "/images/catalogue/little-beetle-3.jpg",
      "/images/catalogue/little-beetle-4.jpg",
    ],
    category: "Desk Planters",
    tags: ["succulent", "desk", "novelty"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. The succulent thrives on a little neglect.",
    rating: 4.6,
    reviewCount: 3,
    isNew: true,
    variants: [
      { id: "31a", name: "Navy Blue", price: 399, attributes: { pot: "Navy Blue" }, stock: 8 },
      { id: "31b", name: "Yellow", price: 399, attributes: { pot: "Yellow" }, stock: 8 },
    ],
  },
  {
    id: "32",
    slug: "forever-yes",
    title: "Forever Yes",
    tagline: "The Moment Before 'Yes'",
    description:
      "A kneeling proposal scene beneath a blooming rose bush — a tiny cottage, a red bench, and a 'Congratulations' card set in a granite-textured bowl on a carved wooden base.",
    story:
      "For the proposal that just happened, the engagement about to be announced, or the couple celebrating their own 'yes' story.",
    basePrice: 1499,
    emoji: "💍",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #C77B58 100%)",
    image: "/images/catalogue/forever-yes.jpg",
    images: [
      "/images/catalogue/forever-yes.jpg",
      "/images/catalogue/forever-yes-2.jpg",
      "/images/catalogue/forever-yes-3.jpg",
    ],
    category: "Scene Planters",
    tags: ["proposal", "engagement", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "moderate",
    careInstructions:
      "Water every 2–3 days, keeping soil consistently moist. Needs bright, direct sunlight for blooms to last — the fussiest plant in our catalogue, but worth it for the flowers.",
    rating: 4.9,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "32a", name: "As Shown", price: 1499, attributes: {}, stock: 4 },
    ],
  },
  {
    id: "33",
    slug: "woodland-perch",
    title: "The Woodland Perch",
    tagline: "A Little Forest, Elevated",
    description:
      "A flowering desert rose bonsai stands over a cluster of echeveria succulents, a curious squirrel and owl watching from the pebbles — all raised on a hand-painted terracotta pedestal.",
    story:
      "A statement piece for a console table or entryway — equal parts garden and sculpture.",
    basePrice: 1999,
    emoji: "🐿️",
    gradient: "linear-gradient(135deg, #2D5040 0%, #D99A7E 60%, #FEF7E4 100%)",
    image: "/images/catalogue/woodland-perch.jpg",
    images: [
      "/images/catalogue/woodland-perch.jpg",
      "/images/catalogue/woodland-perch-2.jpg",
      "/images/catalogue/woodland-perch-3.jpg",
      "/images/catalogue/woodland-perch-4.jpg",
    ],
    category: "Decor",
    tags: ["succulent", "pedestal", "decor"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "moderate",
    careInstructions:
      "Water the succulents once the soil is fully dry; the desert rose needs slightly less. Bright, direct sunlight for a few hours daily.",
    rating: 4.8,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "33a", name: "As Shown", price: 1999, attributes: {}, stock: 4 },
    ],
  },
  {
    id: "34",
    slug: "coffee-break-garden",
    title: "The Coffee Break Garden",
    tagline: "Take Five, Little One",
    description:
      "A tiny work-from-home scene — laptop, coffee cup, and a stack of books — tucked beside a blooming kalanchoe in a hand-painted teacup planter.",
    story:
      "For the colleague who never takes a break, the new WFH setup, or anyone who deserves a five-minute breather at their desk.",
    basePrice: 899,
    emoji: "☕",
    gradient: "linear-gradient(135deg, #D99A7E 0%, #FEF7E4 60%, #A8BCA1 100%)",
    image: "/images/catalogue/coffee-break-garden.jpg",
    images: [
      "/images/catalogue/coffee-break-garden.jpg",
      "/images/catalogue/coffee-break-garden-2.jpg",
      "/images/catalogue/coffee-break-garden-3.jpg",
    ],
    category: "Desk Planters",
    tags: ["work from home", "desk", "gift"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. Kalanchoe blooms best with a few hours of direct sun.",
    rating: 4.6,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "34a", name: "As Shown", price: 899, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "35",
    slug: "anniversary-cottage",
    title: "The Anniversary Cottage",
    tagline: "Still Choosing Each Other",
    description:
      "A proposal scene with a pink cottage, a blue garden bench, and a duck pond, framed by a snake plant reaching up behind a 'Happy Anniversary' sign.",
    story:
      "For the couple who still remember the moment they said yes — every year, all over again.",
    basePrice: 999,
    emoji: "💕",
    gradient: "linear-gradient(135deg, #8B6F47 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/anniversary-cottage.jpg",
    images: [
      "/images/catalogue/anniversary-cottage.jpg",
      "/images/catalogue/anniversary-cottage-2.jpg",
      "/images/catalogue/anniversary-cottage-3.jpg",
    ],
    category: "Scene Planters",
    tags: ["anniversary", "custom", "couple"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water lightly every 1–2 weeks. Bright, indirect light. Snake plant (Sansevieria) is nearly indestructible and thrives on neglect.",
    rating: 4.7,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "35a", name: "As Shown", price: 999, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "36",
    slug: "poolside-getaway",
    title: "The Poolside Getaway",
    tagline: "Just the Two of Us",
    description:
      "A couple relaxes poolside beneath a cherry blossom tree and a striped umbrella, ducks paddling in a tiny pool, all set beneath a vivid aglaonema — raised on a hand-painted pedestal.",
    story:
      "A miniature holiday for the couple who need a reminder to slow down and enjoy each other.",
    basePrice: 1999,
    emoji: "🏖️",
    gradient: "linear-gradient(135deg, #C77B58 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/poolside-getaway.jpg",
    images: [
      "/images/catalogue/poolside-getaway.jpg",
      "/images/catalogue/poolside-getaway-2.jpg",
    ],
    category: "Scene Planters",
    tags: ["anniversary", "couple", "pedestal"],
    allowsCustomNote: true,
    allowsCustomImage: true,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Keep soil lightly moist. Indirect light. Aglaonema is low-maintenance and tolerates shade well.",
    rating: 4.8,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "36a", name: "As Shown", price: 1999, attributes: {}, stock: 4 },
    ],
  },
  {
    id: "37",
    slug: "ganeshas-grace",
    title: "Ganesha's Grace",
    tagline: "A Blessing for New Beginnings",
    description:
      "A hand-painted Ganesha idol sits beside a trailing money plant in a heart-shaped textured stone bowl — a gentle blessing for any new start.",
    story:
      "For a housewarming, a new venture, a festival, or any beginning that deserves a little grace.",
    basePrice: 899,
    emoji: "🙏",
    gradient: "linear-gradient(135deg, #C8D9C0 0%, #FEF7E4 60%, #D4C5A9 100%)",
    image: "/images/catalogue/ganeshas-grace.jpg",
    images: [
      "/images/catalogue/ganeshas-grace.jpg",
      "/images/catalogue/ganeshas-grace-2.jpg",
      "/images/catalogue/ganeshas-grace-3.jpg",
      "/images/catalogue/ganeshas-grace-4.jpg",
    ],
    category: "Spiritual",
    tags: ["ganesha", "housewarming", "festive"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water when the top soil feels dry. Bright, indirect light. Pothos is nearly indestructible and thrives on a little neglect.",
    rating: 4.8,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "37a", name: "As Shown", price: 899, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "38",
    slug: "diwali-duo",
    title: "The Diwali Duo",
    tagline: "Double the Light, Double the Joy",
    description:
      "Twin syngonium plants flank a meditating white Buddha in a rustic wooden oval tray, with 'Happy Diwali' carved into the front — a festive centerpiece for the season of light.",
    story:
      "For the Diwali gift list that wants to feel a little different this year — client, colleague, or family.",
    basePrice: 899,
    emoji: "🪔",
    gradient: "linear-gradient(135deg, #4A7856 0%, #C77B58 60%, #FEF7E4 100%)",
    image: "/images/catalogue/diwali-duo.jpg",
    images: [
      "/images/catalogue/diwali-duo.jpg",
      "/images/catalogue/diwali-duo-2.jpg",
      "/images/catalogue/diwali-duo-3.jpg",
      "/images/catalogue/diwali-duo-4.jpg",
    ],
    category: "Spiritual",
    tags: ["diwali", "festive", "corporate gifting"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Keep soil lightly moist. Indirect light. Syngonium is low-maintenance and adapts well indoors.",
    rating: 4.7,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "38a", name: "As Shown", price: 899, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "39",
    slug: "little-monks-garden",
    title: "The Little Monks' Garden",
    tagline: "Three Little Monks, One Big Calm",
    description:
      "Three giggling baby monk figurines sit in quiet meditation beneath a vivid coleus plant, framed by a blue picket fence in a deep drip-glazed bowl.",
    story:
      "A playful dose of calm for anyone's desk — or a sweet way to say thank you.",
    basePrice: 899,
    emoji: "🧘",
    gradient: "linear-gradient(135deg, #2D5040 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/little-monks-garden.jpg",
    images: [
      "/images/catalogue/little-monks-garden.jpg",
      "/images/catalogue/little-monks-garden-2.jpg",
      "/images/catalogue/little-monks-garden-3.jpg",
    ],
    category: "Spiritual",
    tags: ["buddha", "zen", "gift"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "moderate",
    careInstructions:
      "Keep soil consistently moist — coleus wilts quickly if it dries out. Bright, indirect light; avoid harsh direct sun, which can scorch the leaves.",
    rating: 4.7,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "39a", name: "As Shown", price: 899, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "40",
    slug: "gratitude-garden",
    title: "The Gratitude Garden",
    tagline: "A Little 'Thank You', Grown",
    description:
      "A blooming red desert rose arches over a meditating Buddha, with 'Thank You' spelled out in moss beside a scattering of mushrooms in a hexagonal stone bowl.",
    story:
      "For the mentor, the helper, the person who went out of their way — say it with something that keeps growing.",
    basePrice: 1999,
    emoji: "🙏",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #4A7856 100%)",
    image: "/images/catalogue/gratitude-garden.jpg",
    images: [
      "/images/catalogue/gratitude-garden.jpg",
      "/images/catalogue/gratitude-garden-2.jpg",
      "/images/catalogue/gratitude-garden-3.jpg",
    ],
    category: "Spiritual",
    tags: ["thank you", "buddha", "gift"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "moderate",
    careInstructions:
      "Water sparingly — let the soil dry out fully between waterings. Bright, direct sunlight for a few hours daily. The desert rose (Adenium) is succulent-rooted; overwatering is the main risk.",
    rating: 4.8,
    reviewCount: 2,
    isNew: true,
    variants: [
      { id: "40a", name: "As Shown", price: 1999, attributes: {}, stock: 5 },
    ],
  },
  {
    id: "41",
    slug: "daadus-garden",
    title: "Daadu's Garden",
    tagline: "Happy Birthday, Daadu",
    description:
      "A grandfather figure reads on a bench beside his little yellow scooter, chickens pecking nearby, with a personalized 'Happy Birthday' sign beneath a striking zebra haworthia — all in a hand-painted teacup planter.",
    story:
      "A birthday tribute for the grandfather who's seen it all — customizable with your family's own message on the sign.",
    basePrice: 849,
    emoji: "🎂",
    gradient: "linear-gradient(135deg, #6FA8A0 0%, #FEF7E4 60%, #D4C5A9 100%)",
    image: "/images/catalogue/daadus-garden.jpg",
    images: [
      "/images/catalogue/daadus-garden.jpg",
      "/images/catalogue/daadus-garden-2.jpg",
      "/images/catalogue/daadus-garden-3.jpg",
    ],
    category: "Scene Planters",
    tags: ["birthday", "grandparent", "custom"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "Water sparingly — let the soil dry out between waterings. Bright, direct light. Haworthia is a hardy succulent and thrives on neglect.",
    rating: 4.7,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "41a", name: "As Shown", price: 849, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "42",
    slug: "golden-antler-pair",
    title: "The Golden Antler Pair",
    tagline: "Grace, Caught Mid-Leap",
    description:
      "A pair of ceramic deer in gleaming gold-tipped antlers — one at rest in a perfect round frame, one leaping through an open oval. A quiet study in elegance for any shelf or console.",
    story:
      "For the home that loves a touch of quiet luxury — a housewarming, an anniversary, or a shelf that's been waiting for something special.",
    basePrice: 1799,
    emoji: "🦌",
    gradient: "linear-gradient(135deg, #A8BCA1 0%, #FEF7E4 60%, #6FA8A0 100%)",
    image: "/images/catalogue/golden-antler-pair.jpg",
    images: [
      "/images/catalogue/golden-antler-pair.jpg",
      "/images/catalogue/golden-antler-pair-2.jpg",
      "/images/catalogue/golden-antler-pair-3.jpg",
    ],
    category: "Decor",
    tags: ["decor", "ceramic", "housewarming"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "No plant care needed — a ceramic decor set. Dust gently with a dry cloth; avoid abrasive cleaners on the gold detailing.",
    rating: 4.8,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "42a", name: "Set of 2", price: 1799, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "43",
    slug: "royal-elephant-pair",
    title: "The Royal Elephant Pair",
    tagline: "Strength, Dressed in Gold",
    description:
      "A duo of resin elephants in regal gold mirror-work saddles, trunks raised high — a traditional symbol of good luck and prosperity, in two sizes.",
    story:
      "A blessing for a new home, a new business, or someone who could use a little extra fortune — trunks up, always.",
    basePrice: 1699,
    emoji: "🐘",
    gradient: "linear-gradient(135deg, #2D2A26 0%, #D99A7E 60%, #FEF7E4 100%)",
    image: "/images/catalogue/royal-elephant-pair.jpg",
    images: [
      "/images/catalogue/royal-elephant-pair.jpg",
      "/images/catalogue/royal-elephant-pair-2.jpg",
    ],
    category: "Decor",
    tags: ["decor", "prosperity", "housewarming"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "No plant care needed — a resin decor set. Dust gently with a dry, soft cloth.",
    rating: 4.8,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "43a", name: "Set of 2", price: 1699, attributes: {}, stock: 6 },
    ],
  },
  {
    id: "44",
    slug: "home-tweet-home",
    title: "Home Tweet Home",
    tagline: "Where the Birds Have Settled In",
    description:
      "A hand-finished resin 'HOME' sculpture, four little birds perched along the leafy lettering, set on a textured stone-effect base. A warm little statement for any shelf or entryway.",
    story:
      "For the new address, the housewarming, or a home that just deserves to say so out loud.",
    basePrice: 999,
    emoji: "🏡",
    gradient: "linear-gradient(135deg, #4A7856 0%, #A8BCA1 60%, #FEF7E4 100%)",
    image: "/images/catalogue/home-tweet-home.jpg",
    images: [
      "/images/catalogue/home-tweet-home.jpg",
      "/images/catalogue/home-tweet-home-2.jpg",
    ],
    category: "Decor",
    tags: ["decor", "housewarming", "birds"],
    allowsCustomNote: true,
    allowsCustomImage: false,
    allowsEngraving: false,
    careLevel: "easy",
    careInstructions:
      "No plant care needed — a resin decor piece. Dust gently with a dry, soft cloth.",
    rating: 4.7,
    reviewCount: 1,
    isNew: true,
    variants: [
      { id: "44a", name: "As Shown", price: 999, attributes: {}, stock: 6 },
    ],
  },
];

export const CATEGORIES = ["All", "Scene Planters", "Spiritual", "Desk Planters", "Decor"];
