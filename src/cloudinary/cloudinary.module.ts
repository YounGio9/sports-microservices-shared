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
    const CloudinaryFactory = {
      provide: CloudinaryService,
      useFactory: (configService: ConfigService) => {
        console.log("Cloudinary module is now active");
        cloudinary.config(configService.get().cloudinary);

        return new CloudinaryService();
      },
      inject: options.inject,
    };

    return {
      imports: options.imports,
      module: CloudinaryModule,
      providers: [CloudinaryFactory],
      exports: [CloudinaryFactory],
    };
  }
}
