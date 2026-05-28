import type Anthropic from "@anthropic-ai/sdk";
import type { PermissionTier } from "@gg/core";

// ─── Tool Definition Type ─────────────────────────────────────────────────────

export type HermesTool = {
  definition: Anthropic.Tool;
  tier: PermissionTier;
  execute: (input: Record<string, unknown>, ctx: ToolContext) => Promise<string>;
};

export type ToolContext = {
  actor: string; // "hermes:telegram_user_id"
  role: "owner" | "staff";
};

// ─── Tool Catalogue ───────────────────────────────────────────────────────────

export const tools: Record<string, HermesTool> = {
  inventory_get_low_stock: {
    tier: "read",
    definition: {
      name: "inventory_get_low_stock",
      description: "Get all product variants that are at or below their low-stock threshold.",
      input_schema: { type: "object", properties: {}, required: [] },
    },
    async execute(_input, _ctx) {
      const { inventoryService } = await import("@gg/core");
      const items = await inventoryService.getLowStock();
      if (items.length === 0) return "✅ No low-stock items.";
      return items
        .map(
          (i) =>
            `• ${i.productTitle} — ${i.variantName} (SKU: ${i.sku}): ${i.available} available (threshold: ${i.lowStockThreshold})`
        )
        .join("\n");
    },
  },

  inventory_set_stock: {
    tier: "write-safe",
    definition: {
      name: "inventory_set_stock",
      description: "Set the absolute stock quantity for a product variant by SKU or product name.",
      input_schema: {
        type: "object",
        properties: {
          variant: {
            type: "string",
            description: "SKU (e.g. MONST-SM-TERRA) or product name (e.g. Monstera)",
          },
          quantity: { type: "integer", minimum: 0 },
        },
        required: ["variant", "quantity"],
      },
    },
    async execute(input, ctx) {
      const { inventoryService, logAction } = await import("@gg/core");
      const variant = await inventoryService.resolveVariant(input["variant"] as string);
      if (!variant) return `❌ Could not find variant matching "${input["variant"]}"`;

      const variantId = "product_variants" in variant
        ? (variant as any).product_variants.id
        : (variant as any).id;

      const { before, after } = await inventoryService.setStock(variantId, input["quantity"] as number);
      await logAction({ actor: ctx.actor }, "inventory.set_stock", `variant:${variantId}`, { quantity: before }, { quantity: after });
      return `✅ Stock set to ${after} (was ${before}).`;
    },
  },

  analytics_revenue: {
    tier: "read",
    definition: {
      name: "analytics_revenue",
      description: "Get revenue, order count, and average order value for a period.",
      input_schema: {
        type: "object",
        properties: {
          period: {
            type: "string",
            enum: ["today", "week", "month", "all"],
            description: "Time period for the report.",
          },
        },
        required: ["period"],
      },
    },
    async execute(input, _ctx) {
      const { ordersService } = await import("@gg/core");
      const summary = await ordersService.getRevenueSummary(input["period"] as any);
      return [
        `📊 Revenue (${summary.period}):`,
        `  Orders: ${summary.orderCount}`,
        `  Revenue: ₹${summary.revenue.toFixed(2)}`,
        `  AOV: ₹${summary.avgOrderValue.toFixed(2)}`,
      ].join("\n");
    },
  },

  analytics_top_products: {
    tier: "read",
    definition: {
      name: "analytics_top_products",
      description: "List top-selling products by units sold for a given period.",
      input_schema: {
        type: "object",
        properties: {
          period: { type: "string", enum: ["week", "month", "all"] },
          limit: { type: "integer", minimum: 1, maximum: 10 },
        },
        required: ["period"],
      },
    },
    async execute(input, _ctx) {
      const { ordersService } = await import("@gg/core");
      const items = await ordersService.getTopProducts(input["period"] as any, (input["limit"] as number) ?? 5);
      if (items.length === 0) return "No sales data for this period.";
      return items
        .map(
          (p, i) =>
            `${i + 1}. ${(p.variantSnapshot as any)?.productTitle ?? "Unknown"} — ${p.totalSold} units (₹${Number(p.totalRevenue).toFixed(0)})`
        )
        .join("\n");
    },
  },
};

// All tool definitions (for sending to Claude)
export const toolDefinitions = Object.values(tools).map((t) => t.definition);
