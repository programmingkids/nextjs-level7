import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 数値で検索
  // SELECT * FROM Player WHERE mp = 50
  const result = await prisma.player.findMany({
    where: {
      mp: 50,
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
