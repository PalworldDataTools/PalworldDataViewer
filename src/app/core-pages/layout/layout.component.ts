import { Component } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { PalworldVersionService } from '../../core-services/palworld-version.service';
import { SharedModule } from '../../shared/shared.module';
import { NgbCollapse, NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core-services/language.service';
import { AcceptLanguage, AcceptPalworldVersion } from '../../api/api-clients';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule, AsyncPipe, NgbCollapse, NgbDropdownMenu, NgbDropdownToggle, NgbDropdownItem, RouterLink, RouterLinkActive, NgbDropdown, NgOptimizedImage],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  protected isMenuCollapsed: boolean = true;

  constructor(
    protected palworldVersionService: PalworldVersionService,
    protected languageService: LanguageService,
  ) {}

  changeVersion(version: AcceptPalworldVersion) {
    this.palworldVersionService.changeVersion(version);
    window.location.reload();
  }

  changeLanguage(language: AcceptLanguage) {
    this.languageService.changeLanguage(language);
    window.location.reload();
  }
}
