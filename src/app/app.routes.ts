import { Routes } from '@angular/router';
import { HomeComponent } from './core-pages/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'pals',
    loadChildren: () => import('./pals/pals.module').then((m) => m.PalsModule),
  },
];
