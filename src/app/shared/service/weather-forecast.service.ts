import { HttpClient, HttpParams } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import {Constant} from "src/app/shared/utils/constant.util"
@Injectable()
export class WeatherForecastService {
    constructor(private httpClient : HttpClient) {

    }
    
    public getCurrentWeatherForecast (lat: any, lon: any) {
        const params = new HttpParams();
        params.set("appid", Constant.API_KEY_WEATHER_FORECAST);
        params.set("lat", lat);
        params.set("lon", lon);
        return this.httpClient.get<any>(Constant.PATH, {params, observe : "response"});
    }
}