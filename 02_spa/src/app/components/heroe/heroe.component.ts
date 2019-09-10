import { Component } from '@angular/core';
//---para obtener el parametro que viene por el url de la pagina ejm heroe/id
import { ActivatedRoute } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
 
  heroe:any={};

  constructor(private _activarteRoute:ActivatedRoute,private _heroesService:HeroesServices) { 
    //--- propiedad que se obtiene por el url debe de ser igual al que se definio en el app.routes.
    this._activarteRoute.params.subscribe( param =>{
      this.heroe=this._heroesService.getHeroe(param['id']);
      console.log( this.heroe);
    })
  } 
}
