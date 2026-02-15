import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { shortTextParagraphPipe } from '../../custom-pipe/shortTextParagraph.pipe';

@Component({
  selector: 'app-two',
  imports: [CommonModule, shortTextParagraphPipe],
  templateUrl: './two.html',
  styleUrl: './two.css',
})
export class Two {
  myParagraph: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga, voluptatem cumque ex quibusdam laborum consequuntur ut sed dignissimos quaerat! Quo vel assumenda explicabo rem veritatis quaerat quae, tempore corrupti, at mollitia placeat magni odit inventore error aperiam ea hic. Assumenda quibusdam porro facere atque repellendus ipsum expedita soluta voluptate est cumque perferendis corrupti ab, labore incidunt modi minus dolorum, vel maxime rem optio doloremque inventore magnam reprehenderit magni? Ipsam facilis, nisi doloremque laboriosam corrupti, beatae quas odit aliquid molestiae consequuntur atque ad distinctio, veniam incidunt? Ad qui provident soluta ea dolorum sint ducimus beatae. Temporibus exercitationem assumenda quaerat quos molestiae esse, adipisci ut, alias obcaecati eius veniam nemo similique aliquid, dicta cupiditate et veritatis labore omnis autem eveniet nostrum. Eius, temporibus. Molestias cupiditate totam ad quo, eius porro mollitia repudiandae animi repellendus illum tempore cumque dignissimos earum inventore quam at? Modi, at accusamus.'
}
