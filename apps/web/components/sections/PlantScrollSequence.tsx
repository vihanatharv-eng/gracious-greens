"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ─── Frame config ─────────────────────────────────────────────────────────────
// Auto-detected from filename pattern. Update TOTAL_FRAMES if sequence length changes.
const TOTAL_FRAMES = 300;
// Total scrollable height of the hero section. More = slower, cinematic scroll.
const SCROLL_HEIGHT = "320vh";

function getFrameUrl(index: number): string {
  // ezgif-frame-001.jpg … ezgif-frame-300.jpg
  return `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
}

// ─── Canvas sequence hook ────────────────────────────────────────────────────
/**
 * Manages frame preloading, canvas resizing (DPR-aware), and frame rendering.
 * Returns a canvas ref and a `goToFrame(index)` function for the caller to drive.
 */
function useCanvasSequence(totalFrames: number) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Sparse array — slots fill as images load
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(totalFrames).fill(null)
  );
  const currentIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // ── Draw ──────────────────────────────────────────────────────────────────
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[index];
      if (!canvas || !img?.complete || !img.naturalWidth) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      // After setTransform(dpr,…) all drawing coords are CSS pixels
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;

      // ── Contain-fit: entire plant + pot always visible ───────────────────
      const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    },
    []
  );

  // ── Seek ─────────────────────────────────────────────────────────────────
  const goToFrame = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(totalFrames - 1, index));
      if (clamped === currentIndexRef.current) return;
      currentIndexRef.current = clamped;
      // Cancel any pending rAF to avoid piling up frames
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(clamped);
        rafRef.current = null;
      });
    },
    [drawFrame, totalFrames]
  );

  // ── Resize ───────────────────────────────────────────────────────────────
  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const w = parent.clientWidth;
    const h = parent.clientHeight;

    // Skip if nothing changed (avoids unnecessary redraws)
    if (canvas.width === Math.round(w * dpr) && canvas.height === Math.round(h * dpr)) return;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    // Absolute transform so repeated resize calls don't accumulate scale
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    drawFrame(currentIndexRef.current);
  }, [drawFrame]);

  // ── Preload all frames ────────────────────────────────────────────────────
  useEffect(() => {
    const imgs = imagesRef.current;

    const loadFrame = (i: number) => {
      const img = new Image();
      imgs[i] = img;
      img.onload = () => {
        if (i === 0) {
          // First frame loaded: size canvas and reveal it
          resize();
          drawFrame(0);
          if (canvasRef.current) canvasRef.current.style.opacity = "1";
        }
      };
      img.src = getFrameUrl(i);
    };

    // Frame 0 is highest priority — kicks off everything else after it loads
    loadFrame(0);
    // Load the rest in sequence (browser parallelises ~6 at a time automatically)
    for (let i = 1; i < totalFrames; i++) loadFrame(i);

    return () => {
      // Cancel pending onload callbacks on unmount
      imgs.forEach((img) => {
        if (img) img.onload = null;
      });
    };
  }, [totalFrames, drawFrame, resize]);

  // ── ResizeObserver ────────────────────────────────────────────────────────
  useEffect(() => {
    const obs = new ResizeObserver(resize);
    const parent = canvasRef.current?.parentElement;
    if (parent) obs.observe(parent);
    resize(); // initial sizing
    return () => obs.disconnect();
  }, [resize]);

  return { canvasRef, goToFrame };
}

// ─── Main component ───────────────────────────────────────────────────────────
/**
 * PlantScrollSequence
 *
 * A scroll-driven frame-by-frame animation of the miniature plant assembly.
 * The section is SCROLL_HEIGHT tall; the inner layout stays sticky at 100vh.
 * Left column: brand copy + CTA. Right column: canvas sequence.
 * Mobile: stacks vertically (text → canvas, shorter canvas height).
 */
export default function PlantScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { canvasRef, goToFrame } = useCanvasSequence(TOTAL_FRAMES);

  // ── Scroll → frame mapping ────────────────────────────────────────────────
  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const { top, height } = section.getBoundingClientRect();
    const scrollable = height - window.innerHeight;
    if (scrollable <= 0) return;
    // progress: 0 when section top hits viewport top, 1 when section bottom exits
    const progress = Math.max(0, Math.min(1, -top / scrollable));
    goToFrame(Math.round(progress * (TOTAL_FRAMES - 1)));
  }, [goToFrame]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // sync immediately in case page loaded mid-scroll
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: SCROLL_HEIGHT,
        backgroundColor: "#FEF7E4",
      }}
    >
      {/* ── Sticky viewport ───────────────────────────────────────────────── */}
      <div
        className="pss-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* ── Left: brand copy ─────────────────────────────────────────── */}
        <div
          className="pss-text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 40px 0 56px",
          }}
        >
          <h1
            style={{
              fontFamily:
                "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(36px, 3.6vw, 68px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-1.6px",
              color: "#042f2e",
              marginBottom: "24px",
            }}
          >
            Your story,
            <br />
            told in miniature.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "16px",
              lineHeight: 1.6,
              color: "rgba(4,47,46,0.65)",
              marginBottom: "40px",
              maxWidth: "400px",
            }}
          >
            Custom-built miniature scene planters — figurines, props, and
            botanicals arranged to tell your story. Made to order, made to last.
          </p>

          <Link
            href="/shop"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              backgroundColor: "#c2410c",
              color: "#ffffff",
              fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              borderRadius: "50px",
              textDecoration: "none",
              alignSelf: "flex-start",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(194,65,12,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Design Your Scene
          </Link>
        </div>

        {/* ── Right: canvas ────────────────────────────────────────────── */}
        <div
          className="pss-canvas-wrap"
          style={{
            position: "relative",
            height: "100%",
            backgroundColor: "#FEF7E4",
          }}
        >
          {/* Canvas starts invisible; revealed once frame 0 loads */}
          <canvas
            ref={canvasRef}
            style={{
              display: "block",
              opacity: 0,
              transition: "opacity 0.5s ease",
            }}
          />
        </div>
      </div>

      {/* ── Bottom fade into next section ─────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "120px",
          background: "linear-gradient(to top, #FEF7E4, transparent)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Responsive styles live in globals.css (.pss-sticky, .pss-text, .pss-canvas-wrap) */}
    </section>
  );
}
