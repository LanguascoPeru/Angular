import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 appResaltado> Demos <small> angular</small> </h1>
    <hr>     
    <app-ng-style></app-ng-style>    
    <br>
    <br> 
    <app-clases></app-clases>
    <br>    
    <p appResaltado [nuevoColor]="'red'">
     Hola Home
    </p> 
    <app-ng-switch> </app-ng-switch>    
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
