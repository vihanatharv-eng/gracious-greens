"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "The Family Garden", price: "₹899", image: "/images/product-calathea.jpg", category: "Family Scene", slug: "monstera-deliciosa" },
  { name: "The Couple's Nook", price: "₹799", image: "/images/product-succulent-1.jpg", category: "Couple Scene", slug: "succulent-trio-gift-set" },
  { name: "A Day at the Park", price: "₹999", image: "/images/product-cactus-1.jpg", category: "Occasion Scene", slug: "cactus-trio" },
  { name: "Corporate Gift Set", price: "₹1,499", image: "/images/product-gift-set.jpg", category: "Corporate", slug: "succulent-trio-gift-set" },
  { name: "Clean & Green", price: "₹1,199", image: "/images/product-collection.jpg", category: "Cause Scene", slug: "peace-lily" },
  { name: "Birthday Bloom", price: "₹699", image: "/images/product-succulent-2.jpg", category: "Celebration", slug: "pothos-golden-queen" },
];

export function FeaturedCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max > 0) setScrollProgress(el.scrollLeft / max);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="collections"
      style={{ position: "relative", width: "100%", backgroundColor: "#fffbeb", padding: "120px 0", overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ padding: "0 40px", marginBottom: "60px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", color: "#c2410c", marginBottom: "16px" }}>
            Our Creations
          </h3>
          <h2 style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: "clamp(40px, 4vw, 60px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-1.2px", color: "#042f2e" }}>
            Stories Told in Miniature
          </h2>
        </div>
        <Link
          href="/shop"
          style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#c2410c", textDecoration: "none", borderBottom: "1px solid #c2410c", paddingBottom: "4px" }}
        >
          View All
        </Link>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        style={{ display: "flex", gap: "24px", overflowX: "auto", padding: "20px 40px 60px 40px", scrollbarWidth: "none", scrollSnapType: "x mandatory", cursor: "grab" }}
      >
        {products.map((product, i) => (
          <Link
            key={i}
            href={`/shop/${product.slug}`}
            style={{ flex: "0 0 320px", scrollSnapAlign: "start", textDecoration: "none" }}
          >
            <div
              style={{ backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"; }}
            >
              <div style={{ position: "relative", width: "100%", height: "380px", overflow: "hidden" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  sizes="320px"
                />
              </div>
              <div style={{ padding: "20px" }}>
                <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1.5px", color: "#c2410c" }}>
                  {product.category}
                </span>
                <h4 style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)", fontSize: "22px", fontWeight: 400, lineHeight: 1.3, color: "#042f2e", marginTop: "8px", marginBottom: "8px" }}>
                  {product.name}
                </h4>
                <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "16px", fontWeight: 500, color: "#57534e" }}>
                  {product.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginTop: "20px" }}>
        <div style={{ width: "120px", height: "2px", backgroundColor: "rgba(4,47,46,0.15)", borderRadius: "1px", overflow: "hidden" }}>
          <div style={{ width: `${Math.max(15, scrollProgress * 100)}%`, height: "100%", backgroundColor: "#042f2e", borderRadius: "1px", transition: "width 0.2s ease" }} />
        </div>
        <span style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "12px", color: "#57534e", textTransform: "uppercase", letterSpacing: "1px" }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
