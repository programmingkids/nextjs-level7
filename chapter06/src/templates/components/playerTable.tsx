import Link from 'next/link';
import { HiPencil } from 'react-icons/hi2';
import { type Player } from '@/prisma-zod/index';
import { PlayerDelete } from '@/components/playerDelete';

type Props = {
  list: Player[];
};

// プレイヤー一覧のテーブル
export const PlayerTable = ({ list }: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left">
        <TableHead />
        <tbody>
          {list.map((e: Player) => (
            <TableRow key={e.id} {...e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// テーブルの見出し
const TableHead = () => {
  return (
    <thead className="text-gray-100 bg-blue-800">
      <tr>
        <th className="p-3">ID</th>
        <th className="p-3">NAME</th>
        <th className="p-3">HP</th>
        <th className="p-3">MP</th>
        <th className="p-3">JOB</th>
        <th className="p-3">ACTION</th>
      </tr>
    </thead>
  );
};

// テーブルの1行部分
const TableRow = ({ id, name, hp, mp, job }: Player) => {
  return (
    <tr className="odd:bg-white even:bg-blue-50 border-b">
      <td className="p-3">{id}</td>
      <td className="p-3">{name}</td>
      <td className="p-3">{hp}</td>
      <td className="p-3">{mp}</td>
      <td className="p-3">{job}</td>
      <td className="p-3 flex justify-start gap-4">
        <Link
          href={`/player/${id}/edit`}
          className="text-lg text-blue-500 hover:text-blue-800"
        >
          <HiPencil />
        </Link>
        <PlayerDelete id={id} name={name} />
      </td>
    </tr>
  );
};
