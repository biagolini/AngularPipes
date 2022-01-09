import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testeSinal'
})
export class TesteSinalPipe implements PipeTransform {

  transform(value: number): string {
    if(value>0) {

        return "Maior que zero"
    } else {
      return "Menor ou igual a zero"
    }
  }

}
