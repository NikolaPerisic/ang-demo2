import { Component } from "@angular/core";
import { FavoritesService } from "./favorites-list/favorites.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [FavoritesService]
})
export class AppComponent {
  title = "ang-classifieds";
  loadedFeature = "classifieds";
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
