import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPrefix'
})
export class AddPrefixPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'null';
  }

}
