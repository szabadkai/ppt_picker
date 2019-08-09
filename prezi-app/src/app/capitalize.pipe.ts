import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  }

}
