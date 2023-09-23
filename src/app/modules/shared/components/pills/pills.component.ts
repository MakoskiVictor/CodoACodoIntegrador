import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PillsComponent {
  @Input() theme!: string;
  @Input() class!: string;
}
