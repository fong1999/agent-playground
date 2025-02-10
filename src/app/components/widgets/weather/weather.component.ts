import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  location = 'San Francisco, CA';
  temperature = '72°F';
  condition = 'Sunny';
}
