"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/cart-context";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/gifts/personalise", label: "Personalise" },
  { href: "/corporate", label: "Corporate" },
  { href: "/about", label: "Our Story" },
];

export function Navbar() {
  const { itemCount, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#FAF8F3]/90 backdrop-blur-md shadow-sm shadow-[#1F3A2D]/5"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Gracious Greens home"
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-200" aria-hidden>
              🌿
            </span>
            <span
              className="text-lg font-semibold text-[#1F3A2D] tracking-tight hidden sm:block"
              style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
            >
              Gracious Greens
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#22201C]/70 hover:text-[#1F3A2D] transition-colors duration-150 font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              className="p-2 rounded-full text-[#22201C]/60 hover:text-[#1F3A2D] hover:bg-[#1F3A2D]/5 transition-all"
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={open}
              className="relative p-2 rounded-full text-[#22201C]/60 hover:text-[#1F3A2D] hover:bg-[#1F3A2D]/5 transition-all"
              aria-label={`Cart (${itemCount} items)`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#C77B58] text-[#FAF8F3] text-[10px] font-bold px-1">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full text-[#22201C]/60 hover:text-[#1F3A2D] hover:bg-[#1F3A2D]/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#FAF8F3] border-t border-[#1F3A2D]/10 px-4 py-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 px-3 rounded-lg text-[#22201C] hover:bg-[#1F3A2D]/5 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Spacer so content isn't hidden under fixed nav */}
      <div className="h-16" aria-hidden />
    </>
  );
}
