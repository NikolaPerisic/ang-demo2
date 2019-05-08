import { Injectable } from "@angular/core";
import { Classified } from "../classifieds/classified.model";
import { AuthService } from "../auth/auth.service";
import { Favorite } from "./favorites.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class FavoritesService {
  private favoritesArr: Classified[] = [];
  private favorite: Favorite = {
    email: "",
    classifiedId: ""
  };
  //
  constructor(private authService: AuthService, private http: HttpClient) {}
  //
  addNewToFavorites(item: Classified) {
    this.favorite.email = this.authService.getUser();
    this.favorite.classifiedId = item.id;
    this.postFavorite(this.favorite);
    console.log(this.favorite);

    let flag: boolean = false;
    this.favoritesArr.map(el => {
      if (el.name === item.name) {
        flag = true;
      }
    });
    if (!flag) {
      this.favoritesArr.push(item);
    }
  }
  getFavorites() {
    return this.favoritesArr;
  }
  removeFavorite(item: Classified) {
    this.favoritesArr.map((el, i) => {
      if (el.name === item.name) {
        this.favoritesArr.splice(i, 1);
      }
    });
    return this.favoritesArr;
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
