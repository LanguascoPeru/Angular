import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators'; 
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private url= 'https://identitytoolkit.googleapis.com/v1/accounts:';
   private apiKey = 'AIzaSyDL7lHz7JFh9e7bFTklSRLD1Zs3mZUHiBg';
  
   userToken:string="";

    //crear nuevos usurarios
   //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

   
    //login
   //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http:HttpClient) { 
    console.log('entro al servicio')
    this.leerToken();
  }

  logOut(){
    localStorage.removeItem('token');
  }
  
  login(usuario:UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(
      `${ this.url}signInWithPassword?key=${ this.apiKey}`,authData
    ).pipe(map((res)=>{
      console.log('entro en el mapa del rxjs');
      this.guardarToken(res['idToken'])
      return res;
    }));
  }

  nuevoUsuario(usuario:UsuarioModel){ 
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    // map () se va a ejecturar solo  si el metodo   post funciona
    return this.http.post(
      `${ this.url}signUp?key=${ this.apiKey}`,authData
    ).pipe(map((res)=>{
        console.log('entro en el mapa del rxjs');
        this.guardarToken(res['idToken'])
        return res;
    }));

  }

  private guardarToken(idToke:string){
  this.userToken = idToke;  
  // crear una variable en el local storage
   localStorage.setItem('token', idToke);
  }

  leerToken(){    
    // si es que existe una  variable creada en el local storage, leemos su valor
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken ="";
    }
    return  this.userToken;
  }


  estadoAutentificado():boolean{
    if (this.userToken.length> 2) {
      return true; 
    }else{
      return false; 
    }
  }


}
