import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-browse-pals-pagination',
  standalone: true,
  imports: [],
  templateUrl: './browse-pals-pagination.component.html',
})
export class BrowsePalsPaginationComponent implements OnInit {
  @Input()
  get page(): number {
    return this._page;
  }
  set page(value: number) {
    this._page = value;
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { page: value }, queryParamsHandling: 'merge' });
  }
  private _page: number = 1;

  @Input() total: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(first()).subscribe((queryParams) => {
      const page = queryParams['page'];
      if (page) {
        this.goToPage(page);
      }
    });
  }

  nextPage() {
    this.goToPage(this._page + 1);
  }

  goToPage(pageNumber: number) {
    this.pageChange.emit(pageNumber);
  }

  previousPage() {
    this.goToPage(this._page - 1);
  }
}
