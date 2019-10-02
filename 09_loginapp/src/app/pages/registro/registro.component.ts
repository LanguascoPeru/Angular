import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
// Para poder manipular informacion del formulario
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel ;

  constructor() { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
    this.usuario.email = "cesar.languasco@gmail.com";
    this.usuario.nombre = "rafaelito";
    this.usuario.password = "***";
  }

  // NgForm importarlo la referencia
  onSubmit(form:NgForm){

    if (form.invalid) {
      return;
    }

    console.log('formulario enviado');
    console.log(this.usuario);
    console.log(form);
  }


}
