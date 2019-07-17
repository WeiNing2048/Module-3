import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  // url = "https://api.openweathermap.org/data/2.5/forecast/daily";
  // apiKey = "9fd7a449d055dba26a982a3220f32aa2";

  constructor(private httpClient: HttpClient) {}

  searchData(searchTerm) {
    return this.httpClient.get(
      "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        searchTerm +
        "&appId=9fd7a449d055dba26a982a3220f32aa2"
    );
  }

  getDetails(id) {
    return this.searchData;
  }
}
