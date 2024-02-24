import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { SharedModule } from './shared/shared.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), provideAngularSvgIcon(), importProvidersFrom(SharedModule)],
};
