import { notFound } from 'next/navigation';
import { getPlayerById } from '@/db/player';
import { PlayerEditForm } from '@/components/playerEdtForm';

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params: { id } }: Props) {
  // 型変換
  const playerId = parseInt(id as string, 10);
  // 編集対象のデータを取得
  const result = await getPlayerById(playerId);
  if (!result.success) {
    // 存在しない場合、NotFoundにする
    notFound();
  }
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Player Edit</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <PlayerEditForm defaultValues={result.data} />
        </div>
      </div>
    </div>
  );
}
