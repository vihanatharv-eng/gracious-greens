import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { Journal } from "@/components/sections/journal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedCollection />
      <Journal />
    </>
  );
}
