import { Component, OnInit } from "@angular/core";
import { Classified } from "../classified.model";
import { ClassifiedsService } from "../classifieds.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "firebase";
import { AuthService } from "src/app/auth/auth.service";
import { FavoritesService } from "src/app/favorites-list/favorites.service";
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
  searchItem;

  constructor(
    private classifiedsService: ClassifiedsService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.classifiedsService.getClassifieds().subscribe(result => {
      this.classifieds = result;
    });
    this.favoritesService.getFavorites().subscribe();
  }
  search(term: string) {
    return this.classifieds.filter(el => {
      return el.name.includes(term);
    });
  }
  newAd() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
