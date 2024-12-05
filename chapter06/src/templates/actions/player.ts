'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as z from 'zod';
import { PlayerType, playerSchema } from '@/lib/schemas';
import { postPlayer, putPlayer, deletePlayerById } from '@/lib/api';

// 新規登録処理を行うサーバーアクション関数
export async function createPlayer(data: PlayerType) {
  // Zodによるバリデーションを実行する
  const result = playerSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、APIに通信処理
  const res = await postPlayer(result.data);

  // 登録失敗の場合、errorを返す
  if (!res.success) {
    // エラーデータを整理する
    const customError = new z.ZodError([]);
    Object.entries(res.error).map(([key, value]) => {
      const message = (value as [string])[0];
      customError.addIssue({
        code: z.ZodIssueCode.custom,
        path: [key],
        message,
      });
    });
    // エラーデータを返す
    return {
      success: res.success,
      error: customError.flatten().fieldErrors,
    };
  }

  // 登録成功の場合、一覧画面のキャッシュ削除
  revalidatePath('/player');
  // 結果を返す
  return {
    success: res.success,
    data: res.data,
  };
}

// 更新処理を行うサーバーアクション関数
export async function editPlayer(data: PlayerType) {
  // Zodによるバリデーションを実行する
  const result = playerSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、APIに通信処理
  const res = await putPlayer(result.data);

  // 更新失敗の場合、errorを返す
  if (!res.success) {
    // エラーデータを整理する
    const customError = new z.ZodError([]);
    Object.entries(res.error).map(([key, value]) => {
      const message = (value as [string])[0];
      customError.addIssue({
        code: z.ZodIssueCode.custom,
        path: [key],
        message,
      });
    });
    // エラーデータを返す
    return {
      success: res.success,
      error: customError.flatten().fieldErrors,
    };
  }

  // 更新成功の場合、一覧画面のキャッシュ削除
  revalidatePath('/player');
  // 結果を返す
  return {
    success: res.success,
    data: res.data,
  };
}

export async function deletePlayer(id: number) {
  // APIに通信処理
  await deletePlayerById(id);
  // 一覧画面のキャッシュ削除
  revalidatePath('/player');
  // 一覧画面へサーバーでリダイレクト
  redirect('/player');
}
