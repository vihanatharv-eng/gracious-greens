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
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
