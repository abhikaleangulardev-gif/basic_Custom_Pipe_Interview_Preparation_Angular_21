import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SalaryFormatPipe } from '../../custom-pipe/salary-format.pipe';

@Component({
  selector: 'app-four',
  imports: [CommonModule, FormsModule, SalaryFormatPipe],
  templateUrl: './four.html',
  styleUrl: './four.css',
})
export class Four {
  empSalary: number = 75000;
}
