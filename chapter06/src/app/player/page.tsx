import { PlayerTable } from '@/components/playerTable';
import { getPlayers } from '@/db/player';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function Page() {
  
  // 一覧データを取得
  const players = await getPlayers();
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Player List</h1>
      <div className="py-4 px-6">
        <PlayerTable list={players} />
      </div>
      <h1>
        <h2>
          <h3>aaa</h3>
        </h2>
      </h1>
    </div>
  );
}
