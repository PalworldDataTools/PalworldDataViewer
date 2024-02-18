import { Component, OnInit } from '@angular/core';
import { PalsService } from '../../palworld-data/pals.service';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { TribesSearchFilter, TribesSearchRequest, TribesSearchResult } from '../../palworld-data/tribes-searcher';
import { SharedModule } from '../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PalNavListItemComponent } from './pal-nav-list-item/pal-nav-list-item.component';
import { BrowsePalsFiltersComponent } from './browse-pals-filters/browse-pals-filters.component';

@Component({
  selector: 'app-browse-pals-page',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage, RouterLink, PalNavListItemComponent, BrowsePalsFiltersComponent],
  templateUrl: './browse-pals-page.component.html',
})
export class BrowsePalsPageComponent implements OnInit {
  protected result: TribesSearchResult | undefined;

  private searchRequest: TribesSearchRequest = { pagination: { pageSize: 500 } };
  private searchRequestSubject = new Subject<TribesSearchRequest>();

  constructor(protected palsService: PalsService) {}

  ngOnInit() {
    this.searchRequestSubject
      .pipe(
        debounceTime(250),
        switchMap((request) => {
          return this.palsService.searchTribes(request);
        }),
      )
      .subscribe((result) => {
        this.result = result;
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
