import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlaceService } from "../place.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  reviews;
  place;
  constructor(
    public route: ActivatedRoute,
    public placeService: PlaceService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("place_id");
    this.placeService.getPlaceByID(id).subscribe(resp => {
      this.place = resp;
      console.log(this.place);
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
