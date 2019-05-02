import { Component, OnInit, Input } from "@angular/core";
import { Classified } from "../../classified.model";
import { ClassifiedsService } from "../../classifieds.service";
@Component({
  selector: "app-classifieds-item",
  templateUrl: "./classifieds-item.component.html",
  styleUrls: ["./classifieds-item.component.scss"]
})
export class ClassifiedsItemComponent implements OnInit {
  @Input() classified: Classified;
  constructor(private classifiedsService: ClassifiedsService) {}

  ngOnInit() {}
  onSelected() {
    this.classifiedsService.classifiedSelected.emit(this.classified);
  }
}
