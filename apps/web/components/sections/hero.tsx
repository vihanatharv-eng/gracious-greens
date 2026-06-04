"use client";

import dynamic from "next/dynamic";

/**
 * Hero section — scroll-driven plant assembly animation.
 *
 * PlantScrollSequence handles its own layout (sticky 2-column: text left,
 * canvas right), frame preloading, and scroll → frame mapping.
 * SSR disabled because WebGL/Canvas APIs require the browser.
 */
const PlantScrollSequence = dynamic(
  () => import("./PlantScrollSequence"),
  { ssr: false }
);

export function Hero() {
  return <PlantScrollSequence />;
}
