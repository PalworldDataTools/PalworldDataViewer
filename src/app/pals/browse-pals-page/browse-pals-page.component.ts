import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PalNavListItemComponent } from './pal-nav-list-item/pal-nav-list-item.component';
import { BrowsePalsFiltersComponent } from './browse-pals-filters/browse-pals-filters.component';
import { IPaginationRequest, IPalsFilters, PalsFilters, SearchResultOfPalTribe } from '../../api/api-clients';
import { BrowsePalsPaginationComponent } from './browse-pals-pagination/browse-pals-pagination.component';
import { PalsService } from '../../core-services/pals.service';

@Component({
  selector: 'app-browse-pals-page',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage, RouterLink, PalNavListItemComponent, BrowsePalsFiltersComponent, BrowsePalsPaginationComponent],
  templateUrl: './browse-pals-page.component.html',
})
export class BrowsePalsPageComponent implements OnInit {
  protected result: SearchResultOfPalTribe | undefined;
  protected currentPageRange: [number, number] = [0, 0];

  private searchRequest: SearchRequest = { pagination: { pageNumber: 1, pageSize: 10 } };
  private searchRequestSubject = new Subject<SearchRequest>();

  constructor(private palsService: PalsService) {}

  ngOnInit() {
    this.searchRequestSubject
      .pipe(
        debounceTime(250),
        switchMap((request) => this.palsService.searchTribes(request)),
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

  goToPage(pageNumber: number) {
    if (this.searchRequest.pagination.pageNumber == pageNumber || (this.result?.pagination && (pageNumber < 1 || pageNumber > this.result.pagination.totalPages))) {
      return;
    }

    this.searchRequest.pagination.pageNumber = pageNumber;
    this.refresh();
  }

  protected onFiltersChange(filters: PalsFilters) {
    this.searchRequest.filters = filters;
    this.searchRequest.pagination.pageNumber = 1;
  }
}

type SearchRequest = { filters?: IPalsFilters; pagination: IPaginationRequest };
