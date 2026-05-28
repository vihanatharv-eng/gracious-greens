import { Module } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { AgentModule } from "../agent/agent.module";

@Module({
  imports: [AgentModule],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
