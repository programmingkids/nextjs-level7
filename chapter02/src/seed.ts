import { PrismaClient } from "@prisma/client";
import data from "./seedData";

const prisma = new PrismaClient();

async function main() {
  data.map(({ id, name, hp, mp, job }) => {
    (async () => {
      // update or insert
      const result = await prisma.player.upsert({
        where: { id },
        update: {},
        create: {
          id,
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
