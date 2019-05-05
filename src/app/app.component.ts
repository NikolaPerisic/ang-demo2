import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "./favorites-list/favorites.service";
import * as firebase from "firebase";
import envVariable from "../../envVariable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [FavoritesService]
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
