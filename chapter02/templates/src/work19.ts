import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 集合検索4
  // SELECT COUNT(*), AVG(hp), job FROM Player GROUP BY job HAVING count(job) >= 2
  const result = await prisma.player.groupBy({
    by: ['job'],
    _count: {
      _all: true,
    },
    _avg: {
      hp: true,
    },
    having: {
      job: {
        _count: {
          gte: 2,
        },
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
