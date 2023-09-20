import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hipertext',
  templateUrl: './hipertext.component.html',
  styleUrls: ['./hipertext.component.scss']
})
export class HipertextComponent {
  @Input() hipertextWords: string = '';
  @Input() hipertextLink: string = '';
  @Input() selectClass: string = 'linkersGray';

  /* constructor(text: string, url: string) {
    this.hipertextWords = text;
    this.hipertextLink = url;
  } */

}
