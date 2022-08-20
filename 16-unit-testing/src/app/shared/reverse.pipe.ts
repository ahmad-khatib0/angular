import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appReverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string) {
    return value.split('').reverse().join('');
  }
}
