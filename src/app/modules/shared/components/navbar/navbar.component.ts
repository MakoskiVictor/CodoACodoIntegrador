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
      text: 'Link1',
      url: '#'
    },
    {
      text: 'Link2',
      url: '#'
    },
    {
      text: 'Link3',
      url: '#'
    },
    {
      text: 'Link4',
      url: '#'
    }
  ]
}
