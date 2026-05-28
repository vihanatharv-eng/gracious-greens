import {
  pgTable,
  uuid,
  integer,
  timestamp,
  index,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { productVariants } from "./products";

// ─── Tables ───────────────────────────────────────────────────────────────────

export const inventory = pgTable(
  "inventory",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    variantId: uuid("variant_id")
      .references(() => productVariants.id, { onDelete: "cascade" })
      .notNull()
      .unique(),
    quantity: integer("quantity").default(0).notNull(),
    // "reserved" = items in active carts / pending orders (not deducted yet)
    reserved: integer("reserved").default(0).notNull(),
    lowStockThreshold: integer("low_stock_threshold").default(5).notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("inventory_variant_id_idx").on(t.variantId)]
);

// ─── Relations ────────────────────────────────────────────────────────────────

export const inventoryRelations = relations(inventory, ({ one }) => ({
  variant: one(productVariants, {
    fields: [inventory.variantId],
    references: [productVariants.id],
  }),
}));

// ─── Types ────────────────────────────────────────────────────────────────────

export type Inventory = typeof inventory.$inferSelect;
export type NewInventory = typeof inventory.$inferInsert;
