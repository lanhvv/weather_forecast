import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastsComponent } from './modules/weather-forecasts/weather-forecasts.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastService } from './shared/service/weather-forecast.service';
import { GeoService } from './shared/service/geo.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherForecastService, GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
