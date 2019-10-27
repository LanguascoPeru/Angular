import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario : UsuarioModel; 
  recordarme:boolean = false;


  constructor(private auth:AuthService,  private router:Router) { 

              }
  ngOnInit() {
    this.usuario = new UsuarioModel();

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme=true;
    }else{
      this.usuario.email = '';
      this.recordarme=false;
    }

  }

  login(form :NgForm){
    if (form.invalid) { return;}

    Swal.fire({
      allowOutsideClick:false,
      type: 'info',
      text: 'Espere por favor'
    })
    Swal.showLoading();

    this.auth.login(this.usuario)
    .subscribe((data)=>{
        Swal.close();
        console.log(data);             
        if (this.recordarme) {
            // crear una variable en el local storage
             localStorage.setItem('email', this.usuario.email);
        }        
        this.router.navigateByUrl('/home');
    }, (err)=>{
      Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      })
 
    })

  }

}
