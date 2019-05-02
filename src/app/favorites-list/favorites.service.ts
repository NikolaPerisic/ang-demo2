import { Classified } from "../classifieds/classified.model";

export class FavoritesService {
  favoritesArr = [
    new Classified(
      "Test Ads",
      "This is testing",
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Whippet_Safety_Bicycle.jpg",
      430
    )
  ];
  //
  addNewToFavorites(item: Classified) {
    this.favoritesArr.push(item);
    console.log(this.favoritesArr);
  }
  getFavorites() {
    return this.favoritesArr.slice();
  }
}
