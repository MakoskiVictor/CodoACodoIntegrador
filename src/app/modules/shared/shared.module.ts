import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ConfDetailsComponent, HipertextComponent, NavbarComponent } from './components';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { CardComponent } from './components/card/card.component';





@NgModule({
  declarations: [
    NavbarComponent,
    HipertextComponent,
    ConfDetailsComponent,
    ButtonComponent,
    SpeakersComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ConfDetailsComponent
  ]
})
export class SharedModule { }
