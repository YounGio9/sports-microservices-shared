import { DynamicModule, Module } from "@nestjs/common";
import { PrismaService } from "./db.service";

@Module({})
export class DatabaseModule {
  static forRoot(dataBaseUrl: string): DynamicModule {
    const Prisma = {
      provide: PrismaService,
      useFactory: () =>
        new PrismaService({
          datasources: {
            db: {
              url: dataBaseUrl,
            },
          },
        }),
    };
    return {
      module: DatabaseModule,
      providers: [Prisma],
      exports: [Prisma],
    };
  }
}
