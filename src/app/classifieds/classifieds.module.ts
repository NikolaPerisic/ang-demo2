import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClassifiedsRoutingModule } from "./classifieds.routing.module";
import { ClassifiedsComponent } from "./classifieds.component";
import { ClassifiedsListComponent } from "./classifieds-list/classifieds-list.component";
import { ClassifiedsDetailComponent } from "./classifieds-detail/classifieds-detail.component";
import { ClassifiedsItemComponent } from "./classifieds-list/classifieds-item/classifieds-item.component";
import { ClassifiedStartComponent } from "./classified-start/classified-start.component";
import { ClassifiedNewComponent } from "./classified-new/classified-new.component";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "../filter.pipe";

@NgModule({
  declarations: [
    ClassifiedsComponent,
    ClassifiedsListComponent,
    ClassifiedsDetailComponent,
    ClassifiedsItemComponent,
    ClassifiedStartComponent,
    ClassifiedNewComponent,
    FilterPipe
  ],
  imports: [CommonModule, ClassifiedsRoutingModule, FormsModule],
  exports: [FilterPipe]
})
export class ClassifiedsModule {}
