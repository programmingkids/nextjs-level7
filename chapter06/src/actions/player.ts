'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createPlayer, updatePlayer, deletePlayerById } from '@/db/player';
import {
  type PlayerOptionalDefaults,
  type Player,
  PlayerOptionalDefaultsSchema,
  PlayerSchema,
} from '@/prisma-zod/index';

// 新規登録処理を行うサーバーアクション関数
export async function createPlayerAction(data: PlayerOptionalDefaults) {
  // Zodによるバリデーションを実行する
  const result = PlayerOptionalDefaultsSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await createPlayer(data);
  // 一覧画面のキャッシュ削除
  revalidatePath('/player');
  // 結果を返す
  return res;
}

// 更新処理を行うサーバーアクション関数
export async function editPlayerAction(data: Player) {
  // Zodによるバリデーションを実行する
  const result = PlayerSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await updatePlayer(data);

  // 一覧画面のキャッシュ削除
  revalidatePath('/player');
  // 結果を返す
  return res;
}

export async function deletePlayerAction(id: number) {
  // APIに通信処理
  await deletePlayerById(id);
  // 一覧画面のキャッシュ削除
  revalidatePath('/player');
  // 一覧画面へサーバーでリダイレクト
  redirect('/player');
}
