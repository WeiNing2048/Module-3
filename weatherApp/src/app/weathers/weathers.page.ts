import { WeatherService } from "../weather.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-weathers",
  templateUrl: "./weathers.page.html",
  styleUrls: ["./weathers.page.scss"]
})
export class WeathersPage implements OnInit {
  results;
  searchTerm;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}
  searchChanged() {
    this.weatherService.searchData(this.searchTerm).subscribe(resp => {
      console.log(resp);
      this.results = resp["list"];
      // Array.of(resp)
    });
  }
}
