import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersComponent {

}
