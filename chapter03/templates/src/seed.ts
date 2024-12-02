import { PrismaClient } from '@prisma/client';
import { jobData, playerData } from './seedData';

const prisma = new PrismaClient();

async function main() {
  (async () => {
    for (const { id, name } of jobData) {
      // update or insert
      const result = await prisma.job.upsert({
        where: { id },
        update: {
          name,
        },
        create: {
          id,
          name,
        },
      });
      console.log(result);
    }
    for (const { id, name, hp, mp, jobId } of playerData) {
      // update or insert
      const result = await prisma.player.upsert({
        where: { id },
        update: {
          name,
          hp,
          mp,
          jobId,
        },
        create: {
          id,
          name,
          hp,
          mp,
          jobId,
        },
      });
      console.log(result);
    }
  })();
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
