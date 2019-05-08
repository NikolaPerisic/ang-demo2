import firebase from "@firebase/app";
import "@firebase/auth";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { User } from "firebase";

@Injectable()
export class AuthService {
  token: string | null = null;
  userEmail: string | null = null;
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
        this.userEmail = firebase.auth().currentUser.email;
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
    return this.userEmail;
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(response => {
        console.log("signout success");
        this.token = null;
        this.userEmail = null;
        this.router.navigate(["/classifieds"]);
      })
      .catch(error => console.log(error));
  }
  getUser() {
    this.userEmail = firebase.auth().currentUser.email;
    return this.userEmail;
  }
}
