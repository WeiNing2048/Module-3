import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  url = "https://api.openweathermap.org/data/2.5/forecast/daily?";
  apiKey = "9fd7a449d055dba26a982a3220f32aa2";
  weathers;

  constructor(public httpClient: HttpClient) {}

  getWeatherByGeo(long, lat) {
    return this.httpClient
      .get(`${this.url}lat=${lat}&lon=${long}&appId=${this.apiKey}`)
      .pipe(
        tap(resp => {
          this.weathers = resp["list"];
        })
      );
  }

  searchData(searchTerm) {
    return this.httpClient
      .get(
        "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
          searchTerm +
          "&appId=9fd7a449d055dba26a982a3220f32aa2"
      )
      .pipe(
        tap(resp => {
          this.weathers = resp["list"];
        })
      );
  }
  //return this.httpClient.get('${this.url}${searchTerm}&appId=${this.apiKey}')

  getWeatherByTimestamp(timestamp) {
    for (let i = 0; i < this.weathers.length; i++) {
      if (this.weathers[i]["dt"] == timestamp) {
        return this.weathers[i];
      }
    }
  }
}
