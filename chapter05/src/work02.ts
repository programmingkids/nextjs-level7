import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 更新
  // UPDATE Player SET name = x, hp = x, mp = x, job = x WHERE id = 4
  const values = {
    name: 'Elsa',
    hp: 10,
    mp: 100,
    job: '魔法使い',
  };
  const result = await prisma.player.update({
    data: values,
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
