import { DynamicModule, Global, Module, Inject } from "@nestjs/common";
import { CloudinaryService } from "./cloudinary.service";
import { ConfigService } from "../config";
import { v2 as cloudinary } from "cloudinary";

@Global()
@Module({})
export class CloudinaryModule {
  static forRootAsync(options: {
    imports: any[];
    useFactory?: (...args: any[]) => string;
    inject: any[];
  }): DynamicModule {
    const Cloudinary = {
      provide: CloudinaryService,
      useFactory: (configService: ConfigService) => {
        console.log("Cloudinary module is now active");
        return cloudinary.config(configService.get().cloudinary);
      },
      inject: options.inject,
    };

    return {
      imports: options.imports,
      module: CloudinaryModule,
      providers: [Cloudinary],
      exports: [Cloudinary],
    };
  }
}
