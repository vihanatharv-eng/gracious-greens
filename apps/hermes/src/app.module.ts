import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { TelegramModule } from "./telegram/telegram.module";
import { AgentModule } from "./agent/agent.module";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TelegramModule,
    AgentModule,
  ],
})
export class AppModule {}
