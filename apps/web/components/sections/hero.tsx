"use client";

import { useState, useEffect } from "react";
import PlantScrollSequence from "./PlantScrollSequence";

/**
 * Hero — stable wrapper strategy
 *
 * The Problem:
 * When Hero swaps from placeholder → PlantScrollSequence, React calls
 *   parent.insertBefore(newSection, philosophyEl)
 * at the <main> level. Next.js RSC streaming and/or GSAP ScrollTrigger
 * can move philosophyEl out of <main> before React's commit runs,
 * causing a NotFoundError: insertBefore target not a child of this node.
 *
 * The Fix:
 * Always render a stable <div> at the page level. React committed it in
 * the first render and it NEVER moves. State changes swap content INSIDE
 * this div, so React only calls insertBefore relative to the div's own
 * children — it never touches page-level siblings. No conflict possible.
 */
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // This outer div is committed on first render and stays stable forever.
    // overflow:visible ensures position:sticky inside PlantScrollSequence works.
    <div style={{ position: "relative", width: "100%", overflow: "visible" }}>
      {mounted ? (
        <PlantScrollSequence />
      ) : (
        // Placeholder reserves space (320vh) matching PlantScrollSequence height
        // so there is zero layout shift when the real component mounts.
        <div
          style={{
            height: "320vh",
            backgroundColor: "#042f2e",
            width: "100%",
          }}
        />
      )}
    </div>
  );
}
