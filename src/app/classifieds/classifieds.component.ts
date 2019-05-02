import { Component, OnInit, Input } from "@angular/core";
import { Classified } from "./classified.model";

@Component({
  selector: "app-classifieds",
  templateUrl: "./classifieds.component.html",
  styleUrls: ["./classifieds.component.scss"]
})
export class ClassifiedsComponent implements OnInit {
  @Input() favoriteItem: Classified;
  favoritesArr = [];
  selectedClassified: Classified;

  constructor() {}

  ngOnInit() {}
  addNewToFavorites(item: Classified) {
    this.favoritesArr.push(item);
    console.log(this.favoritesArr);
  }
}
