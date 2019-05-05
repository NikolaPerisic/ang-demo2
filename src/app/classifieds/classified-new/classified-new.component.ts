import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Classified } from "../classified.model";
import { ClassifiedsService } from "../classifieds.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-classified-new",
  templateUrl: "./classified-new.component.html",
  styleUrls: ["./classified-new.component.scss"]
})
export class ClassifiedNewComponent implements OnInit {
  @ViewChild("myForm") submitAd: NgForm;
  newAd: Classified;
  defaultCondition: string = "Used";
  //
  constructor(
    private classifiedsService: ClassifiedsService,
    private router: Router
  ) {}

  ngOnInit() {}
  onSubmit() {
    this.newAd = new Classified(
      this.submitAd.value.name,
      this.submitAd.value.description,
      this.submitAd.value.imageUrl,
      this.submitAd.value.price
    );

    this.classifiedsService.postClassified(this.newAd).subscribe(result => {
      this.router.navigate(["/classifieds"]);
    }),
      error => console.log(error);
  }
}
