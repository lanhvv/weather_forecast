import { HttpClient, HttpParams } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import {Constant} from "src/app/shared/utils/constant.util"
@Injectable()
export class GeoService {
    constructor(private httpClient : HttpClient) {

    }
    
    public getGeo (location: string) {
        let params = new HttpParams()
        .set("appid", Constant.API_KEY_WEATHER_FORECAST)
        .set("q", location)
        .set("limit", 1);
        return this.httpClient.get<any>(Constant.PATH_GEO, {params : params ,observe : "response"});
    }
}