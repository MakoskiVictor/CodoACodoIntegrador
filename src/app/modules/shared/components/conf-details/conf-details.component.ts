import { Component } from '@angular/core';

@Component({
  selector: 'app-conf-details',
  templateUrl: './conf-details.component.html',
  styleUrls: ['./conf-details.component.scss']
})
export class ConfDetailsComponent {
  btnInputs = [
    {
      text: 'Quiero ser orador',
      class: 'btn1'
    },
    {
      text: 'Comprar tickets',
      class: 'btn2'
    }
  ]
}
