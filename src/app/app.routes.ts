import {Routes} from '@angular/router';
import {BioComponent} from './bio/bio.component';
import {GalleryComponent} from './gallery/gallery.component';

export const routes: Routes = [
  {path: 'bio', component: BioComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '', pathMatch: 'full', redirectTo: 'bio'},
  {path: '**', pathMatch: 'full', redirectTo: 'bio'},
];
