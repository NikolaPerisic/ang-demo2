import { Component, OnInit } from "@angular/core";
import { ClassifiedsService } from "./classifieds.service";

@Component({
  selector: "app-classifieds",
  templateUrl: "./classifieds.component.html",
  styleUrls: ["./classifieds.component.scss"],
  providers: [ClassifiedsService]
})
export class ClassifiedsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
