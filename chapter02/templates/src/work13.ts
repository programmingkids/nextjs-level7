import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // LIMIT取得
  // SELECT * FROM Player ORDER BY mp DESC LIMIT 3, 4
  const result = await prisma.player.findMany({
    orderBy: [
      {
        mp: 'desc',
      },
    ],
    skip: 3,
    take: 4,
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
