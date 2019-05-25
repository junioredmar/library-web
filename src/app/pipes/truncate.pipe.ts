import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value && value.length > 14) {
      return `${value.slice(0, 14)}..`;
    }
    return value;
  }

}
