import { NgModule } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BrowsePalsPageComponent } from './browse-pals-page/browse-pals-page.component';

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
