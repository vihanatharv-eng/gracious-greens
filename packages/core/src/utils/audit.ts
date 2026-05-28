import { db, auditLogs } from "@gg/db";

export type AuditContext = {
  actor: string; // "hermes:123456789" | "admin:uuid" | "system"
  approvalId?: string;
  ipAddress?: string;
};

export async function logAction(
  ctx: AuditContext,
  action: string,
  target?: string,
  before?: unknown,
  after?: unknown
): Promise<void> {
  await db.insert(auditLogs).values({
    actor: ctx.actor,
    action,
    target,
    before: before ? (before as any) : undefined,
    after: after ? (after as any) : undefined,
    approvalId: ctx.approvalId,
    ipAddress: ctx.ipAddress,
  });
}
