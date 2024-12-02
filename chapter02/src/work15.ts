import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 件数取得2
  // SELECT COUNT(*) FROM Player WHERE hp >= 100
  const result = await prisma.player.count({
    where: {
      hp: {
        gte: 100,
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
