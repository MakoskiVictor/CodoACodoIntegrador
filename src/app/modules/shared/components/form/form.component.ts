import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  
  numberOfTickets = new FormControl(null, [Validators.required,Validators.min(1) ]);
  category = new FormControl('', [Validators.required, Validators.minLength(5)]);
  ticketPrice = 200;
  total = 0;

  calculateTotalPayment () {
    const ticketsCost = this.ticketPrice * this.numberOfTickets.value!;

    if (this.category.value === "estudiante") this.total = ticketsCost * 0.15;
    if (this.category.value === "trainee") this.total = ticketsCost * 0.5;
    if (this.category.value === "junior") this.total = ticketsCost * 0.8;
  }

  eraseData () {
    this.total = 0;
    this.numberOfTickets.setValue(null);
    this.category.setValue('');
  }

}
