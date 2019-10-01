import { Component, OnInit } from '@angular/core';
//---para trabajar con las rutas
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(params=>{
      console.log('ruta hija usuario nuevo');
      console.log(params['id']);
   })
   }

  ngOnInit() {
  }

}
