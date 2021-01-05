import { Component, OnInit } from "@angular/core";
import { Category } from "../../shared/models";
import { CategoryService } from "../../shared/services";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"],
})
export class CategoryListComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];

  ngOnInit() {
    this.loadCategory();
  }

  private loadCategory() {
    this.categoryService.getAll().subscribe(
      (categories) => (this.categories = categories),
      (err) => console.error(err)
    );
  }
}
