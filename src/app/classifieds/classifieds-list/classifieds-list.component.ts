import { Component, OnInit } from "@angular/core";
import { Classified } from "../classified.model";
import { ClassifiedsService } from "../classifieds.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "firebase";
import { FavoritesService } from "src/app/favorites-list/favorites.service";
import { SearchService } from "./search.service";

//
@Component({
  selector: "app-classifieds-list",
  templateUrl: "./classifieds-list.component.html",
  styleUrls: ["./classifieds-list.component.scss"]
})
export class ClassifiedsListComponent implements OnInit {
  //
  user: User;
  //
  classifieds: Classified[];
  queryString: string;

  constructor(
    private classifiedsService: ClassifiedsService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.classifiedsService.getClassifieds().subscribe(result => {
      this.classifieds = result;
    });
    this.favoritesService.getFavorites().subscribe();
    this.queryString = this.searchService.searchedString();
    console.log(this.queryString);
  }

  newAd() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
