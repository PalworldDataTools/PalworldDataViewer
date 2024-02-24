import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, switchMap } from 'rxjs';
import { AcceptLanguage, PalworldApiApi } from '../api/api-clients';
import { PalworldVersionService } from './palworld-version.service';
import { UserConfigurationService } from './user-configuration.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private static ConfigurationKey = 'language';

  private languages: AcceptLanguage[] = [];
  private language: AcceptLanguage | undefined;
  private currentLanguageSubject: ReplaySubject<AcceptLanguage | undefined> | undefined;

  public get current$(): Observable<AcceptLanguage | undefined> {
    if (!this.currentLanguageSubject) {
      this.currentLanguageSubject = new ReplaySubject<AcceptLanguage | undefined>(1);
      this.palworldVersionService.current$.pipe(switchMap((version) => this.palworldApi.getLanguages(version))).subscribe((languages) => {
        this.languages = languages.map((l) => l as AcceptLanguage);

        if (languages.length <= 0) {
          this.changeLanguage(undefined);
          return;
        }

        const savedLanguage = this.userConfigurationService.get<string>(LanguageService.ConfigurationKey);
        if (savedLanguage && languages.includes(savedLanguage)) {
          this.changeLanguage(savedLanguage as AcceptLanguage);
          return;
        }

        this.changeLanguage(languages[0] as AcceptLanguage);
      });
    }

    return this.currentLanguageSubject.asObservable();
  }

  public get current(): AcceptLanguage | undefined {
    return this.language;
  }

  public get all(): AcceptLanguage[] {
    return this.languages;
  }

  constructor(
    private palworldVersionService: PalworldVersionService,
    private palworldApi: PalworldApiApi,
    private userConfigurationService: UserConfigurationService,
  ) {}

  changeLanguage(language: AcceptLanguage | undefined): void {
    if (language == this.language) {
      console.warn(`Language ${language} is already the current language`);
      return;
    }

    if (language && !this.languages.includes(language)) {
      throw new Error(`Unknown language ${language}`);
    }

    this.currentLanguageSubject!.next(language);
    this.language = language;

    if (language) {
      this.userConfigurationService.set(LanguageService.ConfigurationKey, language);
    } else {
      this.userConfigurationService.unset(LanguageService.ConfigurationKey);
    }
  }
}
