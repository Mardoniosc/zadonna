import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Category } from "../models";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private basePath = "api/categories";

  constructor(private http: HttpClient) {}

  getAll(urlParams = ""): Observable<Category[]> {
    const url = this.basePath + "?" + urlParams;

    return this.http.get(url).pipe(
      map(this.jsonDataToCategories),
      map((movies) => movies.sort((a, b) => b.id - a.id)),
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<Category> {
    const url = `${this.basePath}/${id}`;

    return this.http
      .get(url)
      .pipe(map(this.jsonDataToCategory), catchError(this.handleError));
  }

  getCategoriesToWatchNext(): Observable<Category[]> {
    return this.getAll("toWatchNext=true");
  }

  create(category: Category): Observable<Category> {
    return this.http
      .post(this.basePath, category)
      .pipe(map(this.jsonDataToCategory), catchError(this.handleError));
  }

  update(category: Category): Observable<Category> {
    const url = `${this.basePath}/${category.id}`;

    return this.http
      .put(url, category)
      .pipe(map(this.jsonDataToCategory), catchError(this.handleError));
  }

  delete(category: Category): Observable<any> {
    const url = `${this.basePath}/${category.id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }

  // ---------------------------------
  // PRIVATE METHODS
  // ---------------------------------

  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];

    jsonData.forEach((element) => categories.push(Category.fromJson(element)));

    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category {
    return Category.fromJson(jsonData);
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISICAO", error);
    return throwError(error);
  }
}
