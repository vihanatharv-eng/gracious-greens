import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ["log", "warn", "error"] });

  const port = process.env["PORT"] ?? 3001;
  await app.listen(port);

  console.log(`🪐 Hermes agent running on port ${port}`);
}

bootstrap().catch(console.error);
