import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 主キーで取得
  // SELECT * FROM Player WHERE id = 2
  const result = await prisma.player.findUnique({
    where: {
      id: 2,
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
