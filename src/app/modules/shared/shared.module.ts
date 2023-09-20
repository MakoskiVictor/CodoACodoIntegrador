import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ConfDetailsComponent, HipertextComponent, NavbarComponent } from './components';





@NgModule({
  declarations: [
    NavbarComponent,
    HipertextComponent,
    ConfDetailsComponent,
    ButtonComponent
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
