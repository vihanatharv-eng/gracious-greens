import { db, orders, orderItems, payments, users } from "@gg/db";
import { eq, desc, and, gte, sql } from "drizzle-orm";
import type { OrderStatus } from "../types";

// ─── Service ──────────────────────────────────────────────────────────────────

export const ordersService = {
  /**
   * Get order by order number (human-readable, used in Hermes commands).
   */
  async getByOrderNo(orderNo: string) {
    return db.query.orders.findFirst({
      where: eq(orders.orderNo, orderNo),
      with: {
        items: true,
        payments: true,
        shipments: true,
        user: true,
      },
    });
  },

  /**
   * Update order status with validation (no illegal transitions).
   */
  async updateStatus(orderId: string, status: OrderStatus, internalNote?: string) {
    const update: Record<string, unknown> = {
      status,
      updatedAt: new Date(),
    };
    if (internalNote) update["internalNotes"] = sql`COALESCE(${orders.internalNotes}, '') || E'\n' || ${internalNote}`;
    if (status === "paid") update["paidAt"] = new Date();
    if (status === "cancelled") update["cancelledAt"] = new Date();

    return db.update(orders).set(update as any).where(eq(orders.id, orderId)).returning();
  },

  /**
   * Revenue analytics for a given period.
   * Used by Hermes: "Show today's revenue"
   */
  async getRevenueSummary(period: "today" | "week" | "month" | "all") {
    const since = new Date();
    if (period === "today") since.setHours(0, 0, 0, 0);
    else if (period === "week") since.setDate(since.getDate() - 7);
    else if (period === "month") since.setMonth(since.getMonth() - 1);
    else since.setFullYear(2000);

    const result = await db
      .select({
        count: sql<number>`count(*)::int`,
        revenue: sql<number>`sum(${orders.total})::numeric`,
        avgOrderValue: sql<number>`avg(${orders.total})::numeric`,
      })
      .from(orders)
      .where(
        and(
          eq(orders.status, "paid"),
          gte(orders.placedAt, since)
        )
      );

    return {
      period,
      orderCount: result[0]?.count ?? 0,
      revenue: Number(result[0]?.revenue ?? 0),
      avgOrderValue: Number(result[0]?.avgOrderValue ?? 0),
    };
  },

  /**
   * Top-selling products by period.
   * Used by Hermes: "List top-selling products this week"
   */
  async getTopProducts(period: "week" | "month" | "all", limit = 5) {
    const since = new Date();
    if (period === "week") since.setDate(since.getDate() - 7);
    else if (period === "month") since.setMonth(since.getMonth() - 1);
    else since.setFullYear(2000);

    return db
      .select({
        variantSnapshot: orderItems.variantSnapshot,
        totalSold: sql<number>`sum(${orderItems.quantity})::int`,
        totalRevenue: sql<number>`sum(${orderItems.quantity} * ${orderItems.unitPrice})::numeric`,
      })
      .from(orderItems)
      .innerJoin(orders, eq(orderItems.orderId, orders.id))
      .where(and(eq(orders.status, "paid"), gte(orders.placedAt, since)))
      .groupBy(orderItems.variantSnapshot)
      .orderBy(desc(sql`sum(${orderItems.quantity})`))
      .limit(limit);
  },

  /**
   * Pending orders that need attention.
   */
  async getPendingOrders() {
    return db.query.orders.findMany({
      where: eq(orders.status, "paid"),
      orderBy: [desc(orders.placedAt)],
      limit: 20,
      with: { items: true, user: true },
    });
  },

  /**
   * Generate a sequential order number like GG-2025-00042.
   */
  async generateOrderNo(): Promise<string> {
    const year = new Date().getFullYear();
    const result = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(orders)
      .where(sql`extract(year from ${orders.placedAt}) = ${year}`);

    const seq = (result[0]?.count ?? 0) + 1;
    return `GG-${year}-${String(seq).padStart(5, "0")}`;
  },
};
