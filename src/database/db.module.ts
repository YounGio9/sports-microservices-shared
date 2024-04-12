import { DynamicModule, Global, Module, Inject } from "@nestjs/common";
import { PrismaService } from "./db.service";
import { ConfigService } from "../config";

@Global()
@Module({})
export class DatabaseModule {
  static forRootAsync(options: {
    imports: any[];
    useFactory?: (...args: any[]) => string;
    inject: any[];
  }): DynamicModule {
    const Prisma = {
      provide: PrismaService,
      useFactory: (configService: ConfigService) => {
        console.log(configService.get().db.url, "DB URL");
        return new PrismaService({
          datasources: {
            db: {
              url: options.useFactory
                ? options.useFactory()
                : configService.get().db.url,
            },
          },
        });
      },
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
