// Journal articles. `body` is an ordered list of blocks rendered by the
// article detail page (/journal/[slug]). Keep content evergreen — no dated
// claims that go stale.

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
  body: ArticleBlock[];
  /** Contextual internal links rendered under the article body (SEO + discovery). */
  related?: { label: string; href: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "how-a-custom-scene-is-made",
    title: "How a Custom Scene Goes from Idea to Your Doorstep",
    excerpt:
      "From the first message to the final figurine placement — here's exactly how we build your story, step by step.",
    image: "/images/bg-journal-1.jpg",
    date: "May 2026",
    readTime: "5 min read",
    featured: true,
    body: [
      { type: "p", text: "Every Gracious Greens scene begins not with a plant, but with a story. Before we pick a single pebble, we want to know who it's for and what you're trying to say. Here's how a custom planter actually comes together." },
      { type: "h2", text: "1. You tell us the story" },
      { type: "p", text: "It might be a family of four, a couple's first home, a colleague's farewell, or a quiet meditation corner. You share the occasion and the little details — names, hobbies, an inside joke — and we note everything that could become a figurine or a prop." },
      { type: "h2", text: "2. We design the scene" },
      { type: "p", text: "We choose the bowl, the live plant, and the cast of tiny characters that bring your story to life, then share the plan with you before we begin. Nothing goes into production until you're happy with the direction." },
      { type: "h2", text: "3. It's built by hand" },
      { type: "p", text: "In our Palwal studio, the scene is assembled one piece at a time — moss laid, pebbles placed, figurines positioned, the live plant settled in. Because it's handmade, no two pieces are ever identical." },
      { type: "h2", text: "4. It arrives gift-ready" },
      { type: "p", text: "We pack each planter snugly to protect the ceramic and the plant in transit, add an optional handwritten note on a premium card, and send it on its way across Palwal, Delhi NCR, and beyond." },
      { type: "p", text: "The result isn't a product off a shelf — it's a tiny world built around someone you care about." },
    ],
    related: [
      { label: "Personalise a Scene", href: "/gifts/personalise" },
      { label: "Browse Scene Planters", href: "/shop?category=Scene+Planters" },
      { label: "Plant Care Guides", href: "/care-guides" },
    ],
  },
  {
    slug: "why-miniature-scenes-make-memorable-gifts",
    title: "Why Miniature Scenes Make the Most Memorable Gifts",
    excerpt:
      "Unlike flowers or sweets, a custom scene is something people keep, display, and talk about. Here's what makes them so special.",
    image: "/images/bg-journal-2.jpg",
    date: "April 2026",
    readTime: "3 min read",
    body: [
      { type: "p", text: "Most gifts are consumed and forgotten — flowers wilt within the week, sweets are gone by the weekend. A miniature scene planter is different. It sits on a shelf, a desk, a windowsill, quietly reminding someone of the person who gave it." },
      { type: "h2", text: "It tells a specific story" },
      { type: "p", text: "A generic gift says 'I had to get you something.' A scene built around the recipient — their family, their hobby, a shared memory — says 'I thought about you.' That specificity is what people remember." },
      { type: "h2", text: "It lasts" },
      { type: "p", text: "With a hardy plant like a ZZ or jade at its heart, a Gracious Greens scene needs very little to thrive. It grows slowly alongside the person who owns it, instead of fading away." },
      { type: "h2", text: "It starts conversations" },
      { type: "p", text: "Guests notice a tiny world inside a bowl. They lean in, they ask about it — and the owner gets to tell the story of who gave it and why. Few gifts keep giving like that." },
    ],
    related: [
      { label: "Shop the Collection", href: "/shop" },
      { label: "Personalise a Scene", href: "/gifts/personalise" },
      { label: "How a Custom Scene Is Made", href: "/journal/how-a-custom-scene-is-made" },
    ],
  },
  {
    slug: "corporate-gifting-reimagined",
    title: "Corporate Gifting, Reimagined",
    excerpt:
      "How brands and organisations are using personalised miniature scenes to leave a lasting impression on clients and teams.",
    image: "/images/philosophy-artisan.jpg",
    date: "March 2026",
    readTime: "4 min read",
    body: [
      { type: "p", text: "The standard corporate gift — a branded mug, a box of sweets, a generic hamper — rarely survives past the festive season. Forward-thinking teams are choosing something that actually gets kept." },
      { type: "h2", text: "Gifts that reflect your brand" },
      { type: "p", text: "A miniature scene can carry your colours, a tiny signboard with your message, or a theme tied to your industry. It's a desk-friendly piece that keeps your brand visible long after the gift is given." },
      { type: "h2", text: "Built to scale" },
      { type: "p", text: "Whether it's ten pieces for a leadership team or a few hundred for a client list, we plan production timelines around your event so everything arrives on time, packed and ready." },
      { type: "h2", text: "Thoughtful at any volume" },
      { type: "p", text: "Bulk doesn't have to mean impersonal. We can personalise within an order — a recipient's name on a card, small variations per team — so each person feels seen, even at scale." },
      { type: "p", text: "If you're planning corporate or bulk gifting, we'd love to help — reach out and we'll put together a plan." },
    ],
    related: [
      { label: "Corporate Gifting — Start an Enquiry", href: "/corporate" },
      { label: "Browse the Collection", href: "/shop" },
    ],
  },
  {
    slug: "plant-gift-ideas-for-every-occasion",
    title: "Plant Gift Ideas for Every Occasion",
    excerpt:
      "Birthday, housewarming, office desk, or just because — here's how to pick a miniature plant scene that actually fits the moment.",
    image: "/images/catalogue/family-picnic.png",
    date: "July 2026",
    readTime: "6 min read",
    body: [
      { type: "p", text: "Flowers wilt in a week. Chocolates are gone by the weekend. A miniature plant scene sits on a shelf for years, quietly doing what a good gift should do — reminding someone, every time they see it, of who gave it and why. The trick is picking the right scene for the occasion. Here's a starting point for the moments that come up most." },
      { type: "h2", text: "Birthdays" },
      { type: "p", text: "For a milestone birthday, a scene that marks the occasion directly makes the moment feel seen — something built around the celebration itself, not just \"a gift that happened to arrive on the day.\" For a lighter, everyday birthday, a cheerful desk planter does the job just as well: something with personality that'll make them smile every morning at their desk, long after the candles are blown out." },
      { type: "h2", text: "Housewarmings" },
      { type: "p", text: "A housewarming gift has one job: help a new place feel like home faster. A whimsical scene planter — a little gnome, a cluster of figures settling into a garden — works because it's decorative from day one, doesn't need furniture or wall space to shine, and brings a bit of green into a home that's probably still full of unpacked boxes." },
      { type: "h2", text: "For the Desk" },
      { type: "p", text: "Office desks are small, shared, and usually beige. A compact planter that also holds a pen or two, or a hardy little succulent perched on something charming, earns its spot without taking over the space. It's the rare desk gift that gets used daily instead of shoved in a drawer." },
      { type: "h2", text: "Couples & Anniversaries" },
      { type: "p", text: "For two people building a life together, a scene built around companionship — two figures under an arch of leaves, a pair perched side by side — says more than a card ever could. It's a gift you can point to years later and say, \"that was from our first year.\"" },
      { type: "h2", text: "New Job or a Big Congratulations" },
      { type: "p", text: "For a promotion, a new job, or someone stepping into their own space for the first time, a plant scene works as a quiet vote of confidence — something to keep on the new desk that says you're proud of them without making a big speech out of it. It also solves the awkward problem of gifting someone who's about to move office or house and doesn't need more \"stuff\" — a living piece earns its keep instead of sitting in a box." },
      { type: "h2", text: "Corporate & Bulk Gifting" },
      { type: "p", text: "If you're gifting a team, a client list, or an entire office, the calculus changes slightly — you want something that photographs well, ships reliably at volume, and still feels personal even when it's going out fifty times over. That's its own category, and worth reading up on separately if it's what you're planning." },
      { type: "h2", text: "Just Because" },
      { type: "p", text: "Some of the best gifts don't have an occasion attached at all. A quiet, charming little piece — nothing showy, just something that says \"I saw this and thought of you\" — often lands harder than anything tied to a calendar date." },
      { type: "h2", text: "Why a Plant Scene Instead of Flowers" },
      { type: "p", text: "Flowers say the right thing for exactly one week. A miniature scene says it for years — it doesn't need replacing, it doesn't leave petals on the table, and it actually grows alongside the relationship it was given for. It costs roughly the same as a good bouquet once you account for how many bouquets you'd otherwise be sending over the years, and it comes with a story built in instead of being generic by design." },
      { type: "h2", text: "What to Look For" },
      { type: "p", text: "A good gift plant should be genuinely low-maintenance — nobody wants to hand someone a chore. Hardy varieties like ZZ plants, jade, and aglaonema are nearly impossible to kill by accident, which means the gift stays alive (and the goodwill stays intact) even if the recipient forgets to water it for a couple of weeks. Every piece we make lists exactly what it needs, so there's no guesswork on either end." },
      { type: "h2", text: "How to Choose" },
      { type: "p", text: "If you're stuck, start with the person, not the plant. Are they sentimental (a scene that tells a specific story), practical (something for their desk that earns its space), or just someone who deserves a small, unexpected bit of joy? Every piece in our collection can also be personalised with a handwritten note, so even an \"off the shelf\" pick ends up feeling made for them." },
    ],
    related: [
      { label: "Browse the Full Collection", href: "/shop" },
      { label: "Personalise a Scene", href: "/gifts/personalise" },
      { label: "Corporate Gifting, Reimagined", href: "/journal/corporate-gifting-reimagined" },
      { label: "Plant Care Guides", href: "/care-guides" },
    ],
  },
  {
    slug: "raksha-bandhan-gift-ideas",
    title: "Raksha Bandhan Gift Ideas That Aren't Sweets or Sarees",
    excerpt:
      "Skip the usual box of mithai — a miniature scene planter is a Rakhi gift your sibling will actually keep on their desk all year.",
    image: "/images/catalogue/bunnys-bundle.png",
    date: "July 2026",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Every Raksha Bandhan, the gifting formula repeats itself: a box of mithai, maybe a gift card, something that's gone or forgotten within a month. It's not that these gifts are wrong — it's that they rarely last long enough to remind your sibling of the day itself. A living plant scene does something different: it sits on their desk or windowsill for years, a small, growing reminder of the bond behind it." },
      { type: "h2", text: "Why a Plant Scene Works for Rakhi" },
      { type: "p", text: "Siblinghood is about looking out for each other — the older one carrying the younger one, the constant needling and the constant loyalty underneath it. A lot of our pieces are, almost accidentally, built around exactly that theme: a bigger figure watching over a smaller one, a pair standing side by side. It's easy to find a piece that says \"this is us\" without having to explain it." },
      { type: "h2", text: "For a Sibling Who Works From a Desk" },
      { type: "p", text: "If your sibling spends their day at a laptop, a compact desk planter is the gift that actually gets used — something small enough to sit next to the keyboard, cheerful enough to notice on a bad day. It's a Rakhi gift that isn't just unwrapped and put away; it becomes part of their everyday view." },
      { type: "h2", text: "For the Sibling Who Has Everything" },
      { type: "p", text: "Some siblings are impossible to shop for — they already own what they need and don't ask for much. For them, skip practicality altogether and go for something purely charming: a whimsical little figure, a small decor piece with personality. The point isn't utility, it's that it made you think of them specifically." },
      { type: "h2", text: "For a Big Rakhi — Gifting the Whole Cousin Crew" },
      { type: "p", text: "If Raksha Bandhan in your family means a house full of cousins, not just one sibling, a matching set works well — something with multiple identical pieces so everyone gets their own without anyone feeling like an afterthought. We can also help coordinate slightly larger orders if you're gifting a bigger group at once." },
      { type: "h2", text: "For the Sibling Who Lives Far Away" },
      { type: "p", text: "Distance is the part of Raksha Bandhan that's hardest to fix with a gift — you can't tie the rakhi yourself, so the gift ends up carrying a little more of the sentiment than usual. Because everything ships pan-India, this works well for the sibling who's moved cities for work or study: it arrives at their door looking exactly as considered as if you'd handed it over in person, note card included." },
      { type: "h2", text: "Budget-Friendly Options" },
      { type: "p", text: "Raksha Bandhan gifting often means buying for more than one person — a sibling, their partner, sometimes their kids too — and costs add up fast. Our smaller decor pieces and single figurine planters are built for exactly this: thoughtful without needing every gift to be the showstopper. Save the bigger scene planters for the sibling who's just had a milestone year." },
      { type: "h2", text: "A Note on Timing" },
      { type: "p", text: "Every piece is handmade to order, so it's worth reaching out with a bit of lead time rather than the night before — that way there's room for a personalised note card, and for us to make sure it reaches your sibling before the actual day, wherever in India they are." },
      { type: "p", text: "However you're celebrating this year, the best Rakhi gifts are the ones that stick around — not just for the day, but for the years after it." },
    ],
    related: [
      { label: "Browse the Collection", href: "/shop" },
      { label: "Shop Desk Planters", href: "/shop?category=Desk+Planters" },
      { label: "Personalise a Scene", href: "/gifts/personalise" },
      { label: "Plant Gift Ideas for Every Occasion", href: "/journal/plant-gift-ideas-for-every-occasion" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
