import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { CONSTANTS } from '../../app.constants';
import { StringUtils } from '../string-utils';

@Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 'categoryName',
  standalone: true,
})
export class CategoryNamePipe implements PipeTransform {
  private categories = CONSTANTS.CATEGORIES.map((c) => c.name);

  transform(value: string): string {
    value = value || '';

    const categoryName = value
      .split('-')
      .map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
      .join(' ');

    return this.categories.filter((name) => categoryName === StringUtils.normalize(name))[0];
  }
}
