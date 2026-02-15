import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaptializeFirstLetter } from '../../custom-pipe/captializeFirstLetter.pipe';
import { captializeEveryFirstLetterPipe } from '../../custom-pipe/captializeEveryFirstLetter.pipe';

@Component({
  selector: 'app-one',
  imports: [FormsModule, CaptializeFirstLetter, captializeEveryFirstLetterPipe],
  templateUrl: './one.html',
  styleUrl: './one.css',
})
export class One implements OnInit {
  myName: string = '';
  myTitleName: string = '';
  constructor() { }

  ngOnInit(): void {

  }
}
