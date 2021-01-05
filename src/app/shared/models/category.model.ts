export class Category {
  constructor(
    public id?: number,
    public name?: string,
    public img?: string,
    public description?: string
  ) {}

  public static fromJson(jsonData: any): Category {
    return Object.assign(new Category(), jsonData);
  }
}
