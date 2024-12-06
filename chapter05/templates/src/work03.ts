import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 削除
  // DELETE FROM Player WHERE id = 4
  const result = await prisma.player.delete({
    where: {
      id: 4,
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
