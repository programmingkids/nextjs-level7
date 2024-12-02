import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 並び替え
  // SELECT id, name, hp FROM Player ORDER BY hp DESC
  const result = await prisma.player.findMany({
    select: {
      id: true,
      name: true,
      hp: true,
    },
    orderBy: [
      {
        hp: 'desc',
      },
    ],
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
