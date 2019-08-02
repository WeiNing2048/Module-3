import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  constructor(public httpClient: HttpClient, public router: Router) {}

  ngOnInit() {}

  registerPost() {
    this.httpClient
      .post(
        "http://wanmuz-rest-api-week5.herokuapp.com/api/register",
        {
          username: "wanmuz84@gmail.com",
          password: "abcd1234"
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/home"]);
        },
        error => {
          console.log(error.status);
        }
      );
  }
}
