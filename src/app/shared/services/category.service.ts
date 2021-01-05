import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Category } from "../models";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private basePath = "api/categorys";

  constructor(private http: HttpClient) {}

  getAll(urlParams = ""): Observable<Category[]> {
    const url = this.basePath + "?" + urlParams;

    return this.http.get(url).pipe(
      map(this.jsonDataToCategorys),
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

  getCategorysToWatchNext(): Observable<Category[]> {
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

  private jsonDataToCategorys(jsonData: any[]): Category[] {
    const categorys: Category[] = [];

    jsonData.forEach((element) => categorys.push(Category.fromJson(element)));

    return categorys;
  }

  private jsonDataToCategory(jsonData: any): Category {
    return Category.fromJson(jsonData);
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISICAO", error);
    return throwError(error);
  }
}
