import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filterPipe } from '../../custom-pipe/filterPipe.pipe';

@Component({
  selector: 'app-three',
  imports: [CommonModule, FormsModule, filterPipe],
  templateUrl: './three.html',
  styleUrl: './three.css',
})
export class Three {
  searchText: string = '';

  users = [
    { id: 1, name: 'Abhishek Kale' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Sagar Patil' }
  ];
}
