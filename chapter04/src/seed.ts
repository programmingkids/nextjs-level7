import { PrismaClient } from '@prisma/client';
import { playerData, weaponData, playerWeaponData } from './seedData';

const prisma = new PrismaClient();

async function main() {
  (async () => {
    for (const { id, name, age } of playerData) {
      // update or insert
      const result = await prisma.player.upsert({
        where: { id },
        update: {
          name,
          age,
        },
        create: {
          id,
          name,
          age,
        },
      });
      console.log(result);
    }
    for (const { id, name } of weaponData) {
      // update or insert
      const result = await prisma.weapon.upsert({
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
    for (const { id, playerId, weaponId } of playerWeaponData) {
      // update or insert
      const result = await prisma.playerWeapon.upsert({
        where: { id },
        update: {
          playerId,
          weaponId,
        },
        create: {
          playerId,
          weaponId,
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
