import prisma from '@/db/prisma';
import { type PlayerOptionalDefaults, type Player } from '@/prisma-zod/index';

export async function getPlayers() {
  // 全件取得
  const result = await prisma.player.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return result;
}

export async function createPlayer(data: PlayerOptionalDefaults) {
  // 新規登録
  try {
    const result = await prisma.player.create({
      data,
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ['Database Error'] },
    };
  }
}

type PlayerReturnType =
  | {
      success: true;
      data: Player;
    }
  | {
      success: false;
    };

export async function getPlayerById(id: number): Promise<PlayerReturnType> {
  // 1件を取得
  const result = await prisma.player.findUnique({
    where: {
      id,
    },
  });
  return result !== null
    ? {
        success: true,
        data: result,
      }
    : {
        success: false,
      };
}

export async function updatePlayer(data: Player) {
  // 更新
  try {
    const result = await prisma.player.update({
      data,
      where: {
        id: data.id,
      },
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ['Database Error'] },
    };
  }
}

export async function deletePlayerById(id: number) {
  // 削除
  try {
    const result = await prisma.player.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ['Database Error'] },
    };
  }
}
