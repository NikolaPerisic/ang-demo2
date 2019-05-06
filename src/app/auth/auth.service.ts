import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {}
  //
  signUp(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(["/login"]);
      })
      .catch(error => console.log(error));
  }
  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(["/classifieds"]);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
      })
      .catch(error => console.log(error));
  }
  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }
  isAuthenticated() {
    return this.token !== null;
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(response => {
        console.log("signout success");
        this.token = null;
        this.router.navigate(["/classifieds"]);
      })
      .catch(error => console.log(error));
  }
}
