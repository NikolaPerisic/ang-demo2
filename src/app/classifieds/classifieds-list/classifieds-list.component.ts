import { Component, OnInit } from "@angular/core";
import { Classified } from "../classified.model";
import { ClassifiedsService } from "../classifieds.service";
@Component({
  selector: "app-classifieds-list",
  templateUrl: "./classifieds-list.component.html",
  styleUrls: ["./classifieds-list.component.scss"]
})
export class ClassifiedsListComponent implements OnInit {
  //

  //
  classifieds: Classified[];

  constructor(private classifiedsService: ClassifiedsService) {}

  ngOnInit() {
    this.classifieds = this.classifiedsService.getClassifieds();
  }
}
