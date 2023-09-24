import { Component } from '@angular/core';

@Component({
  selector: 'app-city-description',
  templateUrl: './city-description.component.html',
  styleUrls: ['./city-description.component.scss']
})
export class CityDescriptionComponent {

  title = 'Bs As - Octubre'
  description = `Buenos Aires es la provincia y localidad más grande del estado de Argentina. 
  En los Estados Unidos, Honolulu es la más sureña de entre las principales 
  ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área urbana
  en la costa de la isla de Oahu, la ciudad y el condado de Honalulu han formado 
  una ciudad-condado consolidada que cubre toda la ciudad (aproximadamente 600 km² 
  de superficie).`
  btnClass: string = 'btn1'
  btnText: string = 'Conocé más'

}
