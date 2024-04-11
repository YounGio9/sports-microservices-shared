import { DynamicModule, Module } from "@nestjs/common";
import { PrismaService } from "./db.service";

@Module({})
export class DatabaseModule {
  static forRoot(options: {
    imports: any[];
    inject: any[];
    useFactory: (...args: any[]) => any;
  }): DynamicModule {
    const Prisma = {
      provide: PrismaService,
      useFactory: () =>
        new PrismaService({
          datasources: {
            db: {
              url: options.useFactory().dbUrl,
            },
          },
        }),
    };
    return {
      global: true,
      imports: options.imports,
      module: DatabaseModule,
      providers: [Prisma],
      exports: [Prisma],
    };
  }
}
