import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border:1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {
  
   usuario:Object = {
     nombre:'rafaelito',
     apellido: 'languasco',
     email: 'rafa.languasco@gmail.com'
   }
  constructor() { }

  ngOnInit() {
  }

  guardar(form:NgForm){
    console.log('entrooo')
    console.log(form);
  }

}
