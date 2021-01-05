import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  imagePath = "assets/logo.png"

  constructor() { }

  categories = [
    { id: 1, name: 'Blusas', img: this.imagePath, },
    { id: 2, name: 'Body', img: this.imagePath, },
    { id: 3, name: 'Calças', img: this.imagePath, },
    { id: 4, name: 'Camisas', img: this.imagePath, },
    { id: 5, name: 'Conjuntos', img: this.imagePath, },
    { id: 6, name: 'Vestidos', img: this.imagePath, },
  ]

  ngOnInit() {
  }

}