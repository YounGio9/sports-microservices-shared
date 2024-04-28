import pino from "pino";

export * from "./logger";
export * from "./logger.module";
export * from "./logger.middleware";
export const logger = pino();
