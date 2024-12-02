import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // AND検索
  // SELECT * FROM Player WHERE hp <= 20 AND mp >= 40
  const result = await prisma.player.findMany({
    where: {
      OR: [
        {
          hp: {
            lte: 20,
          },
          mp: {
            gte: 40,
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
