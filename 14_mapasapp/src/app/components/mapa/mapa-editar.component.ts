import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Marcador } from '../../classes/marcador.class';

///----trabajar con formularios
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent  {
    
  /// formularios radiactivos--
    forma: FormGroup;

    constructor( public fb : FormBuilder, public dialogRef: MatDialogRef<MapaEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: Marcador) {
      this.forma = fb.group({
          'titulo' : data.titulo,
          'descripcion': data.descripcion
      });
    } 

    onNoClick(): void {
      this.dialogRef.close();
    }

    guardarCambios( ){
      /// enviando datos al padre 
       this.dialogRef.close({
         titulo: this.forma.value.titulo,
         descripcion: this.forma.value.descripcion         
       });
    }

}
