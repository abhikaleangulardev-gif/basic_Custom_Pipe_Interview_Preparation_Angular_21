import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shortTextParagraph'
})

export class shortTextParagraphPipe implements PipeTransform {
    transform(value: any,) {
        return value.slice(0, 101) + '.............';
    }
}