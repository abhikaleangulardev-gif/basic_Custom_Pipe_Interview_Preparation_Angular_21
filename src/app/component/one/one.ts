import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaptializeFirstLetter } from '../../custom-pipe/captializeFirstLetter.pipe';

@Component({
  selector: 'app-one',
  imports: [FormsModule,CaptializeFirstLetter],
  templateUrl: './one.html',
  styleUrl: './one.css',
})
export class One implements OnInit{
    myName:string = '';
    constructor(){}

    ngOnInit(): void {
     
    }
}
