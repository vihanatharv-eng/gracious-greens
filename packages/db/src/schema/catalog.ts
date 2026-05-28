import {
  pgTable,
  uuid,
  text,
  integer,
  numeric,
  jsonb,
  timestamp,
  pgEnum,
  boolean,
  index,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";
import { products } from "./products";

// ─── Enums ────────────────────────────────────────────────────────────────────

export const couponTypeEnum = pgEnum("coupon_type", ["percent", "flat"]);
export const reviewStatusEnum = pgEnum("review_status", ["pending", "approved", "rejected"]);
export const requestTypeEnum = pgEnum("request_type", [
  "personalization",
  "corporate",
  "custom_product",
  "bulk_order",
]);
export const requestStatusEnum = pgEnum("request_status", [
  "new",
  "in_review",
  "quoted",
  "accepted",
  "completed",
  "rejected",
]);

// ─── Tables ───────────────────────────────────────────────────────────────────

export const coupons = pgTable(
  "coupons",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    code: text("code").notNull().unique(),
    type: couponTypeEnum("type").notNull(),
    value: numeric("value", { precision: 10, scale: 2 }).notNull(), // % or INR
    minOrderValue: numeric("min_order_value", { precision: 10, scale: 2 }).default("0"),
    maxDiscountAmount: numeric("max_discount_amount", { precision: 10, scale: 2 }), // cap for % coupons
    maxUses: integer("max_uses"), // null = unlimited
    usedCount: integer("used_count").default(0).notNull(),
    maxUsesPerUser: integer("max_uses_per_user").default(1),
    isActive: boolean("is_active").default(true).notNull(),
    startsAt: timestamp("starts_at", { withTimezone: true }),
    expiresAt: timestamp("expires_at", { withTimezone: true }),
    description: text("description"), // internal note
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("coupons_code_idx").on(t.code),
    index("coupons_active_idx").on(t.isActive),
  ]
);

export const reviews = pgTable(
  "reviews",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    productId: uuid("product_id")
      .references(() => products.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
    orderId: uuid("order_id"), // soft reference (no FK to avoid circular)
    rating: integer("rating").notNull(), // 1–5
    title: text("title"),
    body: text("body"),
    mediaUrls: text("media_urls").array().default([]).notNull(),
    isVerifiedPurchase: boolean("is_verified_purchase").default(false).notNull(),
    status: reviewStatusEnum("status").default("pending").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("reviews_product_id_idx").on(t.productId),
    index("reviews_status_idx").on(t.status),
  ]
);

export const customerRequests = pgTable(
  "customer_requests",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
    // For non-registered inquiries
    contactEmail: text("contact_email"),
    contactPhone: text("contact_phone"),
    contactName: text("contact_name"),
    type: requestTypeEnum("type").notNull(),
    // Flexible payload: budget, occasion, quantity, company name, etc.
    details: jsonb("details").$type<Record<string, unknown>>(),
    message: text("message"),
    imageUrls: text("image_urls").array().default([]).notNull(),
    status: requestStatusEnum("status").default("new").notNull(),
    // Assigned staff / internal notes
    assignedTo: uuid("assigned_to"),
    internalNotes: text("internal_notes"),
    quotedAmount: numeric("quoted_amount", { precision: 10, scale: 2 }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("customer_requests_status_idx").on(t.status),
    index("customer_requests_type_idx").on(t.type),
    index("customer_requests_created_at_idx").on(t.createdAt),
  ]
);

// ─── Relations ────────────────────────────────────────────────────────────────

export const reviewsRelations = relations(reviews, ({ one }) => ({
  product: one(products, { fields: [reviews.productId], references: [products.id] }),
  user: one(users, { fields: [reviews.userId], references: [users.id] }),
}));

export const customerRequestsRelations = relations(customerRequests, ({ one }) => ({
  user: one(users, { fields: [customerRequests.userId], references: [users.id] }),
}));

// ─── Types ────────────────────────────────────────────────────────────────────

export type Coupon = typeof coupons.$inferSelect;
export type NewCoupon = typeof coupons.$inferInsert;
export type Review = typeof reviews.$inferSelect;
export type CustomerRequest = typeof customerRequests.$inferSelect;
export type NewCustomerRequest = typeof customerRequests.$inferInsert;
