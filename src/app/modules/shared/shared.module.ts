import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HipertextComponent } from './components/hipertext/hipertext.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HipertextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
