import { Classified } from "../classifieds/classified.model";

export class User {
  public id: string;
  public email: string;
  public username: string;
  public favorites: Classified[];

  constructor(id: string, email: string, username: string, favorites: []) {
    (this.id = id),
      (this.email = email),
      (this.username = username),
      (this.favorites = favorites);
  }
}
