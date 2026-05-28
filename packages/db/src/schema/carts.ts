import {
  pgTable,
  uuid,
  integer,
  numeric,
  jsonb,
  timestamp,
  pgEnum,
  text,
  index,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";
import { productVariants } from "./products";

// ─── Enums ────────────────────────────────────────────────────────────────────

export const cartStatusEnum = pgEnum("cart_status", ["active", "abandoned", "converted"]);

// ─── Types ────────────────────────────────────────────────────────────────────

export type PersonalizationData = {
  customNote?: string;
  engravingText?: string;
  uploadedImageUrl?: string;
  giftWrap?: boolean;
};

// ─── Tables ───────────────────────────────────────────────────────────────────

export const carts = pgTable(
  "carts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    // userId is null for guest carts
    userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
    // sessionId tracks guest carts (stored in cookie)
    sessionId: text("session_id"),
    status: cartStatusEnum("status").default("active").notNull(),
    // Coupon applied (stored here for quick access)
    couponCode: text("coupon_code"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
    // Track when cart went idle (for abandoned-cart automation)
    lastActivityAt: timestamp("last_activity_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("carts_user_id_idx").on(t.userId),
    index("carts_session_id_idx").on(t.sessionId),
    index("carts_status_idx").on(t.status),
    index("carts_last_activity_idx").on(t.lastActivityAt),
  ]
);

export const cartItems = pgTable(
  "cart_items",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    cartId: uuid("cart_id")
      .references(() => carts.id, { onDelete: "cascade" })
      .notNull(),
    variantId: uuid("variant_id")
      .references(() => productVariants.id, { onDelete: "restrict" })
      .notNull(),
    quantity: integer("quantity").default(1).notNull(),
    // Price locked in at time of add (so price changes don't silently affect cart)
    unitPrice: numeric("unit_price", { precision: 10, scale: 2 }).notNull(),
    // Personalization data specific to this line item
    personalization: jsonb("personalization").$type<PersonalizationData>(),
    addedAt: timestamp("added_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("cart_items_cart_id_idx").on(t.cartId),
    index("cart_items_variant_id_idx").on(t.variantId),
  ]
);

export const wishlists = pgTable(
  "wishlists",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    variantId: uuid("variant_id")
      .references(() => productVariants.id, { onDelete: "cascade" })
      .notNull(),
    addedAt: timestamp("added_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("wishlists_user_id_idx").on(t.userId)]
);

// ─── Relations ────────────────────────────────────────────────────────────────

export const cartsRelations = relations(carts, ({ one, many }) => ({
  user: one(users, { fields: [carts.userId], references: [users.id] }),
  items: many(cartItems),
}));

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  cart: one(carts, { fields: [cartItems.cartId], references: [carts.id] }),
  variant: one(productVariants, { fields: [cartItems.variantId], references: [productVariants.id] }),
}));

export type Cart = typeof carts.$inferSelect;
export type CartItem = typeof cartItems.$inferSelect;
export type NewCartItem = typeof cartItems.$inferInsert;
