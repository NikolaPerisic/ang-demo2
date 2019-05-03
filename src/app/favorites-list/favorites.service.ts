import { Classified } from "../classifieds/classified.model";

export class FavoritesService {
  private favoritesArr: Classified[] = [];
  //
  addNewToFavorites(item: Classified) {
    let flag: boolean = false;
    this.favoritesArr.map(el => {
      if (el.name === item.name) {
        flag = true;
      }
    });
    if (!flag) {
      this.favoritesArr.push(item);
    }
  }
  getFavorites() {
    return this.favoritesArr;
  }
  removeFavorite(item: Classified) {
    this.favoritesArr.map((el, i) => {
      if (el.name === item.name) {
        this.favoritesArr.splice(i, 1);
      }
    });
    return this.favoritesArr;
  }
}
