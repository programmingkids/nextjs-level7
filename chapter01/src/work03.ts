import { PrismaClient } from '@prisma/client';

// Prismaクライアント作成
const prisma = new PrismaClient();

async function main() {
  // 全件取得
  // select * from Player
  const result = await prisma.player.findMany();
  // 取得したレコードを表示
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
