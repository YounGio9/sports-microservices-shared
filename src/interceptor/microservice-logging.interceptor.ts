import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { logger } from "../logger";

@Injectable()
export class MicroserviceLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const pattern = context.switchToRpc().getContext(); // Get the Message Pattern name

    logger.info(`<${pattern.args[1]}> triggered`);

    return next.handle();
  }
}
