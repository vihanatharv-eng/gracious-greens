import {
  pgTable,
  uuid,
  text,
  integer,
  jsonb,
  timestamp,
  pgEnum,
  boolean,
  index,
  customType,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ─── pgvector custom type ─────────────────────────────────────────────────────
// Requires: CREATE EXTENSION IF NOT EXISTS vector; in your Supabase SQL editor

const vector = customType<{ data: number[]; config: { dimensions: number } }>({
  dataType(config) {
    return `vector(${config?.dimensions ?? 1024})`;
  },
  toDriver(value: number[]) {
    return `[${value.join(",")}]`;
  },
  fromDriver(value: string) {
    return value
      .slice(1, -1)
      .split(",")
      .map(Number);
  },
});

// ─── Enums ────────────────────────────────────────────────────────────────────

export const embeddingEntityEnum = pgEnum("embedding_entity", [
  "product",
  "product_variant",
  "faq",
  "blog_post",
]);

export const hermesRoleEnum = pgEnum("hermes_role", ["owner", "staff"]);

export const approvalStatusEnum = pgEnum("approval_status", [
  "pending",
  "approved",
  "rejected",
  "expired",
]);

export const contentSuggestionStatusEnum = pgEnum("content_suggestion_status", [
  "generated",
  "approved",
  "posted",
  "rejected",
]);

// ─── Tables ───────────────────────────────────────────────────────────────────

/**
 * Semantic embeddings for product search and gift recommendations.
 * Enable with: CREATE EXTENSION vector; and CREATE INDEX ... USING hnsw
 */
export const embeddings = pgTable(
  "embeddings",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    entityType: embeddingEntityEnum("entity_type").notNull(),
    entityId: uuid("entity_id").notNull(),
    // The text that was embedded (for debugging / re-embedding)
    content: text("content").notNull(),
    // 1024-dim Voyage AI or OpenAI embeddings
    embedding: vector("embedding", { dimensions: 1024 }),
    model: text("model").default("voyage-3").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("embeddings_entity_type_id_idx").on(t.entityType, t.entityId),
    // The HNSW vector index must be created separately in a migration:
    // CREATE INDEX embeddings_vector_idx ON embeddings USING hnsw (embedding vector_cosine_ops);
  ]
);

/**
 * Hermes agent sessions — short-term context window per user.
 */
export const hermesSessions = pgTable(
  "hermes_sessions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    telegramUserId: text("telegram_user_id").notNull().unique(),
    role: hermesRoleEnum("role").default("staff").notNull(),
    // Compressed conversation context (last N turns)
    contextJson: jsonb("context_json").$type<Array<{ role: string; content: string }>>(),
    lastActiveAt: timestamp("last_active_at", { withTimezone: true }).defaultNow().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("hermes_sessions_telegram_user_id_idx").on(t.telegramUserId)]
);

/**
 * Approval queue for Hermes risky-tier actions.
 * Pending approvals are sent as Telegram inline-keyboard messages.
 */
export const approvals = pgTable(
  "approvals",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    // The tool name e.g. "coupons_create"
    action: text("action").notNull(),
    // Full tool call input — used to execute on approval
    payload: jsonb("payload").$type<Record<string, unknown>>().notNull(),
    // Human-readable summary for the Telegram message
    summary: text("summary").notNull(),
    requestedBy: text("requested_by").notNull(), // telegram_user_id
    status: approvalStatusEnum("status").default("pending").notNull(),
    approvedBy: text("approved_by"),
    // Telegram message ID of the approval message (to edit/delete on resolution)
    telegramMessageId: integer("telegram_message_id"),
    telegramChatId: text("telegram_chat_id"),
    // Result after execution
    executionResult: text("execution_result"),
    expiresAt: timestamp("expires_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    resolvedAt: timestamp("resolved_at", { withTimezone: true }),
  },
  (t) => [
    index("approvals_status_idx").on(t.status),
    index("approvals_created_at_idx").on(t.createdAt),
  ]
);

/**
 * Full audit trail — every Hermes/admin action.
 */
export const auditLogs = pgTable(
  "audit_logs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    // Format: "hermes:123456789" | "admin:uuid" | "system"
    actor: text("actor").notNull(),
    action: text("action").notNull(), // e.g. "inventory.set_stock"
    target: text("target"), // e.g. "variant:uuid"
    before: jsonb("before"),
    after: jsonb("after"),
    approvalId: uuid("approval_id"),
    ipAddress: text("ip_address"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("audit_logs_actor_idx").on(t.actor),
    index("audit_logs_action_idx").on(t.action),
    index("audit_logs_created_at_idx").on(t.createdAt),
  ]
);

// ─── Instagram ────────────────────────────────────────────────────────────────

export const igPostTypeEnum = pgEnum("ig_post_type", ["image", "reel", "carousel", "story"]);

export const igPosts = pgTable(
  "ig_posts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    igMediaId: text("ig_media_id").notNull().unique(),
    type: igPostTypeEnum("type").notNull(),
    caption: text("caption"),
    permalink: text("permalink"),
    thumbnailUrl: text("thumbnail_url"),
    postedAt: timestamp("posted_at", { withTimezone: true }).notNull(),
    rawPayload: jsonb("raw_payload"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("ig_posts_posted_at_idx").on(t.postedAt)]
);

export const igInsights = pgTable(
  "ig_insights",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    igPostId: uuid("ig_post_id")
      .references(() => igPosts.id, { onDelete: "cascade" })
      .notNull(),
    reach: integer("reach").default(0),
    impressions: integer("impressions").default(0),
    likes: integer("likes").default(0),
    comments: integer("comments").default(0),
    saves: integer("saves").default(0),
    shares: integer("shares").default(0),
    profileVisits: integer("profile_visits").default(0),
    fetchedAt: timestamp("fetched_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("ig_insights_post_id_idx").on(t.igPostId)]
);

export const contentSuggestions = pgTable(
  "content_suggestions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    occasion: text("occasion"), // "Mother's Day", "Diwali", etc.
    postType: igPostTypeEnum("post_type").default("reel"),
    idea: text("idea").notNull(),
    caption: text("caption"),
    hashtags: text("hashtags").array().default([]),
    // Best time to post (ISO weekday + hour)
    bestPostDay: text("best_post_day"), // "monday"
    bestPostHour: integer("best_post_hour"), // 0–23
    status: contentSuggestionStatusEnum("status").default("generated").notNull(),
    approvedBy: text("approved_by"),
    scheduledFor: timestamp("scheduled_for", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("content_suggestions_status_idx").on(t.status)]
);

// ─── Relations ────────────────────────────────────────────────────────────────

export const igPostsRelations = relations(igPosts, ({ many }) => ({
  insights: many(igInsights),
}));

export const igInsightsRelations = relations(igInsights, ({ one }) => ({
  post: one(igPosts, { fields: [igInsights.igPostId], references: [igPosts.id] }),
}));

// ─── Types ────────────────────────────────────────────────────────────────────

export type Embedding = typeof embeddings.$inferSelect;
export type HermesSession = typeof hermesSessions.$inferSelect;
export type Approval = typeof approvals.$inferSelect;
export type NewApproval = typeof approvals.$inferInsert;
export type AuditLog = typeof auditLogs.$inferSelect;
export type IgPost = typeof igPosts.$inferSelect;
export type IgInsight = typeof igInsights.$inferSelect;
export type ContentSuggestion = typeof contentSuggestions.$inferSelect;
