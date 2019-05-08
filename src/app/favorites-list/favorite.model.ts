export class Favorite {
  public email: string;
  public classifiedId: string;

  constructor(email: string, classifiedId: string) {
    (this.email = email), (this.classifiedId = classifiedId);
  }
}
