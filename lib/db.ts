import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prisma 7 configuration - connection URL passed to constructor
// For frontend-only viewing, this will work even without a database connection
const prismaOptions = process.env.DATABASE_URL 
  ? { datasourceUrl: process.env.DATABASE_URL }
  : {};

export const db = globalForPrisma.prisma ?? new PrismaClient(prismaOptions);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
