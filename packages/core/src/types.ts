// Re-export DB enum value types for use across the codebase

export type OrderStatus =
  | "created"
  | "awaiting_payment"
  | "paid"
  | "processing"
  | "packed"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "refunded"
  | "refund_pending";

export type ProductStatus = "active" | "paused" | "draft";
export type UserRole = "customer" | "admin" | "staff";
export type HermesRole = "owner" | "staff";
export type ApprovalStatus = "pending" | "approved" | "rejected" | "expired";
export type PermissionTier = "read" | "write-safe" | "write-risky";
