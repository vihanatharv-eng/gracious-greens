import {
  pgTable,
  uuid,
  text,
  numeric,
  integer,
  jsonb,
  timestamp,
  pgEnum,
  boolean,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ─── Enums ────────────────────────────────────────────────────────────────────

export const productStatusEnum = pgEnum("product_status", ["active", "paused", "draft"]);
export const mediaTypeEnum = pgEnum("media_type", ["image", "video"]);

// ─── Tables ───────────────────────────────────────────────────────────────────

export const categories = pgTable(
  "categories",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull().unique(),
    name: text("name").notNull(),
    description: text("description"),
    imageUrl: text("image_url"),
    parentId: uuid("parent_id"), // self-reference for sub-categories
    sort: integer("sort").default(0).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("categories_slug_idx").on(t.slug)]
);

export const products = pgTable(
  "products",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull(),
    categoryId: uuid("category_id").references(() => categories.id, { onDelete: "set null" }),
    title: text("title").notNull(),
    description: text("description"),
    story: text("story"), // emotional narrative shown on product page
    basePrice: numeric("base_price", { precision: 10, scale: 2 }).notNull(),
    status: productStatusEnum("status").default("draft").notNull(),
    // Personalization flags
    allowsCustomNote: boolean("allows_custom_note").default(true).notNull(),
    allowsCustomImage: boolean("allows_custom_image").default(false).notNull(),
    allowsEngraving: boolean("allows_engraving").default(false).notNull(),
    // Care & specs
    careInstructions: text("care_instructions"),
    weightGrams: integer("weight_grams"),
    // SEO
    seoTitle: text("seo_title"),
    seoDescription: text("seo_description"),
    seoKeywords: text("seo_keywords").array(),
    // Stats (denormalised for speed)
    totalReviews: integer("total_reviews").default(0).notNull(),
    averageRating: numeric("average_rating", { precision: 3, scale: 2 }).default("0").notNull(),
    // Timestamps
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("products_slug_idx").on(t.slug),
    index("products_status_idx").on(t.status),
    index("products_category_idx").on(t.categoryId),
  ]
);

export const productMedia = pgTable(
  "product_media",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    productId: uuid("product_id")
      .references(() => products.id, { onDelete: "cascade" })
      .notNull(),
    url: text("url").notNull(),
    alt: text("alt"),
    type: mediaTypeEnum("type").default("image").notNull(),
    sort: integer("sort").default(0).notNull(),
    isThumbnail: boolean("is_thumbnail").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("product_media_product_id_idx").on(t.productId)]
);

export const productVariants = pgTable(
  "product_variants",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    productId: uuid("product_id")
      .references(() => products.id, { onDelete: "cascade" })
      .notNull(),
    sku: text("sku").notNull(),
    name: text("name").notNull(), // e.g. "Small / Terracotta pot"
    priceDelta: numeric("price_delta", { precision: 10, scale: 2 }).default("0").notNull(),
    // Attributes as JSON: { "size": "small", "pot": "terracotta" }
    attributes: jsonb("attributes").$type<Record<string, string>>(),
    weightGrams: integer("weight_grams"),
    imageUrl: text("image_url"), // variant-specific override
    status: productStatusEnum("status").default("active").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    uniqueIndex("product_variants_sku_idx").on(t.sku),
    index("product_variants_product_id_idx").on(t.productId),
  ]
);

// ─── Relations ────────────────────────────────────────────────────────────────

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, { fields: [products.categoryId], references: [categories.id] }),
  media: many(productMedia),
  variants: many(productVariants),
}));

export const productMediaRelations = relations(productMedia, ({ one }) => ({
  product: one(products, { fields: [productMedia.productId], references: [products.id] }),
}));

export const productVariantsRelations = relations(productVariants, ({ one }) => ({
  product: one(products, { fields: [productVariants.productId], references: [products.id] }),
}));

// ─── Types ────────────────────────────────────────────────────────────────────

export type Category = typeof categories.$inferSelect;
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type ProductVariant = typeof productVariants.$inferSelect;
export type NewProductVariant = typeof productVariants.$inferInsert;
export type ProductMedia = typeof productMedia.$inferSelect;
