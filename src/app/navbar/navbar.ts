import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CONSTANTS } from '../app.constants';
import { CategoryUrlPipe } from '../shared/pipes/category-url.pipe';

@Component({
  selector: 'app-navbar',
  imports: [Button, Menubar],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected constants = CONSTANTS;
  protected menu: MenuItem[] = [{ label: 'Biografia', routerLink: 'bio' }];

  constructor(private categoryUrlPipe: CategoryUrlPipe) {
    this.menu.push(
      ...this.constants.CATEGORIES.map((category) => ({
        label: category.name,
        routerLink: 'gallery',
        queryParams: { q: this.categoryUrlPipe.transform(category.name) },
      })),
    );
  }
}
