import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaptializeFirstLetter } from '../../custom-pipe/captializeFirstLetter.pipe';
import { captializeEveryFirstLetterPipe } from '../../custom-pipe/captializeEveryFirstLetter.pipe';
import { captializeAllLetterPipe } from '../../custom-pipe/captializeAllLetter.pipe';

@Component({
  selector: 'app-one',
  imports: [FormsModule, CaptializeFirstLetter, captializeEveryFirstLetterPipe,captializeAllLetterPipe],
  templateUrl: './one.html',
  styleUrl: './one.css',
})
export class One implements OnInit {
  myName: string = '';
  myTitleName: string = '';
  mySubjectName:string = '';
  constructor() { }

  ngOnInit(): void {

  }
}
