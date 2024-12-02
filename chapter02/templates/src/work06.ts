import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 数値で比較検索
  // SELECT * FROM Player WHERe mp >=40
  const result = await prisma.player.findMany({
    where: {
      mp: {
        gte: 40,
      },
    },
  });
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
