'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editPlayerAction } from '@/actions/player';
import { PlayerModal } from '@/components/playerModal';
import { ErrorModal } from '@/components/errorModal';
import { type Player, PlayerSchema } from '@/prisma-zod/index';

type Props = {
  defaultValues: Player;
};

export const PlayerEditForm = ({ defaultValues }: Props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Player>();
  const router = useRouter();

  // Formの入力パーツの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<Player>({
    resolver: zodResolver(PlayerSchema),
    defaultValues,
  });

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<Player> = async (data: Player) => {
    // 送信時にエラー表示を解除
    clearErrors();
    // サーバアクションを起動
    const result = await editPlayerAction(data);
    // サーバー側でエラー
    if (!result.success) {
      Object.entries(result.error!).map(([k, v]) => {
        setError(`root.${k}`, { message: v[0] });
      });
      return;
    }
    // 更新成功の場合、モーダルを表示する
    setData(result.data);
    setOpen(true);
  };

  const onSuccess = () => {
    router.push('/player');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            NAME
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register('name')}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.name?.message}
            {errors.root?.name?.message}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="hp">
            HP
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register('hp', { valueAsNumber: true })}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.hp?.message}
            {errors.root?.hp?.message}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="mp">
            MP
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register('mp', { valueAsNumber: true })}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.mp?.message}
            {errors.root?.mp?.message}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="job">
            JOB
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register('job')}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.job?.message}
            {errors.root?.job?.message}
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            登録
          </button>
        </div>
      </form>
      <PlayerModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={onSuccess}
        data={data}
        title="更新完了"
        successText="一覧へ移動"
      />
      {errors.root?.server_error?.message && (
        <ErrorModal
          onSuccess={onSuccess}
          message={errors.root?.server_error?.message}
          title="エラー"
          successText="一覧へ移動"
        />
      )}
    </>
  );
};
