import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
 
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private aut:AuthService, private router:Router){

  }
  canActivate():  boolean {
    console.log('AuthGuard');

    if (!this.aut.estadoAutentificado()) {
        console.log('No estás logueado');
        this.router.navigate(['/login']);
        return false;
    }else{
      return true;
    } 
  }
  
}
