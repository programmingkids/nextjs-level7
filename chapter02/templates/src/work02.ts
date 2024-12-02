import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1件取得
  // SELECT * FROM Player WHER hp = 10 LIMIT 1
  const result = await prisma.player.findFirst({
    where: {
      hp: 10,
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
