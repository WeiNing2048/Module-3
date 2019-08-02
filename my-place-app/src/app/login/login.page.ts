import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(public httpClient: HttpClient, public router: Router) {}

  ngOnInit() {}

  loginPost() {
    this.httpClient
      .post(
        "http://wanmuz-rest-api-week5.herokuapp.com/api/login",
        {
          username: "wanmuz86@gmail.com",
          password: "abcd1234"
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
