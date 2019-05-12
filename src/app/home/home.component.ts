import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { SearchService } from "../classifieds/classifieds-list/search.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit() {}
  search(term) {
    this.searchService.userInput(term);
    this.router.navigate(["/classifieds"]);
  }
}
