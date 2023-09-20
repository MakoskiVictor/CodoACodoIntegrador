import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hipertext',
  templateUrl: './hipertext.component.html',
  styleUrls: ['./hipertext.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // --------> Buscar en documentación
})
export class HipertextComponent {
  @Input() hipertextWords: string = '';
  @Input() hipertextLink: string = '';
  @Input() selectClass: string = 'linkersGray';


}
