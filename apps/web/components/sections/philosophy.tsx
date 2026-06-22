"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Your Vision, Our Hands",
    description:
      "Tell us the story you want to tell — a family portrait, a milestone, a message — and we build it, figurine by figurine, prop by prop.",
    image: "/images/philosophy-artisan.jpg",
  },
  {
    title: "Every Detail Is Intentional",
    description:
      "From tiny ceramic children to handpainted animals and custom signage, every element in your scene is chosen to carry meaning. Nothing is decorative by accident.",
    image: "/images/bg-journal-1.jpg",
  },
  {
    title: "A Keepsake, Not Just a Gift",
    description:
      "Unlike flowers, your miniature scene won't wilt. It's built to display, to treasure, and to spark conversation for years to come.",
    image: "/images/bg-journal-2.jpg",
  },
];

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const word3Ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect (not useEffect) so ctx.revert() runs synchronously
  // before React's own commit-phase DOM removal. ScrollTrigger's `pin: true`
  // wraps sectionRef in a `.pin-spacer` div; if that wrapper is still in
  // place when React tries to remove this section during route navigation,
  // React's removeChild call doesn't find the node where it expects it —
  // throwing "Node.removeChild: the node to be removed is not a child of
  // this node". useEffect's cleanup is deferred until after commit, which
  // is too late; useLayoutEffect's cleanup runs before it.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1,
        },
      });

      const c = cardsRef.current!.children;
      tl.fromTo(word1Ref.current!, { x: -600, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0)
        .fromTo(c[0]!, { x: "100vw", skewX: -8, opacity: 0 }, { x: 0, skewX: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.15)
        .fromTo(word2Ref.current!, { x: 600, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.3)
        .to(c[0]!, { x: "-35%", scale: 0.85, opacity: 0.4, duration: 0.5, ease: "power2.inOut" }, 0.4)
        .fromTo(c[1]!, { x: "100vw", skewX: -8, opacity: 0 }, { x: 0, skewX: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.45)
        .fromTo(word3Ref.current!, { x: -600, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 0.55)
        .to(c[1]!, { x: "-35%", scale: 0.85, opacity: 0.4, duration: 0.5, ease: "power2.inOut" }, 0.65)
        .fromTo(c[2]!, { x: "100vw", skewX: -8, opacity: 0 }, { x: 0, skewX: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.7)
        .to(sectionRef.current!, { backgroundColor: "#FEF7E4", duration: 1 }, 0.2);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FEF7E4",
        overflow: "hidden",
      }}
    >
      {/* Outline words */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", textAlign: "center", zIndex: 1, pointerEvents: "none" }}>
        {[
          { ref: word1Ref, text: "Imagined", color: "#042f2e" },
          { ref: word2Ref, text: "Crafted", color: "#c2410c" },
          { ref: word3Ref, text: "Gifted", color: "#042f2e" },
        ].map(({ ref, text, color }, i) => (
          <div
            key={text}
            ref={ref}
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              fontSize: "clamp(60px, 10vw, 160px)",
              fontWeight: 400,
              color: "transparent",
              WebkitTextStroke: `2px ${color}`,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              opacity: 0,
              marginTop: i > 0 ? "-20px" : 0,
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Floating cards */}
      <div
        ref={cardsRef}
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "380px",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "8px",
              padding: "28px",
              opacity: 0,
              transform: "translateX(100vw)",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "180px", borderRadius: "6px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />
            </div>
            <h4 style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "18px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", color: "#042f2e", marginBottom: "10px" }}>
              {card.title}
            </h4>
            <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "14px", lineHeight: 1.6, color: "#57534e" }}>
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Handwritten accent */}
      <div style={{ position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-caveat, 'Caveat', cursive)", fontSize: "28px", color: "#c2410c", zIndex: 15, opacity: 0.7, whiteSpace: "nowrap" }}>
        How your story is built
      </div>
    </div>
  );
}
