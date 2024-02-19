export const getEnumValues = <TEnum>(type: any): TEnum[] =>
  Object.keys(type)
    .filter((e) => isNaN(Number(e)))
    .map((e) => e as TEnum);
