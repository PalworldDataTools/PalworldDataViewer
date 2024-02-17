import { Component } from '@angular/core';
import { Pal, PalsService } from '../../palworld-data/pals.service';
import { forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-browse-pals-page',
  standalone: true,
  imports: [],
  templateUrl: './browse-pals-page.component.html',
})
export class BrowsePalsPageComponent {
  protected pals: Pal[] = [];

  constructor(protected palsService: PalsService) {
    this.palsService.tribeNames$
      .pipe(
        switchMap((palNames) => {
          return forkJoin(
            palNames.map((name) => this.palsService.getTribe(name)),
          );
        }),
        map((tribes) => {
          return (this.pals = tribes.filter(Boolean).map((t) => t!.main));
        }),
      )
      .subscribe();
  }
}
