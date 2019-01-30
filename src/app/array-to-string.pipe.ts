import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: Array<string>, delimiter: string): string {
    return value.reduce(function(previous, current) { return previous + delimiter  + " " + current; });
  }

}
