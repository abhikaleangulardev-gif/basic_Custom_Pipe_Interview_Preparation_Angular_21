import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'captializeEveryFirstLetter'
})

export class captializeEveryFirstLetterPipe implements PipeTransform {
    transform(value: any,) {
        return value.split(' ').map((char: any) => char.charAt(0).toUpperCase() + char.slice(1)).join(' ');
    }
}