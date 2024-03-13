import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from 'src/app/shared/service/weather-forecast.service';

@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.css']
})
export class WeatherForecastsComponent implements OnInit {
  public lat: number = 0;
  public lon: number = 0;
  public weatherForecasts = [];

  constructor(private weatherForeCastSer: WeatherForecastService){
  }

  ngOnInit(): void {
    
  }

  private getWeatherForeCast() {
    this.weatherForeCastSer.getCurrentWeatherForecast(this.lat, this.lon).subscribe(response => {
      this.weatherForeCastSer = response?.body;
    });
  }
}
