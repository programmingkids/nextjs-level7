import * as z from 'zod';

// スキーマ定義
export const playerSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, { message: '名前は必須です' }),
  hp: z
    .number({ message: 'HPは数値です' })
    .int({ message: 'HPは整数です' })
    .min(0, { message: 'HPは0以上です' }),
  mp: z
    .number({ message: 'MPは数値です' })
    .int({ message: 'MPは整数です' })
    .min(0, { message: 'MPは0以上です' }),
  job: z.string().min(1, { message: '職業は必須です' }),
});

// スキーマ定義から型を推論
export type PlayerType = z.infer<typeof playerSchema>;
