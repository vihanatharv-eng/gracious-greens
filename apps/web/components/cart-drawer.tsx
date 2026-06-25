"use client";

import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";

export function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQty, subtotal, itemCount } = useCart();

  const GIFT_WRAP_PRICE = 79; // must match the price charged on the product detail page
  const totalGiftWrap = items.filter((i) => i.personalization?.giftWrap).length * GIFT_WRAP_PRICE;
  const orderTotal = subtotal + totalGiftWrap;

  // No online checkout yet — orders are placed over WhatsApp. Serialize the
  // cart into a readable message so Parul gets the full order in one tap.
  function buildOrderMessage(): string {
    const lines = items.map((i) => {
      let line = `• ${i.productTitle} (${i.variantName}) ×${i.quantity} — ${formatPrice(i.price * i.quantity)}`;
      if (i.personalization?.note) line += `\n   ✍️ Note: "${i.personalization.note}"`;
      if (i.personalization?.giftWrap) line += `\n   🎁 Gift wrap`;
      return line;
    });
    return [
      "Hi Parul! I'd like to place an order from Gracious Greens:",
      "",
      ...lines,
      "",
      `Total: ${formatPrice(orderTotal)} (excl. shipping)`,
      "",
      "Could you confirm availability, shipping, and payment? Thank you!",
    ].join("\n");
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#22201C]/30 backdrop-blur-sm"
          onClick={close}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={[
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#FAF8F3] shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1F3A2D]/10">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden>🛍️</span>
            <h2
              className="font-semibold text-[#1F3A2D] text-lg"
              style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
            >
              Your Cart
            </h2>
            {itemCount > 0 && (
              <span className="text-xs bg-[#1F3A2D] text-[#FAF8F3] rounded-full px-2 py-0.5 font-medium">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={close}
            className="p-2 rounded-full hover:bg-[#1F3A2D]/5 text-[#22201C]/60 hover:text-[#22201C] transition-all"
            aria-label="Close cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <span className="text-5xl mb-4" role="img" aria-label="empty cart">🪴</span>
              <p
                className="text-lg font-medium text-[#1F3A2D] mb-2"
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                Your cart is empty
              </p>
              <p className="text-sm text-[#22201C]/50 mb-6">
                Find a plant that speaks to you.
              </p>
              <Link
                href="/shop"
                onClick={close}
                className="px-6 py-2.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] text-sm font-medium hover:bg-[#2D5040] transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.lineId}
                className="flex gap-3 p-3 rounded-xl bg-white border border-[#1F3A2D]/5"
              >
                {/* Product image */}
                <div
                  className="w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl"
                  style={{ background: item.gradient }}
                  aria-hidden
                >
                  {item.emoji}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#22201C] text-sm leading-snug truncate">
                    {item.productTitle}
                  </p>
                  <p className="text-xs text-[#22201C]/50 truncate mb-1">{item.variantName}</p>

                  {/* Personalization indicator */}
                  {item.personalization?.note && (
                    <p className="text-[10px] text-[#A8BCA1] flex items-center gap-1 mb-1">
                      ✍️ &ldquo;{item.personalization.note.slice(0, 20)}…&rdquo;
                    </p>
                  )}
                  {item.personalization?.giftWrap && (
                    <p className="text-[10px] text-[#C77B58]">🎁 Gift wrap +₹{GIFT_WRAP_PRICE}</p>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    {/* Qty controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.lineId, item.quantity - 1)}
                        className="w-6 h-6 rounded-full border border-[#1F3A2D]/20 text-[#1F3A2D] flex items-center justify-center text-sm hover:bg-[#1F3A2D]/5 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm font-medium text-[#22201C]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.lineId, item.quantity + 1)}
                        className="w-6 h-6 rounded-full border border-[#1F3A2D]/20 text-[#1F3A2D] flex items-center justify-center text-sm hover:bg-[#1F3A2D]/5 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-[#1F3A2D]">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.lineId)}
                  className="self-start p-1 text-[#22201C]/30 hover:text-[#22201C]/70 transition-colors"
                  aria-label={`Remove ${item.productTitle}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer — totals + CTA */}
        {items.length > 0 && (
          <div className="border-t border-[#1F3A2D]/10 px-5 py-5 space-y-4">
            {/* Order summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#22201C]/60">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {totalGiftWrap > 0 && (
                <div className="flex justify-between text-[#22201C]/60">
                  <span>Gift wrapping</span>
                  <span>{formatPrice(totalGiftWrap)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#22201C]/60">
                <span>Shipping</span>
                <span className="text-[#A8BCA1]">Confirmed on WhatsApp</span>
              </div>
              <div className="flex justify-between font-semibold text-[#1F3A2D] pt-2 border-t border-[#1F3A2D]/10">
                <span>Total</span>
                <span style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
                  {formatPrice(orderTotal)}
                </span>
              </div>
            </div>

            {/* Free shipping nudge */}
            {orderTotal < 999 && (
              <p className="text-xs text-center text-[#A8BCA1] bg-[#A8BCA1]/10 rounded-lg py-2 px-3">
                🚚 Add {formatPrice(999 - orderTotal)} more for free shipping
              </p>
            )}

            <a
              href={whatsappLink(buildOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] font-semibold text-sm hover:bg-[#2D5040] active:scale-[0.98] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.937zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Order on WhatsApp
            </a>

            <p className="text-[11px] text-center text-[#22201C]/40 leading-relaxed">
              We&apos;ll confirm availability, shipping &amp; payment on WhatsApp.
            </p>

            <button
              onClick={close}
              className="block w-full text-center text-sm text-[#22201C]/50 hover:text-[#22201C] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
