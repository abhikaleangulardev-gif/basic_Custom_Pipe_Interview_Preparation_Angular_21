import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFormat',
  standalone: true
})
export class SalaryFormatPipe implements PipeTransform {

  transform(value: number | string, currencySymbol: string = '₹', locale: string = 'en-IN'): string {
   
    const salary = Number(value);

    // Formats the number: 100000 -> 1,00,000
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: locale === 'en-IN' ? 'INR' : 'USD',
      maximumFractionDigits: 0 // Salaries usually don't need decimals
    }).format(salary);
  }
}