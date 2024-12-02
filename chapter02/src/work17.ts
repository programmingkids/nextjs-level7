import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 集合検索2
  // SELECT COUNT(*), job FROM Player GROUP BY job
  const result = await prisma.player.groupBy({
    by: ['job'],
    _count: {
      _all: true,
    }
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
