import { HttpClient, HttpParams } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import {Constant} from "src/app/shared/utils/constant.util"
@Injectable()
export class WeatherForecastService {
    constructor(private httpClient : HttpClient) {

    }
    
    public getCurrentWeatherForecast (lat: any, lon: any) {
        let params = new HttpParams()
         .set("appid", Constant.API_KEY_WEATHER_FORECAST)
         .set("lat", lat)
         .set("lon", lon)
         .set("units", "metric");
        return this.httpClient.get<any>(Constant.PATH_WEATHER_FORECAST, {params: params, observe : "response"});
    }
}