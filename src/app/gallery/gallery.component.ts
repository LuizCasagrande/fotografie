import {Component, OnInit} from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {Image as PrimeImage} from 'primeng/image';
import {ActivatedRoute} from '@angular/router';
import {APP_CONSTANTS} from '../app.constants';
import {CategoryNamePipe} from '../shared/pipes/category-name.pipe';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [
    GalleriaModule,
    PrimeImage,
    NgOptimizedImage,
  ],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {

  title = '';
  images: Image[] = [];
  featuredImages: Image[] = [];
  activeIndex = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private categoryNamePipe: CategoryNamePipe) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const query = params.get('q');
      this.title = this.categoryNamePipe.transform(query!);
      this.activeIndex = 0;

      this.images = APP_CONSTANTS.CATEGORIES
        .filter(category => category.name === this.title)[0]?.images
        .map(image => ({
          src: image.src,
          alt: image.alt,
          featured: image.featured,
        }));

      this.featuredImages = this.images?.filter(i => i.featured);
    })
  }
}

export interface Image {
  src: string;
  alt: string;
  featured?: boolean;
}
