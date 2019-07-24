import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.page.html",
  styleUrls: ["./weather-details.page.scss"]
})
export class WeatherDetailsPage implements OnInit {
  city;
  weather;
  constructor(
    public activatedRoute: ActivatedRoute,
    public weatherService: WeatherService
  ) {}

  ngOnInit() {
    let timestamp = this.activatedRoute.snapshot.paramMap.get("timestamp");
    this.city = this.activatedRoute.snapshot.paramMap.get("city");
    this.weather = this.weatherService.getWeatherByTimestamp(timestamp);
  }
}
