import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent, CardComponent, CityDescriptionComponent, ConfDetailsComponent, FooterComponent,
  FormComponent, HipertextComponent, NavbarComponent, PillsComponent, SpeakersComponent
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    HipertextComponent,
    ConfDetailsComponent,
    ButtonComponent,
    SpeakersComponent,
    CardComponent,
    PillsComponent,
    CityDescriptionComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    ConfDetailsComponent,
    SpeakersComponent,
    CityDescriptionComponent,
    FooterComponent,
    FormComponent
  ]
})
export class SharedModule { }
