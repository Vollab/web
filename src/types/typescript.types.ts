export type ArrayValue<ArrayType extends Array<any> | null | undefined> =
  NonNullable<ArrayType>[number]
