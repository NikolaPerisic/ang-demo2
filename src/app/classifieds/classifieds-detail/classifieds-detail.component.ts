import { Component, OnInit, Input } from "@angular/core";
import { Classified } from "../classified.model";
import { FavoritesService } from "src/app/favorites-list/favorites.service";

@Component({
  selector: "app-classifieds-detail",
  templateUrl: "./classifieds-detail.component.html",
  styleUrls: ["./classifieds-detail.component.scss"]
})
export class ClassifiedsDetailComponent implements OnInit {
  @Input() classified: Classified;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {}
  //
  addToFavorites(favoriteItem: Classified) {
    this.favoritesService.addNewToFavorites(favoriteItem);
  }
}
