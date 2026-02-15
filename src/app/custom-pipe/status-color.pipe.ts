import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appStatusColor',
  standalone: true
})
export class StatusColorPipe implements PipeTransform {

  transform(status: string, isBadge: boolean = false): string {
   
    const statusMap: { [key: string]: string } = {
      'active': 'success',
      'pending': 'warning',
      'inactive': 'secondary',
      'expired': 'danger',
      'completed': 'info'
    };

    const color = statusMap[status.toLowerCase()] || 'dark';

    // Returns 'bg-success' for badges or 'text-success' for plain text
    return isBadge ? `bg-${color}` : `text-${color}`;
  }
}