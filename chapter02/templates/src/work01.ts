import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 全件取得
  // SELECT * FROM Player
  const result = await prisma.player.findMany();
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
