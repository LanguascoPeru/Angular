import { Component, OnInit } from '@angular/core';
//---para trabajar con las rutas
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
     //---obtener el parametro que viene por la url
     this.activatedRoute.params.subscribe(params=>{
        console.log('ruta padre');
        console.log(params['id']);
     })

   }

  ngOnInit() {
  }

}
