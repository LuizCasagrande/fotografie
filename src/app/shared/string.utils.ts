export class StringUtils {

  static normalize(value: string): string {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
  }
}
