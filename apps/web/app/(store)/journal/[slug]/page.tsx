import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";

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

  return (
    <div style={{ backgroundColor: "#FEF7E4", minHeight: "100vh" }}>
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
