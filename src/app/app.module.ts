import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ClassifiedsComponent } from "./classifieds/classifieds.component";
import { ClassifiedsListComponent } from "./classifieds/classifieds-list/classifieds-list.component";
import { ClassifiedsDetailComponent } from "./classifieds/classifieds-detail/classifieds-detail.component";
import { ClassifiedsItemComponent } from "./classifieds/classifieds-list/classifieds-item/classifieds-item.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";
import { ClassifiedStartComponent } from "./classifieds/classified-start/classified-start.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/classifieds",
    pathMatch: "full"
  },
  {
    path: "classifieds",
    component: ClassifiedsComponent,
    children: [
      {
        path: "",
        component: ClassifiedStartComponent
      },
      {
        path: ":id",
        component: ClassifiedsDetailComponent
      }
    ]
  },
  {
    path: "favorites",
    component: FavoritesListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassifiedsComponent,
    ClassifiedsListComponent,
    ClassifiedsDetailComponent,
    ClassifiedsItemComponent,
    FavoritesListComponent,
    ClassifiedStartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
