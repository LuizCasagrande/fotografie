import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {PrimeNG} from 'primeng/config';
import {APP_CONSTANTS} from './app.constants';
import {SeoService} from './core/seo/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private primeNgConfig: PrimeNG,
              private seoService: SeoService) {
    this.primeNgConfig.ripple.set(true);

    const metaTags = [
      APP_CONSTANTS.NAME,
      ...APP_CONSTANTS.META_TAGS,
    ];

    this.seoService.updateTitle(APP_CONSTANTS.NAME);
    this.seoService.updateMeta(APP_CONSTANTS.DESCRIPTION, metaTags.join(', '));
    this.seoService.updateOpenGraph(APP_CONSTANTS.NAME, APP_CONSTANTS.DESCRIPTION, APP_CONSTANTS.IMAGE_URL);
    this.seoService.updateInstagram(APP_CONSTANTS.NAME, APP_CONSTANTS.DESCRIPTION, APP_CONSTANTS.IMAGE_URL);
    this.seoService.updateFacebook(APP_CONSTANTS.NAME, APP_CONSTANTS.DESCRIPTION, APP_CONSTANTS.IMAGE_URL);
    this.seoService.updateTwitter(APP_CONSTANTS.NAME, APP_CONSTANTS.DESCRIPTION, APP_CONSTANTS.IMAGE_URL);
  }
}
