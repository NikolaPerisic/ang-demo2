import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ClassifiedsComponent } from "./classifieds/classifieds.component";
import { ClassifiedsListComponent } from "./classifieds/classifieds-list/classifieds-list.component";
import { ClassifiedsDetailComponent } from "./classifieds/classifieds-detail/classifieds-detail.component";
import { ClassifiedsItemComponent } from "./classifieds/classifieds-list/classifieds-item/classifieds-item.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";
import { ClassifiedStartComponent } from "./classifieds/classified-start/classified-start.component";
import { ClassifiedNewComponent } from "./classifieds/classified-new/classified-new.component";
import { ClassifiedsService } from "./classifieds/classifieds.service";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthService } from "./auth/auth.service";

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
        path: "new",
        component: ClassifiedNewComponent
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
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    redirectTo: "/classifieds"
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
    ClassifiedStartComponent,
    ClassifiedNewComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ClassifiedsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
