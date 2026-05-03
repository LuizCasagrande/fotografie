const diacriticsRegex = /[\u0300-\u036f]/g;
const unicodeNormalizationForm = 'NFD';

export class StringUtils {
  static normalize(value: string): string {
    return value.normalize(unicodeNormalizationForm).replace(diacriticsRegex, '');
  }
}
