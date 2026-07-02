import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";

const BASE = process.env["NEXT_PUBLIC_APP_URL"] ?? "https://graciousgreens.in";

// Articles store display dates like "May 2026" — convert to ISO for schema.
const MONTHS: Record<string, string> = {
  january: "01", february: "02", march: "03", april: "04", may: "05", june: "06",
  july: "07", august: "08", september: "09", october: "10", november: "11", december: "12",
};
function toIsoDate(display: string): string {
  const [month, year] = display.toLowerCase().split(" ");
  const mm = (month && MONTHS[month]) || "01";
  return `${year ?? "2026"}-${mm}-01`;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // BlogPosting structured data — article rich results + brand authorship.
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${BASE}${article.image}`,
    url: `${BASE}/journal/${article.slug}`,
    datePublished: toIsoDate(article.date),
    author: { "@type": "Person", name: "Parul Jain" },
    publisher: {
      "@type": "Organization",
      name: "Gracious Greens",
      logo: { "@type": "ImageObject", url: `${BASE}/logo-mark.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/journal/${article.slug}` },
  };

  return (
    <div style={{ backgroundColor: "#FEF7E4", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "120px 24px 120px" }}>
        {/* Back link */}
        <Link
          href="/journal"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "13px",
            color: "#c2410c",
            textDecoration: "none",
            marginBottom: "28px",
          }}
        >
          ← Back to the Journal
        </Link>

        {/* Meta */}
        <div style={{ display: "flex", gap: "14px", marginBottom: "16px" }}>
          <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#c2410c" }}>
            {article.date}
          </span>
          <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "11px", color: "rgba(4,47,46,0.4)" }}>
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.18,
            letterSpacing: "-1px",
            color: "#042f2e",
            margin: "0 0 32px",
          }}
        >
          {article.title}
        </h1>

        {/* Hero image */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "40px",
            backgroundColor: "#a8bca1",
          }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Body */}
        <div className="article-body">
          {article.body.map((block, i) =>
            block.type === "h2" ? (
              <h2 key={i}>{block.text}</h2>
            ) : (
              <p key={i}>{block.text}</p>
            )
          )}
        </div>

        {/* Related links — contextual internal linking */}
        {article.related && article.related.length > 0 && (
          <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {article.related.map((r) => (
              <Link
                key={r.href + r.label}
                href={r.href}
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#042f2e",
                  textDecoration: "none",
                  border: "1px solid rgba(4,47,46,0.2)",
                  borderRadius: "50px",
                  padding: "10px 18px",
                }}
              >
                {r.label} →
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: "56px", paddingTop: "40px", borderTop: "1px solid rgba(4,47,46,0.1)", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "22px",
              color: "#042f2e",
              marginBottom: "20px",
            }}
          >
            Ready to tell your story in miniature?
          </p>
          <Link
            href="/shop"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              backgroundColor: "#c2410c",
              color: "#ffffff",
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              borderRadius: "50px",
              textDecoration: "none",
            }}
          >
            Browse the Collection
          </Link>
        </div>
      </article>

      <style>{`
        .article-body h2 {
          font-family: var(--font-playfair, 'Playfair Display', Georgia, serif);
          font-size: 24px;
          font-weight: 400;
          color: #042f2e;
          margin: 36px 0 14px;
          letter-spacing: -0.3px;
        }
        .article-body p {
          font-family: var(--font-geist-sans, 'Inter', sans-serif);
          font-size: 16.5px;
          line-height: 1.8;
          color: rgba(4,47,46,0.72);
          margin: 0 0 18px;
        }
      `}</style>
    </div>
  );
}
