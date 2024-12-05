import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export const PlayerScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'hp',
  'mp',
  'job',
]);

export const RelationLoadStrategySchema = z.enum(['query', 'join']);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PLAYER SCHEMA
/////////////////////////////////////////

export const PlayerSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  hp: z.number().int(),
  mp: z.number().int(),
  job: z.string(),
});

export type Player = z.infer<typeof PlayerSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PLAYER
//------------------------------------------------------

export const PlayerSelectSchema: z.ZodType<Prisma.PlayerSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    hp: z.boolean().optional(),
    mp: z.boolean().optional(),
    job: z.boolean().optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PlayerWhereInputSchema: z.ZodType<Prisma.PlayerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlayerWhereInputSchema),
        z.lazy(() => PlayerWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlayerWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlayerWhereInputSchema),
        z.lazy(() => PlayerWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    hp: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    mp: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    job: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  })
  .strict();

export const PlayerOrderByWithRelationInputSchema: z.ZodType<Prisma.PlayerOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      hp: z.lazy(() => SortOrderSchema).optional(),
      mp: z.lazy(() => SortOrderSchema).optional(),
      job: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PlayerWhereUniqueInputSchema: z.ZodType<Prisma.PlayerWhereUniqueInput> =
  z
    .object({
      id: z.number().int(),
    })
    .and(
      z
        .object({
          id: z.number().int().optional(),
          AND: z
            .union([
              z.lazy(() => PlayerWhereInputSchema),
              z.lazy(() => PlayerWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => PlayerWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => PlayerWhereInputSchema),
              z.lazy(() => PlayerWhereInputSchema).array(),
            ])
            .optional(),
          name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          hp: z
            .union([z.lazy(() => IntFilterSchema), z.number().int()])
            .optional(),
          mp: z
            .union([z.lazy(() => IntFilterSchema), z.number().int()])
            .optional(),
          job: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
        })
        .strict(),
    );

export const PlayerOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlayerOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      hp: z.lazy(() => SortOrderSchema).optional(),
      mp: z.lazy(() => SortOrderSchema).optional(),
      job: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => PlayerCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => PlayerAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => PlayerMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => PlayerMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => PlayerSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const PlayerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlayerScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PlayerScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      hp: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      mp: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      job: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const PlayerCreateInputSchema: z.ZodType<Prisma.PlayerCreateInput> = z
  .object({
    name: z.string(),
    hp: z.number().int(),
    mp: z.number().int(),
    job: z.string(),
  })
  .strict();

export const PlayerUncheckedCreateInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      name: z.string(),
      hp: z.number().int(),
      mp: z.number().int(),
      job: z.string(),
    })
    .strict();

export const PlayerUpdateInputSchema: z.ZodType<Prisma.PlayerUpdateInput> = z
  .object({
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    hp: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    mp: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    job: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
  })
  .strict();

export const PlayerUncheckedUpdateInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      hp: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      mp: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      job: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PlayerCreateManyInputSchema: z.ZodType<Prisma.PlayerCreateManyInput> =
  z
    .object({
      id: z.number().int().optional(),
      name: z.string(),
      hp: z.number().int(),
      mp: z.number().int(),
      job: z.string(),
    })
    .strict();

export const PlayerUpdateManyMutationInputSchema: z.ZodType<Prisma.PlayerUpdateManyMutationInput> =
  z
    .object({
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      hp: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      mp: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      job: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PlayerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      hp: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      mp: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      job: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const PlayerCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      hp: z.lazy(() => SortOrderSchema).optional(),
      mp: z.lazy(() => SortOrderSchema).optional(),
      job: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PlayerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      hp: z.lazy(() => SortOrderSchema).optional(),
      mp: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PlayerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      hp: z.lazy(() => SortOrderSchema).optional(),
      mp: z.lazy(() => SortOrderSchema).optional(),
      job: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PlayerMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      hp: z.lazy(() => SortOrderSchema).optional(),
      mp: z.lazy(() => SortOrderSchema).optional(),
      job: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PlayerSumOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      hp: z.lazy(() => SortOrderSchema).optional(),
      mp: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PlayerFindFirstArgsSchema: z.ZodType<Prisma.PlayerFindFirstArgs> =
  z
    .object({
      select: PlayerSelectSchema.optional(),
      where: PlayerWhereInputSchema.optional(),
      orderBy: z
        .union([
          PlayerOrderByWithRelationInputSchema.array(),
          PlayerOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PlayerWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          PlayerScalarFieldEnumSchema,
          PlayerScalarFieldEnumSchema.array(),
        ])
        .optional(),
      relationLoadStrategy: RelationLoadStrategySchema.optional(),
    })
    .strict();

export const PlayerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindFirstOrThrowArgs> =
  z
    .object({
      select: PlayerSelectSchema.optional(),
      where: PlayerWhereInputSchema.optional(),
      orderBy: z
        .union([
          PlayerOrderByWithRelationInputSchema.array(),
          PlayerOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PlayerWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          PlayerScalarFieldEnumSchema,
          PlayerScalarFieldEnumSchema.array(),
        ])
        .optional(),
      relationLoadStrategy: RelationLoadStrategySchema.optional(),
    })
    .strict();

export const PlayerFindManyArgsSchema: z.ZodType<Prisma.PlayerFindManyArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    where: PlayerWhereInputSchema.optional(),
    orderBy: z
      .union([
        PlayerOrderByWithRelationInputSchema.array(),
        PlayerOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PlayerWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([PlayerScalarFieldEnumSchema, PlayerScalarFieldEnumSchema.array()])
      .optional(),
    relationLoadStrategy: RelationLoadStrategySchema.optional(),
  })
  .strict();

export const PlayerAggregateArgsSchema: z.ZodType<Prisma.PlayerAggregateArgs> =
  z
    .object({
      where: PlayerWhereInputSchema.optional(),
      orderBy: z
        .union([
          PlayerOrderByWithRelationInputSchema.array(),
          PlayerOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PlayerWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const PlayerGroupByArgsSchema: z.ZodType<Prisma.PlayerGroupByArgs> = z
  .object({
    where: PlayerWhereInputSchema.optional(),
    orderBy: z
      .union([
        PlayerOrderByWithAggregationInputSchema.array(),
        PlayerOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: PlayerScalarFieldEnumSchema.array(),
    having: PlayerScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const PlayerFindUniqueArgsSchema: z.ZodType<Prisma.PlayerFindUniqueArgs> =
  z
    .object({
      select: PlayerSelectSchema.optional(),
      where: PlayerWhereUniqueInputSchema,
      relationLoadStrategy: RelationLoadStrategySchema.optional(),
    })
    .strict();

export const PlayerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindUniqueOrThrowArgs> =
  z
    .object({
      select: PlayerSelectSchema.optional(),
      where: PlayerWhereUniqueInputSchema,
      relationLoadStrategy: RelationLoadStrategySchema.optional(),
    })
    .strict();

export const PlayerCreateArgsSchema: z.ZodType<Prisma.PlayerCreateArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    data: z.union([PlayerCreateInputSchema, PlayerUncheckedCreateInputSchema]),
    relationLoadStrategy: RelationLoadStrategySchema.optional(),
  })
  .strict();

export const PlayerUpsertArgsSchema: z.ZodType<Prisma.PlayerUpsertArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    where: PlayerWhereUniqueInputSchema,
    create: z.union([
      PlayerCreateInputSchema,
      PlayerUncheckedCreateInputSchema,
    ]),
    update: z.union([
      PlayerUpdateInputSchema,
      PlayerUncheckedUpdateInputSchema,
    ]),
    relationLoadStrategy: RelationLoadStrategySchema.optional(),
  })
  .strict();

export const PlayerCreateManyArgsSchema: z.ZodType<Prisma.PlayerCreateManyArgs> =
  z
    .object({
      data: z.union([
        PlayerCreateManyInputSchema,
        PlayerCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PlayerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PlayerCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        PlayerCreateManyInputSchema,
        PlayerCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PlayerDeleteArgsSchema: z.ZodType<Prisma.PlayerDeleteArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    where: PlayerWhereUniqueInputSchema,
    relationLoadStrategy: RelationLoadStrategySchema.optional(),
  })
  .strict();

export const PlayerUpdateArgsSchema: z.ZodType<Prisma.PlayerUpdateArgs> = z
  .object({
    select: PlayerSelectSchema.optional(),
    data: z.union([PlayerUpdateInputSchema, PlayerUncheckedUpdateInputSchema]),
    where: PlayerWhereUniqueInputSchema,
    relationLoadStrategy: RelationLoadStrategySchema.optional(),
  })
  .strict();

export const PlayerUpdateManyArgsSchema: z.ZodType<Prisma.PlayerUpdateManyArgs> =
  z
    .object({
      data: z.union([
        PlayerUpdateManyMutationInputSchema,
        PlayerUncheckedUpdateManyInputSchema,
      ]),
      where: PlayerWhereInputSchema.optional(),
    })
    .strict();

export const PlayerDeleteManyArgsSchema: z.ZodType<Prisma.PlayerDeleteManyArgs> =
  z
    .object({
      where: PlayerWhereInputSchema.optional(),
    })
    .strict();
