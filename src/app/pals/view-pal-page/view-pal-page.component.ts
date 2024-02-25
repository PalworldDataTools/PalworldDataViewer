import { Component, OnInit } from '@angular/core';
import { Pal, PalElement, PalIconSize, PalTribe } from '../../api/api-clients';
import { ActivatedRoute } from '@angular/router';
import { first, forkJoin, map, of, switchMap } from 'rxjs';
import { PalsService } from '../../core-services/pals.service';
import { PalIconsService } from '../../core-services/pal-icons.service';
import { SafeUrl } from '@angular/platform-browser';
import { LowerCasePipe, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconComponent } from 'angular-svg-icon';
import { PalElementIconComponent } from '../../shared/pal-element-icon/pal-element-icon.component';

@Component({
  selector: 'app-view-pal-page',
  standalone: true,
  imports: [LowerCasePipe, NgTemplateOutlet, NgbTooltip, SvgIconComponent, PalElementIconComponent, NgOptimizedImage],
  templateUrl: './view-pal-page.component.html',
})
export class ViewPalPageComponent implements OnInit {
  protected tribe: PalTribe | undefined;
  protected icon: SafeUrl | undefined;
  protected paldexName: string | undefined;
  protected paldexIndex: number | undefined;
  protected paldexSuffix: string | undefined;
  protected elements: [PalElement, PalElement | undefined] | undefined;
  protected selectedVariant: Pal | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private palsService: PalsService,
    private palIconsService: PalIconsService,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) => {
          const pal = paramMap.get('pal');
          if (!pal) {
            return of([undefined, undefined]);
          }

          return forkJoin([this.palsService.getTribe(pal).pipe(first()), this.palIconsService.getIcon(pal, PalIconSize.Medium).pipe(first())]);
        }),
        map(([tribe, icon]) => {
          this.load(tribe, icon);
        }),
      )
      .subscribe();
  }

  selectVariant(pal: Pal) {
    this.selectedVariant = pal;
  }

  private load(tribe: PalTribe | undefined, icon: SafeUrl | undefined) {
    this.tribe = tribe;
    this.icon = icon;
    this.selectedVariant = this.tribe?.pals[0];

    const mainPal = tribe?.pals.filter((p) => !p.isBoss && !p.isGymBoss)[0];
    this.paldexName = mainPal?.identity.localizedName ?? mainPal?.identity.name;
    this.paldexIndex = mainPal?.identity.paldexIndex;
    this.paldexSuffix = mainPal?.identity.paldexIndexSuffix;
    this.elements = mainPal ? [mainPal.element1, mainPal.element2] : undefined;
  }
}
