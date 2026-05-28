import Link from "next/link";

const LINKS = {
  Shop: [
    { href: "/shop", label: "All Plants" },
    { href: "/shop?category=Gift+Sets", label: "Gift Sets" },
    { href: "/shop?category=Desk+Plants", label: "Desk Plants" },
    { href: "/shop?category=Statement+Plants", label: "Statement Plants" },
  ],
  Services: [
    { href: "/gifts/personalise", label: "Personalise a Gift" },
    { href: "/corporate", label: "Corporate Gifting" },
    { href: "/requests", label: "Custom Orders" },
  ],
  Help: [
    { href: "/faq", label: "FAQ" },
    { href: "/track", label: "Track Order" },
    { href: "/contact", label: "Contact Us" },
    { href: "/care-guides", label: "Care Guides" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1F3A2D] text-[#FAF8F3]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden>🌿</span>
              <span
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                Gracious Greens
              </span>
            </Link>
            <p className="text-[#A8BCA1] text-sm leading-relaxed max-w-xs mb-6">
              Miniature plants gifted with intention. Every plant is handpicked, every note is
              handwritten, every order packed with care.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/graciousgreens"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FAF8F3]/10 text-[#A8BCA1] hover:bg-[#FAF8F3]/20 hover:text-[#FAF8F3] transition-all"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FAF8F3]/10 text-[#A8BCA1] hover:bg-[#FAF8F3]/20 hover:text-[#FAF8F3] transition-all"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#A8BCA1] mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#FAF8F3]/70 hover:text-[#FAF8F3] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FAF8F3]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#FAF8F3]/40">
            © {new Date().getFullYear()} Gracious Greens. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-[#FAF8F3]/40">
            <Link href="/privacy" className="hover:text-[#FAF8F3]/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FAF8F3]/70 transition-colors">
              Terms
            </Link>
            <Link href="/shipping" className="hover:text-[#FAF8F3]/70 transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
