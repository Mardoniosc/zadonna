import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let categories = [
      {
        id: 1,
        name: "Blusas",
        img: "assets/blusas.jpg",
        description: "Alguma descrição da categoria",
      },
      {
        id: 3,
        name: "Shorts",
        img: "assets/shorts.jpg",
        description: "Alguma descrição da categoria",
      },
      {
        id: 4,
        name: "Calças",
        img: "assets/calcas.jpg",
        description: "Alguma descrição da categoria",
      },
      {
        id: 5,
        name: "Conjuntos",
        img: "assets/conjuntos.jpg",
        description: "Alguma descrição da categoria",
      },

    ];
    return { categories };
  }
}
