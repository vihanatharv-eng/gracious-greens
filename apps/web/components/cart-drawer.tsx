"use client";

import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQty, subtotal, itemCount } = useCart();

  const GIFT_WRAP_PRICE = 50;
  const totalGiftWrap = items.filter((i) => i.personalization?.giftWrap).length * GIFT_WRAP_PRICE;
  const orderTotal = subtotal + totalGiftWrap;

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
                      ✍️ "{item.personalization.note.slice(0, 20)}…"
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
                <span className="text-[#A8BCA1]">Calculated at checkout</span>
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

            <Link
              href="/checkout"
              onClick={close}
              className="block w-full text-center py-3.5 rounded-full bg-[#1F3A2D] text-[#FAF8F3] font-semibold text-sm hover:bg-[#2D5040] active:scale-[0.98] transition-all"
            >
              Proceed to Checkout →
            </Link>

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
