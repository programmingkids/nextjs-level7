import prisma from '@/db/prisma';
import data from '@/db/seedData';

async function main() {
  data.map(({ name, hp, mp, job }) => {
    (async () => {
      // insert
      const result = await prisma.player.create({
        data: {
          name,
          hp,
          mp,
          job,
        },
      });
      console.log(result);
    })();
  });
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
