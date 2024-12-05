import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 多対多で検索2
  const result = await prisma.player.findMany({
    where: {
      weapons: {
        some: {
          weapon: {
            name: '魔法の杖',
          },
        },
      },
    },
    include: {
      weapons: {
        include: {
          weapon: true,
        },
      },
    },
  });
  console.dir(result, { depth: null });
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
