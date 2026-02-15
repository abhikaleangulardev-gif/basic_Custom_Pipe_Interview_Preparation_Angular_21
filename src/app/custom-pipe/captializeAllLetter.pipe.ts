import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'captializeAllLetter'
})

export class captializeAllLetterPipe implements PipeTransform{
    transform(value: any) {
      return value.toUpperCase();
    }
}