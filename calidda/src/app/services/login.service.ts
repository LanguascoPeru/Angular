import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators'; 
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLogeado:boolean=false;
  dataLogeado= [];
    //-----creando el observable --
    private isLoggedIn = new Subject<boolean>();
    
  constructor(private http:HttpClient) {
    this.leerSesion();
   }
   
    //-----creando el observable --
    getLoginStatus() {
      return this.isLoggedIn;
    }
    
    updateLoginStatus(status: boolean) {
      this.isLoggedIn.next(status);
    }
    //---- fin del observable
  

   iniciarSesion(usuario:UsuarioModel){    
    let parametros = new HttpParams();
    parametros = parametros.append('option', '1');
    parametros = parametros.append('filters', usuario.usuario_login + '|' + usuario.password);

    return this.http.get('http://192.168.10.25:8086/api/UsuarioAccesos',{params: parametros})
            .pipe(map((res)=>{
                  if(!res){
                    return {
                      ok:false,
                      mensaje:'Hubo un error verifique'
                    }
                  }else{
                    this.guardarSesion(res);
                    return {
                      ok:true,
                      mensaje:'OK',
                      data: res
                    }
                  }    
              }))
   } 


   private guardarSesion(data:any){
      this.usuarioLogeado =true;
      localStorage.setItem('data_usuario', JSON.stringify(data));
  }

  
  leerSesion(){    
    // si es que existe una  variable creada en el local storage, leemos su valor
    if (localStorage.getItem('data_usuario')) { 
      this.usuarioLogeado =true;
      this.dataLogeado =  JSON.parse(localStorage.getItem("data_usuario")).listPermisos; 
    }else{  
      this.usuarioLogeado =false;
      this.dataLogeado = [];
    }
    ///--- activando el Observable--
    this.isLoggedIn.next(false);

    return  this.dataLogeado;
  }

  estadoAutentificado():boolean{
    if (this.usuarioLogeado) { 
      return true; 
    }else{ 
      return false; 
    }
  }

  crearMenuSistema(){ 

    if ( this.dataLogeado.length ==0) {
      this.leerSesion();
      return this.dataLogeado;
    }else{
      return this.dataLogeado;
    }

  }
  
  logOut(){
    localStorage.removeItem('data_usuario');
  }

}
