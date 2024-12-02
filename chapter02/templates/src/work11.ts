import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // カラム選択
  // SELECT name, job FROM Player WHERE hp <= 20
  const result = await prisma.player.findMany({
    select: {
      name: true,
      job: true,
    },
    where: {
      hp: {
        lte: 20,
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
