import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Classified } from "../classified.model";

@Component({
  selector: "app-classifieds-detail",
  templateUrl: "./classifieds-detail.component.html",
  styleUrls: ["./classifieds-detail.component.scss"]
})
export class ClassifiedsDetailComponent implements OnInit {
  @Input() classified: Classified;
  @Output() favoriteItem = new EventEmitter<Classified>();
  constructor() {}

  ngOnInit() {}
  //
  addToFavorites(favoriteItem: Classified) {
    console.log(favoriteItem);
    this.favoriteItem.emit(favoriteItem);
  }
}
