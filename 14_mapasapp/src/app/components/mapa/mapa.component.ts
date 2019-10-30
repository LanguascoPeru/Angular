import { Component, OnInit, Inject } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

 
  lat = 51.678418;
  lng = 7.809007;
  marcadores:Marcador [] = []; 
  
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar ) {    
      if (!localStorage.getItem('marcadores')) {
        this.nuevoMarcador(this.lat, this.lng );
      }else{
        this.marcadores= JSON.parse(localStorage.getItem('marcadores'));
      }
   }

  ngOnInit() {
    
  }

  agregarMarcador(evento){ 
     this.nuevoMarcador(evento.coords.lat, evento.coords.lng );    
     this.openSnackBar('Marcador creado', 'Sistemas')
  }


  nuevoMarcador(lat:number, lng:number){
    const marcador = new  Marcador(lat, lng );
    this.marcadores.push(marcador); 
    this.guardarLocalStorage();
  }


  guardarLocalStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(index){
      this.marcadores.splice(index,1);
      this.guardarLocalStorage();
      this.openSnackBar('Marcador borrado', 'Sistemas')
  }

  ////----metodo de la alerta
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  edicionMarcador(marcador:Marcador){

     ///-- abriendo el modal hijo--- el otro componente, asi mismo se envia los datso del padre al hijo
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, descripcion:marcador.descripcion}
    });

    //-----recibiendo datos del hijo --- modal
    dialogRef.afterClosed().subscribe(data => { 
        if (!data) {
          return;
        }

        marcador.titulo = data.titulo;
        marcador.descripcion = data.descripcion;
        this.guardarLocalStorage();
        this.openSnackBar('Marcador Actualizado', 'Sistemas')
    });

  }

 

}


 