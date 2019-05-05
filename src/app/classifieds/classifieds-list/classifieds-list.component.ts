import { Component, OnInit } from "@angular/core";
import { Classified } from "../classified.model";
import { ClassifiedsService } from "../classifieds.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-classifieds-list",
  templateUrl: "./classifieds-list.component.html",
  styleUrls: ["./classifieds-list.component.scss"]
})
export class ClassifiedsListComponent implements OnInit {
  //

  //
  classifieds: Classified[];

  constructor(
    private classifiedsService: ClassifiedsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.classifiedsService.getClassifieds().subscribe(result => {
      this.classifieds = result;
    });
  }

  newAd() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
