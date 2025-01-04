import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title,
              private metaService: Meta) {
  }

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateMeta(description: string, keywords: string) {
    this.metaService.updateTag({name: 'description', content: description});
    this.metaService.updateTag({name: 'keywords', content: keywords});
  }

  updateOpenGraph(title: string, description: string, image: string) {
    this.metaService.updateTag({property: 'og:title', content: title});
    this.metaService.updateTag({property: 'og:description', content: description});
    this.metaService.updateTag({property: 'og:image', content: image});
  }

  updateInstagram(title: string, description: string, image: string) {
    this.metaService.updateTag({name: 'instagram:title', content: title});
    this.metaService.updateTag({name: 'instagram:description', content: description});
    this.metaService.updateTag({name: 'instagram:image', content: image});
  }

  updateFacebook(title: string, description: string, image: string) {
    this.metaService.updateTag({name: 'facebook:title', content: title});
    this.metaService.updateTag({name: 'facebook:description', content: description});
    this.metaService.updateTag({name: 'facebook:image', content: image});
  }

  updateTwitter(title: string, description: string, image: string) {
    this.metaService.updateTag({name: 'twitter:title', content: title});
    this.metaService.updateTag({name: 'twitter:description', content: description});
    this.metaService.updateTag({name: 'twitter:image', content: image});
  }
}
