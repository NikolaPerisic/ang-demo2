import { Injectable } from "@angular/core";

@Injectable()
export class SearchService {
  constructor() {}
  searchTerm = "";

  userInput(term: string) {
    this.searchTerm = term;
    return this.searchTerm;
  }
  searchedString() {
    return this.searchTerm;
  }
}
