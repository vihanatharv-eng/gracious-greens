import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F3] text-center px-6">
      <span className="text-6xl mb-6" role="img" aria-label="wilted plant">
        🥀
      </span>
      <h1
        className="text-4xl font-serif text-[#1F3A2D] mb-3"
        style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
      >
        Page not found
      </h1>
      <p className="text-[#22201C]/50 mb-8 max-w-xs">
        This page seems to have wandered off. Let&apos;s get you back to greener pastures.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] text-sm font-medium hover:bg-[#2D5040] transition-colors"
      >
        Back home
      </Link>
    </div>
  );
}
