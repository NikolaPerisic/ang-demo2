import { Component, OnInit, Input } from "@angular/core";
import { Classified } from "./classified.model";
import { ClassifiedsService } from "./classifieds.service";

@Component({
  selector: "app-classifieds",
  templateUrl: "./classifieds.component.html",
  styleUrls: ["./classifieds.component.scss"],
  providers: [ClassifiedsService]
})
export class ClassifiedsComponent implements OnInit {
  @Input() favoriteItem: Classified;
  favoritesArr = [];
  selectedClassified: Classified;

  constructor(private classifiedsService: ClassifiedsService) {}

  ngOnInit() {
    this.classifiedsService.classifiedSelected.subscribe(
      (classified: Classified) => {
        this.selectedClassified = classified;
      }
    );
  }
  addNewToFavorites(item: Classified) {
    this.favoritesArr.push(item);
    console.log(this.favoritesArr);
  }
}
