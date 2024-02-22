import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { PalElement, PalsApi, PalTribe } from '../../../api/api-clients';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-pal-nav-list-item',
  standalone: true,
  imports: [SharedModule, NgOptimizedImage, SvgIconComponent, NgbTooltip],
  templateUrl: './pal-nav-list-item.component.html',
})
export class PalNavListItemComponent {
  @Input({ required: true })
  get tribe(): PalTribe {
    return this._tribe;
  }

  set tribe(value: PalTribe) {
    this._tribe = value;
    this.update(value);
  }

  protected _tribe: PalTribe = null!;
  protected icon?: SafeUrl;
  protected name: string = '';
  protected paldexIndex: string = '';
  protected elements: [PalElement, PalElement?][] = [];
  protected rarityRange: [number, number] = [0, 0];
  protected hasNocturnalVariant: boolean = false;
  protected hasBossVariant: boolean = false;
  protected hasGymBossVariant: boolean = false;

  constructor(
    private palsApi: PalsApi,
    private sanitizer: DomSanitizer,
  ) {}

  private update(tribe: PalTribe) {
    const allVariants = tribe.pals;
    const paldexIndexes = [...new Set(allVariants.filter((p) => p.identity.paldexIndex > 0).map((p) => p.identity.paldexIndex + p.identity.paldexIndexSuffix))];
    const rarities = allVariants.map((v) => v.statistics.rarity);

    this.name = tribe.name;
    this.paldexIndex = paldexIndexes.length === 0 ? '??' : paldexIndexes.join(', ');
    this.elements = allVariants.map((v) => [v.element1, v.element2]);
    this.rarityRange = [Math.min(...rarities), Math.max(...rarities)];
    this.hasNocturnalVariant = allVariants.some((v) => v.isNocturnal);
    this.hasBossVariant = allVariants.some((v) => v.isBoss);
    this.hasGymBossVariant = allVariants.some((v) => v.isGymBoss);

    this.icon = undefined;
    this.palsApi
      .getIcon(tribe.name)
      .pipe(
        map((file) => file.data),
        catchError((err) => {
          console.error(err);
          return of(undefined);
        }),
      )
      .subscribe((icon) => {
        if (icon) {
          const iconUrl = URL.createObjectURL(icon);
          this.icon = this.sanitizer.bypassSecurityTrustUrl(iconUrl);
        } else {
          this.icon = undefined;
        }
      });
  }
}
