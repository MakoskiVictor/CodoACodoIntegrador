import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ConfDetailsComponent, HipertextComponent, NavbarComponent } from './components';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { CardComponent } from './components/card/card.component';
import { PillsComponent } from './components/pills/pills.component';





@NgModule({
  declarations: [
    NavbarComponent,
    HipertextComponent,
    ConfDetailsComponent,
    ButtonComponent,
    SpeakersComponent,
    CardComponent,
    PillsComponent
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
