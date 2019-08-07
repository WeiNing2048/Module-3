import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { PlaceService } from "../place.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  email = "";
  password = "";

  constructor(
    public httpClient: HttpClient,
    public router: Router,
    public placeService: PlaceService,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  loginPressed() {
    this.placeService
      .loginUser(this.email, this.password)
      .subscribe(async resp => {
        if (resp["success"] == true) {
          this.router.navigate(["/place"]);
        } else {
          let toast = await this.toastCtrl.create({
            message: "Your email or password might not correct.",
            duration: 2000
          });
          toast.present();
        }
      });
  }

  // loginPost() {
  //   this.httpClient
  //     .post(
  //       "http://wanmuz-rest-api-week5.herokuapp.com/api/login",
  //       {
  //         username: "wanmuz86@gmail.com",
  //         password: "abcd1234"
  //       },
  //       {
  //         headers: { "Content-Type": "application/json" }
  //       }
  //     )
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.router.navigate(["/place"]);
  //       },
  //       error => {
  //         console.log(error.status);
  //       }
  //     );
  // }
}
