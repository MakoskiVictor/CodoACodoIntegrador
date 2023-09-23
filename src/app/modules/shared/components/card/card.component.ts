import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() speakerName!: string;
  @Input() speakerImage!: string;
  @Input() speakerText!: string;

  @Input() theme!: string;
  @Input() class!: string;

  @Input() theme2!: string;
  @Input() class2!: string;



}
