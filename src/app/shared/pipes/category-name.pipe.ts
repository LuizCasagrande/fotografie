import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {APP_CONSTANTS} from '../../app.constants';
import {StringUtils} from '../string.utils';

@Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 'categoryName',
  standalone: true,
})
export class CategoryNamePipe implements PipeTransform {

  readonly CATEGORIES = APP_CONSTANTS.CATEGORIES.map(category => category.name);

  transform(value: string): string {
    value = value || '';

    const categoryName = value.split('-')
      .map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
      .join(' ');

    return this.CATEGORIES.filter(name => categoryName === StringUtils.normalize(name))[0];
  }
}
