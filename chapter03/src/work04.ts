import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1対多で全件取得
  const result = await prisma.job.findMany({
    include: {
      players: true,
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
