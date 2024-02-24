import { Injectable } from '@angular/core';
import { first, ignoreElements, Observable, ReplaySubject } from 'rxjs';
import { AcceptPalworldVersion, PalworldApiApi } from '../api/api-clients';
import { UserConfigurationService } from './user-configuration.service';

@Injectable({
  providedIn: 'root',
})
export class PalworldVersionService {
  private static ConfigurationKey = 'version';

  private versions: AcceptPalworldVersion[] = [];
  private version: AcceptPalworldVersion | undefined;
  private currentVersionSubject: ReplaySubject<AcceptPalworldVersion | undefined> | undefined;

  public get current$(): Observable<AcceptPalworldVersion | undefined> {
    if (!this.currentVersionSubject) {
      this.currentVersionSubject = new ReplaySubject<AcceptPalworldVersion | undefined>(1);
      this.palworldApi.getPalworldVersions().subscribe((versions) => {
        this.versions = versions.map((v) => v as AcceptPalworldVersion);

        if (versions.length <= 0) {
          this.changeVersion(undefined);
          return;
        }

        const savedVersion = this.userConfigurationService.get<string>(PalworldVersionService.ConfigurationKey);
        if (savedVersion && versions.includes(savedVersion)) {
          this.changeVersion(savedVersion as AcceptPalworldVersion);
          return;
        }

        this.changeVersion(versions[0] as AcceptPalworldVersion);
      });
    }

    return this.currentVersionSubject.asObservable();
  }

  public get current(): AcceptPalworldVersion | undefined {
    return this.version;
  }

  public get all(): AcceptPalworldVersion[] {
    return this.versions;
  }

  constructor(
    private palworldApi: PalworldApiApi,
    private userConfigurationService: UserConfigurationService,
  ) {}

  useDefaultVersion(): Observable<void> {
    return this.current$.pipe(first(), ignoreElements());
  }

  changeVersion(version: AcceptPalworldVersion | undefined): void {
    if (version == this.version) {
      console.warn(`Version ${version} is already the current version`);
      return;
    }

    if (version && !this.versions.includes(version)) {
      throw new Error(`Unknown version ${version}`);
    }

    this.currentVersionSubject!.next(version);
    this.version = version;

    if (version) {
      this.userConfigurationService.set(PalworldVersionService.ConfigurationKey, version);
    } else {
      this.userConfigurationService.unset(PalworldVersionService.ConfigurationKey);
    }
  }
}
