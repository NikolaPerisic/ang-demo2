import { Component, OnInit } from "@angular/core";
import { Classified } from "../classified.model";
import { FavoritesService } from "src/app/favorites-list/favorites.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ClassifiedsService } from "../classifieds.service";

@Component({
  selector: "app-classifieds-detail",
  templateUrl: "./classifieds-detail.component.html",
  styleUrls: ["./classifieds-detail.component.scss"]
})
export class ClassifiedsDetailComponent implements OnInit {
  classified: Classified;
  id: number;
  constructor(
    private favoritesService: FavoritesService,
    private route: ActivatedRoute,
    private classifiedsService: ClassifiedsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.classified = this.classifiedsService.getClassified(this.id);
    });
  }
  //
  addToFavorites(favoriteItem: Classified) {
    this.favoritesService.addNewToFavorites(favoriteItem);
  }
}
