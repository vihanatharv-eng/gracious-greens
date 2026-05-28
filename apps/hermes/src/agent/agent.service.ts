import { Injectable, Logger } from "@nestjs/common";
import Anthropic from "@anthropic-ai/sdk";
import { tools, toolDefinitions, HERMES_SYSTEM_PROMPT } from "@gg/ai";
import { db, approvals } from "@gg/db";
import { eq } from "drizzle-orm";
import type { ToolContext } from "@gg/ai";

// ─── Types ────────────────────────────────────────────────────────────────────

export type AgentResponse =
  | { type: "text"; message: string }
  | { type: "approval_required"; message: string; approvalId: string };

export type AgentInput = {
  text: string;
  actor: string;
  role: "owner" | "staff";
  chatId: string;
};

// ─── Agent Service ────────────────────────────────────────────────────────────

@Injectable()
export class AgentService {
  private readonly logger = new Logger(AgentService.name);
  private readonly client: Anthropic;

  // Per-user conversation history (in-memory, short TTL)
  private readonly sessions = new Map<string, Anthropic.MessageParam[]>();

  constructor() {
    this.client = new Anthropic({ apiKey: process.env["ANTHROPIC_API_KEY"] });
  }

  async handleMessage(input: AgentInput): Promise<AgentResponse> {
    const { text, actor, role } = input;

    // Get or init conversation history
    const history = this.sessions.get(actor) ?? [];
    history.push({ role: "user", content: text });

    // Keep context window lean: last 20 turns
    const trimmedHistory = history.slice(-20);

    const ctx: ToolContext = { actor, role };

    // Claude agentic loop
    let messages: Anthropic.MessageParam[] = [...trimmedHistory];

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const response = await this.client.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 1024,
        system: HERMES_SYSTEM_PROMPT,
        tools: toolDefinitions as Anthropic.Tool[],
        messages,
      });

      messages.push({ role: "assistant", content: response.content });

      // If Claude wants to use a tool
      if (response.stop_reason === "tool_use") {
        const toolResults: Anthropic.ToolResultBlockParam[] = [];

        for (const block of response.content) {
          if (block.type !== "tool_use") continue;

          const tool = tools[block.name];
          if (!tool) {
            toolResults.push({ type: "tool_result", tool_use_id: block.id, content: "Tool not found." });
            continue;
          }

          const toolInput = block.input as Record<string, unknown>;

          // Check if risky tier — create approval instead of executing
          if (tool.tier === "write-risky") {
            const summary = `Action: **${block.name}**\nParams: \`${JSON.stringify(toolInput, null, 2)}\``;

            const [approval] = await db
              .insert(approvals)
              .values({
                action: block.name,
                payload: toolInput,
                summary,
                requestedBy: actor,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 min
              })
              .returning();

            // Store pending session
            this.sessions.set(actor, messages);

            return {
              type: "approval_required",
              message: `⚠️ This action requires your approval:\n\n${summary}`,
              approvalId: approval!.id,
            };
          }

          // Execute safe / read-tier tool
          try {
            const result = await tool.execute(toolInput, ctx);
            toolResults.push({ type: "tool_result", tool_use_id: block.id, content: result });
          } catch (err) {
            this.logger.error(`Tool ${block.name} failed`, err);
            toolResults.push({
              type: "tool_result",
              tool_use_id: block.id,
              content: `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
            });
          }
        }

        messages.push({ role: "user", content: toolResults });
        continue; // loop back to get Claude's final answer
      }

      // End of loop — extract text response
      const textBlock = response.content.find((b) => b.type === "text");
      const reply = textBlock?.type === "text" ? textBlock.text : "Done.";

      // Save trimmed history
      messages.push({ role: "assistant", content: reply });
      this.sessions.set(actor, messages.slice(-20));

      return { type: "text", message: reply };
    }
  }

  async resolveApproval(
    approvalId: string,
    decision: "approved" | "rejected",
    approvedBy: string
  ): Promise<string> {
    const approval = await db.query.approvals.findFirst({
      where: eq(approvals.id, approvalId),
    });

    if (!approval) return "Approval not found.";
    if (approval.status !== "pending") return "Already resolved.";

    if (decision === "rejected") {
      await db
        .update(approvals)
        .set({ status: "rejected", approvedBy, resolvedAt: new Date() })
        .where(eq(approvals.id, approvalId));
      return "Action cancelled.";
    }

    // Execute the tool
    const tool = tools[approval.action];
    if (!tool) return "Tool no longer available.";

    const ctx: ToolContext = { actor: approval.requestedBy, role: "owner" };
    const result = await tool.execute(approval.payload as Record<string, unknown>, ctx);

    await db
      .update(approvals)
      .set({ status: "approved", approvedBy, resolvedAt: new Date(), executionResult: result })
      .where(eq(approvals.id, approvalId));

    return result;
  }
}
