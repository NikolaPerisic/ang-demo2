import { Injectable } from "@angular/core";
import { Classified } from "../classifieds/classified.model";
import { AuthService } from "../auth/auth.service";
import { map } from "rxjs/operators";
import { Favorite } from "./favorites.model";
import { HttpClient } from "@angular/common/http";
import { ClassifiedsService } from "../classifieds/classifieds.service";

@Injectable()
export class FavoritesService {
  private favoriteIds = new Set();
  private favorite: Favorite = {
    email: "",
    classifiedId: ""
  };
  //
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private classifiedsService: ClassifiedsService
  ) {}
  //
  //
  addNewToFavorites(item: Classified) {
    this.favorite.email = this.authService.getUser();
    this.favorite.classifiedId = item.id;
    this.postFavorite(this.favorite);
    console.log(this.favorite);
  }
  getFavorites() {
    const currentUserEmail = this.authService.getUser();
    return this.http
      .get("https://ang-classifieds.firebaseio.com/favorites.json")
      .pipe(
        map(data => {
          for (let item in data) {
            if (data[item].email === currentUserEmail) {
              this.favoriteIds.add(data[item].classifiedId);
            }
          }
          return this.favoriteIds;
        })
      );
  }

  removeFavorite(item: Classified) {
    // this.favoritesArr.map((el, i) => {
    //   if (el.name === item.name) {
    //     this.favoritesArr.splice(i, 1);
    //   }
    // });
    // return this.favoritesArr;
  }
  postFavorite(item: Favorite) {
    const token = this.authService.getToken();
    return this.http
      .post(
        "https://ang-classifieds.firebaseio.com/favorites.json?auth=" + token,
        item
      )
      .subscribe(response => console.log(response));
  }
}
