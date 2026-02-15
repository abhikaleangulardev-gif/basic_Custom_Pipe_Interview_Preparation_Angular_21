import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterPipe'
})

export class filterPipe implements PipeTransform{
   transform(items: any[], searchText: string, fieldName: string): any[] {
     
    console.log(items);
    console.log(searchText);

    console.log(fieldName);
    
    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].toString().toLowerCase().includes(searchText);
      }
      return false;
    });
  }
}