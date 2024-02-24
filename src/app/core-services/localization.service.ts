import { Injectable } from '@angular/core';
import { PalElement, PalElementsLocalizationApi } from '../api/api-clients';
import { combineLatest, map, Observable, ReplaySubject, switchMap } from 'rxjs';
import { LanguageService } from './language.service';
import { PalworldVersionService } from './palworld-version.service';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private elementsSubject: ReplaySubject<{ [element in keyof typeof PalElement]?: string }> | undefined;

  public get elements$(): Observable<{ [element in keyof typeof PalElement]?: string }> {
    if (!this.elementsSubject) {
      this.elementsSubject = new ReplaySubject<{ [element in keyof typeof PalElement]?: string }>(1);
      combineLatest([this.palworldVersionService.current$, this.languageService.current$])
        .pipe(
          switchMap(([version, language]) => this.palElementsLocalizationService.getPalElementsTexts(language, version)),
          map((elements) => this.elementsSubject!.next(elements)),
        )
        .subscribe();
    }

    return this.elementsSubject;
  }

  constructor(
    private palworldVersionService: PalworldVersionService,
    private languageService: LanguageService,
    private palElementsLocalizationService: PalElementsLocalizationApi,
  ) {}

  public element(element: PalElement): Observable<string | undefined> {
    return this.elements$.pipe(map((elements) => elements[element]));
  }
}
