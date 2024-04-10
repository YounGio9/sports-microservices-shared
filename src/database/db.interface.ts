import { PrismaClient } from '@prisma/client';

export interface DbConfig {
  entities: PrismaClient;
}
