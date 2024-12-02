import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // NOT検索
  // SELECT * FROM Player WHERE name NOT LIKE 'M%'
  const result = await prisma.player.findMany({
    where: {
      NOT: [
        {
          name: {
            startsWith: 'M',
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
