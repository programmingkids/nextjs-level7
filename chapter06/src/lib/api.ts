import { type PlayerType } from '@/lib/schemas';

// 通信先APIのURL
const url = 'https://cog-study.herokuapp.com/nextjs_level6/chapter06/player/';

// GETで一覧取得
export async function getPlayers() {
  // 一覧取得
  const res = await fetch(url);
  const players = await res.json();
  return players;
}

// POSTで新規登録
export async function postPlayer(player: PlayerType) {
  // POSTで新規登録
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  // 登録処理の可否判定
  const success = res.status === 201 ? true : false;
  // 登録処理の結果を返す
  return {
    success,
    data: success ? data : {},
    error: !success ? data : {},
  };
}

// GETで1件を取得
export async function getPlayerById(id: number) {
  // GETで新規登録
  const res = await fetch(`${url}${id}/`, {
    method: 'GET',
    cache: 'no-cache',
  });
  const data = await res.json();
  // 登録処理の可否判定
  const success = res.status === 200 ? true : false;
  // 登録処理の結果を返す
  return {
    success,
    data: success ? data : {},
  };
}

// PUTで更新
export async function putPlayer(player: PlayerType) {
  // PUTで更新
  const res = await fetch(`${url}${player.id}/`, {
    method: 'PUT',
    body: JSON.stringify(player),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  // 更新処理の可否判定
  const success = res.status === 200 ? true : false;
  // 更新処理の結果を返す
  return {
    success,
    data: success ? data : {},
    error: !success ? data : {},
  };
}

// DELETEで1件を削除
export async function deletePlayerById(id: number) {
  // DELETEで削除
  const res = await fetch(`${url}${id}/`, {
    method: 'DELETE',
  });
  // 登録処理の可否判定
  const success = res.status !== 404 ? true : false;
  // 登録処理の結果を返す
  return {
    success,
  };
}
