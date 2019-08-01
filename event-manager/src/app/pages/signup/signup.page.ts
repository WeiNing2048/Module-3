import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/user/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  email;
  password;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}
  signupPressed() {
    this.authService
      .signupUser(this.email, this.password)
      .then(resp => {
        console.log(resp);
        console.log("User successfully registered");
        this.router.navigate(["/home"]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
