import { Component, OnInit } from "@angular/core";
import { PlaceService } from "../place.service";

@Component({
  selector: "app-place",
  templateUrl: "./place.page.html",
  styleUrls: ["./place.page.scss"]
})
export class PlacePage implements OnInit {
  places = [];
  constructor(public placeService: PlaceService) {}

  ngOnInit() {
    this.placeService.getPlaces().subscribe(
      resp => {
        console.log(resp);
        this.places = resp["list"];
      },
      err => {
        console.log(err);
      }
    );
  }
}
