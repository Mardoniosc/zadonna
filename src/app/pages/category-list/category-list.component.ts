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
  newCategory: string = "";
  imagePath = "assets/logo.png"


  ngOnInit() {
    this.loadCategory();
  }

  createCategory() {
    if (!this.newCategory) {
      return;
    }

    const category = Category.fromJson({ name: this.newCategory });

    this.categoryService.create(category).subscribe(
      (category) => {
        this.categories.unshift(category);
        this.newCategory = "";
      },
      (err) => console.error(err)
    );
  }

  private loadCategory() {
    this.categoryService.getAll().subscribe(
      (categories) => (this.categories = categories),
      (err) => console.error(err)
    );
  }
}
