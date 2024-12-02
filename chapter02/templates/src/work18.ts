import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 集合検索3
  // SELECT AVG(hp), job FROM Player WHERE mp <= 100 GROUP BY job
  const result = await prisma.player.groupBy({
    where: {
      mp: {
        lte: 100,
      },
    },
    by: ['job'],
    _avg: {
      hp: true,
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
