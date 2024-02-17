import { NgModule } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { BrowsePalsPageComponent } from './pals-search-page/browse-pals-page.component';
import { SharedModule } from '../shared/shared.module';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'browse' },
  { path: 'browse', component: BrowsePalsPageComponent },
];

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [provideRouter(routes)],
})
export class PalsModule {}
