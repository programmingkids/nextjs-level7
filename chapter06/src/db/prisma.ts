import { PrismaClient } from '@prisma/client';

// Prisma Connection Singleton
//const prisma = global.prisma ?? new PrismaClient();
//global.prisma = prisma;

const prisma = new PrismaClient();
export default prisma;
