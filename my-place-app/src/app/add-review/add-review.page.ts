import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-review",
  templateUrl: "./add-review.page.html",
  styleUrls: ["./add-review.page.scss"]
})
export class AddReviewPage implements OnInit {
  constructor(public httpClient: HttpClient, public router: Router) {}

  ngOnInit() {}

  addReviewPost() {
    this.httpClient
      .post(
        "http://wanmuz-rest-api-week5.herokuapp.com/api/places/5bec1f501f442923601a9aae/reviews",
        {
          username: "Surraj",
          rating: 4,
          reviewText: "Good Place"
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/place"]);
        },
        error => {
          console.log(error.status);
        }
      );
  }
}
