import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusColorPipe } from '../../custom-pipe/status-color.pipe';
import { SalaryFormatPipe } from '../../custom-pipe/salary-format.pipe';
import { CaptializeFirstLetter } from '../../custom-pipe/captializeFirstLetter.pipe';

export interface Employee {
  id: number;
  name: string;
  salary: number;
  status: string;
}

@Component({
  selector: 'app-five',
  imports: [CommonModule, StatusColorPipe,SalaryFormatPipe,CaptializeFirstLetter],
  templateUrl: './five.html',
  styleUrl: './five.css',
})


export class Five {
  userStatus: string = 'expired';

  employees: Employee[] = [
    { id: 101, name: 'abhishek sahebrao kale', salary: 85000, status: 'active' },
    { id: 102, name: 'sagar patil', salary: 62000, status: 'pending' },
    { id: 103, name: 'rahul deshmukh', salary: 45000, status: 'inactive' },
    { id: 104, name: 'sneha kulkarni', salary: 95000, status: 'active' },
    { id: 105, name: 'amit sharma', salary: 30000, status: 'expired' }
  ];
}
