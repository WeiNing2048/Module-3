import { WeatherService } from "../weather.service";
import { Component, OnInit } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-weathers",
  templateUrl: "./weathers.page.html",
  styleUrls: ["./weathers.page.scss"]
})
export class WeathersPage implements OnInit {
  results;
  searchTerm;
  place;

  constructor(
    public weatherService: WeatherService,
    private geolocation: Geolocation,
    private router: Router
  ) {}

  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.weatherService
          .getWeatherByGeo(resp.coords.longitude, resp.coords.latitude)
          .subscribe(resp => {
            console.log(resp);
            this.results = resp["list"];
            this.place = resp["city"];
          });
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
  searchChanged() {
    this.weatherService.searchData(this.searchTerm).subscribe(resp => {
      console.log(resp);
      this.results = resp["list"];
      this.place = resp["city"];
      // Array.of(resp)
    });
  }

  openDetail(item) {
    console.log(this.place);
    this.router.navigate([`weather-details/${item["dt"]}/${this.place.name}`]);
  }
}
