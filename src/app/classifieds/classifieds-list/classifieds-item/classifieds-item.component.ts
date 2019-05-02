import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Classified } from "../../classified.model";
@Component({
  selector: "app-classifieds-item",
  templateUrl: "./classifieds-item.component.html",
  styleUrls: ["./classifieds-item.component.scss"]
})
export class ClassifiedsItemComponent implements OnInit {
  @Input() classified: Classified;
  @Output() classifiedSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
  onSelected() {
    this.classifiedSelected.emit();
  }
}
