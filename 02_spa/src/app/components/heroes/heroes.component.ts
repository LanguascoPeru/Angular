import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';
//--- sirve para navegar hacia otras paginas
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',  
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit { 

  heroes:Heroe [] = [];

  constructor(private _heroesService:HeroesServices, private _router:Router ) {
    console.log('constructor');
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  
  verHeroe(index:number){
    ///---navegar hacia una nueva pagina parecido a un link
     this._router.navigate(['/heroe', index])
  }

}
