import { Routes } from '@angular/router';
import { ThreeD } from './three-d/three-d';

export const routes: Routes = [
  { path: '', redirectTo: '/threed', pathMatch: 'full' },
  { path: 'threed', component: ThreeD }
];