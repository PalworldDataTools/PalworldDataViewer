import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { PalElement, PalIconSize, PalTribe } from '../../../api/api-clients';
import { SafeUrl } from '@angular/platform-browser';
import { LocalizationService } from '../../../core-services/localization.service';
import { PalIconsService } from '../../../core-services/pal-icons.service';

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

  protected elementNames: { [element in keyof typeof PalElement]?: string } = {};
  protected _tribe: PalTribe = null!;
  protected icon?: SafeUrl;
  protected name: string = '';
  protected paldexIndex: { index: number; suffix: string } = null!;
  protected variantsPaldexIndexes: { index: number; suffix: string }[] = [];
  protected elements: [PalElement, PalElement | undefined] = null!;
  protected rarityRange: [number, number] = [0, 0];
  protected hasNocturnalVariant: boolean = false;
  protected hasBossVariant: boolean = false;
  protected hasGymBossVariant: boolean = false;

  constructor(
    private localizationService: LocalizationService,
    private palIconsService: PalIconsService,
  ) {
    this.localizationService.elements$.subscribe((elements) => (this.elementNames = elements));
  }

  private update(tribe: PalTribe) {
    const firstPal = tribe.pals[0];
    const paldexIndexes = tribe.pals.filter((p) => p.identity.paldexIndex > 0).map((p) => ({ index: p.identity.paldexIndex, suffix: p.identity.paldexIndexSuffix }));
    const rarities = tribe.pals.map((v) => v.statistics.rarity).filter((r) => r > 0);

    this.name = tribe.localizedName ?? tribe.name;
    this.paldexIndex = paldexIndexes.find((i) => !i.suffix) ?? paldexIndexes[0] ?? { suffix: '?' };
    this.variantsPaldexIndexes = paldexIndexes.filter((i) => i != this.paldexIndex);
    this.elements = [firstPal.element1, firstPal.element2];
    this.rarityRange = [Math.min(...rarities), Math.max(...rarities)];
    this.hasNocturnalVariant = tribe.pals.some((v) => v.isNocturnal);
    this.hasBossVariant = tribe.pals.some((v) => v.isBoss);
    this.hasGymBossVariant = tribe.pals.some((v) => v.isGymBoss);

    this.palIconsService.getIcon(tribe.name, PalIconSize.Small).subscribe((icon) => (this.icon = icon));
  }
}
