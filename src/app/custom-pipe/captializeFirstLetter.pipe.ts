import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appCaptializeFirstLetter'
})



export class CaptializeFirstLetter implements PipeTransform{ 
    transform(value: any) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}