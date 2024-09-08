import { Injectable } from "@nestjs/common";
import { DEFAULT_CONFIG } from "./config.default";
import {
  CloudinaryConfig,
  ConfigData,
  ConfigDatabase,
  ConfigSwagger,
} from "./config.interface";
import { Transport } from "@nestjs/microservices";
@Injectable()
export class ConfigService {
  private config: ConfigData;
  constructor(data: ConfigData = DEFAULT_CONFIG) {
    this.config = data;
  }

  public loadFromEnv() {
    this.config = this.parseConfigFromEnv(process.env);
  }

  private parseConfigFromEnv(env: NodeJS.ProcessEnv): ConfigData {
    return {
      env: env.NODE_ENV || DEFAULT_CONFIG.env,
      port: parseInt(env.PORT!, 10),
      db: this.parseDBConfig(env, DEFAULT_CONFIG.db),
      cloudinary: this.parseCloudinaryConfig(env, DEFAULT_CONFIG.cloudinary),
      swagger: this.parseSwaggerConfig(env, DEFAULT_CONFIG.swagger),
      logLevel: env.LOG_LEVEL!,
      auth: {
        expiresIn: Number(env.TOKEN_EXPIRY),
        access_token_secret: env.JWT_ACCESS_TOKEN_SECRET!,
        refresh_token_secret: env.JWT_REFRESH_TOKEN_SECRET!,
      },
      authService: {
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 3001,
        },
      },
      communicationService: {
        transport: Transport.REDIS,
        options: {
          host: env.REDIS_HOST,
          port: Number(env.REDIS_PORT),
          password: env.REDIS_PASSWORD,
          username: env.REDIS_USERNAME,
          retryAttempts: Number(env.REDIS_ATTEMPTS),
          retryDelay: Number(env.REDIS_DELAY),
          tls: {
            rejectUnauthorized: false,
          },
        },
      },
    };
  }
  private parseDBConfig(
    env: NodeJS.ProcessEnv,
    defaultConfig: Readonly<ConfigDatabase>
  ) {
    return {
      url: env.DATABASE_URL || defaultConfig.url,
    };
  }

  private parseCloudinaryConfig(
    env: NodeJS.ProcessEnv,
    defaultConfig: Readonly<CloudinaryConfig>
  ) {
    return {
      cloud_name: env.CLOUDINARY_CLOUD_NAME || defaultConfig.cloud_name,
      api_key: env.CLOUDINARY_API_KEY || defaultConfig.api_key,
      api_secret: env.CLOUDINARY_API_SECRET || defaultConfig.api_secret,
    };
  }
  private parseSwaggerConfig(
    env: NodeJS.ProcessEnv,
    defaultConfig: Readonly<ConfigSwagger>
  ) {
    return {
      username: env.SWAGGER_USERNAME || defaultConfig.username,
      password: env.SWAGGER_PASSWORD || defaultConfig.password,
      title: defaultConfig.title,
      description: defaultConfig.description,
      version: defaultConfig.version,
      // tags: ["Test"],
    };
  }

  public get(): Readonly<ConfigData> {
    return this.config;
  }
}
