import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TribesSearchFilter } from '../browse-pals-page.component';
import { getEnumValues } from '../../../shared/utils/enum-utils';
import { PalElement, PalSize } from '../../../api/api-clients';

@Component({
  selector: 'app-browse-pals-filters',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './browse-pals-filters.component.html',
})
export class BrowsePalsFiltersComponent implements OnInit {
  @Output() filter: EventEmitter<TribesSearchFilter> = new EventEmitter<TribesSearchFilter>();

  protected elementTypes: PalElement[] = [];
  protected rarities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  protected form = new FormGroup({
    size: new FormControl<PalSize[] | undefined>(undefined, { nonNullable: true }),
    elementTypes: new FormControl<PalElement[] | undefined>(undefined, { nonNullable: true }),
    isNocturnal: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    isBoss: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    isTowerBoss: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    minRarity: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxRarity: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    emitFlameMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    emitFlameMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    wateringMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    wateringMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    seedingMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    seedingMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    generateElectricityMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    generateElectricityMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    handcraftMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    handcraftMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    collectionMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    collectionMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    deforestMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    deforestMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    miningMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    miningMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    oilExtractionMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    oilExtractionMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    produceMedicineMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    produceMedicineMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    coolMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    coolMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    transportMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    transportMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    monsterFarmMinLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    monsterFarmMaxLevel: new FormControl<number | undefined>(undefined, { nonNullable: true }),
  });

  constructor() {
    this.elementTypes = getEnumValues(PalElement);
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => this.filter.emit(value));
  }

  protected setElement(elementType: PalElement, checked: boolean) {
    if (checked && (!this.form.controls.elementTypes.value || !this.form.controls.elementTypes.value.includes(elementType))) {
      const newValue = [...(this.form.controls.elementTypes.value ?? []), elementType];
      this.form.controls.elementTypes.setValue(newValue);
    } else if (!checked && this.form.controls.elementTypes.value && this.form.controls.elementTypes.value.includes(elementType)) {
      const newValue = this.form.controls.elementTypes.value.filter((v) => v != elementType);
      this.form.controls.elementTypes.setValue(newValue.length == 0 ? undefined : newValue);
    }
  }

  protected setRarity(rarity: number, checked: boolean) {
    if (checked) {
      this.form.controls.minRarity.setValue(rarity);
      this.form.controls.maxRarity.setValue(rarity);
    } else {
      this.form.controls.minRarity.setValue(undefined);
      this.form.controls.maxRarity.setValue(undefined);
    }
  }
}
