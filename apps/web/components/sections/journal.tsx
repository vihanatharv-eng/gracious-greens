"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: "How to Care for Your Miniature Succulent",
    excerpt: "A comprehensive guide to keeping your tiny garden thriving — from watering schedules to light requirements.",
    image: "/images/bg-journal-1.jpg",
    date: "May 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "The Perfect Gift for Any Occasion",
    excerpt: "Why miniature plants make the most thoughtful and lasting gifts for the people you love.",
    image: "/images/bg-journal-2.jpg",
    date: "April 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    title: "Building Your First Terrarium",
    excerpt: "Step-by-step instructions for creating a closed ecosystem that brings a touch of nature indoors.",
    image: "/images/philosophy-artisan.jpg",
    date: "March 2026",
    readTime: "7 min read",
    featured: false,
  },
];

export function Journal() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      Array.from(cardsRef.current.children).forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journal"
      ref={sectionRef}
      style={{ position: "relative", width: "100%", backgroundColor: "#042f2e", padding: "120px 40px" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", color: "#c2410c", marginBottom: "16px" }}>
              The Journal
            </h3>
            <h2 style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: "clamp(40px, 4vw, 60px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-1.2px", color: "#fffbeb" }}>
              Stories from the Greenhouse
            </h2>
          </div>
          <Link
            href="/journal"
            style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#fffbeb", textDecoration: "none", borderBottom: "1px solid rgba(255,251,235,0.4)", paddingBottom: "4px" }}
          >
            All Articles
          </Link>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gridTemplateRows: "repeat(2, 300px)", gap: "24px" }}
        >
          {articles.map((article, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                gridColumn: i === 0 ? "1 / 2" : "auto",
                gridRow: i === 0 ? "1 / 3" : "auto",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.05)";
                const ov = e.currentTarget.querySelector<HTMLElement>(".jnl-overlay");
                if (ov) ov.style.background = "linear-gradient(to top, rgba(4,47,46,0.85), rgba(4,47,46,0.2))";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
                const ov = e.currentTarget.querySelector<HTMLElement>(".jnl-overlay");
                if (ov) ov.style.background = "linear-gradient(to top, rgba(4,47,46,0.75), rgba(4,47,46,0.1))";
              }}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="jnl-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,47,46,0.75), rgba(4,47,46,0.1))", transition: "background 0.4s ease" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, padding: i === 0 ? "40px" : "28px", zIndex: 2 }}>
                <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
                  <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,251,235,0.6)" }}>
                    {article.date}
                  </span>
                  <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "12px", color: "rgba(255,251,235,0.6)" }}>
                    {article.readTime}
                  </span>
                </div>
                <h4 style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: i === 0 ? "32px" : "22px", fontWeight: 400, lineHeight: 1.3, color: "#fffbeb", marginBottom: "8px" }}>
                  {article.title}
                </h4>
                <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", lineHeight: 1.6, color: "rgba(255,251,235,0.7)", maxWidth: "400px" }}>
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
