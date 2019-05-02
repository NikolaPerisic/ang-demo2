import { Component, OnInit } from "@angular/core";
import { Classified } from "./classified.model";

@Component({
  selector: "app-classifieds",
  templateUrl: "./classifieds.component.html",
  styleUrls: ["./classifieds.component.scss"]
})
export class ClassifiedsComponent implements OnInit {
  selectedClassified: Classified;
  constructor() {}

  ngOnInit() {}
}
