import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 集合検索1
  // SELECT AVG(hp) FROM Player
  const result = await prisma.player.aggregate({
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
