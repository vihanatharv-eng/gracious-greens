import { Injectable, OnModuleInit, Logger } from "@nestjs/common";
import TelegramBot from "node-telegram-bot-api";
import { AgentService } from "../agent/agent.service";

@Injectable()
export class TelegramService implements OnModuleInit {
  private readonly logger = new Logger(TelegramService.name);
  private bot!: TelegramBot;

  // Allowlist: comma-separated Telegram user IDs in env
  private readonly allowedIds = new Set(
    (process.env["TELEGRAM_ALLOWED_USER_IDS"] ?? "")
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean)
  );

  constructor(private readonly agentService: AgentService) {}

  onModuleInit() {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    if (!token) {
      this.logger.warn("TELEGRAM_BOT_TOKEN not set — Telegram bot disabled");
      return;
    }

    this.bot = new TelegramBot(token, { polling: true });
    this.bot.on("message", (msg) => this.handleMessage(msg));
    this.bot.on("callback_query", (query) => this.handleCallbackQuery(query));

    this.logger.log("Hermes Telegram bot started (polling)");
  }

  private async handleMessage(msg: TelegramBot.Message) {
    const chatId = msg.chat.id;
    const userId = String(msg.from?.id);
    const text = msg.text?.trim();

    if (!text || text.startsWith("/start")) {
      await this.bot.sendMessage(
        chatId,
        "👋 Hey! I'm Hermes, your Gracious Greens business assistant.\n\nAsk me anything — stock levels, revenue, orders, content ideas..."
      );
      return;
    }

    // Auth check
    if (!this.allowedIds.has(userId)) {
      this.logger.warn(`Unauthorised access attempt from Telegram user ${userId}`);
      await this.bot.sendMessage(chatId, "⛔ You are not authorised to use Hermes.");
      return;
    }

    // Show typing indicator
    await this.bot.sendChatAction(chatId, "typing");

    try {
      const response = await this.agentService.handleMessage({
        text,
        actor: `hermes:${userId}`,
        role: "owner",
        chatId: String(chatId),
      });

      // Handle approval requests (send inline keyboard)
      if (response.type === "approval_required") {
        await this.bot.sendMessage(chatId, response.message, {
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [
                { text: "✅ Approve", callback_data: `approve:${response.approvalId}` },
                { text: "❌ Cancel", callback_data: `reject:${response.approvalId}` },
              ],
            ],
          },
        });
      } else {
        await this.bot.sendMessage(chatId, response.message, { parse_mode: "Markdown" });
      }
    } catch (error) {
      this.logger.error("Agent error", error);
      await this.bot.sendMessage(chatId, "⚠️ Something went wrong. Please try again.");
    }
  }

  private async handleCallbackQuery(query: TelegramBot.CallbackQuery) {
    const data = query.data ?? "";
    const userId = String(query.from.id);
    const chatId = query.message?.chat.id;
    if (!chatId) return;

    if (!this.allowedIds.has(userId)) return;

    const [action, approvalId] = data.split(":");
    if (!approvalId) return;

    await this.bot.answerCallbackQuery(query.id);

    if (action === "approve") {
      const result = await this.agentService.resolveApproval(approvalId, "approved", userId);
      await this.bot.editMessageText(`✅ Approved. ${result}`, {
        chat_id: chatId,
        message_id: query.message?.message_id,
      });
    } else if (action === "reject") {
      await this.agentService.resolveApproval(approvalId, "rejected", userId);
      await this.bot.editMessageText("❌ Action cancelled.", {
        chat_id: chatId,
        message_id: query.message?.message_id,
      });
    }
  }
}
