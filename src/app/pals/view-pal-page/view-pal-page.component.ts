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
  protected workSuitabilities: { icon: string; name: string; level: number }[] | undefined;
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
    this.workSuitabilities = mainPal
      ? [
          { icon: './assets/icons/work_kindling.png', name: 'Kindling', level: mainPal.workSuitability.kindling },
          { icon: './assets/icons/work_watering.png', name: 'Watering', level: mainPal.workSuitability.watering },
          { icon: './assets/icons/work_planting.png', name: 'Planting', level: mainPal.workSuitability.planting },
          { icon: './assets/icons/work_generating_electricity.png', name: 'Generating Electricity', level: mainPal.workSuitability.generatingElectricity },
          { icon: './assets/icons/work_handwork.png', name: 'Handwork', level: mainPal.workSuitability.handwork },
          { icon: './assets/icons/work_gathering.png', name: 'Gathering', level: mainPal.workSuitability.gathering },
          { icon: './assets/icons/work_lumbering.png', name: 'Lumbering', level: mainPal.workSuitability.lumbering },
          { icon: './assets/icons/work_mining.png', name: 'Mining', level: mainPal.workSuitability.mining },
          { icon: './assets/icons/work_oil_extraction.png', name: 'Oil Extraction', level: mainPal.workSuitability.oilExtraction },
          { icon: './assets/icons/work_medicine_production.png', name: 'Medicine Production', level: mainPal.workSuitability.medicineProduction },
          { icon: './assets/icons/work_cooling.png', name: 'Cooling', level: mainPal.workSuitability.cooling },
          { icon: './assets/icons/work_transporting.png', name: 'Transporting', level: mainPal.workSuitability.transporting },
          { icon: './assets/icons/work_farming.png', name: 'Farming', level: mainPal.workSuitability.farming },
        ]
          .filter((s) => s.level > 0)
          .sort((s1, s2) => s2.level - s1.level)
      : undefined;
  }
}
