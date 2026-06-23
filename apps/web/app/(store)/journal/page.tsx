import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Ideas, inspiration, and behind-the-scenes stories from the Gracious Greens studio.",
};

export default function JournalPage() {
  return (
    <div style={{ backgroundColor: "#FEF7E4", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ padding: "140px 24px 60px", textAlign: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#c2410c",
          }}
        >
          The Journal
        </span>
        <h1
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-1.4px",
            color: "#042f2e",
            margin: "16px 0 20px",
          }}
        >
          Ideas, Inspo &amp; Behind the Scenes
        </h1>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(4,47,46,0.62)",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          Stories from the studio — how our scenes come to life, why they make
          such lasting gifts, and a little inspiration for your next one.
        </p>
      </section>

      {/* Article grid */}
      <section style={{ padding: "20px 24px 120px" }}>
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="journal-grid"
        >
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              style={{ textDecoration: "none", display: "block" }}
              className="journal-card"
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  borderRadius: "14px",
                  overflow: "hidden",
                  marginBottom: "18px",
                  backgroundColor: "#a8bca1",
                }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", gap: "14px", marginBottom: "10px" }}>
                <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#c2410c" }}>
                  {article.date}
                </span>
                <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "11px", color: "rgba(4,47,46,0.4)" }}>
                  {article.readTime}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: "#042f2e",
                  marginBottom: "10px",
                }}
              >
                {article.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
                  fontSize: "14.5px",
                  lineHeight: 1.65,
                  color: "rgba(4,47,46,0.6)",
                }}
              >
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .journal-card:hover h2 { color: #c2410c; }
        @media (max-width: 900px) {
          .journal-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .journal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
