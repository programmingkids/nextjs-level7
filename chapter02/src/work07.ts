import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // あいまい検索
  // SELECT * FROM Player WHERE name LIKE '%y%'
  const result = await prisma.player.findMany({
    where: {
      name: {
        contains: 'y',
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
