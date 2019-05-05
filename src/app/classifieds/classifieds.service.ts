import { Classified } from "./classified.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class ClassifiedsService {
  //
  constructor(private http: HttpClient) {}
  //

  classifieds: Classified[] = [
    new Classified(
      "Test Ads",
      "This is testing",
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Whippet_Safety_Bicycle.jpg",
      430
    ),
    new Classified(
      "This is a test",
      "Testing 123",
      "https://www.batchbicycles.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/p/r/product_imagebalance_blue_3x.jpg",
      430
    )
  ];
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
          Object.entries(data).map(([key, val]) => {
            const item = new Classified(
              val.name,
              val.description,
              val.imageUrl,
              val.price
            );
            this.classifieds.push(item);
          });
          return this.classifieds;
        })
      );
  }
  postClassified(item: Classified) {
    this.classifieds.push(item);
    return this.http.post(
      "https://ang-classifieds.firebaseio.com/classifieds.json",
      item
    );
  }
}
