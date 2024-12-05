//import prisma from '@/db/prisma';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//import { PlayerScheme } from '@/prisma-types/index';
//import { PlayerSchehme } from 'prisma/index';

import { PlayerSchema } from '@/prisma-types/index';

async function main() {
  const result = await prisma.player.findMany({});
}

export async function getPlayers() {
  // 全権取得
  const result = await prisma.player.findMany({
    where: {
      hp: 10,
    },
    orderBy: {
      id: 'asc',
    },
  });
  return result;
}
