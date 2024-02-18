import { Injectable } from '@angular/core';
import { PalworldVersionService } from './palworld-version.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, ReplaySubject, switchMap } from 'rxjs';
import { LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PalwordEnumsService {
  private elementTypesSubject: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  private sizeTypesSubject: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  private baseHref: string;

  get elementTypes$() {
    return this.elementTypesSubject.asObservable();
  }

  get sizeTypes$() {
    return this.sizeTypesSubject.asObservable();
  }

  constructor(
    private palworldVersionService: PalworldVersionService,
    private httpClient: HttpClient,
    locationStrategy: LocationStrategy,
  ) {
    this.baseHref = locationStrategy.getBaseHref();
    this.palworldVersionService.version$.pipe(switchMap((v) => this.loadVersion(v))).subscribe();
  }

  private loadVersion(version: string) {
    return forkJoin({
      elementType: this.httpClient.get<string[]>(this.getEnumAssetUrl(version, 'ElementType.json')),
      sizeType: this.httpClient.get<string[]>(this.getEnumAssetUrl(version, 'SizeType.json')),
    }).pipe(
      map(({ elementType, sizeType }) => {
        this.elementTypesSubject.next(elementType);
        this.sizeTypesSubject.next(sizeType);
      }),
    );
  }

  private getEnumAssetUrl(version: string, path: string) {
    return `${this.baseHref}assets/palworld/${version}/Enums/${path}`;
  }
}
