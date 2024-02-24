import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IntRangeFilter, PalElement, PalsFilters, PalSize, PalsWorkSuitabilityFilters } from '../../../api/api-clients';
import { RadioRowControlComponent } from '../../../shared/radio-row-control/radio-row-control.component';
import { LocalizationService } from '../../../core-services/localization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-browse-pals-filters',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, RadioRowControlComponent],
  templateUrl: './browse-pals-filters.component.html',
})
export class BrowsePalsFiltersComponent implements OnInit {
  @Output() filtersChange: EventEmitter<PalsFilters> = new EventEmitter<PalsFilters>();

  protected elementTypes: { label: string; value: PalElement }[] = [];
  protected rarities = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
  ];
  protected ternary = [
    { label: 'yes', value: true },
    { label: 'no', value: false },
  ];

  protected form = new FormGroup({
    sizes: new FormControl<PalSize[] | undefined>(undefined, { nonNullable: true }),
    elementTypes: new FormControl<PalElement[] | undefined>(undefined, { nonNullable: true }),
    hasNocturnalVariant: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    hasEdibleVariant: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    hasPredatorVariant: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    hasBossVariant: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    hasGymBossVariant: new FormControl<boolean | undefined>(undefined, { nonNullable: true }),
    rarity: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minKindling: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxKindling: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minWatering: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxWatering: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minPlanting: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxPlanting: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minGeneratingElectricity: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxGeneratingElectricity: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minHandwork: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxHandwork: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minGathering: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxGathering: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minLumbering: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxLumbering: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minMining: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxMining: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minOilExtraction: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxOilExtraction: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minMedicineProduction: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxMedicineProduction: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minCooling: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxCooling: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minTransporting: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxTransporting: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    minFarming: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    maxFarming: new FormControl<number | undefined>(undefined, { nonNullable: true }),
  });

  constructor(
    localizationService: LocalizationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    localizationService.elements$.subscribe((elements) => {
      this.elementTypes = Object.entries(elements)
        .filter(([value, _]) => value !== PalElement.Unknown)
        .map(([value, label]) => ({ label, value: value as PalElement }));
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: value, queryParamsHandling: 'merge' });
      this.filtersChange.emit(
        new PalsFilters({
          sizes: value.sizes,
          elements: value.elementTypes,
          hasNocturnalVariant: value.hasNocturnalVariant,
          hasPredatorVariant: value.hasPredatorVariant,
          hasEdibleVariant: value.hasEdibleVariant,
          hasBossVariant: value.hasBossVariant,
          hasGymBossVariant: value.hasGymBossVariant,
          rarity: new IntRangeFilter({ fromInclusive: value.rarity, toInclusive: value.rarity }),
          workSuitability: new PalsWorkSuitabilityFilters({
            kindling: new IntRangeFilter({ fromInclusive: value.minKindling, toInclusive: value.maxKindling }),
            watering: new IntRangeFilter({ fromInclusive: value.minWatering, toInclusive: value.maxWatering }),
            planting: new IntRangeFilter({ fromInclusive: value.minPlanting, toInclusive: value.maxPlanting }),
            generatingElectricity: new IntRangeFilter({ fromInclusive: value.minGeneratingElectricity, toInclusive: value.maxGeneratingElectricity }),
            handwork: new IntRangeFilter({ fromInclusive: value.minHandwork, toInclusive: value.maxHandwork }),
            gathering: new IntRangeFilter({ fromInclusive: value.minGathering, toInclusive: value.maxGathering }),
            lumbering: new IntRangeFilter({ fromInclusive: value.minLumbering, toInclusive: value.maxLumbering }),
            mining: new IntRangeFilter({ fromInclusive: value.minMining, toInclusive: value.maxMining }),
            oilExtraction: new IntRangeFilter({ fromInclusive: value.minOilExtraction, toInclusive: value.maxOilExtraction }),
            medicineProduction: new IntRangeFilter({ fromInclusive: value.minMedicineProduction, toInclusive: value.maxMedicineProduction }),
            cooling: new IntRangeFilter({ fromInclusive: value.minCooling, toInclusive: value.maxCooling }),
            transporting: new IntRangeFilter({ fromInclusive: value.minTransporting, toInclusive: value.maxTransporting }),
            farming: new IntRangeFilter({ fromInclusive: value.minFarming, toInclusive: value.maxFarming }),
          }),
        }),
      );
    });

    this.activatedRoute.queryParams.pipe(first()).subscribe((queryParams) => {
      const formattedFilterKeys = [
        { key: 'sizes', formatter: parseStringArray },
        { key: 'elementTypes', formatter: parseStringArray },
        { key: 'rarity', formatter: parseNumber },
        { key: 'hasNocturnalVariant', formatter: parseBoolean },
        { key: 'hasEdibleVariant', formatter: parseBoolean },
        { key: 'hasPredatorVariant', formatter: parseBoolean },
        { key: 'hasBossVariant', formatter: parseBoolean },
        { key: 'hasGymBossVariant', formatter: parseBoolean },
        { key: 'minKindling', formatter: parseNumber },
        { key: 'maxKindling', formatter: parseNumber },
        { key: 'minWatering', formatter: parseNumber },
        { key: 'maxWatering', formatter: parseNumber },
        { key: 'minPlanting', formatter: parseNumber },
        { key: 'maxPlanting', formatter: parseNumber },
        { key: 'minGeneratingElectricity', formatter: parseNumber },
        { key: 'maxGeneratingElectricity', formatter: parseNumber },
        { key: 'minHandwork', formatter: parseNumber },
        { key: 'maxHandwork', formatter: parseNumber },
        { key: 'minGathering', formatter: parseNumber },
        { key: 'maxGathering', formatter: parseNumber },
        { key: 'minLumbering', formatter: parseNumber },
        { key: 'maxLumbering', formatter: parseNumber },
        { key: 'minMining', formatter: parseNumber },
        { key: 'maxMining', formatter: parseNumber },
        { key: 'minOilExtraction', formatter: parseNumber },
        { key: 'maxOilExtraction', formatter: parseNumber },
        { key: 'minMedicineProduction', formatter: parseNumber },
        { key: 'maxMedicineProduction', formatter: parseNumber },
        { key: 'minCooling', formatter: parseNumber },
        { key: 'maxCooling', formatter: parseNumber },
        { key: 'minTransporting', formatter: parseNumber },
        { key: 'maxTransporting', formatter: parseNumber },
        { key: 'minFarming', formatter: parseNumber },
        { key: 'maxFarming', formatter: parseNumber },
      ];

      for (const filter of formattedFilterKeys) {
        const value = queryParams[filter.key];
        if (value) {
          const formattedValue = filter.formatter(value);
          console.log(filter, value, formattedValue);
          this.form.get(filter.key)?.patchValue(formattedValue);
        }
      }
    });
  }

  clear() {
    this.form.reset();
  }
}

const parseBoolean = (value: string | string[]) => (Array.isArray(value) ? Boolean(value[0]) : Boolean(value));
const parseNumber = (value: string | string[]) => (Array.isArray(value) ? Number(value[0]) : Number(value));
const parseStringArray = (value: string | string[]) => (Array.isArray(value) ? value : [value]);
