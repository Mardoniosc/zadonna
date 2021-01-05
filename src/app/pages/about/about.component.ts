import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  imagePath = "assets/logo.png"
  title = 'ZADONNA MODA OFICIAL'
  name = 'Sistema de loja online ZADONNA com as peças disponíveis'
  description = 'Loja de roupas destinada a mulheres, com estilo próprios.'
  buttonText = 'SAIBA MAIS' 

  ngOnInit() {
  }

}
