import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlaceService {
  places;
  id;
  constructor(public httpClient: HttpClient) {}
  getPlaces() {
    return this.httpClient
      .get("http://wanmuz-rest-api-2019.herokuapp.com/api/places/")
      .pipe(
        tap(resp => {
          this.places = resp;
        })
      );
  }

  getPlaceByID(id) {
    return this.httpClient
      .get(`http://wanmuz-rest-api-2019.herokuapp.com/api/places/${id}`)
      .pipe(
        tap(resp => {
          this.id = resp;
        })
      );
  }
}
