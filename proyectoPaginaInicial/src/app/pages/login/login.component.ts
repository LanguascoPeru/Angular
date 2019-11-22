import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { UsuarioModel } from '../../models/usuario.model';
import { LoginService } from '../../services/login.service';
 
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  usuario : UsuarioModel; 
  isLoggedIn = false;
  
  constructor( private loginService: LoginService, private router:Router ) {
 
    this.loginService.getLoginStatus()
        .subscribe(status => this.isLoggedIn = status);
   }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.usuario_login='david';
    this.usuario.password='123';
  }


  login(form : NgForm){
    if (form.invalid) { return;}    
    Swal.fire({
      title: 'Sistemas',
      text: 'Espere por favor',
      icon: 'info',
    })
    Swal.showLoading();
    this.loginService.iniciarSesion(this.usuario)
        .subscribe((data)=>{
          Swal.close();
          if (data.ok) {
            this.loginService.updateLoginStatus(true);
            this.router.navigateByUrl('/home');
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error al autenticar',
              text: data.mensaje
            })
          }
        }, (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Error al autenticar',
            text: err.error.error.message
          })
        })
  }

}
