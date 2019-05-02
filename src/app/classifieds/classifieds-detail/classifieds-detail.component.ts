import { Component, OnInit, Input } from "@angular/core";
import { Classified } from "../classified.model";

@Component({
  selector: "app-classifieds-detail",
  templateUrl: "./classifieds-detail.component.html",
  styleUrls: ["./classifieds-detail.component.scss"]
})
export class ClassifiedsDetailComponent implements OnInit {
  @Input() classified: Classified;
  constructor() {}

  ngOnInit() {}
}
