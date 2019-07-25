import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/user/auth.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"]
})
export class ResetPasswordPage implements OnInit {
  email;
  constructor(public authService: AuthService) {}

  ngOnInit() {}
  resetPressed() {
    this.authService
      .resetPassword(this.email)
      .then(resp => {
        console.log(resp);
        console.log("Password successfully reset");
      })
      .catch(err => {
        console.log(err);
      });
  }
}
