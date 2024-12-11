import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const PlayerScalarFieldEnumSchema = z.enum(['id','name','hp','mp','job']);

export const RelationLoadStrategySchema = z.enum(['query','join']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PLAYER SCHEMA
/////////////////////////////////////////

export const PlayerSchema = z.object({
  id: z.number().int(),
  name: z.string({ invalid_type_error: "文字を入力してください"}).min(1, { message: "必須です" }).max(10, { message: "10文字以内です" }),
  hp: z.number({ invalid_type_error: "数値を入力してください"}).int({ message: 'HPは整数です' }).min(0, { message: 'HPは0以上です' }),
  mp: z.number({ invalid_type_error: "数値を入力してください"}).int({ message: 'MPは整数です' }).min(0, { message: 'MPは0以上です' }),
  job: z.string({ invalid_type_error: "文字を入力してください"}).min(1, { message: '職業は必須です' }),
})

export type Player = z.infer<typeof PlayerSchema>

/////////////////////////////////////////
// PLAYER PARTIAL SCHEMA
/////////////////////////////////////////

export const PlayerPartialSchema = PlayerSchema.partial()

export type PlayerPartial = z.infer<typeof PlayerPartialSchema>

// PLAYER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const PlayerOptionalDefaultsSchema = PlayerSchema.merge(z.object({
  id: z.number().int().optional(),
}))

export type PlayerOptionalDefaults = z.infer<typeof PlayerOptionalDefaultsSchema>
