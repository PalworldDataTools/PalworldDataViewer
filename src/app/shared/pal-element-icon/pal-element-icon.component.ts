import { Component, Input } from '@angular/core';
import { PalElement } from '../../api/api-clients';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-pal-element-icon',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './pal-element-icon.component.html',
  styles: ':host { display: contents; }',
})
export class PalElementIconComponent {
  @Input({ required: true }) public element: PalElement = null!;

  protected get iconSrc(): string | undefined {
    switch (this.element) {
      case PalElement.Unknown:
        return undefined;
      case PalElement.Dark:
        return './assets/icons/element_dark.png';
      case PalElement.Dragon:
        return './assets/icons/element_dragon.png';
      case PalElement.Earth:
        return './assets/icons/element_earth.png';
      case PalElement.Electricity:
        return './assets/icons/element_electricity.png';
      case PalElement.Fire:
        return './assets/icons/element_fire.png';
      case PalElement.Ice:
        return './assets/icons/element_ice.png';
      case PalElement.Leaf:
        return './assets/icons/element_leaf.png';
      case PalElement.Normal:
        return './assets/icons/element_normal.png';
      case PalElement.Water:
        return './assets/icons/element_water.png';
    }
  }
}
