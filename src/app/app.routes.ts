import { Routes } from '@angular/router';
import { UserCreationPageComponent } from './features/user-creation/user-creation-page.component';
import { HomeComponent } from './core/layout/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-creation', component: UserCreationPageComponent },
  { path: '**', component: HomeComponent },
];
