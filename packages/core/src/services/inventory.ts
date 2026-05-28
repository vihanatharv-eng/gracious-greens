import { db, inventory, productVariants, products } from "@gg/db";
import { eq, lte, sql } from "drizzle-orm";
import { z } from "zod";

// ─── Types ────────────────────────────────────────────────────────────────────

export type LowStockItem = {
  variantId: string;
  sku: string;
  variantName: string;
  productTitle: string;
  quantity: number;
  reserved: number;
  available: number;
  lowStockThreshold: number;
};

// ─── Service ──────────────────────────────────────────────────────────────────

export const inventoryService = {
  /**
   * Set absolute stock for a variant.
   * Used by Hermes: "Update Monstera stock to 24"
   */
  async setStock(variantId: string, quantity: number): Promise<{ before: number; after: number }> {
    const existing = await db.query.inventory.findFirst({
      where: eq(inventory.variantId, variantId),
    });

    const before = existing?.quantity ?? 0;

    if (existing) {
      await db
        .update(inventory)
        .set({ quantity, updatedAt: new Date() })
        .where(eq(inventory.variantId, variantId));
    } else {
      await db.insert(inventory).values({ variantId, quantity });
    }

    return { before, after: quantity };
  },

  /**
   * Adjust stock by delta (positive = add, negative = deduct).
   * Used on order paid / cancelled.
   */
  async adjustStock(variantId: string, delta: number): Promise<void> {
    await db
      .update(inventory)
      .set({
        quantity: sql`${inventory.quantity} + ${delta}`,
        updatedAt: new Date(),
      })
      .where(eq(inventory.variantId, variantId));
  },

  /**
   * Reserve stock when item added to cart.
   * available = quantity - reserved
   */
  async reserve(variantId: string, qty: number): Promise<boolean> {
    const inv = await db.query.inventory.findFirst({
      where: eq(inventory.variantId, variantId),
    });
    if (!inv) return false;

    const available = inv.quantity - inv.reserved;
    if (available < qty) return false;

    await db
      .update(inventory)
      .set({ reserved: sql`${inventory.reserved} + ${qty}` })
      .where(eq(inventory.variantId, variantId));

    return true;
  },

  /**
   * Release reservation (cart expired / order cancelled).
   */
  async releaseReservation(variantId: string, qty: number): Promise<void> {
    await db
      .update(inventory)
      .set({ reserved: sql`GREATEST(${inventory.reserved} - ${qty}, 0)` })
      .where(eq(inventory.variantId, variantId));
  },

  /**
   * Deduct stock and clear reservation after order is paid.
   */
  async fulfil(variantId: string, qty: number): Promise<void> {
    await db
      .update(inventory)
      .set({
        quantity: sql`${inventory.quantity} - ${qty}`,
        reserved: sql`GREATEST(${inventory.reserved} - ${qty}, 0)`,
        updatedAt: new Date(),
      })
      .where(eq(inventory.variantId, variantId));
  },

  /**
   * Get all low-stock variants.
   * Used by Hermes: "Which products are low in stock?"
   */
  async getLowStock(): Promise<LowStockItem[]> {
    const rows = await db
      .select({
        variantId: inventory.variantId,
        sku: productVariants.sku,
        variantName: productVariants.name,
        productTitle: products.title,
        quantity: inventory.quantity,
        reserved: inventory.reserved,
        lowStockThreshold: inventory.lowStockThreshold,
      })
      .from(inventory)
      .innerJoin(productVariants, eq(inventory.variantId, productVariants.id))
      .innerJoin(products, eq(productVariants.productId, products.id))
      .where(lte(inventory.quantity, inventory.lowStockThreshold));

    return rows.map((r) => ({
      ...r,
      available: r.quantity - r.reserved,
    }));
  },

  /**
   * Get stock for a single variant (for checkout validation).
   */
  async getStock(variantId: string) {
    return db.query.inventory.findFirst({
      where: eq(inventory.variantId, variantId),
    });
  },

  /**
   * Resolve a variant by SKU, product title, or partial name.
   * Used by Hermes to parse natural-language references.
   */
  async resolveVariant(query: string) {
    // Try exact SKU first
    const bySku = await db.query.productVariants.findFirst({
      where: eq(productVariants.sku, query.toUpperCase()),
      with: { product: true },
    });
    if (bySku) return bySku;

    // Fall back to product title match (case-insensitive, first result)
    const byTitle = await db
      .select()
      .from(productVariants)
      .innerJoin(products, eq(productVariants.productId, products.id))
      .where(sql`lower(${products.title}) like ${"%" + query.toLowerCase() + "%"}`)
      .limit(1);

    return byTitle[0] ?? null;
  },
};
