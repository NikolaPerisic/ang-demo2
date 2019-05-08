export class Classified {
  public name: string;
  public description: string;
  public imageUrl: string;
  public price: number;
  public id: string;

  constructor(
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.id = id;
  }
}
