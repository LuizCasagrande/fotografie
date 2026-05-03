import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CONSTANTS } from './app.constants';
import { SeoService } from './core/seo/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
})
export class App {
  constructor(private seoService: SeoService) {
    const metaTags = [CONSTANTS.NAME, ...CONSTANTS.META_TAGS];
    this.seoService.updateTitle(CONSTANTS.NAME);
    this.seoService.updateMeta(CONSTANTS.DESCRIPTION, metaTags.join(', '));
    this.seoService.updateOpenGraph(CONSTANTS.NAME, CONSTANTS.DESCRIPTION, CONSTANTS.IMAGE_URL);
    this.seoService.updateInstagram(CONSTANTS.NAME, CONSTANTS.DESCRIPTION, CONSTANTS.IMAGE_URL);
    this.seoService.updateFacebook(CONSTANTS.NAME, CONSTANTS.DESCRIPTION, CONSTANTS.IMAGE_URL);
    this.seoService.updateTwitter(CONSTANTS.NAME, CONSTANTS.DESCRIPTION, CONSTANTS.IMAGE_URL);
  }
}
