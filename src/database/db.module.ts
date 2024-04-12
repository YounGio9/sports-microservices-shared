import { DynamicModule, Global, Module, Inject } from "@nestjs/common";
import { PrismaService } from "./db.service";
import { ConfigModule, ConfigService } from "../config";

@Global()
@Module({})
export class DatabaseModule {
  static forRootAsync(options: {
    imports: any[];
    useFactory?: (...args: any[]) => any;
    inject: any[];
  }): DynamicModule {
    const Prisma = {
      provide: PrismaService,
      useFactory: (configService: ConfigService) =>
        new PrismaService({
          datasources: {
            db: {
              url: configService.get().db.url,
            },
          },
        }),
      inject: options.inject,
    };

    return {
      imports: options.imports,
      module: DatabaseModule,
      providers: [Prisma],
      exports: [Prisma],
    };
  }
}
