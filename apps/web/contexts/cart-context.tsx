"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CartPersonalization = {
  note?: string;
  giftWrap?: boolean;
  imageUrl?: string;
};

export type CartItem = {
  lineId: string; // unique per line (variantId + personalization fingerprint)
  productSlug: string;
  variantId: string;
  productTitle: string;
  variantName: string;
  price: number;
  quantity: number;
  emoji: string;
  gradient: string;
  personalization?: CartPersonalization;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; lineId: string }
  | { type: "UPDATE_QTY"; lineId: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "HYDRATE"; items: CartItem[] };

// ─── Reducer ──────────────────────────────────────────────────────────────────

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.lineId === action.item.lineId);
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.lineId === action.item.lineId
              ? { ...i, quantity: i.quantity + action.item.quantity }
              : i
          ),
        };
      }
      return { ...state, isOpen: true, items: [...state.items, action.item] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.lineId !== action.lineId) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: action.quantity <= 0
          ? state.items.filter((i) => i.lineId !== action.lineId)
          : state.items.map((i) =>
              i.lineId === action.lineId ? { ...i, quantity: action.quantity } : i
            ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "HYDRATE":
      return { ...state, items: action.items };
    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "lineId">) => void;
  removeItem: (lineId: string) => void;
  updateQty: (lineId: string, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gg-cart");
      if (saved) {
        dispatch({ type: "HYDRATE", items: JSON.parse(saved) });
      }
    } catch {}
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("gg-cart", JSON.stringify(state.items));
  }, [state.items]);

  // Close cart on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch({ type: "CLOSE" });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function makeLineId(variantId: string, personalization?: CartPersonalization) {
    const note = personalization?.note ?? "";
    const wrap = personalization?.giftWrap ? "1" : "0";
    return `${variantId}-${note.slice(0, 10)}-${wrap}`;
  }

  const value: CartContextValue = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount: state.items.reduce((sum, i) => sum + i.quantity, 0),
    subtotal: state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    addItem: (item) =>
      dispatch({
        type: "ADD_ITEM",
        item: { ...item, lineId: makeLineId(item.variantId, item.personalization) },
      }),
    removeItem: (lineId) => dispatch({ type: "REMOVE_ITEM", lineId }),
    updateQty: (lineId, quantity) => dispatch({ type: "UPDATE_QTY", lineId, quantity }),
    clear: () => dispatch({ type: "CLEAR" }),
    open: () => dispatch({ type: "OPEN" }),
    close: () => dispatch({ type: "CLOSE" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
