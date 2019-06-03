import { Component, OnInit } from "@angular/core";
import { Classified } from "../classified.model";
import { ClassifiedsService } from "../classifieds.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "firebase";
import { FavoritesService } from "src/app/favorites-list/favorites.service";
import { SearchService } from "./search.service";
import { AuthService } from "src/app/auth/auth.service";

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
    private searchService: SearchService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.classifiedsService.getClassifieds().subscribe(result => {
      this.classifieds = result;
    });
    this.favoritesService.getFavorites().subscribe();
    this.queryString = this.searchService.searchedString();
    this.searchService.clearString();
  }

  newAd() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
