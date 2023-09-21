import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CardComponent, ConfDetailsComponent, HipertextComponent, NavbarComponent, PillsComponent, SpeakersComponent } from './components';






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
    ConfDetailsComponent,
    SpeakersComponent
  ]
})
export class SharedModule { }
