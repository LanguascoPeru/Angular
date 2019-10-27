import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  menus = [];
  isLoggedIn = false;

  constructor(private loginService:LoginService, private router:Router) { 

  }

  ngOnInit() {
    /// escuchando cambios que se puedan producir en el observable...
    this.loginService.getLoginStatus()
    .subscribe(status => {
      this.isLoggedIn = status
      this.crearMenuSistema();
    });
  }


  crearMenuSistema(){  
    if (this.isLoggedIn) {
      this.menus =this.loginService.crearMenuSistema();    
    }else{
      this.menus=[];
    }
  }


  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }


  cerrarSesion(){
    this.loginService.logOut();
    this.menus=[];
    this.loginService.updateLoginStatus(false);
    this.router.navigateByUrl('/home');
  }



}
