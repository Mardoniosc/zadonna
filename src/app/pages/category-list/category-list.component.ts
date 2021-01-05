import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  imgBlusas = "assets/blusas.jpg"
  imgCalcas = "assets/calcas.jpg"
  imgShorts = "assets/shorts.jpg"
  imgVestidos = "assets/vestidos.jpg"
  imgConjuntos = "assets/conjuntos.jpg"

  constructor() { }

  categories = [
    { id: 1, name: 'Blusas', img: this.imgBlusas, description: 'Alguma descrição da categoria' },
    { id: 3, name: 'Shorts', img: this.imgShorts, description: 'Alguma descrição da categoria' },
    { id: 4, name: 'Calças', img: this.imgCalcas, description: 'Alguma descrição da categoria' },
    { id: 5, name: 'Conjuntos', img: this.imgConjuntos, description: 'Alguma descrição da categoria' },
    { id: 6, name: 'Vestidos', img: this.imgVestidos, description: 'Alguma descrição da categoria' },
    { id: 1, name: 'Blusas', img: this.imgBlusas, description: 'Alguma descrição da categoria' },
    { id: 3, name: 'Shorts', img: this.imgShorts, description: 'Alguma descrição da categoria' },
    { id: 4, name: 'Calças', img: this.imgCalcas, description: 'Alguma descrição da categoria' },
    { id: 5, name: 'Conjuntos', img: this.imgConjuntos, description: 'Alguma descrição da categoria' },
    { id: 6, name: 'Vestidos', img: this.imgVestidos, description: 'Alguma descrição da categoria' },
  ]

  ngOnInit() {
  }

}
