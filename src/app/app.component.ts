import { Component, OnInit } from "@angular/core";

import firebase from "@firebase/app";
import { envVariable } from "../../envVariable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ang-classifieds";
  ngOnInit() {
    firebase.initializeApp({
      apiKey: envVariable.apiKey,
      authDomain: envVariable.authDomain
    });
  }
}
