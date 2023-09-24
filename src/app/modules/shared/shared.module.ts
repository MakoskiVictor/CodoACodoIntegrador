import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CardComponent, CityDescriptionComponent, ConfDetailsComponent, HipertextComponent, NavbarComponent, PillsComponent, SpeakersComponent } from './components';







@NgModule({
  declarations: [
    NavbarComponent,
    HipertextComponent,
    ConfDetailsComponent,
    ButtonComponent,
    SpeakersComponent,
    CardComponent,
    PillsComponent,
    CityDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ConfDetailsComponent,
    SpeakersComponent,
    CityDescriptionComponent
  ]
})
export class SharedModule { }
