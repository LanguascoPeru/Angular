import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': '15px'}">
       Etiqueta con stylo dinamico
    </p>
    <p [ngStyle]="{'font-size': tamanio + 'px'}">
      Etiqueta con estilo dinamico
   </p>
   <p [style.fontSize.px]="tamanio">
      Etiqueta con stylo dinamico
   </p>

   <button class="btn btn-primary" (click)="tamanio= tamanio + 5"> 
      <i class="fa fa-plus"></i>
   </button>

   <button class="btn btn-danger" (click)="tamanio= tamanio - 5">
       <i class="fa fa-minus"></i>
   </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio:number= 20;
  constructor() { }

  ngOnInit() {
  }

}
