import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { PlaceService } from "../place.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  email = "";
  password = "";

  constructor(
    public httpClient: HttpClient,
    public router: Router,
    public placeService: PlaceService,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  signupPressed() {
    this.placeService
      .registerUser(this.email, this.password)
      .subscribe(async resp => {
        console.log(resp);
        if (resp["message"] == "User succesfully registered") {
          let toast = await this.toastCtrl.create({
            message: "Successfully registered. You may log in now.",
            duration: 2000
          });
          toast.present();
          this.router.navigate(["/login"]);
        } else {
          let toast = await this.toastCtrl.create({
            message: "Oops something wrong. Please try again.",
            duration: 2000
          });
          toast.present();
        }
      });
  }

  // registerPost() {
  //   this.httpClient
  //     .post(
  //       "http://wanmuz-rest-api-week5.herokuapp.com/api/register",
  //       {
  //         username: "wanmuz84@gmail.com",
  //         password: "abcd1234"
  //       },
  //       {
  //         headers: { "Content-Type": "application/json" }
  //       }
  //     )
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.router.navigate(["/home"]);
  //       },
  //       error => {
  //         console.log(error.status);
  //       }
  //     );
  // }
}
