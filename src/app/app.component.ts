import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { PalworldVersionService } from './core-services/palworld-version.service';
import { LayoutComponent } from './core-pages/layout/layout.component';
import { LanguageService } from './core-services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected logoUrl: string;

  constructor(locationStrategy: LocationStrategy, palworldVersionService: PalworldVersionService, languageService: LanguageService) {
    this.logoUrl = locationStrategy.getBaseHref() + 'assets';
    palworldVersionService.useDefaultVersion().subscribe();
  }
}
