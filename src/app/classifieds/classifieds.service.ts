import { Classified } from "./classified.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class ClassifiedsService {
  //
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}
  //

  classifieds: Classified[] = [];
  getClassified(id: number) {
    return this.classifieds[id];
  }
  getClassifieds(): Observable<Classified[]> {
    return this.http
      .get<Classified[]>(
        "https://ang-classifieds.firebaseio.com/classifieds.json"
      )
      .pipe(
        map((data: Classified[]) => {
          const adArray: Classified[] = [];
          Object.entries(data).map(([key, val]) => {
            const item = new Classified(
              val.name,
              val.description,
              val.imageUrl,
              val.price,
              key
            );
            adArray.push(item);
          });
          this.classifieds = adArray;
          return this.classifieds;
        })
      );
  }
  postClassified(item: Classified) {
    const token = this.authService.getToken();
    return this.http.post(
      "https://ang-classifieds.firebaseio.com/classifieds.json?auth=" + token,
      item
    );
  }
}
