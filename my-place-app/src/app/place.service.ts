import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlaceService {
  places;
  id;
  reviews;
  constructor(public httpClient: HttpClient) {}
  getPlaces() {
    return this.httpClient.get(
      "http://wanmuz-rest-api-2019.herokuapp.com/api/places/"
    );
    // .pipe(
    //   tap(resp => {
    //     this.places = resp;
    //   })
    // );
  }

  getPlaceByID(id) {
    return this.httpClient.get(
      `http://wanmuz-rest-api-2019.herokuapp.com/api/places/${id}`
    );
    // .pipe(
    //   tap(resp => {
    //     this.id = resp;
    //   })
    // );
  }

  getReview() {
    return this.httpClient
      .get(
        "http://wanmuz-rest-api-week5.herokuapp.com/api/places/5bec1f501f442923601a9aae/reviews"
      )
      .pipe(
        tap(resp => {
          this.reviews = resp;
        })
      );
  }

  registerUser(email, password) {
    let data = {
      username: email,
      password: password
    };
    return this.httpClient.post(
      "http://wanmuz-rest-api-week5.herokuapp.com/api/register",
      data
    );
  }

  loginUser(email, password) {
    let data = {
      username: email,
      password: password
    };
    return this.httpClient.post(
      "http://wanmuz-rest-api-week5.herokuapp.com/api/login",
      data
    );
  }
}
