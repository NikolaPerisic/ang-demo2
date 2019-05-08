import firebase from "@firebase/app";
import "@firebase/auth";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { User } from "firebase";

@Injectable()
export class AuthService {
  token: string | null = null;
<<<<<<< HEAD
  user: User = null;
  email: string;
  //
=======
  userEmail: string | null = null;
>>>>>>> 231075dd08569fa8be2be6bb4348c513909f901c
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
<<<<<<< HEAD
    return this.user !== null;
=======
    return this.userEmail;
>>>>>>> 231075dd08569fa8be2be6bb4348c513909f901c
  }
  logout() {
    firebase
      .auth()
      .signOut()
      .then(response => {
        console.log("signout success");
        this.token = null;
<<<<<<< HEAD
        this.user = null;
        this.email = null;
=======
        this.userEmail = null;
>>>>>>> 231075dd08569fa8be2be6bb4348c513909f901c
        this.router.navigate(["/classifieds"]);
      })
      .catch(error => console.log(error));
  }
  getUser() {
<<<<<<< HEAD
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.email = user.email;
        return this.user;
      }
      return this.user;
    });
=======
    this.userEmail = firebase.auth().currentUser.email;
    return this.userEmail;
  }
  getTokenStatus() {
    return this.token !== null;
>>>>>>> 231075dd08569fa8be2be6bb4348c513909f901c
  }
}
