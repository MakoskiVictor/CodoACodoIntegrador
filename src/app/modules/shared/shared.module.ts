import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HipertextComponent } from './components/hipertext/hipertext.component';
import { ConfDetailsComponent } from './components/conf-details/conf-details.component';
import { ButtonComponent } from './components/button/button.component';



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
