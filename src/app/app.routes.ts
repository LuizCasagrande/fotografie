import { Routes } from '@angular/router';
import { Bio } from './bio/bio';
import { Gallery } from './gallery/gallery';

export const routes: Routes = [
  { path: 'gallery', component: Gallery },
  { path: 'bio', component: Bio },
  { path: '', redirectTo: 'bio', pathMatch: 'full' },
  { path: '**', redirectTo: 'bio', pathMatch: 'full' },
];
