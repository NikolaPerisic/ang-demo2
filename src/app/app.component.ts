import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "./favorites-list/favorites.service";
import * as firebase from "firebase";

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
      apiKey: "AIzaSyAEU275Wr2oCv6scfT4ai-rROZhPX8wT0o",
      authDomain: "ang-classifieds.firebaseapp.com"
    });
  }
}
