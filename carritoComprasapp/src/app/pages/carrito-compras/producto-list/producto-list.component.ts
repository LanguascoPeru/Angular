import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent  {  
 
  @Input() ListProduct:any[] = [];
  constructor() {
  }

 

}
