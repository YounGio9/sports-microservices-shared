import { ConfigData } from "./config.interface";

export const DEFAULT_CONFIG: ConfigData = {
  port: Number(process.env.PORT || 3001),
  env: "production",
  db: {
    url: process.env.DATABASE_URL!,
  },
  auth: {
    expiresIn: "1d",
    access_token_secret: "",
    refresh_token_secret: "",
  },
  cloudinary: {
    cloud_name: "",
    api_key: "",
    api_secret: "",
  },
  swagger: {
    username: "",
    password: "",
    title: "NestJS Test",
    description: "Test",
    version: "1.0",
  },
  logLevel: "",
};
