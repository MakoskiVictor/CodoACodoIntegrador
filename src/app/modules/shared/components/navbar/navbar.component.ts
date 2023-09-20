import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  hipertextWords = [];
  hipertextLink = '#'

  linksToRender = [
    {
      text: 'La conferencia',
      url: '#',
      class: 'linkersGray'
    },
    {
      text: 'Los oradores',
      url: '#',
      class: 'linkersGray'
    },
    {
      text: 'El lugar y la fecha',
      url: '#',
      class: 'linkersGray'
    },
    {
      text: 'Conviértete en orador',
      url: '#',
      class: 'linkersGray'
    },
    {
      text: 'Comprar tickets',
      url: '#',
      class: 'linkersGreen'
    }
  ]
}
