import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "./favorites.service";
import { Classified } from "../classifieds/classified.model";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.scss"]
})
export class FavoritesListComponent implements OnInit {
  //
  favorites = [];
  //
  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }
  removeFavorite(favorite: Classified) {
    this.favoritesService.removeFavorite(favorite);
  }
}
