import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlaceService } from "../place.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  item;
  reviews;
  constructor(
    public route: ActivatedRoute,
    public placeService: PlaceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params["id"];
      console.log(id);
      this.item = this.placeService.getPlaceByID(id);
      console.log(this.item);
    });
  }

  showAllReview() {
    this.placeService.getReview().subscribe(
      resp => {
        console.log(resp);
        this.reviews = resp;
      },
      err => {
        console.log(err);
      }
    );
  }
}
