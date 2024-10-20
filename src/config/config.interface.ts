import { KafkaOptions, RedisOptions, TcpOptions } from "@nestjs/microservices";

export interface ConfigDatabase {
  url: string;
}

export interface ConfigSwagger {
  username: string;
  password: string;
  title: string;
  description: string;
  version: string;
}

export interface CloudinaryConfig {
  cloud_name: string;
  api_key: string;
  api_secret: string;
}

export interface AuthConfig {
  expiresIn: number | string;
  access_token_secret: string;
  refresh_token_secret: string;
}

export interface UserServiceConfig {
  options: UserServiceConfigOptions;
  transport: any;
}

export interface UserServiceConfigOptions {
  host: string;
  port: number;
}

export interface ConfigData {
  env: string;

  port: number;

  db: ConfigDatabase;

  swagger: ConfigSwagger;
  cloudinary: CloudinaryConfig;
  logLevel: string;
  auth: AuthConfig;
  userService?: TcpOptions;
  authService?: TcpOptions;
  clubService?: TcpOptions;
  eventService?: TcpOptions;
  paymentService?: TcpOptions;
  statisticService?: TcpOptions;
  notificationService?: RedisOptions;
  communicationService?: KafkaOptions;
}
