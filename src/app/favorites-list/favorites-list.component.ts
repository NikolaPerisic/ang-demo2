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
  private favoriteIds;
  private favorites = new Set<Classified>();
  //
  constructor(
    private favoritesService: FavoritesService,
    private classifiedsService: ClassifiedsService
  ) {}

  ngOnInit() {
    this.favoritesService.getFavorites().subscribe(result => {
      this.favoriteIds = result;
    });
    this.classifiedsService.getClassifieds().subscribe(result => {
      this.favoriteIds.forEach(el => {
        console.log(this.favoriteIds);
        result.map(item => {
          if (item.id === el) {
            this.favorites.add(item);
            console.log(this.favorites);
          }
        });
      });
    });
  }
  removeFavorite(favorite: Classified) {
    this.favoritesService.removeFavorite(favorite);
  }
}
