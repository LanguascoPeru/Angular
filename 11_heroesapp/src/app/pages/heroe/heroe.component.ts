import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:HeroeModel = new HeroeModel();
  constructor(private heroesService :HeroesService,private route:ActivatedRoute) {
 
   }

  ngOnInit() {
    //obtener los parametros que vienen por la url
   const ID = this.route.snapshot.paramMap.get('id');

   if (ID ==='nuevo') {
     
   }else{
    this.heroesService.getHeroeId(ID)
        .subscribe((data:HeroeModel)=>{
          if (data===null) {
            return;
          }
          this.heroe = data; 
          this.heroe.id= ID;
        }, (err)=>{
          this.heroe=null;
        })
   }
  }

  guardar(form:NgForm){
    if (!form.valid) {
      console.log('formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick:false
    })
    Swal.showLoading();

    let peticion:Observable<any>;

    if (this.heroe.id) { /// actualizar
      console.log('editar')
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    }else{ // nuevo registro
      console.log('nuevo')
      peticion = this.heroesService.crearHeroe(this.heroe); 
    }
  
    peticion.subscribe((data)=>{
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se Actualizó correctamente',
        type: 'success'
      })
    })

  }

}
