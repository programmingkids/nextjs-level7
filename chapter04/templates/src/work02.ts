import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 多対多で全件取得2
  const result = await prisma.player.findMany({
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
