import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "./favorites.service";
import { Classified } from "../classifieds/classified.model";
import { ClassifiedsService } from "../classifieds/classifieds.service";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.scss"]
})
export class FavoritesListComponent implements OnInit {
  //
  private favorites: Classified[];
  //
  constructor(
    private favoritesService: FavoritesService,
    private classifiedsService: ClassifiedsService
  ) {}

  ngOnInit() {
    this.favoritesService.getFavorites().subscribe(result => {
      this.favorites = result;
    });
  }
  removeFavorite(favorite: Classified) {
    this.favoritesService.removeFavorite(favorite);
  }
}
