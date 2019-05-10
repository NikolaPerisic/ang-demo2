import { Injectable } from "@angular/core";
import { Classified } from "../classifieds/classified.model";
import { AuthService } from "../auth/auth.service";
import { map } from "rxjs/operators";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { ClassifiedsService } from "../classifieds/classifieds.service";

@Injectable()
export class FavoritesService {
  private userFavorites: Classified[];

  private currentUser: User = {
    id: "",
    email: "",
    username: "",
    favorites: []
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
    this.currentUser.email = this.authService.getUser();
    this.currentUser.username = this.authService.getUsername();
    this.currentUser.favorites.push(item);
    this.postFavorite(this.currentUser);
  }
  getFavorites() {
    const currentUserEmail = this.authService.getUser();
    return this.http
      .get("https://ang-classifieds.firebaseio.com/users.json")
      .pipe(
        map(data => {
          for (let item in data) {
            if (data[item].email === currentUserEmail) {
              this.userFavorites = data[item].favorites;
            }
          }
          return this.userFavorites;
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
  postFavorite(user) {
    const token = this.authService.getToken();
    return this.http
      .post(
        "https://ang-classifieds.firebaseio.com/users.json?auth=" + token,
        user
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
