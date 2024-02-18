import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PalTribe } from '../../../palworld-data/pals.service';
import { NgOptimizedImage } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

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
    this.tribeDisplayValue = computeDisplayValue(value);
  }

  protected _tribe: PalTribe = null!;
  protected tribeDisplayValue: TribeDisplayValue = null!;
}

const computeDisplayValue = (tribe: PalTribe): TribeDisplayValue => {
  const allVariants = [tribe.main, tribe.boss, tribe.gym, ...(tribe.otherVariants ?? [])].filter(Boolean).map((p) => p!);
  const rarities = allVariants.map((v) => v.rarity);

  return {
    icon: tribe.iconPath,
    name: tribe.name,
    elements: allVariants.map((v) => [v.elementType1, v.elementType2]),
    rarityRange: [Math.min(...rarities), Math.max(...rarities)],
    hasNocturnalVariant: allVariants.some((v) => v.isNocturnal),
    hasBossVariant: allVariants.some((v) => v.isBoss),
    hasTowerBossVariant: allVariants.some((v) => v.isTowerBoss),
  };
};

interface TribeDisplayValue {
  readonly icon?: string;
  readonly name: string;
  readonly elements: [string, string][];
  readonly rarityRange: [number, number];
  readonly hasNocturnalVariant: boolean;
  readonly hasBossVariant: boolean;
  readonly hasTowerBossVariant: boolean;
}
