import { Injectable } from "@angular/core";
import { Classified } from "../classifieds/classified.model";
import { AuthService } from "../auth/auth.service";
import { map } from "rxjs/operators";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FavoritesService {
  private userFavorites: Classified[] = [];

  private currentUser: User = {
    id: "",
    email: "",
    username: "",
    favorites: []
  };
  //
  constructor(private authService: AuthService, private http: HttpClient) {}
  //
  //
  addNewToFavorites(item: Classified) {
    this.getFavorites();
    console.log(this.userFavorites);
    let duplicate = false;
    this.currentUser.email = this.authService.getUserEmail();
    this.currentUser.username = this.authService.getUsername();
    if (this.userFavorites.length > 0) {
      this.userFavorites.forEach(favorite => {
        if (favorite.id === item.id) {
          console.log("duplicate");
          duplicate = true;
          return null;
        }
      });
    }
    if (!duplicate) {
      this.userFavorites.push(item);
      this.currentUser.favorites = this.userFavorites;
      this.postFavorite(this.currentUser);
    }
  }
  getFavorites() {
    let newUserEmail = this.authService.getUserEmail();
    if (newUserEmail !== this.currentUser.email) {
      this.clearUser();
    }
    this.currentUser.email = newUserEmail;
    return this.http
      .get(`https://ang-classifieds.firebaseio.com/users.json`)
      .pipe(
        map(data => {
          for (let id in data) {
            if (data[id].email === this.currentUser.email) {
              this.userFavorites = data[id].favorites;
              this.currentUser.id = id;
              return this.userFavorites;
            }
          }
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
    if (this.currentUser.id) {
      return this.http
        .put(
          `https://ang-classifieds.firebaseio.com/users/${
            this.currentUser.id
          }.json?auth=` + token,
          user
        )
        .subscribe(response => {
          console.log(response);
        });
    } else {
      return this.http
        .post(
          "https://ang-classifieds.firebaseio.com/users.json?auth=" + token,
          user
        )
        .subscribe(response => {
          for (let id in response) {
            this.currentUser.id = response[id];
          }
        });
    }
  }
  clearUser() {
    this.currentUser = {
      id: "",
      email: "",
      username: "",
      favorites: []
    };
    this.userFavorites = [];
  }
}
