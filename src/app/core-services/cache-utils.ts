import { PalIconSize } from '../api/api-clients';

export type CacheByName<T> = { [name: string]: T };
export type CacheBySize<T> = { [size in keyof typeof PalIconSize]?: T };
