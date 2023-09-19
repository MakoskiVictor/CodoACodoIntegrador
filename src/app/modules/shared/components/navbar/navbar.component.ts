import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hipertextWords = [];
  hipertextLink = '#'

  linksToRender = [
    {
      text: 'La conferencia',
      url: '#'
    },
    {
      text: 'Los oradores',
      url: '#'
    },
    {
      text: 'El lugar y la fecha',
      url: '#'
    },
    {
      text: 'Conviértete en orador',
      url: '#'
    },
    {
      text: 'Comprar tickets',
      url: '#'
    }
  ]
}
