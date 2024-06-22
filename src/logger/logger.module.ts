import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "../config";

import { Logger } from "./logger";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  imports: [ConfigModule],
  providers: [Logger],
  exports: [Logger],
})
export class AppLoggerModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
