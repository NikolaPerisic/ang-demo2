import { Component, OnInit, Input } from "@angular/core";
import { Classified } from "../../classified.model";

@Component({
  selector: "app-classifieds-item",
  templateUrl: "./classifieds-item.component.html",
  styleUrls: ["./classifieds-item.component.scss"]
})
export class ClassifiedsItemComponent implements OnInit {
  @Input() classified: Classified;
  @Input() index: number;
  constructor() {}

  ngOnInit() {}
}
