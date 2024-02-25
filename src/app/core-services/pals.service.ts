import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { PalworldVersionService } from './palworld-version.service';
import { IPaginationRequest, IPalsFilters, PalsApi, PalTribe, SearchResultOfPalTribe } from '../api/api-clients';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { CacheByName } from './cache-utils';

@Injectable({
  providedIn: 'root',
})
export class PalsService {
  private cache: CacheByName<ReplaySubject<PalTribe>> = {};

  constructor(
    private languageService: LanguageService,
    private palworldVersionService: PalworldVersionService,
    private palsApi: PalsApi,
  ) {}

  /**
   * Search tribes and cache results.
   * This method does not use the cache at all to avoid inconsistent results, but subsequent calls to {@link getTribe} will use the data fetched by this method if possible.
   */
  searchTribes(request: SearchPalsRequest) {
    return this.searchTribesInternal(request.filters, request.pagination).pipe(
      tap((results) => {
        for (const result of results.results) {
          if (!Object.keys(this.cache).includes(result.name)) {
            this.cache[result.name] = new ReplaySubject<PalTribe>(1);
          }

          this.cache[result.name].next(result);
        }
      }),
    );
  }

  getTribe(name: string): Observable<PalTribe> {
    if (!Object.keys(this.cache).includes(name)) {
      this.cache[name] = new ReplaySubject<PalTribe>(1);
      this.palsApi.getTribe(name, this.languageService.current, this.palworldVersionService.current).subscribe((tribe) => this.cache[name]!.next(tribe));
    }

    return this.cache[name];
  }

  private searchTribesInternal(filters: IPalsFilters | undefined, pagination: IPaginationRequest): Observable<SearchResultOfPalTribe> {
    return this.palsApi.searchTribes(
      filters?.sizes,
      filters?.elements,
      filters?.hasNocturnalVariant,
      filters?.hasEdibleVariant,
      filters?.hasPredatorVariant,
      filters?.hasBossVariant,
      filters?.hasGymBossVariant,
      filters?.rarity?.fromInclusive,
      filters?.rarity?.toInclusive,
      filters?.workSuitability?.kindling?.fromInclusive,
      filters?.workSuitability?.kindling?.toInclusive,
      filters?.workSuitability?.watering?.fromInclusive,
      filters?.workSuitability?.watering?.toInclusive,
      filters?.workSuitability?.planting?.fromInclusive,
      filters?.workSuitability?.planting?.toInclusive,
      filters?.workSuitability?.generatingElectricity?.fromInclusive,
      filters?.workSuitability?.generatingElectricity?.toInclusive,
      filters?.workSuitability?.handwork?.fromInclusive,
      filters?.workSuitability?.handwork?.toInclusive,
      filters?.workSuitability?.gathering?.fromInclusive,
      filters?.workSuitability?.gathering?.toInclusive,
      filters?.workSuitability?.lumbering?.fromInclusive,
      filters?.workSuitability?.lumbering?.toInclusive,
      filters?.workSuitability?.mining?.fromInclusive,
      filters?.workSuitability?.mining?.toInclusive,
      filters?.workSuitability?.oilExtraction?.fromInclusive,
      filters?.workSuitability?.oilExtraction?.toInclusive,
      filters?.workSuitability?.medicineProduction?.fromInclusive,
      filters?.workSuitability?.medicineProduction?.toInclusive,
      filters?.workSuitability?.cooling?.fromInclusive,
      filters?.workSuitability?.cooling?.toInclusive,
      filters?.workSuitability?.transporting?.fromInclusive,
      filters?.workSuitability?.transporting?.toInclusive,
      filters?.workSuitability?.farming?.fromInclusive,
      filters?.workSuitability?.farming?.toInclusive,
      pagination.pageNumber,
      pagination.pageSize,
      this.languageService.current,
      this.palworldVersionService.current,
    );
  }
}

export type SearchPalsRequest = { filters?: IPalsFilters; pagination: IPaginationRequest };
