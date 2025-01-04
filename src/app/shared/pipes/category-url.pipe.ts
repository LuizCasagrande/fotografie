import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {StringUtils} from '../string.utils';

@Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 'categoryUrl',
  standalone: true,
})
export class CategoryUrlPipe implements PipeTransform {

  transform(value: string): string {
    value = value || '';

    return StringUtils.normalize(value)
      .replace(/\s+/g, '-')
      .toLowerCase();
  }
}
