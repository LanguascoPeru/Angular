import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';

//---para obtener el parametro que viene por el url de la pagina ejm heroe/id
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-buscar',
  templateUrl: './heroe-buscar.component.html',
})
export class HeroeBuscarComponent implements OnInit {

  heroe:any={};
  constructor( private _activarteRoute : ActivatedRoute, private heroesServices: HeroesServices) { 

        //--- propiedad que se obtiene por el url debe de ser igual al que se definio en el app.routes.
          this._activarteRoute.params.subscribe( param =>{
          this.heroe= this.heroesServices.buscarHeroes(param['nombre'])
        })

  }

  ngOnInit() {
 
  }

}
