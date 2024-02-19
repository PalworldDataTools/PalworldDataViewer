import { Component, OnInit } from '@angular/core';
import { debounceTime, forkJoin, Subject, switchMap } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PalNavListItemComponent } from './pal-nav-list-item/pal-nav-list-item.component';
import { BrowsePalsFiltersComponent } from './browse-pals-filters/browse-pals-filters.component';
import { PalElement, PalsApi, PalSize, PalTribe } from '../../api/api-clients';

@Component({
  selector: 'app-browse-pals-page',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage, RouterLink, PalNavListItemComponent, BrowsePalsFiltersComponent],
  templateUrl: './browse-pals-page.component.html',
})
export class BrowsePalsPageComponent implements OnInit {
  protected result: { data: PalTribe[]; pageNumber: number; totalResults: number; totalPages: number } | undefined;

  private searchRequest: TribesSearchRequest = { pagination: { pageSize: 500 } };
  private searchRequestSubject = new Subject<TribesSearchRequest>();

  constructor(protected palsApi: PalsApi) {}

  ngOnInit() {
    this.searchRequestSubject
      .pipe(
        debounceTime(250),
        switchMap((request) => {
          // TODO: use request when search is implemented
          return this.palsApi.getTribeNames().pipe(switchMap((names) => forkJoin(names.map((name) => this.palsApi.getTribe(name)))));
        }),
      )
      .subscribe((result) => {
        this.result = { data: result, pageNumber: 1, totalResults: result.length, totalPages: 1 };
      });

    this.refresh();
  }

  refresh() {
    this.searchRequestSubject.next(this.searchRequest);
  }

  nextPage() {
    const pageNumber = this.searchRequest.pagination.pageNumber ?? 1;
    if (this.result && pageNumber >= this.result.totalPages) {
      return;
    }

    this.searchRequest.pagination.pageNumber = pageNumber + 1;
    this.refresh();
  }

  previousPage() {
    const pageNumber = this.searchRequest.pagination.pageNumber ?? 1;
    if (pageNumber <= 1) {
      return;
    }

    this.searchRequest.pagination.pageNumber = pageNumber - 1;
    this.refresh();
  }

  protected onFilterChange(filter: TribesSearchFilter) {
    this.searchRequest.filter = filter;
  }
}

export interface TribesSearchFilter {
  size?: PalSize[];
  elementTypes?: PalElement[];
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

export interface TribesSearchRequest {
  filter?: TribesSearchFilter;
  pagination: TribesSearchPagination;
}
