import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GeoService } from 'src/app/shared/service/geo.service';
import { WeatherForecastService } from 'src/app/shared/service/weather-forecast.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-weather-forecasts',
  templateUrl: './weather-forecasts.component.html',
  styleUrls: ['./weather-forecasts.component.css']
})
export class WeatherForecastsComponent implements AfterViewInit {
  public name: string = "";
  public weatherForecasts: any = {};
  public formGroup : FormGroup = new FormGroup({search : new FormControl('Viet Nam')})

  constructor(
    private weatherForeCastSer: WeatherForecastService,
    private geoService: GeoService  
  ){
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.enter();
  }

  public enter() {
    this.getGeo(this.formGroup.get('search')?.value);
  }

  private getWeatherForeCast(lat: any, lon: any) {
    this.weatherForeCastSer.getCurrentWeatherForecast(lat, lon).subscribe(response => {
      this.weatherForecasts = response?.body;
    });
  }

  private getGeo(location: string) {
    this.geoService.getGeo(location).subscribe(response => {
      const geo = response?.body?.[0];
      this.name = geo?.local_names?.en ?? geo?.name ?? "404";
      this.getWeatherForeCast(geo?.lat, geo?.lon);
    });
  }
}
