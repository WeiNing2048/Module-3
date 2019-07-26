import { Component, OnInit } from "@angular/core";
import { PlaceService } from "../place.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-place",
  templateUrl: "./place.page.html",
  styleUrls: ["./place.page.scss"]
})
export class PlacePage implements OnInit {
  places;
  constructor(public placeService: PlaceService, public router: Router) {}

  ngOnInit() {
    this.placeService.getPlaces().subscribe(
      resp => {
        console.log(resp);
        this.places = resp;
      },
      err => {
        console.log(err);
      }
    );
  }
}
