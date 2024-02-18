import { Injectable } from '@angular/core';
import { PalworldVersionService } from './palworld-version.service';
import { HttpClient } from '@angular/common/http';
import { first, forkJoin, map, Observable, of, ReplaySubject, switchMap } from 'rxjs';
import { TribesSearcher, TribesSearchRequest, TribesSearchResult } from './tribes-searcher';

@Injectable()
export class PalsService {
  private tribesSubject: ReplaySubject<{ [name: string]: PalTribe }> = new ReplaySubject<{
    [name: string]: PalTribe;
  }>();

  get tribeNames$(): Observable<string[]> {
    return this.tribesSubject.pipe(map((tribes) => Object.keys(tribes)));
  }

  constructor(
    private palworldVersionService: PalworldVersionService,
    private httpClient: HttpClient,
  ) {
    this.palworldVersionService.version$.pipe(switchMap((v) => this.loadVersion(v))).subscribe();
  }

  getTribe(name: string): Observable<PalTribe | undefined> {
    return this.tribesSubject.pipe(
      first(),
      map((tribes) => tribes[name]),
    );
  }

  getPal(name: string, variant?: PalVariant): Observable<Pal | undefined> {
    return this.getTribe(name).pipe(
      map((tribe) => {
        if (!tribe) {
          return undefined;
        }

        switch (variant) {
          case PalVariant.Main:
          case undefined:
            return tribe.main;
          case PalVariant.Boss:
            return tribe.boss;
          case PalVariant.Gym:
            return tribe.gym;
        }
      }),
    );
  }

  searchTribes(request: TribesSearchRequest): Observable<TribesSearchResult> {
    return this.tribesSubject.pipe(
      first(),
      map((tribes) => TribesSearcher.search(Object.values(tribes), request)),
    );
  }

  private loadVersion(version: string): Observable<void> {
    const manifestUrl = this.getPalAssetUrl(version, 'pals.json');

    return this.httpClient.get<{ [p: string]: PalManifest }>(manifestUrl).pipe(
      switchMap((file) => {
        return forkJoin(
          Object.entries(file).map(([name, manifest]): Observable<[string, PalTribe | undefined]> => this.loadTribe(version, name, manifest).pipe(map((tribe) => [name, tribe]))),
        ).pipe(map((tribes) => this.tribesSubject.next(Object.fromEntries(tribes.filter(([_, tribe]) => Boolean(tribe)).map(([name, tribe]) => [name, tribe!])))));
      }),
    );
  }

  private loadTribe(version: string, name: string, manifest: PalManifest): Observable<PalTribe | undefined> {
    const main$: Observable<Pal> = this.httpClient.get<Pal>(this.getPalAssetUrl(version, manifest.main));
    const boss$: Observable<Pal | undefined> = manifest.boss ? this.httpClient.get<Pal>(this.getPalAssetUrl(version, manifest.boss)) : of(undefined);
    const gym$: Observable<Pal | undefined> = manifest.gym ? this.httpClient.get<Pal>(this.getPalAssetUrl(version, manifest.gym)) : of(undefined);
    const otherVariants$: Observable<Pal[] | undefined> = manifest.otherVariants
      ? forkJoin(manifest.otherVariants.map((path) => this.httpClient.get<Pal>(this.getPalAssetUrl(version, path))))
      : of(undefined);

    return forkJoin({
      main: main$,
      boss: boss$,
      gym: gym$,
      otherVariants: otherVariants$,
    }).pipe(
      map(
        ({ main, boss, gym, otherVariants }): PalTribe => ({
          name,
          iconPath: manifest.icon ? this.getPalAssetUrl(version, manifest.icon) : undefined,
          main,
          boss,
          gym,
          otherVariants,
        }),
      ),
    );
  }

  private getPalAssetUrl(version: string, path: string) {
    return `/assets/palworld/${version}/Pals/${path}`;
  }
}

interface PalManifest {
  readonly icon: string;
  readonly main: string;
  readonly boss: string;
  readonly gym: string;
  readonly otherVariants: string[];
}

export interface PalTribe {
  readonly name: string;
  readonly iconPath?: string;
  readonly main: Pal;
  readonly boss?: Pal;
  readonly gym?: Pal;
  readonly otherVariants?: Pal[];
}

export interface Pal {
  readonly tribeName: string;
  readonly name: string;
  readonly displayName: string;
  readonly rarity: number;
  readonly size: string;
  readonly elementType1: string;
  readonly elementType2: string;
  readonly isNocturnal: boolean;
  readonly isBoss: boolean;
  readonly isTowerBoss: boolean;
  readonly work: PalWork;
}

export interface PalWork {
  readonly emitFlame: number;
  readonly watering: number;
  readonly seeding: number;
  readonly generateElectricity: number;
  readonly handcraft: number;
  readonly collection: number;
  readonly deforest: number;
  readonly mining: number;
  readonly oilExtraction: number;
  readonly produceMedicine: number;
  readonly cool: number;
  readonly transport: number;
  readonly monsterFarm: number;
}

export enum PalVariant {
  Main,
  Boss,
  Gym,
}
