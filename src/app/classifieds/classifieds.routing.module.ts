import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClassifiedsComponent } from "./classifieds.component";
import { ClassifiedStartComponent } from "./classified-start/classified-start.component";
import { ClassifiedNewComponent } from "./classified-new/classified-new.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { ClassifiedsDetailComponent } from "./classifieds-detail/classifieds-detail.component";

const routes: Routes = [
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
        component: ClassifiedNewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ":id",
        component: ClassifiedsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassifiedsRoutingModule {}
