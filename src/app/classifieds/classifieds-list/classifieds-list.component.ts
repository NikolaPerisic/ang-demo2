import { Component, OnInit } from "@angular/core";
import { Classified } from "../classified.model";
@Component({
  selector: "app-classifieds-list",
  templateUrl: "./classifieds-list.component.html",
  styleUrls: ["./classifieds-list.component.scss"]
})
export class ClassifiedsListComponent implements OnInit {
  //
  classifieds: Classified[] = [
    new Classified(
      "Test Ads",
      "This is testing",
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Whippet_Safety_Bicycle.jpg",
      430
    ),
    new Classified(
      "This is a test",
      "Testing 123",
      "https://www.batchbicycles.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/p/r/product_imagebalance_blue_3x.jpg",
      430
    )
  ];

  constructor() {}

  ngOnInit() {}
}
