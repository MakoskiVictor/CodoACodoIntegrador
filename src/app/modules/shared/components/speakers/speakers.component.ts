import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersComponent {
  speakersInfo = [
    {
      image: 'assets/speakers/steve.jpg',
      name: 'Steve Jobs',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Minima possimus saepe deserunt velit quo aspernatur iure non 
      cum voluptatum itaque, architecto dolorum dicta ullam aut, 
      eos pariatur aliquam tenetur explicabo.`,
      firstPill: {
        theme: 'JavaScript',
        class: 'pillYellow'
      },
      secondPill: {
        theme: 'React',
        class: 'pillBlue'
      }
    },
    {
      image: 'assets/speakers/bill.jpg',
      name: 'Bill Gates',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Minima possimus saepe deserunt velit quo aspernatur iure non 
      cum voluptatum itaque, architecto dolorum dicta ullam aut, 
      eos pariatur aliquam tenetur explicabo.`,
      firstPill: {
        theme: 'JavaScript',
        class: 'pillYellow'
      },
      secondPill: {
        theme: 'React',
        class: 'pillBlue'
      }
    },
    {
      image: 'assets/speakers/ada.jpeg',
      name: 'Ada Lovelace',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Minima possimus saepe deserunt velit quo aspernatur iure non 
      cum voluptatum itaque, architecto dolorum dicta ullam aut, 
      eos pariatur aliquam tenetur explicabo.`,
      firstPill: {
        theme: 'Negocios',
        class: 'pillGray'
      },
      secondPill: {
        theme: 'Startps',
        class: 'pillRed'
      }
    }
  ]
}
