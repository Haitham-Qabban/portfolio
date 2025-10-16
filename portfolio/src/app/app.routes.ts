import { Routes } from '@angular/router';
import { ThreeD } from './three-d/three-d';

export const routes: Routes = [
  { path: 'three-d', component: ThreeD },
  { path: '', redirectTo: '/three-d', pathMatch: 'full' }
];