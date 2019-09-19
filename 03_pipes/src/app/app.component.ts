import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string= "Julio Cesar";
  nombre2:string= "Julio cesar lanGUAsco baRRon";
  arreglo:number [] = [1,2,3,4,5,6,7,8,9,10];
  PI:number=3.1415926535;
  ax:number= 0.234;
  salario:number =12345;

  heroe:{} = {
    nombre: 'logan',
    clave:'Wolwerine',
    edad:500,
    direccion:{
      calle:'Primera',
      casa:'19'
    }
  }

  valorPromesa= new Promise ( (resolve, reject)=>{
      setTimeout(() => {
        resolve('Llego la data');
      }, 3500);
  } )

  ///---fecha:string= '18/09/2019';

  fecha = new Date();

  video = "UCalSQSsV0o";

  palabra:string="juan";
  activar:boolean=true;

}
