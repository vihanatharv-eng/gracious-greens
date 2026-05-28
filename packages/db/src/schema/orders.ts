import {
  pgTable,
  uuid,
  text,
  integer,
  numeric,
  jsonb,
  timestamp,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";
import { productVariants } from "./products";
import { PersonalizationData } from "./carts";

// ─── Enums ────────────────────────────────────────────────────────────────────

export const orderStatusEnum = pgEnum("order_status", [
  "created",
  "awaiting_payment",
  "paid",
  "processing",
  "packed",
  "shipped",
  "out_for_delivery",
  "delivered",
  "cancelled",
  "refunded",
  "refund_pending",
]);

export const paymentMethodEnum = pgEnum("payment_method", [
  "razorpay_upi",
  "razorpay_card",
  "razorpay_netbanking",
  "razorpay_wallet",
  "cod",
  "stripe",
]);

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "captured",
  "failed",
  "refunded",
  "partially_refunded",
]);

export const shipmentStatusEnum = pgEnum("shipment_status", [
  "pending",
  "pickup_scheduled",
  "picked_up",
  "in_transit",
  "out_for_delivery",
  "delivered",
  "rto_initiated",
  "returned",
]);

// ─── Tables ───────────────────────────────────────────────────────────────────

export const orders = pgTable(
  "orders",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    orderNo: text("order_no").notNull().unique(), // e.g. GG-2024-00123
    userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
    status: orderStatusEnum("status").default("created").notNull(),
    // Pricing (all in INR paise-precision numeric)
    subtotal: numeric("subtotal", { precision: 10, scale: 2 }).notNull(),
    discountAmount: numeric("discount_amount", { precision: 10, scale: 2 }).default("0").notNull(),
    shippingFee: numeric("shipping_fee", { precision: 10, scale: 2 }).default("0").notNull(),
    gstAmount: numeric("gst_amount", { precision: 10, scale: 2 }).default("0").notNull(),
    total: numeric("total", { precision: 10, scale: 2 }).notNull(),
    // Payment
    paymentMethod: paymentMethodEnum("payment_method"),
    couponCode: text("coupon_code"),
    // Shipping address (snapshot at order time — not FK)
    shippingAddress: jsonb("shipping_address")
      .$type<{
        name: string;
        phone: string;
        line1: string;
        line2?: string;
        city: string;
        state: string;
        pincode: string;
      }>()
      .notNull(),
    // Customer notes / gift message
    notes: text("notes"),
    // Internal notes from admin / Hermes
    internalNotes: text("internal_notes"),
    // Timestamps
    placedAt: timestamp("placed_at", { withTimezone: true }).defaultNow().notNull(),
    paidAt: timestamp("paid_at", { withTimezone: true }),
    cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("orders_user_id_idx").on(t.userId),
    index("orders_status_idx").on(t.status),
    index("orders_placed_at_idx").on(t.placedAt),
    index("orders_order_no_idx").on(t.orderNo),
  ]
);

export const orderItems = pgTable(
  "order_items",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    orderId: uuid("order_id")
      .references(() => orders.id, { onDelete: "cascade" })
      .notNull(),
    variantId: uuid("variant_id").references(() => productVariants.id, { onDelete: "set null" }),
    // Snapshot of product name/sku at order time
    variantSnapshot: jsonb("variant_snapshot")
      .$type<{ name: string; sku: string; productTitle: string; imageUrl?: string }>()
      .notNull(),
    quantity: integer("quantity").notNull(),
    unitPrice: numeric("unit_price", { precision: 10, scale: 2 }).notNull(),
    personalization: jsonb("personalization").$type<PersonalizationData>(),
  },
  (t) => [index("order_items_order_id_idx").on(t.orderId)]
);

export const payments = pgTable(
  "payments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    orderId: uuid("order_id")
      .references(() => orders.id, { onDelete: "cascade" })
      .notNull(),
    provider: text("provider").notNull(), // "razorpay" | "stripe" | "cod"
    providerOrderId: text("provider_order_id"), // Razorpay order ID
    providerPaymentId: text("provider_payment_id"), // Razorpay payment ID
    amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
    currency: text("currency").default("INR").notNull(),
    status: paymentStatusEnum("status").default("pending").notNull(),
    // Full webhook payload for debugging
    rawPayload: jsonb("raw_payload"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("payments_order_id_idx").on(t.orderId),
    index("payments_provider_order_id_idx").on(t.providerOrderId),
  ]
);

export const shipments = pgTable(
  "shipments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    orderId: uuid("order_id")
      .references(() => orders.id, { onDelete: "cascade" })
      .notNull(),
    provider: text("provider").default("shiprocket").notNull(),
    shiprocketOrderId: text("shiprocket_order_id"),
    shiprocketShipmentId: text("shiprocket_shipment_id"),
    awb: text("awb"), // Air Waybill — tracking number
    courier: text("courier"), // e.g. "DTDC", "Delhivery"
    status: shipmentStatusEnum("status").default("pending").notNull(),
    trackingUrl: text("tracking_url"),
    estimatedDelivery: timestamp("estimated_delivery", { withTimezone: true }),
    shippedAt: timestamp("shipped_at", { withTimezone: true }),
    deliveredAt: timestamp("delivered_at", { withTimezone: true }),
    rawPayload: jsonb("raw_payload"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("shipments_order_id_idx").on(t.orderId)]
);

export const invoices = pgTable("invoices", {
  id: uuid("id").defaultRandom().primaryKey(),
  orderId: uuid("order_id")
    .references(() => orders.id, { onDelete: "restrict" })
    .notNull()
    .unique(),
  invoiceNo: text("invoice_no").notNull().unique(), // GG-INV-2024-00123
  gstin: text("gstin"), // customer GSTIN if provided
  hsnBreakdown: jsonb("hsn_breakdown"), // per-item GST breakdown
  pdfUrl: text("pdf_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Relations ────────────────────────────────────────────────────────────────

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, { fields: [orders.userId], references: [users.id] }),
  items: many(orderItems),
  payments: many(payments),
  shipments: many(shipments),
  invoice: one(invoices),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, { fields: [orderItems.orderId], references: [orders.id] }),
  variant: one(productVariants, { fields: [orderItems.variantId], references: [productVariants.id] }),
}));

export const paymentsRelations = relations(payments, ({ one }) => ({
  order: one(orders, { fields: [payments.orderId], references: [orders.id] }),
}));

export const shipmentsRelations = relations(shipments, ({ one }) => ({
  order: one(orders, { fields: [shipments.orderId], references: [orders.id] }),
}));

// ─── Types ────────────────────────────────────────────────────────────────────

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
export type OrderItem = typeof orderItems.$inferSelect;
export type Payment = typeof payments.$inferSelect;
export type Shipment = typeof shipments.$inferSelect;
export type Invoice = typeof invoices.$inferSelect;
