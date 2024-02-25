import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PalIconSize, PalsApi } from '../api/api-clients';
import { catchError, map, Observable, of, ReplaySubject } from 'rxjs';
import { PalworldVersionService } from './palworld-version.service';
import { CacheByName, CacheBySize } from './cache-utils';

@Injectable({
  providedIn: 'root',
})
export class PalIconsService {
  private cache: CacheByName<CacheBySize<ReplaySubject<SafeUrl>>> = {};

  constructor(
    private palworldVersionService: PalworldVersionService,
    private palsApi: PalsApi,
    private sanitizer: DomSanitizer,
  ) {}

  getIcon(name: string, size: PalIconSize): Observable<SafeUrl> {
    if (!Object.keys(this.cache).includes(name)) {
      this.cache[name] = {};
    }

    if (!Object.keys(this.cache[name]).includes(size)) {
      (this.cache[name] as any)[size] = new ReplaySubject<SafeUrl>(1);
      this.palsApi
        .getIcon(name, size, this.palworldVersionService.current)
        .pipe(
          map((file) => file.data),
          catchError((err) => {
            console.error(`Could not load icon of size ${size} for ${name}`, err);
            return of(undefined);
          }),
        )
        .subscribe((icon) => {
          if (icon) {
            const iconUrl = URL.createObjectURL(icon);
            this.cache[name][size]!.next(this.sanitizer.bypassSecurityTrustUrl(iconUrl));
          }
        });
    }

    return this.cache[name][size]!;
  }
}
