import { ModuleWithProviders, NgModule } from '@angular/core';
import { API_BASE_URL, PalElementsLocalizationApi, PalsApi, PalworldApiApi } from './api-clients';
import { environment } from '../../environments/environment';

@NgModule({
  providers: [PalsApi, PalworldApiApi, PalElementsLocalizationApi],
})
export class ApiModule {
  static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: API_BASE_URL, useValue: environment.apiUrl }],
    };
  }
}
