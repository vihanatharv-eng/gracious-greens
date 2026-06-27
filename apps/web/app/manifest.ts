import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gracious Greens",
    short_name: "Gracious Greens",
    description: "Miniature plants gifted with care — handcrafted scene planters for every story.",
    start_url: "/",
    display: "standalone",
    background_color: "#FEF7E4",
    theme_color: "#042f2e",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
