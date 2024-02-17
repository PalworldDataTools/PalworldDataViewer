import { Injectable } from '@angular/core';
import { PalworldVersionService } from './palworld-version.service';
import { HttpClient } from '@angular/common/http';
import {
  first,
  forkJoin,
  map,
  Observable,
  of,
  ReplaySubject,
  switchMap,
} from 'rxjs';

@Injectable()
export class PalsService {
  private tribesSubject: ReplaySubject<{ [name: string]: PalTribe }> =
    new ReplaySubject<{ [name: string]: PalTribe }>();

  get tribeNames$(): Observable<string[]> {
    return this.tribesSubject.pipe(map((tribes) => Object.keys(tribes)));
  }

  constructor(
    private palworldVersionService: PalworldVersionService,
    private httpClient: HttpClient,
  ) {
    this.palworldVersionService.version$
      .pipe(switchMap((v) => this.loadVersion(v)))
      .subscribe();
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

  private loadVersion(version: string): Observable<void> {
    const manifestUrl = this.getPalAssetUrl(version, 'pals.json');

    return this.httpClient.get<{ [p: string]: PalManifest }>(manifestUrl).pipe(
      switchMap((file) => {
        return forkJoin(
          Object.entries(file).map(
            ([name, manifest]): Observable<[string, PalTribe | undefined]> =>
              this.loadTribe(version, manifest).pipe(
                map((tribe) => [name, tribe]),
              ),
          ),
        ).pipe(
          map((tribes) =>
            this.tribesSubject.next(
              Object.fromEntries(
                tribes
                  .filter(([_, tribe]) => Boolean(tribe))
                  .map(([name, tribe]) => [name, tribe!]),
              ),
            ),
          ),
        );
      }),
    );
  }

  private loadTribe(
    version: string,
    manifest: PalManifest,
  ): Observable<PalTribe | undefined> {
    const main$: Observable<Pal> = this.httpClient.get<Pal>(
      this.getPalAssetUrl(version, manifest.main),
    );
    const boss$: Observable<Pal | undefined> = manifest.boss
      ? this.httpClient.get<Pal>(this.getPalAssetUrl(version, manifest.boss))
      : of(undefined);
    const gym$: Observable<Pal | undefined> = manifest.gym
      ? this.httpClient.get<Pal>(this.getPalAssetUrl(version, manifest.gym))
      : of(undefined);
    const otherVariants$: Observable<Pal[] | undefined> = manifest.otherVariants
      ? forkJoin(
          manifest.otherVariants.map((path) =>
            this.httpClient.get<Pal>(this.getPalAssetUrl(version, path)),
          ),
        )
      : of(undefined);

    return forkJoin({
      main: main$,
      boss: boss$,
      gym: gym$,
      otherVariants: otherVariants$,
    }).pipe(
      map(
        ({ main, boss, gym, otherVariants }): PalTribe => ({
          iconPath: this.getPalAssetUrl(version, manifest.icon),
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
  readonly iconPath: string;
  readonly main: Pal;
  readonly boss?: Pal;
  readonly gym?: Pal;
  readonly otherVariants?: Pal[];
}

export interface Pal {
  readonly name: string;
  readonly displayName: string;
}

export enum PalVariant {
  Main,
  Boss,
  Gym,
}
