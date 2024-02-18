import { Pal, PalTribe } from './pals.service';

export class TribesSearcher {
  static search(tribes: PalTribe[], query: TribesSearchRequest): TribesSearchResult {
    const pageNumber = query.pagination.pageNumber && query.pagination.pageNumber > 0 ? query.pagination.pageNumber : 1;
    const pageSize = query.pagination.pageSize > 0 ? query.pagination.pageSize : 10;

    const toSkip = (pageNumber - 1) * pageSize;
    let skipped = 0;
    const result: PalTribe[] = [];

    for (const tribe of tribes) {
      if (!this.shouldKeep(tribe, query)) {
        continue;
      }

      if (skipped < toSkip) {
        skipped++;
        continue;
      }

      result.push(tribe);

      if (result.length >= query.pagination.pageSize) {
        break;
      }
    }

    return {
      data: result,
      pageNumber: pageNumber,
      pageSize: pageSize,
      totalPages: Math.ceil(tribes.length / pageSize),
      totalResults: tribes.length,
    };
  }

  private static shouldKeep(tribe: PalTribe, query: TribesSearchRequest): boolean {
    const checks = [
      this.filterIncludesPalValue(
        (filter) => filter.size,
        (pal) => pal.size,
      ),
      this.filterIncludesOneOfPalValues(
        (filter) => filter.elementTypes,
        (pal) => [pal.elementType1, pal.elementType2],
      ),
      this.filterEqualsPalValue(
        (filter) => filter.isNocturnal,
        (pal) => pal.isNocturnal,
      ),
      this.filterEqualsPalValue(
        (filter) => filter.isBoss,
        (pal) => pal.isBoss,
      ),
      this.filterEqualsPalValue(
        (filter) => filter.isTowerBoss,
        (pal) => pal.isTowerBoss,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.minRarity, filter.maxRarity],
        (pal) => pal.rarity,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.emitFlameMinLevel, filter.emitFlameMaxLevel],
        (pal) => pal.work.emitFlame,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.wateringMinLevel, filter.wateringMaxLevel],
        (pal) => pal.work.watering,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.seedingMinLevel, filter.seedingMaxLevel],
        (pal) => pal.work.seeding,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.generateElectricityMinLevel, filter.generateElectricityMaxLevel],
        (pal) => pal.work.generateElectricity,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.handcraftMinLevel, filter.handcraftMaxLevel],
        (pal) => pal.work.handcraft,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.collectionMinLevel, filter.collectionMaxLevel],
        (pal) => pal.work.collection,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.deforestMinLevel, filter.deforestMaxLevel],
        (pal) => pal.work.deforest,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.miningMinLevel, filter.miningMaxLevel],
        (pal) => pal.work.mining,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.oilExtractionMinLevel, filter.oilExtractionMaxLevel],
        (pal) => pal.work.oilExtraction,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.produceMedicineMinLevel, filter.produceMedicineMaxLevel],
        (pal) => pal.work.produceMedicine,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.coolMinLevel, filter.coolMaxLevel],
        (pal) => pal.work.cool,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.transportMinLevel, filter.transportMaxLevel],
        (pal) => pal.work.transport,
      ),
      this.filterRangeContainsPalValue(
        (filter) => [filter.monsterFarmMinLevel, filter.monsterFarmMaxLevel],
        (pal) => pal.work.monsterFarm,
      ),
    ];

    return checks.every((c) => c(tribe, query));
  }

  private static filterEqualsPalValue<T>(getFilterValue: (filter: TribesSearchFilter) => T | undefined, getValue: (pal: Pal) => T): TribeSearchCheck {
    return (tribe, query) => {
      if (!query.filter) {
        return true;
      }

      const expectedValue = getFilterValue(query.filter);
      if (!expectedValue) {
        return true;
      }

      return this.anyPalInTribe(tribe, (pal) => getValue(pal) === expectedValue);
    };
  }

  private static filterRangeContainsPalValue(
    getFilterValue: (filter: TribesSearchFilter) => [number | undefined, number | undefined],
    getValue: (pal: Pal) => number,
  ): TribeSearchCheck {
    return (tribe, query) => {
      if (!query.filter) {
        return true;
      }

      const [min, max] = getFilterValue(query.filter);

      return (!min || this.anyPalInTribe(tribe, (pal) => getValue(pal) >= min)) && (!max || this.anyPalInTribe(tribe, (pal) => getValue(pal) <= max));
    };
  }

  private static filterIncludesPalValue<T>(getFilterValues: (filter: TribesSearchFilter) => T[] | undefined, getValue: (pal: Pal) => T): TribeSearchCheck {
    return (tribe, query) => {
      if (!query.filter) {
        return true;
      }

      const allowedValues = getFilterValues(query.filter);
      if (!allowedValues) {
        return true;
      }

      return this.anyPalInTribe(tribe, (p) => allowedValues.includes(getValue(p)));
    };
  }

  private static filterIncludesOneOfPalValues<T>(getFilterValues: (filter: TribesSearchFilter) => T[] | undefined, getValues: (pal: Pal) => T[]): TribeSearchCheck {
    return (tribe, query) => {
      if (!query.filter) {
        return true;
      }

      const allowedValues = getFilterValues(query.filter);
      if (!allowedValues) {
        return true;
      }

      return this.anyPalInTribe(tribe, (p) => getValues(p).some((v) => allowedValues.includes(v)));
    };
  }

  private static anyPalInTribe(tribe: PalTribe, check: (pal: Pal) => boolean): boolean {
    return check(tribe.main) || (!!tribe.boss && check(tribe.boss)) || (!!tribe.gym && check(tribe.gym)) || (!!tribe.otherVariants && tribe.otherVariants.some((p) => check(p)));
  }
}

type TribeSearchCheck = (tribe: PalTribe, query: TribesSearchRequest) => boolean;

export interface TribesSearchRequest {
  filter?: TribesSearchFilter;
  pagination: TribesSearchPagination;
}

export interface TribesSearchFilter {
  size?: string[];
  elementTypes?: string[];
  isNocturnal?: boolean;
  isBoss?: boolean;
  isTowerBoss?: boolean;
  minRarity?: number;
  maxRarity?: number;
  emitFlameMinLevel?: number;
  emitFlameMaxLevel?: number;
  wateringMinLevel?: number;
  wateringMaxLevel?: number;
  seedingMinLevel?: number;
  seedingMaxLevel?: number;
  generateElectricityMinLevel?: number;
  generateElectricityMaxLevel?: number;
  handcraftMinLevel?: number;
  handcraftMaxLevel?: number;
  collectionMinLevel?: number;
  collectionMaxLevel?: number;
  deforestMinLevel?: number;
  deforestMaxLevel?: number;
  miningMinLevel?: number;
  miningMaxLevel?: number;
  oilExtractionMinLevel?: number;
  oilExtractionMaxLevel?: number;
  produceMedicineMinLevel?: number;
  produceMedicineMaxLevel?: number;
  coolMinLevel?: number;
  coolMaxLevel?: number;
  transportMinLevel?: number;
  transportMaxLevel?: number;
  monsterFarmMinLevel?: number;
  monsterFarmMaxLevel?: number;
}

export interface TribesSearchPagination {
  pageNumber?: number;
  pageSize: number;
}

export interface TribesSearchResult {
  data: PalTribe[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalResults: number;
}
