import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 件数取得
  // SELECT COUNT(*) FROM Player
  const result = await prisma.player.count();
  console.log(result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
