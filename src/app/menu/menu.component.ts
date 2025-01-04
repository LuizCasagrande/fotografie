import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Menubar} from 'primeng/menubar';
import {ScrollPanel} from 'primeng/scrollpanel';
import {APP_CONSTANTS} from '../app.constants';
import {CategoryUrlPipe} from '../shared/pipes/category-url.pipe';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  imports: [
    Button,
    Menubar,
    ScrollPanel,
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  readonly CONSTANTS = APP_CONSTANTS;
  items: MenuItem[] = [{label: 'Biografia', routerLink: 'bio'}];

  constructor(private categoryUrlPipe: CategoryUrlPipe) {
  }

  ngOnInit(): void {
    this.items.push(
      ...this.CONSTANTS.CATEGORIES.map(category => ({
        label: category.name,
        routerLink: 'gallery',
        queryParams: {'q': this.categoryUrlPipe.transform(category.name)},
      })),
    );
  }
}
