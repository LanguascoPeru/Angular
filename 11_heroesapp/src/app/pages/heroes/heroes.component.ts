import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:HeroeModel [];
  cargando:boolean= false;

  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.cargando=true;
    this.heroesService.getHeroes().subscribe((res)=>{
      this.cargando=false;
      this.heroes = res; 
     })  
  }

  eliminadoHeroe(heroe:HeroeModel, index:number){
    Swal.fire({
      title: 'Esta seguro ?',
      text: 'Esta seguro de eliminar a ' + heroe.nombre ,
      type: 'question',
      showConfirmButton: true,
      showCancelButton:true
    }).then((res)=>{
      if (res.value === true) {
        this.cargando=true;
        this.heroesService.borrarHeroe(heroe.id).subscribe((data)=>{
          this.cargando=false;
          this.heroes.splice(index,1);
        })

      }
    })
  }

}
