import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class PalworldVersionService {
  private palworldVersions: string[] = ['13390747'];
  private selectedVersion: string = '';
  private selectedVersionSubject: ReplaySubject<string> =
    new ReplaySubject<string>(1);

  get versions(): readonly string[] {
    return this.palworldVersions;
  }

  get version(): string {
    return this.selectedVersion;
  }

  get version$(): Observable<string> {
    return this.selectedVersionSubject.asObservable();
  }

  constructor() {
    this.setActiveVersion(this.palworldVersions[0]);
  }

  setVersion(version: string) {
    if (!this.palworldVersions.includes(version)) {
      throw new Error('Unknown version ' + version);
    }

    this.setActiveVersion(version);
  }

  private setActiveVersion(version: string) {
    this.selectedVersion = version;
    this.selectedVersionSubject.next(version);
  }
}
