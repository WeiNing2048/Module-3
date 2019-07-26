import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./credentials";

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide().catch(error => {
      console.error(error);
    });
    StatusBar.hide().catch(error => {
      console.error(error);
    });
    firebase.initializeApp(firebaseConfig);
  }
}

//app.component.ts allow to initialize the project