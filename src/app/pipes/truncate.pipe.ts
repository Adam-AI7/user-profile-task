import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value:string| string[], limit: number = 40, ellipsis: string = '...'): string {
    if(Array.isArray(value)) {
        value.toString()
    }
    if (value.length <= limit) {
      return (value as string);
    }
    return (value as string).substring(0, limit) + ellipsis;
  }
}