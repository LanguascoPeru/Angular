import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
// Para poder manipular informacion del formulario
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel ;
  recordarme:boolean=false;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
    this.usuario.email = "cesar.languasco@gmail.com";
    this.usuario.nombre = "rafaelito";
    this.usuario.password = "***";
  }

  // NgForm importarlo la referencia
  onSubmit(form:NgForm){

    if (form.invalid) {return }    
    Swal.fire({
      allowOutsideClick:false,
      type: 'info',
      text: 'Espere por favor'
    })
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario)
    .subscribe((data)=>{
      console.log(data);
      Swal.close();
      if (this.recordarme) {
          // crear una variable en el local storage
           localStorage.setItem('email', this.usuario.email);
      }     

      // redireccionar a otra pagina con codigo 
      this.router.navigateByUrl('/home');
    }, (err)=>{

      Swal.fire({
        type: 'error',
        title: 'Error al registrar',
        text: err.error.error.message
      })
      
    })

  }


}
