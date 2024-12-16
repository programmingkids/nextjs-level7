import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 文字列で検索
  // SELECT * FROM Player WHERE job = '勇者'
  const result = await prisma.player.findMany({
    where: {
      job: '勇者',
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
