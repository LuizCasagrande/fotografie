import { ChangeDetectorRef, Component, model, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryNamePipe } from '../shared/pipes/category-name.pipe';
import { CONSTANTS } from '../app.constants';
import { GalleriaModule } from 'primeng/galleria';
import { NgOptimizedImage } from '@angular/common';
import { Image as PrimeImage } from 'primeng/image';

@Component({
  selector: 'app-gallery',
  imports: [GalleriaModule, NgOptimizedImage, PrimeImage],
  templateUrl: './gallery.html',
})
export class Gallery implements OnInit {
  title = signal<string>('');
  images = signal<Image[]>([]);
  starredImages = signal<Image[]>([]);
  activeIndex = 0;
  protected constants = CONSTANTS;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryNamePipe: CategoryNamePipe,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const query = params.get('q');
      this.title.set(this.categoryNamePipe.transform(query!));
      const selectedCategory = this.constants.CATEGORIES.filter((c) => c.name === this.title())[0];

      this.images.set(
        selectedCategory?.images.map((image) => ({
          src: image.src,
          alt: image.alt,
          starred: image.starred,
        })),
      );

      this.starredImages.set(this.images()?.filter((i) => i.starred));
      this.activeIndex = 0;
      this.changeDetectorRef.detectChanges();
    });
  }
}

export interface Image {
  src: string;
  alt: string;
  starred?: boolean;
}
