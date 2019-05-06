import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ClassifiedsModule } from "./classifieds/classifieds.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FavoritesListComponent } from "./favorites-list/favorites-list.component";
import { ClassifiedsService } from "./classifieds/classifieds.service";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { FavoritesService } from "./favorites-list/favorites.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoritesListComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClassifiedsModule
  ],
  providers: [ClassifiedsService, AuthService, AuthGuard, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
