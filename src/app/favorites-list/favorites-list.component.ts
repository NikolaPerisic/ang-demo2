import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "./favorites.service";
import { Classified } from "../classifieds/classified.model";
import { ClassifiedsService } from "../classifieds/classifieds.service";
import { AuthService } from "../auth/auth.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.scss"]
})
export class FavoritesListComponent implements OnInit {
  //
  favorites: Classified[] = [];
  favoriteIds: string[] = [];
  //
  constructor(
    private favoritesService: FavoritesService,
    private classifiedsService: ClassifiedsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    let currentUserEmail: any = this.authService.getUser();
    if (!currentUserEmail) {
      return null;
    }
    this.favoritesService.getFavorites().subscribe(result => {
      for (let id in result) {
        if (result[id].email === currentUserEmail) {
          this.favoriteIds.push(result[id].classifiedId);
        }
      }
    });
    this.classifiedsService
      .getClassifieds()
      .subscribe((result: Classified[]) => {
        this.favoriteIds.forEach(el => {
          result.map(item => {
            if (item.id === el) {
              this.favorites.push(item);
              return this.favorites;
            }
          });
        });
      });
  }
  removeFavorite(favorite: Classified) {
    this.favoritesService.removeFavorite(favorite);
  }
}
