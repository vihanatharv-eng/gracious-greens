"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    // Keep ScrollTrigger in sync with Lenis's smoothed scroll position.
    // Without this, GSAP pinned sections (e.g. Philosophy) read a stale
    // native scroll position and stutter/glitch as you wheel-scroll.
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's single ticker instead of a separate RAF loop,
    // so smooth-scroll and every ScrollTrigger animation run on ONE clock.
    // (Two independent RAF loops is the other half of the wheel jank.)
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
