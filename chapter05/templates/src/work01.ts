import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 新規追加
  // INSERT INTO Player ( name, hp, mp, job) VALUES (x, x, x, x)
  const values = {
    name: 'Anna',
    hp: 20,
    mp: 10,
    job: '遊び人',
  };
  const result = await prisma.player.create({
    data: {
      name: values.name,
      hp: values.hp,
      mp: values.mp,
      job: values.job,
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
