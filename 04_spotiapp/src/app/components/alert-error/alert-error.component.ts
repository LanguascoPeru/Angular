import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html'
})



export class AlertErrorComponent {

  @Input() valorError:string = "";
  @Input() flagError:boolean = false;
  
  constructor() { }
 
}
