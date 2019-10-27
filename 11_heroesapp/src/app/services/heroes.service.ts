import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url:string= 'https://login-app-47ae1.firebaseio.com';
  constructor(private http: HttpClient) { 

  }
  crearHeroe(heroe: HeroeModel){
    console.log('entrando a crearHeroe')
      return this.http.post(`${this.url}/heroes.json`,heroe)
                 .pipe(
                   map((resp:any)=>{ 
                      heroe.id=resp.name;
                      return heroe;
                   }));
  }

  actualizarHeroe(heroe: HeroeModel){
    // generando un clon del objecto para eliminar una propiedad para que no la cree al momento de actualizar
    let heroesTemps:any={};
    heroesTemps =heroe;
    delete heroesTemps.id; 
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`,heroesTemps); 
  }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`)
                .pipe(map( this.crearArreglo));
 
  }

  private crearArreglo(heroesObj: Object){
    if (heroesObj ===null) {
      return [];
    }
    // return Object.values(heroesObj);

    const heroes:HeroeModel[] = [];

    Object.keys(heroesObj).forEach(key=>{  
      const heroe: HeroeModel = heroesObj[key];
      heroe.id=key;

      heroes.push(heroe);
    })

    return heroes;
  }
  getHeroeId(id:string){
     return this.http.get(`${this.url}/heroes/${id}.json`) 
  }

  borrarHeroe(id:string){
    return this.http.delete(`${this.url}/heroes/${id}.json`) 
  }

}
 