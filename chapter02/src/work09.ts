import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // OR検索
  // SELECT * FROM Player WHERE hp >= 200 OR mp <= 10
  const result = await prisma.player.findMany({
    where: {
      OR: [
        {
          hp: {
            gte: 200,
          },
        },
        {
          mp: {
            lte: 10,
          },
        },
      ],
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
