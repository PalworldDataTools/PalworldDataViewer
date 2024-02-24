import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject, switchMap } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PalNavListItemComponent } from './pal-nav-list-item/pal-nav-list-item.component';
import { BrowsePalsFiltersComponent } from './browse-pals-filters/browse-pals-filters.component';
import { IPaginationRequest, IPalsFilters, PalsApi, PalsFilters, SearchResultOfPalTribe } from '../../api/api-clients';
import { PalworldVersionService } from '../../core-services/palworld-version.service';
import { LanguageService } from '../../core-services/language.service';

@Component({
  selector: 'app-browse-pals-page',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage, RouterLink, PalNavListItemComponent, BrowsePalsFiltersComponent],
  templateUrl: './browse-pals-page.component.html',
})
export class BrowsePalsPageComponent implements OnInit {
  protected result: SearchResultOfPalTribe | undefined;
  protected currentPageRange: [number, number] = [0, 0];

  private searchRequest: SearchRequest = { pagination: { pageNumber: 1, pageSize: 10 } };
  private searchRequestSubject = new Subject<SearchRequest>();

  constructor(
    private palworldVersionService: PalworldVersionService,
    private languageService: LanguageService,
    private palsApi: PalsApi,
  ) {}

  ngOnInit() {
    this.searchRequestSubject
      .pipe(
        debounceTime(250),
        switchMap((request) => {
          return this.search(request.filters, request.pagination);
        }),
      )
      .subscribe((result) => {
        this.result = result;
        this.currentPageRange = [
          (result.pagination.pageNumber - 1) * result.pagination.pageSize + 1,
          Math.min(result.pagination.pageNumber * result.pagination.pageSize, result.pagination.totalCount),
        ];
      });

    this.refresh();
  }

  refresh() {
    this.searchRequestSubject.next(this.searchRequest);
  }

  nextPage() {
    this.goToPage((this.searchRequest.pagination.pageNumber ?? 1) + 1);
  }

  goToPage(pageNumber: number) {
    if (this.result?.pagination && (pageNumber < 1 || pageNumber > this.result.pagination.totalPages)) {
      return;
    }

    this.searchRequest.pagination.pageNumber = pageNumber;
    this.refresh();
  }

  previousPage() {
    this.goToPage((this.searchRequest.pagination.pageNumber ?? 1) - 1);
  }

  protected onFiltersChange(filters: PalsFilters) {
    this.searchRequest.filters = filters;
    this.searchRequest.pagination.pageNumber = 1;
  }

  private search(filters: IPalsFilters | undefined, pagination: IPaginationRequest): Observable<SearchResultOfPalTribe> {
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

type SearchRequest = { filters?: IPalsFilters; pagination: IPaginationRequest };
