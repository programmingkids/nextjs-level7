// sec秒待機する
export const timeout = async (sec: number) => {
  await new Promise((resolve) => setTimeout(resolve, sec));
};

// minからmaxの範囲の乱数を返す
export const getRandom = function (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
