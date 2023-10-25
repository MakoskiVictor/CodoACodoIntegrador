import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  ticketPrice = 200;
  total = 0;

  calculateTotalPayment (numberOfTickets: number, category: string) {
    const ticketsCost = this.ticketPrice * numberOfTickets;

    if (category === "estudiante") this.total = ticketsCost * 0.8;
    if (category === "trainee") this.total = ticketsCost * 0.5;
    if (category === "junior") this.total = ticketsCost * 0.15;
  }

}
