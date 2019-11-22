import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private loginService:LoginService, private router:Router){
  }

  canActivate():  boolean {
    if (!this.loginService.estadoAutentificado()) {
        this.router.navigate(['/login']);
        return false;
    }else{
      return true;
    } 
  }
  
}
