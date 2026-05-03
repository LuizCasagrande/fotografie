import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../string-utils';

const whiteSpaceRegex = /\s+/g;

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

    return StringUtils.normalize(value).replace(whiteSpaceRegex, '-').toLowerCase();
  }
}
