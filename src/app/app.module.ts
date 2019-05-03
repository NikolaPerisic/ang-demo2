import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ClassifiedsComponent } from "./classifieds/classifieds.component";
import { ClassifiedsListComponent } from "./classifieds/classifieds-list/classifieds-list.component";
import { ClassifiedsDetailComponent } from "./classifieds/classifieds-detail/classifieds-detail.component";
import { ClassifiedsItemComponent } from "./classifieds/classifieds-list/classifieds-item/classifieds-item.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassifiedsComponent,
    ClassifiedsListComponent,
    ClassifiedsDetailComponent,
    ClassifiedsItemComponent,
    FavoritesListComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
